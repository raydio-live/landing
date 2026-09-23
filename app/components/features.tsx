import type { ReactNode } from "react";
import { SectionHeading } from "./ui/section-heading";
import { FadeIn } from "./ui/fade-in";
import { WaveformBars } from "./ui/waveform";

function Tile({
  title,
  description,
  visual,
  className = "",
  delay = 0,
}: {
  title: string;
  description: string;
  visual?: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <FadeIn delay={delay} className={className}>
      <article className="group flex h-full flex-col rounded-3xl bg-mist p-7 sm:p-8">
        <h3 className="text-lg font-semibold tracking-tight text-foreground">{title}</h3>
        <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-muted">{description}</p>
        {visual && (
          <div
            aria-hidden="true"
            className="mt-8 flex flex-1 items-end transition-transform duration-500 ease-out group-hover:-translate-y-1"
          >
            {visual}
          </div>
        )}
      </article>
    </FadeIn>
  );
}

function PushToTalkVisual() {
  return (
    <div className="flex w-full items-center gap-5 rounded-2xl bg-white p-5">
      <span className="relative flex h-16 w-16 shrink-0 items-center justify-center">
        <span className="absolute inset-0 rounded-full border border-signal/50 animate-pulse-ring" />
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
            <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
          </svg>
        </span>
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-foreground">You</p>
        <p className="inline-flex items-center gap-1.5 text-xs font-medium text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-signal" />
          On air
        </p>
      </div>
      <WaveformBars count={10} className="bg-signal/80" />
    </div>
  );
}

function ListenVisual() {
  return (
    <div className="flex w-full items-center justify-between rounded-2xl bg-white p-5">
      <div>
        <p className="text-sm font-semibold text-foreground">Listening</p>
        <p className="text-xs text-faint">Ops Crew</p>
      </div>
      <span className="flex h-7 w-12 items-center justify-end rounded-full bg-brand p-1">
        <span className="h-5 w-5 rounded-full bg-white" />
      </span>
    </div>
  );
}

function TurnTakingVisual() {
  const rows = [
    { name: "Marcus", state: "Speaking", on: true },
    { name: "Alex", state: "Waits", on: false },
    { name: "Sam", state: "Waits", on: false },
  ];
  return (
    <ul className="w-full space-y-1.5 rounded-2xl bg-white p-3">
      {rows.map((row) => (
        <li
          key={row.name}
          className={`flex items-center gap-3 rounded-xl px-3 py-2 ${row.on ? "bg-brand-tint/70" : ""}`}
        >
          <span
            className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-semibold ${
              row.on ? "bg-brand text-white" : "bg-mist text-muted"
            }`}
          >
            {row.name[0]}
          </span>
          <span className="text-[13px] font-medium text-foreground">{row.name}</span>
          <span className={`ml-auto text-[11px] font-medium ${row.on ? "text-brand" : "text-faint"}`}>
            {row.state}
          </span>
        </li>
      ))}
    </ul>
  );
}

function ChannelsVisual() {
  const channels = [
    { name: "Ops Crew", count: 4, live: true },
    { name: "Stage Left", count: 7, live: false },
    { name: "Sideline", count: 3, live: false },
  ];
  return (
    <ul className="w-full divide-y divide-line rounded-2xl bg-white px-4">
      {channels.map((c) => (
        <li key={c.name} className="flex items-center gap-2.5 py-2.5">
          <span className={`h-1.5 w-1.5 rounded-full ${c.live ? "bg-signal" : "bg-line"}`} />
          <span className="text-[13px] font-medium text-foreground">{c.name}</span>
          <span className="ml-auto text-[11px] tabular-nums text-faint">{c.count} members</span>
        </li>
      ))}
    </ul>
  );
}

function InviteVisual() {
  return (
    <div className="flex w-full items-center gap-2 rounded-2xl bg-white p-2 pl-4">
      <p className="min-w-0 flex-1 truncate font-mono text-[13px] text-foreground">
        raydio.live/j/<span className="text-brand">stage-left</span>
      </p>
      <span className="shrink-0 rounded-xl bg-ink px-3 py-2 text-xs font-semibold text-white">
        Copy link
      </span>
    </div>
  );
}

export function Features() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading
        title="Everything you need. Nothing you don’t."
        description="Instant team voice, stripped to the essentials."
      />

      <div className="mt-14 grid gap-4 md:grid-cols-6">
        <Tile
          className="md:col-span-4"
          title="Push-to-talk"
          description="Hold the button, speak, release. Instant voice — no dialing, no ringing."
          visual={<PushToTalkVisual />}
        />
        <Tile
          className="md:col-span-2"
          delay={0.05}
          title="Live listen mode"
          description="Stay connected to the room while you work. The channel is always ready."
          visual={<ListenVisual />}
        />
        <Tile
          className="md:col-span-2"
          title="One speaker at a time"
          description="Turn-taking keeps the channel clear when the whole crew is on."
          visual={<TurnTakingVisual />}
        />
        <Tile
          className="md:col-span-2"
          delay={0.05}
          title="Channels & members"
          description="Group radios for your team. Everyone on the same frequency."
          visual={<ChannelsVisual />}
        />
        <Tile
          className="md:col-span-2"
          delay={0.1}
          title="Invite links"
          description="Share a link. They’re in. No complicated onboarding."
          visual={<InviteVisual />}
        />
      </div>

      <FadeIn className="mt-4">
        <div className="flex flex-col gap-5 rounded-3xl bg-mist p-7 sm:flex-row sm:items-center sm:p-8">
          <div className="flex -space-x-2" aria-hidden="true">
            {["Priya", "Leo", "Marcus", "Nia", "Alex"].map((name, i) => (
              <span
                key={name}
                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold ring-4 ring-mist ${
                  i === 2 ? "bg-brand text-white" : "bg-white text-muted"
                }`}
              >
                {name[0]}
              </span>
            ))}
          </div>
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-foreground">Profile identity</h3>
            <p className="mt-1 text-[15px] leading-relaxed text-muted">
              Simple names so teammates always know who&rsquo;s talking.
            </p>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
