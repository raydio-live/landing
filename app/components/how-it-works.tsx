"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useRef, type ReactNode } from "react";
import { SectionHeading } from "./ui/section-heading";
import { FadeIn } from "./ui/fade-in";
import { WaveformBars } from "./ui/waveform";

function InviteVisual() {
  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl bg-white px-4 py-3">
      <p className="min-w-0 truncate font-mono text-[13px] text-foreground">
        raydio.live/j/<span className="text-brand">ops-crew</span>
      </p>
      <span className="shrink-0 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
        Join
      </span>
    </div>
  );
}

function HoldVisual() {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-white px-4 py-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-white">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
          <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
        </svg>
      </span>
      <p className="text-[13px] font-medium text-muted">Holding…</p>
      <div className="ml-auto">
        <WaveformBars count={10} className="bg-signal/80" />
      </div>
    </div>
  );
}

function ListenersVisual() {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3">
      <div className="flex -space-x-2">
        {["M", "A", "J", "S"].map((initial, i) => (
          <span
            key={initial}
            className={`flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-semibold ring-2 ring-white ${
              i === 0 ? "bg-brand text-white" : "bg-mist text-muted"
            }`}
          >
            {initial}
          </span>
        ))}
      </div>
      <p className="text-[13px] font-medium text-muted">4 hearing you live</p>
      <span className="ml-auto h-2 w-2 rounded-full bg-signal animate-live-pulse" aria-hidden="true" />
    </div>
  );
}

const steps: { title: string; description: string; visual: ReactNode }[] = [
  {
    title: "Create or join a channel",
    description:
      "Start a channel for your crew or join from a link. Sign in with email — no password, no social login.",
    visual: <InviteVisual />,
  },
  {
    title: "Hold to talk",
    description:
      "Press and hold the button, speak, release when done. Thumb-first design built for phones.",
    visual: <HoldVisual />,
  },
  {
    title: "Everyone hears you live",
    description:
      "Low-latency voice over the internet. One speaker at a time — clear channel, no chaos.",
    visual: <ListenersVisual />,
  },
];

export function HowItWorks() {
  const listRef = useRef<HTMLOListElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 70%", "end 60%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  return (
    <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 sm:py-32 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
      <div className="lg:sticky lg:top-32 lg:self-start">
        <SectionHeading
          align="left"
          title="Live in three moves."
          description="From sign-up to talking on the channel in under a minute. No hardware, no call setup."
        />
      </div>

      <ol ref={listRef} className="relative">
        {/* Progress rail that fills as you read down the steps. */}
        <span aria-hidden="true" className="absolute bottom-6 left-[calc(1.25rem-0.5px)] top-5 w-px bg-line" />
        <motion.span
          aria-hidden="true"
          className="absolute bottom-6 left-[calc(1.25rem-0.5px)] top-5 w-px origin-top bg-brand"
          style={{ scaleY: reduceMotion ? 1 : progress }}
        />

        {steps.map((step, i) => (
          <li key={step.title} className="relative grid grid-cols-[2.5rem_1fr] gap-5 pb-14 last:pb-0 sm:gap-7">
            <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-semibold tabular-nums text-foreground ring-1 ring-line">
              {i + 1}
            </span>
            <FadeIn delay={i * 0.05}>
              <h3 className="pt-1.5 text-xl font-semibold tracking-tight text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 max-w-md text-[15px] leading-relaxed text-muted">
                {step.description}
              </p>
              <div className="mt-6 max-w-md rounded-3xl bg-mist p-3" aria-hidden="true">
                {step.visual}
              </div>
            </FadeIn>
          </li>
        ))}
      </ol>
    </div>
  );
}
