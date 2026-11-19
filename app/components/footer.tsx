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
    { label: "LLMs", href: "/llms.txt" },
  ],
};

/** Very quiet: no motion, no watermark. `className` lets the landing page clear its fixed dial. */
export function Footer({ className = "" }: { className?: string }) {
  return (
    <footer className={`border-t border-line bg-background text-foreground ${className}`.trim()}>
      <div className="container-page">
        <div className="grid gap-14 pb-16 pt-16 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-24 lg:pt-20">
          <div className="max-w-[20rem]">
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label="Raydio home">
              <RaydioLogo className="h-7 w-auto" />
              <span className="text-[1.0625rem] font-semibold tracking-[-0.02em] text-ink">Raydio</span>
            </Link>
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted">
              Instant push-to-talk for teams. Your crew&rsquo;s radio, in your
              pocket.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-20">
            {Object.entries(footerLinks).map(([category, links]) => (
              <nav key={category} aria-label={category}>
                <h3 className="text-small font-semibold text-ink">{category}</h3>
                <ul className="mt-4 space-y-1">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...(link.external && {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        })}
                        className="inline-flex min-h-9 items-center text-[0.9375rem] text-muted transition-colors hover:text-primary"
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

        <div className="flex flex-col gap-2 border-t border-line py-7 text-caption text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Raydio. All rights reserved.</p>
          <p>Live voice first. Recording &amp; history coming later.</p>
        </div>
      </div>
    </footer>
  );
}
