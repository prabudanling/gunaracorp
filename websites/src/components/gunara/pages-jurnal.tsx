"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ScrollText, ChevronDown } from "lucide-react";
import { PageShell } from "./page-shell";
import { journals } from "./data";
import { usePageStore } from "@/lib/navigation";
import { cn } from "@/lib/utils";

const statusColor: Record<string, string> = {
  Terbit: "border-emerald-500/40 text-emerald-400",
  "Dalam Review": "border-amber-500/40 text-amber-400",
  Penulisan: "border-primary/40 text-primary",
  Proposal: "border-muted-foreground/40 text-muted-foreground",
};

const filters = ["Semua", "Q1", "Q2", "Terbit", "Dalam Review", "Penulisan", "Proposal"];

export function JurnalPage() {
  const [filter, setFilter] = useState("Semua");
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const navigate = usePageStore((s) => s.navigate);

  const list = useMemo(
    () =>
      journals.filter((j) => {
        if (filter === "Semua") return true;
        if (filter === "Q1" || filter === "Q2") return j.quartile === filter;
        return j.status === filter;
      }),
    [filter]
  );

  return (
    <PageShell
      page="jurnal"
      lead="Jembatan antara wahyu, ilmu, dan teknologi — dipublikasikan di jurnal Q1/Q2 internasional. Saring berdasarkan kuartil atau status, lalu buka abstrak tiap karya."
    >
      {/* Filter */}
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-xs font-semibold transition-all duration-300",
              filter === f
                ? "border-primary/60 bg-primary/15 text-primary"
                : "border-primary/20 text-muted-foreground hover:border-primary/40 hover:text-foreground"
            )}
            aria-pressed={filter === f}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Daftar */}
      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {list.map((j, i) => (
            <motion.article
              key={j.slug}
              layout
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="overflow-hidden rounded-2xl border border-primary/15 bg-card/60 transition-colors hover:border-primary/35"
            >
              <button
                type="button"
                onClick={() => setOpenSlug(openSlug === j.slug ? null : j.slug)}
                className="w-full p-6 text-left md:p-7"
                aria-expanded={openSlug === j.slug}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <Badge
                      variant="outline"
                      className="border-primary/40 font-mono text-[10px] font-bold text-primary"
                    >
                      {j.quartile}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{j.venue}</span>
                  </div>
                  <span
                    className={`rounded-full border px-3 py-0.5 text-[10px] font-semibold uppercase tracking-widest ${statusColor[j.status] ?? "border-primary/40 text-primary"}`}
                  >
                    {j.status}
                  </span>
                </div>

                <h2 className="mt-4 font-display text-lg font-bold leading-snug text-foreground md:text-xl">
                  <Link
                    href={`/jurnal/${j.slug}`}
                    onClick={(e) => e.stopPropagation()}
                    className="transition-colors hover:text-primary"
                  >
                    {j.title}
                  </Link>
                </h2>

                <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-primary/10 pt-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <ScrollText className="h-3.5 w-3.5 text-primary/70" aria-hidden />
                    {j.field}
                  </span>
                  <span>{j.year}</span>
                  <span className="ml-auto inline-flex items-center gap-1 font-semibold text-primary/85">
                    {openSlug === j.slug ? "Tutup Abstrak" : "Buka Abstrak"}
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-300",
                        openSlug === j.slug && "rotate-180"
                      )}
                      aria-hidden
                    />
                  </span>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openSlug === j.slug && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden border-t border-primary/10 bg-background/40"
                  >
                    <p className="px-6 py-5 text-sm leading-relaxed text-muted-foreground md:px-7">
                      <span className="font-semibold text-foreground">Abstrak — </span>
                      {j.abstract}
                    </p>
                    <div className="border-t border-primary/10 px-6 py-3 md:px-7">
                      <Link
                        href={`/jurnal/${j.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors hover:text-primary/80"
                      >
                        Detail Riset →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {/* CTA kolaborasi */}
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-primary/25 bg-primary/[0.06] p-7">
          <h2 className="font-display text-lg font-bold text-foreground">
            Bergabung dalam Roadmap 100 Jurnal
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Sebagai co-author, reviewer, atau peneliti mitra — kami membimbing dari
            metodologi hingga terbit.
          </p>
          <button
            type="button"
            onClick={() => navigate("kontak", { subject: "Kolaborasi Riset / Jurnal" })}
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_-8px_var(--royal)]"
          >
            Ajukan Kolaborasi Riset
          </button>
        </div>
        <div className="rounded-2xl border border-primary/15 bg-card/50 p-7">
          <h2 className="font-display text-lg font-bold text-foreground">
            Sisi Akademik yang Lengkap
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Kenali identitas riset di balik publikasi-publikasi ini, termasuk fokus dan
            metodologinya.
          </p>
          <button
            type="button"
            onClick={() => navigate("identitas-lutfi-azmi")}
            className="mt-5 inline-flex items-center gap-2 rounded-lg border border-primary/35 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
          >
            Halaman M. Lutfi Azmi →
          </button>
        </div>
      </div>
    </PageShell>
  );
}
