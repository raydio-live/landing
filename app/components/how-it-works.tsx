import { SectionHeading } from "./ui/section-heading";
import { FadeIn } from "./ui/fade-in";

const steps = [
  {
    title: "Create or join a channel",
    description:
      "Start a channel for your crew or join from a link. Sign in with email — no password, no social login.",
  },
  {
    title: "Hold to talk",
    description:
      "Press and hold the button, speak, release when done. Thumb-first design built for phones.",
  },
  {
    title: "Everyone hears you live",
    description:
      "Low-latency voice over the internet. One speaker at a time — clear channel, no chaos.",
  },
];

export function HowItWorks() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <SectionHeading
        title="Live in three moves."
        description="From sign-up to talking on the channel."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {steps.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.07}>
            <div className="h-full rounded-2xl border border-line bg-white p-7">
              <p className="text-sm font-semibold tabular-nums text-faint">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-[1.05rem] font-semibold tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
