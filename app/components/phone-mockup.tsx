export function PttButton({ size = "lg" }: { size?: "sm" | "lg" }) {
  const dimensions = size === "lg" ? "h-28 w-28" : "h-16 w-16";
  const inner = size === "lg" ? "h-20 w-20" : "h-11 w-11";

  return (
    <div className={`relative flex items-center justify-center ${dimensions}`}>
      <span className="absolute inset-0 rounded-full border border-primary/25 animate-pulse-ring" aria-hidden="true" />
      <span
        className="absolute inset-2 rounded-full border border-primary/15 animate-pulse-ring"
        style={{ animationDelay: "0.6s" }}
        aria-hidden="true"
      />
      <button
        type="button"
        className={`relative ${inner} rounded-full bg-primary animate-pulse-soft flex items-center justify-center`}
        aria-label="Hold to talk"
      >
        <svg
          width={size === "lg" ? 32 : 20}
          height={size === "lg" ? 32 : 20}
          viewBox="0 0 24 24"
          fill="white"
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
    <div className="flex items-center justify-center gap-[3px] h-6" aria-hidden="true">
      {heights.map((h, i) => (
        <span
          key={i}
          className="w-[3px] rounded-full bg-primary/50 origin-center"
          style={{
            height: `${h * 100}%`,
            animation: `waveform 1.2s ease-in-out infinite`,
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
}

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] sm:w-[300px] animate-float">
      <div className="relative rounded-[2.5rem] border border-gray-200 bg-white p-3 shadow-sm">
        <div className="overflow-hidden rounded-[2rem] bg-gray-50">
          <div className="flex items-center justify-between border-b border-gray-100 bg-white px-6 pt-3 pb-1">
            <span className="text-[10px] font-medium text-gray-400">9:41</span>
            <div className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-primary animate-live-pulse" />
              <span className="text-[10px] font-semibold text-primary">LIVE</span>
            </div>
          </div>

          <div className="border-b border-gray-100 bg-white px-5 py-3">
            <p className="text-[10px] font-medium uppercase tracking-widest text-gray-400">Channel</p>
            <h3 className="text-base font-semibold text-gray-900">Ops Crew</h3>
            <p className="mt-0.5 text-xs text-gray-500">4 members · listening</p>
          </div>

          <div className="bg-white px-5 py-6">
            <div className="rounded-xl border border-gray-100 bg-gray-50/50 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light text-sm font-bold text-primary">
                  M
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">Marcus</p>
                  <p className="text-xs text-primary">Speaking now</p>
                </div>
                <WaveformBars />
              </div>
            </div>

            <div className="mt-4 space-y-1">
              {["Alex", "Jordan", "Sam"].map((name) => (
                <div key={name} className="flex items-center gap-3 px-2 py-1.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-[10px] font-semibold text-gray-500">
                    {name[0]}
                  </div>
                  <span className="text-xs text-gray-600">{name}</span>
                  <span className="ml-auto text-[10px] text-gray-400">listening</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center border-t border-gray-100 bg-gray-50 px-5 py-8">
            <p className="mb-5 text-[10px] font-medium uppercase tracking-widest text-gray-400">
              Hold to talk
            </p>
            <PttButton size="lg" />
            <p className="mt-5 text-[10px] text-gray-400">Release when done</p>
          </div>
        </div>
      </div>
    </div>
  );
}
