"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { STAGGER } from "../lib/motion";
import { Highlight } from "./ui/highlight";
import { Ion, type IonName } from "./ui/ionicons";
import { Reveal } from "./ui/reveal";
import { Section, SectionHeading } from "./ui/section";

const trustPoints: { icon: IonName; title: string; description: string }[] = [
  {
    icon: "lock-closed-outline",
    title: "Member-only channels",
    description: "Channels are private to your group. No public feed, no stranger discovery.",
  },
  {
    icon: "key-outline",
    title: "Email OTP login",
    description: "Sign in with a one-time code. No passwords to leak, no social graph required.",
  },
  {
    icon: "people-outline",
    title: "Built for your crew",
    description: "Invite the people you work with. Simple profiles, clear identity on the channel.",
  },
];

const members = ["M", "A", "J", "S", "P", "L"];
/** Ring radius, in container-width units so the whole picture scales together. */
const RING = 26;
const AVATAR = 9;
/** Where the outsider waits, and how far it travels before it meets the ring. */
const OUTSIDER_REST = 45;
const OUTSIDER_TRAVEL = OUTSIDER_REST - (RING + AVATAR / 2 + 1);
const CYCLE = 10;

/**
 * Members snap into a ring around the lock. Every ten seconds an outsider
 * drifts in, meets the ring, and bounces off with a small shake.
 */
function PrivateChannelVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  const avatar =
    "absolute grid place-items-center rounded-full font-semibold text-[3.4cqw] ring-[0.6cqw] ring-white";
  const size = { width: `${AVATAR}cqw`, height: `${AVATAR}cqw` };

  return (
    <div
      ref={ref}
      className="relative mx-auto aspect-square w-full max-w-[30rem] overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_50%_50%,#ffffff_0%,#eef4ff_70%)] shadow-card [container-type:inline-size]"
      role="img"
      aria-label="Members of a private channel arranged in a ring around a lock, while an outsider is turned away."
    >
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] border-dashed border-brand-soft"
        style={{ width: `${RING * 2}cqw`, height: `${RING * 2}cqw` }}
        animate={inView ? { x: [0, 0, -3, 3, -2, 0, 0] } : undefined}
        transition={{
          duration: CYCLE,
          delay: 1.4,
          repeat: Infinity,
          times: [0, 0.085, 0.1, 0.115, 0.13, 0.145, 1],
        }}
      />

      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-linear-to-b from-[#0a6cf0] to-[#0757d0] text-white shadow-[0_12px_32px_-8px_rgba(8,98,224,0.55),inset_0_1px_0_rgba(255,255,255,0.22)]"
        style={{ width: "17cqw", height: "17cqw" }}
      >
        <Ion name="lock-closed-outline" size={28} />
      </div>

      {members.map((initial, i) => {
        const angle = ((-90 + i * 60) * Math.PI) / 180;
        const dx = Math.cos(angle) * RING;
        const dy = Math.sin(angle) * RING;
        return (
          <motion.span
            key={initial}
            data-reveal=""
            aria-hidden="true"
            className={`${avatar} ${i === 0 ? "bg-navy text-white" : "bg-white text-deep"} shadow-card`}
            style={{
              ...size,
              left: `calc(50% + ${dx}cqw - ${AVATAR / 2}cqw)`,
              top: `calc(50% + ${dy}cqw - ${AVATAR / 2}cqw)`,
            }}
            initial={{ x: `${dx * 1.4}cqw`, y: `${dy * 1.4}cqw`, opacity: 0, scale: 0.6 }}
            animate={inView ? { x: "0cqw", y: "0cqw", opacity: 1, scale: 1 } : undefined}
            transition={{ type: "spring", bounce: 0.25, duration: 0.7, delay: 0.1 + i * STAGGER }}
          >
            {initial}
          </motion.span>
        );
      })}

      <motion.span
        data-reveal=""
        aria-hidden="true"
        className={`${avatar} border-[1.5px] border-dashed border-line-strong bg-tint text-faint`}
        style={{
          ...size,
          left: `calc(50% + ${OUTSIDER_REST}cqw - ${AVATAR / 2}cqw)`,
          top: `calc(50% - ${AVATAR / 2}cqw)`,
        }}
        initial={{ opacity: 0 }}
        animate={
          inView
            ? {
                opacity: 1,
                x: ["0cqw", `-${OUTSIDER_TRAVEL}cqw`, "0cqw", "0cqw"],
              }
            : undefined
        }
        transition={{
          opacity: { duration: 0.4, delay: 1 },
          x: {
            duration: CYCLE,
            delay: 1.4,
            repeat: Infinity,
            times: [0, 0.085, 0.17, 1],
            ease: ["easeIn", "easeOut", "linear"],
          },
        }}
      >
        ?
      </motion.span>

      <p className="absolute inset-x-0 bottom-[6cqw] text-center text-[3.2cqw] font-medium text-muted">
        Members only · Ops Crew
      </p>
    </div>
  );
}

export function Trust() {
  return (
    <Section
      tone="tint"
      innerClassName="grid grid-cols-1 items-center gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,30rem)] lg:gap-24"
    >
      <div>
        <SectionHeading
          align="left"
          title={
            <>
              Your channel.
              <br />
              <Highlight>Your people.</Highlight>
            </>
          }
          description="No spammy social features. No public broadcasts. Just your team’s radio."
        />

        <ul className="mt-12 space-y-8">
          {trustPoints.map((point, i) => (
            <li key={point.title}>
              <Reveal delay={i * STAGGER} className="flex gap-5">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white text-primary shadow-card">
                  <Ion name={point.icon} size={22} />
                </span>
                <div className="pt-0.5">
                  <h3 className="text-[1.0625rem] font-semibold leading-snug tracking-[-0.01em] text-heading">
                    {point.title}
                  </h3>
                  <p className="mt-1.5 max-w-[26rem] text-body text-muted">{point.description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      <Reveal variant="blur" delay={0.05}>
        <PrivateChannelVisual />
      </Reveal>
    </Section>
  );
}
