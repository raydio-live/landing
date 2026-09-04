import { PLAY_STORE_URL } from "../lib/store";
import { FadeIn } from "./ui/fade-in";
import { Highlight } from "./ui/highlight";
import { PhoneMockup } from "./phone-mockup";

const tickerItems = [
  "Field ops",
  "Event crews",
  "Coaching staff",
  "Warehouses",
  "Venues",
  "Road trips",
  "Delivery fleets",
  "Production sets",
];

const proofPoints = [
  { title: "No hardware to buy", description: "Your phones are the radios." },
  { title: "Join from a link", description: "Tap an invite, you're on channel." },
  { title: "Free to start", description: "First channel in under a minute." },
];

export function Hero() {
  return (
    <>
      <div className="grid gap-12 px-6 pb-16 pt-14 sm:px-10 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8 lg:px-12 lg:pb-24 lg:pt-24">
        <div>
          <FadeIn>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white py-1.5 pl-3 pr-4">
              <span className="relative flex h-2 w-2">
                <span className="absolute h-full w-full rounded-full bg-brand animate-live-pulse" />
              </span>
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
                Live push-to-talk for teams
              </span>
            </p>
          </FadeIn>

          <FadeIn delay={0.06}>
            <h1 className="mt-6 font-display text-[2.9rem] font-medium leading-[1.02] tracking-[-0.015em] text-balance sm:text-6xl lg:text-[4.35rem]">
              Your team&rsquo;s radio. <Highlight>In your pocket.</Highlight>
            </h1>
          </FadeIn>

          <FadeIn delay={0.12}>
            <p className="mt-6 max-w-md text-[1.0625rem] leading-relaxed text-muted">
              Raydio is a realtime walkie-talkie app. Open a channel, hold the
              button, and speak. No call setup. No video overhead.
            </p>
          </FadeIn>

          <FadeIn delay={0.18}>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Get the app — it&rsquo;s free
              </a>
              <a
                href="#how-it-works"
                className="group inline-flex items-center gap-1.5 text-[0.9375rem] font-semibold text-foreground"
              >
                How it works
                <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-y-0.5">↓</span>
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.24}>
            <dl className="mt-12 grid max-w-lg grid-cols-1 gap-6 border-t border-line pt-7 sm:grid-cols-3">
              {proofPoints.map((point) => (
                <div key={point.title}>
                  <dt className="text-sm font-semibold tracking-[-0.005em] text-foreground">
                    {point.title}
                  </dt>
                  <dd className="mt-1 text-[13px] leading-relaxed text-faint">
                    {point.description}
                  </dd>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>

        <FadeIn delay={0.15} className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-mist px-6 pb-10 pt-8 sm:px-10">
            <div className="mb-7 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
              <span>CH-04 · Ops Crew</span>
              <span className="inline-flex items-center gap-1.5 text-brand">
                <span className="h-1.5 w-1.5 rounded-full bg-brand animate-live-pulse" />
                Live
              </span>
            </div>
            <div className="animate-float-soft">
              <PhoneMockup />
            </div>
            <p className="mt-7 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
              Hold the button to talk
            </p>
          </div>
        </FadeIn>
      </div>

      <div className="marquee border-y border-line bg-white py-4" aria-label="Built for crews like yours">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
              {tickerItems.map((item) => (
                <span key={`${copy}-${item}`} className="flex items-center">
                  <span className="whitespace-nowrap font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted">
                    {item}
                  </span>
                  <span className="mx-7 inline-block h-1 w-1 shrink-0 rounded-full bg-brand/50" aria-hidden="true" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
