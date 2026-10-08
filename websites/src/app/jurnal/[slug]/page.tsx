import { notFound } from "next/navigation";
import { JournalPage } from "@/components/gunara/journal-page";
import { journals } from "@/components/gunara/data";
import { JsonLd, seo, breadcrumbLd, SITE_URL } from "@/lib/seo";

export function generateStaticParams() {
  return journals.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const journal = journals.find((j) => j.slug === slug);
  if (!journal) return {};
  return seo({
    title: `${journal.title} — Jurnal & Riset`,
    description: journal.abstract,
    path: `/jurnal/${journal.slug}`,
    keywords: [
      journal.field,
      `jurnal ${journal.quartile}`,
      "M. Lutfi Azmi",
      "riset Gugun Gunara",
      journal.venue,
    ],
  });
}

export default async function JurnalDetailRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const idx = journals.findIndex((j) => j.slug === slug);
  if (idx === -1) notFound();
  const journal = journals[idx];
  const prev = idx > 0 ? journals[idx - 1] : null;
  const next = idx < journals.length - 1 ? journals[idx + 1] : null;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Beranda", path: "/" },
            { name: "Jurnal & Riset", path: "/jurnal" },
            { name: journal.title, path: `/jurnal/${journal.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            headline: journal.title,
            abstract: journal.abstract,
            genre: journal.field,
            keywords: journal.quartile,
            inLanguage: "id-ID",
            datePublished: journal.year,
            author: {
              "@type": "Person",
              name: "Muhammad Lutfi Azmi",
              alternateName: "Gugun Gunara",
              url: SITE_URL,
            },
            isPartOf: {
              "@type": "CollectionPage",
              name: "Jurnal & Riset",
              url: `${SITE_URL}/jurnal`,
            },
          },
        ]}
      />
      <JournalPage
        journal={journal}
        prev={prev ? { slug: prev.slug, title: prev.title, href: `/jurnal/${prev.slug}` } : null}
        next={next ? { slug: next.slug, title: next.title, href: `/jurnal/${next.slug}` } : null}
      />
    </>
  );
}
