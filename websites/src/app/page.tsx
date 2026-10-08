import type { Metadata } from "next";
import { Home } from "@/components/gunara/home";
import { JsonLd, breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = {
  alternates: { canonical: "https://gunara.web.id" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([{ name: "Beranda", path: "/" }])}
      />
      <Home />
    </>
  );
}
