import { PLAY_STORE_URL } from "../lib/store";
import { FadeIn } from "./ui/fade-in";
import { HeroDemo } from "./hero-demo";
import { PlayIcon } from "./ui/play-icon";

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
    <section id="top" className="relative isolate overflow-hidden">
      {/* Ambient layers: a soft blue bloom and a dotted grid that fades out. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-18rem] h-[44rem] w-[64rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(30,79,163,0.11),transparent)] lg:left-[72%]" />
        <div className="absolute right-[-12rem] top-[22rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(closest-side,rgba(228,87,46,0.07),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(21,27,38,0.08)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_70%_60%_at_60%_35%,black,transparent)]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 pb-20 pt-32 sm:pt-36 lg:grid-cols-[1.08fr_1fr] lg:gap-10 lg:pb-28 lg:pt-40">
        <div className="text-center lg:text-left">
          <FadeIn>
            <p className="inline-flex items-center gap-2.5 rounded-full bg-white py-1.5 pl-3 pr-4 ring-1 ring-line">
              <span className="h-2 w-2 rounded-full bg-signal animate-live-pulse" aria-hidden="true" />
              <span className="text-[13px] font-medium text-muted">
                Live push-to-talk for teams
              </span>
            </p>
          </FadeIn>

          <FadeIn delay={0.06}>
            <h1 className="mt-7 text-balance text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-[4rem] lg:text-[3.6rem] xl:text-[4rem]">
              <span className="block">Your team&rsquo;s radio.</span>
              <span className="block text-faint">In your pocket.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.12}>
            <p className="mx-auto mt-6 max-w-lg text-pretty text-[1.125rem] leading-relaxed text-muted lg:mx-0">
              Raydio is a realtime walkie-talkie app. Open a channel, hold the
              button, and speak. No call setup. No video overhead.
            </p>
          </FadeIn>

          <FadeIn delay={0.18}>
            <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <PlayIcon />
                Get the app &mdash; it&rsquo;s free
              </a>
              <a href="#how-it-works" className="btn-ghost">
                See how it works
              </a>
            </div>
            <p className="mt-5 text-sm text-faint">
              Free to start · First channel in under a minute
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.1}>
          <HeroDemo />
        </FadeIn>
      </div>

      <div className="border-y border-line bg-white/50">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-7 sm:flex-row sm:gap-8">
          <p className="shrink-0 text-sm font-medium text-foreground">Built for</p>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 sm:justify-start">
            {audiences.map((a) => (
              <li key={a} className="text-sm text-faint">
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
