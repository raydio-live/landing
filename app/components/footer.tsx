import Link from "next/link";
import { RaydioLogo } from "./logo";

const footerLinks = {
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
    { label: "API", href: "https://api.raydio.live" },
    { label: "LLMs", href: "/llms.txt" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="grid gap-10 px-6 pb-14 pt-14 sm:px-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:px-12">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5" aria-label="Raydio home">
            <RaydioLogo className="h-9 w-auto" />
            <span className="text-[1.4rem] font-semibold tracking-tight text-foreground">
              Raydio
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-muted">
            Instant push-to-talk for teams. Your crew&rsquo;s radio, in your
            pocket.
          </p>
        </div>

        {Object.entries(footerLinks).map(([category, links]) => (
          <nav key={category} aria-label={category}>
            <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-faint">
              {category}
            </h3>
            <ul className="mt-5 space-y-3.5">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[15px] text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="flex flex-col items-start justify-between gap-2 border-t border-line px-6 py-6 sm:flex-row sm:items-center sm:px-10 lg:px-12">
        <p className="text-[13px] text-faint">
          &copy; {new Date().getFullYear()} Raydio. All rights reserved.
        </p>
        <p className="font-mono text-xs text-faint">
          Live voice first. Recording &amp; history coming later.
        </p>
      </div>
    </footer>
  );
}
