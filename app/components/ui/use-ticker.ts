"use client";

import { useInView, useReducedMotion } from "motion/react";
import { useEffect, useState, type RefObject } from "react";

/**
 * A counter that ticks every `ms` while `ref` is on screen. It never ticks for
 * reduced-motion visitors, and it stops when the section scrolls away.
 */
export function useTicker(ref: RefObject<Element | null>, ms: number, offset = 0) {
  const inView = useInView(ref, { amount: 0.3 });
  const reduceMotion = useReducedMotion();
  const [tick, setTick] = useState(0);
  const run = inView && !reduceMotion;

  useEffect(() => {
    if (!run) return;
    const id = window.setInterval(() => setTick((t) => t + 1), ms);
    return () => window.clearInterval(id);
  }, [run, ms]);

  return tick + offset;
}
