"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ShieldCheck, HeartHandshake, ArrowRight } from "lucide-react";
import { PageShell } from "./page-shell";
import { mentoringPhases } from "./data";
import { usePageStore } from "@/lib/navigation";
import { StaggerGroup, StaggerItem } from "./section";

export function MentoringPage() {
  const navigate = usePageStore((s) => s.navigate);

  return (
    <PageShell
      page="mentoring"
      lead="Program pendampingan pemulihan 90 hari oleh Santri Angon — privat, rahasia, dan hangat. Tidak ada yang pulih sendirian, dan tidak ada yang dihakimi di ruang ini."
      cta={false}
    >
      {/* Prinsip */}
      <StaggerGroup className="mb-14 grid gap-4 md:grid-cols-3">
        {[
          {
            icon: ShieldCheck,
            t: "Rahasia Terjaga",
            d: "Apa pun yang Anda ceritakan berhenti di ruang ini. Tidak ada catatan tanpa izin, tidak ada label.",
          },
          {
            icon: HeartHandshake,
            t: "Didampingi, Dinasihati",
            d: "Kami tidak memberi khotbah panjang — kami berjalan di samping Anda, sepanjang yang Anda butuhkan.",
          },
          {
            icon: Check,
            t: "Gratis yang Tak Mampu",
            d: "Bagi yang benar-benar tidak mampu, program ini gratis sepenuhnya. Kebaikan tidak boleh bergantung pada saldo.",
          },
        ].map((p) => (
          <StaggerItem key={p.t}>
            <div className="h-full rounded-2xl border border-primary/15 bg-card/60 p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
                <p.icon className="h-5 w-5 text-primary" aria-hidden />
              </span>
              <p className="mt-4 font-display text-lg font-bold text-foreground">{p.t}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>

      {/* Tiga fase */}
      <h2 className="mb-8 text-center font-display text-2xl font-bold md:text-3xl">
        <span className="text-royal-gradient">Perjalanan 90 Hari</span>
      </h2>
      <div className="grid gap-6 lg:grid-cols-3">
        {mentoringPhases.map((p, i) => (
          <motion.div
            key={p.phase}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-primary/15 bg-card/60 p-7"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -right-4 -top-8 font-display text-[110px] font-bold leading-none text-primary/5"
            >
              {i + 1}
            </span>
            <div className="flex items-baseline justify-between">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-primary/80">
                {p.phase}
              </p>
              <p className="font-mono text-[10px] text-muted-foreground">{p.period}</p>
            </div>
            <h3 className="mt-3 font-display text-xl font-bold text-foreground">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            <ul className="mt-5 space-y-2.5 border-t border-primary/10 pt-5">
              {p.items.map((it) => (
                <li key={it} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                  {it}
                </li>
              ))}
            </ul>
            <Link
              href={`/mentoring/${p.slug}`}
              className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors hover:text-primary/80"
            >
              Detail Fase →
            </Link>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-14 rounded-3xl border border-primary/25 bg-primary/[0.07] p-8 text-center md:p-12">
        <h2 className="font-display text-2xl font-bold md:text-3xl">
          <span className="text-royal-gradient">Malam Ini Tidak Harus Sendirian</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
          Tulis sepatah dua patah kata saja — cukup sebagai awal. Sisanya, kami yang
          menemani merapikannya.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => navigate("kontak", { subject: "Mentoring Santri Angon" })}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_-8px_var(--royal)] sm:w-auto"
          >
            Mintalah Didampingi
            <ArrowRight className="h-4 w-4" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => navigate("puisi")}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-primary/35 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10 sm:w-auto"
          >
            Baca Puisi Dulu
          </button>
        </div>
        <p className="mt-5 text-[11px] text-muted-foreground">
          Jika Anda berada dalam krisis darurat, mohon hubungi layanan kesehatan
          terdekat segera — lalu kembalilah, kami tetap di sini.
        </p>
      </div>
    </PageShell>
  );
}
