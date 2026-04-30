import Image from "next/image";
import { Award, CheckCircle2, Leaf, Lightbulb, Shield, Users } from "lucide-react";

const values = [
  {
    title: "Kwaliteit",
    text: "Elk product voldoet aan de strengste kwaliteitsnormen. Wij werken uitsluitend met gecertificeerde leveranciers en materialen.",
    icon: Award,
  },
  {
    title: "Klantgericht",
    text: "Uw noden staan centraal. We bieden persoonlijk advies, maatwerk en een vast aanspreekpunt voor elke klant.",
    icon: Users,
  },
  {
    title: "Innovatie",
    text: "We volgen de nieuwste trends in verpakkingstechnologie en bieden voortdurend nieuwe en verbeterde oplossingen aan.",
    icon: Lightbulb,
  },
  {
    title: "Betrouwbaarheid",
    text: "Strikte leveringstermijnen, correcte facturatie en transparante communicatie. U kunt op ons rekenen.",
    icon: Shield,
  },
  {
    title: "Duurzaamheid",
    text: "We investeren actief in duurzame alternatieven en minimaliseren onze ecologische voetafdruk.",
    icon: Leaf,
  },
];

const timeline = [
  { year: "2004", text: "Oprichting van Erpak San in Antwerpen" },
  { year: "2008", text: "Uitbreiding naar Nederland en Luxemburg" },
  { year: "2012", text: "ISO 9001 certificering behaald" },
  { year: "2016", text: "Lancering van het duurzame eco-gamma" },
  { year: "2020", text: "Opening nieuw magazijn & distributiecentrum" },
  { year: "2024", text: "500+ actieve B2B-klanten bediend" },
];

export default function OverOnsBrowser() {
  return (
    <>
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:px-8 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-[28px] bg-[#F7F2EA] p-4 shadow-xl shadow-slate-200/70">
              <Image
                src="/images/home/about.jpg"
                alt="Erpak San kantoor"
                width={720}
                height={520}
                className="h-[420px] w-full rounded-[20px] object-cover"
              />
            </div>

            <div className="absolute bottom-[-18px] right-[-12px] rounded-2xl bg-[#1D3E78] px-8 py-5 text-white shadow-xl">
              <p className="text-4xl font-bold">500+</p>
              <p className="text-sm font-semibold text-[#C08A33]">
                Tevreden klanten
              </p>
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#C08A33]">
              Onze missie
            </p>

            <h2 className="text-3xl font-bold leading-tight text-[#183153] md:text-5xl">
              Kwaliteit en maatwerk als fundament
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Erpak San werd in 2004 opgericht met één duidelijke missie:
              professionele verpakkingsoplossingen leveren die perfect aansluiten
              bij de behoeften van elke klant. We geloven sterk in persoonlijke
              service, snelle reactie en lange-termijn partnerships.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Of u nu op zoek bent naar standaard kartonnen dozen, op maat
              bedrukte verpakkingen of duurzame eco-alternatieven — wij denken
              met u mee en vinden altijd de beste oplossing.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-[#F7F8FB] p-5">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C08A33]">
                  Onze missie
                </p>
                <p className="text-sm leading-6 text-slate-600">
                  Elke klant de perfecte verpakkingsoplossing bieden, snel en op
                  maat.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-[#F7F8FB] p-5">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C08A33]">
                  Onze visie
                </p>
                <p className="text-sm leading-6 text-slate-600">
                  Marktleider worden in duurzame B2B-verpakkingen in de Benelux.
                </p>
              </div>
            </div>

            <ul className="mt-8 space-y-3">
              {[
                "Meer dan 2.000 producten in ons gamma",
                "Levering in heel de Benelux",
                "Vaste contactpersoon voor elk account",
                "Maatwerk mogelijk voor elk volume",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle2 size={20} className="text-[#C08A33]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8FB] py-20">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#C08A33]">
              Onze geschiedenis
            </p>
            <h2 className="text-3xl font-bold text-[#183153] md:text-4xl">
              Twee decennia groei
            </h2>
          </div>

          <div className="space-y-5">
            {timeline.map((item) => (
              <div key={item.year} className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1D3E78] text-sm font-bold text-white">
                  {item.year.slice(2)}
                </div>

                <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="mb-1 text-sm font-bold text-[#C08A33]">
                    {item.year}
                  </p>
                  <p className="text-[#183153]">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#C08A33]">
              Onze waarden
            </p>
            <h2 className="text-3xl font-bold text-[#183153] md:text-4xl">
              Waar wij voor staan
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="rounded-2xl border border-slate-200 bg-[#F7F8FB] p-7 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F3E8D2] text-[#C08A33]">
                    <Icon size={22} />
                  </div>

                  <h3 className="mb-3 font-bold text-[#183153]">
                    {value.title}
                  </h3>

                  <p className="text-sm leading-6 text-slate-600">
                    {value.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}