import { PLAY_STORE_URL } from "../lib/store";
import { ButtonLink, MicChip } from "./ui/button";
import { Reveal } from "./ui/reveal";

/**
 * The one saturated moment on the page: a vibrant blue panel inside the
 * container. White text sits on #0753C4 or deeper (6.9:1 and up); the
 * azure glow is kept to the corners, away from the copy.
 */
export function CtaBand() {
  return (
    <div className="bg-background pb-24 lg:pb-32">
      <div className="container-page">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-[#0753c4] px-6 py-20 text-center sm:px-12 md:py-24 lg:rounded-[2.5rem] lg:py-28">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-linear-to-b from-[#0862e0] to-[#0a3fa8]" />
              <div className="absolute -right-40 -top-56 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(closest-side,rgba(19,131,249,0.7),transparent)]" />
              <div className="absolute -bottom-64 -left-40 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(closest-side,rgba(10,31,77,0.3),transparent)]" />
              {/* Broadcast rings from the top right corner */}
              {[18, 30, 42, 54].map((r) => (
                <span
                  key={r}
                  className="absolute right-0 top-0 rounded-full border border-white/10"
                  style={{ width: `${r * 2}rem`, height: `${r * 2}rem`, marginRight: `-${r}rem`, marginTop: `-${r}rem` }}
                />
              ))}
            </div>

            <h2 className="mx-auto max-w-[44rem] text-balance text-title-sm font-semibold text-white md:text-title lg:text-[3.75rem] lg:leading-[1.05]">
              Ready to get on channel?
            </h2>
            <p className="mx-auto mt-6 max-w-[32rem] text-pretty text-lead text-[#e4eeff]">
              Download Raydio and open your first channel in under a minute.
              Live voice, zero learning curve.
            </p>

            <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <ButtonLink href={PLAY_STORE_URL} external variant="light" chip={<MicChip />}>
                Get the app
              </ButtonLink>
              <a
                href="#how-it-works"
                className="inline-flex h-12 items-center justify-center rounded-full px-6 text-[0.9375rem] font-semibold text-white ring-1 ring-white/35 transition-colors hover:bg-white/10"
              >
                See how it works
              </a>
            </div>

            <p className="mt-8 text-small text-[#c4dbff]">
              Free to start · iOS coming soon ·{" "}
              <a
                href="mailto:hello@raydio.live"
                className="text-white underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white"
              >
                hello@raydio.live
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
