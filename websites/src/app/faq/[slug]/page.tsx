import { notFound } from "next/navigation";
import { FaqDetailPage } from "@/components/gunara/faq-detail-page";
import { faqItems } from "@/components/gunara/data";
import { JsonLd, seo, breadcrumbLd, SITE_URL } from "@/lib/seo";

export function generateStaticParams() {
  return faqItems.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = faqItems.find((f) => f.slug === slug);
  if (!item) return {};
  return seo({
    title: `${item.q} — FAQ`,
    description: item.a.slice(0, 155),
    path: `/faq/${item.slug}`,
    keywords: [
      "FAQ Gunara",
      `kategorinya ${item.category}`,
      item.q,
      "pertanyaan seputar layanan konsultansi",
    ],
  });
}

export default async function FaqDetailRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = faqItems.find((f) => f.slug === slug);
  if (!item) notFound();
  const related = faqItems
    .filter((f) => f.category === item.category && f.slug !== item.slug)
    .map((f) => ({ slug: f.slug, q: f.q, href: `/faq/${f.slug}` }));

  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Beranda", path: "/" },
            { name: "Pertanyaan yang Sering Diajukan", path: "/faq" },
            { name: item.q, path: `/faq/${item.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            inLanguage: "id-ID",
            url: `${SITE_URL}/faq/${item.slug}`,
            mainEntity: [
              {
                "@type": "Question",
                name: item.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.a,
                },
              },
            ],
          },
        ]}
      />
      <FaqDetailPage item={item} related={related} />
    </>
  );
}
