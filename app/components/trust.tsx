import { SectionHeading } from "./ui/section-heading";
import { Highlight } from "./ui/highlight";
import { FadeIn } from "./ui/fade-in";

const trustPoints = [
  {
    title: "Member-only channels",
    description: "Channels are private to your group. No public feed, no stranger discovery.",
  },
  {
    title: "Email OTP login",
    description: "Sign in with a one-time code. No passwords to leak, no social graph required.",
  },
  {
    title: "Built for your crew",
    description: "Invite the people you work with. Simple profiles, clear identity on the channel.",
  },
];

export function Trust() {
  return (
    <div className="px-6 py-16 sm:px-10 sm:py-24">
      <SectionHeading
        label="Private by design"
        title={
          <>
            Your channel. <Highlight>Your people.</Highlight>
          </>
        }
        description="No spammy social features. No public broadcasts. Just your team's radio."
      />

      <div className="dot-grid dot-border mt-12 grid sm:grid-cols-3">
        {trustPoints.map((point, i) => (
          <FadeIn key={point.title} delay={i * 0.08}>
            <div className="p-8">
              <div className="mb-4 flex h-7 w-7 items-center justify-center rounded-full bg-primary-light">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="#2563EB" strokeWidth="2" aria-hidden="true">
                  <path d="M13 4L6 11 3 8" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-gray-900">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{point.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
