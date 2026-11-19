"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { blurIn, fadeUp, spring } from "../../lib/motion";

/**
 * Reveals its children once, as they scroll into view. The hidden state lives
 * in the server HTML, so never wrap anything above the fold: the hero renders
 * instantly and only content below it earns an entrance.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  variant = "fade-up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "fade-up" | "blur";
}) {
  const preset = variant === "blur" ? blurIn : fadeUp;
  return (
    <motion.div
      data-reveal=""
      className={className}
      {...preset}
      transition={{ ...spring, delay }}
    >
      {children}
    </motion.div>
  );
}
