"use client";

import { AnimatePresence, motion } from "motion/react";

/** The old label slides out vertically as the new one slides in, like a dial changing frequency. */
export function TextRoll({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={`relative inline-flex overflow-hidden align-bottom ${className}`.trim()}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={text}
          initial={{ y: "75%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-75%", opacity: 0 }}
          transition={{ type: "spring", bounce: 0, duration: 0.35 }}
          className="block whitespace-nowrap"
        >
          {text}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
