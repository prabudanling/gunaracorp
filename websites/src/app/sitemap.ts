import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import {
  identities,
  disciplines,
  books,
  services,
  companies,
  certifications,
  poems,
  journals,
  quoteItems,
  testimonialItems,
  faqItems,
  newsletterEditions,
  missionPhases,
  mentoringPhases,
  blueprint,
  pricingTiers,
  photos,
} from "@/components/gunara/data";

// ------------------------------------------------------------
// Sitemap — setiap klik di situs ini adalah URL nyata,
// dan setiap URL nyata terdaftar di sini.
// ------------------------------------------------------------
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths: { path: string; priority: number; freq: "daily" | "weekly" | "monthly" }[] = [
    { path: "/", priority: 1, freq: "daily" },
    { path: "/tentang", priority: 0.9, freq: "monthly" },
    { path: "/layanan", priority: 0.9, freq: "weekly" },
    { path: "/perusahaan", priority: 0.9, freq: "monthly" },
    { path: "/rekam-jejak", priority: 0.8, freq: "monthly" },
    { path: "/sertifikasi", priority: 0.8, freq: "monthly" },
    { path: "/karya", priority: 0.8, freq: "weekly" },
    { path: "/jurnal", priority: 0.7, freq: "weekly" },
    { path: "/puisi", priority: 0.6, freq: "weekly" },
    { path: "/kutipan", priority: 0.6, freq: "weekly" },
    { path: "/testimoni", priority: 0.7, freq: "monthly" },
    { path: "/galeri", priority: 0.6, freq: "monthly" },
    { path: "/paket", priority: 0.8, freq: "monthly" },
    { path: "/misi", priority: 0.6, freq: "monthly" },
    { path: "/blueprint", priority: 0.7, freq: "monthly" },
    { path: "/mentoring", priority: 0.6, freq: "monthly" },
    { path: "/surat", priority: 0.6, freq: "weekly" },
    { path: "/faq", priority: 0.5, freq: "monthly" },
    { path: "/kontak", priority: 0.8, freq: "monthly" },
  ];

  const entry = (
    path: string,
    priority: number,
    freq: "daily" | "weekly" | "monthly" = "monthly"
  ) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: freq as "daily" | "weekly" | "monthly",
    priority,
  });

  return [
    ...staticPaths.map((p) => entry(p.path, p.priority, p.freq)),
    ...identities.map((i) => entry(`/identitas/${i.slug}`, 0.7)),
    ...disciplines.map((d) => entry(`/disiplin/${d.slug}`, 0.6)),
    ...services.map((s) => entry(`/layanan/${s.slug}`, 0.8, "weekly")),
    ...books.map((b) => entry(`/karya/${b.slug}`, 0.7)),
    ...companies.map((c) => entry(`/perusahaan/${c.slug}`, 0.8)),
    // Halaman mandiri: sertifikasi
    ...certifications.map((c) => entry(`/sertifikasi/${c.slug}`, 0.7)),
    // Halaman mandiri: puisi per satu puisi
    ...poems.map((p) => entry(`/puisi/${p.slug}`, 0.6, "weekly")),
    // Halaman mandiri: jurnal per satu riset
    ...journals.map((j) => entry(`/jurnal/${j.slug}`, 0.7)),
    // Halaman mandiri: kutipan
    ...quoteItems.map((q) => entry(`/kutipan/${q.slug}`, 0.5, "weekly")),
    // Halaman mandiri: testimoni
    ...testimonialItems.map((t) => entry(`/testimoni/${t.slug}`, 0.6)),
    // Halaman mandiri: FAQ
    ...faqItems.map((f) => entry(`/faq/${f.slug}`, 0.5)),
    // Halaman mandiri: edisi Surat Peradaban
    ...newsletterEditions.map((e) => entry(`/surat/${e.slug}`, 0.6, "weekly")),
    // Halaman mandiri: fase misi
    ...missionPhases.map((m) => entry(`/misi/${m.slug}`, 0.6)),
    // Halaman mandiri: fase mentoring
    ...mentoringPhases.map((m) => entry(`/mentoring/${m.slug}`, 0.6)),
    // Halaman mandiri: kategori blueprint
    ...blueprint.map((b) => entry(`/blueprint/${b.slug}`, 0.7)),
    // Halaman mandiri: paket kolaborasi
    ...pricingTiers.map((p) => entry(`/paket/${p.slug}`, 0.8)),
    // Halaman mandiri: galeri foto asli
    ...photos.map((p) => entry(`/galeri/${p.slug}`, 0.6)),
  ];
}
