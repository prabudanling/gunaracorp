"use client";

import { BadgeCheck, Award, ShieldCheck, Clock } from "lucide-react";
import Link from "next/link";
import { certifications, accreditationPoints } from "./data";
import { PageShell } from "./page-shell";
import { Reveal } from "./section";

// ------------------------------------------------------------
// Pusat Sertifikasi & Akreditasi — program sertifikasi
// kompetensi dengan standar penilaian terbaik.
// ------------------------------------------------------------
export function SertifikasiPage() {
  return (
    <PageShell
      page="sertifikasi"
      lead="Pusat sertifikasi kompetensi profesional — kurikulum dari lapangan 17+ tahun, penilaian dari karya nyata, dan komitmen pada standar akreditasi terbaik."
      backTo={{ label: "Beranda", page: "beranda" }}
    >
      {/* Keunggulan akreditasi */}
      <div className="mb-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {accreditationPoints.map((p, idx) => (
          <Reveal key={p.title} delay={0.06 * idx}>
            <div className="h-full rounded-3xl border border-primary/15 bg-primary/[0.04] p-6 transition-colors hover:border-primary/35">
              <Award className="h-6 w-6 text-primary" aria-hidden />
              <h3 className="mt-4 font-display text-base font-bold text-foreground">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Program sertifikasi */}
      <Reveal>
        <h2 className="font-display text-2xl font-bold md:text-3xl">
          <span className="text-royal-gradient">Program Sertifikasi</span>
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Setiap program dinilai dari karya yang Anda buat sendiri — dokumen,
          presentasi, dan simulasi penugasan. Sertifikat mencantumkan kompetensi
          spesifik yang terverifikasi.
        </p>
      </Reveal>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {certifications.map((c, idx) => (
          <Reveal key={c.slug} delay={0.07 * idx}>
            <article className="flex h-full flex-col rounded-3xl border border-primary/15 bg-primary/[0.04] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 md:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                  <BadgeCheck className="h-3.5 w-3.5" aria-hidden />
                  {c.level}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/15 px-3 py-1 text-[11px] font-semibold text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" aria-hidden />
                  {c.duration}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-foreground">
                {c.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {c.description}
              </p>
              <div className="mt-5">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary/80">
                  Capaian
                </p>
                <ul className="mt-3 space-y-2">
                  {c.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-2.5 text-sm text-foreground/85">
                      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-auto pt-5 text-xs text-muted-foreground">
                <span className="font-semibold text-foreground/80">Prasyarat: </span>
                {c.requirements}
              </p>
              <Link
                href={`/sertifikasi/${c.slug}`}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
              >
                Detail Program →
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </PageShell>
  );
}
