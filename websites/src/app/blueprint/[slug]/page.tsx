import { notFound } from "next/navigation";
import { BlueprintCategoryPage } from "@/components/gunara/blueprint-category-page";
import { blueprint } from "@/components/gunara/data";
import { JsonLd, seo, breadcrumbLd, SITE_URL } from "@/lib/seo";

export function generateStaticParams() {
  return blueprint.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = blueprint.find((b) => b.slug === slug);
  if (!category) return {};
  return seo({
    title: `${category.category} — Blueprint 39 Dokumen`,
    description: category.summary,
    path: `/blueprint/${category.slug}`,
    keywords: [
      category.category,
      "enterprise blueprint 39 dokumen",
      "blueprint tata kelola organisasi",
      "enterprise architecture Indonesia",
    ],
  });
}

export default async function BlueprintDetailRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const idx = blueprint.findIndex((b) => b.slug === slug);
  if (idx === -1) notFound();
  const category = blueprint[idx];
  const prev = idx > 0 ? blueprint[idx - 1] : null;
  const next = idx < blueprint.length - 1 ? blueprint[idx + 1] : null;

  // Basis penomoran global dari rentang kategori (mis. "09–17" → 9).
  const parsed = parseInt(category.range.split(/[–-]/)[0], 10);
  const base = Number.isNaN(parsed) ? 1 : parsed;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Beranda", path: "/" },
            { name: "Blueprint 39 Dokumen", path: "/blueprint" },
            { name: category.category, path: `/blueprint/${category.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: category.category,
            description: category.summary,
            inLanguage: "id-ID",
            numberOfItems: category.documents.length,
            itemListElement: category.documents.map((doc, i) => ({
              "@type": "ListItem",
              position: base + i,
              name: doc.name,
              description: doc.desc,
            })),
          },
        ]}
      />
      <BlueprintCategoryPage
        category={category}
        prev={prev ? { slug: prev.slug, title: prev.category, href: `/blueprint/${prev.slug}` } : null}
        next={next ? { slug: next.slug, title: next.category, href: `/blueprint/${next.slug}` } : null}
      />
    </>
  );
}
