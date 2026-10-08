"use client";

import { motion } from "framer-motion";
import { Check, Users, FileText, ArrowRight } from "lucide-react";
import { PageShell } from "./page-shell";
import { books } from "./data";
import { usePageStore } from "@/lib/navigation";
import { BookCover } from "./book-cover";
import { Badge } from "@/components/ui/badge";

export function BookPage({ slug }: { slug: string }) {
  const navigate = usePageStore((s) => s.navigate);
  const book = books.find((b) => b.slug === slug);
  const others = books.filter((b) => b.slug !== slug).slice(0, 3);

  if (!book) {
    return (
      <PageShell page="karya" title="Buku tidak ditemukan" backTo={{ label: "Pustaka", page: "karya" }}>
        <p className="text-muted-foreground">Buku yang Anda cari tidak tersedia.</p>
      </PageShell>
    );
  }

  return (
    <PageShell
      page={`buku-${book.slug}` as never}
      eyebrow={book.category}
      title={book.title}
      lead={book.subtitle}
      backTo={{ label: "Pustaka", page: "karya" }}
      cta={false}
    >
      <div className="grid gap-12 lg:grid-cols-[380px_1fr]">
        {/* Sampul + spesifikasi */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24, rotateY: -6 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl border border-primary/25 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]"
          >
            <BookCover book={book} sizes="380px" priority />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5">
              <Badge
                variant="outline"
                className="border-primary/40 bg-background/70 text-[10px] font-semibold uppercase tracking-widest text-primary"
              >
                {book.status}
              </Badge>
            </div>
          </motion.div>

          <dl className="mx-auto mt-6 max-w-sm space-y-3 rounded-2xl border border-primary/15 bg-card/60 p-6 text-sm">
            {[
              ["Penulis", book.author],
              ["Kategori", book.category],
              ["Halaman", `${book.pages} hlm`],
              ["Tahun", String(book.year)],
              ["Status", book.status],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center justify-between gap-4">
                <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{k}</dt>
                <dd className="text-right font-semibold text-foreground">{v}</dd>
              </div>
            ))}
          </dl>

          <button
            type="button"
            onClick={() => navigate("kontak", { subject: `Pembelian/Pra-order: ${book.title}` })}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-sm font-bold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_36px_-8px_var(--royal)]"
          >
            {book.status === "Pra-Order" ? "Pra-Order Sekarang" : "Pesan / Tanyakan Buku Ini"}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </button>
        </div>

        {/* Konten */}
        <div className="space-y-10">
          <div>
            <h2 className="mb-4 font-display text-xl font-bold text-foreground">Sinopsis</h2>
            <div className="space-y-4">
              {book.synopsis.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="text-sm leading-relaxed text-muted-foreground md:text-base"
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-primary/15 bg-card/60 p-6">
              <h3 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-primary/85">
                <FileText className="h-4 w-4" aria-hidden /> Di Dalam Buku
              </h3>
              <ol className="space-y-3">
                {book.chapters.map((c, i) => (
                  <li key={c} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="font-mono text-[10px] font-bold text-primary/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {c}
                  </li>
                ))}
              </ol>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-primary/15 bg-card/60 p-6">
                <h3 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-primary/85">
                  <Check className="h-4 w-4" aria-hidden /> Sorotan
                </h3>
                <ul className="space-y-2.5">
                  {book.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-primary/15 bg-card/60 p-6">
                <h3 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-primary/85">
                  <Users className="h-4 w-4" aria-hidden /> Untuk Siapa
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{book.audience}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Buku lainnya */}
      <div className="mt-16 border-t border-primary/10 pt-10">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-display text-xl font-bold text-foreground">Dari Pustaka yang Sama</h2>
          <button
            type="button"
            onClick={() => navigate("karya")}
            className="text-xs font-semibold text-primary transition-colors hover:text-primary/80"
          >
            Lihat Semua Buku →
          </button>
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          {others.map((o) => (
            <button
              key={o.slug}
              type="button"
              onClick={() => navigate(`buku-${o.slug}` as never)}
              className="group flex gap-4 rounded-2xl border border-primary/15 bg-card/50 p-4 text-left transition-all duration-300 hover:border-primary/40 hover:royal-glow"
            >
              <div className="relative aspect-[3/4] w-20 shrink-0 overflow-hidden rounded-lg border border-primary/20">
                <BookCover book={o} sizes="80px" />
              </div>
              <div className="min-w-0">
                <p className="truncate font-display text-sm font-bold text-foreground group-hover:text-primary">
                  {o.title}
                </p>
                <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{o.subtitle}</p>
                <p className="mt-2 text-[10px] uppercase tracking-widest text-primary/70">
                  {o.author}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
