"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Moon,
  Feather,
  HeartHandshake,
  ArrowRight,
  X,
  BadgeCheck,
} from "lucide-react";
import { identities } from "./data";
import { pageToPath, usePageStore } from "@/lib/navigation";
import { SectionHeading, StaggerGroup, StaggerItem } from "./section";
import { cn } from "@/lib/utils";

const icons = [Building2, Moon, Feather, HeartHandshake];

export function Identities() {
  const [openId, setOpenId] = useState<string | null>(null);
  const navigate = usePageStore((s) => s.navigate);
  const active = identities.find((i) => i.id === openId) ?? null;

  return (
    <section
      id="identitas"
      aria-label="Empat Pilar Identitas"
      className="relative py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <SectionHeading
          i18nKey="sec.identities"
          eyebrow="Empat Pilar"
          title="Satu Jiwa, Empat Identitas"
          description="Bukan kepribadian ganda — melainkan arsitektur peran: masing-masing punya medan, disiplin, dan karya yang jelas, saling menguatkan dalam satu misi."
        />

        <StaggerGroup className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {identities.map((identity, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <StaggerItem key={identity.id} className="h-full">
                <motion.button
                  type="button"
                  onClick={() => setOpenId(identity.id)}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className={cn(
                    "group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-primary/15 bg-card/60 p-6 text-left backdrop-blur-sm transition-all duration-500 hover:border-primary/40 hover:royal-glow",
                    active?.id === identity.id && "border-primary/50"
                  )}
                  aria-haspopup="dialog"
                >
                  {/* top gold hairline on hover */}
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-transparent via-primary to-transparent transition-transform duration-500 group-hover:scale-x-100"
                  />

                  <div className="mb-5 flex items-start justify-between">
                    <span className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" aria-hidden />
                      <span className="absolute inset-0 rounded-xl bg-primary/15 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100" />
                    </span>
                    <span className="font-mono text-[10px] font-semibold tracking-[0.25em] text-primary/60">
                      {identity.symbol}
                    </span>
                  </div>

                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/80">
                    {identity.penName}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold text-foreground md:text-2xl">
                    {identity.name}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">{identity.domain}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {identity.tagline}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-primary/90 transition-all duration-300 group-hover:gap-2.5">
                    Jelajahi Peran
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                  </span>
                </motion.button>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>

      {/* Detail dialog */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[70] flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
            onClick={() => setOpenId(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Detail peran ${active.name}`}
          >
            <motion.div
              initial={{ y: 60, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto scrollbar-royal rounded-t-3xl border border-primary/25 bg-card p-6 shadow-2xl sm:rounded-3xl sm:p-8"
            >
              <button
                type="button"
                onClick={() => setOpenId(null)}
                className="absolute right-4 top-4 rounded-full border border-primary/25 bg-background/60 p-2 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                aria-label="Tutup detail"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex items-start gap-5 pr-10">
                {active.photo ? (
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border border-primary/30 bg-background sm:h-28 sm:w-28">
                    <Image
                      src={active.photo}
                      alt={`${active.name} — ${active.tagline}`}
                      fill
                      sizes="112px"
                      className="object-cover object-top"
                    />
                  </div>
                ) : (
                  <div
                    aria-hidden
                    className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 sm:h-28 sm:w-28"
                  >
                    <span className="font-mono text-xl font-bold tracking-[0.2em] text-primary">
                      {active.symbol}
                    </span>
                  </div>
                )}
                <div className="min-w-0 pt-1">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary/85">
                    {active.penName}
                  </p>
                  <h3 className="mt-2 font-display text-3xl font-bold text-foreground">
                    {active.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{active.domain}</p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-foreground/85 md:text-base">
                {active.description}
              </p>

              <div className="mt-7 grid gap-6 sm:grid-cols-2">
                <div>
                  <h4 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                    <BadgeCheck className="h-4 w-4" aria-hidden /> Fokus Utama
                  </h4>
                  <ul className="space-y-2.5">
                    {active.focus.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                    <ArrowRight className="h-4 w-4" aria-hidden /> Keluaran (Output)
                  </h4>
                  <ul className="space-y-2.5">
                    {active.outputs.map((o) => (
                      <li key={o} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40" />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={pageToPath(`identitas-${active.slug}`)}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_-8px_var(--royal)]"
                >
                  Buka Halaman Lengkap
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href="/kontak"
                  onClick={() => {
                    setOpenId(null);
                    navigate("kontak", { subject: `Kolaborasi dengan ${active.name}` });
                  }}
                  className="inline-flex items-center justify-center rounded-lg border border-primary/30 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/60 hover:text-primary"
                >
                  Bekerja Sama
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
