import Image from "next/image";
import Link from "next/link";
import { packagingProducts } from "@/lib/data";

export default function ProductsGrid() {
  return (
    <section className="bg-[#F7F8FB] pb-16">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {packagingProducts.map((product) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative h-[220px]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <span className="mb-3 inline-block rounded-full bg-[#22478D] px-3 py-1 text-xs font-semibold text-white">
                  {product.category}
                </span>

                <h2 className="mb-3 text-2xl font-bold text-[#183153]">
                  {product.title}
                </h2>

                <p className="text-sm leading-7 text-slate-500">
                  {product.description}
                </p>

                <Link
                  href={`/producten/${product.slug}`}
                  className="mt-5 inline-block text-sm font-semibold text-[#D79B16]"
                >
                  Bekijk →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}