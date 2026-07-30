import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raydio — Instant walkie-talkie for teams",
  description:
    "Raydio is a realtime push-to-talk app. Create a channel, invite your crew, hold to talk, and be heard instantly.",
  metadataBase: new URL("https://raydio.live"),
  openGraph: {
    title: "Raydio — Instant walkie-talkie for teams",
    description:
      "Raydio is a realtime push-to-talk app. Create a channel, invite your crew, hold to talk, and be heard instantly.",
    url: "https://raydio.live",
    siteName: "Raydio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raydio — Instant walkie-talkie for teams",
    description:
      "Raydio is a realtime push-to-talk app. Create a channel, invite your crew, hold to talk, and be heard instantly.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
      style={{ colorScheme: "light" }}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
