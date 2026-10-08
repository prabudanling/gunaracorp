"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { PageShell } from "./page-shell";
import { services, pricingTiers } from "./data";
import { usePageStore } from "@/lib/navigation";
import { iconMap } from "./icon-map";
import { StaggerGroup, StaggerItem } from "./section";
import { cn } from "@/lib/utils";

export function LayananPage() {
  const navigate = usePageStore((s) => s.navigate);

  return (
    <PageShell
      page="layanan"
      lead="Enam jalur layanan yang mengubah masalah nyata menjadi sistem yang bekerja. Buka halaman tiap layanan untuk proses, durasi, dan deliverable lengkapnya."
    >
      {/* Grid layanan */}
      <StaggerGroup className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((s) => {
          const Icon = iconMap[s.icon] ?? Target;
          return (
            <StaggerItem key={s.slug} className="h-full">
              <motion.button
                type="button"
                onClick={() => navigate(`layanan-${s.slug}` as never)}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="group flex h-full w-full flex-col rounded-2xl border border-primary/15 bg-card/60 p-6 text-left transition-all duration-500 hover:border-primary/40 hover:royal-glow"
                aria-label={`Buka halaman layanan ${s.name}`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" aria-hidden />
                  </span>
                  <ArrowRight
                    className="h-4 w-4 text-primary/60 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  />
                </div>
                <h2 className="font-display text-lg font-bold leading-snug text-foreground group-hover:text-primary">
                  {s.name}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
                <p className="mt-4 text-sm font-bold text-primary">{s.price}</p>
                <p className="mt-1 text-[11px] text-muted-foreground">{s.timeline}</p>
              </motion.button>
            </StaggerItem>
          );
        })}
      </StaggerGroup>

      {/* Pricing */}
      <div className="mt-20">
        <div className="mb-10 text-center">
          <h2 className="font-display text-2xl font-bold md:text-3xl">
            <span className="text-royal-gradient">Pilih Jalur Kemitraan</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Transparan, proporsional, dan selalu bisa dimulai dari satu percakapan.
          </p>
        </div>

        <StaggerGroup className="grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <StaggerItem key={tier.name} className="h-full">
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-2xl border p-7 transition-all duration-500 md:p-8",
                  tier.highlight
                    ? "border-primary/50 bg-primary/[0.07] royal-glow-strong"
                    : "border-primary/15 bg-card/50 hover:border-primary/30"
                )}
              >
                {tier.highlight && (
                  <span className="absolute right-5 top-5 rounded-full border border-primary/50 bg-primary/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
                    Paling Populer
                  </span>
                )}
                <p className="font-display text-xl font-bold text-foreground">{tier.name}</p>
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
                <button
                  type="button"
                  onClick={() => navigate("kontak", { subject: tier.name })}
                  className={cn(
                    "mt-8 inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-300",
                    tier.highlight
                      ? "bg-primary text-primary-foreground hover:shadow-[0_0_30px_-8px_var(--royal)]"
                      : "border border-primary/35 text-primary hover:bg-primary/10"
                  )}
                >
                  {tier.highlight ? "Mulai Proyek" : "Diskusikan"}
                </button>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </PageShell>
  );
}
