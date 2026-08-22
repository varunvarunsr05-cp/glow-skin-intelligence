"use client";

import { useState } from "react";
import { Search, ArrowRight, CheckCircle2 } from "lucide-react";
import SerumBottle from "./SerumBottle";
import RoutineCard from "./RoutineCard";

const popular = ["Dullness", "Dryness", "Uneven texture", "Breakouts"];

export default function SkinSearch() {
  const [query, setQuery] = useState("");
  const [searched, setSearched] = useState(false);
  const [added, setAdded] = useState(false);

  const runSearch = () => {
    if (!query.trim()) return;

    setSearched(false);

    requestAnimationFrame(() => {
      setSearched(true);
    });
  };

  return (
    <section
      id="skin-search"
      className="relative z-30 mx-auto -mt-8 w-full max-w-[1320px] overflow-hidden px-4 sm:px-6 md:-mt-10 md:px-14"
    >
      <div className="grid min-w-0 grid-cols-1 gap-8 rounded-[20px] border border-ink/8 bg-white p-5 shadow-[0_12px_40px_rgba(17,19,24,0.08)] reveal sm:p-6 md:grid-cols-2 md:gap-6 md:p-10">

        {/* =====================================================
            SEARCH INPUT
        ====================================================== */}
        <div className="min-w-0">
          <h2 className="text-[22px] font-bold leading-tight text-ink md:text-[26px]">
            WHAT IS YOUR SKIN
            <br />
            SEARCHING FOR?
          </h2>

          {/* Search bar */}
          <div className="mt-6 flex h-[52px] w-full min-w-0 items-center gap-2 rounded-full border border-ink/8 bg-cream pl-4 pr-1.5 sm:pl-5">
            <Search
              size={17}
              className="shrink-0 text-ink-muted"
            />

            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") runSearch();
              }}
              placeholder="Ex: My skin feels tired and dry..."
              className="min-w-0 flex-1 bg-transparent py-3 text-[13px] text-ink outline-none placeholder:text-ink-muted sm:text-[14px]"
            />

            <button
              onClick={runSearch}
              aria-label="Search"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-hero-dark text-white transition hover:-translate-y-0.5 hover:opacity-90"
            >
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Popular searches */}
          <div className="mt-5 flex min-w-0 flex-wrap items-center gap-2">
            <span className="mr-1 shrink-0 self-center text-[10px] font-medium tracking-wide text-ink-muted sm:text-[11px]">
              POPULAR:
            </span>

            {popular.map((p) => (
              <button
                key={p}
                onClick={() =>
                  setQuery(
                    `My skin struggles with ${p.toLowerCase()}...`
                  )
                }
                className="h-[30px] shrink-0 rounded-full border border-ink/12 px-3 text-[11px] text-ink-secondary transition hover:border-gold hover:text-ink sm:px-4 sm:text-[12px]"
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* =====================================================
            RESULT SIDE
        ====================================================== */}
        <div className="min-w-0 md:border-l md:border-ink/8 md:pl-6">

          {/* Result heading */}
          <div className="mb-4 flex min-w-0 flex-wrap items-center gap-2">
            <h3 className="text-[13px] font-semibold tracking-[0.1em] text-ink">
              YOUR SKIN RESULT
            </h3>

            {searched && (
              <span className="rounded-full bg-gold-light/40 px-2 py-1 text-[10px] font-semibold text-gold">
                97% MATCH
              </span>
            )}
          </div>

          {/* Empty state */}
          {!searched ? (
            <div className="flex min-h-[150px] w-full items-center justify-center rounded-2xl border border-dashed border-ink/12 px-5 py-8 text-center text-[13px] leading-relaxed text-ink-muted">
              Search above to reveal your personalized match
            </div>
          ) : (
            /* =================================================
               MOBILE: STACKED
               DESKTOP: CARD + MATCH SIDE BY SIDE
            ================================================== */
            <div className="grid min-w-0 grid-cols-1 gap-5 reveal sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">

              {/* Recommendation card */}
              <div className="min-w-0 rounded-2xl bg-cream p-4">
                <div className="flex min-w-0 items-start gap-2">
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0 text-g-green"
                  />

                  <div className="min-w-0">
                    <p className="text-[13px] font-semibold text-ink">
                      Hydration deficit detected.
                    </p>

                    <p className="mt-1 text-[12px] leading-relaxed text-ink-secondary">
                      Your skin needs deep hydration and barrier support.
                    </p>
                  </div>
                </div>

                {/* Recommended product */}
                <div className="mt-4 flex min-w-0 items-center gap-3">
                  <SerumBottle className="h-14 w-auto shrink-0 sm:h-10" />

                  <div className="min-w-0">
                    <p className="text-[9px] font-semibold tracking-wide text-ink-muted">
                      RECOMMENDED FOR YOU
                    </p>

                    <p className="mt-1 truncate text-[12px] font-semibold text-ink">
                      GLOW Skin Intelligence™
                    </p>
                  </div>
                </div>
              </div>

              {/* Match + CTA */}
              <div className="flex flex-row items-center justify-between gap-4 sm:flex-col sm:justify-center">
                <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-gold">
                  <span className="text-[13px] font-bold text-ink">
                    97%
                  </span>
                </div>

                <button
                  onClick={() => setAdded(true)}
                  className="h-9 shrink-0 rounded-full bg-hero-dark px-4 text-[11px] font-semibold whitespace-nowrap text-white transition hover:-translate-y-0.5 hover:opacity-90"
                >
                  {added ? "Added ✓" : "Add to Bag"}
                </button>
              </div>
            </div>
          )}
          {searched && <RoutineCard />}
        </div>
      </div>
    </section>
  );
}