import { notFound } from "next/navigation";
import { PhotoPage } from "@/components/gunara/photo-page";
import { photos } from "@/components/gunara/data";
import { JsonLd, seo, breadcrumbLd, SITE_URL } from "@/lib/seo";

export function generateStaticParams() {
  return photos.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const photo = photos.find((p) => p.slug === slug);
  if (!photo) return {};
  return seo({
    title: `${photo.title} — Galeri Perjalanan`,
    description: photo.caption.slice(0, 155),
    path: `/galeri/${photo.slug}`,
    keywords: [
      "galeri Gugun Gunara",
      photo.title,
      "foto asli gunara.web.id",
    ],
  });
}

export default async function GaleriDetailRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const idx = photos.findIndex((p) => p.slug === slug);
  if (idx === -1) notFound();
  const photo = photos[idx];
  const prev = idx > 0 ? photos[idx - 1] : null;
  const next = idx < photos.length - 1 ? photos[idx + 1] : null;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Beranda", path: "/" },
            { name: "Galeri Perjalanan", path: "/galeri" },
            { name: photo.title, path: `/galeri/${photo.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ImageObject",
            contentUrl: `${SITE_URL}${photo.src}`,
            thumbnailUrl: `${SITE_URL}${photo.src}`,
            name: photo.title,
            description: photo.caption,
            about: {
              "@type": "Person",
              name: "Gugun Gunara",
              url: SITE_URL,
            },
            representativeOfPage: true,
            inLanguage: "id-ID",
          },
        ]}
      />
      <PhotoPage
        photo={photo}
        prev={prev ? { slug: prev.slug, title: prev.title, href: `/galeri/${prev.slug}` } : null}
        next={next ? { slug: next.slug, title: next.title, href: `/galeri/${next.slug}` } : null}
      />
    </>
  );
}
