import { MisiPage } from "@/components/gunara/pages-misi";
import { JsonLd, seo, breadcrumbLd } from "@/lib/seo";

export const metadata = seo({
  title: "Misi Peradaban — Satu Visi, Tiga Warisan",
  description:
    "Tiga misi ekosistem Gunara: sistem yang memuliakan bisnis, ilmu yang menyambung peradaban, dan jiwa yang dipulihkan. Satu visi, tiga warisan untuk Indonesia.",
  path: "/misi",
  keywords: ["misi peradaban", "visi Gunara", "Gugun Gunara misi", "warisan peradaban"],
});

export default function MisiRoute() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Beranda", path: "/" },
          { name: "Misi", path: "/misi" },
        ])}
      />
      <MisiPage />
    </>
  );
}
