import { notFound } from "next/navigation";
import { CompanyPage } from "@/components/gunara/company-page";
import { companies } from "@/components/gunara/data";
import { JsonLd, seo, breadcrumbLd } from "@/lib/seo";

export function generateStaticParams() {
  return companies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const company = companies.find((c) => c.slug === slug);
  if (!company) return {};
  return seo({
    title: `${company.name} (${company.domain}) — Grup Perusahaan Gunara`,
    description: company.description,
    path: `/perusahaan/${company.slug}`,
    keywords: [company.name, company.domain, "Gugun Gunara", company.tagline],
  });
}

export default async function PerusahaanDetailRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const company = companies.find((c) => c.slug === slug);
  if (!company) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Beranda", path: "/" },
            { name: "Grup Perusahaan", path: "/perusahaan" },
            { name: company.name, path: `/perusahaan/${company.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: company.name,
            url: company.url,
            description: company.description,
            founder: {
              "@type": "Person",
              name: "Gugun Gunara",
              url: "https://gunara.web.id",
            },
            parentOrganization: {
              "@type": "Organization",
              name: "Gunara Group",
              url: "https://gunara.web.id",
            },
          },
        ]}
      />
      <CompanyPage slug={slug} />
    </>
  );
}
