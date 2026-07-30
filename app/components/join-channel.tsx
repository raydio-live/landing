import { FadeIn } from "./ui/fade-in";

export function JoinChannel() {
  return (
    <div className="px-6 py-16 sm:px-10 sm:py-24">
      <FadeIn>
        <div className="dot-border dot-grid grid lg:grid-cols-2">
          <div className="p-8 sm:p-12">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-gray-400">
              Join a channel
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
              Got an invite link?
            </h2>
            <p className="mt-4 leading-relaxed text-gray-500">
              Channel links like{" "}
              <code className="dot-border rounded bg-gray-50 px-2 py-0.5 font-mono text-sm text-primary">
                raydio.live/j/...
              </code>{" "}
              open the app and drop you straight into the channel. No setup
              friction — just tap and listen.
            </p>
          </div>
          <div className="flex items-center justify-center bg-gray-50/50 p-8">
            <div className="dot-border w-full max-w-sm bg-white p-5">
              <p className="text-xs font-medium uppercase tracking-widest text-gray-400">
                Example invite
              </p>
              <div className="dot-border mt-3 flex items-center gap-3 px-4 py-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M8 1v10M5 8l3 3 3-3" />
                    <path d="M2 13h12" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="truncate font-mono text-sm text-gray-900">raydio.live/j/ops-crew</p>
                  <p className="text-xs text-gray-500">Tap to join Ops Crew</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
