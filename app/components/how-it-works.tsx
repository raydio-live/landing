"use client";

import { motion, useInView } from "motion/react";
import { useRef, type ReactNode } from "react";
import { STAGGER } from "../lib/motion";
import { Highlight } from "./ui/highlight";
import { Ion } from "./ui/ionicons";
import { LiveBars } from "./ui/live-bars";
import { Reveal } from "./ui/reveal";
import { Section, SectionHeading } from "./ui/section";
import { TextRoll } from "./ui/text-roll";
import { useTicker } from "./ui/use-ticker";
import { useTyping } from "./ui/use-typing";

const LINK = "raydio.live/j/ops-crew";
const LINK_PREFIX = "raydio.live/j/".length;

/** Step 1: the invite link types itself, then "Join" is pressed. */
function InviteVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const { typed, done } = useTyping(LINK, ref);

  return (
    <div ref={ref} className="w-full max-w-[17rem] space-y-3">
      <div className="rounded-2xl bg-white p-4 shadow-card ring-1 ring-line">
        <p className="text-caption font-medium text-faint">Invite link</p>
        <p className="mt-1.5 font-mono text-[0.8125rem] text-heading">
          {typed.slice(0, LINK_PREFIX)}
          <span className="text-primary">{typed.slice(LINK_PREFIX)}</span>
          <span
            className={`ml-px inline-block h-[1.15em] w-[2px] translate-y-[0.2em] bg-primary ${
              done ? "animate-caret [animation-iteration-count:5]" : ""
            }`}
          />
        </p>
      </div>
      <div className="flex justify-end">
        <motion.span
          animate={{ scale: done ? [1, 0.93, 1] : 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className={`rounded-full px-4 py-2 text-caption font-semibold transition-colors duration-300 ${
            done ? "bg-primary text-white" : "bg-pale text-deep"
          }`}
        >
          Join channel
        </motion.span>
      </div>
    </div>
  );
}

/** Step 2: a "Joined Ops Crew" toast springs in over the quiet channel. */
function JoinedVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  return (
    <div ref={ref} className="relative w-full max-w-[17rem]">
      <div className="rounded-2xl bg-white p-4 shadow-card ring-1 ring-line">
        <div className="flex items-center justify-between">
          <p className="text-small font-semibold text-heading">Ops Crew</p>
          <span className="flex items-center gap-1.5 text-caption font-semibold text-primary">
            <span className="size-1.5 rounded-full bg-azure" />
            Radio on
          </span>
        </div>
        <div className="mt-3.5 space-y-2.5">
          {[72, 54, 64].map((w) => (
            <div key={w} className="flex items-center gap-2.5">
              <span className="size-5 rounded-full bg-mist" />
              <span className="h-2 rounded-full bg-mist" style={{ width: `${w}%` }} />
            </div>
          ))}
        </div>
      </div>
      <motion.div
        data-reveal=""
        initial={{ y: 18, opacity: 0, scale: 0.94 }}
        animate={inView ? { y: 0, opacity: 1, scale: 1 } : undefined}
        transition={{ type: "spring", bounce: 0.3, duration: 0.6, delay: 0.2 }}
        className="absolute -bottom-4 left-3 right-3 flex items-center gap-3 rounded-2xl bg-navy p-3 pr-3.5 text-white shadow-float"
      >
        <span className="grid size-8 place-items-center rounded-full bg-primary">
          <Ion name="checkmark" size={16} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-caption font-semibold">Joined Ops Crew</p>
          <p className="text-[0.75rem] text-sky">4 teammates listening</p>
        </div>
        <div className="flex -space-x-1.5">
          {["M", "A", "J"].map((initial, i) => (
            <motion.span
              key={initial}
              data-reveal=""
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : undefined}
              transition={{ type: "spring", bounce: 0.4, duration: 0.4, delay: 0.6 + i * 0.07 }}
              className="grid size-6 place-items-center rounded-full bg-deep text-[0.625rem] font-semibold ring-2 ring-navy"
            >
              {initial}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

const speakers = ["Marcus", "Alex", "Jordan"];

/** Step 3: bars move while the speaker label rolls from one teammate to the next. */
function TalkVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const tick = useTicker(ref, 2200);
  const speaker = speakers[tick % speakers.length];

  return (
    <div ref={ref} className="w-full max-w-[17rem] rounded-2xl bg-white p-4 shadow-card ring-1 ring-line">
      <div className="flex items-center gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-small font-bold text-white">
          <TextRoll text={speaker[0]} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-small font-semibold text-heading">
            <TextRoll text={`${speaker} is talking`} />
          </p>
          <p className="text-[0.75rem] text-faint">Wait for them to finish</p>
        </div>
        <LiveBars active className="bg-azure" />
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-line pt-3 text-[0.75rem] text-faint">
        <span>One speaker at a time</span>
        <span className="flex items-center gap-1.5 font-medium text-primary">
          <span className="size-1.5 rounded-full bg-azure" />
          Radio on
        </span>
      </div>
    </div>
  );
}

const steps: {
  title: string;
  description: string;
  visual: ReactNode;
}[] = [
  {
    title: "Tap an invite link",
    description:
      "Start a channel for your crew, or open the link you were sent. Sign in with an email code: no password, no social login.",
    visual: <InviteVisual />,
  },
  {
    title: "You’re on the channel",
    description:
      "You land straight in your crew’s channel. No hardware, no call setup, usually under a minute.",
    visual: <JoinedVisual />,
  },
  {
    title: "Hold to talk",
    description:
      "Press, speak, release. Low-latency voice, one speaker at a time, so the channel stays clear.",
    visual: <TalkVisual />,
  },
];

export function HowItWorks() {
  return (
    <Section>
      <SectionHeading
        title={
          <>
            Live in <Highlight>three moves</Highlight>.
          </>
        }
        description="From sign-up to talking on the channel in under a minute. No hardware, no call setup."
      />

      <ol className="mt-16 grid grid-cols-1 gap-6 md:mt-20 lg:grid-cols-3">
        {steps.map((step, i) => (
          <li key={step.title}>
            <Reveal variant="blur" delay={i * STAGGER} className="h-full">
              <article className="flex h-full flex-col rounded-[1.75rem] bg-tint p-2">
                <div
                  className="grid h-64 place-items-center rounded-[1.25rem] bg-[linear-gradient(180deg,#eaf2ff,#f4f8ff)] px-6 pb-8 pt-6"
                  aria-hidden="true"
                >
                  {step.visual}
                </div>
                <div className="px-6 pb-7 pt-7">
                  <p className="text-small font-semibold tabular-nums text-primary">
                    Step {i + 1}
                  </p>
                  <h3 className="mt-2 text-h3 font-semibold text-heading">{step.title}</h3>
                  <p className="mt-3 text-body text-muted">{step.description}</p>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
