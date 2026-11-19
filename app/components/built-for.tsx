import { Ion, type IonName } from "./ui/ionicons";

const audiences: { icon: IonName; name: string; note: string }[] = [
  { icon: "cube-outline", name: "Field ops", note: "Warehouses & delivery" },
  { icon: "megaphone-outline", name: "Event crews", note: "Stages & venues" },
  { icon: "stopwatch-outline", name: "Coaching staff", note: "Sidelines & practice" },
  { icon: "car-outline", name: "Road trips", note: "Convoys & weekends" },
];

/** Static on purpose: it sits at the fold, so it paints with the hero. */
export function BuiltFor() {
  return (
    <div className="bg-background py-14 md:py-16">
      <div className="container-page flex flex-col items-center gap-9 xl:flex-row xl:gap-14">
        <p className="max-w-[12rem] shrink-0 text-center text-small font-medium text-faint xl:text-left">
          Built for crews who coordinate live
        </p>
        <ul className="grid w-full max-w-[40rem] grid-cols-2 gap-x-6 gap-y-8 lg:max-w-none lg:grid-cols-4 xl:gap-0">
          {audiences.map((a) => (
            <li
              key={a.name}
              className="flex items-center gap-3.5 xl:border-l xl:border-line xl:pl-8"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand-tint text-primary">
                <Ion name={a.icon} size={20} />
              </span>
              <span className="min-w-0">
                <span className="block text-small font-semibold text-ink">{a.name}</span>
                <span className="mt-0.5 block text-caption text-faint">{a.note}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
