import Link from "next/link";
import { ArrowRight, Compass, Quote, ShieldCheck } from "lucide-react";
import { PageShell } from "./page-shell";
import { StaggerGroup, StaggerItem } from "./section";
import { testimonialItems } from "./data";

// ------------------------------------------------------------
// TestimoniPage — arsip enam testimoni klien.
// Setiap kartu = halaman mandiri /testimoni/[slug].
// Server component; animasi via Stagger (client boundary).
// ------------------------------------------------------------
export function TestimoniPage() {
  return (
    <PageShell
      page="testimoni"
      lead="Seluruh testimoni di ruang ini lahir dari penugasan nyata — enterprise blueprint, kolaborasi akademik, program pangan daerah, hingga mentoring pemulihan. Sesuai amanah kontrak, identitas klien kami rahasiakan; yang kami tampilkan hanya hasil kerja dan suara mereka."
      cta
    >
      <StaggerGroup className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {testimonialItems.map((t, i) => (
          <StaggerItem key={t.slug} className="h-full">
            <Link
              href={`/testimoni/${t.slug}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-primary/15 bg-card/50 p-6 transition-all duration-300 hover:border-primary/45 hover:bg-primary/[0.06]"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-3 -top-6 font-display text-[88px] font-bold leading-none text-primary/[0.07] transition-colors group-hover:text-primary/[0.14]"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex items-center justify-between">
                <Quote className="h-5 w-5 text-primary" aria-hidden />
                <span
                  className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary/70"
                  title="Identitas klien dirahasiakan sesuai amanah"
                >
                  <ShieldCheck className="h-3 w-3" aria-hidden />
                  Rahasia
                </span>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85 line-clamp-5">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-5 border-t border-primary/15 pt-4">
                <p className="text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                  {t.name}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">{t.role}</p>
              </div>
              <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-primary/80 transition-colors group-hover:text-primary">
                Baca Keseluruhan
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
              </span>
            </Link>
          </StaggerItem>
        ))}
      </StaggerGroup>

      {/* Catatan kerahasiaan */}
      <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-primary/15 bg-card/40 p-5 text-center text-xs leading-relaxed text-muted-foreground">
        <ShieldCheck className="mx-auto mb-2 h-4 w-4 text-primary/70" aria-hidden />
        Nama institusi disamarkan demi kerahasiaan kontrak yang sedang dan telah
        berjalan. Ruang lingkup penugasan dapat dijelaskan secara tertutup saat
        sesi perkenalan.
      </div>

      {/* Jalan lanjut */}
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        <Link
          href="/rekam-jejak"
          className="group flex items-center gap-4 rounded-2xl border border-primary/20 bg-card/60 p-5 transition-colors hover:border-primary/50 hover:bg-primary/[0.06]"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
            <Compass className="h-5 w-5 text-primary" aria-hidden />
          </span>
          <span>
            <span className="block text-sm font-semibold text-foreground group-hover:text-primary">
              Rekam Jejak 2009–2026
            </span>
            <span className="mt-0.5 block text-xs text-muted-foreground">
              17+ tahun perjalanan di balik setiap testimoni
            </span>
          </span>
        </Link>
        <Link
          href="/paket"
          className="group flex items-center gap-4 rounded-2xl border border-primary/20 bg-card/60 p-5 transition-colors hover:border-primary/50 hover:bg-primary/[0.06]"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
            <ArrowRight className="h-5 w-5 text-primary" aria-hidden />
          </span>
          <span>
            <span className="block text-sm font-semibold text-foreground group-hover:text-primary">
              Paket Kolaborasi
            </span>
            <span className="mt-0.5 block text-xs text-muted-foreground">
              Tiga skema kerja — dari sesi diagnosis hingga kemitraan
            </span>
          </span>
        </Link>
      </div>
    </PageShell>
  );
}
