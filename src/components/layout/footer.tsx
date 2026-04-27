export default function Footer() {
  return (
    <footer className="bg-[linear-gradient(90deg,#06162b_0%,#0d2c52_40%,#0d2c52_60%,#06162b_100%)] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div>
          <a href="/" className="flex items-center -mt-2.75">
            <img
              src="images/home/logo-removebg-preview (2).png"
              alt="Erpak San"
              className="h-10 w-auto"
            />
          </a>

          <p className="mt-5 max-w-[260px] text-sm leading-7 text-white/65">
            Uw betrouwbare partner in verpakkingsoplossingen voor horeca,
            voeding en industrie.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-[#C08A33]">
            Producten
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-white/65">
            <li><a href="#" className="transition-colors duration-200 hover:text-white">Alle producten</a></li>
            <li><a href="#" className="transition-colors duration-200 hover:text-white">Verpakking</a></li>
            <li><a href="#" className="transition-colors duration-200 hover:text-white">Tafelkust</a></li>
            <li><a href="#" className="transition-colors duration-200 hover:text-white">Hygiëne</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-[#C08A33]">
            Bedrijf
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-white/65">
            <li><a href="#" className="transition-colors duration-200 hover:text-white">Over ons</a></li>
            <li><a href="#" className="transition-colors duration-200 hover:text-white">Online catalogus</a></li>
            <li><a href="#" className="transition-colors duration-200 hover:text-white">Contact</a></li>
            <li><a href="#" className="transition-colors duration-200 hover:text-white">Offerte aanvragen</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-[#C08A33]">
            Contact
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-white/65">
            <li>Industrieweg 42</li>
            <li>2000 Antwerpen, België</li>
            <li>+32 3 123 45 67</li>
            <li>info@erpaksan.be</li>
            <li>Ma–Vr: 08:00–17:00</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm text-white/45">
        © 2026 Erpak San BV. Alle rechten voorbehouden.
      </div>
    </footer>
  );
}