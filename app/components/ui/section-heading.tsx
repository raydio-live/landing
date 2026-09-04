import type { ReactNode } from "react";
import { FadeIn } from "./fade-in";

export function SectionHeading({
  index,
  label,
  title,
  description,
  align = "center",
  dark = false,
}: {
  index?: string;
  label?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  const alignClass = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";
  const kickerColor = dark ? "text-white/50" : "text-faint";
  const titleColor = dark ? "text-white" : "text-foreground";
  const descColor = dark ? "text-white/60" : "text-muted";

  return (
    <FadeIn className={`flex max-w-2xl flex-col ${alignClass}`}>
      {(index || label) && (
        <p className={`flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.22em] ${kickerColor}`}>
          {index && <span className="text-brand">{index}</span>}
          {index && label && <span aria-hidden="true">/</span>}
          {label && <span>{label}</span>}
        </p>
      )}
      <h2 className={`mt-4 font-display text-4xl font-medium leading-[1.05] tracking-[-0.01em] text-balance sm:text-[2.75rem] ${titleColor}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-pretty ${descColor}`}>
          {description}
        </p>
      )}
    </FadeIn>
  );
}
