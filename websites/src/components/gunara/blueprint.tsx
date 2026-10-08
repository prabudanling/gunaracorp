"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { FileText, LibraryBig } from "lucide-react";
import { blueprint } from "./data";
import { Reveal, SectionHeading } from "./section";

export function Blueprint() {
  const [first] = useState(blueprint[0]?.category);

  return (
    <section
      id="blueprint"
      aria-label="Blueprint 39 Dokumen"
      className="relative py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <SectionHeading
          i18nKey="sec.blueprint"
          eyebrow="Enterprise Architecture"
          title="Blueprint 39 Dokumen"
          description="Satu peradaban butuh arsitektur. Ini peta dokumen master yang kami gunakan untuk merancang perusahaan, instansi, dan ekosistem — dari visi hingga warisan."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:gap-14">
          {/* Accordion */}
          <Reveal>
            <Accordion
              type="single"
              collapsible
              defaultValue={first}
              className="w-full"
            >
              {blueprint.map((cat, idx) => (
                <AccordionItem
                  key={cat.category}
                  value={cat.category}
                  className="border-primary/15"
                >
                  <AccordionTrigger className="group rounded-xl px-4 py-5 text-left transition-colors hover:bg-primary/5 hover:no-underline data-[state=open]:bg-primary/5">
                    <span className="flex items-center gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 font-mono text-xs font-bold text-primary">
                        {cat.range.split("–")[0]}
                      </span>
                      <span>
                        <span className="block font-display text-base font-bold text-foreground md:text-lg">
                          {cat.category}
                        </span>
                        <span className="mt-0.5 block text-xs text-muted-foreground">
                          Dokumen {cat.range} • {cat.documents.length} dokumen
                        </span>
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-6">
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {cat.documents.map((doc, i) => (
                        <motion.li
                          key={doc.name}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.04, duration: 0.35 }}
                          className="flex items-start gap-2.5 rounded-lg border border-primary/10 bg-card/50 px-3.5 py-2.5 text-sm text-foreground/85"
                        >
                          <FileText
                            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary/70"
                            aria-hidden
                          />
                          <span className="leading-snug">
                            <span className="mr-2 font-mono text-[10px] text-primary/50">
                              {String(Number(cat.range.split("–")[0]) + i).padStart(2, "0")}
                            </span>
                            {doc.name}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>

          {/* Side panel */}
          <Reveal delay={0.15}>
            <div className="sticky top-24 space-y-5">
              <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-card/70 p-7">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl"
                />
                <LibraryBig className="h-8 w-8 text-primary" aria-hidden />
                <p className="mt-4 font-display text-5xl font-bold text-royal-gradient">
                  39
                </p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.2em] text-foreground/80">
                  Dokumen Master
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Dirancang setara standar McKinsey, BlackRock, Google, Harvard, dan
                  MIT — siap dipakai sebagai SOP, whitepaper, dan blueprint eksekusi.
                </p>
              </div>

              <div className="rounded-2xl border border-primary/15 bg-card/50 p-7">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary/85">
                  Untuk Siapa
                </p>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  {[
                    "Korporasi yang ingin tata kelola kelas dunia",
                    "Dinas & BUMN penyelenggara layanan publik",
                    "Startup yang menuju scale-up",
                    "Yayasan & komunitas peradaban",
                  ].map((w) => (
                    <li key={w} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                      {w}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/layanan"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_30px_-8px_var(--royal)]"
                >
                  Amankan Blueprint Anda
                </Link>
                <Link
                  href="/blueprint"
                  className="mt-3 inline-flex w-full items-center justify-center rounded-lg border border-primary/35 px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
                >
                  Lihat 39 Dokumen + Deskripsi →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
