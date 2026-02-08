import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ProductStats } from "@/components/product-stats";
import { LogoCloud } from "@/components/logocloud";
import { FeatureGrid } from "@/components/feature-grid";
import { SplitSection } from "@/components/split";
import { Stats } from "@/components/stats";
import { Quote } from "@/components/quote";
import { DarkCards } from "@/components/dark-cards";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductStats />
      <LogoCloud />
      <FeatureGrid />
      <SplitSection />
      <Stats />
      <Quote />
      <DarkCards />
      <Footer />
    </main>
  );
}
