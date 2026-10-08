"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, MoonStar, Library, ArrowRight } from "lucide-react";
import { PageShell } from "./page-shell";
import { poems, quotes } from "./data";
import { usePageStore } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function PuisiPage() {
  const [active, setActive] = useState(0);
  const [quoteIdx, setQuoteIdx] = useState(0);
  const navigate = usePageStore((s) => s.navigate);
  const poem = poems[active];

  useEffect(() => {
    const t = setInterval(() => setQuoteIdx((p) => (p + 1) % quotes.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <PageShell
      page="puisi"
      lead="Untuk mereka yang terpuruk: puisi, refleksi, dan pendampingan — karena tidak ada jiwa yang seharusnya pulih sendirian. Pilih satu larik, biarkan ia bekerja."
      cta={false}
    >
      <div className="grid items-start gap-10 lg:grid-cols-[1fr_400px]">
        {/* Pembaca puisi */}
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-background/60 p-6 backdrop-blur-md md:p-10">
          <Quote className="absolute -top-4 right-8 h-10 w-10 text-primary/15" aria-hidden />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={poem.slug}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: -14, transition: { duration: 0.3 } }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.16 } } }}
              className="min-h-[240px]"
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
              <div className="mt-6 space-y-3">
                {poem.verses.map((v) => (
                  <motion.p
                    key={v}
                    variants={{
                      hidden: { opacity: 0, y: 16 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
                    }}
                    className="font-display text-base italic leading-relaxed text-foreground/90 md:text-lg"
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
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  show: { opacity: 1, transition: { duration: 0.5, delay: 0.3 } },
                }}
                className="mt-5"
              >
                <Link
                  href={`/puisi/${poem.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 px-4 py-1.5 text-xs font-semibold text-primary transition-colors hover:border-primary/60"
                >
                  Buka Halaman Puisi Ini
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              </motion.div>
            </motion.blockquote>
          </AnimatePresence>

          {/* Pemilih puisi */}
          <div className="mt-8 flex flex-wrap gap-2">
            {poems.map((p, i) => (
              <button
                key={p.slug}
                type="button"
                onClick={() => setActive(i)}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-xs font-semibold transition-all duration-300",
                  i === active
                    ? "border-primary/60 bg-primary/15 text-primary"
                    : "border-primary/20 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                )}
                aria-pressed={i === active}
              >
                {p.title}
              </button>
            ))}
          </div>
        </div>

        {/* Panel kanan */}
        <div className="space-y-5">
          {/* Kutipan berputar */}
          <div className="relative min-h-[130px] overflow-hidden rounded-2xl border border-primary/15 bg-card/60 p-6">
            <AnimatePresence mode="wait">
              <motion.p
                key={quoteIdx}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.55 }}
                className="text-sm italic leading-relaxed text-foreground/85"
              >
                &ldquo;{quotes[quoteIdx]}&rdquo;
                <span className="mt-3 block text-xs not-italic text-primary/80">— Santri Angon</span>
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
              className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary/80 transition-colors hover:text-primary"
            >
              Arsip Kutipan →
            </Link>
          </div>

          {/* Antologi buku */}
          <button
            type="button"
            onClick={() => navigate("buku-angon-puisi")}
            className="group w-full overflow-hidden rounded-2xl border border-primary/20 bg-card/60 text-left transition-colors hover:border-primary/45"
          >
            <div className="relative h-40">
              <Image
                src="/gunara/santri-bg.png"
                alt="Latar langit berbintang keemasan"
                fill
                sizes="400px"
                className="object-cover opacity-50 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
              <Library className="absolute bottom-4 left-6 h-5 w-5 text-primary" aria-hidden />
            </div>
            <div className="p-6 pt-2">
              <p className="font-display text-lg font-bold text-foreground group-hover:text-primary">
                Antologi &ldquo;Angon&rdquo;
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                60+ puisi dan refleksi terkumpul dalam satu buku — lihat halaman bukunya.
              </p>
            </div>
          </button>

          {/* Mentoring */}
          <div className="rounded-2xl border border-primary/20 bg-primary/[0.06] p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
                <MoonStar className="h-5 w-5 text-primary" aria-hidden />
              </span>
              <p className="font-display text-base font-bold text-foreground">
                Butuh Didampingi?
              </p>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              Mentoring Angon 90 hari — pendampingan pemulihan yang rapi, hangat, dan
              rahasia. Gratis bagi yang benar-benar tidak mampu.
            </p>
            <button
              type="button"
              onClick={() => navigate("mentoring")}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_-8px_var(--royal)]"
            >
              Lihat Program Mentoring
            </button>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
