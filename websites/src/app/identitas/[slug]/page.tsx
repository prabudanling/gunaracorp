import { notFound } from "next/navigation";
import { IdentityPage } from "@/components/gunara/identity-page";
import { identities } from "@/components/gunara/data";
import { JsonLd, seo, breadcrumbLd } from "@/lib/seo";

export function generateStaticParams() {
  return identities.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const identity = identities.find((i) => i.slug === slug);
  if (!identity) return {};
  return seo({
    title: `${identity.name} — ${identity.tagline}`,
    description: identity.description,
    path: `/identitas/${identity.slug}`,
    keywords: [identity.name, identity.tagline, "Gugun Gunara", identity.domain],
  });
}

export default async function IdentitasRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const identity = identities.find((i) => i.slug === slug);
  if (!identity) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Beranda", path: "/" },
          { name: identity.name, path: `/identitas/${identity.slug}` },
        ])}
      />
      <IdentityPage slug={slug} />
    </>
  );
}
