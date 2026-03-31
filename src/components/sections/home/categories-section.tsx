import { categories } from "@/lib/data";

export default function CategoriesSection() {
  return (
    <section id="producten" className="bg-[#f7f8fb] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto -mt-7 mb-14 max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d7a42d]">
            Ons aanbod
          </p>
          <h2 className="mt-4 text-4xl font-black text-[#15316e] md:text-5xl">
            Drie categorieën, één partner
          </h2>
          <p className="mt-6 mx-auto max-w-3xl text-lg text-slate-600">
            Van verpakking tot tafelkunst en hygiëne — wij leveren alles wat uw
            bedrijf nodig heeft.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <article
              key={category.title}
              className="relative overflow-hidden rounded-3xl shadow-lg"
            >
              <a href="/producten" className="block h-full">
                <div
                  className="relative min-h-[500px] overflow-hidden rounded-3xl bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(13,43,102,0.18) 0%, rgba(9,24,58,0.88) 100%), url('${category.image}')`,
                  }}
                >
                  <div className="absolute inset-0 transition duration-500 hover:scale-105 bg-cover bg-center" />

                  <div className="relative flex min-h-[500px] flex-col justify-end p-7 md:p-8 text-white">
                    <div className="max-w-[260px]">
                      <span className="mb-54 inline-flex w-fit rounded-full bg-[#d7a42d]/25 px-3 py-1 text-xs font-semibold text-[#f3c04c]">
                        {category.data.length} producten
                      </span>

                      <h3 className="text-[2.1rem] leading-[1.05] font-black">
                        {category.title}
                      </h3>

                      <p className="mt-4 text-[17px] leading-8 text-white/85">
                        {category.description}
                      </p>

                      <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-[#d7a42d]/40 bg-[#d7a42d]/10 px-5 py-3 font-semibold text-[#f3c04c] transition hover:bg-[#C08A33] hover:text-white">
                      Bekijk collectie
                      <span className="transition-transform duration-300 hover:translate-x-1">
                        →
                      </span>
                    </div>
                    </div>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}