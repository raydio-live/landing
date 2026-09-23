import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { HowItWorks } from "./components/how-it-works";
import { Features } from "./components/features";
import { UseCases } from "./components/use-cases";
import { Trust } from "./components/trust";
import { JoinChannel } from "./components/join-channel";
import { CtaBand } from "./components/cta-band";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <div className="w-full bg-background">
      <Header />
      <main>
        <Hero />
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="features" className="border-t border-line">
          <Features />
        </section>
        <section id="use-cases" className="border-t border-line">
          <UseCases />
        </section>
        <section className="border-t border-line">
          <Trust />
        </section>
        <section id="join" className="border-t border-line">
          <JoinChannel />
        </section>
        <section id="download">
          <CtaBand />
        </section>
      </main>
      <Footer />
    </div>
  );
}
