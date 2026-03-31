export default function Hero() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        backgroundImage: `
        linear-gradient(
            90deg,
            rgba(10,31,61,0.96) 0%,
            rgba(6, 41, 83, 0.84) 35%,
            rgba(10, 46, 90, 0.65) 55%,
            rgba(250, 250, 250, 0.35) 100%
        ),
        url('/image.png')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-7xl px-20 py-28 md:py-36">
  <div className="max-w-2xl">

    {/* label */}
    <div className="mb-6 flex items-center gap-4">
      <div className="h-[1.75px] w-15 bg-[#C08A33]" />
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C08A33]">
        Belgisch verpakkingsbedrijf
      </p>
    </div>

    {/* titel */}
    <h1 className="text-5xl font-black leading-[1.05] md:text-6xl">
      Professionele
      <br />
      <span className="text-[#C08A33]">verpakkingsoplossingen</span>
      <br />
      op maat
    </h1>

    {/* lijn onder titel */}
    <div className="mt-6 h-[1px] w-16 bg-white/20" />

    {/* tekst */}
    <p className="mt-8 max-w-[475px] text-lg leading-8 text-white/80 leading-11">
      Van horeca tot foodindustrie — kwaliteitsvolle verpakkingen, snel
      geleverd vanuit België, met persoonlijke begeleiding van A tot Z.
    </p>

    {/* lijst */}
    <ul className="mt-8 space-y-4 text-sm text-white/90">
      <li className="flex items-center gap-3">
        <span className="text-[#C08A33]">✔</span>
        Gratis offerte op maat
      </li>
      <li className="flex items-center gap-3">
        <span className="text-[#C08A33]">✔</span>
        Levering in 24–48u
      </li>
      <li className="flex items-center gap-3">
        <span className="text-[#C08A33]">✔</span>
        ISO-gecertificeerde producten
      </li>
    </ul>

    {/* buttons */}
    <div className="mt-10 flex flex-wrap gap-4">
      <a
        href="#contact"
        className="rounded-xl bg-[#C08A33] px-6 py-4 font-semibold text-white transition hover:opacity-90"
      >
        Offerte aanvragen
      </a>
      <a
        href="#producten"
        className="rounded-xl border border-white/20 bg-white/5 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
      >
        Bekijk ons aanbod
      </a>
    </div>

  </div>
</div>
    </section>
  );
}