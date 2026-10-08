"use client";

import Image from "next/image";
import { timeline } from "./data";
import { PageShell } from "./page-shell";
import { Reveal } from "./section";

// ------------------------------------------------------------
// Rekam Jejak — garis waktu 2009–2026 dengan foto asli
// perjalanan: dari meja kayu awal karier hingga ekosistem
// lima perusahaan. Autentik = sinyal E-E-A-T bagi mesin cari.
// ------------------------------------------------------------
export function RekamJejakPage() {
  return (
    <PageShell
      page="rekam-jejak"
      lead="Tujuh belas tahun lebih dalam satu garis waktu: dari satu meja dan satu keyakinan pada 2009, menjadi lima perusahaan dan satu ekosistem peradaban digital."
      backTo={{ label: "Beranda", page: "beranda" }}
    >
      <div className="relative mx-auto max-w-4xl">
        {/* Garis vertikal */}
        <div
          aria-hidden
          className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-primary/25 to-transparent md:left-1/2"
        />

        <div className="space-y-12 md:space-y-16">
          {timeline.map((t, idx) => {
            const left = idx % 2 === 0;
            return (
              <Reveal key={t.year} delay={0.05 * idx}>
                <div
                  className={`relative flex gap-6 md:items-center ${
                    left ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Titik */}
                  <span
                    aria-hidden
                    className="absolute left-[13px] top-2 z-10 h-3.5 w-3.5 rounded-full border-2 border-primary bg-background shadow-[0_0_12px_rgba(139,92,246,0.6)] md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
                  />

                  {/* Foto (jika ada) */}
                  <div
                    className={`ml-12 hidden w-[38%] shrink-0 md:ml-0 md:block ${
                      left ? "" : "md:pl-10"
                    }`}
                  >
                    {t.photo ? (
                      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-primary/20">
                        <Image
                          src={t.photo}
                          alt={`Gugun Gunara — ${t.title} (${t.year})`}
                          fill
                          sizes="(max-width: 768px) 0px, 380px"
                          className="object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,8,22,0.55)] to-transparent" />
                      </div>
                    ) : (
                      <div className="flex aspect-[4/3] items-center justify-center rounded-3xl border border-dashed border-primary/25 bg-primary/[0.04] p-6 text-center">
                        <p className="font-display text-lg font-semibold text-primary/70">
                          {t.title}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Kartu */}
                  <div
                    className={`ml-12 flex-1 rounded-3xl border border-primary/15 bg-primary/[0.04] p-6 transition-colors hover:border-primary/35 md:ml-0 ${
                      left ? "md:pl-10" : "md:pr-10"
                    }`}
                  >
                    <p className="font-display text-2xl font-bold text-primary md:text-3xl">
                      {t.year}
                    </p>
                    <h3 className="mt-2 font-display text-lg font-bold text-foreground md:text-xl">
                      {t.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {t.desc}
                    </p>
                    {/* Foto kecil pada mobile */}
                    {t.photo && (
                      <div className="relative mt-4 aspect-[16/9] overflow-hidden rounded-2xl border border-primary/15 md:hidden">
                        <Image
                          src={t.photo}
                          alt={`Gugun Gunara — ${t.title} (${t.year})`}
                          fill
                          sizes="100vw"
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </PageShell>
  );
}
