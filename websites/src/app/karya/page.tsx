import { KaryaPage } from "@/components/gunara/pages-karya";
import { JsonLd, seo, breadcrumbLd } from "@/lib/seo";

export const metadata = seo({
  title: "Pustaka Peradaban — Karya Buku Prabu Danling",
  description:
    "Koleksi buku Gugun Gunara (Pena Prabu Danling): strategi, ketahanan pangan, kepemimpinan sistemik, AI, hingga puisi pemulihan jiwa. Pustaka yang tumbuh menuju 500 karya.",
  path: "/karya",
  keywords: [
    "buku Gugun Gunara",
    "buku Prabu Danling",
    "buku strategi bisnis Indonesia",
    "buku ketahanan pangan",
    "buku kepemimpinan",
  ],
});

export default function KaryaRoute() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Beranda", path: "/" },
          { name: "Karya", path: "/karya" },
        ])}
      />
      <KaryaPage />
    </>
  );
}
