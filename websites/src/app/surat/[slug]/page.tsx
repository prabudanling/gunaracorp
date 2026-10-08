import { notFound } from "next/navigation";
import { EditionPage } from "@/components/gunara/edition-page";
import { newsletterEditions } from "@/components/gunara/data";
import { JsonLd, seo, breadcrumbLd, SITE_URL } from "@/lib/seo";

export function generateStaticParams() {
  return newsletterEditions.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const edition = newsletterEditions.find((e) => e.slug === slug);
  if (!edition) return {};
  return seo({
    title: `${edition.title} — ${edition.no} Surat Peradaban`,
    description: edition.summary,
    path: `/surat/${edition.slug}`,
    keywords: [
      "Surat Peradaban",
      "newsletter Gugun Gunara",
      edition.title,
      "surat mingguan riset & refleksi",
    ],
  });
}

export default async function SuratDetailRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const idx = newsletterEditions.findIndex((e) => e.slug === slug);
  if (idx === -1) notFound();
  const edition = newsletterEditions[idx];
  const prev = idx > 0 ? newsletterEditions[idx - 1] : null;
  const next = idx < newsletterEditions.length - 1 ? newsletterEditions[idx + 1] : null;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Beranda", path: "/" },
            { name: "Surat Peradaban", path: "/surat" },
            { name: `${edition.no} — ${edition.title}`, path: `/surat/${edition.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: edition.title,
            description: edition.summary,
            inLanguage: "id-ID",
            articleBody: edition.body.join("\n\n"),
            author: {
              "@type": "Person",
              name: "Gugun Gunara",
              url: SITE_URL,
            },
            isPartOf: {
              "@type": "CollectionPage",
              name: "Surat Peradaban",
              url: `${SITE_URL}/surat`,
            },
          },
        ]}
      />
      <EditionPage
        edition={edition}
        prev={prev ? { slug: prev.slug, title: prev.title, href: `/surat/${prev.slug}` } : null}
        next={next ? { slug: next.slug, title: next.title, href: `/surat/${next.slug}` } : null}
      />
    </>
  );
}
