import type { ReactNode } from "react";
import Link from "next/link";
import { Footer } from "./footer";
import { RaydioWordmark } from "./logo";
import { PageFrame } from "./ui/page-frame";

type LegalDocProps = {
  title: string;
  lastUpdated: string;
  children: ReactNode;
};

export function LegalDoc({ title, lastUpdated, children }: LegalDocProps) {
  return (
    <PageFrame>
      <header className="sticky top-0 z-50 border-b border-line bg-background/85 backdrop-blur-xl">
        <div className="flex h-16 items-center justify-between px-6 sm:px-10">
          <Link href="/" className="flex items-center" aria-label="Raydio home">
            <RaydioWordmark />
          </Link>
          <Link
            href="/"
            className="rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:bg-mist hover:text-foreground"
          >
            Back to home
          </Link>
        </div>
      </header>

      <main className="border-b border-line bg-white">
        <div className="mx-auto max-w-3xl px-6 py-14 sm:px-10 sm:py-20">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-faint">
            <span className="text-brand">Docs</span>
            <span aria-hidden="true"> / </span>
            Legal
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-balance sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-faint">
            Last updated · {lastUpdated}
          </p>

          <div className="legal-prose mt-12 border-t border-line pt-10">{children}</div>
        </div>
      </main>

      <Footer />
    </PageFrame>
  );
}

export function LegalSection({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mt-10 border-t border-line pt-8 first:mt-0 first:border-t-0 first:pt-0">
      <h2 className="text-[1.45rem] font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-muted">
        {children}
      </div>
    </section>
  );
}
