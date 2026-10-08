import { PuisiPage } from "@/components/gunara/pages-puisi";
import { JsonLd, seo, breadcrumbLd } from "@/lib/seo";

export const metadata = seo({
  title: "Ruang Pemulihan Jiwa — Puisi & Refleksi Santri Angon",
  description:
    "Kumpulan puisi dan refleksi penyair Santri Angon: ruang pemulihan jiwa bagi mereka yang terpuruk — kata-kata yang menggembalakan, bukan menghakimi.",
  path: "/puisi",
  keywords: [
    "puisi Santri Angon",
    "puisi pemulihan jiwa",
    "syair refleksi",
    "puisi Islami",
    "penyair Indonesia",
  ],
});

export default function PuisiRoute() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Beranda", path: "/" },
          { name: "Puisi & Refleksi", path: "/puisi" },
        ])}
      />
      <PuisiPage />
    </>
  );
}
