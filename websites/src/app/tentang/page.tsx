import { TentangPage } from "@/components/gunara/pages-tentang";
import { JsonLd, seo, breadcrumbLd } from "@/lib/seo";

export const metadata = seo({
  title: "Tentang Gugun Gunara — Konsultan Bisnis Senior Sejak 2009",
  description:
    "Kenali Gugun Gunara (Muhammad Lutfi Azmi): konsultan bisnis senior dengan pengalaman 17+ tahun sejak 2009, pendiri 5 perusahaan, berpengalaman berkolaborasi bersama konsultan McKinsey, dan penggerak pusat sertifikasi berstandar akreditasi terbaik.",
  path: "/tentang",
  keywords: [
    "tentang Gugun Gunara",
    "konsultan bisnis senior Indonesia",
    "konsultan manajemen sejak 2009",
    "Muhammad Lutfi Azmi",
    "biografi konsultan bisnis",
  ],
});

export default function TentangRoute() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Beranda", path: "/" },
          { name: "Tentang", path: "/tentang" },
        ])}
      />
      <TentangPage />
    </>
  );
}
