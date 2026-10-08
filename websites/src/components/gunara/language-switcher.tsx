"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Search,
  Check,
  Loader2,
  Languages,
  AlertCircle,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { useI18n, useT, useActiveLanguage } from "@/lib/i18n/store";
import {
  LANGUAGES,
  REGIONS,
  TOTAL_LANGUAGES,
  type Region,
  type WorldLanguage,
} from "@/lib/i18n/languages";

// ------------------------------------------------------------
// LanguageSwitcher — Pilih Bahasa dari 195 negara.
// Dibuka dari navbar (desktop), Sheet mobile, dan footer
// melalui store: useI18n.getState().setSwitcherOpen(true)
// ------------------------------------------------------------
export function LanguageSwitcher() {
  const t = useT();
  const active = useActiveLanguage();
  const { toast } = useToast();
  const open = useI18n((s) => s.switcherOpen);
  const setOpen = useI18n((s) => s.setSwitcherOpen);
  const status = useI18n((s) => s.status);
  const loadLocale = useI18n((s) => s.loadLocale);

  const [query, setQuery] = useState("");
  const [region, setRegion] = useState<Region | "Semua">("Semua");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return LANGUAGES.filter((l) => {
      if (region !== "Semua" && l.region !== region) return false;
      if (!q) return true;
      return (
        l.native.toLowerCase().includes(q) ||
        l.country.toLowerCase().includes(q) ||
        l.countryEn.toLowerCase().includes(q) ||
        l.english.toLowerCase().includes(q) ||
        l.code.toLowerCase().includes(q) ||
        l.base.toLowerCase().startsWith(q)
      );
    });
  }, [query, region]);

  const regionCounts = useMemo(() => {
    const counts = new Map<Region, number>();
    for (const l of LANGUAGES) counts.set(l.region, (counts.get(l.region) ?? 0) + 1);
    return counts;
  }, []);

  const current = active && active.base !== "id" ? active : undefined;

  async function pick(lang: WorldLanguage) {
    if (lang.base === "id") {
      loadLocale("id-ID");
      toast({
        title: "Bahasa Indonesia",
        description: "Antarmuka kembali ke Bahasa Indonesia.",
      });
      return;
    }
    const willLoad = !(useI18n.getState().status === "ready" && useI18n.getState().locale === lang.code);
    loadLocale(lang.code);
    if (willLoad) {
      // Toast konfirmasi ditampilkan saat status siap via watcher di bawah
      window.setTimeout(() => {
        const st = useI18n.getState();
        if (st.status === "ready" && st.locale === lang.code) {
          toast({
            title: `${lang.native} — ${lang.country}`,
            description: `Antarmuka diterjemahkan AI ke ${lang.english}.`,
          });
        } else if (st.status === "error") {
          toast({
            title: "Terjemahan tertunda",
            description: "Engine sedang sibuk. Coba pilih bahasa lagi.",
            variant: "destructive",
          });
        }
      }, 2500);
    } else {
      toast({
        title: `${lang.native} — ${lang.country}`,
        description: `Antarmuka diterjemahkan AI ke ${lang.english}.`,
      });
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="max-h-[88vh] w-[94vw] max-w-3xl overflow-hidden border-primary/25 bg-background/95 p-0 backdrop-blur-2xl sm:rounded-3xl"
        aria-describedby={undefined}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/15 to-transparent" />

        <DialogHeader className="relative px-6 pb-4 pt-6 sm:px-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <DialogTitle className="flex items-center gap-2.5 font-display text-xl font-bold sm:text-2xl">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                  <Languages className="h-4.5 w-4.5 text-primary" aria-hidden />
                </span>
                <span className="text-royal-gradient">{t("lang.title")}</span>
              </DialogTitle>
              <DialogDescription className="mt-2 max-w-xl text-[13px] leading-relaxed">
                {t("lang.subtitle")}
              </DialogDescription>
            </div>
            <span className="mt-1 shrink-0 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-bold tracking-wider text-primary">
              {TOTAL_LANGUAGES}
            </span>
          </div>

          {/* Pencarian */}
          <div className="relative mt-4">
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("lang.search")}
              aria-label={t("lang.search")}
              className="h-11 rounded-2xl border-primary/20 bg-card/60 pl-10 text-sm focus-visible:ring-primary/40"
            />
          </div>

          {/* Filter region */}
          <div
            className="mt-3 flex flex-wrap items-center gap-1.5"
            role="group"
            aria-label="Filter wilayah"
          >
            <RegionChip
              label={t("lang.region.all")}
              count={TOTAL_LANGUAGES}
              active={region === "Semua"}
              onClick={() => setRegion("Semua")}
            />
            {REGIONS.map((r) => (
              <RegionChip
                key={r}
                label={r}
                count={regionCounts.get(r) ?? 0}
                active={region === r}
                onClick={() => setRegion(r)}
              />
            ))}
          </div>
        </DialogHeader>

        {/* Status terjemahan */}
        <AnimatePresence>
          {(status === "loading" || status === "ready" || status === "error") && current && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="relative overflow-hidden px-6 sm:px-8"
            >
              <div
                className={cn(
                  "flex items-center gap-2.5 rounded-2xl border px-4 py-2.5 text-[13px] font-medium",
                  status === "loading" &&
                    "border-primary/25 bg-primary/10 text-primary",
                  status === "ready" &&
                    "border-emerald-500/25 bg-emerald-500/10 text-emerald-300",
                  status === "error" &&
                    "border-red-500/25 bg-red-500/10 text-red-300"
                )}
                role="status"
                aria-live="polite"
              >
                {status === "loading" && (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                    <span>
                      {t("lang.loading")} {current.native} ({current.country})…
                    </span>
                  </>
                )}
                {status === "ready" && (
                  <>
                    <Check className="h-4 w-4" aria-hidden />
                    <span>
                      {t("lang.ready")} {current.native}.
                    </span>
                  </>
                )}
                {status === "error" && (
                  <>
                    <AlertCircle className="h-4 w-4" aria-hidden />
                    <span>Engine sedang sibuk — silakan pilih ulang.</span>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Grid 195 bahasa */}
        <div
          className="relative max-h-[46vh] overflow-y-auto px-6 pb-6 pt-1 scrollbar-royal sm:px-8"
          role="listbox"
          aria-label={`${TOTAL_LANGUAGES} bahasa`}
        >
          {filtered.length === 0 ? (
            <p className="py-10 text-center text-sm text-muted-foreground">
              Tidak ada hasil untuk “{query}”.
            </p>
          ) : (
            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {filtered.map((l) => {
                const isActive = active?.code === l.code;
                return (
                  <li key={l.code}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={isActive}
                      onClick={() => pick(l)}
                      className={cn(
                        "group flex h-full w-full flex-col items-start gap-0.5 rounded-xl border px-3 py-2.5 text-start transition-all duration-200",
                        isActive
                          ? "border-primary/60 bg-primary/15 shadow-[0_0_18px_-6px_var(--royal)]"
                          : "border-primary/10 bg-card/40 hover:border-primary/40 hover:bg-primary/5"
                      )}
                    >
                      <span className="flex w-full items-center justify-between gap-1.5">
                        <span
                          dir="auto"
                          className={cn(
                            "truncate text-[15px] font-semibold leading-snug",
                            isActive ? "text-primary" : "text-foreground/95"
                          )}
                        >
                          {l.native}
                        </span>
                        {isActive ? (
                          <Check className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden />
                        ) : (
                          l.rtl && (
                            <span className="shrink-0 rounded border border-primary/25 px-1 py-px text-[8px] font-bold tracking-wider text-primary/80">
                              {t("lang.rtl")}
                            </span>
                          )
                        )}
                      </span>
                      <span className="truncate text-[11px] text-muted-foreground">
                        {l.country} · {l.english}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Catatan */}
        <div className="border-t border-primary/10 px-6 py-3 sm:px-8">
          <p className="text-[11px] leading-relaxed text-muted-foreground">
            {t("lang.note")}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function RegionChip({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-semibold transition-colors",
        active
          ? "border-primary/60 bg-primary/15 text-primary"
          : "border-primary/15 bg-card/40 text-muted-foreground hover:border-primary/40 hover:text-primary"
      )}
    >
      {label}
      <span
        className={cn(
          "rounded-full px-1.5 text-[9px] font-bold",
          active ? "bg-primary/25 text-primary" : "bg-primary/10 text-primary/70"
        )}
      >
        {count}
      </span>
    </button>
  );
}

// ------------------------------------------------------------
// LanguageTrigger — tombol pemicu untuk navbar / footer / sheet
// ------------------------------------------------------------
export function LanguageTrigger({
  variant = "desktop",
  className,
}: {
  variant?: "desktop" | "compact";
  className?: string;
}) {
  const t = useT();
  const active = useActiveLanguage();
  const setOpen = useI18n((s) => s.setSwitcherOpen);
  const status = useI18n((s) => s.status);
  const isForeign = active && active.base !== "id";

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={() => setOpen(true)}
      aria-label={`${t("lang.trigger")}: ${active ? `${active.native} — ${active.country}` : "Indonesia"}`}
      className={cn(
        "group relative gap-1.5 border-primary/25 bg-transparent text-[12px] font-semibold text-foreground/85 transition-all hover:border-primary/60 hover:text-primary",
        variant === "compact" && "h-9 px-2.5",
        className
      )}
    >
      <Globe
        className={cn(
          "h-3.5 w-3.5 text-primary transition-transform duration-500 group-hover:rotate-180",
          status === "loading" && "animate-spin"
        )}
        aria-hidden
      />
      {variant === "desktop" ? (
        <>
          <span className="max-w-24 truncate">
            {isForeign ? active.native : "ID"}
          </span>
          <span className="hidden text-[10px] font-bold text-primary/70 md:inline">
            195
          </span>
        </>
      ) : (
        <span className="hidden text-[10px] font-bold text-primary/70 sm:inline">
          195
        </span>
      )}
      {isForeign && (
        <span
          className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_var(--royal)]"
          aria-hidden
        />
      )}
    </Button>
  );
}
