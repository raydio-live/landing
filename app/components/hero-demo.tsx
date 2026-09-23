"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { PhoneMockup } from "./phone-mockup";
import { SignalRings } from "./ui/signal-rings";

export function HeroDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [talking, setTalking] = useState(false);

  // Gentle depth: the phone drifts a little slower than the page.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [36, -36]);

  return (
    <div ref={ref} className="relative flex flex-col items-center">
      <SignalRings
        active={talking}
        className="left-1/2 top-[44%] w-[34rem] -translate-x-1/2 -translate-y-1/2 sm:w-[40rem]"
      />
      <motion.div style={reduceMotion ? undefined : { y }} className="relative">
        <PhoneMockup onTalkingChange={setTalking} />
      </motion.div>
      <p className="relative mt-7 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] font-medium text-muted ring-1 ring-line">
        <span className={`h-1.5 w-1.5 rounded-full ${talking ? "bg-brand" : "bg-faint"}`} aria-hidden="true" />
        {talking ? "You’re on air — let go to release" : "Try it: press and hold the button"}
      </p>
    </div>
  );
}
