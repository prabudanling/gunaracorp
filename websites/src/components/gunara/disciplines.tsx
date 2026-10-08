"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Target,
  Wheat,
  Route,
  Sun,
  FlaskConical,
  Cpu,
  PenLine,
  Check,
  ArrowRight,
} from "lucide-react";
import { disciplines } from "./data";
import { SectionHeading } from "./section";
import Link from "next/link";
import { pageToPath } from "@/lib/navigation";
import { cn } from "@/lib/utils";

const iconMap: Record<string, typeof Target> = {
  Target,
  Wheat,
  Route,
  Sun,
  FlaskConical,
  Cpu,
  PenLine,
};

export function Disciplines() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = disciplines[activeIdx];

  return (
    <section
      id="disiplin"
      aria-label="Tujuh Disiplin Polymath"
      className="relative overflow-hidden border-y border-primary/10 bg-noir-soft/60 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <SectionHeading
          i18nKey="sec.disciplines"
          eyebrow="Polymath 7 Disiplin"
          title="Tujuh Medan, Satu Otak"
          description="Kepakaran lintas bidang yang saling terhubung — bukan generalisasi dangkal, melainkan integrasi sistemik dari hulu ke hilir."
        />

        <div className="grid gap-8 lg:grid-cols-[380px_1fr] lg:gap-12">
          {/* Discipline selector */}
          <div
            role="tablist"
            aria-label="Pilih disiplin"
            className="flex flex-row flex-wrap gap-2 lg:flex-col lg:gap-2.5"
          >
            {disciplines.map((d, i) => {
              const Icon = iconMap[d.icon] ?? Target;
              const isActive = i === activeIdx;
              return (
                <button
                  key={d.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveIdx(i)}
                  className={cn(
                    "group relative flex flex-1 items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-300 lg:flex-none",
                    isActive
                      ? "border-primary/45 bg-primary/10 text-foreground"
                      : "border-primary/10 bg-card/40 text-muted-foreground hover:border-primary/25 hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="discipline-glow"
                      className="absolute inset-0 -z-10 rounded-xl bg-primary/10"
                      transition={{ type: "spring", stiffness: 320, damping: 30 }}
                    />
                  )}
                  <span
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-colors",
                      isActive
                        ? "border-primary/50 bg-primary/15 text-primary"
                        : "border-primary/15 text-muted-foreground group-hover:text-primary/80"
                    )}
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="text-sm font-semibold">
                    <span className="mr-2 font-mono text-[10px] text-primary/60">
                      0{i + 1}
                    </span>
                    {d.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active discipline detail */}
          <div className="relative min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-full overflow-hidden rounded-2xl border border-primary/20 bg-card/70 p-6 backdrop-blur-sm md:p-10"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
                />
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary/85">
                  Disiplin 0{activeIdx + 1} dari 07
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold text-foreground md:text-4xl">
                  {active.name}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                  {active.description}
                </p>

                <div className="mt-8">
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-primary/80">
                    Kapabilitas Kunci
                  </p>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {active.capabilities.map((c, i) => (
                      <motion.li
                        key={c}
                        initial={{ opacity: 0, x: -14 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
                        className="flex items-start gap-3 rounded-lg border border-primary/10 bg-background/40 px-4 py-3 text-sm text-foreground/85"
                      >
                        <span className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-primary/15">
                          <Check className="h-3 w-3 text-primary" aria-hidden />
                        </span>
                        {c}
                      </motion.li>
                    ))}
                  </ul>
                  <Link
                    href={pageToPath(`disiplin-${active.slug}`)}
                    className="mt-5 inline-flex items-center gap-2 rounded-lg border border-primary/35 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
                  >
                    Buka Halaman {active.name}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
