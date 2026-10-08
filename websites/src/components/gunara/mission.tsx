"use client";

import { Reveal, SectionHeading, StaggerGroup, StaggerItem } from "./section";
import { CountUp } from "./count-up";
import { missions } from "./data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// ------------------------------------------------------------
// CountUp kini di-import dari ./count-up (dipakai lintas halaman)
// ------------------------------------------------------------

export function Mission() {
  return (
    <section id="misi" aria-label="Misi Peradaban" className="relative overflow-hidden py-24 md:py-32">
      {/* Radial gold glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[560px] w-[860px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[140px]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <SectionHeading
          i18nKey="sec.mission"
          eyebrow="Misi Peradaban"
          title="Satu Visi, Tiga Warisan"
          description="Angka-angka ini bukan target kosong — mereka adalah janji yang ditulis ulang setiap hari melalui sistem, karya, dan pendampingan."
        />

        <StaggerGroup className="grid gap-6 md:grid-cols-3 md:gap-8">
          {missions.map((m, i) => (
            <StaggerItem key={m.label}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-primary/15 bg-card/60 p-6 backdrop-blur-sm transition-all duration-500 hover:border-primary/40 hover:royal-glow md:p-8">
                {/* watermark number */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-3 -top-6 font-display text-[120px] font-bold leading-none text-primary/5 transition-colors duration-500 group-hover:text-primary/10"
                >
                  0{i + 1}
                </span>

                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/85">
                  {m.label}
                </p>

                <p className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
                  <span className="text-royal-gradient">
                    <CountUp target={m.target} duration={2.2 + i * 0.4} />
                  </span>
                </p>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {m.description}
                </p>

                {/* progress hairline */}
                <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-primary/10">
                  <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-royal-deep via-primary to-royal-soft transition-all duration-700 group-hover:w-2/3" />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.2} className="mt-10 text-center">
          <p className="mx-auto max-w-3xl text-sm italic leading-relaxed text-muted-foreground md:text-base">
            &ldquo;Kami tidak sedang mengejar angka — kami sedang membangun sistem yang
            membuat angka-angka itu <span className="text-primary">tak terhindarkan</span>.&rdquo;
          </p>
          <Link
            href="/misi"
            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-primary/35 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
          >
            Lihat Peta Jalan Lengkap Misi
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
