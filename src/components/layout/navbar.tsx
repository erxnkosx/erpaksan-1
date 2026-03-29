import Link from "next/link";
import { navLinks } from "@/lib/data";
import Image from "next/image";

type NavLink = {
  label: string;
  href: string;
};

export default function Navbar() {
  return (
<header className="sticky top-0 z-50 bg-[linear-gradient(90deg,#0a1f3d_0%,#123a6b_40%,#123a6b_60%,#0a1f3d_100%)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-20 py-5">

        {/* LOGO */}
        <Link href="#" className="flex items-center gap-3">
        <Image
            src="/logo-removebg-preview (2).png"
            alt="Erpak San logo"
            width={220}
            height={60}
            className="h-12 w-auto object-contain"
            priority
        />
        </Link>

        {/* NAV */}
        <nav className="hidden items-center gap-8 md:flex">
        {navLinks.map((link) => (
            <Link
            key={link.label}
            href={link.href}
            className={`text-sm font-medium transition ${
                link.label === "Home"
                ? "bg-white/10 px-4 py-2 rounded-lg text-white"
                : "text-white/80 hover:text-white"
            }`}
            >
            {link.label}
            </Link>
        ))}
        </nav>

        {/* CTA */}
        <a
        href="#contact"
        className="rounded-xl bg-[#C08A33] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90"
        >
        Offerte aanvragen
        </a>
    </div>
    </header>
  );
}