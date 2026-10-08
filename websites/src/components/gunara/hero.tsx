"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowDown, BadgeCheck, Building2, Briefcase, FileStack } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useT } from "@/lib/i18n/store";

const ease = [0.22, 1, 0.36, 1] as const;

const PORTRAIT = "/gunara/foto/gugun-gunara-konsultan-bisnis-senior.jpeg";

export function Hero() {
  const t = useT();
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "22%"]);
  const fgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-14%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      id="beranda"
      ref={ref}
      aria-label="Pembuka"
      className="relative flex min-h-[100svh] items-center overflow-hidden grain"
    >
      {/* Background parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-20">
        <Image
          src="/gunara/hero-bg.png"
          alt="Latar epik perpustakaan peradaban dengan nuansa ungu royal"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-55"
        />
      </motion.div>

      {/* Overlay gradient */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(13,8,22,0.74)_58%,rgba(13,8,22,0.96)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent"
      />

      <motion.div
        style={{ y: fgY, opacity: fade }}
        className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-32 sm:px-6 md:px-8"
      >
        <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">
          {/* Kolom teks */}
          <div className="mx-auto max-w-4xl text-center lg:mx-0 lg:text-left">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 backdrop-blur-sm"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary/95 md:text-xs">
                {t("hero.eyebrow")}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease }}
              className="font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl"
            >
              <span className="text-foreground">{t("hero.h1a")}</span>{" "}
              <span className="text-royal-gradient">{t("hero.h1b")}</span>{" "}
              <span className="text-foreground">{t("hero.h1c")}</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.48, ease }}
              className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg lg:mx-0"
            >
              {t("hero.sub1")}{" "}
              <strong className="font-semibold text-foreground/90">Gugun Gunara</strong>{" "}
              {t("hero.sub2")}
            </motion.p>

            {/* Identity chips */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.65 } } }}
              className="mt-8 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start"
            >
              {[
                { chip: "Gugun Gunara", sub: "hero.chip.sub1" },
                { chip: "M. Lutfi Azmi", sub: "hero.chip.sub2" },
                { chip: "Prabu Danling", sub: "hero.chip.sub3" },
                { chip: "Santri Angon", sub: "hero.chip.sub4" },
              ].map((item) => (
                <motion.div
                  key={item.chip}
                  variants={{
                    hidden: { opacity: 0, y: 18, scale: 0.96 },
                    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease } },
                  }}
                  whileHover={{ y: -3, transition: { duration: 0.25 } }}
                  className="group cursor-default rounded-xl border border-primary/20 bg-card/60 px-4 py-2 text-left backdrop-blur-md transition-colors hover:border-primary/45"
                >
                  <p className="text-sm font-semibold text-foreground">{item.chip}</p>
                  <p className="text-[11px] uppercase tracking-wider text-primary/80">{t(item.sub)}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.05, ease }}
              className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row lg:items-start lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="group w-full bg-primary text-primary-foreground shadow-[0_0_36px_-8px_var(--royal)] transition-all duration-300 hover:shadow-[0_0_50px_-6px_var(--royal)] sm:w-auto"
              >
                <a href="#identitas">
                  {t("hero.cta.explore")}
                  <ArrowDown className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full border-primary/40 bg-background/40 text-foreground backdrop-blur-sm transition-colors hover:border-primary hover:text-primary sm:w-auto"
              >
                <Link href="/layanan/konsultasi-strategis">{t("hero.cta.consult")}</Link>
              </Button>
            </motion.div>

            {/* Mini stats — faktual */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.25 }}
              className="mx-auto mt-12 grid max-w-2xl grid-cols-3 divide-x divide-primary/15 rounded-2xl border border-primary/15 bg-card/40 backdrop-blur-md lg:mx-0"
            >
              {[
                { icon: Briefcase, value: "17+", label: "hero.stat.years" },
                { icon: Building2, value: "5", label: "hero.stat.companies" },
                { icon: FileStack, value: "39", label: "hero.stat.docs" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col items-center gap-1 px-2 py-4 md:py-5">
                  <s.icon className="mb-1 h-4 w-4 text-primary/85" aria-hidden />
                  <span className="font-display text-lg font-bold text-foreground md:text-2xl">
                    {s.value}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:text-xs">
                    {t(s.label)}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Kolom potret — foto asli */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.55, ease }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-primary/30 shadow-[0_30px_80px_-20px_rgba(139,92,246,0.45)]">
              <Image
                src={PORTRAIT}
                alt="Gugun Gunara — konsultan bisnis senior 17+ tahun, pendiri 5 perusahaan"
                fill
                priority
                sizes="(max-width: 1024px) 384px, 480px"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,8,22,0.85)] via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-display text-2xl font-bold text-white">Gugun Gunara</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-royal-soft">
                  {t("hero.portrait.role")}
                </p>
              </div>
            </div>

            {/* Badge mengambang */}
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.15, ease }}
              className="absolute -left-4 top-8 hidden items-center gap-2.5 rounded-2xl border border-primary/25 bg-background/85 px-4 py-3 backdrop-blur-xl sm:flex"
            >
              <BadgeCheck className="h-5 w-5 text-primary" aria-hidden />
              <div>
                <p className="text-xs font-bold text-foreground">{t("hero.badge1.t")}</p>
                <p className="text-[10px] text-muted-foreground">{t("hero.badge1.s")}</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.3, ease }}
              className="absolute -right-3 bottom-24 hidden items-center gap-2.5 rounded-2xl border border-primary/25 bg-background/85 px-4 py-3 backdrop-blur-xl sm:flex"
            >
              <Building2 className="h-5 w-5 text-primary" aria-hidden />
              <div>
                <p className="text-xs font-bold text-foreground">{t("hero.badge2.t")}</p>
                <p className="text-[10px] text-muted-foreground">{t("hero.badge2.s")}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#identitas"
        aria-label="Gulir ke bawah"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 pb-[env(safe-area-inset-bottom)]"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-primary/40 p-1.5"
        >
          <span className="h-2 w-1 rounded-full bg-primary" />
        </motion.span>
      </motion.a>
    </section>
  );
}
