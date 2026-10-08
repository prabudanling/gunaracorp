"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Loader2, Send, Sparkles, Newspaper } from "lucide-react";
import { PageShell } from "./page-shell";
import { newsletterEditions } from "./data";
import { usePageStore } from "@/lib/navigation";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { StaggerGroup, StaggerItem } from "./section";

export function SuratPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = usePageStore((s) => s.navigate);
  const { toast } = useToast();

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Email Tidak Valid",
        description: "Mohon periksa kembali alamat email Anda.",
        variant: "destructive",
      });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        toast({ title: "Selamat Bergabung", description: data.message });
        setEmail("");
      } else {
        toast({
          title: "Gagal Berlangganan",
          description: data.error ?? "Coba lagi nanti.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Koneksi Bermasalah",
        description: "Periksa koneksi internet Anda dan coba lagi.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageShell
      page="surat"
      lead="Satu surat setiap Jumat: riset terbaru, potongan buku yang belum terbit, satu puisi, dan satu blueprint yang bisa langsung dipraktikkan. Gratis selamanya."
      cta={false}
    >
      {/* Form berlangganan */}
      <div className="relative mx-auto max-w-2xl overflow-hidden rounded-3xl border border-primary/25 bg-primary/[0.07] p-8 text-center md:p-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 left-1/2 h-40 w-[420px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"
        />
        <Sparkles className="mx-auto h-8 w-8 text-primary" aria-hidden />
        <h2 className="mt-4 font-display text-2xl font-bold md:text-3xl">
          <span className="text-royal-gradient">Surat Peradaban</span>
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
          Bergabung dengan ribuan pembaca — pemimpin, akademisi, dan perantau yang
          ingin berpikir lebih jernih setiap pekan.
        </p>
        <form onSubmit={subscribe} className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Mail
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
            <Input
              type="email"
              placeholder="email Anda"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-primary/25 bg-background/70 pl-10 focus-visible:ring-primary/50"
              aria-label="Alamat email newsletter"
            />
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="bg-primary text-primary-foreground disabled:opacity-60"
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Berlangganan"}
          </Button>
        </form>
        <p className="mt-4 text-[11px] text-muted-foreground">
          Tanpa spam. Tanpa penjualan data. Berhenti kapan saja dengan satu klik.
        </p>
      </div>

      {/* Arsip edisi */}
      <div className="mt-16">
        <h2 className="mb-2 flex items-center justify-center gap-2 font-display text-2xl font-bold md:text-3xl">
          <Newspaper className="h-6 w-6 text-primary" aria-hidden />
          <span className="text-royal-gradient">Arsip Edisi</span>
        </h2>
        <p className="mb-8 text-center text-sm text-muted-foreground">
          Sekilas isi surat-surat terakhir yang terkirim.
        </p>
        <StaggerGroup className="grid gap-4 md:grid-cols-2">
          {newsletterEditions.map((e) => (
            <StaggerItem key={e.no}>
              <motion.article
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 26 }}
                className="h-full rounded-2xl border border-primary/15 bg-card/60 p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-primary/80">
                    {e.no}
                  </span>
                  <span className="text-[11px] text-muted-foreground">{e.date}</span>
                </div>
                <h3 className="mt-3 font-display text-lg font-bold leading-snug text-foreground">
                  {e.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.summary}</p>
                <Link
                  href={`/surat/${e.slug}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  Baca Surat →
                </Link>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>

      {/* CTA kontak */}
      <div className="mt-14 text-center">
        <p className="text-sm text-muted-foreground">
          Ingin berbagi ide atau menanggapi satu edisi?{" "}
          <button
            type="button"
            onClick={() => navigate("kontak", { subject: "Tanggapan Surat Peradaban" })}
            className="font-semibold text-primary underline-offset-4 hover:underline"
          >
            Tulis langsung kepada kami
          </button>{" "}
          — atau email halo@gunara.web.id
        </p>
      </div>
    </PageShell>
  );
}
