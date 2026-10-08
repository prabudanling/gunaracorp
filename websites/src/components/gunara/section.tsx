"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { useT } from "@/lib/i18n/store";

// ------------------------------------------------------------
// Reveal — animasi fade-up saat elemen masuk viewport
// ------------------------------------------------------------
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ------------------------------------------------------------
// Stagger container + item untuk list animasi berurutan
// ------------------------------------------------------------
export function StaggerGroup({
  children,
  className,
  stagger = 0.09,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 24,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: reduce ? 0 : y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ------------------------------------------------------------
// SectionHeading — judul bab dengan ornamen royal.
// i18nKey opsional: "sec.identities" → memakai t("sec.identities.",
// eyebrow|title) bila terjemahan tersedia, fallback ke prop asli.
// ------------------------------------------------------------
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  i18nKey,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  i18nKey?: string;
}) {
  const t = useT();
  const eyebrowText = i18nKey ? t(`${i18nKey}.eyebrow`) : eyebrow;
  const titleText = i18nKey ? t(`${i18nKey}.title`) : title;
  return (
    <Reveal
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center" : "text-left"
      )}
    >
      <div
        className={cn(
          "mb-4 flex items-center gap-3",
          align === "center" && "justify-center"
        )}
      >
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary/60" />
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/90">
          {eyebrowText}
        </span>
        <span className="h-px w-8 bg-gradient-to-l from-transparent to-primary/60" />
      </div>
      <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">
        <span className="text-royal-gradient">{titleText}</span>
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
