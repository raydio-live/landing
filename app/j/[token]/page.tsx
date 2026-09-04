import type { Metadata } from "next";
import Link from "next/link";
import { RaydioWordmark } from "../../components/logo";
import { Footer } from "../../components/footer";
import { PageFrame } from "../../components/ui/page-frame";
import { JoinInvite } from "../../components/join-invite";
import { PLAY_STORE_URL } from "../../lib/store";

type Props = {
  params: Promise<{ token: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { token } = await params;
  const path = `/j/${token}`;

  return {
    title: "Join channel — Raydio",
    description:
      "You’ve been invited to a Raydio channel. Open the app to join and start talking instantly.",
    alternates: { canonical: `https://www.raydio.live${path}` },
    openGraph: {
      title: "Join channel — Raydio",
      description:
        "You’ve been invited to a Raydio channel. Open the app to join and start talking instantly.",
      url: `https://www.raydio.live${path}`,
      siteName: "Raydio",
      type: "website",
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: "Raydio — Your team's radio. In your pocket.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Join channel — Raydio",
      description:
        "You’ve been invited to a Raydio channel. Open the app to join and start talking instantly.",
    },
    // Invite pages are personal; keep them out of search indexes.
    robots: { index: false, follow: false },
  };
}

export default async function JoinTokenPage({ params }: Props) {
  const { token } = await params;

  return (
    <PageFrame>
      <header className="border-b border-line bg-background">
        <div className="flex h-14 items-center justify-between px-6 sm:px-10">
          <Link href="/" className="flex items-center gap-2" aria-label="Raydio home">
            <RaydioWordmark />
          </Link>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:bg-mist hover:text-foreground"
          >
            Get the app
          </a>
        </div>
      </header>

      <main className="border-b border-line bg-mist/50">
        <div className="px-6 py-16 sm:px-10 sm:py-24">
          <JoinInvite token={token} />
        </div>
      </main>

      <Footer />
    </PageFrame>
  );
}
