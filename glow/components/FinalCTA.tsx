import SerumBottle from "./SerumBottle";

export default function FinalCTA() {
  return (
    <section className="mx-auto max-w-[1320px] px-6 md:px-14 pb-8">
      <div className="relative overflow-hidden rounded-[24px] bg-hero-dark px-8 md:px-16 py-16 md:py-20 grid md:grid-cols-[1.3fr_1fr] items-center gap-8">
        <div className="absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />

        <div className="relative z-10">
          <h2 className="text-[32px] md:text-[46px] font-extrabold leading-[1.02] text-white">
            READY TO FIND
            <br />
            YOUR <span className="text-gold">GLOW</span>?
          </h2>
          <a
            href="#skin-search"
            className="mt-8 inline-flex items-center h-12 px-7 rounded-full bg-gold text-hero-dark text-sm font-semibold hover:opacity-90 hover:-translate-y-0.5 transition"
          >
            Search My Glow →
          </a>
        </div>

        <div className="relative z-10 hidden md:flex justify-end">
          <SerumBottle className="h-[220px] w-auto rotate-6 opacity-90" />
        </div>
      </div>
    </section>
  );
}
