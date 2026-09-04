export function PttButton({ size = "lg" }: { size?: "sm" | "lg" }) {
  const dimensions = size === "lg" ? "h-28 w-28" : "h-16 w-16";
  const inner = size === "lg" ? "h-[4.5rem] w-[4.5rem]" : "h-11 w-11";

  return (
    <div className={`relative flex items-center justify-center ${dimensions}`}>
      <span className="absolute inset-0 rounded-full border border-brand/40 animate-pulse-ring" aria-hidden="true" />
      <span
        className="absolute inset-2 rounded-full border border-brand/25 animate-pulse-ring"
        style={{ animationDelay: "0.65s" }}
        aria-hidden="true"
      />
      <button
        type="button"
        className={`relative ${inner} flex items-center justify-center rounded-full bg-ink text-white shadow-[0_10px_28px_rgba(10,12,16,0.35),inset_0_1px_0_rgba(255,255,255,0.22)] transition-transform active:scale-95`}
        aria-label="Hold to talk"
      >
        <svg
          width={size === "lg" ? 30 : 20}
          height={size === "lg" ? 30 : 20}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
          <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
        </svg>
      </button>
    </div>
  );
}

function WaveformBars() {
  const heights = [0.4, 0.7, 1, 0.6, 0.85, 0.5, 0.9, 0.55];
  return (
    <div className="flex h-6 items-center justify-center gap-[3px]" aria-hidden="true">
      {heights.map((h, i) => (
        <span
          key={i}
          className="animate-wave-bar w-[3px] rounded-full bg-brand/60"
          style={{
            height: `${h * 100}%`,
            animationDelay: `${i * 0.12}s`,
          }}
        />
      ))}
    </div>
  );
}

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[272px] sm:w-[292px]">
      <div className="relative rounded-[3rem] bg-ink p-2.5 shadow-[0_32px_64px_-16px_rgba(10,12,16,0.4)]">
        <div className="overflow-hidden rounded-[2.4rem] bg-white">
          <div className="flex items-center justify-center pt-3">
            <span className="h-5 w-24 rounded-full bg-ink" aria-hidden="true" />
          </div>

          <div className="flex items-center justify-between px-6 pb-2 pt-2">
            <span className="text-[10px] font-semibold tabular-nums text-faint">9:41</span>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand animate-live-pulse" />
              <span className="font-mono text-[10px] font-semibold tracking-[0.14em] text-brand">LIVE</span>
            </div>
          </div>

          <div className="border-y border-line bg-white px-5 py-3.5">
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-faint">Channel</p>
            <div className="mt-0.5 flex items-baseline justify-between">
              <h3 className="text-xl font-semibold tracking-tight text-foreground">Ops Crew</h3>
              <p className="text-[11px] text-faint">4 listening</p>
            </div>
          </div>

          <div className="bg-white px-4 py-5">
            <div className="rounded-2xl bg-brand-tint/60 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                  M
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground">Marcus</p>
                  <p className="text-xs font-medium text-brand">Speaking now</p>
                </div>
                <WaveformBars />
              </div>
            </div>

            <div className="mt-3">
              {["Alex", "Jordan", "Sam"].map((name) => (
                <div key={name} className="flex items-center gap-3 px-2 py-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-mist text-[10px] font-semibold text-muted">
                    {name[0]}
                  </div>
                  <span className="text-[13px] font-medium text-muted">{name}</span>
                  <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.12em] text-faint">tuned in</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center bg-mist/70 px-5 pb-8 pt-6">
            <PttButton size="lg" />
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-faint">Release when done</p>
          </div>
        </div>
      </div>
    </div>
  );
}
