import { notFound } from "next/navigation";
import { MentoringPhasePage } from "@/components/gunara/mentoring-phase-page";
import { mentoringPhases } from "@/components/gunara/data";
import { JsonLd, seo, breadcrumbLd, SITE_URL } from "@/lib/seo";

export function generateStaticParams() {
  return mentoringPhases.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const phase = mentoringPhases.find((m) => m.slug === slug);
  if (!phase) return {};
  return seo({
    title: `${phase.title} — ${phase.phase} Mentoring Angon`,
    description: phase.desc.slice(0, 155),
    path: `/mentoring/${phase.slug}`,
    keywords: [
      "mentoring angon",
      "pendampingan pemulihan jiwa",
      phase.title,
      "mentoring santri angon",
    ],
  });
}

export default async function MentoringDetailRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const idx = mentoringPhases.findIndex((m) => m.slug === slug);
  if (idx === -1) notFound();
  const phase = mentoringPhases[idx];
  const prev = idx > 0 ? mentoringPhases[idx - 1] : null;
  const next = idx < mentoringPhases.length - 1 ? mentoringPhases[idx + 1] : null;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Beranda", path: "/" },
            { name: "Mentoring Angon", path: "/mentoring" },
            { name: phase.title, path: `/mentoring/${phase.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `${phase.title} — ${phase.phase} Mentoring Angon (${phase.period})`,
            description: phase.desc,
            inLanguage: "id-ID",
            articleSection: "Program Mentoring Angon 90 Hari",
            author: {
              "@type": "Person",
              name: "Santri Angon",
              alternateName: "Gugun Gunara",
              url: SITE_URL,
            },
            isPartOf: {
              "@type": "CollectionPage",
              name: "Mentoring Angon 90 Hari",
              url: `${SITE_URL}/mentoring`,
            },
            mainEntityOfPage: `${SITE_URL}/mentoring/${phase.slug}`,
            text: phase.items.join("\n"),
          },
        ]}
      />
      <MentoringPhasePage
        phase={phase}
        prev={prev ? { slug: prev.slug, title: prev.title, href: `/mentoring/${prev.slug}` } : null}
        next={next ? { slug: next.slug, title: next.title, href: `/mentoring/${next.slug}` } : null}
      />
    </>
  );
}
