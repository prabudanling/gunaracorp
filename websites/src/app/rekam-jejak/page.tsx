import { RekamJejakPage } from "@/components/gunara/pages-rekam-jejak";
import { JsonLd, seo, breadcrumbLd } from "@/lib/seo";

export const metadata = seo({
  title: "Rekam Jejak 2009–2026 — 17+ Tahun Perjalanan Konsultansi",
  description:
    "Garis waktu perjalanan Gugun Gunara: memulai praktik konsultansi pada 2009, kolaborasi jejaring internasional termasuk kemitraan bersama konsultan McKinsey, membangun 5 perusahaan, hingga pusat sertifikasi berstandar akreditasi terbaik.",
  path: "/rekam-jejak",
  keywords: [
    "rekam jejak Gugun Gunara",
    "perjalanan karier konsultan",
    "konsultan sejak 2009",
    "timeline Gunara",
  ],
});

export default function RekamJejakRoute() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Beranda", path: "/" },
          { name: "Rekam Jejak", path: "/rekam-jejak" },
        ])}
      />
      <RekamJejakPage />
    </>
  );
}
