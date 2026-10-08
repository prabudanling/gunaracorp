import { notFound } from "next/navigation";
import { TestimonialPage } from "@/components/gunara/testimonial-page";
import { testimonialItems } from "@/components/gunara/data";
import { JsonLd, seo, breadcrumbLd, SITE_URL } from "@/lib/seo";

export function generateStaticParams() {
  return testimonialItems.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = testimonialItems.find((t) => t.slug === slug);
  if (!item) return {};
  return seo({
    title: `${item.name} — Testimoni Klien`,
    description: item.quote.slice(0, 155),
    path: `/testimoni/${item.slug}`,
    keywords: [
      "testimoni klien Gugun Gunara",
      "review konsultan bisnis Indonesia",
      item.role,
    ],
  });
}

export default async function TestimoniDetailRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const idx = testimonialItems.findIndex((t) => t.slug === slug);
  if (idx === -1) notFound();
  const item = testimonialItems[idx];
  const prev = idx > 0 ? testimonialItems[idx - 1] : null;
  const next = idx < testimonialItems.length - 1 ? testimonialItems[idx + 1] : null;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Beranda", path: "/" },
            { name: "Testimoni", path: "/testimoni" },
            { name: item.name, path: `/testimoni/${item.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Review",
            itemReviewed: {
              "@type": "ProfessionalService",
              name: "Gunara — Konsultansi Bisnis & Manajemen",
              url: SITE_URL,
            },
            reviewBody: item.quote,
            // Identitas klien anonim (dirahasiakan sesuai amanah) —
            // reviewRating tidak dipakai karena tidak ada data skor.
            author: { "@type": "Organization", name: item.role },
            inLanguage: "id-ID",
          },
        ]}
      />
      <TestimonialPage
        item={item}
        prev={prev ? { slug: prev.slug, title: prev.name, href: `/testimoni/${prev.slug}` } : null}
        next={next ? { slug: next.slug, title: next.name, href: `/testimoni/${next.slug}` } : null}
      />
    </>
  );
}
