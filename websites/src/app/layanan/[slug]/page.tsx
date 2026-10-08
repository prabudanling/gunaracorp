import { notFound } from "next/navigation";
import { ServicePage } from "@/components/gunara/service-page";
import { services } from "@/components/gunara/data";
import { JsonLd, seo, breadcrumbLd } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return seo({
    title: `${service.name} — Layanan Konsultasi Gunara`,
    description: service.description,
    path: `/layanan/${service.slug}`,
    keywords: [service.name, "jasa konsultan", "layanan konsultasi bisnis", "Gugun Gunara"],
  });
}

export default async function LayananDetailRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Beranda", path: "/" },
            { name: "Layanan", path: "/layanan" },
            { name: service.name, path: `/layanan/${service.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.name,
            description: service.description,
            provider: {
              "@type": "Person",
              name: "Gugun Gunara",
              url: "https://gunara.web.id",
            },
            areaServed: "Indonesia",
          },
        ]}
      />
      <ServicePage slug={slug} />
    </>
  );
}
