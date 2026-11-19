"use client";

import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Ion } from "./ui/ionicons";
import { TextRoll } from "./ui/text-roll";

/** Each section is a "channel": the dial reads out which one you're tuned to. */
const channels = [
  { id: "top", label: "Home" },
  { id: "how-it-works", label: "How it works" },
  { id: "features", label: "Features" },
  { id: "use-cases", label: "Use cases" },
  { id: "private", label: "Privacy" },
  { id: "join", label: "Join a channel" },
  { id: "download", label: "Get the app" },
];

const RADIUS = 9;

/**
 * Fixed scroll-spy pill. The section name is the channel, the ring is the
 * signal (how far through the section you are), and the label rolls like a
 * frequency change. Click to open the full list; Escape closes it.
 */
export function RadioDial() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const progress = useMotionValue(0);
  const signal = useSpring(progress, { stiffness: 220, damping: 32, restDelta: 0.001 });

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const probe = window.innerHeight * 0.5;
      const rects = channels.map((c) => document.getElementById(c.id)?.getBoundingClientRect());
      let current = 0;
      rects.forEach((rect, i) => {
        if (rect && rect.top <= probe) current = i;
      });

      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) current = channels.length - 1;

      const rect = rects[current];
      const raw = rect ? (probe - rect.top) / Math.max(rect.height, 1) : 0;
      progress.set(atBottom ? 1 : Math.min(1, Math.max(0, raw)));
      setIndex(current);
      setVisible(window.scrollY > 160);
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [progress]);

  // Escape closes (and hands focus back); so does a press anywhere outside.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      triggerRef.current?.focus();
    };
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  const current = channels[index];
  const hidden = !visible;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-[max(1rem,env(safe-area-inset-bottom))] z-60 flex justify-center px-4"
      aria-hidden={hidden || undefined}
      inert={hidden}
    >
      <motion.div
        ref={rootRef}
        layout
        initial={false}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 16 }}
        // One radius for both states: at the closed height (~46px) 24px already reads as a
        // full pill, so the shape never switches mid-animation.
        style={{ borderRadius: 24, pointerEvents: visible ? "auto" : "none" }}
        transition={{
          layout: { type: "spring", bounce: 0, duration: 0.4 },
          default: { type: "spring", bounce: 0, duration: 0.45 },
        }}
        className="relative flex flex-col-reverse overflow-hidden border border-white/10 bg-navy/95 text-white shadow-float backdrop-blur-xl"
      >
        <motion.button
          ref={triggerRef}
          layout="position"
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="dial-menu"
          className="flex min-h-11 items-center gap-2.5 py-1.5 pl-2 pr-4 text-left transition-colors hover:bg-white/8"
        >
          <svg className="size-7 shrink-0 -rotate-90" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r={RADIUS} fill="none" stroke="rgb(255 255 255 / 0.16)" strokeWidth="2" />
            <motion.circle
              cx="12"
              cy="12"
              r={RADIUS}
              fill="none"
              stroke="var(--azure)"
              strokeWidth="2"
              strokeLinecap="round"
              pathLength={1}
              style={{ pathLength: signal }}
            />
          </svg>
          <span className="text-[0.6875rem] font-semibold tabular-nums tracking-[0.06em] text-sky">
            CH {String(index + 1).padStart(2, "0")}
          </span>
          <span className="sr-only">Current section:</span>
          <TextRoll text={current.label} className="min-w-[5.5rem] text-caption font-medium" />
          <Ion
            name="chevron-up"
            size={14}
            className={`text-sky transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </motion.button>

        {/* popLayout pulls the exiting menu out of flow at once, so the shell starts
            shrinking immediately instead of waiting for the fade to finish. */}
        <AnimatePresence initial={false} mode="popLayout">
          {open && (
            <motion.nav
              id="dial-menu"
              aria-label="Sections"
              layout="position"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.12, duration: 0.15 } }}
              exit={{ opacity: 0, transition: { duration: 0.08 } }}
              className="p-1.5 pb-0"
            >
              <ul className="min-w-60">
                {channels.map((channel, i) => {
                  const on = i === index;
                  return (
                    <li key={channel.id}>
                      <a
                        href={`#${channel.id}`}
                        aria-current={on ? "true" : undefined}
                        onClick={() => setOpen(false)}
                        className={`flex min-h-11 items-center gap-3 rounded-xl px-3 text-caption font-medium transition-colors ${
                          on ? "bg-white/12 text-white" : "text-[#c4dbff] hover:bg-white/8"
                        }`}
                      >
                        <span className="w-6 text-[0.6875rem] tabular-nums text-sky">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {channel.label}
                        {on && <span className="ml-auto size-1.5 rounded-full bg-azure" aria-hidden="true" />}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
