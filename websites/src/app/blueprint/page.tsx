import { BlueprintPage } from "@/components/gunara/pages-blueprint";
import { JsonLd, seo, breadcrumbLd } from "@/lib/seo";

export const metadata = seo({
  title: "Blueprint 39 Dokumen — Enterprise Architecture Kelas Dunia",
  description:
    "39 dokumen master yang dikodifikasi dari praktik konsultansi 17+ tahun: blueprint bisnis, SOP, struktur organisasi, KPI, hingga peta jalan — enterprise architecture siap dijalankan.",
  path: "/blueprint",
  keywords: [
    "blueprint bisnis",
    "enterprise architecture",
    "SOP perusahaan",
    "struktur organisasi KPI",
    "konsultan enterprise architecture",
  ],
});

export default function BlueprintRoute() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Beranda", path: "/" },
          { name: "Blueprint 39 Dokumen", path: "/blueprint" },
        ])}
      />
      <BlueprintPage />
    </>
  );
}
