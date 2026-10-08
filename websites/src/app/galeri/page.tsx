import { GaleriPage } from "@/components/gunara/pages-galeri";
import { JsonLd, seo, breadcrumbLd, SITE_URL } from "@/lib/seo";
import { photos } from "@/components/gunara/data";

export const metadata = seo({
  title: "Galeri Perjalanan — Foto Asli 2009–2026",
  description:
    "Enam foto asli (bukan AI) dari arsip pribadi Gugun Gunara: dokumentasi perjalanan 2009–2026, dari meja kerja pertama hingga ekosistem lima perusahaan. Setiap foto punya kisahnya.",
  path: "/galeri",
  keywords: [
    "galeri Gugun Gunara",
    "foto konsultan bisnis Indonesia",
    "perjalanan karier konsultan",
    "foto asli gunara",
  ],
});

export default function GaleriRoute() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Beranda", path: "/" },
            { name: "Galeri Perjalanan", path: "/galeri" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Galeri Perjalanan Gunara",
            inLanguage: "id-ID",
            itemListElement: photos.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "ImageObject",
                name: p.title,
                contentUrl: `${SITE_URL}${p.src}`,
                description: p.caption,
                url: `${SITE_URL}/galeri/${p.slug}`,
              },
            })),
          },
        ]}
      />
      <GaleriPage />
    </>
  );
}
