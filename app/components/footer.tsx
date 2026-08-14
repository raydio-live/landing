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
  ],
};

export function Footer() {
  return (
    <footer>
      <div className="dot-grid dot-border-t grid lg:grid-cols-4">
        <div className="p-8 sm:p-10">
          <a href="/" className="inline-flex items-center gap-2.5">
            <RaydioLogo className="h-10 w-auto" />
            <span className="text-2xl font-semibold tracking-tight text-gray-900">
              Raydio
            </span>
          </a>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-gray-500">
            Instant push-to-talk for teams. Your crew&apos;s radio, in your pocket.
          </p>
          <p className="mt-6 font-mono text-sm text-gray-400">raydio.live</p>
        </div>

        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category} className="p-8 sm:p-10">
            <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-gray-400">
              {category}
            </h4>
            <ul className="mt-4 space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="dot-border-t flex flex-col items-center justify-between gap-3 px-8 py-6 sm:flex-row sm:px-10">
        <p className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Raydio. All rights reserved.
        </p>
        <p className="text-xs text-gray-400">
          Live voice first. Recording &amp; history coming later.
        </p>
      </div>
    </footer>
  );
}
