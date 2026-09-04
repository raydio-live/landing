import { PLAY_STORE_URL } from "../lib/store";
import { FadeIn } from "./ui/fade-in";

export function CtaBand() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-24">
      <FadeIn>
        <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.02em] sm:text-5xl">
          Ready to get on channel?
        </h2>
        <p className="mx-auto mt-5 max-w-md text-pretty text-[1.0625rem] leading-relaxed text-muted">
          Download Raydio and create your first channel in under a minute.
          Live voice, zero learning curve.
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M4 3.5v17c0 .8.9 1.3 1.6.9l13.2-8.5c.6-.4.6-1.4 0-1.8L5.6 2.6c-.7-.4-1.6.1-1.6.9z" />
            </svg>
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
  );
}
