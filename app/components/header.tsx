"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { PLAY_STORE_URL } from "../lib/store";
import { RaydioWordmark } from "./logo";

const navLinks = [
  { id: "how-it-works", label: "How it works" },
  { id: "features", label: "Features" },
  { id: "use-cases", label: "Use cases" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav item for whichever section sits in the middle of the viewport.
  useEffect(() => {
    const sections = navLinks
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (!sections.length || typeof IntersectionObserver === "undefined") return;

    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        setActive(navLinks.find(({ id }) => visible.has(id))?.id ?? null);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Mobile menu: close on Escape or when the viewport grows to desktop, and
  // stop the page behind it from scrolling.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    const desktop = window.matchMedia("(min-width: 768px)");
    const onChange = () => desktop.matches && setMenuOpen(false);
    const prevOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onChange);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onChange);
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4">
      <div
        className={`mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full pl-5 pr-2 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
          solid
            ? "bg-background/80 ring-1 ring-line backdrop-blur-xl backdrop-saturate-150"
            : "bg-transparent ring-1 ring-transparent"
        }`}
      >
        <a href="#top" className="flex items-center rounded-full" aria-label="Raydio home">
          <RaydioWordmark />
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={active === link.id ? "true" : undefined}
              className={`relative isolate rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === link.id ? "text-foreground" : "text-muted hover:text-foreground"
              }`}
            >
              {active === link.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-mist"
                  transition={{ type: "spring", stiffness: 400, damping: 34 }}
                />
              )}
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-1 md:flex">
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
            className="inline-flex h-10 items-center rounded-full bg-ink px-5 text-sm font-semibold text-white transition-colors hover:bg-ink-soft"
          >
            Get the app
          </a>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-colors hover:bg-mist md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
            {menuOpen ? <path d="M5 5l10 10M15 5L5 15" /> : <path d="M3 7h14M3 13h14" />}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="scrim"
              aria-hidden="true"
              className="fixed inset-0 -z-10 bg-ink/10 backdrop-blur-[2px] md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              key="menu"
              id="mobile-menu"
              className="mx-auto mt-2 max-w-6xl rounded-3xl bg-white p-3 ring-1 ring-line md:hidden"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <nav className="flex flex-col" aria-label="Mobile">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className="rounded-2xl px-4 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-mist"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="mailto:hello@raydio.live"
                  className="rounded-2xl px-4 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-mist"
                >
                  Contact
                </a>
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-2"
                  onClick={() => setMenuOpen(false)}
                >
                  Get the app
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
