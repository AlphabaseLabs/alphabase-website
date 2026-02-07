import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { LogoCloud } from "@/components/logocloud";
import { FeatureGrid } from "@/components/feature-grid";
import { SplitSection } from "@/components/split";
import { Stats } from "@/components/stats";
import { DarkCards } from "@/components/dark-cards";
import { Quote } from "@/components/quote";
import { Resources } from "@/components/resources";
import { Pricing } from "@/components/pricing";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogoCloud />
      <FeatureGrid />
      <SplitSection />
      <Stats />
      <DarkCards />
      <Quote />
      <Resources />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
