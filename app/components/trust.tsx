import { SectionHeading } from "./ui/section-heading";
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
    <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading
        title="Your channel. Your people."
        description="No spammy social features. No public broadcasts. Just your team's radio."
      />

      <div className="mt-16 grid gap-10 border-t border-line pt-12 sm:grid-cols-3 sm:gap-10">
        {trustPoints.map((point, i) => (
          <FadeIn key={point.title} delay={i * 0.07}>
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-tint text-brand">
                {point.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                {point.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                {point.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
