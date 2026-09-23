import Link from "next/link";
import { RaydioLogo } from "./logo";

type FooterLink = { label: string; href: string; external?: boolean };

const footerLinks: Record<string, FooterLink[]> = {
  Product: [
    { label: "Features", href: "/#features" },
    { label: "How it works", href: "/#how-it-works" },
    { label: "Join channel", href: "/#join" },
  ],
  Legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
  Connect: [
    { label: "Contact", href: "mailto:hello@raydio.live" },
    { label: "API", href: "https://api.raydio.live", external: true },
    { label: "LLMs", href: "/llms.txt" },
  ],
};

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-line bg-white text-foreground">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">
        <div className="grid gap-12 pb-16 pt-16 sm:pt-20 lg:grid-cols-[1fr_auto] lg:gap-24">
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center gap-3" aria-label="Raydio home">
              <RaydioLogo className="h-8 w-auto" />
              <span className="text-lg font-semibold tracking-tight">Raydio</span>
            </Link>
            <p className="mt-5 text-[15px] leading-relaxed text-muted">
              Instant push-to-talk for teams. Your crew&rsquo;s radio, in your
              pocket.
            </p>
            <a
              href="mailto:hello@raydio.live"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-background px-4 py-2 text-sm text-muted transition-colors hover:border-[#cfcfc8] hover:text-foreground"
            >
              <span className="animate-live-pulse h-1.5 w-1.5 rounded-full bg-signal" />
              hello@raydio.live
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-16">
            {Object.entries(footerLinks).map(([category, links]) => (
              <nav key={category} aria-label={category}>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                  {category}
                </h3>
                <ul className="mt-5 space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...(link.external && {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        })}
                        className="text-[15px] text-muted transition-colors hover:text-foreground"
                      >
                        {link.label}
                        {link.external && (
                          <span aria-hidden="true" className="ml-1 text-faint">
                            ↗
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-line py-6 text-[13px] text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Raydio. All rights reserved.</p>
          <p>Live voice first. Recording &amp; history coming later.</p>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="pointer-events-none select-none pb-[0.2em] pt-4 text-center text-[24vw] font-semibold leading-[0.9] tracking-[-0.05em] text-brand-tint lg:text-[15rem]"
      >
        Raydio
      </p>
    </footer>
  );
}
