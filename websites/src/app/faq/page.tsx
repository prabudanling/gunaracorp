import { FaqPage } from "@/components/gunara/pages-faq";
import { JsonLd, seo, breadcrumbLd } from "@/lib/seo";

export const metadata = seo({
  title: "Pertanyaan yang Sering Diajukan (FAQ)",
  description:
    "Jawaban atas pertanyaan umum tentang layanan konsultansi, proses kerja, harga, perizinan, sertifikasi, dan kolaborasi dengan Gugun Gunara serta grup perusahaannya.",
  path: "/faq",
  keywords: [
    "FAQ konsultan bisnis",
    "pertanyaan layanan konsultasi",
    "biaya konsultan",
    "tanya jawab perizinan usaha",
  ],
});

export default function FaqRoute() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Beranda", path: "/" },
          { name: "FAQ", path: "/faq" },
        ])}
      />
      <FaqPage />
    </>
  );
}
