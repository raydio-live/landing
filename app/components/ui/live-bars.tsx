"use client";

import { animate, useInView, useMotionValue, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

/** Each bar's resting height and its own wobble speed, so the row never moves in lockstep. */
const SHAPE = [0.4, 0.7, 1, 0.6, 0.85, 0.5, 0.9, 0.55, 0.75, 0.45, 0.8, 0.6];
const SPEED = [0.9, 1.7, 1.1, 2.3, 1.4, 2.0, 0.8, 1.9, 1.3, 2.1, 1.0, 1.6];

/**
 * Level-meter bars. They follow a motion value that springs up when `active`
 * and settles back when it isn't, so release feels physical. Nothing runs
 * while the bars are off screen or at rest.
 */
export function LiveBars({
  active,
  level = 1,
  count = 10,
  className = "bg-primary",
  height = "h-6",
  barWidth = "w-[3px]",
}: {
  active: boolean;
  /** 0–1 ceiling for how loud the bars get while active. */
  level?: number;
  count?: number;
  className?: string;
  height?: string;
  barWidth?: string;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const barRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const amount = useMotionValue(0);
  const inView = useInView(rootRef);
  const reduceMotion = useReducedMotion();
  const run = active && inView;

  useEffect(() => {
    const controls = animate(amount, run ? level : 0, {
      type: "spring",
      bounce: 0,
      duration: run ? 0.2 : 0.25,
    });
    return () => controls.stop();
  }, [run, level, amount]);

  useEffect(() => {
    let raf = 0;
    const paint = (t: number) => {
      const a = amount.get();
      barRefs.current.forEach((el, i) => {
        if (!el) return;
        const shape = SHAPE[i % SHAPE.length];
        const rest = shape * 0.4;
        const wobble = reduceMotion
          ? 0.7
          : Math.abs(
              Math.sin(t / (150 + SPEED[i % SPEED.length] * 70) + i * 1.3) *
                Math.cos(t / 430 + i * 0.7),
            );
        el.style.transform = `scaleY(${rest + (shape - rest) * a * (0.35 + 0.65 * wobble)})`;
      });
      if (run || a > 0.01) raf = requestAnimationFrame(paint);
    };
    raf = requestAnimationFrame(paint);
    return () => cancelAnimationFrame(raf);
  }, [run, amount, reduceMotion]);

  return (
    <div ref={rootRef} className={`flex ${height} items-center gap-[3px]`} aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          ref={(el) => {
            barRefs.current[i] = el;
          }}
          className={`${barWidth} h-full origin-center rounded-full ${className}`}
          style={{ transform: `scaleY(${SHAPE[i % SHAPE.length] * 0.4})` }}
        />
      ))}
    </div>
  );
}
