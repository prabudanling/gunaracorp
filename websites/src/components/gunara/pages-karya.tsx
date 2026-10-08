"use client";

import { PageShell } from "./page-shell";
import { books } from "./data";
import { BookCard } from "./book-card";
import { StaggerGroup, StaggerItem } from "./section";

const categories = ["Semua", ...Array.from(new Set(books.map((b) => b.category)))];

export function KaryaPage() {
  return (
    <PageShell
      page="karya"
      lead="Setiap buku adalah senjata strategis. Pustaka ini berjalan menuju 500 judul — telusuri tiap karya, buka halamannya, dan temukan yang Anda butuhkan."
    >
      {/* Katalog */}
      <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <BookCard />
      </StaggerGroup>

      {/* Info kategori */}
      <div className="mt-14 rounded-2xl border border-primary/15 bg-card/50 p-6 md:p-8">
        <h2 className="font-display text-lg font-bold text-foreground">
          Kategori dalam Pustaka
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((c) => (
            <span
              key={c}
              className="rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary/90"
            >
              {c}
            </span>
          ))}
        </div>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
          Roadmap lengkap 500 judul mencakup strategi & kenegaraan, pangan & logistik,
          energi & kimia, teknologi & AI, leadership, penulisan, hingga puisi & refleksi
          — ditulis bertahap dan diterbitkan berkala.
        </p>
      </div>
    </PageShell>
  );
}
