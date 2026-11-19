import type { MotionProps, Transition } from "motion/react";

/** One spring for every reveal so the whole page moves the same way. */
export const spring: Transition = { type: "spring", bounce: 0, duration: 0.45 };

/** Tuned for slower, "developing" moves such as the highlight sweep. */
export const easeOutSoft = [0.22, 1, 0.36, 1] as const;

/** Reveals fire once, as soon as a sliver of the element is on screen. */
const viewport = { once: true, amount: 0.15 } as const;

export const fadeUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport,
  transition: spring,
} satisfies MotionProps;

export const blurIn = {
  initial: { opacity: 0, filter: "blur(10px)", scale: 1.03 },
  whileInView: { opacity: 1, filter: "blur(0px)", scale: 1 },
  viewport,
  transition: spring,
} satisfies MotionProps;

/** Gap between siblings that reveal together. */
export const STAGGER = 0.06;
