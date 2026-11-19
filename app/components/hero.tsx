import { PLAY_STORE_URL } from "../lib/store";
import { ButtonLink, MicChip } from "./ui/button";
import { Highlight } from "./ui/highlight";
import { Ion } from "./ui/ionicons";
import { HeroStage } from "./hero-stage/hero-stage";

const proof = ["Free to start", "Live in under a minute", "Private channels"];

/**
 * Copy on the left, the real talk screen on the right. The phone is pinned
 * from the top and runs off the hero's bottom edge, so the section line is
 * the crop. Nothing here waits on a reveal: it paints with the HTML.
 */
export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden border-b border-line">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-b from-[#eaf2ff] via-[#f3f7ff] to-[#f8fbff]" />
        <div className="absolute left-1/2 top-[-12rem] h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(19,131,249,0.22),transparent)] xl:left-[74%]" />
        <div className="absolute bottom-[-16rem] left-[-10rem] h-[32rem] w-[40rem] rounded-full bg-[radial-gradient(closest-side,rgba(8,98,224,0.08),transparent)]" />
      </div>

      <div className="container-page grid grid-cols-1 items-center gap-y-14 pt-32 md:pt-36 xl:grid-cols-[minmax(0,1fr)_35rem] xl:gap-x-16 xl:pt-[7.5rem]">
        <div className="mx-auto max-w-[34rem] text-center xl:mx-0 xl:pb-16 xl:text-left">
          <p className="inline-flex h-8 items-center gap-2 rounded-full bg-white/80 pl-1.5 pr-3.5 text-caption font-medium text-muted shadow-card ring-1 ring-line">
            <span className="flex h-5 items-center rounded-full bg-primary px-2 text-[0.6875rem] font-semibold tracking-[0.01em] text-white">
              New
            </span>
            Now on Android · iOS coming soon
          </p>

          <h1 className="mt-7 text-balance text-display-sm font-semibold text-heading sm:text-[3.5rem] sm:leading-[1.05] xl:text-display">
            Your team&rsquo;s radio.
            <br />
            <Highlight>In your pocket.</Highlight>
          </h1>

          <p className="mx-auto mt-6 max-w-[30rem] text-pretty text-lead text-muted xl:mx-0">
            Raydio is a realtime walkie-talkie app. Open a channel, hold the
            button and speak. No call setup, no video overhead.
          </p>

          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center xl:justify-start">
            <ButtonLink href={PLAY_STORE_URL} external chip={<MicChip />}>
              Get the app
            </ButtonLink>
            <ButtonLink href="#how-it-works" variant="secondary">
              See how it works
            </ButtonLink>
          </div>

          <ul className="mx-auto mt-10 flex w-fit flex-col items-start gap-x-6 gap-y-3 text-small text-muted sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-center xl:mx-0 xl:justify-start">
            {proof.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Ion name="checkmark-circle" size={18} className="text-azure" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Below 520px the stage runs to the screen edges (its compact design
            is drawn at 360 and grows to the phone's width), so the phone's
            shadow is never boxed in by a gutter. */}
        <div data-ss-fill="" className="-mx-6 self-end min-[520px]:mx-auto min-[520px]:w-full min-[520px]:max-w-[35rem]">
          <HeroStage />
        </div>
      </div>
    </section>
  );
}
