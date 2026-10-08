"use client";

import { motion } from "framer-motion";
import { Check, Clock, Users, ArrowRight } from "lucide-react";
import { PageShell } from "./page-shell";
import { services } from "./data";
import { usePageStore } from "@/lib/navigation";
import { iconMap } from "./icon-map";
import { StaggerGroup, StaggerItem } from "./section";

export function ServicePage({ slug }: { slug: string }) {
  const navigate = usePageStore((s) => s.navigate);
  const s = services.find((x) => x.slug === slug);
  const Icon = iconMap[s?.icon ?? ""] ?? Target;
  const others = services.filter((x) => x.slug !== slug);

  if (!s) {
    return (
      <PageShell page="layanan" title="Layanan tidak ditemukan" backTo={{ label: "Layanan", page: "layanan" }}>
        <p className="text-muted-foreground">Layanan yang Anda cari tidak tersedia.</p>
      </PageShell>
    );
  }

  return (
    <PageShell
      page={`layanan-${s.slug}` as never}
      eyebrow="Layanan Konsultasi"
      title={s.name}
      lead={s.description}
      backTo={{ label: "Layanan", page: "layanan" }}
    >
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-10">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10">
              <Icon className="h-6 w-6 text-primary" aria-hidden />
            </span>
            <span className="rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary">
              {s.price}
            </span>
          </div>

          <div className="space-y-5">
            {s.longDesc.map((p, i) => (
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

          {/* Proses */}
          <div>
            <h2 className="mb-6 font-display text-xl font-bold text-foreground">
              Alur Kerja
            </h2>
            <ol className="relative space-y-6 border-l border-primary/20 pl-7">
              {s.process.map((p, i) => (
                <motion.li
                  key={p.title}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.45 }}
                  className="relative"
                >
                  <span className="absolute -left-[35px] top-0 flex h-6 w-6 items-center justify-center rounded-full border border-primary/40 bg-background font-mono text-[10px] font-bold text-primary">
                    {i + 1}
                  </span>
                  <p className="text-sm font-bold text-foreground">{p.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{p.desc}</p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>

        {/* Kolom kanan */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-primary/25 bg-primary/[0.07] p-7">
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-primary">
              <Check className="h-4 w-4" aria-hidden /> Yang Anda Terima
            </h3>
            <ul className="mt-4 space-y-2.5">
              {s.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-2.5 text-sm text-foreground/85">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/15">
                    <Check className="h-2.5 w-2.5 text-primary" aria-hidden />
                  </span>
                  {d}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-primary/15 bg-card/60 p-7">
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-primary/85">
              <Users className="h-4 w-4" aria-hidden /> Ideal Untuk
            </h3>
            <ul className="mt-4 space-y-2.5">
              {s.idealFor.map((d) => (
                <li key={d} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                  {d}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-primary/15 bg-card/60 p-7">
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-primary/85">
              <Clock className="h-4 w-4" aria-hidden /> Durasi
            </h3>
            <p className="mt-3 text-sm font-semibold text-foreground">{s.timeline}</p>
          </div>

          <button
            type="button"
            onClick={() => navigate("kontak", { subject: s.name })}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-sm font-bold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_36px_-8px_var(--royal)]"
          >
            Jadwalkan {s.name.split(" ")[0]} — Konsultasi Sekarang
            <ArrowRight className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>

      {/* Layanan lainnya */}
      <div className="mt-16 border-t border-primary/10 pt-10">
        <h2 className="mb-6 font-display text-xl font-bold text-foreground">
          Layanan Lainnya
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((o) => {
            const OIcon = iconMap[o.icon] ?? Target;
            return (
              <button
                key={o.slug}
                type="button"
                onClick={() => navigate(`layanan-${o.slug}` as never)}
                className="group rounded-2xl border border-primary/15 bg-card/50 p-5 text-left transition-all duration-300 hover:border-primary/40 hover:royal-glow"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/25 bg-primary/10">
                  <OIcon className="h-4 w-4 text-primary" aria-hidden />
                </span>
                <p className="mt-3 font-display text-base font-bold text-foreground group-hover:text-primary">
                  {o.name}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{o.price}</p>
              </button>
            );
          })}
        </div>
      </div>
    </PageShell>
  );
}
