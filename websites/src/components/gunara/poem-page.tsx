import Link from "next/link";
import { ArrowRight, BookOpen, MoonStar, Quote } from "lucide-react";
import { PageShell } from "./page-shell";
import { PrevNext, RelatedLinks, type PagerItem } from "./pager";
import type { Poem } from "./data";

// ------------------------------------------------------------
// PoemPage — halaman mandiri satu puisi Santri Angon.
// Server component; animasi via <Reveal> (client boundary).
// ------------------------------------------------------------
export function PoemPage({
  poem,
  prev,
  next,
}: {
  poem: Poem;
  prev: PagerItem | null;
  next: PagerItem | null;
}) {
  return (
    <PageShell
      page={`puisi-${poem.slug}`}
      eyebrow="Puisi — Pena Santri Angon"
      title={poem.title}
      lead={poem.note}
      backTo={{ label: "Arsip Puisi", page: "puisi" }}
    >
      <div className="mx-auto max-w-3xl">
        {/* Naskah puisi */}
        <figure className="relative overflow-hidden rounded-3xl border border-primary/20 bg-background/60 p-8 backdrop-blur-md md:p-12">
          <Quote className="absolute -top-3 right-6 h-12 w-12 text-primary/10" aria-hidden />
          <blockquote className="space-y-4">
            {poem.verses.map((v, i) => (
              <p
                key={i}
                className={`font-display italic leading-relaxed text-foreground/90 ${
                  i === 0 ? "text-xl md:text-2xl" : "text-base md:text-lg"
                }`}
              >
                {v}
              </p>
            ))}
          </blockquote>
          <figcaption className="mt-8 border-t border-primary/15 pt-5 text-sm italic text-muted-foreground">
            {poem.note} — <span className="text-primary/90">Santri Angon</span>
          </figcaption>
        </figure>

        {/* CTA terkait */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Link
            href="/karya/angon-puisi"
            className="group flex items-center gap-4 rounded-2xl border border-primary/20 bg-card/60 p-5 transition-colors hover:border-primary/50 hover:bg-primary/[0.06]"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
              <BookOpen className="h-5 w-5 text-primary" aria-hidden />
            </span>
            <span>
              <span className="block text-sm font-semibold text-foreground group-hover:text-primary">
                Antologi &ldquo;Angon&rdquo;
              </span>
              <span className="mt-0.5 block text-xs text-muted-foreground">
                60+ puisi & refleksi dalam satu buku
              </span>
            </span>
          </Link>
          <Link
            href="/mentoring"
            className="group flex items-center gap-4 rounded-2xl border border-primary/20 bg-primary/[0.07] p-5 transition-colors hover:border-primary/50"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
              <MoonStar className="h-5 w-5 text-primary" aria-hidden />
            </span>
            <span>
              <span className="block text-sm font-semibold text-foreground group-hover:text-primary">
                Butuh Didampingi?
              </span>
              <span className="mt-0.5 block text-xs text-muted-foreground">
                Mentoring Angon 90 hari — rahasia & penuh amanah
              </span>
            </span>
          </Link>
        </div>

        {/* Navigasi prev/next */}
        <PrevNext prev={prev} next={next} />

        {/* Puisi lainnya */}
        <RelatedLinks
          title="Larik-Larik Lain"
          links={[
            { href: "/puisi", label: "Arsip Puisi Lengkap", desc: "Kembali ke ruang pemulihan jiwa" },
            { href: "/kutipan", label: "Kutipan Peradaban", desc: "Larik-larik kunci dari praktik & refleksi" },
            { href: "/surat", label: "Surat Peradaban", desc: "Satu surat setiap Jumat — gratis" },
          ]}
        />

        <p className="mt-10 text-center text-xs text-muted-foreground">
          Puisi boleh dibagikan dengan mencantumkan nama{" "}
          <span className="text-primary/90">Santri Angon</span> dan tautan ke halaman ini.{" "}
          <Link href="/kontak" className="text-primary underline-offset-4 hover:underline">
            Izin pembacaan publik <ArrowRight className="inline h-3 w-3" aria-hidden />
          </Link>
        </p>
      </div>
    </PageShell>
  );
}
