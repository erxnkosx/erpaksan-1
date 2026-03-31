import { bestsellers } from "@/lib/data";

export default function BestsellersSection() {
  return (
    <section className="bg-[#f7f8fb] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C08A33]">
              Populaire keuzes
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#15316e]">
              Bestsellers
            </h2>
          </div>

          <a href="#" className="font-semibold text-[#15316e]">
            Alle producten →
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-3 pt-6">
          {bestsellers.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:shadow-[0_0_0_0px_#15316e,0_10px_30px_rgba(21,49,110,0.3)] hover:-translate-y-1"
            >
              {item.title === "Kartonnen zakken" ? (
                <div className="flex h-56 items-end  justify-center bg-white pt-5">
                  <img
                    src="/Kartonnen-zakken.png"
                    alt="Kartonnen zakken"
                    className="h-full object-contain"
                  />
                </div>
              ) : item.title === "Pizza dozen" ? (
                <div className="flex h-56 items-end justify-center bg-white pb-10 pt-4">
                  <img
                    src="/pizza-box.png"
                    alt="Pizzadoos"
                    className="h-[155%] object-contain translate-y-18"
                  />
                </div>
              ) : item.title === "Servietten" ? (
                <div className="flex h-56 items-center justify-center bg-white">
                  <img
                    src="/Servietten.png"
                    alt="Servietten"
                    className="h-[75%] object-contain"
                  />
                </div>
              ) : null}

              <div className="p-5">
              
                <h3 className="mt-4 text-2xl font-bold text-[#15316e]">
                  {item.title}
                </h3>

                <p className="mt-3 leading-relaxed text-slate-600">
                  {item.description}
                </p>

                <a
                  href="#"
                  className="mt-5 inline-block font-semibold text-[#C08A33]"
                >
                  Bekijk product →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}