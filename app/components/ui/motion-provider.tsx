"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/** Reduced-motion visitors get opacity changes only: no transforms, no layout tweens. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
