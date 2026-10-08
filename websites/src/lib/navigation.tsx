"use client";

import { create } from "zustand";

// ------------------------------------------------------------
// Gunara Real-Route Navigation
// Setiap klik = URL nyata yang bisa diindeks Google.
// Komponen lama tetap memakai `navigate(page, opts)` — tetapi
// kini navigate() mendorong path Next.js App Router sungguhan.
// ------------------------------------------------------------

export type PageKey =
  | "beranda"
  | "tentang"
  | "misi"
  | "blueprint"
  | "karya"
  | "jurnal"
  | "puisi"
  | "kutipan"
  | "testimoni"
  | "galeri"
  | "paket"
  | "layanan"
  | "mentoring"
  | "surat"
  | "faq"
  | "kontak"
  | "perusahaan"
  | "rekam-jejak"
  | "sertifikasi"
  | `identitas-${string}`
  | `disiplin-${string}`
  | `layanan-${string}`
  | `buku-${string}`
  | `perusahaan-${string}`;

const STATIC_PAGES = [
  "beranda",
  "tentang",
  "misi",
  "blueprint",
  "karya",
  "jurnal",
  "puisi",
  "kutipan",
  "testimoni",
  "galeri",
  "paket",
  "layanan",
  "mentoring",
  "surat",
  "faq",
  "kontak",
  "perusahaan",
  "rekam-jejak",
  "sertifikasi",
] as const;

const PREFIXED = ["identitas", "disiplin", "layanan", "buku", "perusahaan"] as const;

// Segment awal yang berpola /seg/sub — dipakai pathToPage
const SEGMENT_HEADS = ["identitas", "disiplin", "layanan", "perusahaan"] as const;

// ------------------------------------------------------------
// Router registration — diisi oleh <NavigationProvider> di root
// layout agar navigate() dapat memakai Next.js App Router.
// ------------------------------------------------------------
type RouterLike = { push: (url: string, opts?: { scroll?: boolean }) => void };

let routerRef: RouterLike | null = null;

export function registerRouter(r: RouterLike | null) {
  routerRef = r;
}

// ------------------------------------------------------------
// pageToPath — peta PageKey → URL nyata (sumber kebenaran tunggal)
// ------------------------------------------------------------
export function pageToPath(page: PageKey): string {
  if (page === "beranda") return "/";
  for (const p of PREFIXED) {
    if (page.startsWith(`${p}-`)) {
      const sub = page.replace(`${p}-`, "");
      // Koleksi buku tinggal di /karya/[slug]
      if (p === "buku") return `/karya/${sub}`;
      return `/${p}/${sub}`;
    }
  }
  return `/${page}`;
}

// ------------------------------------------------------------
// pathToPage — invers: pathname aktif → PageKey (untuk nav aktif)
// ------------------------------------------------------------
export function pathToPage(pathname: string): PageKey {
  const seg = pathname.split("?")[0].split("#")[0].split("/").filter(Boolean);
  if (seg.length === 0) return "beranda";
  if (seg.length === 2) {
    const [head, sub] = seg;
    if ((SEGMENT_HEADS as readonly string[]).includes(head))
      return `${head}-${sub}` as PageKey;
    if (head === "karya") return `buku-${sub}` as PageKey;
  }
  const head = seg[0];
  if ((STATIC_PAGES as readonly string[]).includes(head)) return head as PageKey;
  return "beranda";
}

// ------------------------------------------------------------
// Store — masih zustand, tetapi navigate() kini route nyata.
// `page/slug/subject` tetap disimpan untuk state UI (nav aktif,
// prefill subjek kontak) tanpa menggantikan URL.
// ------------------------------------------------------------
type PageState = {
  page: PageKey;
  slug: string | null;
  subject: string | null;
  navigate: (page: PageKey, opts?: { slug?: string; subject?: string }) => void;
  goHomeSection: (sectionId: string) => void;
  restore: (page: PageKey, slug: string | null, subject: string | null) => void;
};

function pushPath(path: string) {
  if (routerRef) {
    routerRef.push(path, { scroll: true });
  } else if (typeof window !== "undefined") {
    window.location.href = path;
  }
}

export const usePageStore = create<PageState>((set) => ({
  page: "beranda",
  slug: null,
  subject: null,
  navigate: (page, opts) => {
    set({
      page,
      slug: opts?.slug ?? null,
      subject: opts?.subject ?? null,
    });
    pushPath(pageToPath(page));
  },
  goHomeSection: (sectionId) => {
    const cur = usePageStore.getState();
    if (cur.page !== "beranda") {
      set({ page: "beranda", slug: null, subject: null });
      pushPath("/");
    }
    // Tunggu route beranda siap, lalu geser ke section — beri beberapa
    // percobaan agar aman terhadap navigasi asinkron App Router.
    let tries = 0;
    const attempt = () => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      if (++tries < 12) window.setTimeout(attempt, 90);
      else window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.setTimeout(attempt, 140);
  },
  restore: (page, slug, subject) => {
    set({ page, slug, subject });
    pushPath(pageToPath(page));
  },
}));

// Registry metadata semua halaman — untuk PageShell & navigasi
export type PageMeta = { title: string; eyebrow: string };

export const pageMeta: Record<string, PageMeta> = {
  tentang: { title: "Tentang Gunara", eyebrow: "Kisah & Jalan" },
  misi: { title: "Misi Peradaban", eyebrow: "Satu Visi, Tiga Warisan" },
  blueprint: { title: "Blueprint 39 Dokumen", eyebrow: "Enterprise Architecture" },
  karya: { title: "Pustaka Peradaban", eyebrow: "Karya — Pena Prabu Danling" },
  jurnal: { title: "Jurnal & Riset", eyebrow: "Identitas M. Lutfi Azmi" },
  puisi: { title: "Ruang Pemulihan Jiwa", eyebrow: "Refleksi — Pena Santri Angon" },
  kutipan: { title: "Kutipan Peradaban", eyebrow: "Larik-Larik Kunci" },
  testimoni: { title: "Saksi Mata & Hasil", eyebrow: "Suara Klien" },
  galeri: { title: "Galeri Perjalanan", eyebrow: "Foto Asli — Bukan AI" },
  paket: { title: "Paket Kolaborasi", eyebrow: "Pilih Skema Kerja" },
  layanan: { title: "Konsultasi Kelas Peradaban", eyebrow: "Revenue Engine — Layanan" },
  mentoring: { title: "Mentoring Angon 90 Hari", eyebrow: "Pendampingan Pemulihan" },
  surat: { title: "Surat Peradaban", eyebrow: "Newsletter Mingguan" },
  faq: { title: "Pertanyaan yang Sering Diajukan", eyebrow: "Bantuan" },
  kontak: { title: "Mulai dari Satu Percakapan", eyebrow: "Kontak & Kolaborasi" },
  perusahaan: { title: "Grup Perusahaan Gunara", eyebrow: "5 Perusahaan, Satu Standar" },
  "rekam-jejak": { title: "Rekam Jejak 2009–2026", eyebrow: "17+ Tahun Perjalanan" },
  sertifikasi: { title: "Pusat Sertifikasi & Akreditasi", eyebrow: "Standar yang Terukur" },
};
