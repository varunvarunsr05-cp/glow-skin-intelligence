"use client";

import { useState } from "react";
import { Check, ShieldCheck } from "lucide-react";
import SerumBottle from "./SerumBottle";

const features = [
  "Daily hydration",
  "Lightweight formula",
  "Barrier-focused care",
  "Suitable for everyday use",
];

export default function ProductCard() {
  const [added, setAdded] = useState(false);

  return (
    <section className="mx-auto max-w-[1320px] px-6 md:px-14 py-10 md:py-14">
      <div className="bg-white border border-ink/8 rounded-[20px] p-6 md:p-10 grid md:grid-cols-[1fr_1.2fr_auto] gap-8 items-center reveal">
        <div className="relative flex items-center justify-center h-[220px] md:h-[260px]">
          <div className="absolute h-40 w-40 rounded-full bg-gold-light/25 blur-2xl" />
          <SerumBottle className="relative h-full w-auto" />
        </div>

        <div>
          <p className="text-[11px] font-semibold tracking-[0.14em] text-ink-muted mb-2">
            GLOW SKIN INTELLIGENCE™
          </p>
          <h3 className="text-[24px] md:text-[28px] font-bold text-ink">Precision Serum</h3>
          <p className="text-[13px] text-ink-secondary mt-1">30 ML</p>
          <p className="text-[26px] font-extrabold text-ink mt-2">$48</p>

          <ul className="mt-5 space-y-2">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-[13px] text-ink-secondary">
                <Check size={15} className="text-g-green shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-start md:items-end gap-3">
          <button
            onClick={() => setAdded(true)}
            className="h-[50px] px-8 rounded-full bg-hero-dark text-white text-sm font-semibold hover:opacity-90 hover:-translate-y-0.5 transition whitespace-nowrap"
          >
            {added ? "Added to your bag ✓" : "Add to Bag →"}
          </button>
          <div className="flex items-center gap-1.5 text-[12px] text-ink-secondary">
            <ShieldCheck size={14} className="text-gold" />
            30-day glow guarantee
          </div>
        </div>
      </div>
    </section>
  );
}
