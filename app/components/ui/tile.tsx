import type { ReactNode } from "react";
import { Reveal } from "./reveal";

/**
 * Bento tile: a small working UI in a pale well, then a caption. Every tile
 * shares one frame (8px), one well radius and one caption inset, so edges
 * line up across the grid.
 */
export function Tile({
  title,
  description,
  children,
  className = "",
  delay = 0,
}: {
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <Reveal variant="blur" delay={delay} className={className}>
      <article className="flex h-full flex-col rounded-[1.75rem] bg-white p-2 shadow-card">
        <div className="flex min-h-56 flex-1 items-center rounded-[1.25rem] bg-[linear-gradient(180deg,#eef4ff,#f6f9ff)] p-5 sm:p-6">
          {children}
        </div>
        <div className="px-5 pb-6 pt-6 sm:px-6">
          <h3 className="text-[1.0625rem] font-semibold leading-snug tracking-[-0.01em] text-heading">
            {title}
          </h3>
          <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{description}</p>
        </div>
      </article>
    </Reveal>
  );
}
