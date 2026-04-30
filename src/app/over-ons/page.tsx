import OverOnsHero from "@/components/sections/over-ons/over-ons-hero";
import OverOnsBrowser from "@/components/sections/over-ons/over-ons-browser";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import CtaSection from "@/components/sections/home/cta-section";

export default function OverOnsPage() {
  return (
    <>
    <main>
        <Navbar />
        <OverOnsHero />
        <OverOnsBrowser />
        <CtaSection />
        <Footer />
    </main>
    </>
  );
}