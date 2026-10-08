import { TestimoniPage } from "@/components/gunara/pages-testimoni";
import { JsonLd, seo, breadcrumbLd, SITE_URL } from "@/lib/seo";
import { testimonialItems } from "@/components/gunara/data";

export const metadata = seo({
  title: "Testimoni Klien — Suara & Hasil Nyata",
  description:
    "Enam testimoni dari penugasan nyata Gugun Gunara: enterprise blueprint, kolaborasi akademik, program pangan, hingga mentoring pemulihan. Identitas klien dirahasiakan sesuai amanah.",
  path: "/testimoni",
  keywords: [
    "testimoni klien Gugun Gunara",
    "review konsultan bisnis Indonesia",
    "testimoni konsultan manajemen",
    "pengalaman klien enterprise blueprint",
  ],
});

export default function TestimoniRoute() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Beranda", path: "/" },
            { name: "Testimoni", path: "/testimoni" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Testimoni Klien Gunara",
            inLanguage: "id-ID",
            itemListElement: testimonialItems.map((t, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: t.name,
              url: `${SITE_URL}/testimoni/${t.slug}`,
            })),
          },
        ]}
      />
      <TestimoniPage />
    </>
  );
}
