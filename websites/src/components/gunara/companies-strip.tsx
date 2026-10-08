"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Building2 } from "lucide-react";
import { companies } from "./data";
import { Reveal } from "./section";

const OWNER_PHOTO = "/gunara/foto/gugun-gunara-owner-lima-perusahaan.jpeg";

// ------------------------------------------------------------
// CompaniesStrip — bagian beranda "Grup Perusahaan" gaya firma
// global: satu foto pemilik + matriks lima perusahaan, setiap
// kartu menautkan ke halaman perusahaan yang nyata.
// ------------------------------------------------------------
export function CompaniesStrip() {
  return (
    <section id="perusahaan" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <Reveal>
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-gradient-to-r from-transparent to-primary/60" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/90">
                  Grup Perusahaan
                </span>
              </div>
              <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight md:text-5xl">
                <span className="text-royal-gradient">Lima Perusahaan, Satu Standar</span>
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                Ekosistem bisnis yang dibangun dari praktik konsultansi sejak 2009 —
                perizinan, konsultansi, perhajian, digital, dan kemitraan. Setiap
                perusahaan berdiri di atas metodologi yang sama: sistem yang rapi,
                eksekusi yang disiplin.
              </p>
            </div>
            <Link
              href="/perusahaan"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-primary/30 px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:border-primary/60 hover:bg-primary/10"
            >
              Lihat Semua Perusahaan
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_2fr]">
          {/* Foto pemilik */}
          <Reveal delay={0.1}>
            <Link
              href="/perusahaan"
              className="group relative block h-full min-h-[320px] overflow-hidden rounded-3xl border border-primary/20"
            >
              <Image
                src={OWNER_PHOTO}
                alt="Gugun Gunara — pendiri lima perusahaan grup Gunara"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,8,22,0.95)] via-[rgba(13,8,22,0.35)] to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/90">
                  Pendiri & Pemilik
                </p>
                <p className="mt-2 font-display text-2xl font-bold text-white">Gugun Gunara</p>
                <p className="mt-1 text-sm text-white/70">
                  Konsultan bisnis senior 17+ tahun — pernah berkolaborasi dalam
                  kemitraan bersama konsultan McKinsey.
                </p>
              </div>
            </Link>
          </Reveal>

          {/* Matriks 5 perusahaan */}
          <div className="grid gap-4 sm:grid-cols-2">
            {companies.map((c, idx) => (
              <Reveal key={c.slug} delay={0.08 * idx}>
                <Link
                  href={`/perusahaan/${c.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-primary/15 bg-primary/[0.04] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/[0.08] hover:shadow-[0_16px_40px_-16px_rgba(139,92,246,0.35)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
                      <Building2 className="h-5 w-5 text-primary" aria-hidden />
                    </span>
                    <ExternalLink
                      className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                      aria-hidden
                    />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                    {c.name}
                  </h3>
                  <p className="text-xs font-medium text-primary/80">{c.domain}</p>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {c.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary/90">
                    Jelajahi profil
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </Link>
              </Reveal>
            ))}

            {/* Kartu CTA sertifikasi */}
            <Reveal delay={0.4}>
              <Link
                href="/sertifikasi"
                className="group flex h-full flex-col justify-between rounded-2xl border border-dashed border-primary/30 bg-gradient-to-br from-primary/[0.08] to-transparent p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
              >
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary">
                    Pusat Sertifikasi & Akreditasi
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Program sertifikasi kompetensi dengan standar penilaian
                    terbaik — dinilai dari karya nyata.
                  </p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary/90">
                  Lihat program
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
