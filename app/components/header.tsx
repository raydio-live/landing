"use client";

import { useState } from "react";
import { RaydioWordmark } from "./logo";

const navLinks = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#use-cases", label: "Use cases" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="section-divider">
      {/* Desktop: full-width segmented bar */}
      <div className="hidden h-14 md:grid md:grid-cols-[1fr_auto_auto_auto_auto]">
        <a
          href="#"
          className="dot-border-r flex items-center gap-2 px-6 sm:px-10"
        >
          <RaydioWordmark />
        </a>

        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="dot-border-r flex items-center px-5 text-sm text-gray-500 transition-colors hover:text-gray-900"
          >
            {link.label}
          </a>
        ))}

        <a
          href="#download"
          className="flex items-center px-4 sm:px-5"
        >
          <span className="btn-primary h-8 rounded-md px-4 text-xs">
            Get the app
          </span>
        </a>
      </div>

      {/* Mobile */}
      <div className="flex h-14 items-center justify-between px-6 md:hidden">
        <a href="#" className="flex items-center gap-2">
          <RaydioWordmark />
        </a>

        <button
          type="button"
          className="dot-border flex h-9 w-9 items-center justify-center rounded-lg"
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
            <a
              href="#download"
              className="btn-primary mt-2 h-10"
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
