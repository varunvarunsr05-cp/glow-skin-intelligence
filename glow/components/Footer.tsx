const socials = ["IG", "FB", "TT"];

const links = [
  { label: "Discover", href: "#discover" },
  { label: "Science", href: "#science" },
  { label: "Results", href: "#results" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="bg-hero-dark px-6 md:px-14 py-10">
      <div className="mx-auto max-w-[1320px] flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <p className="text-[22px] font-semibold tracking-[0.14em] text-white">GLOW</p>
          <p className="text-[10px] tracking-[0.2em] text-white/50 mt-1">
            SKIN INTELLIGENCE™
          </p>
        </div>

        <nav className="flex flex-wrap gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[12px] font-medium tracking-wide text-white/60 hover:text-white transition-colors"
            >
              {l.label.toUpperCase()}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <span
              key={s}
              className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center text-[10px] font-semibold text-white/70 hover:text-white hover:border-white/40 transition-colors cursor-pointer"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <p className="mx-auto max-w-[1320px] text-[11px] text-white/40 mt-8 pt-6 border-t border-white/10">
        © 2026 GLOW Skin Intelligence™. All rights reserved. A concept project — not a real product.
      </p>
    </footer>
  );
}
