import Link from "next/link";
import { ArrowRight, BadgeCheck, MessageCircleQuestion } from "lucide-react";
import { PageShell } from "./page-shell";
import { RelatedLinks } from "./pager";
import type { FaqItemWithSlug } from "./data";

// ------------------------------------------------------------
// FaqDetailPage — halaman mandiri satu pertanyaan & jawabannya.
// Server component; data datang dari route /faq/[slug].
// ------------------------------------------------------------
export function FaqDetailPage({
  item,
  related,
}: {
  item: FaqItemWithSlug;
  related: { slug: string; q: string; href: string }[];
}) {
  return (
    <PageShell
      page={`faq-${item.slug}`}
      eyebrow="Bantuan — Pertanyaan"
      title={item.q}
      backTo={{ label: "Semua FAQ", page: "faq" }}
    >
      <div className="mx-auto max-w-3xl">
        {/* Badge kategori */}
        <div className="mb-6 flex items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <BadgeCheck className="h-3.5 w-3.5" aria-hidden />
            {item.category}
          </span>
        </div>

        {/* Jawaban besar & nyaman dibaca */}
        <section
          aria-label="Jawaban"
          className="rounded-3xl border border-primary/20 bg-background/60 p-8 backdrop-blur-md md:p-12"
        >
          <p className="text-lg leading-relaxed text-foreground/90 md:text-xl md:leading-relaxed">
            {item.a}
          </p>
        </section>

        {/* CTA lanjutan */}
        <Link
          href="/kontak"
          className="group mt-8 flex items-center justify-between gap-4 rounded-2xl border border-primary/25 bg-primary/[0.07] p-6 transition-colors hover:border-primary/50 md:p-7"
        >
          <span className="flex items-center gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
              <MessageCircleQuestion className="h-5 w-5 text-primary" aria-hidden />
            </span>
            <span>
              <span className="block text-sm font-semibold text-foreground group-hover:text-primary md:text-base">
                Masih Ada Pertanyaan?
              </span>
              <span className="mt-0.5 block text-xs text-muted-foreground">
                Ceritakan konteks Anda — kami balas maksimal 1×24 jam kerja
              </span>
            </span>
          </span>
          <ArrowRight
            className="h-5 w-5 shrink-0 text-primary transition-transform group-hover:translate-x-1"
            aria-hidden
          />
        </Link>

        {/* FAQ terkait satu kategori + arsip */}
        <RelatedLinks
          title="Pertanyaan Terkait"
          links={[
            ...related.map((r) => ({ href: r.href, label: r.q })),
            {
              href: "/faq",
              label: "Arsip FAQ Lengkap",
              desc: "Semua pertanyaan dalam satu halaman",
            },
          ]}
        />
      </div>
    </PageShell>
  );
}
