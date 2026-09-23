"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { WaveformBars } from "./ui/waveform";

const crew = ["Marcus", "Alex", "Jordan", "Sam"];
const ROTATE_MS = 3200;

function MicIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
      <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
    </svg>
  );
}

function formatClock(seconds: number) {
  return `0:${String(Math.min(seconds, 59)).padStart(2, "0")}`;
}

/**
 * Interactive channel demo. Idle, the crew takes turns on air; press and hold
 * the button (pointer, touch, Space or Enter) and you take the channel.
 */
export function PhoneMockup({
  onTalkingChange,
}: {
  onTalkingChange?: (talking: boolean) => void;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { amount: 0.3 });
  const reduceMotion = useReducedMotion();

  const [talking, setTalking] = useState(false);
  const [speakerIndex, setSpeakerIndex] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const start = useCallback(() => {
    // A tiny haptic tick where supported (Android Chrome), like a real PTT key.
    navigator.vibrate?.(12);
    setSeconds(0);
    setTalking(true);
  }, []);
  const stop = useCallback(() => setTalking(false), []);

  useEffect(() => {
    onTalkingChange?.(talking);
    if (!talking) return;
    const id = window.setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => window.clearInterval(id);
  }, [talking, onTalkingChange]);

  // The crew takes turns while the demo is on screen and you're not talking.
  useEffect(() => {
    if (talking || !inView || reduceMotion) return;
    const id = window.setInterval(
      () => setSpeakerIndex((i) => (i + 1) % crew.length),
      ROTATE_MS,
    );
    return () => window.clearInterval(id);
  }, [talking, inView, reduceMotion]);

  // Never leave the demo stuck "on air" if the tab or window loses focus.
  useEffect(() => {
    if (!talking) return;
    const release = () => setTalking(false);
    const onVisibility = () => document.hidden && release();
    window.addEventListener("blur", release);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      window.removeEventListener("blur", release);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [talking]);

  const speaker = talking ? "You" : crew[speakerIndex];
  const listeners = crew.filter((name) => name !== speaker).slice(0, 3);

  return (
    <div ref={rootRef} className="relative mx-auto w-[272px] select-none sm:w-[296px]">
      <div className="relative rounded-[3rem] bg-ink p-2.5 shadow-[0_40px_80px_-24px_rgba(10,12,16,0.45),0_12px_24px_-12px_rgba(10,12,16,0.25)]">
        <div className="overflow-hidden rounded-[2.45rem] bg-white">
          <div className="flex items-center justify-center pt-3">
            <span className="h-5 w-24 rounded-full bg-ink" aria-hidden="true" />
          </div>

          <div className="flex items-center justify-between px-6 pb-2 pt-2">
            <span className="text-[10px] font-semibold tabular-nums text-faint">9:41</span>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand animate-live-pulse" />
              <span className="text-[10px] font-semibold tracking-[0.12em] text-brand">LIVE</span>
            </div>
          </div>

          <div className="border-y border-line px-5 py-3.5">
            <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-faint">Channel</p>
            <div className="mt-0.5 flex items-baseline justify-between">
              <p className="text-xl font-semibold tracking-tight text-foreground">Ops Crew</p>
              <p className="text-[11px] text-faint">{crew.length} listening</p>
            </div>
          </div>

          <div className="px-4 py-5">
            <div
              className={`rounded-2xl p-4 transition-colors duration-300 ${
                talking ? "bg-brand text-white" : "bg-brand-tint/70"
              }`}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  key={speaker}
                  initial={reduceMotion ? false : { scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 420, damping: 26 }}
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                    talking ? "bg-white text-brand" : "bg-brand text-white"
                  }`}
                >
                  {speaker[0]}
                </motion.div>
                <div className="min-w-0 flex-1">
                  <p
                    className={`truncate text-sm font-semibold ${
                      talking ? "text-white" : "text-foreground"
                    }`}
                  >
                    {speaker}
                  </p>
                  <p
                    className={`text-xs font-medium tabular-nums ${
                      talking ? "text-white/85" : "text-brand"
                    }`}
                  >
                    {talking ? `On air · ${formatClock(seconds)}` : "Speaking now"}
                  </p>
                </div>
                <WaveformBars className={talking ? "bg-white/80" : "bg-brand/60"} />
              </div>
            </div>

            <ul className="mt-3">
              {listeners.map((name) => (
                <motion.li
                  key={name}
                  layout={!reduceMotion}
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  className="flex items-center gap-3 px-2 py-2"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-mist text-[10px] font-semibold text-muted">
                    {name[0]}
                  </span>
                  <span className="text-[13px] font-medium text-muted">{name}</span>
                  <span className="ml-auto text-[10px] font-medium uppercase tracking-[0.1em] text-faint">
                    {talking ? "hearing you" : "tuned in"}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center bg-mist/70 px-5 pb-8 pt-6">
            <div className="relative flex h-28 w-28 items-center justify-center">
              <span
                className={`absolute inset-0 rounded-full border animate-pulse-ring ${
                  talking ? "border-brand/70" : "border-brand/40"
                }`}
                aria-hidden="true"
              />
              <span
                className="absolute inset-2 rounded-full border border-brand/25 animate-pulse-ring"
                style={{ animationDelay: "0.65s" }}
                aria-hidden="true"
              />
              <button
                type="button"
                aria-label="Hold to talk (demo)"
                aria-pressed={talking}
                onPointerDown={(e) => {
                  if (e.button !== 0) return;
                  e.currentTarget.setPointerCapture(e.pointerId);
                  start();
                }}
                onPointerUp={stop}
                onPointerCancel={stop}
                onLostPointerCapture={stop}
                onKeyDown={(e) => {
                  if (e.key !== " " && e.key !== "Enter") return;
                  e.preventDefault();
                  if (!e.repeat) start();
                }}
                onKeyUp={(e) => {
                  if (e.key === " " || e.key === "Enter") stop();
                }}
                onBlur={stop}
                onContextMenu={(e) => e.preventDefault()}
                className={`relative flex h-[4.5rem] w-[4.5rem] touch-none items-center justify-center rounded-full text-white shadow-[0_10px_28px_rgba(10,12,16,0.35),inset_0_1px_0_rgba(255,255,255,0.22)] transition-[transform,background-color] duration-200 [-webkit-touch-callout:none] ${
                  talking ? "scale-95 bg-brand" : "bg-ink hover:scale-[1.03]"
                }`}
              >
                <MicIcon size={30} />
              </button>
            </div>
            <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.16em] text-faint">
              {talking ? "Release when done" : "Hold to talk"}
            </p>
          </div>
        </div>
      </div>
      <p className="sr-only" aria-live="polite">
        {talking ? "You're on air." : ""}
      </p>
    </div>
  );
}
