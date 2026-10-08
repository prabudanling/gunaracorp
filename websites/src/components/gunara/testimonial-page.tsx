import Link from "next/link";
import { ArrowRight, Quote, ShieldCheck } from "lucide-react";
import { PageShell } from "./page-shell";
import { PrevNext, RelatedLinks, type PagerItem } from "./pager";
import { Reveal } from "./section";
import type { TestimonialItem } from "./data";

// ------------------------------------------------------------
// TestimonialPage — halaman mandiri satu testimoni klien.
// Server component; animasi via <Reveal> (client boundary).
// ------------------------------------------------------------
export function TestimonialPage({
  item,
  prev,
  next,
}: {
  item: TestimonialItem;
  prev: PagerItem | null;
  next: PagerItem | null;
}) {
  return (
    <PageShell
      page={`testimoni-${item.slug}`}
      eyebrow="Suara Klien"
      title={item.name}
      lead={item.role}
      backTo={{ label: "Semua Testimoni", page: "testimoni" }}
    >
      <div className="mx-auto max-w-3xl">
        {/* Kutipan utama */}
        <Reveal>
          <figure className="relative overflow-hidden rounded-3xl border border-primary/25 bg-primary/[0.06] p-8 md:p-12">
            <Quote className="mb-6 h-7 w-7 text-primary" aria-hidden />
            <blockquote className="font-display text-xl font-semibold leading-snug text-royal-gradient md:text-2xl">
              &ldquo;{item.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-sm italic text-muted-foreground">
              — {item.name}, <span className="text-primary/90">{item.role}</span>
            </figcaption>
          </figure>
        </Reveal>

        {/* Catatan kerahasiaan identitas */}
        <Reveal delay={0.08}>
          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-primary/15 bg-card/40 p-5 text-xs leading-relaxed text-muted-foreground md:text-sm">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary/80" aria-hidden />
            <p>
              Identitas klien kami jaga sesuai amanah kontrak. Nama jabatan yang
              tampil di atas adalah konteks penugasan, bukan pengesahan publik —
              detail ruang lingkup dan hasil kerja dapat dijelaskan secara
              tertutup saat sesi perkenalan.
            </p>
          </div>
        </Reveal>

        {/* CTA lanjutan */}
        <Reveal delay={0.12}>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/kontak"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_-8px_var(--royal)]"
            >
              Mulai Penugasan Anda
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/layanan"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-primary/35 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
            >
              Jelajahi Layanan
            </Link>
          </div>
        </Reveal>

        {/* Navigasi prev/next */}
        <PrevNext prev={prev} next={next} />

        {/* Tautan terkait */}
        <RelatedLinks
          title="Jalan Lanjut"
          links={[
            {
              href: "/testimoni",
              label: "Arsip Testimoni",
              desc: "Enam suara klien dari penugasan nyata",
            },
            {
              href: "/layanan/enterprise-blueprint",
              label: "Enterprise Blueprint",
              desc: "39 dokumen sistem untuk organisasi Anda",
            },
            {
              href: "/rekam-jejak",
              label: "Rekam Jejak 2009–2026",
              desc: "17+ tahun perjalanan praktik konsultansi",
            },
          ]}
        />
      </div>
    </PageShell>
  );
}
