import { ImageResponse } from "next/og";

export const alt = "Raydio — Instant walkie-talkie for teams";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(circle, #e5e7eb 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            opacity: 0.5,
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "linear-gradient(135deg, #3B82F6, #2563EB)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: 36, height: 36, borderRadius: "50%", border: "3px solid white", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 14, height: 14, borderRadius: "50%", background: "white" }} />
            </div>
          </div>
          <span style={{ fontSize: 56, fontWeight: 700, color: "#111827", letterSpacing: "-0.02em" }}>
            Raydio
          </span>
        </div>
        <p style={{ fontSize: 40, fontWeight: 600, color: "#111827", textAlign: "center", maxWidth: 800, lineHeight: 1.3 }}>
          Your team&apos;s radio.{" "}
          <span style={{ background: "#2563EB", color: "white", padding: "0 8px" }}>
            In your pocket.
          </span>
        </p>
        <p style={{ fontSize: 22, color: "#6b7280", marginTop: 16, textAlign: "center" }}>
          Hold to talk. Instantly heard.
        </p>
        <p style={{ position: "absolute", bottom: 40, fontSize: 18, color: "#2563EB", fontWeight: 500 }}>
          raydio.live
        </p>
      </div>
    ),
    { ...size }
  );
}
