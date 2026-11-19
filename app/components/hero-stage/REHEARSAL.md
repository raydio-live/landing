# Rehearsal: Raydio hero (talk screen)

Gold: `phone-touch`. Kept: a phone pinned from the top, centered, running off
the bottom of the stage, touch cursor, an in-app state story that loops back to
its opening frame with no navigation. Changed: an Android (Pixel) frame instead
of an iPhone; the screen is Raydio's real talk screen (ScreenHeader, the
collapsed ListenersPanel, the TalkControls banner and disc) at the app's own
sizes, in the app's own fonts (Inter, Space Grotesk) and icons (Ionicons, copied
verbatim from ionicons@7.4.0); no satellite.

Brief constraint: shades of blue only. The app's real states are green (radio
on), red (on air) and amber (wait). Here they are told apart by lightness, icon
and words instead: ready = vibrant #0862E0 disc, on air = navy #0A1F4D disc and
banner with a countdown, wait = pale #DBE8FD disc with the hand icon.

Beats: opening still (Channel is free, Press and hold, then speak) → the
thumb lands, the disc gives (the app's claim), then You are talking, 30s → 27s,
rings leave the phone → let go: the receipt counts Heard by 1, 2, 3 of 3
(payoff, held 2s) → Marcus is talking, Wait (2.8s) → Channel is free → the
receipt expires, as the app clears it 10s after the last update = opening
frame. Loop ~15s. Poster (reduced motion): on air, 27s.

Strings, all verbatim from the Android source: Ops Crew, Radio on, 4 people
here, You and 3 others, See, Channel is free / Hold the button and speak, You
are talking / Everyone can hear you, Marcus is talking / Wait for them to
finish, Hold to talk / Talking / Wait, Press and hold, then speak, Let go to
stop, Heard by N of 3.

Captured: wide 560×712 at 1:1 (phone 420); compact 360×520 (phone 318),
drawn at 360 and grown to the phone's width by the hero wrapper's
data-ss-fill, so the stage runs to the screen edges. Filmed in the page at
1440, 390 and 360; `--states` and `--reduced` on the page; each beat (press,
heard, busy, expire) at 40ms. Light look only (the site is light only).
Measured at 360, 390 and 412: no horizontal overflow, smallest phone text
10.3px.

Gate (final, on http://localhost:3000/): `rehearsal passed` on the 1440 loop,
the 390 loop, the 360 loop and `--states`.

Host: the stage sits in a role="img" wrapper with a spoken description (its
mounted strings are not read out one by one), and a 44px pause/play control
(WCAG 2.2.2): paused, the stage holds its poster; play restarts the story.
Scrolling away mid-press and back restarts cleanly, with no console errors.

Film:
- `kit override` (phone status, island, home, screen): the selectors are the
  kit's own Android rules in `kit/phone.css`, inside `@layer stageshow`. Next
  bundles kit CSS into shared chunks, so film's `/kit/` URL test can't tell
  them from the scene's CSS. Filmed with a copy of film-checks that skips
  `@layer stageshow` rules; nothing in hero-stage.css touches `.ss-phone__*`.
- `settle snap` / `jump: span "0"…"9"`: `Count` re-homing its digit strips
  under its own `data-snap` after each roll (invisible by design), plus the
  countdown reset while the timer is hidden (`a.snap`).
- Hydration mismatch when filming `/`: film adds `data-ss-verification-stage`
  before React hydrates. A plain load at 1440 and 390 logs no errors or
  warnings.
- Fixed along the way: finger landing at rest and swiping in (now moves
  unseen, then holds off the label), uneven padding in the listeners card, a
  half-pixel mic glyph, text hopping on transforms, the `s` unit touching its
  digits, compact phone short of its gutter and 9px type at 390.

Review (fresh eye, against phone-touch), and what changed:
1. 390: the stage edge cut the phone's shadow 24px in, boxing it → compact
   is now 390 wide and runs to the screen edges, phone 36px from each side.
2. Signal rings nearly invisible → 2px stroke, held bright until they clear
   the bezel, sized to fade before the stage edge.
3. Phone smaller and looser than the gold (68% of the stage) → 420 wide (75%).
4. Payoff frame equal to the opening (receipt shown before anyone spoke) →
   opens on "Press and hold, then speak"; the receipt counts up after
   release and expires before the loop restarts, as in the app.
5. Finger read as a dark smudge on navy, with a streak hairline → light
   print over the disc, zero-travel hold, and the disc gives on contact
   before the state changes.
6. Words crossing lines mid-roll in the banner → the two banner lines change
   in place (Roll variant="fade").
7. The return from Marcus popped (the countdown snap landed in the same
   frame and cancelled transitions) → the snap waits until the change ends.
8. Banner passes through a greyed blue mid-change → swap shortened to 160ms;
   still a straight blend between the two blues.
9. Two icons legible at once on the disc mid-fade → the disc's face hands
   off in sequence (out 100ms, then in).
10. Avatar initials colliding → overlap 6px; "+1" on the pale blue fill.
12. Android status bar is the kit's frame; left as is.
After the review: the mic stays mounted from ready to on air (only the label
changes), and the hand's hand-off gap is down to 50ms. The fresh-eye review
was not repeated after these fixes.

Assumptions: a 30-second talk limit for the countdown; three listeners hear
the message (Heard by 3 of 3).

Not checked: Safari / Firefox rendering; a real Android device; dark mode
(the site has none); interruption by toggling reduced motion mid-loop.
