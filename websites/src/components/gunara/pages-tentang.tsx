"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PageShell } from "./page-shell";
import { timeline, identities } from "./data";
import { usePageStore } from "@/lib/navigation";
import { StaggerGroup, StaggerItem } from "./section";

export function TentangPage() {
  const navigate = usePageStore((s) => s.navigate);

  return (
    <PageShell
      page="tentang"
      lead="Empat identitas, satu kesetiaan: memuliakan hidup, reputasi, dan warisan peradaban. Inilah kisah di balik ekosistem Gunara."
    >
      {/* Pemimpin */}
      <div className="grid items-center gap-12 lg:grid-cols-[420px_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div
            aria-hidden
            className="absolute -inset-4 -z-10 rounded-[28px] bg-gradient-to-b from-primary/20 via-transparent to-transparent blur-2xl"
          />
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-primary/25">
            <Image
              src="/gunara/portrait.png"
              alt="Siluet arsitek peradaban dengan sorot cahaya keemasan"
              fill
              sizes="(max-width: 1024px) 90vw, 420px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
                Pendiri & Arsitek
              </p>
              <p className="mt-1 font-display text-2xl font-bold text-foreground">Gugun Gunara</p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                M. Lutfi Azmi • Prabu Danling • Santri Angon
              </p>
            </div>
          </div>
        </motion.div>

        <div className="space-y-5">
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            Gunara lahir dari satu ketidaknyamanan yang jujur: terlalu banyak gagasan
            besar yang mati di ruang rapat, terlalu banyak mimpi baik yang berhenti
            menjadi wacana. Kami memutuskan untuk menjadi pihak yang menutup jarak itu —
            dari gagasan ke sistem, dari sistem ke karya, dari karya ke pemulihan jiwa.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            Ekosistem ini dijalankan oleh satu orang dengan empat medan:{" "}
            <strong className="text-foreground">Gugun Gunara</strong> membangun sistem
            duniawi-negara; <strong className="text-foreground">M. Lutfi Azmi</strong>{" "}
            menghubungkan ilmu dengan wahyu;{" "}
            <strong className="text-foreground">Prabu Danling</strong> mengeksekusi lewat
            pena strategi; dan <strong className="text-foreground">Santri Angon</strong>{" "}
            menggembala jiwa-jiwa yang butuh didampingi.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            Standar kami sederhana: setiap dokumen setara kelas dunia, setiap buku
            memuliakan pembacanya, setiap jurnal jujur secara metodologis, dan setiap
            jiwa yang kami dampingi diperlakukan sebagai amanah — bukan proyek.
          </p>

          <StaggerGroup className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { v: "1 Miliar", l: "Jiwa dituju" },
              { v: "500", l: "Buku direncanakan" },
              { v: "100", l: "Jurnal diroadmap" },
            ].map((s) => (
              <StaggerItem key={s.l}>
                <div className="rounded-2xl border border-primary/15 bg-card/60 p-5 text-center">
                  <p className="font-display text-2xl font-bold text-royal-gradient">{s.v}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {s.l}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>

      {/* Timeline */}
      <div className="mt-20">
        <h2 className="mb-10 text-center font-display text-2xl font-bold md:text-3xl">
          <span className="text-royal-gradient">Perjalanan Kami</span>
        </h2>
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 h-full w-px bg-primary/20 md:left-1/2" aria-hidden />
          <StaggerGroup className="space-y-10">
            {timeline.map((t, i) => (
              <StaggerItem key={t.year}>
                <div
                  className={`relative flex flex-col gap-4 pl-12 md:w-1/2 md:pl-0 ${
                    i % 2 === 0
                      ? "md:pr-12 md:text-right"
                      : "md:ml-auto md:pl-12"
                  }`}
                >
                  <span
                    className={`absolute top-1 flex h-8 w-8 items-center justify-center rounded-full border border-primary/40 bg-background font-mono text-[9px] font-bold text-primary left-0 md:left-auto ${
                      i % 2 === 0 ? "md:-right-4" : "md:-left-4"
                    }`}
                  >
                    {t.year.slice(-2)}
                  </span>
                  <div className="rounded-2xl border border-primary/15 bg-card/50 p-5 transition-colors hover:border-primary/35">
                    <p className="font-mono text-[10px] font-bold tracking-[0.25em] text-primary/80">
                      {t.year}
                    </p>
                    <p className="mt-1.5 font-display text-base font-bold text-foreground">
                      {t.title}
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                      {t.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>

      {/* 4 identitas shortcut */}
      <div className="mt-20">
        <h2 className="mb-8 text-center font-display text-2xl font-bold md:text-3xl">
          <span className="text-royal-gradient">Empat Pilar, Satu Jiwa</span>
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {identities.map((i) => (
            <button
              key={i.slug}
              type="button"
              onClick={() => navigate(`identitas-${i.slug}` as never)}
              className="group rounded-2xl border border-primary/15 bg-card/50 p-6 text-left transition-all duration-300 hover:border-primary/40 hover:royal-glow"
            >
              <p className="font-mono text-[10px] font-semibold tracking-[0.25em] text-primary/60">
                {i.symbol}
              </p>
              <p className="mt-2 font-display text-lg font-bold text-foreground group-hover:text-primary">
                {i.name}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{i.domain}</p>
              <p className="mt-3 text-xs font-semibold text-primary/85">Buka halaman →</p>
            </button>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
