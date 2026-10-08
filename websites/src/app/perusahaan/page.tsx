import { PerusahaanPage } from "@/components/gunara/pages-perusahaan";
import { JsonLd, seo, breadcrumbLd } from "@/lib/seo";

export const metadata = seo({
  title: "Grup Perusahaan — 5 Perusahaan Milik Gugun Gunara",
  description:
    "Lima perusahaan milik Gugun Gunara: Pusat Perizinan (pusatperizinan.com), Top Konsultan (topkonsultan.web.id), Komite Haji (komitehaji.id), PPP Digital (pppdigital.id), dan PPP Bisnis (pppbisnis.com) — satu ekosistem, satu standar.",
  path: "/perusahaan",
  keywords: [
    "Gugun Gunara perusahaan",
    "pusatperizinan.com",
    "topkonsultan.web.id",
    "komitehaji.id",
    "pppdigital.id",
    "pppbisnis.com",
    "grup perusahaan konsultan",
  ],
});

export default function PerusahaanRoute() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Beranda", path: "/" },
            { name: "Grup Perusahaan", path: "/perusahaan" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Grup Perusahaan Gunara",
            itemListElement: [
              "pusatperizinan.com",
              "topkonsultan.web.id",
              "komitehaji.id",
              "pppdigital.id",
              "pppbisnis.com",
            ].map((domain, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: domain,
            })),
          },
        ]}
      />
      <PerusahaanPage />
    </>
  );
}
