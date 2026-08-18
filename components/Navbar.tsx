"use client";

import { useState } from "react";
import { Menu, X, Sparkle } from "lucide-react";

const links = [
  { label: "Discover", href: "#discover" },
  { label: "Science", href: "#science" },
  { label: "Results", href: "#results" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-ink/5">
      <div className="mx-auto max-w-[1320px] px-6 md:px-14 h-[76px] flex items-center justify-between">
        <a href="#top" className="flex flex-col leading-none group">
          <span className="flex items-center gap-[2px] text-[26px] md:text-[30px] font-semibold tracking-[0.14em] text-ink">
            GL
            <span className="relative inline-flex items-center justify-center">
              O
              <Sparkle
                className="absolute -top-1.5 -right-0.5 h-2.5 w-2.5 text-gold"
                strokeWidth={1.5}
                fill="currentColor"
              />
            </span>
            W
          </span>
          <span className="text-[9px] md:text-[10px] tracking-[0.22em] text-ink-secondary mt-1">
            SKIN INTELLIGENCE™
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium tracking-wide text-ink-secondary hover:text-ink transition-colors"
            >
              {l.label.toUpperCase()}
            </a>
          ))}
        </nav>

        <a
          href="#skin-search"
          className="hidden md:inline-flex items-center h-11 px-6 rounded-full bg-hero-dark text-white text-[13px] font-semibold tracking-wide hover:opacity-90 transition-opacity"
        >
          Find My Glow →
        </a>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-ink"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 bg-cream border-t border-ink/5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-ink-secondary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#skin-search"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center h-11 rounded-full bg-hero-dark text-white text-sm font-semibold"
          >
            Find My Glow →
          </a>
        </div>
      )}
    </header>
  );
}
