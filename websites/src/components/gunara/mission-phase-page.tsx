import Link from "next/link";
import { ArrowRight, Check, Handshake, ScrollText } from "lucide-react";
import { PageShell } from "./page-shell";
import { PrevNext, RelatedLinks, type PagerItem } from "./pager";
import { Reveal, StaggerGroup, StaggerItem } from "./section";
import { missionPhases, type MissionPhase } from "./data";
import { cn } from "@/lib/utils";

// ------------------------------------------------------------
// PhaseProgress — indikator 4 titik fase (buatan sendiri, div).
// Titik = tautan ke halaman fase lain (tidak ada jalan buntu).
// ------------------------------------------------------------
const ROMAN = ["I", "II", "III", "IV"];

function PhaseProgress({ activeIndex }: { activeIndex: number }) {
  return (
    <nav aria-label="Posisi fase dalam peta jalan misi" className="relative">
      {/* Rel penghubung */}
      <div aria-hidden className="absolute left-[12.5%] right-[12.5%] top-[18px] h-px bg-primary/15" />
      <div
        aria-hidden
        className="absolute top-[18px] h-px bg-primary/70"
        style={{ left: "12.5%", width: `${(activeIndex / (missionPhases.length - 1)) * 75}%` }}
      />
      <div className="relative grid grid-cols-4">
        {missionPhases.map((p, i) => {
          const state =
            i < activeIndex ? "past" : i === activeIndex ? "now" : "future";
          return (
            <Link
              key={p.slug}
              href={`/misi/${p.slug}`}
              aria-current={state === "now" ? "step" : undefined}
              className="group flex flex-col items-center gap-2 text-center"
            >
              <span
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-full border font-display text-xs font-bold transition-all",
                  state === "past" &&
                    "border-primary bg-primary text-primary-foreground",
                  state === "now" &&
                    "border-primary bg-primary/20 text-primary shadow-[0_0_18px_-4px_var(--royal)]",
                  state === "future" &&
                    "border-primary/20 bg-card/60 text-muted-foreground group-hover:border-primary/45"
                )}
              >
                {ROMAN[i] ?? i + 1}
              </span>
              <span
                className={cn(
                  "text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors md:text-[11px]",
                  state === "now" ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                )}
              >
                {p.period}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

// ------------------------------------------------------------
// MissionPhasePage — halaman mandiri satu fase Misi Peradaban.
// Server component; animasi via Reveal/Stagger (client boundary).
// ------------------------------------------------------------
export function MissionPhasePage({
  phase,
  prev,
  next,
}: {
  phase: MissionPhase;
  prev: PagerItem | null;
  next: PagerItem | null;
}) {
  const activeIndex = missionPhases.findIndex((p) => p.slug === phase.slug);

  return (
    <PageShell
      page={`misi-${phase.slug}`}
      eyebrow={`Misi Peradaban — ${phase.phase}`}
      title={phase.title}
      lead={`${phase.phase} · ${phase.period}`}
      backTo={{ label: "Peta Jalan Misi", page: "misi" }}
    >
      <div className="mx-auto max-w-3xl">
        {/* Posisi fase dalam 4 tahap */}
        <Reveal>
          <div className="rounded-3xl border border-primary/15 bg-card/40 p-6 md:p-8">
            <PhaseProgress activeIndex={activeIndex} />
          </div>
        </Reveal>

        {/* Checklist fase */}
        <section aria-label={`Agenda ${phase.phase}`} className="mt-10">
          <h2 className="flex items-center gap-3 font-display text-xl font-bold text-foreground md:text-2xl">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary/60" />
            Agenda Fase Ini
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Setiap butir adalah tahap kerja yang terukur — bukan cita-cita yang
            melayang. Fase ini selesai ketika seluruh butirnya berdiri.
          </p>
          <StaggerGroup className="mt-6 space-y-4">
            {phase.items.map((item) => (
              <StaggerItem key={item}>
                <div className="flex items-start gap-4 rounded-2xl border border-primary/15 bg-card/50 p-5 transition-colors hover:border-primary/35 md:p-6">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/15">
                    <Check className="h-4 w-4 text-primary" aria-hidden />
                  </span>
                  <p className="pt-1.5 text-sm leading-relaxed text-foreground/90 md:text-base">
                    {item}
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
              <Handshake className="h-4 w-4" aria-hidden />
              Ikut Berkolaborasi dalam Misi
            </Link>
            <Link
              href="/blueprint"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-primary/35 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
            >
              <ScrollText className="h-4 w-4" aria-hidden />
              Baca Blueprint 39 Dokumen
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
              href: "/misi",
              label: "Arsip Misi — Empat Fase",
              desc: "Peta jalan lengkap menuju satu miliar jiwa",
            },
            {
              href: "/karya",
              label: "Pustaka Peradaban",
              desc: "Buku-buku yang menjadi kendaraan misi",
            },
            {
              href: "/jurnal",
              label: "Jurnal & Riset",
              desc: "Publikasi Q1/Q2 yang menjaga metode tetap teruji",
            },
          ]}
        />
      </div>
    </PageShell>
  );
}
