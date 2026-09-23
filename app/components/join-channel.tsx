import { PLAY_STORE_URL } from "../lib/store";
import { FadeIn } from "./ui/fade-in";
import { CyclingSlug } from "./ui/cycling-slug";

export function JoinChannel() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <FadeIn>
        <div className="grid overflow-hidden rounded-[2rem] bg-mist lg:grid-cols-2">
          <div className="p-8 sm:p-12 lg:p-14">
            <h2 className="text-balance text-[2.25rem] font-semibold leading-[1.05] tracking-[-0.025em] sm:text-5xl">
              Got a link? You&rsquo;re in.
            </h2>
            <p className="mt-5 max-w-md text-[1.0625rem] leading-relaxed text-muted">
              Channel links like{" "}
              <code className="rounded-lg bg-white px-2 py-0.5 font-mono text-[0.9em] text-foreground">
                raydio.live/j/…
              </code>{" "}
              open the app and drop you straight into the channel. No setup
              friction — just tap and listen.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
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

          <div className="flex flex-col justify-between gap-10 bg-white p-8 sm:p-12 lg:m-3 lg:rounded-[1.5rem]">
            <div className="flex items-center justify-between text-[13px] font-medium text-faint">
              <span>Incoming invite</span>
              <span className="inline-flex items-center gap-1.5 font-semibold text-brand">
                <span className="h-1.5 w-1.5 rounded-full bg-brand animate-live-pulse" aria-hidden="true" />
                Open
              </span>
            </div>
            <div>
              <p className="text-[13px] font-medium text-faint">Frequency</p>
              <p className="mt-2 font-mono text-xl text-foreground sm:text-2xl">
                raydio.live/j/
                <CyclingSlug slugs={["ops-crew", "stage-left", "sideline", "convoy"]} />
              </p>
            </div>
            <div className="flex items-center justify-between border-t border-line pt-6">
              <p className="text-sm text-muted">Tap to join the channel</p>
              <span
                aria-hidden="true"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
