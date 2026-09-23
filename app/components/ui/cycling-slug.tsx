"use client";

import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

/** Rotates through example channel slugs while on screen. */
export function CyclingSlug({ slugs, interval = 2400 }: { slugs: string[]; interval?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref);
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!inView || reduceMotion || slugs.length < 2) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % slugs.length), interval);
    return () => window.clearInterval(id);
  }, [inView, reduceMotion, slugs.length, interval]);

  return (
    <span ref={ref} className="relative inline-flex overflow-hidden align-bottom text-brand">
      {/* Screen readers get one stable example instead of a changing value. */}
      <span className="sr-only">{slugs[0]}</span>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={slugs[index]}
          aria-hidden="true"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          {slugs[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
