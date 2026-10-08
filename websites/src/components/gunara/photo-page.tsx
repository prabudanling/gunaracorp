import Link from "next/link";
import { ArrowRight, Camera } from "lucide-react";
import Image from "next/image";
import { PageShell } from "./page-shell";
import { PrevNext, RelatedLinks, type PagerItem } from "./pager";
import { Reveal } from "./section";
import { photos, type Photo } from "./data";

// ------------------------------------------------------------
// PhotoPage — halaman mandiri satu foto galeri + kisahnya.
// Server component; animasi via <Reveal> (client boundary).
// ------------------------------------------------------------
export function PhotoPage({
  photo,
  prev,
  next,
}: {
  photo: Photo;
  prev: PagerItem | null;
  next: PagerItem | null;
}) {
  const others = photos
    .filter((p) => p.slug !== photo.slug)
    .slice(0, 3)
    .map((p) => ({
      href: `/galeri/${p.slug}`,
      label: p.title,
      desc: p.caption,
    }));

  return (
    <PageShell
      page={`galeri-${photo.slug}`}
      eyebrow="Galeri Perjalanan"
      title={photo.title}
      lead={photo.caption}
      backTo={{ label: "Galeri Lengkap", page: "galeri" }}
    >
      <div className="mx-auto max-w-4xl">
        {/* Foto utama */}
        <Reveal>
          <figure>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-primary/20 bg-card/50 md:aspect-[16/10]">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                priority
                sizes="(max-width:768px) 100vw, 900px"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-2 px-1 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Camera className="h-3.5 w-3.5 text-primary/70" aria-hidden />
                {photo.moment}
              </span>
              <span>Foto asli — bukan hasil generasi AI</span>
            </figcaption>
          </figure>
        </Reveal>

        {/* Kisah di balik foto */}
        <section aria-label="Kisah di balik foto" className="mt-10">
          <h2 className="flex items-center gap-3 font-display text-xl font-bold text-foreground md:text-2xl">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary/60" />
            Kisah di Balik Foto
          </h2>
          <div className="mt-5 space-y-5">
            {photo.story.map((par, i) => (
              <Reveal key={i} delay={0.06 * i}>
                <p className="text-base leading-relaxed text-foreground/85 md:text-lg">
                  {par}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Konteks terkait */}
        <Reveal>
          <Link
            href={photo.contextHref}
            className="group mt-10 flex items-center gap-4 rounded-2xl border border-primary/20 bg-primary/[0.07] p-5 transition-colors hover:border-primary/50 md:p-6"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
              <ArrowRight className="h-5 w-5 text-primary" aria-hidden />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                {photo.context}
              </span>
              <span className="mt-0.5 block text-xs text-muted-foreground">
                Lanjutkan membaca konteks foto ini
              </span>
            </span>
            <ArrowRight
              className="h-5 w-5 shrink-0 text-primary transition-transform group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
        </Reveal>

        {/* Navigasi prev/next */}
        <PrevNext prev={prev} next={next} />

        {/* Foto lainnya */}
        <RelatedLinks
          title="Foto Lainnya"
          links={[
            ...others,
            {
              href: "/rekam-jejak",
              label: "Rekam Jejak 2009–2026",
              desc: "Garis waktu lengkap perjalanan 17+ tahun",
            },
          ]}
        />
      </div>
    </PageShell>
  );
}
