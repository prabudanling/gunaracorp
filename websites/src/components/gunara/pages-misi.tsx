"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PageShell } from "./page-shell";
import { missions, missionPhases } from "./data";
import { CountUp } from "./count-up";
import { StaggerGroup, StaggerItem } from "./section";

export function MisiPage() {
  return (
    <PageShell
      page="misi"
      lead="Angka-angka ini bukan target kosong — mereka janji yang ditulis ulang setiap hari melalui sistem, karya, dan pendampingan. Inilah peta jalan lengkapnya."
    >
      {/* 3 misi besar */}
      <StaggerGroup className="grid gap-6 md:grid-cols-3">
        {missions.map((m, i) => (
          <StaggerItem key={m.label}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-primary/15 bg-card/60 p-7 transition-all duration-500 hover:border-primary/40 hover:royal-glow">
              <span
                aria-hidden
                className="pointer-events-none absolute -right-3 -top-6 font-display text-[110px] font-bold leading-none text-primary/5"
              >
                0{i + 1}
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/85">
                {m.label}
              </p>
              <p className="mt-4 font-display text-4xl font-bold tracking-tight">
                <span className="text-royal-gradient">
                  <CountUp target={m.target} duration={2 + i * 0.4} />
                </span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {m.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>

      {/* Fase roadmap */}
      <div className="mt-20">
        <h2 className="mb-4 text-center font-display text-2xl font-bold md:text-3xl">
          <span className="text-royal-gradient">Peta Jalan Menuju Warisan</span>
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-sm text-muted-foreground">
          Empat fase, satu arah: membangun mesin, menyebar pengaruh, melintasi batas,
          lalu menitipkan sistem kepada penerus.
        </p>

        <StaggerGroup className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {missionPhases.map((p, i) => (
            <StaggerItem key={p.phase} className="h-full">
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 280, damping: 24 }}
                className="relative h-full overflow-hidden rounded-2xl border border-primary/15 bg-card/60 p-6"
              >
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-royal-deep via-primary to-royal-soft opacity-60"
                />
                <div className="flex items-baseline justify-between">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-primary/80">
                    {p.phase}
                  </p>
                  <p className="font-mono text-[10px] text-muted-foreground">{p.period}</p>
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-foreground">
                  {p.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5 text-xs leading-relaxed text-muted-foreground">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/70" />
                      {it}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/misi/${p.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  Buka Halaman Fase →
                </Link>
                {i < missionPhases.length - 1 && (
                  <div
                    aria-hidden
                    className="absolute -right-3 top-1/2 hidden h-px w-6 bg-primary/30 xl:block"
                  />
                )}
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>

      {/* Kutipan penutup */}
      <motion.blockquote
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto mt-16 max-w-3xl rounded-2xl border border-primary/20 bg-primary/[0.06] p-8 text-center md:p-10"
      >
        <p className="font-display text-lg italic leading-relaxed text-foreground/90 md:text-xl">
          &ldquo;Kami tidak sedang mengejar angka — kami sedang membangun sistem yang
          membuat angka itu <span className="text-primary">tak terhindarkan</span>.&rdquo;
        </p>
        <footer className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary/80">
          — Prinsip Misi Gunara
        </footer>
      </motion.blockquote>
    </PageShell>
  );
}
