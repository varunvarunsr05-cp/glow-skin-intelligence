import { Search, Mic } from "lucide-react";
import SerumBottle from "./SerumBottle";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream">
      <div className="mx-auto max-w-[1320px] px-6 md:px-14 pt-14 md:pt-20 pb-16 grid md:grid-cols-[46%_54%] gap-10 items-center">
        {/* Left column */}
        <div className="reveal" style={{ animationDelay: "60ms" }}>
          <p className="text-[13px] font-semibold tracking-[0.14em] text-ink-secondary mb-5">
            <span className="text-g-blue">G</span>
            <span className="text-g-red">O</span>
            <span className="text-g-yellow">O</span>
            <span className="text-g-blue">G</span>
            <span className="text-g-green">L</span>
            <span className="text-g-red">E</span>
            , REIMAGINED FOR YOUR SKIN
          </p>

          <h1 className="font-extrabold tracking-[-0.03em] leading-[0.98] text-[44px] md:text-[68px] text-ink">
            SEARCH LESS.
            <br />
            <span className="text-gold">GLOW</span> MORE.
          </h1>

          <p className="mt-6 max-w-[460px] text-[17px] leading-[1.6] text-ink-secondary">
            GLOW Skin Intelligence™ is a precision serum designed to simplify
            your skincare routine and bring out your natural radiance.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#skin-search"
              className="inline-flex items-center h-12 px-7 rounded-full bg-hero-dark text-white text-sm font-semibold hover:opacity-90 hover:-translate-y-0.5 transition"
            >
              Find My Glow →
            </a>
            <a
              href="#science"
              className="inline-flex items-center h-12 px-7 rounded-full border border-ink/30 text-ink text-sm font-semibold hover:border-ink/60 transition"
            >
              Explore Formula ↓
            </a>
          </div>

          <div className="mt-9 flex items-center gap-3 flex-wrap min-w-0 text width limited smaller avatar/text sizes">
            <div className="flex -space-x-2">
              {[
                "https://i.pravatar.cc/100?img=47",
                "https://i.pravatar.cc/100?img=32",
                "https://i.pravatar.cc/100?img=44",
                "https://i.pravatar.cc/100?img=12",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Glow customer"
                  className="h-8 w-8 rounded-full border-2 border-cream object-cover"
                />
              ))}
            </div>

            <p className="min-w-0 text-[11px] sm:text-[13px] leading-5 text-ink-secondary">
              12K+ glow seekers already found their match
            </p>
          </div>
        </div>

        {/* Right column — product visual */}
        <div className="relative reveal" style={{ animationDelay: "160ms" }}>
          <div className="relative mx-auto h-[440px] md:h-[560px] flex items-center justify-center">
            {/* halo */}
            <div className="absolute h-[340px] w-[340px] md:h-[420px] md:w-[420px] rounded-full border border-gold/30" />
            <div className="absolute h-[280px] w-[280px] md:h-[340px] md:w-[340px] rounded-full bg-gold-light/20 blur-2xl" />

            <SerumBottle className="relative z-10 float-bottle h-[320px] md:h-[420px] w-auto drop-shadow-2xl" />

            {/* search bar overlay */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[86%] md:w-[420px] z-20">
              <div className="flex items-center gap-3 bg-white rounded-full shadow-[0_12px_40px_rgba(17,19,24,0.12)] h-14 px-5">
                <Search size={18} className="text-ink-muted shrink-0" />
                <span className="text-[14px] text-ink-muted truncate">
                  What does your skin need?
                </span>
                <Mic size={18} className="text-g-blue shrink-0 ml-auto" />
              </div>
            </div>

            {/* skin match card */}
            <div className="hidden md:flex absolute top-4 right-0 z-20 flex-col gap-1 bg-white rounded-2xl shadow-[0_12px_40px_rgba(17,19,24,0.1)] px-5 py-4 w-[170px]">
              <span className="text-[10px] font-semibold tracking-[0.12em] text-ink-muted">
                SKIN MATCH
              </span>
              <span className="text-[28px] font-extrabold text-ink leading-none mt-1">
                97%
              </span>
              <span className="text-[11px] text-ink-secondary mt-1">
                Great match for you!
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
