import { SectionHeading } from "./ui/section-heading";
import { FadeIn } from "./ui/fade-in";

const features = [
  {
    title: "Push-to-talk",
    description: "Hold the button, speak, release. Instant voice — no dialing, no ringing.",
  },
  {
    title: "Live listen mode",
    description: "Stay connected to the room while you work. The channel is always ready.",
  },
  {
    title: "Channels & members",
    description: "Group radios for your team. Everyone on the same frequency.",
  },
  {
    title: "Invite links",
    description: "Share a link. They're in. No complicated onboarding.",
  },
  {
    title: "One speaker at a time",
    description: "Turn-taking keeps the channel clear when the whole crew is on.",
  },
  {
    title: "Profile identity",
    description: "Simple names so teammates always know who's talking.",
  },
];

export function Features() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <SectionHeading
        title="Everything you need. Nothing you don't."
        description="Instant team voice, stripped to the essentials."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => (
          <FadeIn key={feature.title} delay={Math.min(i, 3) * 0.05}>
            <div className="h-full rounded-2xl bg-mist p-7">
              <h3 className="text-[1.05rem] font-semibold tracking-tight text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
