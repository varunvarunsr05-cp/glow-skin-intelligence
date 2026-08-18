"use client";

import { useState } from "react";
import { Search, ArrowRight, CheckCircle2 } from "lucide-react";
import SerumBottle from "./SerumBottle";

const popular = ["Dullness", "Dryness", "Uneven texture", "Breakouts"];

export default function SkinSearch() {
  const [query, setQuery] = useState("");
  const [searched, setSearched] = useState(false);
  const [added, setAdded] = useState(false);

  const runSearch = () => {
    if (!query.trim()) return;
    setSearched(false);
    // restart the reveal animation
    requestAnimationFrame(() => setSearched(true));
  };

  return (
    <section id="skin-search" className="mx-auto max-w-[1320px] px-6 md:px-14 -mt-8 md:-mt-10 relative z-30">
      <div className="bg-white border border-ink/8 rounded-[20px] shadow-[0_12px_40px_rgba(17,19,24,0.08)] p-6 md:p-10 grid md:grid-cols-2 gap-8 md:gap-6 reveal">
        {/* Search input side */}
        <div>
          <h2 className="text-[22px] md:text-[26px] font-bold text-ink leading-tight">
            WHAT IS YOUR SKIN
            <br />
            SEARCHING FOR?
          </h2>

          <div className="mt-6 flex items-center gap-2 bg-cream rounded-full h-13 md:h-[52px] pl-5 pr-1.5 border border-ink/8">
            <Search size={17} className="text-ink-muted shrink-0" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && runSearch()}
              placeholder="Ex: My skin feels tired and dry..."
              className="flex-1 bg-transparent text-[14px] text-ink placeholder:text-ink-muted outline-none py-3"
            />
            <button
              onClick={runSearch}
              aria-label="Search"
              className="h-10 w-10 rounded-full bg-hero-dark text-white flex items-center justify-center shrink-0 hover:opacity-90 transition"
            >
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <span className="text-[11px] font-medium text-ink-muted tracking-wide mr-1 self-center">
              POPULAR:
            </span>
            {popular.map((p) => (
              <button
                key={p}
                onClick={() => setQuery(`My skin struggles with ${p.toLowerCase()}...`)}
                className="h-[30px] px-4 rounded-full border border-ink/12 text-[12px] text-ink-secondary hover:border-gold hover:text-ink transition"
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Result side */}
        <div className="md:border-l md:border-ink/8 md:pl-6">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-[13px] font-semibold tracking-[0.1em] text-ink">
              YOUR SKIN RESULT
            </h3>
            {searched && (
              <span className="text-[10px] font-semibold bg-gold-light/40 text-gold px-2 py-1 rounded-full">
                97% MATCH
              </span>
            )}
          </div>

          {!searched ? (
            <div className="h-[150px] flex items-center justify-center text-center text-[13px] text-ink-muted border border-dashed border-ink/12 rounded-2xl">
              Search above to reveal your personalized match
            </div>
          ) : (
            <div className="grid grid-cols-[1fr_auto] gap-4 items-center reveal">
              <div className="bg-cream rounded-2xl p-4">
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-g-green mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[13px] font-semibold text-ink">
                      Hydration deficit detected.
                    </p>
                    <p className="text-[12px] text-ink-secondary mt-1 leading-relaxed">
                      Your skin needs deep hydration and barrier support.
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <SerumBottle className="h-10 w-auto shrink-0" />
                  <div>
                    <p className="text-[9px] font-semibold tracking-wide text-ink-muted">
                      RECOMMENDED FOR YOU
                    </p>
                    <p className="text-[12px] font-semibold text-ink">
                      GLOW Skin Intelligence™
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="relative h-16 w-16 rounded-full flex items-center justify-center border-4 border-gold">
                  <span className="text-[13px] font-bold text-ink">97%</span>
                </div>
                <button
                  onClick={() => setAdded(true)}
                  className="h-9 px-4 rounded-full bg-hero-dark text-white text-[11px] font-semibold whitespace-nowrap hover:opacity-90 transition"
                >
                  {added ? "Added ✓" : "Add to Bag"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
