"use client";

import { useRef, useState } from "react";
import { PLAY_STORE_URL } from "../lib/store";
import { ButtonLink, MicChip } from "./ui/button";
import { CopyButton } from "./ui/copy-button";
import { Highlight } from "./ui/highlight";
import { Reveal } from "./ui/reveal";
import { Section } from "./ui/section";
import { useTyping } from "./ui/use-typing";

const SAMPLE_PATH = "raydio.live/j/ops-crew";
const PREFIX = "raydio.live/j/".length;

/** Three arcs radiate out from the button once, each time the link is copied. */
function Arcs() {
  return (
    <span aria-hidden="true" className="pointer-events-none absolute inset-0 motion-reduce:hidden">
      {[0, 0.12, 0.24].map((delay) => (
        <span
          key={delay}
          className="animate-arc absolute left-1/2 top-1/2 size-28 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-azure/40"
          style={{ animationDelay: `${delay}s` }}
        />
      ))}
    </span>
  );
}

function InviteCard() {
  const ref = useRef<HTMLDivElement>(null);
  const { typed, done } = useTyping(SAMPLE_PATH, ref);
  const [copies, setCopies] = useState(0);

  return (
    <div ref={ref} className="rounded-[2rem] bg-tint p-2 ring-1 ring-line">
      <div className="relative flex min-h-[20rem] flex-col justify-between gap-10 overflow-hidden rounded-[1.5rem] bg-white p-7 shadow-card sm:p-9">
        <div className="flex items-center justify-between text-small font-medium text-faint">
          <span>Incoming invite</span>
          <span className="inline-flex h-7 items-center gap-1.5 rounded-full bg-brand-tint px-3 text-[0.75rem] font-semibold text-deep">
            <span className="size-1.5 rounded-full bg-azure" aria-hidden="true" />
            Open
          </span>
        </div>

        <div>
          <p className="text-small font-medium text-faint">Channel link</p>
          <p className="mt-2 min-h-[1.75em] font-mono text-lg text-heading sm:text-2xl">
            {typed.slice(0, PREFIX)}
            <span className="text-primary">{typed.slice(PREFIX)}</span>
            <span
              aria-hidden="true"
              className={`ml-0.5 inline-block h-[1.05em] w-[2px] translate-y-[0.18em] bg-primary ${
                done ? "animate-caret [animation-iteration-count:5]" : ""
              }`}
            />
          </p>
          {/* The typed text is decoration; screen readers get the whole link. */}
          <span className="sr-only">{SAMPLE_PATH}</span>
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-line pt-6">
          <p className="text-small text-muted">Tap to join the channel</p>
          <span className="relative inline-flex">
            {copies > 0 && <Arcs key={copies} />}
            <CopyButton
              text={`https://${SAMPLE_PATH}`}
              label="Copy link"
              onCopy={() => setCopies((c) => c + 1)}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export function JoinChannel() {
  return (
    <Section innerClassName="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-24">
      <Reveal>
        <h2 className="text-balance text-title-sm font-semibold text-heading md:text-title">
          Got a link? <Highlight>You&rsquo;re in.</Highlight>
        </h2>
        <p className="mt-5 max-w-[30rem] text-pretty text-lead text-muted">
          Channel links like{" "}
          <code className="rounded-md bg-mist px-1.5 py-0.5 font-mono text-[0.875em] text-deep">
            raydio.live/j/…
          </code>{" "}
          open the app and drop you straight into the channel. No setup
          friction: just tap and listen.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <ButtonLink href={PLAY_STORE_URL} external chip={<MicChip />}>
            Get the app
          </ButtonLink>
          <ButtonLink href="#how-it-works" variant="secondary">
            How it works
          </ButtonLink>
        </div>
      </Reveal>

      <Reveal variant="blur" delay={0.06}>
        <InviteCard />
      </Reveal>
    </Section>
  );
}
