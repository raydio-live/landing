import { SectionHeading } from "./ui/section-heading";
import { Highlight } from "./ui/highlight";
import { FadeIn } from "./ui/fade-in";

const problems = [
  {
    title: "Group chats are slow",
    description: "Typing, waiting, missing the message. When something's happening now, text can't keep up.",
  },
  {
    title: "Calls are heavy",
    description: "Scheduling, ringing, everyone on video. Overkill when you just need to say one thing.",
  },
  {
    title: "Radios are clunky",
    description: "Hardware costs, range limits, licensing. Great concept, wrong century for most teams.",
  },
];

export function Problem() {
  return (
    <div className="px-6 py-16 sm:px-10 sm:py-24">
      <SectionHeading
        title={
          <>
            When you just need to <Highlight>say it now</Highlight>
          </>
        }
        description="Your crew is moving. The moment won't wait for a meeting invite."
      />

      <div className="dot-grid dot-border mt-12 grid sm:grid-cols-3">
        {problems.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.08}>
            <div className="p-8">
              <span className="text-xs font-medium text-gray-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-base font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
