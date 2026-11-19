import type { ReactNode } from "react";

/**
 * The one phrase per heading that carries the brand: the vibrant end of the
 * blue ramp, as a gradient through the ink. Headings are 36px and up, so the
 * lightest stop (3.7:1) still clears AA for large text.
 */
export function Highlight({ children }: { children: ReactNode; animate?: boolean }) {
  return (
    <span className="bg-linear-to-r from-primary to-azure bg-clip-text text-transparent [-webkit-box-decoration-break:clone] [box-decoration-break:clone]">
      {children}
    </span>
  );
}
