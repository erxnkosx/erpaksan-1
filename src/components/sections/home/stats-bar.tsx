import { stats } from "@/lib/data";

export default function StatsBar() {
  return (
    <section className="bg-[linear-gradient(90deg,#0a1f3d_0%,#123a6b_40%,#123a6b_60%,#0a1f3d_100%)] text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="px-6 py-8 text-center">
            <div className="text-4xl font-black">{stat.value}</div>
            <div className="mt-2 text-xs uppercase tracking-[0.2em] text-white/50">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}