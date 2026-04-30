"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  mainFilters,
  allProducts,
  packagingSubgroups,
  groupVariantsByImage,
  type MainCategory,
  type PackagingSubgroup,
} from "@/lib/data";

interface Props {
  activeProduct: string | null;
  setActiveProduct: (id: string | null) => void;
}

export default function ProductsBrowser({ activeProduct, setActiveProduct }: Props) {
  const [search, setSearch] = useState("");
  const [mainFilter, setMainFilter] = useState<MainCategory>("Alle");
  const [subgroup, setSubgroup] = useState<PackagingSubgroup>("Alle");

  const filteredProducts = useMemo(() => {
    let items = [...allProducts];

    if (mainFilter !== "Alle") {
      items = items.filter((item) => item.category === mainFilter);
    }

    if (mainFilter === "Verpakking" && subgroup !== "Alle") {
      items = items.filter((item) => item.subgroup === subgroup);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter((item) => {
        return (
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.subgroup?.toLowerCase().includes(q)
        );
      });
    }

    return items;
  }, [search, mainFilter, subgroup]);

  const selectedProduct = filteredProducts.find(
    (item) => item.id === activeProduct
  );
  const groupedVariants = selectedProduct
  ? groupVariantsByImage(selectedProduct.title, selectedProduct.variants, selectedProduct.image)
  : [];
  return (
    <section className="bg-[#F7F8FB] pb-16">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="py-8">
          <p className="mb-6 text-sm font-medium text-slate-500">
            {activeProduct && selectedProduct
              ? `${selectedProduct.variants.length} varianten gevonden`
              : `${filteredProducts.length} producten gevonden`}
          </p>

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <input
              type="text"
              placeholder="Zoek een product..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setActiveProduct(null);
              }}
              className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none lg:max-w-md"
            />

            <div className="flex flex-wrap gap-3">
              {mainFilters.map((filter) => {
                const isActive = mainFilter === filter;
                return (
                  <button
                    key={filter}
                    onClick={() => {
                      setMainFilter(filter);
                      setSubgroup("Alle");
                      setActiveProduct(null);
                    }}
                    className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                      isActive
                        ? "bg-[#1D3E78] text-white"
                        : "border border-slate-200 bg-white text-slate-600 hover:border-[#1D3E78] hover:text-[#1D3E78]"
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>

          {mainFilter === "Verpakking" && !activeProduct && (
            <div className="mt-4 flex flex-wrap gap-3">
              {packagingSubgroups.map((item) => {
                const isActive = subgroup === item;
                return (
                  <button
                    key={item}
                    onClick={() => setSubgroup(item)}
                    className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                      isActive
                        ? "bg-[#C08A33] text-white"
                        : "border border-slate-200 bg-white text-slate-600 hover:border-[#C08A33] hover:text-[#C08A33]"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {!activeProduct ? (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative flex h-[180px] items-center justify-center overflow-hidden rounded-t-[28px] bg-white p-4">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain p-3"
                  />
                </div>

                <div className="flex min-h-[170px] flex-col p-4">
                  {product.subgroup && (
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      {product.subgroup}
                    </p>
                  )}

                  <h2 className="mb-2 text-lg font-bold leading-snug text-[#183153]">
                    {product.title}
                  </h2>

                  <p className="text-sm text-slate-500">{product.description}</p>

                  <button
                    onClick={() => setActiveProduct(product.id)}
                    className="mt-auto pt-3 text-left text-sm font-semibold text-[#D79B16]"
                  >
                    Bekijk varianten →
                  </button>
                </div>
              </article>
            ))}
          </div>
            ) : selectedProduct ? (
              <div className="space-y-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C08A33]">
                      {selectedProduct.subgroup}
                    </p>
                    <h2 className="mt-2 text-3xl font-bold text-[#183153]">
                      {selectedProduct.title}
                    </h2>
                    <p className="mt-2 text-sm text-slate-500">
                      {selectedProduct.variants.length} varianten beschikbaar
                    </p>
                  </div>

                  <button
                    onClick={() => setActiveProduct(null)}
                    className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:border-[#1D3E78] hover:text-[#1D3E78]"
                  >
                    ← Terug naar overzicht
                  </button>
                </div>

                <div className="grid gap-6 xl:grid-cols-3">
                  {groupedVariants.map((group, groupIndex) => (
                    <article
                      key={`${selectedProduct.id}-group-${groupIndex}`}
                      className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
                    >
                      <div className="relative mb-6 h-[180px] w-full">
                        <Image
                          src={group.image}
                          alt={group.title}
                          fill
                          className="object-contain"
                        />
                      </div>

                     

                      <div className="space-y-4">
                        {group.variants.map((variant, index) => (
                          <div
                            key={`${variant.code || variant.product_code || index}`}
                            className="border-b border-slate-200 pb-4 last:border-b-0 last:pb-0"
                          >
                            <p className="text-base font-semibold text-[#D79B16]">
                              {variant.code || variant.product_code || `Variant ${index + 1}`}
                            </p>

                            {variant.variant && (
                              <p className="mt-1 text-sm text-slate-600">
                                <span className="font-semibold text-[#183153]">Type:</span>{" "}
                                {variant.variant}
                              </p>
                            )}

                            {variant.name && (
                              <p className="mt-1 text-sm text-slate-600">
                                <span className="font-semibold text-[#183153]">Naam:</span>{" "}
                                {variant.name}
                              </p>
                            )}

                            {variant.size && (
                              <p className="mt-1 text-sm text-slate-600">
                                <span className="font-semibold text-[#183153]">Formaat:</span>{" "}
                                {variant.size}
                              </p>
                            )}

                            {variant.quantity && (
                              <p className="text-sm text-slate-600">
                                <span className="font-semibold text-[#183153]">Hoeveelheid:</span>{" "}
                                {variant.quantity}
                              </p>
                            )}

                            {variant.thickness && (
                              <p className="text-sm text-slate-600">
                                <span className="font-semibold text-[#183153]">Dikte:</span>{" "}
                                {variant.thickness}
                              </p>
                            )}

                            {variant.length_cm !== undefined &&
                              variant.width_cm !== undefined &&
                              variant.height_cm !== undefined && (
                                <p className="text-sm text-slate-600">
                                  <span className="font-semibold text-[#183153]">Afmetingen:</span>{" "}
                                  {variant.length_cm} x {variant.width_cm} x {variant.height_cm} cm
                                </p>
                              )}

                            {Array.isArray(variant.sizes) && (
                              <p className="text-sm text-slate-600">
                                <span className="font-semibold text-[#183153]">Maten:</span>{" "}
                                {variant.sizes.join(", ")} {variant.unit || ""}
                              </p>
                            )}

                            {Array.isArray(variant.weights_kg) && (
                              <p className="text-sm text-slate-600">
                                <span className="font-semibold text-[#183153]">Gewichten:</span>{" "}
                                {variant.weights_kg.join(", ")} kg
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>

                <div>
                  <Link
                    href="#contact"
                    className="inline-flex rounded-xl bg-[#C08A33] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#a87428]"
                  >
                    Offerte aanvragen
                  </Link>
                </div>
              </div>
            ) : null}
      </div>
    </section>
  );
}