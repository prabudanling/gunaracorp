import { KutipanPage } from "@/components/gunara/pages-kutipan";
import { JsonLd, seo, breadcrumbLd, SITE_URL } from "@/lib/seo";
import { quoteItems } from "@/components/gunara/data";

export const metadata = seo({
  title: "Kutipan Peradaban — Larik-Larik Kunci",
  description:
    "Kumpulan kutipan Gugun Gunara & Santri Angon: larik-larik kunci tentang amanah, sistem, ilmu, dan kerja — setiap kutipan punya halaman dan maknanya sendiri.",
  path: "/kutipan",
  keywords: [
    "kutipan Gugun Gunara",
    "kutipan Santri Angon",
    "kata bijak peradaban",
    "kutipan konsultan",
    "quotes Indonesia",
  ],
});

export default function KutipanRoute() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Beranda", path: "/" },
            { name: "Kutipan Peradaban", path: "/kutipan" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Kutipan Peradaban",
            inLanguage: "id-ID",
            itemListElement: quoteItems.map((q, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: q.text,
              url: `${SITE_URL}/kutipan/${q.slug}`,
            })),
          },
        ]}
      />
      <KutipanPage />
    </>
  );
}
