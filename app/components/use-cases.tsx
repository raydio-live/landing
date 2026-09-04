import { SectionHeading } from "./ui/section-heading";
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
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <SectionHeading
        title="One channel, every crew."
        description="Built for crews who need clear voice now — not another meeting invite."
      />

      <div className="mt-10 border-t border-line">
        {useCases.map((item, i) => (
          <FadeIn key={item.title} delay={Math.min(i, 3) * 0.05}>
            <div className="group flex items-center gap-5 border-b border-line py-5">
              <div className="flex-1">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
              <span
                aria-hidden="true"
                className="shrink-0 text-lg text-faint transition-transform duration-200 group-hover:translate-x-1 group-hover:text-brand"
              >
                →
              </span>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
