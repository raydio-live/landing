"use client";

import { useState } from "react";
import { PLAY_STORE_URL } from "../lib/store";
import { RaydioWordmark } from "./logo";

const navLinks = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#use-cases", label: "Use cases" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/85 backdrop-blur-xl">
      <div className="hidden h-16 items-center justify-between px-8 md:flex lg:px-12">
        <a href="#" className="flex items-center" aria-label="Raydio home">
          <RaydioWordmark />
        </a>

        <nav className="flex items-center gap-1" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:bg-mist hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="mailto:hello@raydio.live"
            className="rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            Contact
          </a>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center rounded-full bg-ink px-5 text-sm font-semibold text-white transition-colors hover:bg-brand"
          >
            Get the app
          </a>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex h-16 items-center justify-between px-5 md:hidden">
        <a href="#" className="flex items-center" aria-label="Raydio home">
          <RaydioWordmark />
        </a>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
            {menuOpen ? <path d="M5 5l10 10M15 5L5 15" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-line px-5 py-4 md:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-3 text-[15px] font-medium text-foreground hover:bg-mist"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white"
              onClick={() => setMenuOpen(false)}
            >
              Get the app
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
