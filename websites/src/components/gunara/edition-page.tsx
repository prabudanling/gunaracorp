import Link from "next/link";
import { ArrowRight, Feather, MailOpen, PenLine } from "lucide-react";
import { PageShell } from "./page-shell";
import { PrevNext, RelatedLinks, type PagerItem } from "./pager";
import { Reveal } from "./section";
import type { NewsletterEdition } from "./data";

// ------------------------------------------------------------
// EditionPage — halaman mandiri satu edisi Surat Peradaban.
// Server component; animasi paragraf via <Reveal> (client boundary).
// ------------------------------------------------------------
export function EditionPage({
  edition,
  prev,
  next,
}: {
  edition: NewsletterEdition;
  prev: PagerItem | null;
  next: PagerItem | null;
}) {
  // Kelompokkan paragraf per 2 agar Reveal tetap ringan & berirama.
  const chunks: string[][] = [];
  for (let i = 0; i < edition.body.length; i += 2) {
    chunks.push(edition.body.slice(i, i + 2));
  }

  return (
    <PageShell
      page={`surat-${edition.slug}`}
      eyebrow={`Surat Peradaban — ${edition.no}`}
      title={edition.title}
      lead={edition.summary}
      backTo={{ label: "Arsip Surat", page: "surat" }}
    >
      <div className="mx-auto max-w-3xl">
        {/* Meta kecil edisi */}
        <div className="mb-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-semibold text-primary">
            <MailOpen className="h-3.5 w-3.5" aria-hidden />
            {edition.no}
          </span>
          <span>{edition.date}</span>
          <span aria-hidden className="h-1 w-1 rounded-full bg-primary/40" />
          <span>Surat Peradaban — satu surat setiap Jumat</span>
        </div>

        {/* Isi surat */}
        <article className="relative overflow-hidden rounded-3xl border border-primary/20 bg-background/60 p-8 backdrop-blur-md md:p-12">
          <Feather
            className="absolute -top-3 right-6 h-12 w-12 text-primary/10"
            aria-hidden
          />
          <div className="space-y-8">
            {chunks.map((chunk, ci) => (
              <Reveal key={ci} delay={ci * 0.05}>
                <div className="space-y-5">
                  {chunk.map((par, pi) => (
                    <p
                      key={pi}
                      className="text-base leading-relaxed text-foreground/85 md:text-lg"
                    >
                      {par}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 border-t border-primary/15 pt-5 text-sm italic text-muted-foreground">
            — <span className="text-primary/90">Gugun Gunara</span>
          </p>
        </article>

        {/* CTA surat */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/surat"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_-8px_var(--royal)]"
          >
            <MailOpen className="h-4 w-4" aria-hidden />
            Berlangganan Gratis
          </Link>
          <Link
            href="/kontak"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-primary/35 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
          >
            <PenLine className="h-4 w-4" aria-hidden />
            Jawab Surat Ini
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        {/* Navigasi prev/next antar edisi */}
        <PrevNext prev={prev} next={next} />

        {/* Tautan terkait */}
        <RelatedLinks
          title="Baca Selanjutnya"
          links={[
            { href: "/surat", label: "Arsip Surat", desc: "Seluruh edisi Surat Peradaban" },
            { href: "/kutipan", label: "Kutipan Peradaban", desc: "Larik-larik kunci dari praktik" },
            { href: "/puisi", label: "Puisi & Refleksi", desc: "Ruang pemulihan jiwa Santri Angon" },
          ]}
        />
      </div>
    </PageShell>
  );
}
