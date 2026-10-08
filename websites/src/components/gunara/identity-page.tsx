"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck, ArrowRight, Quote } from "lucide-react";
import { PageShell } from "./page-shell";
import { identities } from "./data";
import { usePageStore } from "@/lib/navigation";
import { StaggerGroup, StaggerItem } from "./section";

export function IdentityPage({ slug }: { slug: string }) {
  const navigate = usePageStore((s) => s.navigate);
  const identity = identities.find((i) => i.slug === slug);
  const others = identities.filter((i) => i.slug !== slug);

  if (!identity) {
    return (
      <PageShell page="tentang" title="Identitas tidak ditemukan" backTo={{ label: "Beranda", page: "beranda" }}>
        <p className="text-muted-foreground">Peran yang Anda cari tidak tersedia.</p>
      </PageShell>
    );
  }

  return (
    <PageShell
      page={`identitas-${identity.slug}` as never}
      eyebrow={identity.penName}
      title={identity.name}
      lead={identity.tagline}
      backTo={{ label: "Beranda", page: "beranda" }}
    >
      {/* Stat ringkas */}
      <StaggerGroup className="mb-12 grid gap-4 sm:grid-cols-3">
        {identity.stats.map((s) => (
          <StaggerItem key={s.label}>
            <div className="rounded-2xl border border-primary/15 bg-card/60 p-6 text-center transition-all duration-500 hover:border-primary/35">
              <p className="font-display text-3xl font-bold text-royal-gradient">{s.value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {s.label}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>

      {/* Potret asli (jika tersedia) */}
      {identity.photo && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mb-12 w-full max-w-md lg:max-w-lg"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-primary/30 shadow-[0_30px_80px_-24px_rgba(139,92,246,0.5)]">
            <Image
              src={identity.photo}
              alt={`${identity.name} — ${identity.tagline}`}
              fill
              priority
              sizes="(max-width: 1024px) 448px, 512px"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,8,22,0.85)] via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
              <div>
                <p className="font-display text-2xl font-bold text-white">{identity.name}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.22em] text-royal-soft">
                  {identity.domain}
                </p>
              </div>
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/40 bg-background/70 font-display text-sm font-bold text-primary backdrop-blur-md">
                {identity.symbol}
              </span>
            </div>
          </div>
        </motion.div>
      )}

      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        {/* Biografi panjang */}
        <div className="space-y-6">
          <h2 className="font-display text-2xl font-bold text-foreground">
            Tentang Peran Ini
          </h2>
          {identity.longBio.map((p, i) => (
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

          {/* Fokus & Output */}
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                <BadgeCheck className="h-4 w-4" aria-hidden /> Fokus Utama
              </h3>
              <ul className="space-y-2.5">
                {identity.focus.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                <ArrowRight className="h-4 w-4" aria-hidden /> Keluaran
              </h3>
              <ul className="space-y-2.5">
                {identity.outputs.map((o) => (
                  <li key={o} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Kolom kanan: filosofi + perjalanan */}
        <div className="space-y-6">
          <figure className="relative overflow-hidden rounded-2xl border border-primary/20 bg-primary/[0.06] p-7">
            <Quote className="absolute right-5 top-5 h-8 w-8 text-primary/15" aria-hidden />
            <blockquote className="text-sm italic leading-relaxed text-foreground/90">
              &ldquo;{identity.philosophy}&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-xs font-semibold text-primary/85">
              — {identity.name}
            </figcaption>
          </figure>

          <div className="rounded-2xl border border-primary/15 bg-card/60 p-7">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-primary/85">
              Perjalanan
            </h3>
            <ol className="relative space-y-6 border-l border-primary/20 pl-6">
              {identity.journey.map((j, i) => (
                <motion.li
                  key={j.year}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                  className="relative"
                >
                  <span className="absolute -left-[31px] top-1 flex h-3 w-3 items-center justify-center rounded-full border border-primary/50 bg-background">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                  </span>
                  <p className="font-mono text-[10px] font-bold tracking-[0.2em] text-primary/80">
                    {j.year}
                  </p>
                  <p className="mt-1 text-sm font-bold text-foreground">{j.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{j.desc}</p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* Peran lainnya */}
      <div className="mt-16 border-t border-primary/10 pt-10">
        <h2 className="mb-6 font-display text-xl font-bold text-foreground">
          Kenali Peran Lainnya
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {others.map((o) => (
            <button
              key={o.slug}
              type="button"
              onClick={() => navigate(`identitas-${o.slug}` as never)}
              className="group rounded-2xl border border-primary/15 bg-card/50 p-5 text-left transition-all duration-300 hover:border-primary/40 hover:royal-glow"
            >
              <p className="font-mono text-[10px] font-semibold tracking-[0.25em] text-primary/60">
                {o.symbol}
              </p>
              <p className="mt-2 font-display text-lg font-bold text-foreground group-hover:text-primary">
                {o.name}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{o.domain}</p>
            </button>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
