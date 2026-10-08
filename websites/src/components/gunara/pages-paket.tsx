import Link from "next/link";
import { ArrowRight, Check, ScrollText } from "lucide-react";
import { PageShell } from "./page-shell";
import { StaggerGroup, StaggerItem } from "./section";
import { pricingTiers } from "./data";
import { cn } from "@/lib/utils";

// ------------------------------------------------------------
// PaketPage — arsip tiga paket kolaborasi.
// Setiap kartu = halaman mandiri /paket/[slug].
// Server component; animasi via Stagger (client boundary).
// ------------------------------------------------------------
export function PaketPage() {
  return (
    <PageShell
      page="paket"
      lead="Tiga skema kerja untuk tiga skala kebutuhan: satu sesi diagnosis untuk pemula, penugasan penuh untuk korporasi, dan kemitraan program bagi ekosistem. Semua penugasan dikontrak tertulis dan bertahap per milestone."
      cta
    >
      <StaggerGroup className="grid gap-6 md:grid-cols-3" stagger={0.12}>
        {pricingTiers.map((tier) => (
          <StaggerItem key={tier.slug} className="h-full">
            <Link
              href={`/paket/${tier.slug}`}
              className={cn(
                "group relative flex h-full flex-col rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 md:p-7",
                tier.highlight
                  ? "border-primary/60 bg-primary/[0.08] ring-1 ring-primary/60"
                  : "border-primary/15 bg-card/50 hover:border-primary/45 hover:bg-primary/[0.05]"
              )}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-primary-foreground shadow-[0_0_20px_-6px_var(--royal)]">
                  Paling Diminati
                </span>
              )}
              <p className="font-display text-lg font-bold text-foreground">
                {tier.name}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{tier.ideal}</p>
              <p className="mt-5 font-display text-3xl font-bold text-royal-gradient md:text-4xl">
                {tier.price}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{tier.unit}</p>
              <ul className="mt-5 flex-1 space-y-2.5 border-t border-primary/10 pt-5">
                {tier.features.slice(0, 4).map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm text-foreground/85"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-primary/80 transition-colors group-hover:text-primary">
                Lihat Detail Paket
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
              </span>
            </Link>
          </StaggerItem>
        ))}
      </StaggerGroup>

      {/* Catatan kontrak */}
      <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-primary/15 bg-card/40 p-5 text-center text-xs leading-relaxed text-muted-foreground">
        <ScrollText className="mx-auto mb-2 h-4 w-4 text-primary/70" aria-hidden />
        Semua penugasan dikontrak tertulis &amp; bertahap per milestone. Lingkup,
        tahapan, dan biaya disepakati sebelum pekerjaan dimulai — tidak ada biaya
        tersembunyi.
      </div>

      {/* Jalan lanjut */}
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        <Link
          href="/layanan"
          className="group flex items-center gap-4 rounded-2xl border border-primary/20 bg-card/60 p-5 transition-colors hover:border-primary/50 hover:bg-primary/[0.06]"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
            <ArrowRight className="h-5 w-5 text-primary" aria-hidden />
          </span>
          <span>
            <span className="block text-sm font-semibold text-foreground group-hover:text-primary">
              Enam Jalur Layanan
            </span>
            <span className="mt-0.5 block text-xs text-muted-foreground">
              Strategis, perizinan, pangan, digital — hingga publikasi
            </span>
          </span>
        </Link>
        <Link
          href="/faq"
          className="group flex items-center gap-4 rounded-2xl border border-primary/20 bg-card/60 p-5 transition-colors hover:border-primary/50 hover:bg-primary/[0.06]"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
            <ScrollText className="h-5 w-5 text-primary" aria-hidden />
          </span>
          <span>
            <span className="block text-sm font-semibold text-foreground group-hover:text-primary">
              Pertanyaan yang Sering Diajukan
            </span>
            <span className="mt-0.5 block text-xs text-muted-foreground">
              Cara kerja, kerahasiaan, dan skema pembayaran
            </span>
          </span>
        </Link>
      </div>
    </PageShell>
  );
}
