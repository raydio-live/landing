import { PLAY_STORE_URL } from "../lib/store";
import { FadeIn } from "./ui/fade-in";
import { Highlight } from "./ui/highlight";
import { PhoneMockup } from "./phone-mockup";

const audiences = [
  { label: "Field teams", tag: "Ops" },
  { label: "Event staff", tag: "Events" },
  { label: "Sports crews", tag: "Sports" },
  { label: "Friend groups", tag: "Social" },
];

export function Hero() {
  return (
    <>
      <div className="px-6 py-20 text-center sm:px-10 sm:py-28">
        <FadeIn>
          <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Your team&apos;s radio.{" "}
            <Highlight>In your pocket.</Highlight>
          </h1>
        </FadeIn>

        <FadeIn delay={0.08}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-500 sm:text-lg">
            Raydio is a realtime walkie-talkie app. Open a channel, hold the
            button, and speak. No call setup. No video overhead.
          </p>
        </FadeIn>

        <FadeIn delay={0.12}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary h-11 px-6 text-sm"
            >
              Start free
            </a>
            <a href="#how-it-works" className="btn-secondary h-11 px-6 text-sm">
              How it works
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.16}>
          <p className="mt-6 text-sm text-gray-400">
            Not a video call. Not a podcast. A digital walkie-talkie for people
            who already work together.
          </p>
        </FadeIn>
      </div>

      <div className="section-divider flex justify-center bg-gray-50/50 px-6 py-16 sm:px-10 sm:py-20">
        <FadeIn delay={0.1}>
          <PhoneMockup />
        </FadeIn>
      </div>

      <div className="section-divider px-6 py-12 sm:px-10">
        <p className="mb-8 text-center text-sm text-gray-400">
          Built for crews who need to talk now
        </p>
        <div className="dot-grid dot-border grid grid-cols-2 sm:grid-cols-4">
          {audiences.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center justify-center px-4 py-6 text-center"
            >
              <span className="text-sm font-medium text-gray-900">{item.label}</span>
              <span className="mt-1 text-xs text-gray-400">{item.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
