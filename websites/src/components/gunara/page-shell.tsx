"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MessageCircleQuestion } from "lucide-react";
import { pageMeta, PageKey, pageToPath } from "@/lib/navigation";
import { cn } from "@/lib/utils";

// ------------------------------------------------------------
// PageShell — bingkai halaman standar: tombol kembali, judul,
// lead, konten, dan CTA penutup. Semua halaman memakai ini
// agar tidak ada jalan buntu.
// ------------------------------------------------------------
export function PageShell({
  page,
  title,
  eyebrow,
  lead,
  backTo = { label: "Beranda", page: "beranda" as PageKey },
  children,
  cta = true,
}: {
  page: string;
  title?: string;
  eyebrow?: string;
  lead?: string;
  backTo?: { label: string; page: PageKey; slug?: string };
  children: ReactNode;
  cta?: boolean;
}) {
  const meta = pageMeta[page];
  const finalEyebrow = eyebrow ?? meta?.eyebrow ?? "Gunara.web.id";
  const finalTitle = title ?? meta?.title ?? "Gunara";

  return (
    <motion.main
      key={page}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex-1"
    >
      {/* Header halaman */}
      <header className="relative overflow-hidden border-b border-primary/10 bg-noir-soft/50 pt-28 pb-14 md:pt-36 md:pb-20 grain">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 -z-0 h-72 w-[720px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <motion.div whileHover={{ x: -3 }} className="mb-8 inline-block">
            <Link
              href={pageToPath(backTo.page)}
              className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-background/60 px-4 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
              Kembali ke {backTo.label}
            </Link>
          </motion.div>

          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary/60" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/90">
              {finalEyebrow}
            </span>
          </div>
          <h1 className="max-w-4xl font-display text-3xl font-bold leading-tight md:text-5xl">
            <span className="text-royal-gradient">{finalTitle}</span>
          </h1>
          {lead && (
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {lead}
            </p>
          )}
        </div>
      </header>

      {/* Konten */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:px-8 md:py-20">
        {children}
      </div>

      {/* CTA penutup — setiap halaman selalu punya jalan lanjut */}
      {cta && (
        <section
          aria-label="Ajakan berkolaborasi"
          className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 md:px-8"
        >
          <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-primary/[0.07] p-8 text-center md:p-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[480px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"
            />
            <MessageCircleQuestion className="mx-auto h-9 w-9 text-primary" aria-hidden />
            <h2 className="mt-4 font-display text-2xl font-bold md:text-3xl">
              <span className="text-royal-gradient">Siap Melangkah Bersama?</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground md:text-base">
              Ceritakan konteks Anda — kami balas dengan langkah pertama yang
              konkret, maksimal 1×24 jam kerja.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/kontak"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_30px_-8px_var(--royal)] sm:w-auto"
              >
                Hubungi Kami
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/layanan"
                className={cn(
                  "inline-flex w-full items-center justify-center gap-2 rounded-lg border border-primary/35 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10 sm:w-auto"
                )}
              >
                Jelajahi Layanan
              </Link>
            </div>
          </div>
        </section>
      )}
    </motion.main>
  );
}
