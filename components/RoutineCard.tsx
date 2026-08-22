"use client";

import { useState } from "react";
import { Sun, Moon, Droplets, Sparkles, ShieldPlus } from "lucide-react";
import SerumBottle from "./SerumBottle";

const routines = {
  am: [
    { icon: Droplets, label: "Cleanse", desc: "Gentle cleanser to prep skin." },
    { icon: Sparkles, label: "GLOW Serum", desc: "2–3 drops, press into skin.", highlight: true },
    { icon: ShieldPlus, label: "Moisturize + SPF", desc: "Lock in hydration, protect skin." },
  ],
  pm: [
    { icon: Droplets, label: "Cleanse", desc: "Remove the day's buildup." },
    { icon: Sparkles, label: "GLOW Serum", desc: "2–3 drops, press into skin.", highlight: true },
    { icon: ShieldPlus, label: "Moisturize", desc: "Seal in overnight repair." },
  ],
};

export default function RoutineCard() {
  const [time, setTime] = useState<"am" | "pm">("am");
  const steps = routines[time];

  return (
    <div className="mt-6 bg-cream rounded-2xl p-5 reveal">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-[13px] font-semibold tracking-[0.08em] text-ink">
          YOUR GLOW ROUTINE
        </h4>
        <div className="flex bg-white rounded-full p-1 border border-ink/8">
          <button
            onClick={() => setTime("am")}
            className={`flex items-center gap-1.5 h-8 px-3 rounded-full text-[11px] font-semibold transition ${
              time === "am" ? "bg-hero-dark text-white" : "text-ink-secondary"
            }`}
          >
            <Sun size={13} /> AM
          </button>
          <button
            onClick={() => setTime("pm")}
            className={`flex items-center gap-1.5 h-8 px-3 rounded-full text-[11px] font-semibold transition ${
              time === "pm" ? "bg-hero-dark text-white" : "text-ink-secondary"
            }`}
          >
            <Moon size={13} /> PM
          </button>
        </div>
      </div>

      <ol className="space-y-3">
        {steps.map((step, i) => (
          <li
            key={step.label}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 ${
              step.highlight ? "bg-white border border-gold/40" : ""
            }`}
          >
            <span
              className={`h-7 w-7 rounded-full flex items-center justify-center shrink-0 text-[11px] font-bold ${
                step.highlight ? "bg-gold text-white" : "bg-white text-ink-muted border border-ink/10"
              }`}
            >
              {i + 1}
            </span>
            <step.icon
              size={16}
              className={step.highlight ? "text-gold" : "text-ink-muted"}
              strokeWidth={1.75}
            />
            <div className="min-w-0">
              <p className="text-[13px] font-medium text-ink">{step.label}</p>
              <p className="text-[11px] text-ink-secondary truncate">{step.desc}</p>
            </div>
            {step.highlight && (
              <SerumBottle className="h-8 w-auto ml-auto shrink-0 hidden sm:block" />
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}