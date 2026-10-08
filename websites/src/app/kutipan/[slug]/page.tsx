import { notFound } from "next/navigation";
import { QuotePage } from "@/components/gunara/quote-page";
import { quoteItems } from "@/components/gunara/data";
import { JsonLd, seo, breadcrumbLd, SITE_URL } from "@/lib/seo";

export function generateStaticParams() {
  return quoteItems.map((q) => ({ slug: q.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = quoteItems.find((q) => q.slug === slug);
  if (!item) return {};
  return seo({
    title: `${item.text.slice(0, 60)}${item.text.length > 60 ? "…" : ""} — Kutipan`,
    description: item.reflection.slice(0, 155),
    path: `/kutipan/${item.slug}`,
    keywords: ["kutipan Santri Angon", "kutipan peradaban", "kata bijak Gugun Gunara"],
  });
}

export default async function KutipanDetailRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const idx = quoteItems.findIndex((q) => q.slug === slug);
  if (idx === -1) notFound();
  const item = quoteItems[idx];
  const prev = idx > 0 ? quoteItems[idx - 1] : null;
  const next = idx < quoteItems.length - 1 ? quoteItems[idx + 1] : null;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Beranda", path: "/" },
            { name: "Kutipan Peradaban", path: "/kutipan" },
            { name: `Kutipan ${String(idx + 1).padStart(2, "0")}`, path: `/kutipan/${item.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Quotation",
            text: item.text,
            spokenByCharacter: "Santri Angon",
            creator: {
              "@type": "Person",
              name: "Santri Angon",
              alternateName: "Gugun Gunara",
              url: SITE_URL,
            },
            inLanguage: "id-ID",
          },
        ]}
      />
      <QuotePage
        item={item}
        prev={prev ? { slug: prev.slug, title: prev.text, href: `/kutipan/${prev.slug}` } : null}
        next={next ? { slug: next.slug, title: next.text, href: `/kutipan/${next.slug}` } : null}
      />
    </>
  );
}
