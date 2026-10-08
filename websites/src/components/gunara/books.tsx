"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import Link from "next/link";
import { BookCard } from "./book-card";
import { Reveal, SectionHeading, StaggerGroup } from "./section";

export function Books() {
  return (
    <section
      id="karya"
      aria-label="Katalog Buku"
      className="relative overflow-hidden border-y border-primary/10 bg-noir-soft/60 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <SectionHeading
          i18nKey="sec.books"
          eyebrow="Karya — Pena Prabu Danling"
          title="Pustaka Peradaban"
          description="Setiap buku adalah senjata strategis. Klik salah satu sampul untuk membuka halaman lengkapnya — sinopsis, isi bab, dan cara memperolehnya."
        />

        <StaggerGroup className="grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
          <BookCard />
        </StaggerGroup>

        {/* 500 books progress */}
        <Reveal delay={0.15} className="mx-auto mt-14 max-w-3xl">
          <div className="rounded-2xl border border-primary/15 bg-card/50 p-6 md:p-8">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <p className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
                  <BookOpen className="h-5 w-5 text-primary" aria-hidden />
                  Progres Pustaka 500 Buku
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Setiap judul memuliakan pembacanya — bukan sekadar terbit.
                </p>
              </div>
              <Link
                href="/karya"
                className="inline-flex items-center gap-2 rounded-lg border border-primary/35 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
              >
                Lihat Seluruh Pustaka (12 Buku) →
              </Link>
            </div>
            <div className="mt-5">
              <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
                <span>Roadmap Penerbitan</span>
                <span className="font-semibold text-primary">12 / 500 judul berjalan</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-primary/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "6%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                  className="h-full rounded-full bg-gradient-to-r from-royal-deep via-primary to-royal-soft"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
