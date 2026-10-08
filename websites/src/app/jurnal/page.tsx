import { JurnalPage } from "@/components/gunara/pages-jurnal";
import { JsonLd, seo, breadcrumbLd } from "@/lib/seo";

export const metadata = seo({
  title: "Jurnal & Riset — Identitas Ilmiah M. Lutfi Azmi",
  description:
    "Wadah riset dan publikasi ilmiah: jurnal internasional terindeks tentang peradaban digital, rantai pasok pangan, energi, hingga kepemimpinan — di bawah identitas akademik M. Lutfi Azmi.",
  path: "/jurnal",
  keywords: [
    "jurnal internasional",
    "riset peradaban digital",
    "publikasi Q1 Q2",
    "M Lutfi Azmi",
    "penelitian supply chain pangan",
  ],
});

export default function JurnalRoute() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Beranda", path: "/" },
          { name: "Jurnal & Riset", path: "/jurnal" },
        ])}
      />
      <JurnalPage />
    </>
  );
}
