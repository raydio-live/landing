import type { ReactNode } from "react";

export function PageFrame({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-6xl border-x border-line bg-background">
      {children}
    </div>
  );
}

export function Section({
  children,
  id,
  className = "",
}: {
  children: ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={`border-b border-line ${className}`}>
      {children}
    </section>
  );
}
