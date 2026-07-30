import { PageFrame, Section } from "./components/ui/page-frame";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Problem } from "./components/problem";
import { HowItWorks } from "./components/how-it-works";
import { Features } from "./components/features";
import { UseCases } from "./components/use-cases";
import { Trust } from "./components/trust";
import { JoinChannel } from "./components/join-channel";
import { CtaBand } from "./components/cta-band";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <PageFrame>
      <Header />
      <main>
        <Hero />
        <Section>
          <Problem />
        </Section>
        <Section id="how-it-works">
          <HowItWorks />
        </Section>
        <Section id="features">
          <Features />
        </Section>
        <Section id="use-cases">
          <UseCases />
        </Section>
        <Section>
          <Trust />
        </Section>
        <Section id="join">
          <JoinChannel />
        </Section>
        <Section id="download">
          <CtaBand />
        </Section>
      </main>
      <Footer />
    </PageFrame>
  );
}
