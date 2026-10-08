import { notFound } from "next/navigation";
import { PoemPage } from "@/components/gunara/poem-page";
import { poems } from "@/components/gunara/data";
import { JsonLd, seo, breadcrumbLd, SITE_URL } from "@/lib/seo";

export function generateStaticParams() {
  return poems.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const poem = poems.find((p) => p.slug === slug);
  if (!poem) return {};
  return seo({
    title: `${poem.title} — Puisi Santri Angon`,
    description: `${poem.verses[0] ?? ""} ${poem.note}`,
    path: `/puisi/${poem.slug}`,
    keywords: [
      `puisi ${poem.title}`,
      "puisi Santri Angon",
      "puisi pemulihan jiwa",
      "puisi Islami Indonesia",
    ],
  });
}

export default async function PuisiDetailRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const idx = poems.findIndex((p) => p.slug === slug);
  if (idx === -1) notFound();
  const poem = poems[idx];
  const prev = idx > 0 ? poems[idx - 1] : null;
  const next = idx < poems.length - 1 ? poems[idx + 1] : null;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Beranda", path: "/" },
            { name: "Puisi & Refleksi", path: "/puisi" },
            { name: poem.title, path: `/puisi/${poem.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: poem.title,
            description: poem.note,
            inLanguage: "id-ID",
            genre: "Puisi",
            author: {
              "@type": "Person",
              name: "Santri Angon",
              alternateName: "Gugun Gunara",
              url: SITE_URL,
            },
            isPartOf: { "@type": "CollectionPage", name: "Ruang Pemulihan Jiwa", url: `${SITE_URL}/puisi` },
            text: poem.verses.join("\n"),
          },
        ]}
      />
      <PoemPage
        poem={poem}
        prev={prev ? { slug: prev.slug, title: prev.title, href: `/puisi/${prev.slug}` } : null}
        next={next ? { slug: next.slug, title: next.title, href: `/puisi/${next.slug}` } : null}
      />
    </>
  );
}
