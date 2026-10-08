import { notFound } from "next/navigation";
import { BookPage } from "@/components/gunara/book-page";
import { books } from "@/components/gunara/data";
import { JsonLd, seo, breadcrumbLd } from "@/lib/seo";

export function generateStaticParams() {
  return books.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = books.find((b) => b.slug === slug);
  if (!book) return {};
  return seo({
    title: `${book.title} — ${book.author}`,
    description: book.synopsis[0] ?? book.subtitle,
    path: `/karya/${book.slug}`,
    keywords: [book.title, book.category, "buku Gugun Gunara", "Prabu Danling"],
  });
}

export default async function BukuRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = books.find((b) => b.slug === slug);
  if (!book) notFound();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Beranda", path: "/" },
            { name: "Karya", path: "/karya" },
            { name: book.title, path: `/karya/${book.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Book",
            name: book.title,
            author: { "@type": "Person", name: book.author },
            genre: book.category,
            inLanguage: "id",
            numberOfPages: book.pages,
          },
        ]}
      />
      <BookPage slug={slug} />
    </>
  );
}
