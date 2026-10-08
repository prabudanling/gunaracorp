import { notFound } from "next/navigation";
import { MissionPhasePage } from "@/components/gunara/mission-phase-page";
import { missionPhases } from "@/components/gunara/data";
import { JsonLd, seo, breadcrumbLd, SITE_URL } from "@/lib/seo";

export function generateStaticParams() {
  return missionPhases.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const phase = missionPhases.find((m) => m.slug === slug);
  if (!phase) return {};
  return seo({
    title: `${phase.title} — ${phase.phase} Misi Peradaban`,
    description: `${phase.phase} (${phase.period}): ${phase.items[0] ?? ""} — peta jalan misi peradaban Gunara.`,
    path: `/misi/${phase.slug}`,
    keywords: [
      "misi peradaban Gunara",
      "peta jalan misi",
      phase.title,
      "satu miliar jiwa",
    ],
  });
}

export default async function MisiDetailRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const idx = missionPhases.findIndex((m) => m.slug === slug);
  if (idx === -1) notFound();
  const phase = missionPhases[idx];
  const prev = idx > 0 ? missionPhases[idx - 1] : null;
  const next = idx < missionPhases.length - 1 ? missionPhases[idx + 1] : null;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Beranda", path: "/" },
            { name: "Misi Peradaban", path: "/misi" },
            { name: phase.title, path: `/misi/${phase.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `${phase.title} — ${phase.phase} Misi Peradaban`,
            description: `${phase.phase} · ${phase.period}`,
            inLanguage: "id-ID",
            articleSection: "Peta Jalan Misi Peradaban",
            author: {
              "@type": "Organization",
              name: "Gunara — Ekosistem Konsultansi & Kepemimpinan Intelektual",
              url: SITE_URL,
            },
            isPartOf: {
              "@type": "CollectionPage",
              name: "Misi Peradaban",
              url: `${SITE_URL}/misi`,
            },
            mainEntityOfPage: `${SITE_URL}/misi/${phase.slug}`,
            text: phase.items.join("\n"),
          },
        ]}
      />
      <MissionPhasePage
        phase={phase}
        prev={prev ? { slug: prev.slug, title: prev.title, href: `/misi/${prev.slug}` } : null}
        next={next ? { slug: next.slug, title: next.title, href: `/misi/${next.slug}` } : null}
      />
    </>
  );
}
