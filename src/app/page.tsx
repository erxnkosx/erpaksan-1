import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/home/hero";
import StatsBar from "@/components/sections/home/stats-bar";
import CategoriesSection from "@/components/sections/home/categories-section";
import ProcessSection from "@/components/sections/home/process-section";
import BestSellers from "@/components/sections/home/bestsellers-section";
import AboutSection from "@/components/sections/home/about-section";
import BenefitsSection from "@/components/sections/home/benefits-section";
import CtaSection from "@/components/sections/home/cta-section";
import Footer from "@/components/layout/footer";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <CategoriesSection />
      <ProcessSection />
      <BestSellers />
      <AboutSection />
      <BenefitsSection />
      <CtaSection />
      <Footer />
    </main>
  );
}