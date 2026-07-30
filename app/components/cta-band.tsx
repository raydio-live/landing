import { FadeIn } from "./ui/fade-in";
import { Highlight } from "./ui/highlight";

export function CtaBand() {
  return (
    <div className="px-6 py-20 text-center sm:px-10 sm:py-28">
      <FadeIn>
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Ready to get on <Highlight>channel?</Highlight>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base text-gray-500">
          Download Raydio and create your first channel in under a minute. Live
          voice, zero learning curve.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#download" className="btn-primary h-11 px-6 text-sm">
            Get the app
          </a>
          <a href="mailto:hello@raydio.live" className="btn-secondary h-11 px-6 text-sm">
            hello@raydio.live
          </a>
        </div>

        <div className="dot-grid dot-border mx-auto mt-12 grid max-w-lg sm:grid-cols-2">
          <a
            href="#"
            className="flex items-center justify-center gap-3 px-6 py-5 transition-colors hover:bg-gray-50"
            aria-label="Download on the App Store — Coming soon"
          >
            <svg width="18" height="22" viewBox="0 0 20 24" fill="currentColor" className="text-gray-900" aria-hidden="true">
              <path d="M16.52 12.65c-.02-2.08 1.7-3.08 1.78-3.13-1-.14-1.95-.6-2.48-1.22-.57-.67-.87-1.53-.85-2.45-.02-1.05.4-2.07 1.15-2.73.97-.88 2.47-.95 3.4-.02.88.82 1.38 2.05 1.35 3.3-.03 1.26-.52 2.43-1.35 3.25-.4.38-.85.68-1.35.88-.25.1-.52.15-.8.12zM13.5 3.5c.55-.65 1.38-1.08 2.28-1.12 0 1.18-.43 2.33-1.18 3.18-.55.62-1.45 1.1-2.33 1.05-.05-1.15.45-2.28 1.23-3.11z" />
            </svg>
            <div className="text-left">
              <p className="text-[10px] text-gray-400">Coming soon</p>
              <p className="text-sm font-medium text-gray-900">App Store</p>
            </div>
          </a>
          <a
            href="#"
            className="flex items-center justify-center gap-3 px-6 py-5 transition-colors hover:bg-gray-50"
            aria-label="Get it on Google Play — Coming soon"
          >
            <svg width="18" height="20" viewBox="0 0 20 22" fill="currentColor" className="text-gray-900" aria-hidden="true">
              <path d="M1 1.5v19l11-9.5L1 1.5zm12.5 8.25L3.5 20.5l9.5-5.5 10.5 6.1V1.4L16 9.75zM3.5 1.5l10 8.25L19.5 3.9 3.5 1.5z" />
            </svg>
            <div className="text-left">
              <p className="text-[10px] text-gray-400">Coming soon</p>
              <p className="text-sm font-medium text-gray-900">Google Play</p>
            </div>
          </a>
        </div>
      </FadeIn>
    </div>
  );
}
