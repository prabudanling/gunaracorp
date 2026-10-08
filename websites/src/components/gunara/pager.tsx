import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

// ------------------------------------------------------------
// PrevNext — navigasi prev/next antar halaman detail sejenis.
// Server component: murni <Link>, tanpa state.
// ------------------------------------------------------------
export type PagerItem = { slug: string; title: string; href: string };

export function PrevNext({
  prev,
  next,
}: {
  prev: PagerItem | null;
  next: PagerItem | null;
}) {
  if (!prev && !next) return null;
  return (
    <nav
      aria-label="Navigasi antar halaman"
      className="mt-12 grid gap-4 border-t border-primary/15 pt-8 sm:grid-cols-2"
    >
      {prev ? (
        <Link
          href={prev.href}
          className="group flex items-center gap-4 rounded-2xl border border-primary/20 bg-card/50 p-5 transition-colors hover:border-primary/50 hover:bg-primary/[0.06]"
          aria-label={`Sebelumnya: ${prev.title}`}
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 transition-colors group-hover:bg-primary/20">
            <ArrowLeft className="h-4 w-4 text-primary" aria-hidden />
          </span>
          <span className="min-w-0">
            <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Sebelumnya
            </span>
            <span className="block truncate text-sm font-semibold text-foreground group-hover:text-primary">
              {prev.title}
            </span>
          </span>
        </Link>
      ) : (
        <span aria-hidden className="hidden sm:block" />
      )}
      {next ? (
        <Link
          href={next.href}
          className="group flex items-center justify-end gap-4 rounded-2xl border border-primary/20 bg-card/50 p-5 text-right transition-colors hover:border-primary/50 hover:bg-primary/[0.06] sm:col-start-2"
          aria-label={`Berikutnya: ${next.title}`}
        >
          <span className="min-w-0">
            <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Berikutnya
            </span>
            <span className="block truncate text-sm font-semibold text-foreground group-hover:text-primary">
              {next.title}
            </span>
          </span>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 transition-colors group-hover:bg-primary/20">
            <ArrowRight className="h-4 w-4 text-primary" aria-hidden />
          </span>
        </Link>
      ) : null}
    </nav>
  );
}

// ------------------------------------------------------------
// SiblingGrid — deretan tautan item sejenis (koleksi terkait)
// ------------------------------------------------------------
export function RelatedLinks({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string; desc?: string }[];
}) {
  if (links.length === 0) return null;
  return (
    <section aria-label={title} className="mt-14">
      <h2 className="mb-5 font-display text-xl font-bold text-foreground md:text-2xl">
        {title}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="group rounded-2xl border border-primary/15 bg-card/50 p-5 transition-all duration-300 hover:border-primary/45 hover:bg-primary/[0.06]"
          >
            <p className="text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
              {l.label}
            </p>
            {l.desc && (
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                {l.desc}
              </p>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}
