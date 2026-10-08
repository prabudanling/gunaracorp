import { notFound } from "next/navigation";
import { DisciplinePage } from "@/components/gunara/discipline-page";
import { disciplines } from "@/components/gunara/data";
import { JsonLd, seo, breadcrumbLd } from "@/lib/seo";

export function generateStaticParams() {
  return disciplines.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const discipline = disciplines.find((d) => d.slug === slug);
  if (!discipline) return {};
  return seo({
    title: `${discipline.name} — Disiplin Polymath Gunara`,
    description: discipline.description,
    path: `/disiplin/${discipline.slug}`,
    keywords: [discipline.name, "kepakearan", "Gugun Gunara", "polymath Indonesia"],
  });
}

export default async function DisiplinRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const discipline = disciplines.find((d) => d.slug === slug);
  if (!discipline) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Beranda", path: "/" },
          { name: discipline.name, path: `/disiplin/${discipline.slug}` },
        ])}
      />
      <DisciplinePage slug={slug} />
    </>
  );
}
