import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ProductsHero from "@/components/sections/producten/products-hero";

import ProductsBrowser from "@/components/sections/producten/products-browser";

export default function ProductenPage() {
  return (
    <main>
      <Navbar />
      <ProductsHero />
      <ProductsBrowser />
      <Footer />
    </main>
  );
}