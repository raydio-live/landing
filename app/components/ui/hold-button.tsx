"use client";

import { motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { easeOutSoft } from "../../lib/motion";
import { Ion } from "./ionicons";

/**
 * Hold-to-talk. On press it scales to 0.96, a ring fills clockwise and the
 * button turns "on air"; on release everything springs back in ~250ms.
 * Works with pointer, touch, Space and Enter, and never gets stuck on.
 */
export function HoldButton({
  onChange,
  label = "Hold to talk (demo)",
  className = "",
}: {
  onChange?: (talking: boolean) => void;
  label?: string;
  className?: string;
}) {
  const [talking, setTalking] = useState(false);
  const talkingRef = useRef(false);

  const set = useCallback(
    (next: boolean) => {
      if (talkingRef.current === next) return;
      talkingRef.current = next;
      // A tiny haptic tick where supported (Android Chrome), like a real PTT key.
      if (next) navigator.vibrate?.(12);
      setTalking(next);
      onChange?.(next);
    },
    [onChange],
  );
  const start = useCallback(() => set(true), [set]);
  const stop = useCallback(() => set(false), [set]);

  // Never leave the demo stuck "on air" if the tab or window loses focus.
  useEffect(() => {
    if (!talking) return;
    const onVisibility = () => document.hidden && stop();
    window.addEventListener("blur", stop);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      window.removeEventListener("blur", stop);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [talking, stop]);

  return (
    <div className={`relative flex size-28 items-center justify-center ${className}`.trim()}>
      <svg viewBox="0 0 100 100" className="pointer-events-none absolute inset-0 -rotate-90" aria-hidden="true">
        <circle cx="50" cy="50" r="46" fill="none" stroke="var(--line-strong)" strokeWidth="2" />
        <motion.circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke="var(--azure)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={false}
          animate={{ pathLength: talking ? 1 : 0, opacity: talking ? 1 : 0 }}
          transition={
            talking
              ? { pathLength: { duration: 0.9, ease: easeOutSoft }, opacity: { duration: 0.1 } }
              : { type: "spring", bounce: 0, duration: 0.25 }
          }
        />
      </svg>
      <motion.button
        type="button"
        aria-label={label}
        aria-pressed={talking}
        animate={{ scale: talking ? 0.96 : 1 }}
        whileHover={talking ? undefined : { scale: 1.03 }}
        transition={{ type: "spring", bounce: 0, duration: 0.25 }}
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
        className={`relative flex size-[4.5rem] touch-none items-center justify-center rounded-full text-white transition-[background-image,box-shadow] duration-200 [-webkit-touch-callout:none] ${
          talking
            ? "bg-linear-to-b from-deep to-navy shadow-[0_8px_24px_rgba(10,31,77,0.45),0_0_0_6px_rgba(19,131,249,0.18),inset_0_1px_0_rgba(255,255,255,0.18)]"
            : "bg-linear-to-b from-[#0a6cf0] to-[#0757d0] shadow-[0_8px_24px_rgba(8,98,224,0.38),inset_0_1px_0_rgba(255,255,255,0.22)]"
        }`}
      >
        <Ion name="mic" size={28} />
      </motion.button>
    </div>
  );
}
