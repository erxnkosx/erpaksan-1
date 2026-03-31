export default function CtaSection() {
  return (
    <section
      id="contact"
      className="bg-[linear-gradient(90deg,#0a1f3d_0%,#123a6b_40%,#123a6b_60%,#0a1f3d_100%)] py-24 text-white"
    >
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C08A33]">
          Klaar om te starten?
        </p>
        <h2 className="mt-6 mb-9 text-4xl font-black md:text-5xl">
          Vraag een vrijblijvende offerte aan
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-white/75">
          Onze experts staan klaar om u te adviseren over de beste
          verpakkingsoplossing voor uw bedrijf.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-white/80">
          <span><span className="text-[#C08A33]">✓</span> Gratis advies</span>
          <span><span className="text-[#C08A33]">✓</span> Geen verplichtingen</span>
          <span><span className="text-[#C08A33]">✓</span> Antwoord binnen 1 werkdag</span>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:info@erpaksan.be"
            className="rounded-xl bg-[#C08A33] px-6 py-4 font-semibold text-white"
          >
            Contacteer ons
          </a>
          <a
            href="#producten"
            className="rounded-xl border border-white/20 bg-white/5 px-6 py-4 font-semibold text-white"
          >
            Bekijk ons aanbod
          </a>
        </div>
      </div>
    </section>
  );
}