import type { Metadata } from "next";

// ------------------------------------------------------------
// SEO helpers — metadata, JSON-LD, breadcrumb.
// Prinsip: faktual, deskriptif, tanpa klaim berlebihan —
// disukai Google & semua mesin pencari.
// ------------------------------------------------------------

export const SITE_URL = "https://gunara.web.id";

export const SITE = {
  name: "Gunara.web.id",
  person: "Gugun Gunara",
  altNames: ["Muhammad Lutfi Azmi", "Prabu Danling", "Santri Angon"],
  legalName: "Gunara — Ekosistem Konsultansi & Kepemimpinan Intelektual",
  url: SITE_URL,
};

export function seo(opts: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = `${SITE_URL}${opts.path}`;
  return {
    title: opts.title,
    description: opts.description,
    keywords: opts.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: SITE.name,
      locale: "id_ID",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
    },
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbLd(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

export function personLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Gugun Gunara",
    alternateName: SITE.altNames,
    url: SITE_URL,
    jobTitle: "Senior Business Consultant",
    description:
      "Konsultan bisnis senior sejak 2009 dengan pengalaman 17+ tahun; pendiri lima perusahaan layanan bisnis dan konsultansi; berpengalaman berkolaborasi dalam jejaring konsultan internasional termasuk proyek kemitraan bersama McKinsey.",
    knowsAbout: [
      "Konsultasi Manajemen Strategis",
      "Perizinan Usaha & Legalitas",
      "Ketahanan Pangan",
      "Logistik & Supply Chain",
      "Enterprise Architecture",
      "Transformasi Digital",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Gunara Group",
      url: SITE_URL,
    },
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE_URL,
    inLanguage: "id-ID",
    publisher: { "@type": "Person", name: "Gugun Gunara" },
  };
}

export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
