"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { PLAY_STORE_URL } from "../lib/store";
import { RaydioWordmark } from "./logo";
import { Ion } from "./ui/ionicons";

const navLinks = [
  { id: "how-it-works", label: "How it works" },
  { id: "features", label: "Features" },
  { id: "use-cases", label: "Use cases" },
  { id: "private", label: "Privacy" },
];

/**
 * Sits on the page's own container, so the logo shares the hero's left edge
 * and the button its right edge. Clear over the hero; once the page moves,
 * a white blur and a hairline.
 */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
    <header className="fixed inset-x-0 top-0 z-70">
      <div
        className={`border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${
          solid ? "border-line bg-white/85 backdrop-blur-xl" : "border-transparent bg-transparent"
        }`}
      >
        <div className="container-page relative flex h-[4.5rem] items-center justify-between">
          <a href="#top" className="-m-2 flex items-center rounded-xl p-2" aria-label="Raydio home">
            <RaydioWordmark />
          </a>

          <nav
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex"
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="rounded-lg px-3.5 py-2 text-small font-medium text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-sm"
            >
              Get the app
            </a>
          </div>

          <button
            type="button"
            className="-mr-2.5 flex size-11 items-center justify-center rounded-xl text-ink transition-colors hover:bg-mist md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <Ion name={menuOpen ? "close" : "menu-outline"} size={24} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="scrim"
              aria-hidden="true"
              className="fixed inset-0 -z-10 bg-navy/20 backdrop-blur-[2px] md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              key="menu"
              id="mobile-menu"
              className="border-b border-line bg-white md:hidden"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ type: "spring", bounce: 0, duration: 0.3 }}
            >
              <nav className="container-page flex flex-col pb-6 pt-2" aria-label="Mobile">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className="-mx-3 flex min-h-12 items-center rounded-xl px-3 text-body font-medium text-ink transition-colors hover:bg-mist"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-4"
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
