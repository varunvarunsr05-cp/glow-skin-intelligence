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
  {
    quote: "It feels like skincare designed by a product team.",
    name: "Alex P.",
  },
];

const trust = [
  { icon: Leaf, label: "Clean formula" },
  { icon: ShieldCheck, label: "Dermatologically tested" },
  { icon: HeartHandshake, label: "Cruelty free" },
];

export default function ScienceResults() {
  return (
    <section
      id="science"
      className="mx-auto max-w-[1320px] px-6 md:px-14 py-16 md:py-24 overflow-hidden"
    >
      <div className="grid md:grid-cols-2 gap-16">

        {/* =====================================================
            SCIENCE
        ====================================================== */}
        <div className="reveal min-w-0">
          <h2 className="text-[22px] md:text-[26px] font-bold text-ink mb-10">
            THE SCIENCE <span className="text-gold">Behind GLOW</span>
          </h2>

          {/* ================= DESKTOP ================= */}
          <div className="hidden md:flex relative h-[360px] items-center justify-center">

            {/* Bottle */}
            <div className="relative z-10 flex h-full items-center justify-center">
              <div className="absolute h-[270px] w-[270px] rounded-full bg-gold-light/20 blur-3xl" />

              <SerumBottle className="relative z-10 h-[330px] w-auto" />
            </div>

            {/* Hyaluronic Acid */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[170px]">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 shrink-0 rounded-full bg-g-blue" />

                <p className="text-[11px] font-semibold tracking-wide text-ink">
                  HYALURONIC ACID
                </p>
              </div>

              <p className="text-[11px] text-ink-secondary mt-1">
                Deep hydration.
              </p>
            </div>

            {/* Niacinamide */}
            <div className="absolute bottom-2 left-0 w-[170px]">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 shrink-0 rounded-full bg-g-red" />

                <p className="text-[11px] font-semibold tracking-wide text-ink">
                  NIACINAMIDE
                </p>
              </div>

              <p className="text-[11px] text-ink-secondary mt-1 leading-relaxed">
                Improves texture & evens skin tone.
              </p>
            </div>

            {/* Ceramides */}
            <div className="absolute bottom-2 right-0 w-[175px]">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 shrink-0 rounded-full bg-g-green" />

                <p className="text-[11px] font-semibold tracking-wide text-ink">
                  CERAMIDES
                </p>
              </div>

              <p className="text-[11px] text-ink-secondary mt-1 leading-relaxed">
                Strengthens barrier & locks in moisture.
              </p>
            </div>
          </div>

          {/* ================= MOBILE ================= */}
          <div className="md:hidden">

            {/* Bottle FIRST */}
            <div className="relative flex h-[360px] items-center justify-center">
              <div className="absolute h-[260px] w-[260px] rounded-full bg-gold-light/20 blur-3xl" />

              <SerumBottle className="relative z-10 h-[330px] w-auto max-w-full" />
            </div>

            {/* Ingredients STACK */}
            <div className="mt-8 space-y-7">

              {/* Hyaluronic Acid */}
              <div className="w-full">
                <div className="flex items-center gap-2.5">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-g-blue" />

                  <p className="text-[18px] font-bold tracking-[-0.02em] text-ink">
                    HYALURONIC ACID
                  </p>
                </div>

                <p className="mt-2 pl-5 text-[15px] leading-relaxed text-ink-secondary">
                  Deep hydration.
                </p>
              </div>

              {/* Niacinamide */}
              <div className="w-full">
                <div className="flex items-center gap-2.5">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-g-red" />

                  <p className="text-[18px] font-bold tracking-[-0.02em] text-ink">
                    NIACINAMIDE
                  </p>
                </div>

                <p className="mt-2 pl-5 text-[15px] leading-relaxed text-ink-secondary">
                  Improves texture & evens skin tone.
                </p>
              </div>

              {/* Ceramides */}
              <div className="w-full">
                <div className="flex items-center gap-2.5">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-g-green" />

                  <p className="text-[18px] font-bold tracking-[-0.02em] text-ink">
                    CERAMIDES
                  </p>
                </div>

                <p className="mt-2 pl-5 text-[15px] leading-relaxed text-ink-secondary">
                  Strengthens barrier & locks in moisture.
                </p>
              </div>

            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-[11px] text-ink-muted mt-8 italic">
            A fictional concept formula — for demonstration purposes.
          </p>
        </div>

        {/* =====================================================
            RESULTS
        ====================================================== */}
        <div
          id="results"
          className="reveal min-w-0"
          style={{ animationDelay: "100ms" }}
        >
          <h2 className="text-[22px] md:text-[26px] font-bold text-ink mb-6">
            REAL RESULTS. REAL <span className="text-gold">GLOW.</span>
          </h2>

          <div className="flex items-baseline gap-3 mb-1">
            <span className="text-[32px] font-extrabold text-ink">
              4.9/5
            </span>
          </div>

          <div className="flex gap-0.5 mb-1 text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={14}
                fill="currentColor"
                strokeWidth={0}
              />
            ))}
          </div>

          <p className="text-[12px] text-ink-secondary mb-6">
            12K+ happy glow seekers
          </p>

          {/* Testimonials */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="min-w-0 bg-white border border-ink/8 rounded-2xl p-4"
              >
                <p className="text-[13px] text-ink leading-snug">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <p className="text-[11px] text-ink-muted mt-2">
                  — {t.name}
                </p>
              </div>
            ))}
          </div>

          {/* Trust */}
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {trust.map((t) => (
              <div
                key={t.label}
                className="flex items-center gap-2 text-[12px] text-ink-secondary"
              >
                <t.icon
                  size={15}
                  className="text-gold shrink-0"
                  strokeWidth={1.75}
                />

                <span>{t.label}</span>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-ink-muted mt-4 italic">
            Ratings and claims are part of a fictional concept, not verified
            statistics.
          </p>
        </div>
      </div>
    </section>
  );
}