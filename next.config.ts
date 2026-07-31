import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Digital Asset Links: Android App Link verification requires a public JSON
  // body at /.well-known/assetlinks.json with application/json (not HTML 404).
  async headers() {
    return [
      {
        source: "/.well-known/assetlinks.json",
        headers: [
          { key: "Content-Type", value: "application/json" },
          // Allow re-fetch after fingerprint updates without long stale caches.
          { key: "Cache-Control", value: "public, max-age=3600" },
        ],
      },
    ];
  },
};

export default nextConfig;

