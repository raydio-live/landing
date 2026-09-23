import { PLAY_STORE_URL } from "../lib/store";
import { FadeIn } from "./ui/fade-in";
import { PlayIcon } from "./ui/play-icon";
import { RaydioLogo } from "./logo";
import { SignalRings } from "./ui/signal-rings";

export function CtaBand() {
  return (
    <div className="relative isolate overflow-hidden">
      <SignalRings className="left-1/2 top-[7.5rem] -z-10 w-[46rem] -translate-x-1/2 -translate-y-1/2 sm:top-[8.5rem] sm:w-[56rem]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-gradient-to-t from-white via-white/90 to-transparent"
      />

      <div className="mx-auto max-w-3xl px-6 py-24 text-center sm:py-32">
        <FadeIn>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[1.6rem] bg-white ring-1 ring-line">
            <RaydioLogo className="h-11 w-auto" />
          </div>
          <h2 className="mt-10 text-balance text-[2.5rem] font-semibold leading-[1.03] tracking-[-0.03em] sm:text-6xl">
            Ready to get on channel?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-pretty text-[1.0625rem] leading-relaxed text-muted">
            Download Raydio and create your first channel in under a minute.
            Live voice, zero learning curve.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-9 flex justify-center">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              <PlayIcon />
              Get it on Google Play
            </a>
          </div>
          <p className="mt-5 text-sm text-faint">
            Free to start · iOS coming soon ·{" "}
            <a
              href="mailto:hello@raydio.live"
              className="text-muted underline decoration-line underline-offset-4 transition-colors hover:text-foreground"
            >
              hello@raydio.live
            </a>
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
