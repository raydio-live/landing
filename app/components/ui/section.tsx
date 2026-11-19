import type { ReactNode } from "react";
import { Reveal } from "./reveal";

/**
 * Every block on the page goes through this shell: one container (the same
 * edges as the header), one vertical rhythm, one ground per section.
 */
export function Section({
  id,
  tone = "white",
  className = "",
  innerClassName = "",
  children,
}: {
  id?: string;
  tone?: "white" | "tint";
  className?: string;
  innerClassName?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`section-y ${tone === "tint" ? "bg-tint" : "bg-background"} ${className}`.trim()}
    >
      <div className={`container-page ${innerClassName}`.trim()}>{children}</div>
    </section>
  );
}

/**
 * Title plus one quiet line. Centered for full-width content, left-aligned
 * beside a column of its own.
 */
export function SectionHeading({
  title,
  description,
  align = "center",
  className = "",
}: {
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  const alignClass = align === "center" ? "mx-auto items-center text-center" : "items-start text-left";

  return (
    <Reveal className={`flex max-w-[40rem] flex-col ${alignClass} ${className}`.trim()}>
      <h2 className="text-balance text-title-sm font-semibold text-heading md:text-title">{title}</h2>
      {description && (
        <p className="mt-5 max-w-[34rem] text-pretty text-lead text-muted">{description}</p>
      )}
    </Reveal>
  );
}
