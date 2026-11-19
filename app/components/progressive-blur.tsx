const LAYERS = 8;
const STEP = 100 / 9;

/**
 * Fixed strip across the bottom 10% of the viewport. Eight stacked backdrop
 * blurs, each masked to its own band and 1px stronger than the last, so the
 * page dissolves into the edge instead of being cut off. Skipped on small
 * screens, where stacked backdrop filters are the likeliest to cost frames.
 */
export function ProgressiveBlur() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-50 hidden h-[10%] sm:block"
    >
      {Array.from({ length: LAYERS }, (_, i) => {
        const mask = `linear-gradient(to bottom, transparent ${i * STEP}%, #000 ${(i + 1) * STEP}%, #000 ${(i + 2) * STEP}%, transparent ${(i + 3) * STEP}%)`;
        return (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              backdropFilter: `blur(${i}px)`,
              WebkitBackdropFilter: `blur(${i}px)`,
              maskImage: mask,
              WebkitMaskImage: mask,
            }}
          />
        );
      })}
    </div>
  );
}
