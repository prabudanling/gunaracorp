"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, LibraryBig } from "lucide-react";
import { PageShell } from "./page-shell";
import { blueprint } from "./data";
import { usePageStore } from "@/lib/navigation";
import { StaggerGroup, StaggerItem } from "./section";

export function BlueprintPage() {
  const navigate = usePageStore((s) => s.navigate);

  return (
    <PageShell
      page="blueprint"
      lead="Satu peradaban butuh arsitektur. Ini peta dokumen master yang kami gunakan untuk merancang perusahaan, instansi, dan ekosistem — lengkap dengan penjelasan tiap dokumen."
    >
      {/* Ringkasan atas */}
      <div className="mb-14 grid gap-5 md:grid-cols-3">
        {[
          { icon: LibraryBig, v: "39", l: "Dokumen Master" },
          { icon: FileText, v: "5", l: "Kategori Arsitektur" },
          { icon: FileText, v: "0", l: "Template Dibeli Jadi" },
        ].map((s, i) => (
          <motion.div
            key={s.l}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="rounded-2xl border border-primary/15 bg-card/60 p-6 text-center"
          >
            <s.icon className="mx-auto h-6 w-6 text-primary" aria-hidden />
            <p className="mt-3 font-display text-3xl font-bold text-royal-gradient">{s.v}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.l}</p>
          </motion.div>
        ))}
      </div>

      {/* Kategori & dokumen */}
      <div className="space-y-14">
        {blueprint.map((cat) => (
          <section key={cat.category} aria-label={cat.category}>
            <div className="mb-6 flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <span className="rounded-lg border border-primary/25 bg-primary/10 px-3 py-1 font-mono text-xs font-bold text-primary">
                {cat.range}
              </span>
              <h2 className="font-display text-xl font-bold text-foreground md:text-2xl">
                {cat.category}
              </h2>
              <Link
                href={`/blueprint/${cat.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary/85 transition-colors hover:text-primary"
              >
                Buka Halaman Kategori →
              </Link>
            </div>
            <p className="mb-6 max-w-2xl text-sm text-muted-foreground">{cat.summary}</p>

            <StaggerGroup className="grid gap-3 sm:grid-cols-2">
              {cat.documents.map((doc, i) => {
                const num = Number(cat.range.split("–")[0]) + i;
                return (
                  <StaggerItem key={doc.name}>
                    <div className="flex h-full items-start gap-3.5 rounded-xl border border-primary/12 bg-card/50 p-4 transition-colors hover:border-primary/35">
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/5 font-mono text-[11px] font-bold text-primary">
                        {String(num).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-sm font-bold leading-snug text-foreground">{doc.name}</p>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                          {doc.desc}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          </section>
        ))}
      </div>

      {/* CTA adopsi */}
      <div className="mt-16 rounded-3xl border border-primary/25 bg-primary/[0.06] p-8 text-center md:p-12">
        <h2 className="font-display text-2xl font-bold md:text-3xl">
          <span className="text-royal-gradient">Inilah Arsitekturnya. Sekarang Milik Siapa?</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
          Dokumen ini bisa menjadi milik organisasi Anda — disesuaikan dengan realitas,
          budaya, dan tujuan Anda melalui program Enterprise Blueprint.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => navigate("layanan-enterprise-blueprint", { slug: "enterprise-blueprint" })}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_-8px_var(--royal)] sm:w-auto"
          >
            Program Enterprise Blueprint
          </button>
          <button
            type="button"
            onClick={() => navigate(`buku-blueprint-39-arsip` as never)}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-primary/35 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10 sm:w-auto"
          >
            Buku Arsip Blueprint 39
          </button>
        </div>
      </div>
    </PageShell>
  );
}
