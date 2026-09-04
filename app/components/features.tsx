import { PLAY_STORE_URL } from "../lib/store";
import { SectionHeading } from "./ui/section-heading";
import { Highlight } from "./ui/highlight";
import { FadeIn } from "./ui/fade-in";

const features = [
  {
    tag: "PTT",
    title: "Push-to-talk",
    description: "Hold the button, speak, release. Instant voice — no dialing, no ringing.",
  },
  {
    tag: "LIVE",
    title: "Live listen mode",
    description: "Stay connected to the room while you work. The channel is always ready.",
  },
  {
    tag: "CREW",
    title: "Channels & members",
    description: "Group radios for your team. Everyone on the same frequency.",
  },
  {
    tag: "LINK",
    title: "Invite links",
    description: "Share a link. They're in. No complicated onboarding.",
  },
  {
    tag: "CLEAR",
    title: "One speaker at a time",
    description: "One speaker at a time so the channel stays clear.",
  },
  {
    tag: "ID",
    title: "Profile identity",
    description: "Simple names so teammates always know who's talking.",
  },
];

export function Features() {
  return (
    <div className="grid gap-10 px-6 py-16 sm:px-10 sm:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-12">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <SectionHeading
          align="left"
          index="03"
          label="Features"
          title={
            <>
              Everything you need. <Highlight>Nothing you don&rsquo;t.</Highlight>
            </>
          }
          description="Instant team voice, stripped to the essentials."
        />
        <FadeIn delay={0.1}>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-7 inline-flex items-center gap-1.5 text-[0.9375rem] font-semibold text-brand"
          >
            Try it free
            <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </a>
        </FadeIn>
      </div>

      <div className="border-t border-line">
        {features.map((feature, i) => (
          <FadeIn key={feature.title} delay={Math.min(i, 3) * 0.05}>
            <div className="group flex items-baseline gap-5 border-b border-line py-6 transition-colors duration-200 hover:bg-mist/60 sm:gap-8 sm:px-4">
              <span className="w-14 shrink-0 font-mono text-[11px] font-medium tracking-[0.14em] text-faint">
                {feature.tag}
              </span>
              <div className="flex-1">
                <h3 className="text-[1.05rem] font-semibold tracking-[-0.005em] text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
