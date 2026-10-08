"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Quote, MoonStar, HeartHandshake } from "lucide-react";
import { poems, quotes } from "./data";
import { SectionHeading } from "./section";
import { cn } from "@/lib/utils";

export function Poetry() {
  const [poemIdx, setPoemIdx] = useState(0);
  const [quoteIdx, setQuoteIdx] = useState(0);
  const reduce = useReducedMotion();

  // Auto-rotate quotes
  useEffect(() => {
    const t = setInterval(() => setQuoteIdx((p) => (p + 1) % quotes.length), 6000);
    return () => clearInterval(t);
  }, []);

  const poem = poems[poemIdx];

  return (
    <section
      id="puisi"
      aria-label="Puisi dan Refleksi Santri Angon"
      className="relative overflow-hidden grain"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/gunara/santri-bg.png"
          alt="Siluet santri berdoa di tebing under langit berbintang keemasan"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,9,7,0.8)_55%,rgba(10,9,7,0.97)_100%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 md:px-8 md:py-32">
        <SectionHeading
          i18nKey="sec.poetry"
          eyebrow="Refleksi — Pena Santri Angon"
          title="Ruang Pemulihan Jiwa"
          description="Untuk mereka yang terpuruk: puisi, refleksi, dan pendampingan — karena tidak ada jiwa yang seharusnya pulih sendirian."
        />

        <div className="grid items-start gap-10 lg:grid-cols-[1fr_420px] lg:gap-16">
          {/* Poem display */}
          <div className="relative rounded-2xl border border-primary/20 bg-background/55 p-6 backdrop-blur-md md:p-10">
            <Quote
              className="absolute -top-5 left-6 h-10 w-10 rounded-xl border border-primary/25 bg-background p-2 text-primary"
              aria-hidden
            />
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={poem.title}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, y: -14, transition: { duration: 0.3 } }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.16 } } }}
                className="min-h-[220px]"
              >
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 14 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
                  }}
                  className="font-display text-2xl font-bold text-royal-gradient md:text-3xl"
                >
                  {poem.title}
                </motion.p>
                <div className="mt-6 space-y-2.5">
                  {poem.verses.map((v) => (
                    <motion.p
                      key={v}
                      variants={{
                        hidden: { opacity: 0, y: 16 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
                      }}
                      className={cn(
                        "text-base leading-relaxed text-foreground/90 md:text-lg",
                        "font-display italic"
                      )}
                    >
                      {v}
                    </motion.p>
                  ))}
                </div>
                <motion.footer
                  variants={{
                    hidden: { opacity: 0 },
                    show: { opacity: 1, transition: { duration: 0.6, delay: 0.2 } },
                  }}
                  className="mt-8 border-t border-primary/15 pt-5 text-sm italic text-muted-foreground"
                >
                  {poem.note}
                </motion.footer>
              </motion.blockquote>
            </AnimatePresence>

            {/* Poem switcher */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {poems.map((p, i) => (
                <button
                  key={p.title}
                  type="button"
                  onClick={() => setPoemIdx(i)}
                  className={cn(
                    "rounded-full border px-4 py-1.5 text-xs font-semibold transition-all duration-300",
                    i === poemIdx
                      ? "border-primary/60 bg-primary/15 text-primary"
                      : "border-primary/20 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  )}
                  aria-pressed={i === poemIdx}
                >
                  {p.title}
                </button>
              ))}
              <Link
                href="/puisi"
                className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary transition-colors hover:bg-primary/20"
              >
                Arsip Lengkap (8 Puisi) →
              </Link>
            </div>
          </div>

          {/* Mentoring panel + quotes */}
          <div className="space-y-5">
            <div className="rounded-2xl border border-primary/20 bg-background/55 p-7 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
                  <HeartHandshake className="h-5 w-5 text-primary" aria-hidden />
                </span>
                <div>
                  <p className="font-display text-lg font-bold text-foreground">
                    Mentoring Angon
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Pendampingan pemulihan 90 hari
                  </p>
                </div>
              </div>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                {[
                  "Pendampingan privat & kerahasiaan terjaga",
                  "Refleksi harian via tulisan & rekaman",
                  "Konseling spiritual berbasis iman",
                  "Komunitas pendukung yang hangat",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                    {t}
                  </li>
                ))}
              </ul>
              <Link
                href="/kontak"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_30px_-8px_var(--royal)]"
              >
                <MoonStar className="h-4 w-4" aria-hidden />
                Mintalah Didampingi
              </Link>
              <Link
                href="/mentoring"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-primary/35 px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
              >
                <HeartHandshake className="h-4 w-4" aria-hidden />
                Program Mentoring 90 Hari →
              </Link>
              <p className="mt-3 text-center text-[11px] text-muted-foreground">
                Gratis untuk mereka yang benar-benar tidak mampu.
              </p>
            </div>

            {/* Rotating quotes */}
            <div className="relative min-h-[120px] overflow-hidden rounded-2xl border border-primary/15 bg-background/45 p-6 backdrop-blur-md">
              <AnimatePresence mode="wait">
                <motion.p
                  key={quoteIdx}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: reduce ? 0 : 0.55 }}
                  className="text-sm italic leading-relaxed text-foreground/85 md:text-base"
                >
                  &ldquo;{quotes[quoteIdx]}&rdquo;
                  <span className="mt-3 block text-xs not-italic text-primary/80">
                    — Santri Angon
                  </span>
                </motion.p>
              </AnimatePresence>
              <div className="mt-4 flex gap-1.5" aria-hidden>
                {quotes.map((_, i) => (
                  <span
                    key={i}
                    className={cn(
                      "h-1 rounded-full transition-all duration-500",
                      i === quoteIdx ? "w-6 bg-primary" : "w-2 bg-primary/25"
                    )}
                  />
                ))}
              </div>
              <Link
                href="/kutipan"
                className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary transition-colors hover:bg-primary/20"
              >
                Kutipan Peradaban →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
