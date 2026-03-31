export default function AboutSection() {
  return (
    <section id="over-ons" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C08A33]">
            Wie zijn wij
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight text-[#15316e] md:text-5xl">
            Decennialange expertise in verpakkingen
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Erpak San is een Belgisch bedrijf met meer dan 20 jaar ervaring in
            de verpakkingsindustrie. We leveren kwalitatieve, op maat gemaakte
            verpakkingsoplossingen aan horeca, voedingsbedrijven en industriële
            klanten.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Onze kracht zit in de persoonlijke aanpak: we denken mee met onze
            klanten, bieden oplossingen op maat en garanderen snelle
            leveringstermijnen.
          </p>

          <ul className="mt-8 space-y-3 text-slate-700">
            <li className="flex items-center gap-2">
              <span className="text-[#C08A33] font-bold">✓</span>
              ISO-gecertificeerde producten
            </li>

            <li className="flex items-center gap-2">
              <span className="text-[#C08A33] font-bold">✓</span>
              Op maat gemaakte verpakkingen
            </li>

            <li className="flex items-center gap-2">
              <span className="text-[#C08A33] font-bold">✓</span>
              Levering in heel België en Nederland
            </li>

            <li className="flex items-center gap-2">
              <span className="text-[#C08A33] font-bold">✓</span>
              Persoonlijk aanspreekpunt
            </li>
          </ul>

          <div className="mt-8 flex gap-4">
            <a
              href="#contact"
              className="rounded-xl bg-[#15316e] px-6 py-4 font-semibold text-white"
            >
              Meer over ons
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-[#15316e] px-6 py-4 font-semibold text-[#15316e]"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="relative">
          <div
            className="h-[420px] rounded-3xl bg-cover bg-center shadow-xl"
            style={{ backgroundImage: "url(image.png)" }}
          />
          <div className="absolute -bottom-5 left-4 rounded-2xl bg-[#C08A33] px-5 py-4 text-white shadow-lg">
            <div className="text-3xl font-black">20+</div>
            <div className="text-sm">Jaar ervaring</div>
          </div>
          <div className="absolute -right-4 top-4 rounded-2xl bg-[#15316e] px-5 py-4 text-white shadow-lg">
            <div className="text-3xl font-black">500+</div>
            <div className="text-sm">Klanten</div>
          </div>
        </div>
      </div>
    </section>
  );
}