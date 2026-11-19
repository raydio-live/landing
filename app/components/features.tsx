"use client";

import { motion } from "motion/react";
import { useRef, useState } from "react";
import { CopyButton } from "./ui/copy-button";
import { HoldButton } from "./ui/hold-button";
import { Highlight } from "./ui/highlight";
import { LiveBars } from "./ui/live-bars";
import { Reveal } from "./ui/reveal";
import { Section } from "./ui/section";
import { TextRoll } from "./ui/text-roll";
import { Tile } from "./ui/tile";
import { useTicker } from "./ui/use-ticker";

const PANEL = "w-full rounded-2xl bg-white ring-1 ring-line";

/** Press the button and the waveform follows your voice. */
function PushToTalkVisual() {
  const [talking, setTalking] = useState(false);
  return (
    <div className={`${PANEL} mx-auto flex max-w-[30rem] items-center gap-5 p-4 sm:gap-6 sm:p-5`}>
      <HoldButton onChange={setTalking} className="-my-2 shrink-0" />
      <div className="min-w-0 flex-1">
        <p className="flex items-center gap-2 text-small font-semibold text-heading">
          <span
            className={`size-2 rounded-full transition-colors ${talking ? "bg-azure" : "bg-line-strong"}`}
            aria-hidden="true"
          />
          <TextRoll text={talking ? "You are talking" : "Hold to talk"} />
        </p>
        <p className="mt-1 text-caption text-faint">Try it: press and hold the button</p>
        <div className="mt-4">
          <LiveBars active={talking} count={22} height="h-9" className="bg-azure" />
        </div>
      </div>
    </div>
  );
}

/** A real switch: the channel stays open while it's on. */
function ListenVisual() {
  const [on, setOn] = useState(true);
  return (
    <div className={`${PANEL} p-5`}>
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-small font-semibold text-heading">Radio on</p>
          <p className="mt-0.5 text-caption text-faint">
            <TextRoll text={on ? "Ops Crew · live" : "Paused"} />
          </p>
        </div>
        <button
          type="button"
          role="switch"
          aria-checked={on}
          aria-label="Live listen mode (demo)"
          onClick={() => setOn((v) => !v)}
          className={`relative flex h-7 w-12 shrink-0 items-center rounded-full p-1 transition-colors duration-200 after:absolute after:-inset-x-1 after:-inset-y-2 after:content-[''] ${
            on ? "justify-end bg-primary" : "justify-start bg-line-strong"
          }`}
        >
          <motion.span
            layout
            transition={{ type: "spring", bounce: 0, duration: 0.25 }}
            className="size-5 rounded-full bg-white shadow-sm"
          />
        </button>
      </div>
      <div className="mt-4">
        <LiveBars active={on} level={0.5} count={16} height="h-5" className="bg-azure/60" />
      </div>
    </div>
  );
}

const crew = ["Marcus", "Alex", "Jordan"];

/** The "Speaking" badge hands off between teammates, one at a time. */
function TurnTakingVisual() {
  const ref = useRef<HTMLUListElement>(null);
  const tick = useTicker(ref, 2000);
  const speaking = tick % crew.length;

  return (
    <ul ref={ref} className={`${PANEL} space-y-1 p-2.5`} aria-hidden="true">
      {crew.map((name, i) => {
        const on = speaking === i;
        return (
          <li key={name} className="relative isolate flex items-center gap-3 rounded-xl px-3 py-2.5">
            {on && (
              <motion.span
                layoutId="turn-taking-row"
                className="absolute inset-0 -z-10 rounded-xl bg-brand-tint"
                transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              />
            )}
            <span
              className={`grid size-7 place-items-center rounded-full text-[0.6875rem] font-semibold transition-colors duration-300 ${
                on ? "bg-primary text-white" : "bg-mist text-muted"
              }`}
            >
              {name[0]}
            </span>
            <span className="text-caption font-medium text-heading">{name}</span>
            <TextRoll
              text={on ? "Talking" : "Waits"}
              className={`ml-auto text-[0.75rem] font-semibold ${on ? "text-primary" : "text-faint"}`}
            />
          </li>
        );
      })}
    </ul>
  );
}

const channels = [
  { name: "Ops Crew", count: 4, live: true },
  { name: "Stage Left", count: 7, live: false },
  { name: "Sideline", count: 3, live: false },
];

