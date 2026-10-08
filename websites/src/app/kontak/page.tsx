import { KontakPage } from "@/components/gunara/pages-kontak";
import { JsonLd, seo, breadcrumbLd } from "@/lib/seo";

export const metadata = seo({
  title: "Kontak & Kolaborasi — Mulai dari Satu Percakapan",
  description:
    "Hubungi Gugun Gunara untuk konsultansi bisnis, perizinan, sertifikasi, kemitraan, atau kolaborasi riset. Balasan maksimal 1×24 jam kerja.",
  path: "/kontak",
  keywords: [
    "kontak Gugun Gunara",
    "hubungi konsultan bisnis",
    "konsultasi bisnis Indonesia",
    "kemitraan bisnis",
  ],
});

export default function KontakRoute() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Beranda", path: "/" },
            { name: "Kontak", path: "/kontak" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Gunara — Konsultansi Gugun Gunara",
            url: "https://gunara.web.id/kontak",
            founder: { "@type": "Person", name: "Gugun Gunara" },
            areaServed: "Indonesia",
            serviceType: [
              "Konsultasi Bisnis & Manajemen",
              "Perizinan Usaha & Legalitas",
              "Sertifikasi Kompetensi",
              "Transformasi Digital",
            ],
          },
        ]}
      />
      <KontakPage />
    </>
  );
}
