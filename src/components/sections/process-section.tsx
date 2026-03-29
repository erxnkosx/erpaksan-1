const steps = [
  {
    step: "Stap 01",
    title: "Neem contact op",
    text: "Vertel ons over uw verpakkingsnoden via het contactformulier, telefonisch of per e-mail.",
  },
  {
    step: "Stap 02",
    title: "Persoonlijk advies",
    text: "Onze expert analyseert uw situatie en stelt een offerte op maat samen.",
  },
  {
    step: "Stap 03",
    title: "Snelle levering",
    text: "Na goedkeuring bezorgen wij uw bestelling binnen 24–48 uur in heel België.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-gradient-to-r from-[#0d2b66] to-[#25499e] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d7a42d]">
          Eenvoudig proces
        </p>
        <h2 className="mt-4 text-4xl font-black md:text-5xl">Zo werkt het</h2>
        <p className="mt-4 text-white/70">
          Van eerste contact tot levering — snel, transparant en persoonlijk.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-left shadow-lg"
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d7a42d]">
                {step.step}
              </p>
              <h3 className="mt-4 text-2xl font-bold">{step.title}</h3>
              <p className="mt-4 text-white/75">{step.text}</p>
            </div>
          ))}
        </div>

        <a
          href="#contact"
          className="mt-10 inline-flex rounded-xl bg-[#d7a42d] px-6 py-4 font-semibold text-white transition hover:opacity-90"
        >
          Start vandaag nog
        </a>
      </div>
    </section>
  );
}