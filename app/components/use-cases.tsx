import { SectionHeading } from "./ui/section-heading";
import { Highlight } from "./ui/highlight";
import { FadeIn } from "./ui/fade-in";

const useCases = [
  { title: "Field teams & ops", description: "Warehouses, delivery crews, on-site contractors — coordinate without stopping." },
  { title: "Events & venues", description: "Stage managers, security, production. Everyone on the same channel." },
  { title: "Sports coaching", description: "Sidelines, dugouts, practice fields. Call the play without the delay." },
  { title: "Friends & road trips", description: "Split up, stay connected. Like a radio, but in your group chat era." },
  { title: "Family coordination", description: "Theme parks, airports, busy weekends. Quick check-ins, no fuss." },
];

export function UseCases() {
  return (
    <div className="px-6 py-16 sm:px-10 sm:py-24">
      <SectionHeading
        label="Use cases"
        title={
          <>
            Talk like you&apos;re on the <Highlight>same channel</Highlight>
          </>
        }
        description="Built for crews who need clear voice now — not another meeting invite."
      />

      <div className="dot-grid dot-border mt-12 grid sm:grid-cols-2 lg:grid-cols-3">
        {useCases.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.06}>
            <div className="h-full p-8">
              <span className="text-xs font-medium text-gray-300">
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
