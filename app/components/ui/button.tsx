import type { ReactNode } from "react";
import { Ion } from "./ionicons";

/**
 * Icon chip for the primary CTA. On hover two tiny bars either side of the mic
 * wiggle, like a level meter catching a voice.
 */
export function MicChip() {
  const bar =
    "rd-meter block h-2.5 w-[2px] origin-center scale-y-[0.45] rounded-full bg-white/80 group-hover:animate-wiggle motion-reduce:animate-none";
  return (
    <span className="btn-chip" aria-hidden="true">
      <span className="flex items-center gap-[2px]">
        <span className={bar} />
        <Ion name="mic" size={13} />
        <span className={bar} style={{ animationDelay: "0.18s" }} />
      </span>
    </span>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  external = false,
  chip,
  className = "",
  children,
}: {
  href: string;
  variant?: "primary" | "secondary" | "light";
  size?: "md" | "sm";
  external?: boolean;
  /** Small tile at the trailing edge, e.g. `<MicChip />`. */
  chip?: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className={`group btn-${variant} ${size === "sm" ? "btn-sm" : ""} ${chip ? "pr-2.5" : ""} ${className}`.trim()}
    >
      {children}
      {chip}
    </a>
  );
}
