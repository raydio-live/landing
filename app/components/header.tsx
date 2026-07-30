"use client";

import { useState } from "react";
import { RaydioLogo } from "./logo";

const navLinks = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#use-cases", label: "Use cases" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="section-divider">
      <div className="relative flex h-16 items-center justify-between px-6 sm:px-10">
        <a href="#" className="flex items-center gap-2 z-10">
          <RaydioLogo className="h-7 w-7" />
          <span className="text-sm font-semibold tracking-tight text-gray-900">
            Raydio
          </span>
        </a>

        <nav className="dot-border absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center rounded-full bg-white md:flex">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-5 py-2.5 text-sm text-gray-500 transition-colors hover:text-gray-900 ${
                i > 0 ? "dot-border-l" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
          <a href="#download" className="dot-border-l flex items-center gap-2 px-4 py-1.5">
            <span className="btn-primary h-8 rounded-full px-4 text-xs">
              Get the app
            </span>
          </a>
        </nav>

        <button
          type="button"
          className="dot-border flex h-9 w-9 items-center justify-center rounded-lg md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            {menuOpen ? <path d="M5 5l10 10M15 5L5 15" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="dot-border-t px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2.5 text-sm text-gray-600 hover:bg-gray-50"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#download" className="btn-primary mt-2 h-10" onClick={() => setMenuOpen(false)}>
              Get the app
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
