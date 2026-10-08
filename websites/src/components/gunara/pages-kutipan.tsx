import Link from "next/link";
import { ArrowRight, Feather, MoonStar, ScrollText } from "lucide-react";
import { PageShell } from "./page-shell";
import { quoteItems } from "./data";

// ------------------------------------------------------------
// KutipanPage — arsip seluruh kutipan, tiap kartu = halaman mandiri.
// Server component.
// ------------------------------------------------------------
export function KutipanPage() {
  return (
    <PageShell
      page="kutipan"
      lead="Larik-larik yang lahir dari meja klien, sudut mushala, dan halaman buku. Setiap kutipan punya halaman sendiri — dengan makna di baliknya. Klik satu, biarkan ia bekerja."
      cta={false}
    >
      <div className="grid gap-5 md:grid-cols-2">
        {quoteItems.map((q, i) => (
          <Link
            key={q.slug}
            href={`/kutipan/${q.slug}`}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-primary/15 bg-card/50 p-6 transition-all duration-300 hover:border-primary/45 hover:bg-primary/[0.06] md:p-7"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -right-3 -top-6 font-display text-[88px] font-bold leading-none text-primary/[0.08] transition-colors group-hover:text-primary/[0.16]"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <Feather className="h-5 w-5 text-primary" aria-hidden />
            <p className="mt-4 flex-1 font-display text-base italic leading-relaxed text-foreground/90 md:text-lg">
              &ldquo;{q.text}&rdquo;
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-primary/80 transition-colors group-hover:text-primary">
              Makna di balik larik
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                aria-hidden
              />
            </span>
          </Link>
        ))}
      </div>

      {/* Jalan lanjut */}
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        <Link
          href="/puisi"
          className="group flex items-center gap-4 rounded-2xl border border-primary/20 bg-card/60 p-5 transition-colors hover:border-primary/50"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
            <MoonStar className="h-5 w-5 text-primary" aria-hidden />
          </span>
          <span>
            <span className="block text-sm font-semibold text-foreground group-hover:text-primary">
              Ruang Pemulihan Jiwa
            </span>
            <span className="mt-0.5 block text-xs text-muted-foreground">
              Puisi & refleksi Santri Angon
            </span>
          </span>
        </Link>
        <Link
          href="/surat"
          className="group flex items-center gap-4 rounded-2xl border border-primary/20 bg-card/60 p-5 transition-colors hover:border-primary/50"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
            <ScrollText className="h-5 w-5 text-primary" aria-hidden />
          </span>
          <span>
            <span className="block text-sm font-semibold text-foreground group-hover:text-primary">
              Surat Peradaban
            </span>
            <span className="mt-0.5 block text-xs text-muted-foreground">
              Kutipan baru setiap Jumat, langsung ke email
            </span>
          </span>
        </Link>
      </div>
    </PageShell>
  );
}
