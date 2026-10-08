import { notFound } from "next/navigation";
import { CertificationPage } from "@/components/gunara/certification-page";
import { certifications } from "@/components/gunara/data";
import { JsonLd, seo, breadcrumbLd, SITE_URL } from "@/lib/seo";

export function generateStaticParams() {
  return certifications.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cert = certifications.find((c) => c.slug === slug);
  if (!cert) return {};
  return seo({
    title: `${cert.name} — Pusat Sertifikasi`,
    description: cert.description,
    path: `/sertifikasi/${cert.slug}`,
    keywords: [
      cert.name,
      "sertifikasi Gunara",
      "pusat sertifikasi & akreditasi",
      `sertifikasi ${cert.level} Indonesia`,
    ],
  });
}

export default async function SertifikasiDetailRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const idx = certifications.findIndex((c) => c.slug === slug);
  if (idx === -1) notFound();
  const cert = certifications[idx];
  const prev = idx > 0 ? certifications[idx - 1] : null;
  const next = idx < certifications.length - 1 ? certifications[idx + 1] : null;
  const siblings = certifications
    .filter((c) => c.slug !== cert.slug)
    .map((c) => ({ slug: c.slug, name: c.name, href: `/sertifikasi/${c.slug}` }));

  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Beranda", path: "/" },
            { name: "Pusat Sertifikasi & Akreditasi", path: "/sertifikasi" },
            { name: cert.name, path: `/sertifikasi/${cert.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "EducationalOccupationalCredential",
            name: cert.name,
            description: cert.description,
            educationalLevel: cert.level,
            timeRequired: cert.duration,
            url: `${SITE_URL}/sertifikasi/${cert.slug}`,
            inLanguage: "id-ID",
            offeredBy: {
              "@type": "Organization",
              name: "Gunara",
              url: SITE_URL,
            },
          },
        ]}
      />
      <CertificationPage
        cert={cert}
        siblings={siblings}
        prev={prev ? { slug: prev.slug, title: prev.name, href: `/sertifikasi/${prev.slug}` } : null}
        next={next ? { slug: next.slug, title: next.name, href: `/sertifikasi/${next.slug}` } : null}
      />
    </>
  );
}
