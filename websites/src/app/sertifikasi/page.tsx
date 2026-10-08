import { SertifikasiPage } from "@/components/gunara/pages-sertifikasi";
import { JsonLd, seo, breadcrumbLd } from "@/lib/seo";

export const metadata = seo({
  title: "Pusat Sertifikasi & Akreditasi — Standar yang Terukur",
  description:
    "Program sertifikasi kompetensi profesional Gunara: konsultan bisnis terapan, manajemen perizinan, transformasi digital, dan penulisan dokumen strategis — dinilai dari karya nyata dengan komitmen akreditasi terbaik.",
  path: "/sertifikasi",
  keywords: [
    "pusat sertifikasi",
    "sertifikasi kompetensi",
    "sertifikasi konsultan",
    "akreditasi lembaga pelatihan",
    "lembaga sertifikasi profesi",
  ],
});

export default function SertifikasiRoute() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Beranda", path: "/" },
          { name: "Pusat Sertifikasi", path: "/sertifikasi" },
        ])}
      />
      <SertifikasiPage />
    </>
  );
}
