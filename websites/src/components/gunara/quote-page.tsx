import Link from "next/link";
import { ArrowRight, Feather, PenLine } from "lucide-react";
import { PageShell } from "./page-shell";
import { PrevNext, RelatedLinks, type PagerItem } from "./pager";
import type { QuoteItem } from "./data";

// ------------------------------------------------------------
// QuotePage — halaman mandiri satu kutipan + maknanya.
// Server component.
// ------------------------------------------------------------
export function QuotePage({
  item,
  prev,
  next,
}: {
  item: QuoteItem;
  prev: PagerItem | null;
  next: PagerItem | null;
}) {
  return (
    <PageShell
      page={`kutipan-${item.slug}`}
      eyebrow="Kutipan Peradaban"
      title="Satu Larik, Satu Prinsip"
      lead="Setiap kutipan di situs ini lahir dari pekerjaan yang nyata — bukan dari pengubinan motivasi. Inilah makna di balik lariknya."
      backTo={{ label: "Arsip Kutipan", page: "kutipan" }}
    >
      <div className="mx-auto max-w-3xl">
        {/* Kutipan utama */}
        <figure className="relative overflow-hidden rounded-3xl border border-primary/25 bg-primary/[0.06] p-8 md:p-12">
          <Feather className="mb-6 h-7 w-7 text-primary" aria-hidden />
          <blockquote className="font-display text-2xl font-semibold leading-snug text-royal-gradient md:text-3xl">
            &ldquo;{item.text}&rdquo;
          </blockquote>
          <figcaption className="mt-6 text-sm italic text-muted-foreground">
            — <span className="text-primary/90">Santri Angon</span>
          </figcaption>
        </figure>

        {/* Makna */}
        <section aria-label="Makna di balik larik" className="mt-10">
          <h2 className="flex items-center gap-3 font-display text-xl font-bold text-foreground md:text-2xl">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary/60" />
            Makna di Balik Larik
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/85 md:text-lg">
            {item.reflection}
          </p>
        </section>

        {/* CTA */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/karya"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_-8px_var(--royal)]"
          >
            <PenLine className="h-4 w-4" aria-hidden />
            Jelajahi Pustaka Pena Ini
          </Link>
          <Link
            href="/surat"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-primary/35 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
          >
            Terima Larik Baru Setiap Jumat
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <PrevNext prev={prev} next={next} />

        <RelatedLinks
          title="Lanjutkan Membaca"
          links={[
            { href: "/kutipan", label: "Arsip Kutipan Lengkap", desc: "Seluruh larik kunci di satu tempat" },
            { href: "/puisi", label: "Puisi & Refleksi", desc: "Ruang pemulihan jiwa Santri Angon" },
            { href: "/tentang", label: "Kisah di Balik Pena", desc: "Empat identitas, satu jalan" },
          ]}
        />
      </div>
    </PageShell>
  );
}
