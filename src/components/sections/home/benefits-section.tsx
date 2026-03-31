import { benefits } from "@/lib/data";
import { Award, Users, Star, Lightbulb, Shield, Leaf } from "lucide-react";

const icons = [Award, Users, Star, Lightbulb, Shield, Leaf];

export default function BenefitsSection() {
  return (
    <section className="bg-[#f7f8fb] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C08A33]">
            Waarom Erpak San
          </p>
          <h2 className="mt-4 text-4xl font-extrabold text-[#15316e] md:text-5xl">
            Uw voordelen als klant
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((item, index) => {
            const Icon = icons[index];

            return (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md"
              >
                {/* ICON BLOCK */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#eef2f8]">
                  <Icon className="h-5 w-5 text-[#15316e]" />
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-bold text-[#15316e]">
                  {item.title}
                </h3>

                {/* TEXT */}
                <p className="mt-3 leading-relaxed text-slate-600">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}