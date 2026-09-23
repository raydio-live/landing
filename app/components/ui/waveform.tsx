export function WaveformBars({
  className = "bg-brand/60",
  count = 8,
}: {
  className?: string;
  count?: number;
}) {
  const heights = [0.4, 0.7, 1, 0.6, 0.85, 0.5, 0.9, 0.55, 0.75, 0.45];
  return (
    <div className="flex h-6 items-center justify-center gap-[3px]" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          className={`animate-wave-bar w-[3px] rounded-full ${className}`}
          style={{
            height: `${heights[i % heights.length] * 100}%`,
            animationDelay: `${i * 0.12}s`,
          }}
        />
      ))}
    </div>
  );
}
