import { PLAY_STORE_URL } from "../lib/store";
import { FadeIn } from "./ui/fade-in";
import { Highlight } from "./ui/highlight";

export function JoinChannel() {
  return (
    <div className="px-6 py-16 sm:px-10 sm:py-24 lg:px-12">
      <FadeIn>
        <div className="grid overflow-hidden rounded-[2rem] border border-line bg-white lg:grid-cols-2">
          <div className="p-8 sm:p-12">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-faint">
              <span className="text-brand">06</span>
              <span aria-hidden="true"> / </span>
              Join a channel
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-[1.05] tracking-[-0.01em] text-balance sm:text-[2.75rem]">
              Got a link? <Highlight>You&rsquo;re in.</Highlight>
            </h2>
            <p className="mt-4 max-w-md text-[1.0625rem] leading-relaxed text-muted">
              Channel links like{" "}
              <code className="rounded-lg bg-mist px-2 py-0.5 font-mono text-[0.9em] text-foreground">
                raydio.live/j/…
              </code>{" "}
              open the app and drop you straight into the channel. No setup
              friction — just tap and listen.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Get the app
              </a>
              <a href="#how-it-works" className="btn-ghost">
                How it works
              </a>
            </div>
          </div>

          <div className="dark-panel flex flex-col justify-between gap-10 border-t border-line p-8 sm:p-12 lg:border-l lg:border-t-0">
            <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
              <span>Incoming invite</span>
              <span className="inline-flex items-center gap-1.5 text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-live-pulse" />
                Open
              </span>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
                Frequency
              </p>
              <p className="mt-2 break-all font-mono text-xl text-white sm:text-2xl">
                raydio.live/j/<span className="text-brand-soft">ops-crew</span>
              </p>
            </div>
            <div className="flex items-center justify-between border-t border-white/15 pt-6">
              <p className="text-sm text-white/60">Tap to join Ops Crew</p>
              <span aria-hidden="true" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand text-lg text-white">
                →
              </span>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
