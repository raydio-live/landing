import type { ReactNode } from "react";

export function Highlight({ children }: { children: ReactNode }) {
  return <em className="accent">{children}</em>;
}
