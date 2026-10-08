import { SuratPage } from "@/components/gunara/pages-surat";
import { JsonLd, seo, breadcrumbLd } from "@/lib/seo";

export const metadata = seo({
  title: "Surat Peradaban — Newsletter Mingguan Gugun Gunara",
  description:
    "Newsletter mingguan: satu surat tiap pekan berisi pemikiran strategi, sistem, dan peradaban — langsung ke kotak masuk Anda, tanpa spam.",
  path: "/surat",
  keywords: [
    "newsletter strategi bisnis",
    "Surat Peradaban",
    "newsletter Indonesia",
    "Gugun Gunara newsletter",
  ],
});

export default function SuratRoute() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Beranda", path: "/" },
          { name: "Surat Peradaban", path: "/surat" },
        ])}
      />
      <SuratPage />
    </>
  );
}
