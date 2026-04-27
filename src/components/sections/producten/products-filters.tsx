import { packagingProducts } from "@/lib/data";

export default function ProductsFilters() {
  return (
    <section className="bg-[#F7F8FB]">
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-8">
        <p className="mb-6 text-sm font-medium text-slate-500">
          {packagingProducts.length} producten gevonden
        </p>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <input
            type="text"
            placeholder="Zoek een product..."
            className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none lg:max-w-md"
          />

          <div className="flex flex-wrap gap-3">
            <button className="rounded-xl bg-[#1D3E78] px-4 py-2.5 text-sm font-medium text-white">
              Alle
            </button>
            <button className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-600">
              Verpakking
            </button>
            <button className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-600">
              Tafelkunst
            </button>
            <button className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-600">
              Hygiëne
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}