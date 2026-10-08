import { MentoringPage } from "@/components/gunara/pages-mentoring";
import { JsonLd, seo, breadcrumbLd } from "@/lib/seo";

export const metadata = seo({
  title: "Mentoring Angon 90 Hari — Pendampingan Pemulihan",
  description:
    "Program mentoring 90 hari karya Santri Angon: pendampingan pemulihan jiwa, disiplin harian, dan pemaknaan ulang — kerahasiaan dijaga penuh, pendampingan yang benar-benar hadir.",
  path: "/mentoring",
  keywords: [
    "mentoring pemulihan",
    "pendampingan mental",
    "program 90 hari",
    "Santri Angon mentoring",
  ],
});

export default function MentoringRoute() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Beranda", path: "/" },
          { name: "Mentoring Angon", path: "/mentoring" },
        ])}
      />
      <MentoringPage />
    </>
  );
}
