import { Droplet, ShieldCheck, Sparkles } from "lucide-react";

const items = [
  {
    icon: Droplet,
    label: "HYDRATE",
    stat: "72H",
    statColor: "text-g-blue",
    bg: "bg-g-blue/10",
    text: "Long-lasting hydration that keeps your skin soft and plump.",
  },
  {
    icon: ShieldCheck,
    label: "PROTECT",
    stat: "BARRIER+",
    statColor: "text-g-red",
    bg: "bg-g-red/10",
    text: "Strengthens your skin barrier and protects against daily stressors.",
  },
  {
    icon: Sparkles,
    label: "GLOW",
    stat: "01",
    statColor: "text-g-green",
    bg: "bg-g-green/10",
    text: "One simple step for a healthy, radiant-looking glow every day.",
  },
];

export default function Benefits() {
  return (
    <section id="discover" className="mx-auto max-w-[1320px] px-6 md:px-14 py-20 md:py-28">
      <h2 className="text-center text-[28px] md:text-[38px] font-bold text-ink mb-14">
        WHY <span className="text-gold">GLOW</span>?
      </h2>

      <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-ink/8">
        {items.map((it, i) => (
          <div key={it.label} className="px-0 md:px-8 py-8 md:py-0 reveal" style={{ animationDelay: `${i * 100}ms` }}>
            <div className={`h-12 w-12 rounded-full ${it.bg} flex items-center justify-center mb-5`}>
              <it.icon size={20} className={it.statColor} strokeWidth={2} />
            </div>
            <p className="text-[13px] font-semibold tracking-[0.1em] text-ink-secondary">
              {it.label}
            </p>
            <p className={`text-[26px] font-extrabold mt-1 ${it.statColor}`}>{it.stat}</p>
            <p className="text-[14px] text-ink-secondary mt-3 leading-relaxed max-w-[260px]">
              {it.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
