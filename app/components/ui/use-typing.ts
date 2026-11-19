"use client";

import { useInView, useReducedMotion } from "motion/react";
import { useEffect, useState, type RefObject } from "react";

/** Types `text` out once, the first time `ref` is mostly on screen. Reduced motion gets the full text. */
export function useTyping(text: string, ref: RefObject<Element | null>) {
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || reduceMotion || count >= text.length) return;
    const id = window.setTimeout(() => setCount(count + 1), count === 0 ? 450 : 55);
    return () => window.clearTimeout(id);
  }, [inView, reduceMotion, count, text.length]);

  const shown = reduceMotion ? text.length : count;
  return { typed: text.slice(0, shown), done: shown >= text.length };
}
