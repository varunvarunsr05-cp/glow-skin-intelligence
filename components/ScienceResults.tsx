import { Star, Leaf, ShieldCheck, HeartHandshake } from "lucide-react";
import SerumBottle from "./SerumBottle";

const ingredients = [
  {
    name: "Hyaluronic Acid",
    desc: "Deep hydration.",
    pos: "top-0 left-1/2 -translate-x-1/2",
    dot: "bg-g-blue",
  },
  {
    name: "Niacinamide",
    desc: "Improves texture & evens skin tone.",
    pos: "bottom-2 left-0",
    dot: "bg-g-red",
  },
  {
    name: "Ceramides",
    desc: "Strengthens barrier & locks in moisture.",
    pos: "bottom-2 right-0",
    dot: "bg-g-green",
  },
];

const testimonials = [
  { quote: "My five-step routine became one.", name: "Maya R." },
  { quote: "It feels like skincare designed by a product team.", name: "Alex P." },
];

const trust = [
  { icon: Leaf, label: "Clean formula" },
  { icon: ShieldCheck, label: "Dermatologically tested" },
  { icon: HeartHandshake, label: "Cruelty free" },
];

export default function ScienceResults() {
  return (
    <section id="science" className="mx-auto max-w-[1320px] px-6 md:px-14 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-16">
        {/* Science */}
        <div className="reveal">
          <h2 className="text-[22px] md:text-[26px] font-bold text-ink mb-10">
            THE SCIENCE <span className="text-gold">Behind GLOW</span>
          </h2>

          <div className="relative h-[280px] flex items-center justify-center">
            <SerumBottle className="h-[220px] w-auto" />
            {ingredients.map((ing) => (
              <div key={ing.name} className={`absolute ${ing.pos} max-w-[150px]`}>
                <div className="flex items-center gap-1.5">
                  <span className={`h-1.5 w-1.5 rounded-full ${ing.dot}`} />
                  <p className="text-[11px] font-semibold tracking-wide text-ink">
                    {ing.name.toUpperCase()}
                  </p>
                </div>
                <p className="text-[11px] text-ink-secondary mt-0.5">{ing.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-ink-muted mt-4 italic">
            A fictional concept formula — for demonstration purposes.
          </p>
        </div>

        {/* Results */}
        <div id="results" className="reveal" style={{ animationDelay: "100ms" }}>
          <h2 className="text-[22px] md:text-[26px] font-bold text-ink mb-6">
            REAL RESULTS. REAL <span className="text-gold">GLOW.</span>
          </h2>

          <div className="flex items-baseline gap-3 mb-1">
            <span className="text-[32px] font-extrabold text-ink">4.9/5</span>
          </div>
          <div className="flex gap-0.5 mb-1 text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
            ))}
          </div>
          <p className="text-[12px] text-ink-secondary mb-6">12K+ happy glow seekers</p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-ink/8 rounded-2xl p-4">
                <p className="text-[13px] text-ink leading-snug">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-[11px] text-ink-muted mt-2">— {t.name}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {trust.map((t) => (
              <div key={t.label} className="flex items-center gap-2 text-[12px] text-ink-secondary">
                <t.icon size={15} className="text-gold" strokeWidth={1.75} />
                {t.label}
              </div>
            ))}
          </div>
          <p className="text-[11px] text-ink-muted mt-4 italic">
            Ratings and claims are part of a fictional concept, not verified statistics.
          </p>
        </div>
      </div>
    </section>
  );
}
