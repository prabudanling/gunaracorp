"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send, Loader2, ShieldCheck, Users } from "lucide-react";
import { services } from "./data";
import { Reveal, SectionHeading } from "./section";

type ContactForm = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const emptyForm: ContactForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export function Contact({ initialService }: { initialService?: string | null }) {
  const [form, setForm] = useState<ContactForm>({ ...emptyForm, service: initialService ?? "" });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterLoading, setNewsletterLoading] = useState(false);
  const { toast } = useToast();

  const validate = (): boolean => {
    const next: Partial<Record<keyof ContactForm, string>> = {};
    if (form.name.trim().length < 2) next.name = "Nama minimal 2 karakter.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Email tidak valid.";
    if (form.message.trim().length < 10) next.message = "Ceritakan sedikit lebih panjang (min. 10 karakter).";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submitContact = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || null,
          service: form.service || null,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        toast({
          title: "Pesan Terkirim",
          description: data.message,
        });
        setForm(emptyForm);
      } else {
        toast({
          title: "Gagal Mengirim",
          description: data.error ?? "Terjadi kesalahan. Silakan coba lagi.",
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
      setSubmitting(false);
    }
  };

  const submitNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      toast({
        title: "Email Tidak Valid",
        description: "Mohon periksa kembali alamat email Anda.",
        variant: "destructive",
      });
      return;
    }
    setNewsletterLoading(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newsletterEmail }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        toast({ title: "Selamat Bergabung", description: data.message });
        setNewsletterEmail("");
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
      setNewsletterLoading(false);
    }
  };

  const set = (key: keyof ContactForm) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((er) => ({ ...er, [key]: undefined }));
  };

  return (
    <section
      id="kontak"
      aria-label="Kontak dan Kolaborasi"
      className="relative border-t border-primary/10 bg-noir-soft/60 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <SectionHeading
          i18nKey="sec.contact"
          eyebrow="Kontak & Kolaborasi"
          title="Mulai dari Satu Percakapan"
          description="Ceritakan tantangan Anda — bisnis, riset, buku, atau jiwa yang butuh didampingi. Kami membalas dengan serius dan cepat."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:gap-14">
          {/* Contact form */}
          <Reveal>
            <form
              onSubmit={submitContact}
              noValidate
              className="rounded-2xl border border-primary/20 bg-card/70 p-6 md:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">
                    Nama Lengkap <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="contact-name"
                    placeholder="Nama Anda"
                    value={form.name}
                    onChange={set("name")}
                    className="border-primary/20 bg-background/60 focus-visible:ring-primary/50"
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <p className="text-xs text-red-400">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-email">
                    Email <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="nama@email.com"
                    value={form.email}
                    onChange={set("email")}
                    className="border-primary/20 bg-background/60 focus-visible:ring-primary/50"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <p className="text-xs text-red-400">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-phone">No. WhatsApp (opsional)</Label>
                  <Input
                    id="contact-phone"
                    type="tel"
                    placeholder="+62 8xx xxxx xxxx"
                    value={form.phone}
                    onChange={set("phone")}
                    className="border-primary/20 bg-background/60 focus-visible:ring-primary/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-service">Bidang yang Dibutuhkan</Label>
                  <Select
                    value={form.service}
                    onValueChange={(v) => setForm((f) => ({ ...f, service: v }))}
                  >
                    <SelectTrigger
                      id="contact-service"
                      className="border-primary/20 bg-background/60 focus-visible:ring-primary/50"
                    >
                      <SelectValue placeholder="Pilih layanan / identitas" />
                    </SelectTrigger>
                    <SelectContent className="border-primary/25 bg-popover">
                      {services.map((s) => (
                        <SelectItem key={s.id} value={s.name}>
                          {s.name}
                        </SelectItem>
                      ))}
                      <SelectItem value="Mentoring Santri Angon">
                        Mentoring Santri Angon
                      </SelectItem>
                      <SelectItem value="Kolaborasi Riset/Jurnal">
                        Kolaborasi Riset / Jurnal
                      </SelectItem>
                      <SelectItem value="Lainnya">Lainnya</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mt-5 space-y-2">
                <Label htmlFor="contact-message">
                  Pesan Anda <span className="text-primary">*</span>
                </Label>
                <Textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Ceritakan konteks, tujuan, dan timeline yang Anda harapkan..."
                  value={form.message}
                  onChange={set("message")}
                  className="resize-none border-primary/20 bg-background/60 focus-visible:ring-primary/50"
                  aria-invalid={!!errors.message}
                />
                {errors.message && <p className="text-xs text-red-400">{errors.message}</p>}
              </div>

              <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="flex items-center gap-2 text-xs text-muted-foreground">
                  <ShieldCheck className="h-4 w-4 text-primary/80" aria-hidden />
                  Data Anda aman dan tidak dibagikan ke pihak manapun.
                </p>
                <Button
                  type="submit"
                  disabled={submitting}
                  className="bg-primary text-primary-foreground transition-all duration-300 hover:shadow-[0_0_30px_-8px_var(--royal)] disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Kirim Pesan
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Reveal>

          {/* Side: newsletter + info */}
          <div className="space-y-5">
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-2xl border border-primary/25 bg-primary/[0.06] p-7">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-primary/15 blur-3xl"
                />
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
                    <Users className="h-5 w-5 text-primary" aria-hidden />
                  </span>
                  <div>
                    <p className="font-display text-lg font-bold text-foreground">
                      Surat Peradaban
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Newsletter mingguan — gratis
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Satu surat setiap Jumat: riset terbaru, potongan buku, puisi, dan
                  blueprint yang bisa langsung dipraktikkan.
                </p>
                <form onSubmit={submitNewsletter} className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <div className="relative flex-1">
                    <Mail
                      className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                      aria-hidden
                    />
                    <Input
                      type="email"
                      placeholder="email Anda"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="border-primary/25 bg-background/70 pl-10 focus-visible:ring-primary/50"
                      aria-label="Alamat email newsletter"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={newsletterLoading}
                    className="bg-primary text-primary-foreground disabled:opacity-60"
                  >
                    {newsletterLoading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      "Berlangganan"
                    )}
                  </Button>
                </form>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="rounded-2xl border border-primary/15 bg-card/60 p-7">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary/85">
                  Respons & Jam Kerja
                </p>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                    Balasan email: maks. 1×24 jam kerja
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                    Senin–Sabtu, 08.00–20.00 WIB
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                    Konsultasi darurat: tulis &ldquo;URGENT&rdquo; di awal pesan
                  </li>
                </ul>
                <div className="mt-6 space-y-2 border-t border-primary/10 pt-5 text-sm">
                  <p className="flex items-center gap-2 text-foreground/85">
                    <Mail className="h-4 w-4 text-primary" aria-hidden />
                    halo@gunara.web.id
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
