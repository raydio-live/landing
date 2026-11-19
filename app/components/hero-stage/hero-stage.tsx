"use client";

import { useState } from "react";
import { clock, Count, Phone, Roll, Stage, States, type Act } from "../../../stageshow/kit";
import { Ion } from "../ui/ionicons";
import "./hero-stage.css";

/*
 * Hero demo: Raydio's talk screen on an Android phone, in the app's own
 * layout, fonts (Inter, Space Grotesk) and icons (Ionicons), every state in
 * one blue.
 *
 * Story, ~13s:
 *   1. The channel is free (opening still).
 *   2. A thumb presses and holds the disc: "You are talking", the countdown
 *      runs and the signal goes out past the phone.
 *   3. Let go: the receipt counts up, "Heard by 1, 2, 3 of 3" (payoff, held).
 *   4. Marcus answers: "Marcus is talking", the disc says Wait.
 *   5. He finishes; the receipt expires as it does in the app, which is the
 *      opening frame again, so the loop has no seam.
 *
 * Real strings (all verbatim from the app): Ops Crew, Radio on, 4 people here,
 * You and 3 others, See, Channel is free / Hold the button and speak,
 * You are talking / Everyone can hear you, Marcus is talking / Wait for them
 * to finish, Hold to talk / Talking / Wait, Press and hold, then speak,
 * Press and hold, then speak, Let go to stop, Heard by 3 of 3.
 */

type Mode = "ready" | "onAir" | "busy";
/** heard: listeners who have heard my last message so far (0 = no receipt). */
type S = { mode: Mode; secs: number; held: boolean; heard: number };

const START: S = { mode: "ready", secs: 30, held: false, heard: 0 };
const POSTER: S = { mode: "onAir", secs: 27, held: true, heard: 0 };

const REST = { wide: { x: 430, y: 670 }, compact: { x: 266, y: 486 } };

const BANNER: Record<Mode, { title: string; detail: string }> = {
  ready: { title: "Channel is free", detail: "Hold the button and speak" },
  onAir: { title: "You are talking", detail: "Everyone can hear you" },
  busy: { title: "Marcus is talking", detail: "Wait for them to finish" },
};

const DISC: Record<Mode, string> = { ready: "Hold to talk", onAir: "Talking", busy: "Wait" };

const script = async (a: Act<S>) => {
  await a.wait(1000);
  // A finger is only drawn while it touches, so this travel is unseen. It
  // lands on the disc's upper right, clear of the label.
  const disc = a.rect("disc");
  const at = { x: disc.x + disc.width * 0.7, y: disc.y + disc.height * 0.32 };
  await a.move(at);
  await a.wait(150);

  // Press and hold: the disc gives under the thumb first, the floor is
  // granted a beat later (the app's claim), then the countdown runs. The
  // drag has no travel; it only keeps the finger down.
  a.mark("press");
  let start = 0;
  let shown = 30;
  const hold = a.drag(
    at,
    () => {
      const now = clock.now();
      if (!start) {
        start = now;
        a.put({ mode: "onAir", secs: 30 });
        return;
      }
      const left = 30 - Math.floor((now - start) / 1000);
      if (left !== shown) {
        shown = left;
        a.put({ secs: left });
      }
    },
    { duration: 3400 },
  );
  await a.wait(160);
  a.put({ held: true });
  await hold;

  // Let go: the floor is free, and the receipt counts up as each teammate's
  // phone plays the message.
  a.put({ held: false, mode: "ready" });
  a.mark("heard");
  await a.wait(420);
  for (const n of [1, 2, 3]) {
    a.put({ heard: n });
    await a.wait(n < 3 ? 360 : 2000);
  }

  // A teammate answers.
  a.mark("busy");
  a.put({ mode: "busy" });
  await a.wait(2800);
  a.put({ mode: "ready" });
  await a.wait(1300);

  // The receipt expires (the app clears it ten seconds after the last
  // update), which brings back the opening frame.
  a.mark("expire");
  a.put({ heard: 0 });
  await a.wait(700);
  // The countdown only shows on air; reset it while it is hidden.
  await a.snap({ secs: 30 });
  await a.move(a.layout === "compact" ? REST.compact : REST.wide);
  await a.wait(300);
};

const AVATARS = [
  { initials: "PS", tone: "me" },
  { initials: "ML", tone: "a" },
  { initials: "AK", tone: "b" },
];

