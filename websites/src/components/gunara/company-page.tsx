"use client";

import { ArrowRight, CheckCircle2, Users, ExternalLink } from "lucide-react";
import { companies } from "./data";
import { PageShell } from "./page-shell";
import { Reveal } from "./section";

// ------------------------------------------------------------
// CompanyPage — halaman detail per perusahaan: deskripsi,
// layanan, diferensiasi, audiens, dan jalan lanjutan.
// ------------------------------------------------------------
export function CompanyPage({ slug }: { slug: string }) {
  const company = companies.find((c) => c.slug === slug);
  if (!company) return null;

  const others = companies.filter((c) => c.slug !== slug);

  return (
    <PageShell
      page={`perusahaan-${company.slug}` as never}
      title={company.name}
      eyebrow={company.domain}
      lead={company.tagline}
      backTo={{ label: "Grup Perusahaan", page: "perusahaan" }}
    >
      {/* Deskripsi utama */}
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <Reveal>
            <div className="space-y-4">
              {company.longDescription.map((p, i) => (
                <p
                  key={i}
                  className="text-sm leading-relaxed text-muted-foreground md:text-base"
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          {/* Layanan perusahaan */}
          <Reveal delay={0.1}>
            <h2 className="mt-12 font-display text-2xl font-bold md:text-3xl">
              <span className="text-royal-gradient">Layanan {company.name}</span>
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {company.services.map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-3 rounded-2xl border border-primary/15 bg-primary/[0.04] p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span className="text-sm font-medium text-foreground/90">{s}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          <Reveal delay={0.15}>
            <div className="rounded-3xl border border-primary/20 bg-primary/[0.06] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary/80">
                Mengapa Berbeda
              </p>
              <ul className="mt-4 space-y-3">
                {company.differentiators.map((d) => (
                  <li key={d} className="flex items-start gap-2.5 text-sm text-foreground/85">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="rounded-3xl border border-primary/15 bg-background/60 p-6">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" aria-hidden />
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary/80">
                  Untuk Siapa
                </p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {company.audience}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="rounded-3xl border border-dashed border-primary/30 p-6 text-center">
              <p className="text-sm text-muted-foreground">
                Kunjungi situs resmi {company.name}
              </p>
              <a
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 rounded-lg border border-primary/35 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
              >
                {company.domain}
                <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Perusahaan lain */}
      <Reveal delay={0.1}>
        <h2 className="mt-16 font-display text-2xl font-bold md:text-3xl">
          <span className="text-royal-gradient">Perusahaan Lainnya</span>
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((o) => (
            <a
              key={o.slug}
              href={`/perusahaan/${o.slug}`}
              className="group rounded-2xl border border-primary/15 bg-primary/[0.04] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <p className="font-display text-base font-bold transition-colors group-hover:text-primary">
                {o.name}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{o.domain}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary/90">
                Lihat profil
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </span>
            </a>
          ))}
        </div>
      </Reveal>
    </PageShell>
  );
}
