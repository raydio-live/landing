import { PLAY_STORE_URL } from "../lib/store";
import { FadeIn } from "./ui/fade-in";

export function CtaBand() {
  return (
    <div className="px-4 py-4 sm:px-6 sm:py-6">
      <div className="dark-panel rounded-[2rem] px-6 py-14 sm:px-10 sm:py-20 lg:px-14">
        <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <FadeIn>
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-white/50">
              <span className="text-brand-soft">07</span>
              <span aria-hidden="true"> / </span>
              Get Raydio
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-[1.03] tracking-[-0.01em] text-balance text-white sm:text-6xl">
              Ready to get on <em className="font-display font-medium italic text-brand-soft">channel?</em>
            </h2>
            <p className="mt-5 max-w-md text-[1.0625rem] leading-relaxed text-white/60">
              Download Raydio and create your first channel in under a minute.
              Live voice, zero learning curve.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex flex-col gap-3">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light w-full"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4 3.5v17c0 .8.9 1.3 1.6.9l13.2-8.5c.6-.4.6-1.4 0-1.8L5.6 2.6c-.7-.4-1.6.1-1.6.9z" />
                </svg>
                Get it on Google Play
              </a>
              <div className="flex items-center justify-center gap-3 rounded-full border border-white/20 px-6 py-3.5 text-sm text-white/70">
                <svg width="15" height="18" viewBox="0 0 20 24" fill="currentColor" aria-hidden="true">
                  <path d="M16.52 12.65c-.02-2.08 1.7-3.08 1.78-3.13-1-.14-1.95-.6-2.48-1.22-.57-.67-.87-1.53-.85-2.45-.02-1.05.4-2.07 1.15-2.73.97-.88 2.47-.95 3.4-.02.88.82 1.38 2.05 1.35 3.3-.03 1.26-.52 2.43-1.35 3.25-.4.38-.85.68-1.35.88-.25.1-.52.15-.8.12zM13.5 3.5c.55-.65 1.38-1.08 2.28-1.12 0 1.18-.43 2.33-1.18 3.18-.55.62-1.45 1.1-2.33 1.05-.05-1.15.45-2.28 1.23-3.11z" />
                </svg>
                <span>
                  <span className="text-white/50">App Store — </span>coming soon
                </span>
              </div>
              <a
                href="mailto:hello@raydio.live"
                className="mt-1 text-center font-mono text-[13px] text-white/50 transition-colors hover:text-white"
              >
                hello@raydio.live
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
