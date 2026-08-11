"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

const PACKAGE_NAME = "live.raydio.app";
const APP_SCHEME = "raydio";
/** Official Play listing for the store package (matches API / app defaults). */
const PLAY_STORE_URL = `https://play.google.com/store/apps/details?id=${PACKAGE_NAME}`;
const PLAY_STORE_MARKET_URL = `market://details?id=${PACKAGE_NAME}`;
/** Matches Android join token rules: URL-safe, 8–64 chars. */
const TOKEN_RE = /^[A-Za-z0-9_-]{8,64}$/;

type JoinInviteProps = {
  token: string;
};

function isValidToken(token: string): boolean {
  return TOKEN_RE.test(token);
}

/**
 * Android intent: open verified App Link in the store package.
 * If the app is not installed, fall through to the Play Store listing.
 */
function androidIntentUrl(token: string): string {
  const path = `www.raydio.live/j/${encodeURIComponent(token)}`;
  const fallback = encodeURIComponent(PLAY_STORE_URL);
  return `intent://${path}#Intent;scheme=https;package=${PACKAGE_NAME};S.browser_fallback_url=${fallback};end`;
}

function customSchemeUrl(token: string): string {
  return `${APP_SCHEME}://j/${encodeURIComponent(token)}`;
}

function httpsAppLink(token: string): string {
  return `https://www.raydio.live/j/${encodeURIComponent(token)}`;
}

function isAndroidUa(): boolean {
  if (typeof navigator === "undefined") return false;
  return /Android/i.test(navigator.userAgent || "");
}

function isMobileUa(): boolean {
  if (typeof navigator === "undefined") return false;
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent || "");
}

export function JoinInvite({ token }: JoinInviteProps) {
  const valid = isValidToken(token);
  const [status, setStatus] = useState<"idle" | "opening" | "waiting">(
    "idle",
  );
  const [android, setAndroid] = useState(false);

  const webUrl = useMemo(() => httpsAppLink(token), [token]);
  const schemeUrl = useMemo(() => customSchemeUrl(token), [token]);

  useEffect(() => {
    setAndroid(isAndroidUa());
  }, []);

  const openPlayStore = useCallback(() => {
    if (typeof window === "undefined") return;
    // Prefer market:// on Android so the Play Store app opens when present.
    if (isAndroidUa()) {
      window.location.href = PLAY_STORE_MARKET_URL;
      // Safety: if market:// is ignored, land on the HTTPS listing.
      window.setTimeout(() => {
        window.location.href = PLAY_STORE_URL;
      }, 800);
      return;
    }
    window.open(PLAY_STORE_URL, "_blank", "noopener,noreferrer");
  }, []);

  const tryOpenApp = useCallback(() => {
    if (!valid || typeof window === "undefined") return;

    setStatus("opening");

    const ua = navigator.userAgent || "";
    const isAndroid = /Android/i.test(ua);
    const isIOS = /iPhone|iPad|iPod/i.test(ua);

    // Prefer platform-native handoff. Verified App Links usually intercept
    // before this page loads on Android; this covers browser / open-in-tab cases.
    if (isAndroid) {
      // browser_fallback_url → Play Store when app is not installed.
      window.location.href = androidIntentUrl(token);
    } else if (isIOS) {
      window.location.href = schemeUrl;
    } else {
      // Desktop: custom scheme may prompt if a handler is registered.
      window.location.href = schemeUrl;
    }

    // If the app does not take focus, user stays on this page.
    window.setTimeout(() => setStatus("waiting"), 1500);
  }, [schemeUrl, token, valid]);

  // Auto-attempt once on mobile so invite links feel instant.
  useEffect(() => {
    if (!valid) return;
    if (!isMobileUa()) return;

    // Small delay so the page paints first (better UX if app is missing).
    const id = window.setTimeout(() => tryOpenApp(), 350);
    return () => window.clearTimeout(id);
  }, [tryOpenApp, valid]);

  if (!valid) {
    return (
      <div className="dot-border mx-auto max-w-lg bg-white p-8 sm:p-10">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-gray-400">
          Invalid invite
        </p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
          This join link doesn&apos;t look right
        </h1>
        <p className="mt-4 leading-relaxed text-gray-500">
          Invite codes are 8–64 characters (letters, numbers,{" "}
          <code className="font-mono text-sm text-gray-700">-</code> and{" "}
          <code className="font-mono text-sm text-gray-700">_</code>). Ask your
          teammate for a fresh link from the Raydio app.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="/" className="btn-primary h-11 px-6 text-sm">
            Go to raydio.live
          </a>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary h-11 px-6 text-sm"
          >
            Get it on Google Play
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="dot-border mx-auto max-w-lg bg-white p-8 sm:p-10">
      <p className="text-xs font-medium uppercase tracking-[0.15em] text-gray-400">
        Join a channel
      </p>
      <h1 className="mt-3 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
        You&apos;re invited to a Raydio channel
      </h1>
      <p className="mt-4 leading-relaxed text-gray-500">
        Open the app to join instantly. Don&apos;t have Raydio yet? Install it
        from Google Play, then come back to this link.
      </p>

      <div className="dot-border mt-6 flex items-center gap-3 bg-gray-50/50 px-4 py-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M8 1v10M5 8l3 3 3-3" />
            <path d="M2 13h12" />
          </svg>
        </div>
        <div className="min-w-0">
          <p className="text-xs text-gray-400">Invite code</p>
          <p className="truncate font-mono text-sm text-gray-900">{token}</p>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <button
          type="button"
          onClick={tryOpenApp}
          className="btn-primary h-11 w-full px-6 text-sm sm:w-auto"
        >
          {status === "opening" ? "Opening Raydio…" : "Open in Raydio"}
        </button>
        <button
          type="button"
          onClick={openPlayStore}
          className="btn-secondary h-11 w-full px-6 text-sm sm:w-auto"
        >
          {android ? "Download on Google Play" : "Get it on Google Play"}
        </button>
      </div>

      {status === "waiting" && (
        <div className="mt-6 space-y-3">
          <p className="text-sm leading-relaxed text-gray-500">
            Nothing opened? You probably need the app first. Install Raydio from
            Google Play, then open this invite again to join the channel.
          </p>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex text-sm font-medium text-primary hover:text-primary-hover"
          >
            Open Play Store listing →
          </a>
        </div>
      )}

      <p className="mt-8 font-mono text-xs text-gray-400 break-all">
        {webUrl}
      </p>
    </div>
  );
}
