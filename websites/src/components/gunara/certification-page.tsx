import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ClipboardCheck,
  Clock,
  GraduationCap,
} from "lucide-react";
import { PageShell } from "./page-shell";
import { PrevNext, RelatedLinks, type PagerItem } from "./pager";
import type { Certification } from "./data";

// ------------------------------------------------------------
// CertificationPage — halaman mandiri satu program sertifikasi.
// Server component; data datang dari route /sertifikasi/[slug].
// ------------------------------------------------------------
export function CertificationPage({
  cert,
  siblings,
  prev,
  next,
}: {
  cert: Certification;
  siblings: { slug: string; name: string; href: string }[];
  prev: PagerItem | null;
  next: PagerItem | null;
}) {
  return (
    <PageShell
      page={`sertifikasi-${cert.slug}`}
      eyebrow="Pusat Sertifikasi & Akreditasi"
      title={cert.name}
      lead={cert.description}
      backTo={{ label: "Pusat Sertifikasi", page: "sertifikasi" }}
    >
      <div className="mx-auto max-w-4xl">
        {/* Kartu meta program */}
        <dl className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-primary/15 bg-card/50 p-5">
            <dt className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              <GraduationCap className="h-3.5 w-3.5 text-primary" aria-hidden />
              Level
            </dt>
            <dd className="mt-2 text-sm font-semibold text-foreground">
              {cert.level}
            </dd>
          </div>
          <div className="rounded-2xl border border-primary/15 bg-card/50 p-5">
            <dt className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              <Clock className="h-3.5 w-3.5 text-primary" aria-hidden />
              Durasi
            </dt>
            <dd className="mt-2 text-sm font-semibold text-foreground">
              {cert.duration}
            </dd>
          </div>
        </dl>

        {/* Hasil yang dibawa pulang */}
        <section
          aria-label="Hasil yang dibawa pulang"
          className="mt-10 rounded-3xl border border-primary/20 bg-background/60 p-8 backdrop-blur-md md:p-10"
        >
          <h2 className="flex items-center gap-3 font-display text-xl font-bold text-foreground md:text-2xl">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary/60" />
            Hasil yang Dibawa Pulang
          </h2>
          <ul className="mt-6 space-y-4">
            {cert.outcomes.map((o) => (
              <li key={o} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/15">
                  <Check className="h-3.5 w-3.5 text-primary" aria-hidden />
                </span>
                <span className="text-sm leading-relaxed text-foreground/85 md:text-base">
                  {o}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Syarat peserta */}
        <section
          aria-label="Syarat peserta"
          className="mt-6 rounded-3xl border border-primary/20 bg-primary/[0.05] p-8 md:p-10"
        >
          <h2 className="flex items-center gap-3 font-display text-xl font-bold text-foreground md:text-2xl">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary/60" />
            Syarat Peserta
          </h2>
          <div className="mt-5 flex items-start gap-3">
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
              <ClipboardCheck className="h-5 w-5 text-primary" aria-hidden />
            </span>
            <p className="text-sm leading-relaxed text-foreground/85 md:text-base">
              {cert.requirements}
            </p>
          </div>
        </section>

        {/* CTA pendaftaran */}
        <div className="mt-8">
          <Link
            href="/kontak"
            className="group flex items-center justify-between gap-4 rounded-2xl border border-primary/25 bg-primary/[0.07] p-6 transition-colors hover:border-primary/50 md:p-7"
          >
            <span className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
                <BadgeCheck className="h-5 w-5 text-primary" aria-hidden />
              </span>
              <span>
                <span className="block text-sm font-semibold text-foreground group-hover:text-primary md:text-base">
                  Daftar / Tanyakan Program
                </span>
                <span className="mt-0.5 block text-xs text-muted-foreground">
                  Jadwal, investasi, dan kesiapan Anda — dibalas maksimal 1×24 jam kerja
                </span>
              </span>
            </span>
            <ArrowRight
              className="h-5 w-5 shrink-0 text-primary transition-transform group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
        </div>

        {/* Navigasi prev/next antar sertifikasi */}
        <PrevNext prev={prev} next={next} />

        {/* Tautan terkait */}
        <RelatedLinks
          title="Program Lainnya"
          links={[
            ...siblings.map((s) => ({
              href: s.href,
              label: s.name,
              desc: "Program sertifikasi Gunara",
            })),
            {
              href: "/sertifikasi",
              label: "Arsip Sertifikasi",
              desc: "Standar penilaian & akreditasi",
            },
            { href: "/layanan", label: "Layanan Konsultansi", desc: "Enam lini penugasan kelas peradaban" },
          ]}
        />
      </div>
    </PageShell>
  );
}
