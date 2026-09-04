import { PLAY_STORE_URL } from "../lib/store";
import { FadeIn } from "./ui/fade-in";
import { PhoneMockup } from "./phone-mockup";

const audiences = [
  "Field ops",
  "Event crews",
  "Warehouses",
  "Venues",
  "Delivery fleets",
  "Coaching staff",
  "Road trips",
  "Production sets",
];

export function Hero() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-6 pb-14 pt-16 text-center sm:pb-16 sm:pt-24">
        <FadeIn>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white py-1.5 pl-3 pr-4">
            <span className="relative flex h-2 w-2">
              <span className="absolute h-full w-full rounded-full bg-brand animate-live-pulse" />
            </span>
            <span className="text-[13px] font-medium text-muted">
              Live push-to-talk for teams
            </span>
          </p>
        </FadeIn>

        <FadeIn delay={0.06}>
          <h1 className="mt-6 text-balance text-[2.75rem] font-semibold leading-[1.04] tracking-[-0.03em] sm:text-6xl lg:text-[4.5rem]">
            Your team&rsquo;s radio. In your pocket.
          </h1>
        </FadeIn>

        <FadeIn delay={0.12}>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-[1.0625rem] leading-relaxed text-muted">
            Raydio is a realtime walkie-talkie app. Open a channel, hold the
            button, and speak. No call setup. No video overhead.
          </p>
        </FadeIn>

        <FadeIn delay={0.18}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Get the app — it&rsquo;s free
            </a>
            <a href="#how-it-works" className="btn-ghost">
              How it works
            </a>
          </div>
          <p className="mt-4 text-sm text-faint">
            Free to start · First channel in under a minute
          </p>
        </FadeIn>
      </div>

      <FadeIn delay={0.1} className="px-4 sm:px-6">
        <div className="mx-auto max-w-md rounded-2xl bg-mist px-6 pb-8 pt-6">
          <div className="mb-6 flex items-center justify-between text-[13px] font-medium text-faint">
            <span>CH-04 · Ops Crew</span>
            <span className="inline-flex items-center gap-1.5 font-semibold text-brand">
              <span className="h-1.5 w-1.5 rounded-full bg-brand animate-live-pulse" />
              Live
            </span>
          </div>
          <div className="animate-float-soft">
            <PhoneMockup />
          </div>
          <p className="mt-6 text-center text-[13px] font-medium text-faint">
            Hold the button to talk
          </p>
        </div>
      </FadeIn>

      <p className="mx-auto max-w-2xl px-6 pb-16 pt-10 text-center text-sm leading-loose text-faint">
        Built for {audiences.join(" · ")}
      </p>
    </>
  );
}
