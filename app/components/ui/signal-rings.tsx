/**
 * Concentric "broadcast" rings used as a quiet backdrop behind product surfaces.
 * Purely decorative: static guides plus a few rings that drift outward.
 */
export function SignalRings({
  className = "",
  active = false,
}: {
  className?: string;
  active?: boolean;
}) {
  const guides = [0.34, 0.56, 0.78, 1];
  const pulses = [0, 1.6, 3.2];

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute aspect-square ${className}`.trim()}
    >
      {guides.map((scale) => (
        <span
          key={scale}
          className="absolute inset-0 rounded-full border border-line"
          style={{ transform: `scale(${scale})` }}
        />
      ))}
      {pulses.map((delay) => (
        <span
          key={delay}
          className={`animate-ring-out absolute inset-0 rounded-full border transition-colors duration-500 ${
            active ? "border-signal/50" : "border-brand/20"
          }`}
          style={{
            animationDelay: `${delay}s`,
            animationDuration: active ? "2.4s" : undefined,
          }}
        />
      ))}
    </div>
  );
}
