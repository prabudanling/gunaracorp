import Link from "next/link";
import { ArrowRight, Compass, ImageOff } from "lucide-react";
import Image from "next/image";
import { PageShell } from "./page-shell";
import { StaggerGroup, StaggerItem } from "./section";
import { photos } from "./data";

// ------------------------------------------------------------
// GaleriPage — arsip enam foto asli pemilik (bukan AI).
// Setiap kartu = halaman mandiri /galeri/[slug].
// Server component; animasi via Stagger (client boundary).
// ------------------------------------------------------------
export function GaleriPage() {
  return (
    <PageShell
      page="galeri"
      lead="Enam foto asli dari arsip pribadi — bukan hasil generasi AI — yang mendokumentasikan perjalanan 2009–2026: dari meja kerja pertama, tahun-tahun pembentukan, hingga ekosistem lima perusahaan. Setiap foto punya kisahnya."
      cta
    >
      <StaggerGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((p) => (
          <StaggerItem key={p.slug}>
            <Link
              href={`/galeri/${p.slug}`}
              className="group block overflow-hidden rounded-2xl border border-primary/20 bg-card/50 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_20px_50px_-24px_var(--royal)]"
              aria-label={`${p.title} — baca kisah lengkap`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                {/* Overlay caption */}
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-background via-background/70 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                  <p className="font-display text-sm font-bold text-foreground md:text-base">
                    {p.title}
                  </p>
                  <p className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">
                    {p.caption}
                  </p>
                </div>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerGroup>

      {/* Catatan keaslian */}
      <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-primary/15 bg-card/40 p-5 text-center text-xs leading-relaxed text-muted-foreground">
        <ImageOff className="mx-auto mb-2 h-4 w-4 text-primary/70" aria-hidden />
        Seluruh foto di galeri ini adalah foto asli pemilik situs — bukan gambar
        hasil generasi AI. Foto-foto lain di situs (cover buku, latar hero)
        dinyatakan terang-terangan sebagai ilustrasi.
      </div>

      {/* Jalan lanjut */}
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        <Link
          href="/rekam-jejak"
          className="group flex items-center gap-4 rounded-2xl border border-primary/20 bg-card/60 p-5 transition-colors hover:border-primary/50 hover:bg-primary/[0.06]"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
            <Compass className="h-5 w-5 text-primary" aria-hidden />
          </span>
          <span>
            <span className="block text-sm font-semibold text-foreground group-hover:text-primary">
              Rekam Jejak 2009–2026
            </span>
            <span className="mt-0.5 block text-xs text-muted-foreground">
              Garis waktu lengkap di balik foto-foto ini
            </span>
          </span>
        </Link>
        <Link
          href="/perusahaan"
          className="group flex items-center gap-4 rounded-2xl border border-primary/20 bg-card/60 p-5 transition-colors hover:border-primary/50 hover:bg-primary/[0.06]"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
            <ArrowRight className="h-5 w-5 text-primary" aria-hidden />
          </span>
          <span>
            <span className="block text-sm font-semibold text-foreground group-hover:text-primary">
              Grup Perusahaan
            </span>
            <span className="mt-0.5 block text-xs text-muted-foreground">
              Lima perusahaan yang lahir dari perjalanan ini
            </span>
          </span>
        </Link>
      </div>
    </PageShell>
  );
}
