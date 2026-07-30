import { SectionHeading } from "./ui/section-heading";
import { Highlight } from "./ui/highlight";
import { FadeIn } from "./ui/fade-in";

const steps = [
  {
    step: "1",
    badgeClass: "step-badge-1",
    title: "Sign in with email",
    description:
      "Enter your email, get a one-time code. No password to remember, no social login required.",
  },
  {
    step: "2",
    badgeClass: "step-badge-2",
    title: "Join or create a channel",
    description:
      "Start a channel for your crew or join via invite link. Add your name so teammates know who's talking.",
  },
  {
    step: "3",
    badgeClass: "step-badge-3",
    title: "Hold to talk",
    description:
      "Press and hold the button, speak, release when done. Thumb-first design built for phones.",
  },
  {
    step: "4",
    badgeClass: "step-badge-4",
    title: "Everyone hears you live",
    description:
      "Low-latency voice over the internet. One speaker at a time — clear channel, no chaos.",
  },
];

export function HowItWorks() {
  return (
    <div className="px-6 py-16 sm:px-10 sm:py-24">
      <SectionHeading
        label="How it works"
        title={
          <>
            A process tuned for <Highlight>momentum</Highlight>
          </>
        }
        description="Four steps from sign-up to live on the channel."
      />

      <div className="dot-border mt-12">
        {steps.map((item, i) => (
          <div
            key={item.step}
            className={i > 0 ? "dot-border-t" : undefined}
          >
            <FadeIn delay={i * 0.08}>
              <div className="grid gap-6 bg-white p-8 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-10">
                <div className={`step-badge ${item.badgeClass}`}>{item.step}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        ))}
      </div>
    </div>
  );
}
