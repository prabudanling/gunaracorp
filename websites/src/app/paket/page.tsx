import { PaketPage } from "@/components/gunara/pages-paket";
import { JsonLd, seo, breadcrumbLd, SITE_URL } from "@/lib/seo";
import { pricingTiers } from "@/components/gunara/data";

export const metadata = seo({
  title: "Paket Kolaborasi — Tiga Skema Kerja",
  description:
    "Tiga skema kerja Gunara: Strategy Call untuk pemula, Enterprise Engagement untuk korporasi & BUMN, dan Partnership Peradaban untuk yayasan & kampus. Kontrak tertulis, bertahap per milestone.",
  path: "/paket",
  keywords: [
    "paket konsultan bisnis",
    "biaya konsultan manajemen Indonesia",
    "strategy call bisnis",
    "enterprise engagement",
    "kemitraan program",
  ],
});

export default function PaketRoute() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Beranda", path: "/" },
            { name: "Paket Kolaborasi", path: "/paket" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Paket Kolaborasi Gunara",
            inLanguage: "id-ID",
            itemListElement: pricingTiers.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: p.name,
              url: `${SITE_URL}/paket/${p.slug}`,
            })),
          },
        ]}
      />
      <PaketPage />
    </>
  );
}
