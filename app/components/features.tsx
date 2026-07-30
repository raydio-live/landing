import { SectionHeading } from "./ui/section-heading";
import { Highlight } from "./ui/highlight";
import { FadeIn } from "./ui/fade-in";

const features = [
  {
    title: "Push-to-talk",
    description: "Hold the button, speak, release. Instant voice — no dialing, no ringing.",
    featured: true,
  },
  {
    title: "Live listen mode",
    description: "Stay connected to the room while you work. The channel is always ready.",
    featured: false,
  },
  {
    title: "Channels & members",
    description: "Group radios for your team. Everyone on the same frequency.",
    featured: true,
  },
  {
    title: "Invite links",
    description: "Share a link. They're in. No complicated onboarding.",
    featured: false,
  },
  {
    title: "One speaker at a time",
    description: "One speaker at a time so the channel stays clear.",
    featured: true,
  },
  {
    title: "Profile identity",
    description: "Simple names so teammates always know who's talking.",
    featured: false,
  },
];

export function Features() {
  return (
    <div className="px-6 py-16 sm:px-10 sm:py-24">
      <SectionHeading
        label="Features"
        title={
          <>
            Built for speed and <Highlight>clarity</Highlight>
          </>
        }
        description="Everything you need for instant team voice. Nothing you don't."
      />

      <div className="dot-grid dot-border mt-12 grid sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => (
          <FadeIn key={feature.title} delay={i * 0.05}>
            <div
              className={`h-full p-8 ${
                feature.featured ? "bg-primary text-white" : "bg-white"
              }`}
            >
              <h3 className={`text-base font-semibold ${feature.featured ? "text-white" : "text-gray-900"}`}>
                {feature.title}
              </h3>
              <p className={`mt-2 text-sm leading-relaxed ${feature.featured ? "text-blue-100" : "text-gray-500"}`}>
                {feature.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
