import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="bg-[#0a1f3d] py-3">
      <div className="mx-auto flex max-w-7xl items-center gap-1.5 px-6 text-sm md:px-8">
        <Home size={17} className="text-[#C08A33] shrink-0" />
        {items.map((item, index) => (
          <span key={index} className="flex items-center gap-1.5">
            {index > 0 && (
              <ChevronRight size={14} className="text-white/30 shrink-0" />
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="text-white/60 hover:text-[#C08A33] transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-[#C08A33] font-semibold">{item.label}</span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}