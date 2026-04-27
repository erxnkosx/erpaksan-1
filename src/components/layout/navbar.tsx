"use client";

import Link from "next/link";
import { navLinks } from "@/lib/data";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[linear-gradient(90deg,#0a1f3d_0%,#123a6b_40%,#123a6b_60%,#0a1f3d_100%)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-20 py-5">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-removebg-preview (2).png"
            alt="Erpak San logo"
            width={220}
            height={60}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href !== "#" &&
              (link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href));

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition duration-200 ${
                  isActive
                    ? "rounded-lg bg-white/10 px-4 py-2 text-white"
                    : "text-white/80 hover:text-[#C08A33]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <a
          href="#contact"
          className="rounded-xl bg-[#C08A33] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#a87428]"
        >
          Offerte aanvragen
        </a>
      </div>
    </header>
  );
}