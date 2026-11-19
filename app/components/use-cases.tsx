import { Highlight } from "./ui/highlight";
import { Ion, type IonName } from "./ui/ionicons";
import { Reveal } from "./ui/reveal";
import { Section } from "./ui/section";

const useCases: {
  icon: IonName;
  title: string;
  description: string;
  channel: string;
}[] = [
  {
    icon: "cube-outline",
    title: "Field teams & ops",
    description: "Warehouses, delivery crews, on-site contractors. Coordinate without stopping work.",
    channel: "Dock 3",
  },
  {
    icon: "megaphone-outline",
    title: "Events & venues",
    description: "Stage managers, security, production. Everyone on the same channel, all night.",
    channel: "Stage Left",
  },
  {
    icon: "football-outline",
    title: "Sports coaching",
    description: "Sidelines, dugouts, practice fields. Call the play without the delay.",
    channel: "Sideline",
  },
  {
    icon: "car-outline",
    title: "Friends & road trips",
    description: "Split up, stay connected. Like a radio, but for the group-chat era.",
    channel: "Convoy",
  },
  {
    icon: "home-outline",
    title: "Family coordination",
    description: "Theme parks, airports, busy weekends. Quick check-ins, no fuss.",
    channel: "Park Day",
  },
];

/**
 * Heading in its own column (sticky on desktop), the crews as an editorial
 * list beside it: one icon, a title, a line, and the channel they'd open.
 */
export function UseCases() {
  return (
    <Section innerClassName="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:gap-24">
      <Reveal className="lg:sticky lg:top-32 lg:self-start">
        <h2 className="text-balance text-title-sm font-semibold text-heading md:text-title">
          One channel, <Highlight>every crew</Highlight>.
        </h2>
        <p className="mt-5 max-w-[26rem] text-pretty text-lead text-muted">
          Built for people who need clear voice now, not another meeting
          invite.
        </p>
      </Reveal>

      <ul className="border-t border-line">
        {useCases.map((item, i) => (
          <li key={item.title} className="border-b border-line">
            <Reveal delay={i * 0.04} className="flex items-start gap-5 py-8 sm:gap-6">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand-tint text-primary">
                <Ion name={item.icon} size={22} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                  <h3 className="text-h3 font-semibold text-heading">{item.title}</h3>
                  <span className="inline-flex h-7 items-center gap-1.5 rounded-full bg-tint px-3 text-[0.75rem] font-medium text-deep ring-1 ring-line">
                    <span className="size-1.5 rounded-full bg-azure" aria-hidden="true" />
                    {item.channel}
                  </span>
                </div>
                <p className="mt-2 max-w-[36rem] text-body text-muted">{item.description}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
