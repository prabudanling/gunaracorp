import { LayananPage } from "@/components/gunara/pages-layanan";
import { JsonLd, seo, breadcrumbLd } from "@/lib/seo";

export const metadata = seo({
  title: "Layanan Konsultasi Bisnis — Manajemen, Pangan, Logistik, Energi, AI",
  description:
    "Enam layanan konsultasi utama: manajemen strategis, ketahanan pangan, logistik & supply chain, energi terbarukan, kimia industri, serta IT & AI — dengan deliverables jelas dan harga transparan.",
  path: "/layanan",
  keywords: [
    "jasa konsultan bisnis",
    "konsultan manajemen Indonesia",
    "konsultan ketahanan pangan",
    "konsultan supply chain",
    "konsultan IT AI",
  ],
});

export default function LayananRoute() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Beranda", path: "/" },
          { name: "Layanan", path: "/layanan" },
        ])}
      />
      <LayananPage />
    </>
  );
}
