"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, Building2 } from "lucide-react";
import { companies } from "./data";
import { PageShell } from "./page-shell";
import { Reveal } from "./section";

const OWNER_PHOTO = "/gunara/foto/gugun-gunara-owner-lima-perusahaan.jpeg";

// ------------------------------------------------------------
// Halaman Grup Perusahaan — pusat dari 5 perusahaan milik
// Gugun Gunara. Setiap kartu menautkan ke halaman detail nyata.
// ------------------------------------------------------------
export function PerusahaanPage() {
  return (
    <PageShell
      page="perusahaan"
      lead="Lima perusahaan, satu standar: sistem yang rapi, eksekusi yang disiplin, dan dokumentasi yang hidup — dibangun dari praktik konsultansi sejak 2009."
      backTo={{ label: "Beranda", page: "beranda" }}
    >
      {/* Profil pemilik */}
      <Reveal>
        <div className="mb-14 grid gap-8 overflow-hidden rounded-3xl border border-primary/20 bg-primary/[0.04] lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative min-h-[340px]">
            <Image
              src={OWNER_PHOTO}
              alt="Gugun Gunara — pendiri dan pemilik lima perusahaan grup Gunara"
              fill
              sizes="(max-width: 1024px) 100vw, 460px"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,8,22,0.9)] via-transparent to-transparent lg:bg-gradient-to-r" />
          </div>
          <div className="flex flex-col justify-center p-6 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/90">
              Pendiri & Pemilik
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
              <span className="text-royal-gradient">Gugun Gunara</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Konsultan bisnis senior yang memulai praktik pada 2009 — kini 17+ tahun
              mendampingi korporasi, instansi, dan pengusaha. Berpengalaman berkolaborasi
              dalam jejaring konsultan internasional, termasuk kemitraan kerja bersama
              konsultan McKinsey. Kelima perusahaan di bawah ini adalah hilir dari satu
              metodologi yang sama: masalah didekati sebagai sistem, solusi ditulis
              sebagai dokumen yang hidup.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { v: "17+", l: "Tahun Praktik" },
                { v: "5", l: "Perusahaan" },
                { v: "39", l: "Dokumen Master" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-2xl border border-primary/15 bg-background/60 p-4 text-center"
                >
                  <p className="font-display text-2xl font-bold text-primary">{s.v}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* Matriks perusahaan */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {companies.map((c, idx) => (
          <Reveal key={c.slug} delay={0.06 * idx}>
            <Link
              href={`/perusahaan/${c.slug}`}
              className="group flex h-full flex-col rounded-3xl border border-primary/15 bg-primary/[0.04] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:bg-primary/[0.07] hover:shadow-[0_20px_50px_-20px_rgba(139,92,246,0.4)]"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10">
                  <Building2 className="h-6 w-6 text-primary" aria-hidden />
                </span>
                <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold transition-colors group-hover:text-primary">
                {c.name}
              </h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary/80">
                {c.domain}
              </p>
              <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-muted-foreground">
                {c.description}
              </p>
              <div className="mt-auto pt-5">
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Profil lengkap
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}

        {/* Kartu sertifikasi */}
        <Reveal delay={0.3}>
          <Link
            href="/sertifikasi"
            className="group flex h-full flex-col justify-between rounded-3xl border border-dashed border-primary/35 bg-gradient-to-br from-primary/[0.1] to-transparent p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/60"
          >
            <div>
              <h3 className="font-display text-xl font-bold transition-colors group-hover:text-primary">
                Pusat Sertifikasi & Akreditasi
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Program sertifikasi kompetensi profesional dengan standar penilaian
                terbaik — dinilai dari karya nyata, bukan hafalan.
              </p>
            </div>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
              Lihat program sertifikasi
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </span>
          </Link>
        </Reveal>
      </div>
    </PageShell>
  );
}
