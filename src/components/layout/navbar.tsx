"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();

  const getHref = (href: string) => {
    if (href === "#over-ons") return "/#over-ons";
    if (href === "#contact") return "/#contact";
    return href;
  };

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("#")) return false;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[linear-gradient(90deg,#0a1f3d_0%,#123a6b_45%,#0a1f3d_100%)] shadow-lg shadow-black/10 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3 transition-transform duration-300 hover:scale-[1.03]"
          aria-label="Ga naar home"
        >
          <Image
            src="/logo-removebg-preview (2).png"
            alt="Erpak San logo"
            width={220}
            height={60}
            className="h-12 w-auto object-contain drop-shadow-sm"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-1 md:flex">
          {navLinks.map((link) => {
            const href = getHref(link.href);
            const isActive = isActiveLink(link.href);

            return (
              <Link
                key={link.label}
                href={href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-white/75 hover:text-white"
                }`}
              >
                <span className="relative z-10">{link.label}</span>

                <span
                  className={`absolute left-4 right-4 -bottom-1 h-[2px] rounded-full bg-[#C08A33] transition-all duration-300 ${
                    isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:scale-x-100 group-hover:opacity-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <a
          href="/#contact"
          className="group relative overflow-hidden rounded-xl bg-[#C08A33] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d99a2b] hover:shadow-lg"
        >
          <span className="relative z-10">Offerte aanvragen</span>
          <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />
        </a>
      </div>
    </header>
  );
}