"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { registerRouter } from "@/lib/navigation";

// ------------------------------------------------------------
// NavigationProvider — mendaftarkan instance Next.js App Router
// ke gerbang navigasi Gunara sehingga seluruh `navigate()` dari
// komponen manapun mendorong URL nyata (bukan hash).
// ------------------------------------------------------------
export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    registerRouter(router);
    return () => registerRouter(null);
  }, [router]);

  return <>{children}</>;
}
