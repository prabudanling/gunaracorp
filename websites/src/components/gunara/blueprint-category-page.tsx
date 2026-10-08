import Link from "next/link";
import { ArrowRight, DraftingCompass, Layers } from "lucide-react";
import { PageShell } from "./page-shell";
import { PrevNext, RelatedLinks, type PagerItem } from "./pager";
import type { BlueprintCategory } from "./data";

// ------------------------------------------------------------
// BlueprintCategoryPage — halaman mandiri satu kategori blueprint.
// Nomor dokumen global dihitung dari rentang kategori (mis. "09–17")
// sehingga penomoran 39 dokumen tetap konsisten antar kategori.
// ------------------------------------------------------------
function rangeStart(range: string): number {
  const parsed = parseInt(range.split(/[–-]/)[0], 10);
  return Number.isNaN(parsed) ? 1 : parsed;
}

export function BlueprintCategoryPage({
  category,
  prev,
  next,
}: {
  category: BlueprintCategory;
  prev: PagerItem | null;
  next: PagerItem | null;
}) {
  const base = rangeStart(category.range);

  return (
    <PageShell
      page={`blueprint-${category.slug}`}
      eyebrow="Blueprint 39 Dokumen"
      title={category.category}
      lead={category.summary}
      backTo={{ label: "Ringkasan Blueprint", page: "blueprint" }}
    >
      <div className="mx-auto max-w-5xl">
        {/* Badge rentang dokumen */}
        <div className="mb-8 flex items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
            <Layers className="h-3.5 w-3.5" aria-hidden />
            Dokumen {category.range}
          </span>
        </div>

        {/* Daftar dokumen — kartu bernomor global */}
        <ol className="grid gap-4 sm:grid-cols-2">
          {category.documents.map((doc, i) => {
            const no = String(base + i).padStart(2, "0");
            return (
              <li
                key={doc.name}
                className="group flex items-start gap-4 rounded-2xl border border-primary/15 bg-card/50 p-5 transition-all duration-300 hover:border-primary/45 hover:bg-primary/[0.06]"
              >
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 font-display text-sm font-bold text-primary"
                  aria-hidden
                >
                  {no}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-foreground group-hover:text-primary md:text-base">
                    {doc.name}
                  </span>
                  <span className="mt-1 block text-xs leading-relaxed text-muted-foreground md:text-sm">
                    {doc.desc}
                  </span>
                </span>
              </li>
            );
          })}
        </ol>

        {/* CTA penyusunan blueprint */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <Link
            href="/layanan/enterprise-blueprint"
            className="group flex items-center gap-4 rounded-2xl border border-primary/20 bg-primary/[0.07] p-5 transition-colors hover:border-primary/50"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
              <DraftingCompass className="h-5 w-5 text-primary" aria-hidden />
            </span>
            <span>
              <span className="block text-sm font-semibold text-foreground group-hover:text-primary">
                Amanahkan Penyusunan Blueprint
              </span>
              <span className="mt-0.5 block text-xs text-muted-foreground">
                39 dokumen lahir dari realitas organisasi Anda
              </span>
            </span>
          </Link>
          <Link
            href="/kontak"
            className="group flex items-center justify-between gap-4 rounded-2xl border border-primary/20 bg-card/60 p-5 transition-colors hover:border-primary/50 hover:bg-primary/[0.06]"
          >
            <span className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
                <ArrowRight className="h-5 w-5 text-primary" aria-hidden />
              </span>
              <span>
                <span className="block text-sm font-semibold text-foreground group-hover:text-primary">
                  Konsultasi Awal
                </span>
                <span className="mt-0.5 block text-xs text-muted-foreground">
                  Diskusikan kategori yang paling mendesak
                </span>
              </span>
            </span>
            <ArrowRight
              className="h-5 w-5 shrink-0 text-primary transition-transform group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
        </div>

        {/* Navigasi prev/next antar kategori */}
        <PrevNext prev={prev} next={next} />

        {/* Tautan terkait */}
        <RelatedLinks
          title="Jelajahi Lebih Jauh"
          links={[
            { href: "/blueprint", label: "Ringkasan 39 Dokumen", desc: "Peta besar seluruh kategori blueprint" },
            { href: "/layanan/enterprise-blueprint", label: "Layanan Enterprise Blueprint", desc: "Proses, deliverable, dan investasinya" },
            { href: "/perusahaan", label: "Grup Perusahaan", desc: "5 perusahaan yang menjalankan standar ini" },
          ]}
        />
      </div>
    </PageShell>
  );
}
