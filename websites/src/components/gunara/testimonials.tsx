"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "./data";
import { SectionHeading } from "./section";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (paused) return;
    const t = setInterval(
      () => setIdx((p) => (p + 1) % testimonials.length),
      5500
    );
    return () => clearInterval(t);
  }, [paused]);

  const current = testimonials[idx];

  return (
    <section
      id="testimoni"
      aria-label="Testimoni"
      className="relative py-24 md:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
        <SectionHeading
          i18nKey="sec.testimonials"
          eyebrow="Kepercayaan"
          title="Mereka yang Sudah Merasakan"
        />

        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-card/60 p-8 backdrop-blur-sm md:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl"
          />
          <Quote
            className="absolute right-8 top-8 h-12 w-12 text-primary/15"
            aria-hidden
          />

          <div className="min-h-[190px] md:min-h-[160px]">
            <AnimatePresence mode="wait">
              <motion.figure
                key={idx}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: reduce ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <blockquote className="font-display text-lg leading-relaxed text-foreground/90 md:text-2xl md:leading-relaxed">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/30 bg-primary/10 font-display text-sm font-bold text-primary">
                    {current.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-foreground">
                      {current.name}
                    </span>
                    <span className="block text-xs text-muted-foreground">
                      {current.role}
                    </span>
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-between border-t border-primary/10 pt-6">
            <div className="flex gap-2" role="tablist" aria-label="Pilih testimoni">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === idx}
                  aria-label={`Testimoni ${i + 1}`}
                  onClick={() => setIdx(i)}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-400",
                    i === idx ? "w-8 bg-primary" : "w-3 bg-primary/25 hover:bg-primary/50"
                  )}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() =>
                  setIdx((p) => (p - 1 + testimonials.length) % testimonials.length)
                }
                className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/25 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                aria-label="Testimoni sebelumnya"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setIdx((p) => (p + 1) % testimonials.length)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/25 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                aria-label="Testimoni berikutnya"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Tautan ke arsip testimoni */}
        <div className="mt-6 text-center">
          <Link
            href="/testimoni"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-5 py-2 text-xs font-bold text-primary transition-colors hover:bg-primary/20"
          >
            Lihat Semua Testimoni →
          </Link>
        </div>
      </div>
    </section>
  );
}
