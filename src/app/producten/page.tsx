"use client";

import { useState } from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ProductsHero from "@/components/sections/producten/products-hero";
import ProductsBrowser from "@/components/sections/producten/products-browser";
import Breadcrumb from "@/components/ui/breadcrumb";
import { allProducts } from "@/lib/data";

export default function ProductenPage() {
  const [activeProduct, setActiveProduct] = useState<string | null>(null);

  const selectedProduct = allProducts.find(p => p.id === activeProduct);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Producten", href: activeProduct ? "/producten" : undefined },
    ...(selectedProduct ? [{ label: selectedProduct.title }] : []),
  ];

  return (
    <main>
      <Navbar />
      <ProductsHero />
      <Breadcrumb items={breadcrumbItems} />
      <ProductsBrowser activeProduct={activeProduct} setActiveProduct={setActiveProduct} />
      <Footer />
    </main>
  );
}