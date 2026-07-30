import type { ReactNode } from "react";

export function PageFrame({ children }: { children: ReactNode }) {
  return <div className="page-frame">{children}</div>;
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
    <section id={id} className={`section-divider ${className}`}>
      {children}
    </section>
  );
}
