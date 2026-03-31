import { MessageCircle, ClipboardList, Truck, ArrowRight } from "lucide-react";

const steps = [
  {
    step: "Stap 01",
    title: "Neem contact op",
    text: "Vertel ons over uw verpakkingsnoden via het contactformulier, telefonisch of per e-mail.",
    icon: MessageCircle,
  },
  {
    step: "Stap 02",
    title: "Persoonlijk advies",
    text: "Onze expert analyseert uw situatie en stelt een offerte op maat samen.",
    icon: ClipboardList,
  },
  {
    step: "Stap 03",
    title: "Snelle levering",
    text: "Na goedkeuring bezorgen wij uw bestelling binnen 24–48 uur in heel België.",
    icon: Truck,
  },
];

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(90deg,#0a1f3d_0%,#123a6b_40%,#123a6b_60%,#0a1f3d_100%)] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C08A33]">
          Eenvoudig proces
        </p>

        <h2 className="mt-4 text-4xl font-black md:text-5xl">
          Zo werkt het
        </h2>

        <p className="mt-4 text-white/70">
          Van eerste contact tot levering — snel, transparant en persoonlijk.
        </p>

        <div className="relative mt-16 grid gap-8 md:grid-cols-3 md:justify-items-center">
          <div className="absolute left-1/2 top-14 hidden h-px w-[60%] -translate-x-1/2 bg-[#C08A33]/20 md:block" />

          {steps.map((step) => (
            <div
              key={step.title}
              className="relative z-10 flex min-h-[390px] w-full max-w-[370px] flex-col items-center rounded-[28px] border border-white/10 bg-white/[0.04] px-8 py-14 text-center backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
            >
              <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#C08A33] bg-[linear-gradient(90deg,#0a1f3d_0%,#123a6b_100%)] shadow-[0_0_0_6px_rgba(192,138,51,0.12)]">
                <step.icon className="h-5 w-5 text-[#C08A33]" />
              </div>

              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C08A33]">
                {step.step}
              </p>

              <h3 className="mt-4 text-[2rem] font-bold leading-tight">
                {step.title}
              </h3>

              <p className="mt-5 max-w-[260px] text-base leading-8 text-white/60">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        <a
          href="#contact"
          className="mt-12 inline-flex items-center gap-2 rounded-xl bg-[#C08A33] px-7 py-4 font-semibold text-white shadow-[0_6px_24px_rgba(192,138,51,0.28)] transition hover:-translate-y-0.5 hover:opacity-90"
        >
          Start vandaag nog
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}