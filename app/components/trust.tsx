import { SectionHeading } from "./ui/section-heading";
import { Highlight } from "./ui/highlight";
import { FadeIn } from "./ui/fade-in";

const trustPoints = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="4" y="8.5" width="12" height="8" rx="2" />
        <path d="M7 8.5V6.5a3 3 0 0 1 6 0v2" />
      </svg>
    ),
    title: "Member-only channels",
    description: "Channels are private to your group. No public feed, no stranger discovery.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="7" cy="10" r="3.2" />
        <path d="M10.2 10H17M14.5 10v2.6M17 10v1.8" />
      </svg>
    ),
    title: "Email OTP login",
    description: "Sign in with a one-time code. No passwords to leak, no social graph required.",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="7" cy="6.5" r="2.5" />
        <path d="M2.5 16.5c0-2.5 2-4.2 4.5-4.2s4.5 1.7 4.5 4.2" />
        <circle cx="14" cy="7.5" r="2" />
        <path d="M13.5 12.6c2.2.2 4 1.8 4 4" />
      </svg>
    ),
    title: "Built for your crew",
    description: "Invite the people you work with. Simple profiles, clear identity on the channel.",
  },
];

export function Trust() {
  return (
    <div className="px-6 py-16 sm:px-10 sm:py-24 lg:px-12">
      <SectionHeading
        index="05"
        label="Private by design"
        title={
          <>
            Your channel. <Highlight>Your people.</Highlight>
          </>
        }
        description="No spammy social features. No public broadcasts. Just your team's radio."
      />

      <div className="mx-auto mt-12 grid max-w-4xl gap-10 sm:grid-cols-3 sm:gap-8">
        {trustPoints.map((point, i) => (
          <FadeIn key={point.title} delay={i * 0.07}>
            <div className="border-t-2 border-ink pt-6">
              <div className="text-brand">{point.icon}</div>
              <h3 className="mt-4 text-[1.05rem] font-semibold tracking-[-0.005em] text-foreground">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {point.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
