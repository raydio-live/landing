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
    <div className="px-6 py-16 sm:px-10 sm:py-24 lg:px-12">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          align="left"
          index="04"
          label="Use cases"
          title={
            <>
              One channel, <Highlight>every crew.</Highlight>
            </>
          }
        />
        <FadeIn delay={0.1}>
          <p className="max-w-xs text-[15px] leading-relaxed text-muted lg:pb-1 lg:text-right">
            Built for crews who need clear voice now — not another meeting invite.
          </p>
        </FadeIn>
      </div>

      <div className="mt-12 border-t border-line">
        {useCases.map((item, i) => (
          <FadeIn key={item.title} delay={Math.min(i, 3) * 0.05}>
            <div className="group flex cursor-default items-center gap-5 border-b border-line py-6 sm:gap-8 sm:py-7">
              <span className="font-mono text-xs tabular-nums text-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <h3 className="font-display text-[1.65rem] font-medium leading-tight tracking-[-0.01em] text-foreground transition-colors duration-200 group-hover:text-brand sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-1 max-w-lg text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
              <span
                aria-hidden="true"
                className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-lg text-muted transition-all duration-200 group-hover:border-brand group-hover:bg-brand group-hover:text-white sm:inline-flex"
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
