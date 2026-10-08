import Link from "next/link";
import { ArrowRight, Check, MoonStar, ShieldCheck } from "lucide-react";
import { PageShell } from "./page-shell";
import { PrevNext, RelatedLinks, type PagerItem } from "./pager";
import { Reveal, StaggerGroup, StaggerItem } from "./section";
import type { MentoringPhase } from "./data";

// ------------------------------------------------------------
// MentoringPhasePage — halaman mandiri satu fase Mentoring Angon.
// Server component; animasi via Reveal/Stagger (client boundary).
// ------------------------------------------------------------
export function MentoringPhasePage({
  phase,
  prev,
  next,
}: {
  phase: MentoringPhase;
  prev: PagerItem | null;
  next: PagerItem | null;
}) {
  return (
    <PageShell
      page={`mentoring-${phase.slug}`}
      eyebrow={`Mentoring Angon — ${phase.phase} (${phase.period})`}
      title={phase.title}
      lead={phase.desc}
      backTo={{ label: "Program Mentoring", page: "mentoring" }}
    >
      <div className="mx-auto max-w-3xl">
        {/* Checklist fase */}
        <section aria-label={`Isi ${phase.phase}`}>
          <h2 className="flex items-center gap-3 font-display text-xl font-bold text-foreground md:text-2xl">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary/60" />
            Yang Ditemani di Fase Ini
          </h2>
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

        {/* Catatan kerahasiaan & keberpihakan */}
        <Reveal>
          <div className="mt-8 space-y-3">
            <div className="flex items-start gap-3 rounded-2xl border border-primary/15 bg-card/40 p-5 text-xs leading-relaxed text-muted-foreground md:text-sm">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary/80" aria-hidden />
              <p>
                Setiap percakapan bersifat privat dengan kerahasiaan penuh —
                tidak ada yang dicatat untuk publik, tidak ada yang dihakimi di
                ruang ini. Apa yang dibicarakan, tetap di ruang itu.
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-primary/15 bg-primary/[0.06] p-5 text-xs leading-relaxed text-foreground/80 md:text-sm">
              <MoonStar className="mt-0.5 h-5 w-5 shrink-0 text-primary/80" aria-hidden />
              <p>
                Bagi yang benar-benar tidak mampu, program ini gratis sepenuhnya
                — cukup jujur menyampaikan kondisinya. Kebaikan tidak boleh
                bergantung pada saldo.
              </p>
            </div>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/kontak"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_-8px_var(--royal)]"
            >
              Gantungkan Harapan Anda
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/puisi"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-primary/35 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
            >
              Puisi Santri Angon
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
              href: "/mentoring",
              label: "Program Mentoring 90 Hari",
              desc: "Gambaran utuh tiga fase pendampingan",
            },
            {
              href: "/puisi",
              label: "Puisi & Refleksi",
              desc: "Ruang pemulihan jiwa pena Santri Angon",
            },
            {
              href: "/kutipan",
              label: "Kutipan Peradaban",
              desc: "Larik-larik yang lahir dari ruang ini",
            },
          ]}
        />
      </div>
    </PageShell>
  );
}
