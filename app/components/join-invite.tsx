"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

const PACKAGE_NAME = "live.raydio.app";
const APP_SCHEME = "raydio";
/** Matches Android join token rules: URL-safe, 8–64 chars. */
const TOKEN_RE = /^[A-Za-z0-9_-]{8,64}$/;

type JoinInviteProps = {
  token: string;
};

function isValidToken(token: string): boolean {
  return TOKEN_RE.test(token);
}

/**
 * Build an Android intent URL that opens the verified App Link in the store
 * package. Falls back to the same page if the app is missing.
 */
function androidIntentUrl(token: string, webFallback: string): string {
  const path = `www.raydio.live/j/${encodeURIComponent(token)}`;
  const fallback = encodeURIComponent(webFallback);
  return `intent://${path}#Intent;scheme=https;package=${PACKAGE_NAME};S.browser_fallback_url=${fallback};end`;
}

function customSchemeUrl(token: string): string {
  return `${APP_SCHEME}://j/${encodeURIComponent(token)}`;
}

function httpsAppLink(token: string): string {
  return `https://www.raydio.live/j/${encodeURIComponent(token)}`;
}

export function JoinInvite({ token }: JoinInviteProps) {
  const valid = isValidToken(token);
  const [status, setStatus] = useState<"idle" | "opening" | "waiting">(
    "idle",
  );

  const webUrl = useMemo(() => httpsAppLink(token), [token]);
  const schemeUrl = useMemo(() => customSchemeUrl(token), [token]);

  const tryOpenApp = useCallback(() => {
    if (!valid || typeof window === "undefined") return;

    setStatus("opening");

    const ua = navigator.userAgent || "";
    const isAndroid = /Android/i.test(ua);
    const isIOS = /iPhone|iPad|iPod/i.test(ua);

    // Prefer platform-native handoff. Verified App Links usually intercept
    // before this page loads on Android; this covers browser / open-in-tab cases.
    if (isAndroid) {
      window.location.href = androidIntentUrl(token, webUrl);
    } else if (isIOS) {
      window.location.href = schemeUrl;
    } else {
      // Desktop: custom scheme may prompt if a handler is registered.
      window.location.href = schemeUrl;
    }

    // If the app does not take focus, user stays on this page.
    window.setTimeout(() => setStatus("waiting"), 1500);
  }, [schemeUrl, token, valid, webUrl]);

  // Auto-attempt once on mobile so invite links feel instant.
  useEffect(() => {
    if (!valid) return;
    const ua = navigator.userAgent || "";
    const isMobile = /Android|iPhone|iPad|iPod/i.test(ua);
    if (!isMobile) return;

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
          <a href="/#download" className="btn-secondary h-11 px-6 text-sm">
            Get the app
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
        Open the app to join instantly. If Raydio isn&apos;t installed yet, get
        it first — then tap this link again.
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
        <a
          href="/#download"
          className="btn-secondary h-11 w-full px-6 text-sm sm:w-auto"
        >
          Get the app
        </a>
      </div>

      {status === "waiting" && (
        <p className="mt-6 text-sm leading-relaxed text-gray-500">
          Nothing opened? Install Raydio, then tap{" "}
          <strong className="font-medium text-gray-700">Open in Raydio</strong>{" "}
          again. On Android, verified App Links open the app automatically when
          it&apos;s installed.
        </p>
      )}

      <p className="mt-8 font-mono text-xs text-gray-400 break-all">
        {webUrl}
      </p>
    </div>
  );
}
