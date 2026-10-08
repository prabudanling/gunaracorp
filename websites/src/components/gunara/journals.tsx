"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, ScrollText, ArrowUpRight, FlaskConical } from "lucide-react";
import { journals } from "./data";
import { Reveal, SectionHeading, StaggerGroup, StaggerItem } from "./section";

const statusColor: Record<string, string> = {
  Terbit: "border-emerald-500/40 text-emerald-400",
  "Dalam Review": "border-amber-500/40 text-amber-400",
  Penulisan: "border-primary/40 text-primary",
};

export function Journals() {
  return (
    <section id="jurnal" aria-label="Jurnal dan Riset" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <SectionHeading
          i18nKey="sec.journals"
          eyebrow="Riset — Identitas M. Lutfi Azmi"
          title="Jurnal & Kajian Peradaban"
          description="Jembatan antara wahyu, ilmu, dan teknologi — dipublikasikan di jurnal Q1/Q2 internasional dan dibuka bagi para peneliti muda Indonesia."
        />

        <div className="grid gap-10 lg:grid-cols-[380px_1fr] lg:gap-14">
          {/* Academic profile card */}
          <Reveal>
            <div className="sticky top-24 space-y-5">
              <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-card/70 p-7">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl"
                />
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" aria-hidden />
                  </span>
                  <div>
                    <p className="font-display text-lg font-bold text-foreground">
                      Muhammad Lutfi Azmi
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Profesor Peradaban Digital (kandidat PhD)
                    </p>
                  </div>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                  {[
                    "Fokus riset: epistemologi Islam & teknologi",
                    "Metodologi PhD-grade, peer review ketat",
                    "Mentoring publikasi Q1/Q2 bagi dosen & peneliti",
                    "Kurikulum riset untuk kampus & komunitas",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                      {t}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/kontak"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-primary/35 px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
                >
                  <FlaskConical className="h-4 w-4" aria-hidden />
                  Ajukan Kolaborasi Riset
                </Link>
                <Link
                  href="/jurnal"
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary/10 px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/20"
                >
                  <ScrollText className="h-4 w-4" aria-hidden />
                  Lihat Arsip 12 Jurnal →
                </Link>
              </div>

              <div className="rounded-2xl border border-primary/15 bg-card/50 p-7 text-center">
                <p className="font-display text-5xl font-bold text-royal-gradient">100</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  Target Publikasi Q1/Q2
                </p>
              </div>
            </div>
          </Reveal>

          {/* Journal list */}
          <StaggerGroup className="space-y-5">
            {journals.map((j) => (
              <StaggerItem key={j.title}>
                <motion.article
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 26 }}
                  className="group relative overflow-hidden rounded-2xl border border-primary/15 bg-card/60 p-6 transition-colors duration-300 hover:border-primary/35 md:p-7"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <Badge
                        variant="outline"
                        className="border-primary/40 font-mono text-[10px] font-bold text-primary"
                      >
                        {j.quartile}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{j.venue}</span>
                    </div>
                    <span
                      className={`rounded-full border px-3 py-0.5 text-[10px] font-semibold uppercase tracking-widest ${statusColor[j.status] ?? "border-primary/40 text-primary"}`}
                    >
                      {j.status}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary md:text-xl">
                    {j.title}
                  </h3>

                  <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-primary/10 pt-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <ScrollText className="h-3.5 w-3.5 text-primary/70" aria-hidden />
                      {j.field}
                    </span>
                    <span>{j.year}</span>
                    <span className="ml-auto inline-flex items-center gap-1 text-primary/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Detail <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                    </span>
                  </div>
                </motion.article>
              </StaggerItem>
            ))}

            <StaggerItem>
              <div className="rounded-2xl border border-dashed border-primary/25 bg-card/30 p-6 text-center md:p-7">
                <p className="text-sm text-muted-foreground">
                  Dan <span className="font-semibold text-primary">96 paper berikutnya</span>{" "}
                  dalam roadmap 100 jurnal — bergabunglah sebagai co-author, reviewer,
                  atau peneliti mitra.
                </p>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
