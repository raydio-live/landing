import { PLAY_STORE_URL } from "../lib/store";
import { FadeIn } from "./ui/fade-in";

export function JoinChannel() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
      <FadeIn>
        <div className="grid overflow-hidden rounded-2xl bg-mist lg:grid-cols-2">
          <div className="p-8 sm:p-12">
            <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.02em] sm:text-[2.75rem]">
              Got a link? You&rsquo;re in.
            </h2>
            <p className="mt-4 max-w-md text-[1.0625rem] leading-relaxed text-muted">
              Channel links like{" "}
              <code className="rounded-lg bg-white px-2 py-0.5 font-mono text-[0.9em] text-foreground">
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

          <div className="flex flex-col justify-between gap-10 border-t border-line bg-white p-8 sm:p-12 lg:border-l lg:border-t-0">
            <div className="flex items-center justify-between text-[13px] font-medium text-faint">
              <span>Incoming invite</span>
              <span className="inline-flex items-center gap-1.5 font-semibold text-brand">
                <span className="h-1.5 w-1.5 rounded-full bg-brand animate-live-pulse" />
                Open
              </span>
            </div>
            <div>
              <p className="text-[13px] font-medium text-faint">
                Frequency
              </p>
              <p className="mt-2 break-all font-mono text-xl text-foreground sm:text-2xl">
                raydio.live/j/<span className="text-brand">ops-crew</span>
              </p>
            </div>
            <div className="flex items-center justify-between border-t border-line pt-6">
              <p className="text-sm text-muted">Tap to join Ops Crew</p>
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