/** Hover a channel and its three signal bars fill left to right in 150ms. */
function ChannelsVisual() {
  return (
    <ul className={`${PANEL} divide-y divide-line px-4`} aria-hidden="true">
      {channels.map((c) => (
        <li key={c.name} className="group flex items-center gap-2.5 py-3.5">
          <span className={`size-2 rounded-full ${c.live ? "bg-azure" : "bg-line-strong"}`} />
          <span className="text-caption font-medium text-heading">{c.name}</span>
          <span className="ml-auto flex items-end gap-[2px]">
            {[0, 1, 2].map((bar) => (
              <span
                key={bar}
                className="w-[3px] rounded-full bg-line-strong transition-colors duration-75 group-hover:bg-primary"
                style={{ height: 6 + bar * 4, transitionDelay: `${bar * 40}ms` }}
              />
            ))}
          </span>
          <span className="w-[4.5rem] text-right text-[0.75rem] tabular-nums text-faint">{c.count} members</span>
        </li>
      ))}
    </ul>
  );
}

function InviteVisual() {
  return (
    <div className="flex w-full items-center gap-2 rounded-full bg-white p-1.5 pl-5 ring-1 ring-line">
      <p className="min-w-0 flex-1 truncate font-mono text-caption text-heading">
        raydio.live/j/<span className="text-primary">stage-left</span>
      </p>
      <CopyButton text="https://raydio.live/j/stage-left" />
    </div>
  );
}

const members = ["Priya", "Leo", "Marcus", "Nia", "Alex"];

/** Member statuses change with the same vertical roll as the dial label. */
function ProfileVisual() {
  const ref = useRef<HTMLUListElement>(null);
  const tick = useTicker(ref, 2600);

  return (
    <ul ref={ref} className={`${PANEL} grid gap-1 p-2.5 sm:grid-cols-2`} aria-hidden="true">
      {members.map((name, i) => (
        <li key={name} className="flex items-center gap-3 rounded-xl px-3 py-2">
          <span
            className={`grid size-8 place-items-center rounded-full text-[0.75rem] font-semibold ${
              i === 2 ? "bg-primary text-white" : "bg-mist text-deep"
            }`}
          >
            {name[0]}
          </span>
          <span className="text-caption font-medium text-heading">{name}</span>
          <TextRoll
            text={(tick + i) % 2 === 0 ? "Radio on" : "Listening"}
            className="ml-auto text-[0.75rem] font-medium text-faint"
          />
        </li>
      ))}
    </ul>
  );
}

export function Features() {
  return (
    <Section tone="tint">
      <Reveal className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-end lg:gap-16">
        <h2 className="text-balance text-title-sm font-semibold text-heading md:text-title">
          Everything you need.
          <br />
          <Highlight>Nothing you don&rsquo;t.</Highlight>
        </h2>
        <p className="max-w-[34rem] text-pretty text-lead text-muted">
          Instant team voice, stripped to the essentials. Every feature earns
          its place on the channel.
        </p>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-5 md:mt-20 md:grid-cols-2 lg:grid-cols-6">
        <Tile
          className="md:col-span-2 lg:col-span-4"
          title="Push-to-talk"
          description="Hold the button, speak, release. Instant voice, no dialing, no ringing."
        >
          <PushToTalkVisual />
        </Tile>
        <Tile
          className="lg:col-span-2"
          delay={0.06}
          title="Live listen mode"
          description="Stay connected to the room while you work. The channel is always ready."
        >
          <ListenVisual />
        </Tile>
        <Tile
          className="lg:col-span-2"
          title="One speaker at a time"
          description="Turn-taking keeps the channel clear when the whole crew is on."
        >
          <TurnTakingVisual />
        </Tile>
        <Tile
          className="lg:col-span-2"
          delay={0.06}
          title="Channels & members"
          description="Group radios for your team. Everyone on the same frequency."
        >
          <ChannelsVisual />
        </Tile>
        <Tile
          className="lg:col-span-2"
          delay={0.12}
          title="Invite links"
          description="Share a link and they’re in. No complicated onboarding."
        >
          <InviteVisual />
        </Tile>
      </div>

      <Reveal variant="blur" className="mt-5">
        <article className="grid grid-cols-1 items-center gap-2 rounded-[1.75rem] bg-white p-2 shadow-card lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="rounded-[1.25rem] bg-[linear-gradient(180deg,#eef4ff,#f6f9ff)] p-5 sm:p-6">
            <ProfileVisual />
          </div>
          <div className="px-5 pb-6 pt-4 sm:px-6 lg:px-10 lg:py-6">
            <h3 className="text-[1.0625rem] font-semibold leading-snug tracking-[-0.01em] text-heading">
              Profile identity
            </h3>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
              Simple names so teammates always know who&rsquo;s talking.
            </p>
          </div>
        </article>
      </Reveal>
    </Section>
  );
}
