import { notFound } from "next/navigation";
import { PricingTierPage } from "@/components/gunara/pricing-tier-page";
import { pricingTiers } from "@/components/gunara/data";
import { JsonLd, seo, breadcrumbLd, SITE_URL } from "@/lib/seo";

export function generateStaticParams() {
  return pricingTiers.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tier = pricingTiers.find((p) => p.slug === slug);
  if (!tier) return {};
  return seo({
    title: `${tier.name} — ${tier.ideal}`,
    description: `${tier.name}: ${tier.price} ${tier.unit}. ${tier.features
      .slice(0, 3)
      .join(", ")}.`,
    path: `/paket/${tier.slug}`,
    keywords: [
      tier.name,
      "paket konsultan bisnis",
      "biaya konsultansi Gunara",
      tier.ideal,
    ],
  });
}

export default async function PaketDetailRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const idx = pricingTiers.findIndex((p) => p.slug === slug);
  if (idx === -1) notFound();
  const tier = pricingTiers[idx];
  const prev = idx > 0 ? pricingTiers[idx - 1] : null;
  const next = idx < pricingTiers.length - 1 ? pricingTiers[idx + 1] : null;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Beranda", path: "/" },
            { name: "Paket Kolaborasi", path: "/paket" },
            { name: tier.name, path: `/paket/${tier.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: tier.name,
            serviceType: "Konsultansi Bisnis & Manajemen",
            description: `${tier.ideal}. Termasuk: ${tier.features.join("; ")}.`,
            provider: {
              "@type": "ProfessionalService",
              name: "Gunara — Konsultansi Bisnis & Manajemen",
              url: SITE_URL,
            },
            areaServed: "Indonesia",
            url: `${SITE_URL}/paket/${tier.slug}`,
            inLanguage: "id-ID",
          },
        ]}
      />
      <PricingTierPage
        tier={tier}
        prev={prev ? { slug: prev.slug, title: prev.name, href: `/paket/${prev.slug}` } : null}
        next={next ? { slug: next.slug, title: next.name, href: `/paket/${next.slug}` } : null}
      />
    </>
  );
}
