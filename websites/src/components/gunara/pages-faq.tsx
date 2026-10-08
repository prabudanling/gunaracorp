"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircleQuestion, Link2 } from "lucide-react";
import Link from "next/link";
import { PageShell } from "./page-shell";
import { faqs, faqItems } from "./data";
import { usePageStore } from "@/lib/navigation";
import { cn } from "@/lib/utils";

const categories = ["Semua", ...Array.from(new Set(faqs.map((f) => f.category)))];

// slug FAQ mengikuti urutan faqs di data.ts (faq-1..12) — dipetakan via faqItems
const faqSlugByQuestion = new Map(faqItems.map((f) => [f.q, f.slug]));
const faqSlug = (q: string) =>
  faqSlugByQuestion.get(q) ?? `faq-${faqs.findIndex((f) => f.q === q) + 1}`;

export function FaqPage() {
  const [cat, setCat] = useState("Semua");
  const navigate = usePageStore((s) => s.navigate);

  const list = faqs.filter((f) => cat === "Semua" || f.category === cat);

  return (
    <PageShell
      page="faq"
      lead="Jawaban atas pertanyaan yang paling sering masuk. Jika jawaban Anda belum ada di sini, pintu kontak selalu terbuka di bawah."
    >
      {/* Filter kategori */}
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCat(c)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-xs font-semibold transition-all duration-300",
              cat === c
                ? "border-primary/60 bg-primary/15 text-primary"
                : "border-primary/20 text-muted-foreground hover:border-primary/40 hover:text-foreground"
            )}
            aria-pressed={cat === c}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Accordion FAQ */}
      <Accordion type="single" collapsible className="w-full">
        {list.map((f, i) => (
          <AccordionItem key={f.q} value={`faq-${cat}-${i}`} className="border-primary/15">
            <AccordionTrigger className="rounded-xl px-4 py-4 text-left transition-colors hover:bg-primary/5 hover:no-underline data-[state=open]:bg-primary/5">
              <span className="flex items-start gap-3 pr-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary/25 bg-primary/10 font-mono text-[10px] font-bold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-base font-bold text-foreground md:text-lg">
                  {f.q}
                </span>
                <Link
                  href={`/faq/${faqSlug(f.q)}`}
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`Tautan jawaban: ${f.q}`}
                  className="ml-auto mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary/25 text-primary/70 transition-colors hover:border-primary/60 hover:text-primary"
                >
                  <Link2 className="h-3 w-3" aria-hidden />
                </Link>
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-6 pl-14">
              <p className="text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* CTA */}
      <div className="mt-12 rounded-2xl border border-primary/25 bg-primary/[0.06] p-8 text-center">
        <MessageCircleQuestion className="mx-auto h-8 w-8 text-primary" aria-hidden />
        <h2 className="mt-3 font-display text-xl font-bold text-foreground">
          Pertanyaan Anda Belum Terjawab?
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
          Kirim langsung — kami balas personal, bukan template.
        </p>
        <button
          type="button"
          onClick={() => navigate("kontak", { subject: "Pertanyaan Umum" })}
          className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_-8px_var(--royal)]"
        >
          Tanya Langsung
        </button>
      </div>
    </PageShell>
  );
}