function TalkScreen({ s }: { s: S }) {
  const banner = BANNER[s.mode];
  const hint = s.mode === "onAir" ? "talk" : s.heard > 0 ? "heard" : s.mode === "ready" ? "ready" : "none";

  return (
    <div className="rd-app" data-mode={s.mode}>
      <div className="rd-head">
        <span className="rd-back">
          <Ion name="arrow-back" size={24} />
        </span>
        <div className="rd-head__text">
          <div className="rd-title">Ops Crew</div>
          <div className="rd-radio">
            <span className="rd-radio__dot" />
            Radio on
          </div>
        </div>
      </div>

      <div className="rd-listeners">
        <span className="rd-stack">
          {AVATARS.map((p) => (
            <span key={p.initials} className="rd-avatar" data-tone={p.tone}>
              {p.initials}
            </span>
          ))}
          <span className="rd-avatar" data-tone="more">
            +1
          </span>
        </span>
        <span className="rd-listeners__text">
          <span className="rd-count">
            <span className="rd-count__dot" />
            4 people here
          </span>
          <span className="rd-preview">You and 3 others</span>
        </span>
        <span className="rd-see">
          See
          <Ion name="chevron-up" size={20} />
        </span>
      </div>

      <div className="rd-banner" data-mode={s.mode}>
        <span className="rd-banner__icon">
          <States
            value={s.mode}
            states={{
              ready: <Ion name="radio" size={28} />,
              onAir: <Ion name="mic" size={28} />,
              busy: <Ion name="volume-high" size={28} />,
            }}
          />
        </span>
        <span className="rd-banner__text">
          <span className="rd-banner__title">
            <Roll variant="fade">{banner.title}</Roll>
          </span>
          <span className="rd-banner__detail">
            <Roll variant="fade" delay={40}>{banner.detail}</Roll>
          </span>
        </span>
        <span className="rd-secs" data-show={s.mode === "onAir" || undefined}>
          <Count value={s.secs} format={(n) => `${n}s`} duration={420} />
        </span>
      </div>

      <div className="rd-floor">
        <span className="rd-halo" data-mode={s.mode}>
          <span className="rd-disc" data-target="disc" data-mode={s.mode} data-held={s.held || undefined}>
            {/* The mic stays put from ready to on air; only the words change.
                The hand swaps in for Wait. */}
            <span className="rd-disc__face">
              <States
                value={s.mode === "busy" ? "hand" : "mic"}
                states={{
                  mic: <Ion name="mic" size={68} />,
                  hand: <Ion name="hand-left" size={68} />,
                }}
              />
              <span className="rd-disc__label">
                <Roll variant="fade">{DISC[s.mode]}</Roll>
              </span>
            </span>
          </span>
        </span>
        <span className="rd-hint">
          <States
            value={hint}
            states={{
              ready: <span className="rd-hint__text">Press and hold, then speak</span>,
              talk: <span className="rd-hint__text">Let go to stop</span>,
              heard: (
                <span className="rd-hint__text rd-hint__text--heard">
                  <Ion name="checkmark-done" size={20} />
                  <Roll>{`Heard by ${s.heard} of 3`}</Roll>
                </span>
              ),
              none: <span className="rd-hint__text">{"\u00a0"}</span>,
            }}
          />
        </span>
      </div>
    </div>
  );
}

const LABEL =
  "Raydio's talk screen on an Android phone, channel Ops Crew. A thumb holds the talk button: \u201cYou are talking, everyone can hear you\u201d, with a 30-second countdown. On release the receipt reads \u201cHeard by 3 of 3\u201d. Then Marcus talks and the button says Wait.";

export function HeroStage() {
  // WCAG 2.2.2: a looping demo gets a pause. Paused, the stage holds its
  // poster (on air); playing again restarts the story from the top.
  const [paused, setPaused] = useState(false);

  return (
    <div className="relative">
      <div role="img" aria-label={LABEL}>
        <StageScene paused={paused} />
      </div>
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-pressed={paused}
        aria-label={paused ? "Play the demo" : "Pause the demo"}
        className="absolute bottom-4 right-11 grid size-11 place-items-center rounded-full bg-navy/75 text-white backdrop-blur transition-colors hover:bg-navy/90 min-[520px]:bottom-6 min-[520px]:right-0 min-[520px]:bg-white/85 min-[520px]:text-deep min-[520px]:shadow-card min-[520px]:ring-1 min-[520px]:ring-line min-[520px]:hover:bg-white"
      >
        <Ion name={paused ? "play" : "pause"} size={18} />
      </button>
    </div>
  );
}

function StageScene({ paused }: { paused: boolean }) {
  return (
    <Stage<S>
      width={560}
      height={712}
      compact={{ below: 520, width: 360, height: 520 }}
      initial={START}
      poster={POSTER}
      script={paused ? undefined : script}
      cursor={{ at: REST, style: "touch" }}
      greys="cool"
      className="rd"
    >
      {(s, rect, layout) => {
        const wide = layout === "wide";
        const disc = rect("disc");
        return (
          <>
            {/* The signal leaving the phone: rings from the disc, only on air. */}
            <span
              className="rd-rings"
              data-on={s.mode === "onAir" || undefined}
              style={{ left: disc.x + disc.width / 2, top: disc.y + disc.height / 2 }}
              aria-hidden="true"
            >
              <span />
              <span />
              <span />
            </span>
            <Phone
              width={wide ? 420 : 318}
              frame="android"
              className="rd-phone"
              style={{ left: wide ? 70 : 21, top: wide ? 48 : 24 }}
            >
              <TalkScreen s={s} />
            </Phone>
          </>
        );
      }}
    </Stage>
  );
}
