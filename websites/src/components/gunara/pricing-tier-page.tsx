import Link from "next/link";
import { ArrowRight, Check, FileText, MessagesSquare, PenLine } from "lucide-react";
import { PageShell } from "./page-shell";
import { PrevNext, RelatedLinks, type PagerItem } from "./pager";
import { Reveal, StaggerGroup, StaggerItem } from "./section";
import type { PricingTier } from "./data";

// ------------------------------------------------------------
// PricingTierPage — halaman mandiri satu paket kolaborasi.
// Server component; animasi via Reveal/Stagger (client boundary).
// ------------------------------------------------------------
const START_STEPS = [
  {
    no: "01",
    icon: PenLine,
    title: "Kirim Konteks",
    desc: "Ceritakan situasi Anda melalui halaman Kontak — satu paragraf yang jujur sudah cukup untuk memulai.",
  },
  {
    no: "02",
    icon: MessagesSquare,
    title: "Call Diagnosis",
    desc: "Sesi perkenalan untuk memetakan masalah, menakar kebutuhan, dan memastikan skema ini yang tepat.",
  },
  {
    no: "03",
    icon: FileText,
    title: "Penawaran Tertulis",
    desc: "Lingkup, tahapan per milestone, dan biaya dikirim tertulis — pekerjaan baru dimulai setelah disepakati.",
  },
];

export function PricingTierPage({
  tier,
  prev,
  next,
}: {
  tier: PricingTier;
  prev: PagerItem | null;
  next: PagerItem | null;
}) {
  return (
    <PageShell
      page={`paket-${tier.slug}`}
      eyebrow="Paket Kolaborasi"
      title={tier.name}
      lead={tier.ideal}
      backTo={{ label: "Semua Paket", page: "paket" }}
    >
      <div className="mx-auto max-w-3xl">
        {/* Blok harga */}
        <Reveal>
          <div className="rounded-3xl border border-primary/25 bg-primary/[0.06] p-8 text-center md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/80">
              Investasi
            </p>
            <p className="mt-3 font-display text-4xl font-bold text-royal-gradient md:text-5xl">
              {tier.price}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{tier.unit}</p>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              {tier.ideal}
            </p>
          </div>
        </Reveal>

        {/* Yang Anda Dapatkan */}
        <section aria-label="Yang Anda Dapatkan" className="mt-10">
          <h2 className="flex items-center gap-3 font-display text-xl font-bold text-foreground md:text-2xl">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary/60" />
            Yang Anda Dapatkan
          </h2>
          <StaggerGroup className="mt-6 space-y-3">
            {tier.features.map((f) => (
              <StaggerItem key={f}>
                <div className="flex items-start gap-3.5 rounded-2xl border border-primary/15 bg-card/50 p-4 transition-colors hover:border-primary/35 md:p-5">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/15">
                    <Check className="h-3.5 w-3.5 text-primary" aria-hidden />
                  </span>
                  <p className="pt-0.5 text-sm leading-relaxed text-foreground/90 md:text-base">
                    {f}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        {/* Cara Memulai */}
        <section aria-label="Cara Memulai" className="mt-12">
          <h2 className="flex items-center gap-3 font-display text-xl font-bold text-foreground md:text-2xl">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary/60" />
            Cara Memulai
          </h2>
          <StaggerGroup className="mt-6 grid gap-4 sm:grid-cols-3">
            {START_STEPS.map((s) => (
              <StaggerItem key={s.no} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-primary/15 bg-card/50 p-5">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl font-bold text-primary/40">
                      {s.no}
                    </span>
                    <s.icon className="h-5 w-5 text-primary" aria-hidden />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-foreground">
                    {s.title}
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        {/* CTA */}
        <Reveal>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/kontak"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_-8px_var(--royal)]"
            >
              Ajukan Paket Ini
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/paket"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-primary/35 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
            >
              Bandingkan Semua Paket
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
              href: "/layanan",
              label: "Enam Jalur Layanan",
              desc: "Ruang lingkup pekerjaan di balik setiap paket",
            },
            {
              href: "/faq",
              label: "Pertanyaan yang Sering Diajukan",
              desc: "Cara kerja, kerahasiaan, dan pembayaran",
            },
            {
              href: "/rekam-jejak",
              label: "Rekam Jejak 2009–2026",
              desc: "17+ tahun praktik di balik setiap penugasan",
            },
          ]}
        />
      </div>
    </PageShell>
  );
}
