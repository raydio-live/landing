import type { ReactNode } from "react";
import { FadeIn } from "./fade-in";

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
  const alignClass =
    align === "center" ? "mx-auto items-center text-center" : "items-start text-left";

  return (
    <FadeIn className={`flex max-w-2xl flex-col ${alignClass} ${className}`.trim()}>
      <h2 className="text-balance text-[2.25rem] font-semibold leading-[1.05] tracking-[-0.025em] text-foreground sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-xl text-pretty text-[1.0625rem] leading-relaxed text-muted">
          {description}
        </p>
      )}
    </FadeIn>
  );
}
