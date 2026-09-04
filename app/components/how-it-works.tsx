import { SectionHeading } from "./ui/section-heading";
import { Highlight } from "./ui/highlight";
import { FadeIn } from "./ui/fade-in";

const steps = [
  {
    title: "Sign in with email",
    description:
      "Enter your email, get a one-time code. No password to remember, no social login required.",
  },
  {
    title: "Join or create a channel",
    description:
      "Start a channel for your crew or join via invite link. Add your name so teammates know who's talking.",
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
    <div className="px-4 py-4 sm:px-6 sm:py-6">
      <div className="dark-panel rounded-[2rem] px-6 py-14 sm:px-10 sm:py-20 lg:px-14">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            align="left"
            dark
            index="02"
            label="How it works"
            title={
              <>
                Live in <Highlight>four moves.</Highlight>
              </>
            }
          />
          <FadeIn delay={0.1}>
            <p className="max-w-xs text-[15px] leading-relaxed text-white/60 lg:pb-1 lg:text-right">
              Four steps from sign-up to live on the channel.
            </p>
          </FadeIn>
        </div>

        <div className="mt-12 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.07}>
              <div className="border-t border-white/15 py-7">
                <p className="font-mono text-xs font-medium tabular-nums text-brand-soft">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-[1.05rem] font-semibold tracking-[-0.005em] text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
