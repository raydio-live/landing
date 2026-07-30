import type { ReactNode } from "react";
import { Footer } from "./footer";
import { RaydioLogo } from "./logo";
import { PageFrame } from "./ui/page-frame";

type LegalDocProps = {
  title: string;
  lastUpdated: string;
  children: ReactNode;
};

export function LegalDoc({ title, lastUpdated, children }: LegalDocProps) {
  return (
    <PageFrame>
      <header className="section-divider">
        <div className="flex h-14 items-center justify-between px-6 sm:px-10">
          <a href="/" className="flex items-center gap-2">
            <RaydioLogo className="h-7 w-7" />
            <span className="text-sm font-semibold tracking-tight text-gray-900">
              Raydio
            </span>
          </a>
          <a
            href="/"
            className="text-sm text-gray-500 transition-colors hover:text-gray-900"
          >
            Back to home
          </a>
        </div>
      </header>

      <main className="section-divider">
        <div className="mx-auto max-w-3xl px-6 py-12 sm:px-10 sm:py-16">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-gray-400">
            Legal
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-gray-500">
            Last updated: {lastUpdated}
          </p>

          <div className="legal-prose mt-10">{children}</div>
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
    <section id={id} className="mt-10 first:mt-0">
      <h2 className="text-lg font-semibold tracking-tight text-gray-900">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-gray-600">
        {children}
      </div>
    </section>
  );
}
