import type { ReactNode } from "react";
import { FadeIn } from "./fade-in";

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
}: {
  label?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <FadeIn className={`max-w-2xl ${alignClass}`}>
      {label && (
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-gray-400">
          {label}
        </p>
      )}
      <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-gray-500">
          {description}
        </p>
      )}
    </FadeIn>
  );
}
