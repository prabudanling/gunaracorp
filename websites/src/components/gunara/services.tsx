"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Target,
  Wheat,
  Sun,
  Cpu,
  PenLine,
  DraftingCompass,
  Check,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { services, pricingTiers } from "./data";
import { pageToPath, usePageStore } from "@/lib/navigation";
import { SectionHeading, StaggerGroup, StaggerItem, Reveal } from "./section";
import { cn } from "@/lib/utils";

const iconMap: Record<string, typeof Target> = {
  Target,
  Wheat,
  Sun,
  Cpu,
  PenLine,
  DraftingCompass,
};

export function Services() {
  const [openId, setOpenId] = useState<string | null>(null);
  const navigate = usePageStore((s) => s.navigate);

  return (
    <section
      id="layanan"
      aria-label="Layanan Konsultasi"
      className="relative border-y border-primary/10 bg-noir-soft/60 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <SectionHeading
          i18nKey="sec.services"
          eyebrow="Revenue Engine — Layanan"
          title="Konsultasi Kelas Peradaban"
          description="Enam jalur layanan yang mengubah masalah nyata menjadi sistem yang bekerja — didampingi arsitek yang berdiri di belakang setiap dokumen."
        />

        {/* Service cards */}
        <StaggerGroup className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((s) => {
            const Icon = iconMap[s.icon] ?? Target;
            const isOpen = openId === s.id;
            return (
              <StaggerItem key={s.id} className="h-full">
                <div
                  className={cn(
                    "group flex h-full flex-col overflow-hidden rounded-2xl border bg-card/60 backdrop-blur-sm transition-all duration-500",
                    isOpen
                      ? "border-primary/45 royal-glow-strong"
                      : "border-primary/15 hover:border-primary/35 hover:royal-glow"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : s.id)}
                    className="flex flex-1 flex-col p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <span className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" aria-hidden />
                      </span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 text-primary/70 transition-transform duration-300",
                          isOpen && "rotate-180"
                        )}
                        aria-hidden
                      />
                    </div>
                    <h3 className="font-display text-lg font-bold leading-snug text-foreground">
                      {s.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>
                    <p className="mt-4 text-sm font-bold text-primary">{s.price}</p>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden border-t border-primary/15 bg-background/40"
                      >
                        <ul className="space-y-2.5 p-6">
                          {s.deliverables.map((d) => (
                            <li
                              key={d}
                              className="flex items-start gap-2.5 text-sm text-foreground/85"
                            >
                              <span className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-primary/15">
                                <Check className="h-3 w-3 text-primary" aria-hidden />
                              </span>
                              {d}
                            </li>
                          ))}
                        </ul>
                        <div className="border-t border-primary/10 px-6 py-3">
                          <Link
                            href={pageToPath(`layanan-${s.slug}`)}
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                          >
                            Halaman Lengkap Layanan Ini →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="grid grid-cols-2 divide-x divide-primary/10 border-t border-primary/10">
                    <Link
                      href={pageToPath(`layanan-${s.slug}`)}
                      className="bg-primary/5 px-4 py-3 text-center text-sm font-semibold text-primary transition-colors duration-300 hover:bg-primary/15"
                    >
                      Detail Layanan
                    </Link>
                    <Link
                      href="/kontak"
                      onClick={() => navigate("kontak", { subject: s.name })}
                      className="bg-primary/5 px-4 py-3 text-center text-sm font-semibold text-primary transition-colors duration-300 hover:bg-primary/15"
                    >
                      Jadwalkan →
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        {/* Pricing tiers */}
        <div className="mt-20">
          <Reveal>
            <div className="mb-10 text-center">
              <h3 className="font-display text-2xl font-bold md:text-3xl">
                <span className="text-royal-gradient">Pilih Jalur Kemitraan</span>
              </h3>
              <p className="mt-3 text-sm text-muted-foreground md:text-base">
                Transparan, proporsional, dan selalu bisa dimulai dari satu percakapan.
              </p>
              <Link
                href="/layanan"
                className="mt-4 inline-flex items-center gap-2 rounded-lg border border-primary/35 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
              >
                Lihat Halaman Layanan Lengkap →
              </Link>
            </div>
          </Reveal>

          <StaggerGroup className="grid gap-6 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <StaggerItem key={tier.name} className="h-full">
                <div
                  className={cn(
                    "relative flex h-full flex-col overflow-hidden rounded-2xl border p-7 transition-all duration-500 md:p-8",
                    tier.highlight
                      ? "border-primary/50 bg-primary/[0.07] royal-glow-strong"
                      : "border-primary/15 bg-card/50 hover:border-primary/30"
                  )}
                >
                  {tier.highlight && (
                    <span className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full border border-primary/50 bg-primary/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                      <Sparkles className="h-3 w-3" aria-hidden />
                      Paling Populer
                    </span>
                  )}

                  <p className="font-display text-xl font-bold text-foreground">
                    {tier.name}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{tier.ideal}</p>

                  <div className="mt-6 flex items-baseline gap-2">
                    <span
                      className={cn(
                        "font-display text-4xl font-bold",
                        tier.highlight ? "text-royal-gradient" : "text-foreground"
                      )}
                    >
                      {tier.price}
                    </span>
                    <span className="text-xs text-muted-foreground">{tier.unit}</span>
                  </div>

                  <ul className="mt-6 flex-1 space-y-3">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/85">
                        <span className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-primary/15">
                          <Check className="h-3 w-3 text-primary" aria-hidden />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/kontak"
                    onClick={() => navigate("kontak", { subject: tier.highlight ? tier.name : tier.name })}
                    className={cn(
                      "mt-8 inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-300",
                      tier.highlight
                        ? "bg-primary text-primary-foreground hover:shadow-[0_0_30px_-8px_var(--royal)]"
                        : "border border-primary/35 text-primary hover:bg-primary/10"
                    )}
                  >
                    {tier.highlight ? "Mulai Proyek" : "Diskusikan"}
                  </Link>

                  <Link
                    href={`/paket/${tier.slug}`}
                    className="mt-3 inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-primary/85 transition-colors hover:text-primary"
                  >
                    Lihat Detail Paket →
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
