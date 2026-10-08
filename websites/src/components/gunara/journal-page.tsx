import Link from "next/link";
import {
  ArrowRight,
  Award,
  CalendarDays,
  GraduationCap,
  Landmark,
  Microscope,
  Activity,
} from "lucide-react";
import { PageShell } from "./page-shell";
import { PrevNext, RelatedLinks, type PagerItem } from "./pager";
import type { JournalEntry } from "./data";

// ------------------------------------------------------------
// JournalPage — halaman mandiri satu artikel jurnal/riset.
// Server component; data datang dari route /jurnal/[slug].
// ------------------------------------------------------------
function statusBadgeClass(status: string): string {
  if (status === "Terbit")
    return "border-emerald-400/35 bg-emerald-400/10 text-emerald-300";
  if (status === "Dalam Review")
    return "border-amber-400/35 bg-amber-400/10 text-amber-300";
  // Penulisan & Proposal — netral royal
  return "border-primary/30 bg-primary/10 text-foreground/80";
}

function statusNote(status: string): string {
  if (status === "Terbit")
    return "Naskah telah diterima dan diterbitkan pada venue yang tercantum.";
  if (status === "Dalam Review")
    return "Naskah sedang menempuh proses telaah sejawat (peer review) di jurnal target.";
  if (status === "Penulisan")
    return "Naskah sedang disusun dan dirampungkan sebelum diajukan.";
  return "Naskah berada pada tahap usulan ke jurnal target yang ditetapkan.";
}

export function JournalPage({
  journal,
  prev,
  next,
}: {
  journal: JournalEntry;
  prev: PagerItem | null;
  next: PagerItem | null;
}) {
  return (
    <PageShell
      page={`jurnal-${journal.slug}`}
      eyebrow="Jurnal & Riset — M. Lutfi Azmi"
      title={journal.title}
      lead={journal.abstract}
      backTo={{ label: "Arsip Jurnal", page: "jurnal" }}
    >
      <div className="mx-auto max-w-4xl">
        {/* Kartu meta publikasi */}
        <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-primary/15 bg-card/50 p-5 lg:col-span-2">
            <dt className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              <Landmark className="h-3.5 w-3.5 text-primary" aria-hidden />
              Venue
            </dt>
            <dd className="mt-2 text-sm font-semibold leading-snug text-foreground">
              {journal.venue}
            </dd>
          </div>

          <div className="rounded-2xl border border-primary/15 bg-card/50 p-5">
            <dt className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              <Award className="h-3.5 w-3.5 text-primary" aria-hidden />
              Kuartil
            </dt>
            <dd className="mt-2">
              <span className="inline-flex items-center rounded-full border border-primary/40 bg-primary/15 px-3 py-1 text-xs font-bold tracking-wide text-primary">
                {journal.quartile}
              </span>
            </dd>
          </div>

          <div className="rounded-2xl border border-primary/15 bg-card/50 p-5">
            <dt className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              <CalendarDays className="h-3.5 w-3.5 text-primary" aria-hidden />
              Tahun
            </dt>
            <dd className="mt-2 text-sm font-semibold text-foreground">
              {journal.year}
            </dd>
          </div>

          <div className="rounded-2xl border border-primary/15 bg-card/50 p-5 lg:col-span-2">
            <dt className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              <Microscope className="h-3.5 w-3.5 text-primary" aria-hidden />
              Bidang
            </dt>
            <dd className="mt-2 text-sm font-semibold text-foreground">
              {journal.field}
            </dd>
          </div>

          <div className="rounded-2xl border border-primary/15 bg-card/50 p-5 lg:col-span-2">
            <dt className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              <Activity className="h-3.5 w-3.5 text-primary" aria-hidden />
              Status
            </dt>
            <dd className="mt-2">
              <span
                className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold tracking-wide ${statusBadgeClass(journal.status)}`}
              >
                {journal.status}
              </span>
            </dd>
          </div>
        </dl>

        {/* Abstrak penuh */}
        <section
          aria-label="Abstrak artikel"
          className="mt-10 rounded-3xl border border-primary/20 bg-background/60 p-8 backdrop-blur-md md:p-10"
        >
          <h2 className="flex items-center gap-3 font-display text-xl font-bold text-foreground md:text-2xl">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary/60" />
            Abstrak
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/85 md:text-lg">
            {journal.abstract}
          </p>
          <p className="mt-5 border-t border-primary/10 pt-4 text-sm italic leading-relaxed text-muted-foreground">
            {statusNote(journal.status)}
          </p>
        </section>

        {/* CTA khusus riset */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Link
            href="/layanan/penerbitan-buku-jurnal"
            className="group flex items-center gap-4 rounded-2xl border border-primary/20 bg-primary/[0.07] p-5 transition-colors hover:border-primary/50"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
              <GraduationCap className="h-5 w-5 text-primary" aria-hidden />
            </span>
            <span>
              <span className="block text-sm font-semibold text-foreground group-hover:text-primary">
                Mentoring Publikasi Q1/Q2
              </span>
              <span className="mt-0.5 block text-xs text-muted-foreground">
                Dari kesiapan naskah hingga menanggapi reviewer
              </span>
            </span>
          </Link>
          <Link
            href="/kontak"
            className="group flex items-center gap-4 rounded-2xl border border-primary/20 bg-card/60 p-5 transition-colors hover:border-primary/50 hover:bg-primary/[0.06]"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
              <ArrowRight className="h-5 w-5 text-primary" aria-hidden />
            </span>
            <span>
              <span className="block text-sm font-semibold text-foreground group-hover:text-primary">
                Diskusikan Riset Ini
              </span>
              <span className="mt-0.5 block text-xs text-muted-foreground">
                Kolaborasi riset, sitasi, atau penugasan serumpun
              </span>
            </span>
          </Link>
        </div>

        {/* Navigasi prev/next antar artikel */}
        <PrevNext prev={prev} next={next} />

        {/* Tautan terkait */}
        <RelatedLinks
          title="Lanjut Menelusuri"
          links={[
            { href: "/jurnal", label: "Arsip Jurnal", desc: "Seluruh lini riset M. Lutfi Azmi" },
            { href: "/karya", label: "Pustaka Buku", desc: "Karya strategi & refleksi yang menerbitkan" },
            { href: "/sertifikasi", label: "Pusat Sertifikasi", desc: "Kompetensi yang terukur & terverifikasi" },
          ]}
        />
      </div>
    </PageShell>
  );
}
