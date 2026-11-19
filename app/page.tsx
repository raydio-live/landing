import { BuiltFor } from "./components/built-for";
import { CtaBand } from "./components/cta-band";
import { Features } from "./components/features";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { HowItWorks } from "./components/how-it-works";
import { JoinChannel } from "./components/join-channel";
import { ProgressiveBlur } from "./components/progressive-blur";
import { RadioDial } from "./components/radio-dial";
import { Trust } from "./components/trust";
import { UseCases } from "./components/use-cases";

/*
 * Section rhythm: grounds alternate white and tint so no divider is needed,
 * and every block sits on the same container as the header.
 *   Hero (blue wash) → audiences (white) → how it works (white, hairline
 *   above) → features (tint) → use cases (white) → privacy (tint) →
 *   join (white) → call to action (blue panel) → footer
 */
export default function Home() {
  return (
    <div className="w-full bg-background">
      <Header />
      <main className="relative">
        <Hero />
        <BuiltFor />
        <div id="how-it-works" className="scroll-mt-20 border-t border-line">
          <HowItWorks />
        </div>
        <div id="features" className="scroll-mt-20">
          <Features />
        </div>
        <div id="use-cases" className="scroll-mt-20">
          <UseCases />
        </div>
        <div id="private" className="scroll-mt-20">
          <Trust />
        </div>
        <div id="join" className="scroll-mt-20">
          <JoinChannel />
        </div>
        <div id="download" className="scroll-mt-20">
          <CtaBand />
        </div>
      </main>
      <Footer className="pb-24" />
      <ProgressiveBlur />
      <RadioDial />
    </div>
  );
}
