import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import { MotionProvider } from "./components/ui/motion-provider";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

/* Inter and Space Grotesk are the Android app's own faces; the page uses them
   only inside the phone so the demo reads as the real app. */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["700"],
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
      className={`${geist.variable} ${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased`}
      style={{ colorScheme: "light" }}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden bg-background text-foreground">
        {/* Reveals start hidden in the server HTML; without JS nothing would
            ever show them, so undo the hidden state. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important;filter:none!important}`}</style>
        </noscript>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
