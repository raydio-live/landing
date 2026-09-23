"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import { SectionHeading } from "./ui/section-heading";
import { FadeIn } from "./ui/fade-in";
import { WaveformBars } from "./ui/waveform";

const useCases = [
  {
    id: "ops",
    title: "Field teams & ops",
    description: "Warehouses, delivery crews, on-site contractors — coordinate without stopping.",
    channel: "Dock 3",
    speaker: "Priya",
    role: "Shift lead",
    members: ["Leo", "Sam", "Nia", "Omar"],
  },
  {
    id: "events",
    title: "Events & venues",
    description: "Stage managers, security, production. Everyone on the same channel.",
    channel: "Stage Left",
    speaker: "Dana",
    role: "Stage manager",
    members: ["Kai", "Rosa", "Theo", "Ivy", "Ben", "Max"],
  },
  {
    id: "coaching",
    title: "Sports coaching",
    description: "Sidelines, dugouts, practice fields. Call the play without the delay.",
    channel: "Sideline",
    speaker: "Coach Reyes",
    role: "Head coach",
    members: ["Ana", "Jules"],
  },
  {
    id: "trips",
    title: "Friends & road trips",
    description: "Split up, stay connected. Like a radio, but in your group chat era.",
    channel: "Convoy",
    speaker: "Mia",
    role: "Car 2",
    members: ["Zoe", "Eli", "Ravi"],
  },
  {
    id: "family",
    title: "Family coordination",
    description: "Theme parks, airports, busy weekends. Quick check-ins, no fuss.",
    channel: "Park Day",
    speaker: "Mom",
    role: "Meeting point",
    members: ["Dad", "Lily", "Noah"],
  },
];

export function UseCases() {
  const [selected, setSelected] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const reduceMotion = useReducedMotion();
  const baseId = useId();
  const current = useCases[selected];

  const select = (i: number, focus = false) => {
    setSelected(i);
    const tab = tabRefs.current[i];
    if (!tab) return;
    if (focus) tab.focus({ preventScroll: true });
    // Keep the chosen chip visible in the horizontal strip on small screens.
    tab.scrollIntoView({ block: "nearest", inline: "nearest", behavior: reduceMotion ? "auto" : "smooth" });
  };

  // WAI-ARIA tabs: arrow keys move between crews, Home/End jump to the ends.
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const last = useCases.length - 1;
    const next =
      e.key === "ArrowDown" || e.key === "ArrowRight"
        ? selected === last ? 0 : selected + 1
        : e.key === "ArrowUp" || e.key === "ArrowLeft"
          ? selected === 0 ? last : selected - 1
          : e.key === "Home"
            ? 0
            : e.key === "End"
              ? last
              : null;
    if (next === null) return;
    e.preventDefault();
    select(next, true);
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading
        title="One channel, every crew."
        description="Built for crews who need clear voice now — not another meeting invite."
      />

      <div className="mt-14 grid grid-cols-[minmax(0,1fr)] gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-10">
        <FadeIn>
          <div
            role="tablist"
            aria-label="Use cases"
            onKeyDown={onKeyDown}
            className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-1 [scrollbar-width:none] lg:mx-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden"
          >
            {useCases.map((item, i) => {
              const isActive = i === selected;
              return (
                <button
                  key={item.id}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`${baseId}-tab-${item.id}`}
                  aria-selected={isActive}
                  aria-controls={`${baseId}-panel`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => select(i)}
                  className={`relative isolate shrink-0 rounded-full px-4 py-2.5 text-left transition-colors lg:rounded-2xl lg:px-5 lg:py-4 ${
                    isActive ? "text-foreground" : "text-muted hover:text-foreground lg:hover:bg-mist/60"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId={`${baseId}-highlight`}
                      className="absolute inset-0 -z-10 rounded-full bg-mist lg:rounded-2xl"
                      transition={{ type: "spring", stiffness: 380, damping: 34 }}
                    />
                  )}
                  <span className="block whitespace-nowrap text-[15px] font-semibold tracking-tight lg:text-lg">
                    {item.title}
                  </span>
                  <span
                    className={`hidden text-sm leading-relaxed text-muted lg:grid lg:transition-[grid-template-rows,opacity] lg:duration-300 ${
                      isActive ? "lg:grid-rows-[1fr] lg:opacity-100" : "lg:grid-rows-[0fr] lg:opacity-0"
                    }`}
                  >
                    <span className="overflow-hidden">
                      <span className="block pt-1">{item.description}</span>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div
            role="tabpanel"
            id={`${baseId}-panel`}
            aria-labelledby={`${baseId}-tab-${current.id}`}
            className="relative overflow-hidden rounded-3xl bg-mist p-4 sm:p-6"
          >
            <p className="px-2 pb-4 text-[15px] leading-relaxed text-muted lg:hidden">
              {current.description}
            </p>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current.id}
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? { opacity: 0, transition: { duration: 0 } } : { opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="rounded-2xl bg-white p-5 sm:p-6"
              >
                <div className="flex items-center justify-between text-[13px] font-medium text-faint">
                  <span>Channel</span>
                  <span className="inline-flex items-center gap-1.5 font-semibold text-brand">
                    <span className="h-1.5 w-1.5 rounded-full bg-signal animate-live-pulse" aria-hidden="true" />
                    Live
                  </span>
                </div>
                <p className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
                  {current.channel}
                </p>

                <div className="mt-6 flex items-center gap-3 rounded-2xl bg-brand-tint/70 p-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                    {current.speaker[0]}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-foreground">{current.speaker}</p>
                    <p className="text-xs font-medium text-brand">{current.role} · speaking</p>
                  </div>
                  <WaveformBars />
                </div>

                <div className="mt-5 flex items-center justify-between gap-4">
                  <div className="flex -space-x-2" aria-hidden="true">
                    {current.members.slice(0, 5).map((name) => (
                      <span
                        key={name}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-mist text-[11px] font-semibold text-muted ring-2 ring-white"
                      >
                        {name[0]}
                      </span>
                    ))}
                  </div>
                  <p className="text-[13px] text-faint">
                    {current.members.length} tuned in
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
