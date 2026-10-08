// ------------------------------------------------------------
// Gunara.web.id — Kamus Sumber UI (Bahasa Indonesia)
// Sumber kebenaran semua string antarmuka inti yang diterjemahkan
// AI ke 195 bahasa. Kunci yang tidak ada di sini akan jatuh kembali
// ke Bahasa Indonesia. Dipakai baik di client (fallback t()) maupun
// di API translate (sumber batch LLM).
// ------------------------------------------------------------

import { disciplines, services } from "@/components/gunara/data";

export const SOURCE: Record<string, string> = {
  // Navbar
  "nav.home": "Beranda",
  "nav.identities": "Identitas",
  "nav.disciplines": "Disiplin",
  "nav.services": "Layanan",
  "nav.more": "Lainnya",
  "nav.tentang": "Tentang",
  "nav.karya": "Karya",
  "nav.jurnal": "Jurnal",
  "nav.cta": "Mulai Kolaborasi",
  "nav.explore": "Jelajahi Lebih Jauh",
  "nav.menu.aria": "Buka menu navigasi",
  "nav.help": "Butuh Bantuan? Lihat FAQ",

  // Menu mobile
  "mobile.home": "Beranda",
  "mobile.identities": "Empat Identitas",
  "mobile.disciplines": "7 Disiplin Polymath",
  "mobile.services": "Layanan Konsultasi",

  // Hero
  "hero.eyebrow": "Konsultan Bisnis Senior Sejak 2009 — Gunara.web.id",
  "hero.h1a": "Satu Nama,",
  "hero.h1b": "Empat Kekuatan,",
  "hero.h1c": "Satu Peradaban.",
  "hero.sub1": "Ekosistem intelektual & bisnis",
  "hero.sub2":
    "— konsultan bisnis senior 17+ tahun, pendiri 5 perusahaan, berkolaborasi dalam kemitraan bersama konsultan McKinsey: strategi, riset, karya, dan pemulihan jiwa dalam satu arsitektur misi.",
  "hero.chip.sub1": "Duniawi–Negara",
  "hero.chip.sub2": "Ruhani–Ilahi",
  "hero.chip.sub3": "Pena Eksekusi",
  "hero.chip.sub4": "Pena Refleksi",
  "hero.cta.explore": "Jelajahi Ekosistem",
  "hero.cta.consult": "Konsultasi Strategis",
  "hero.stat.years": "Tahun Praktik",
  "hero.stat.companies": "Perusahaan",
  "hero.stat.docs": "Dokumen Master",
  "hero.portrait.role": "Senior Business Consultant — Sejak 2009",
  "hero.badge1.t": "Berkolaborasi",
  "hero.badge1.s": "bersama konsultan McKinsey",
  "hero.badge2.t": "5 Perusahaan",
  "hero.badge2.s": "satu ekosistem",

  // Section headings (beranda)
  "sec.identities.eyebrow": "Empat Pilar",
  "sec.identities.title": "Satu Jiwa, Empat Identitas",
  "sec.disciplines.eyebrow": "Polymath 7 Disiplin",
  "sec.disciplines.title": "Tujuh Medan, Satu Otak",
  "sec.mission.eyebrow": "Misi Peradaban",
  "sec.mission.title": "Satu Visi, Tiga Warisan",
  "sec.blueprint.eyebrow": "Enterprise Architecture",
  "sec.blueprint.title": "Blueprint 39 Dokumen",
  "sec.books.eyebrow": "Karya — Pena Prabu Danling",
  "sec.books.title": "Pustaka Peradaban",
  "sec.journals.eyebrow": "Riset — Identitas M. Lutfi Azmi",
  "sec.journals.title": "Jurnal & Kajian Peradaban",
  "sec.poetry.eyebrow": "Refleksi — Pena Santri Angon",
  "sec.poetry.title": "Ruang Pemulihan Jiwa",
  "sec.services.eyebrow": "Revenue Engine — Layanan",
  "sec.services.title": "Konsultasi Kelas Peradaban",
  "sec.testimonials.eyebrow": "Kepercayaan",
  "sec.testimonials.title": "Mereka yang Sudah Merasakan",
  "sec.contact.eyebrow": "Kontak & Kolaborasi",
  "sec.contact.title": "Mulai dari Satu Percakapan",

  // Footer
  "footer.desc":
    "Ekosistem konsultansi & kepemimpinan intelektual — 17+ tahun praktik, 5 perusahaan, satu standar kelas dunia.",
  "footer.col.identities": "Empat Identitas",
  "footer.col.companies": "Grup Perusahaan",
  "footer.col.explore": "Jelajahi",
  "footer.col.services": "Layanan",
  "footer.cert": "Pusat Sertifikasi",
  "footer.trail": "Rekam Jejak 2009–2026",
  "footer.rights": "Seluruh hak cipta dilindungi.",
  "footer.top": "Ke Atas",
  "footer.badge.companies": "5 Perusahaan",
  "footer.badge.blueprint": "Blueprint 39 Dokumen",
  "footer.badge.cert": "Pusat Sertifikasi",
  "footer.explore.tentang": "Tentang Gunara",
  "footer.explore.misi": "Misi Peradaban",
  "footer.explore.blueprint": "Blueprint 39 Dokumen",
  "footer.explore.karya": "Pustaka Buku",
  "footer.explore.jurnal": "Jurnal & Riset",
  "footer.explore.puisi": "Puisi & Refleksi",
  "footer.explore.mentoring": "Mentoring Angon",
  "footer.explore.surat": "Surat Peradaban",
  "footer.explore.faq": "FAQ",

  // Language switcher
  "lang.trigger": "Bahasa",
  "lang.title": "Pilih Bahasa",
  "lang.subtitle":
    "195 bahasa resmi negara di seluruh dunia — diterjemahkan AI secara real-time, tersimpan permanen.",
  "lang.search": "Cari bahasa atau negara…",
  "lang.region.all": "Semua",
  "lang.loading": "Menerjemahkan antarmuka",
  "lang.ready": "Antarmuka kini dalam",
  "lang.note":
    "Konten mendalam (buku, jurnal, puisi, detail layanan) tersedia dalam Bahasa Indonesia.",
  "lang.rtl": "RTL",
  "lang.active": "aktif",
};

// Nama disiplin & layanan — kunci dinamis dari data.ts,
// nilai awal dipetakan otomatis agar fallback t() tetap benar.
export const DYNAMIC_SOURCE: Record<string, string> = {};
for (const d of disciplines) DYNAMIC_SOURCE[`disc.${d.slug}`] = d.name;
for (const s of services) DYNAMIC_SOURCE[`svc.${s.slug}`] = s.name;

export const ALL_SOURCES: Record<string, string> = {
  ...SOURCE,
  ...DYNAMIC_SOURCE,
};

export const SOURCE_KEYS = Object.keys(ALL_SOURCES);

/**
 * Fallback lookup global — dipakai store & API.
 */
export function sourceFor(key: string): string {
  return ALL_SOURCES[key] ?? key;
}
