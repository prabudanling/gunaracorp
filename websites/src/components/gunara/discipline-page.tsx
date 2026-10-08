"use client";

import { motion } from "framer-motion";
import { Check, Target, ArrowRight } from "lucide-react";
import { PageShell } from "./page-shell";
import { disciplines } from "./data";
import { usePageStore } from "@/lib/navigation";
import { iconMap } from "./icon-map";
import { StaggerGroup, StaggerItem } from "./section";

export function DisciplinePage({ slug }: { slug: string }) {
  const navigate = usePageStore((s) => s.navigate);
  const d = disciplines.find((x) => x.slug === slug);
  const Icon = iconMap[d?.icon ?? ""] ?? Target;
  const others = disciplines.filter((x) => x.slug !== slug);

  if (!d) {
    return (
      <PageShell page="layanan" title="Disiplin tidak ditemukan" backTo={{ label: "Beranda", page: "beranda" }}>
        <p className="text-muted-foreground">Disiplin yang Anda cari tidak tersedia.</p>
      </PageShell>
    );
  }

  return (
    <PageShell
      page={`disiplin-${d.slug}` as never}
      eyebrow={`Polymath 7 Disiplin`}
      title={d.name}
      lead={d.description}
      backTo={{ label: "Beranda", page: "beranda" }}
    >
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-10">
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10">
              <Icon className="h-6 w-6 text-primary" aria-hidden />
            </span>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/85">
              Kepakaran Inti Ekosistem
            </p>
          </div>

          <div className="space-y-5">
            {d.overview.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.55 }}
                className="text-sm leading-relaxed text-muted-foreground md:text-base"
              >
                {p}
              </motion.p>
            ))}
          </div>

          {/* Proses kerja */}
          <div>
            <h2 className="mb-6 font-display text-xl font-bold text-foreground">
              Cara Kami Bekerja
            </h2>
            <StaggerGroup className="grid gap-4 sm:grid-cols-2">
              {d.process.map((p, i) => (
                <StaggerItem key={p.title}>
                  <div className="h-full rounded-2xl border border-primary/15 bg-card/50 p-5 transition-colors hover:border-primary/35">
                    <p className="font-mono text-[10px] font-bold tracking-[0.25em] text-primary/70">
                      LANGKAH {String(i + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-2 font-display text-base font-bold text-foreground">
                      {p.title}
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                      {p.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>

        {/* Kolom kanan */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-primary/15 bg-card/60 p-7">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-primary/85">
              Kapabilitas
            </h3>
            <ul className="space-y-2.5">
              {d.capabilities.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-primary/15 bg-card/60 p-7">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-primary/85">
              Yang Anda Terima
            </h3>
            <ul className="space-y-2.5">
              {d.deliverables.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/15">
                    <Check className="h-2.5 w-2.5 text-primary" aria-hidden />
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Studi kasus */}
          <div className="rounded-2xl border border-primary/25 bg-primary/[0.06] p-7">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
              Studi Kasus
            </p>
            <h3 className="mt-2 font-display text-lg font-bold text-foreground">
              {d.caseStudy.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              {d.caseStudy.desc}
            </p>
            <p className="mt-4 rounded-lg border border-primary/20 bg-background/50 px-4 py-3 text-xs font-semibold leading-relaxed text-primary">
              {d.caseStudy.result}
            </p>
          </div>
        </div>
      </div>

      {/* Layanan terkait + disiplin lain */}
      <div className="mt-16 grid gap-6 border-t border-primary/10 pt-10 md:grid-cols-2">
        <div className="rounded-2xl border border-primary/25 bg-primary/[0.06] p-7">
          <h2 className="font-display text-lg font-bold text-foreground">
            Butuh Disiplin Ini di Organisasi Anda?
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Lihat format layanan, harga, dan proses kerjanya — lalu jadwalkan
            percakapan pertama.
          </p>
          <button
            type="button"
            onClick={() => navigate("layanan")}
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_-8px_var(--royal)]"
          >
            Lihat Layanan Terkait
            <ArrowRight className="h-4 w-4" aria-hidden />
          </button>
        </div>
        <div className="rounded-2xl border border-primary/15 bg-card/50 p-7">
          <h2 className="font-display text-lg font-bold text-foreground">
            Jelajahi Disiplin Lain
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {others.map((o) => (
              <button
                key={o.slug}
                type="button"
                onClick={() => navigate(`disiplin-${o.slug}` as never)}
                className="rounded-full border border-primary/20 px-3.5 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                {o.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
