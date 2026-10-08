"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, ScrollText, BadgeCheck, ArrowUp, Languages } from "lucide-react";
import { identities, services, companies } from "./data";
import { PageKey, pageToPath } from "@/lib/navigation";
import { useT, useI18n } from "@/lib/i18n/store";

const exploreLinks: { label: string; page: PageKey }[] = [
  { label: "footer.explore.tentang", page: "tentang" },
  { label: "footer.explore.misi", page: "misi" },
  { label: "footer.explore.blueprint", page: "blueprint" },
  { label: "footer.explore.karya", page: "karya" },
  { label: "footer.explore.jurnal", page: "jurnal" },
  { label: "footer.explore.puisi", page: "puisi" },
  { label: "footer.explore.mentoring", page: "mentoring" },
  { label: "footer.explore.surat", page: "surat" },
  { label: "footer.explore.faq", page: "faq" },
];

export function Footer() {
  const t = useT();
  return (
    <footer className="mt-auto border-t border-primary/15 bg-background/95 pb-[calc(env(safe-area-inset-bottom)+1rem)] pt-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3" aria-label="Ke beranda">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-display text-base font-bold text-primary">
                G
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-bold tracking-[0.22em]">GUNARA</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-primary/80">
                  gunara.web.id
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t("footer.desc")}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { icon: Building2, label: "footer.badge.companies" },
                { icon: ScrollText, label: "footer.badge.blueprint" },
                { icon: BadgeCheck, label: "footer.badge.cert" },
              ].map((m) => (
                <span
                  key={m.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-[11px] font-semibold text-primary/90"
                >
                  <m.icon className="h-3.5 w-3.5" aria-hidden />
                  {t(m.label)}
                </span>
              ))}
            </div>

            {/* 195 Bahasa — AI Translation */}
            <button
              type="button"
              onClick={() => useI18n.getState().setSwitcherOpen(true)}
              className="group mt-6 inline-flex items-center gap-2.5 rounded-2xl border border-primary/25 bg-primary/5 px-4 py-2.5 text-start transition-all hover:border-primary/50 hover:bg-primary/10"
              aria-label="Buka pemilih bahasa — 195 bahasa dunia"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/30 bg-primary/10 transition-transform duration-500 group-hover:rotate-180">
                <Languages className="h-4 w-4 text-primary" aria-hidden />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[13px] font-bold text-foreground">
                  195 {t("lang.trigger")}
                </span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-primary/80">
                  AI Translation · RTL Ready
                </span>
              </span>
            </button>
          </div>

          {/* Identitas */}
          <nav aria-label={t("footer.col.identities")}>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-primary/85">
              {t("footer.col.identities")}
            </p>
            <ul className="space-y-3">
              {identities.map((i) => (
                <li key={i.slug}>
                  <Link href={pageToPath(`identitas-${i.slug}` as PageKey)} className="group block">
                    <span className="text-sm font-semibold text-foreground/90 transition-colors group-hover:text-primary">
                      {i.name}
                    </span>
                    <span className="block text-xs text-muted-foreground">{i.domain}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Perusahaan */}
          <nav aria-label={t("footer.col.companies")}>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-primary/85">
              {t("footer.col.companies")}
            </p>
            <ul className="space-y-3">
              {companies.map((c) => (
                <li key={c.slug}>
                  <Link href={pageToPath(`perusahaan-${c.slug}` as PageKey)} className="group block">
                    <span className="text-sm font-semibold text-foreground/90 transition-colors group-hover:text-primary">
                      {c.name}
                    </span>
                    <span className="block text-xs text-muted-foreground">{c.domain}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Jelajahi */}
          <nav aria-label={t("footer.col.explore")}>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-primary/85">
              {t("footer.col.explore")}
            </p>
            <ul className="space-y-2.5">
              {exploreLinks.map((l) => (
                <li key={l.page + l.label}>
                  <Link
                    href={pageToPath(l.page)}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {t(l.label)}
                  </Link>
                </li>
              ))}
              {/* Arsip & koleksi — label tetap bahasa Indonesia (di luar kamus i18n inti) */}
              <li>
                <Link
                  href="/galeri"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Galeri Perjalanan
                </Link>
              </li>
              <li>
                <Link
                  href="/testimoni"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Testimoni
                </Link>
              </li>
              <li>
                <Link
                  href="/kutipan"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Kutipan Peradaban
                </Link>
              </li>
              <li>
                <Link
                  href="/paket"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Paket Harga
                </Link>
              </li>
              <li>
                <Link
                  href="/rekam-jejak"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {t("footer.trail")}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Layanan */}
          <nav aria-label={t("footer.col.services")}>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-primary/85">
              {t("footer.col.services")}
            </p>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={pageToPath(`layanan-${s.slug}` as PageKey)}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {t(`svc.${s.slug}`)}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/sertifikasi"
                  className="text-sm font-semibold text-primary/90 transition-colors hover:text-primary"
                >
                  {t("footer.cert")}
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary/10 pt-7 sm:flex-row">
          <p className="text-center text-xs text-muted-foreground sm:text-left">
            © {new Date().getFullYear()} Gunara.web.id — Gugun Gunara / M. Lutfi Azmi /
            Prabu Danling / Santri Angon. {t("footer.rights")}
          </p>
          <motion.button
            type="button"
            whileHover={{ y: -2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 rounded-full border border-primary/25 px-4 py-2 text-xs font-semibold text-primary/90 transition-colors hover:border-primary/50 hover:text-primary"
            aria-label="Kembali ke atas"
          >
            <ArrowUp className="h-3.5 w-3.5" aria-hidden />
            {t("footer.top")}
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
