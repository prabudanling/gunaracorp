"use client";

import { usePageStore } from "@/lib/navigation";
import { PageShell } from "./page-shell";
import { Contact } from "./contact";

export function KontakPage() {
  const subject = usePageStore((s) => s.subject);

  return (
    <PageShell
      page="kontak"
      lead="Ceritakan tantangan Anda — bisnis, riset, buku, atau jiwa yang butuh didampingi. Kami membalas dengan serius dan cepat."
      cta={false}
    >
      <Contact initialService={subject} />
    </PageShell>
  );
}
