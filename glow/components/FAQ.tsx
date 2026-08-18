"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What is GLOW Skin Intelligence?",
    a: "It's a precision serum concept designed to simplify your skincare routine into one intentional daily step — hydration, barrier support, and glow, together.",
  },
  {
    q: "How do I use it?",
    a: "Apply 2–3 drops to clean, damp skin morning and night, gently pressing it in before your moisturizer.",
  },
  {
    q: "Is it suitable for daily use?",
    a: "Yes — GLOW is formulated to be lightweight enough for twice-daily use as part of a simplified routine.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="mx-auto max-w-[1320px] px-6 md:px-14 py-14 md:py-20">
      <div className="grid md:grid-cols-[200px_1fr] gap-8">
        <h2 className="text-[22px] md:text-[26px] font-bold text-ink">FAQ</h2>

        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="bg-white border border-ink/8 rounded-2xl px-5 md:px-6 overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[14px] font-medium text-ink pr-4">{f.q}</span>
                  <Plus
                    size={18}
                    className={`text-ink-secondary shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="text-[13px] text-ink-secondary leading-relaxed pb-4 pr-6">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
