"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { sourceFor } from "./dictionary";
import { getLanguage } from "./languages";

// ------------------------------------------------------------
// Gunara.web.id — I18n Store
// Antarmuka inti diterjemahkan AI ke 195 bahasa; hasil disimpan
// permanen di SQLite (via /api/i18n/translate) + memori client.
// ------------------------------------------------------------

export type I18nStatus = "idle" | "loading" | "ready" | "error";

type I18nState = {
  locale: string;
  status: I18nStatus;
  translations: Record<string, string>;
  hydrated: boolean;
  switcherOpen: boolean;
  setSwitcherOpen: (open: boolean) => void;
  setHydrated: () => void;
  loadLocale: (code: string) => Promise<void>;
  resetToIndonesian: () => void;
};

export const useI18n = create<I18nState>()(
  persist(
    (set, get) => ({
      locale: "id-ID",
      status: "idle",
      translations: {},
      hydrated: false,
      switcherOpen: false,
      setSwitcherOpen: (open) => set({ switcherOpen: open }),
      setHydrated: () => set({ hydrated: true }),

      loadLocale: async (code) => {
        const meta = getLanguage(code);
        if (!meta) return;
        if (meta.base === "id") {
          get().resetToIndonesian();
          return;
        }
        if (get().locale === meta.code && get().status === "ready") return;
        set({ locale: meta.code, status: "loading" });
        try {
          const res = await fetch("/api/i18n/translate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ lang: meta.code }),
          });
          const data = (await res.json()) as {
            ok?: boolean;
            translations?: Record<string, string>;
            error?: string;
          };
          if (!res.ok || !data.ok || !data.translations) {
            throw new Error(data.error || "Gagal menerjemahkan");
          }
          set({ translations: data.translations, status: "ready" });
        } catch {
          set({ status: "error" });
        }
      },

      resetToIndonesian: () =>
        set({ locale: "id-ID", translations: {}, status: "idle" }),
    }),
    {
      name: "gunara-i18n",
      storage: createJSONStorage(() => localStorage),
      partialize: (s) => ({ locale: s.locale }) as Partial<I18nState>,
      // Rehidrasi ditunda sampai pasca-mount (dipicu I18nProvider) agar
      // render client pertama selalu identik dengan HTML server —
      // bebas peringatan hydration mismatch.
      skipHydration: true,
      onRehydrateStorage: () => (state) => {
        state?.setHydrated();
      },
    }
  )
);

// ------------------------------------------------------------
// t() — reaktif via hook, non-reaktif via getState
// ------------------------------------------------------------
export function useT() {
  const translations = useI18n((s) => s.translations);
  return (key: string): string => translations[key] || sourceFor(key);
}

export function tSync(key: string): string {
  const { translations } = useI18n.getState();
  return translations[key] || sourceFor(key);
}

/** Info bahasa aktif untuk UI (trigger button, dsb.) */
export function useActiveLanguage() {
  const locale = useI18n((s) => s.locale);
  return getLanguage(locale);
}
