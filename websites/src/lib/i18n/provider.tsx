"use client";

import { useEffect } from "react";
import { useI18n } from "./store";
import { detectBrowserLanguage, getLanguage } from "./languages";

// ------------------------------------------------------------
// I18nProvider — dipasang di root layout.
// Tugas: (1) setelah rehidrasi, muat terjemahan locale tersimpan;
// (2) auto-detect bahasa browser pada kunjungan pertama;
// (3) sinkronkan <html lang> dan arah teks (LTR/RTL).
// ------------------------------------------------------------
export function I18nProvider({ children }: { children: React.ReactNode }) {
  const hydrated = useI18n((s) => s.hydrated);
  const locale = useI18n((s) => s.locale);
  const status = useI18n((s) => s.status);

  // Rehidrasi manual pasca-mount (skipHydration: true di store) —
  // menjamin hidrasi React berjalan dengan state awal yang identik
  // dengan HTML server, lalu preferensi bahasa diterapkan setelahnya.
  useEffect(() => {
    void useI18n.persist.rehydrate();
  }, []);

  // Muat terjemahan setelah rehidrasi / saat locale berubah via provider
  useEffect(() => {
    if (!hydrated) return;
    const state = useI18n.getState();
    const storedLocale = state.locale;

    if (storedLocale && storedLocale !== "id-ID") {
      if (state.status === "idle" || state.status === "error") {
        void state.loadLocale(storedLocale);
      }
      return;
    }

    // Kunjungan pertama: auto-detect bahasa browser (bukan Indonesia)
    const detected = detectBrowserLanguage();
    if (detected) void state.loadLocale(detected.code);
  }, [hydrated]);

  // Sinkronkan atribut dokumen: lang + dir
  useEffect(() => {
    const meta = getLanguage(locale);
    const html = document.documentElement;
    html.lang = meta ? meta.code : "id";
    html.dir = meta?.rtl ? "rtl" : "ltr";
  }, [locale, status]);

  return <>{children}</>;
}
