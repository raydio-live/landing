import { SectionHeading } from "./ui/section-heading";
import { Highlight } from "./ui/highlight";
import { FadeIn } from "./ui/fade-in";

const problems = [
  {
    title: "Group chats are slow",
    description:
      "Typing, waiting, missing the message. When something's happening now, text can't keep up.",
  },
  {
    title: "Calls are heavy",
    description:
      "Scheduling, ringing, everyone on video. Overkill when you just need to say one thing.",
  },
  {
    title: "Radios are clunky",
    description:
      "Hardware costs, range limits, licensing. Great concept, wrong century for most teams.",
  },
];

export function Problem() {
  return (
    <div className="grid gap-10 px-6 py-16 sm:px-10 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-12">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <SectionHeading
          align="left"
          index="01"
          label="The problem"
          title={
            <>
              When you just need to <Highlight>say it now</Highlight>
            </>
          }
          description="Your crew is moving. The moment won't wait for a meeting invite."
        />
      </div>

      <div>
        {problems.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.06}>
            <div className="flex gap-6 border-t border-line py-8 first:border-t-0 first:pt-0 last:pb-0 sm:gap-10">
              <span className="font-mono text-xs font-medium tabular-nums text-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-2xl font-medium tracking-[-0.01em] text-foreground sm:text-[1.7rem]">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-md text-[15px] leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
