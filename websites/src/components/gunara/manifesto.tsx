"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Compass, Infinity as InfinityIcon, Landmark, ArrowRight } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "./section";

const principles = [
  {
    icon: Compass,
    title: "Amanah di Atas Ambisi",
    body: "Kami membangun dengan satu pertanyaan: apakah ini memuliakan manusia? Reputasi dibangun dari hal yang kita lakukan saat tak ada yang melihat.",
  },
  {
    icon: InfinityIcon,
    title: "Sistem Mengalahkan Motivasi",
    body: "Semangat datang dan pergi; sistem tetap bekerja. Setiap dokumen, buku, dan jurnal yang kami rancang adalah sistem yang hidup lebih lama dari kami.",
  },
  {
    icon: Landmark,
    title: "Warisan di Atas Popularitas",
    body: "Kami menulis untuk seribu tahun ke depan — bukan untuk trending hari ini. Yang abadi selalu dimulai dari yang jujur dan sederhana.",
  },
];

export function Manifesto() {
  return (
    <section
      id="manifesto"
      aria-label="Manifesto Pendiri"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[420px_1fr] lg:gap-16">
          {/* Portrait */}
          <Reveal>
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div
                aria-hidden
                className="absolute -inset-4 -z-10 rounded-[28px] bg-gradient-to-b from-primary/20 via-transparent to-transparent blur-2xl"
              />
              <motion.div
                whileHover={{ scale: 1.015 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-primary/25"
              >
                <Image
                  src="/gunara/portrait.png"
                  alt="Siluet arsitek peradaban dengan sorot cahaya keemasan"
                  fill
                  sizes="(max-width: 1024px) 90vw, 420px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
                    Pendiri & Arsitek
                  </p>
                  <p className="mt-1 font-display text-2xl font-bold text-foreground">
                    Gugun Gunara
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Dikenal juga sebagai M. Lutfi Azmi • Prabu Danling • Santri Angon
                  </p>
                </div>
              </motion.div>

              {/* Emblem badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring", stiffness: 220, damping: 18 }}
                className="absolute -right-5 -top-5 h-20 w-20 overflow-hidden rounded-full border border-primary/30 bg-background/80 shadow-xl backdrop-blur md:-right-7 md:h-24 md:w-24"
              >
                <Image
                  src="/gunara/emblem.png"
                  alt="Lambang heraldik Gunara"
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </Reveal>

          {/* Text */}
          <div>
            <Reveal>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary/60" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/90">
                  Manifesto
                </span>
              </div>
              <h2 className="font-display text-3xl font-bold leading-tight md:text-5xl">
                <span className="text-royal-gradient">Membangun yang Abadi,</span>{" "}
                <span className="text-foreground">Melayani yang Nyata.</span>
              </h2>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                Saya percaya peradaban tidak dibangun oleh kata-kata yang angkuh, tapi
                oleh sistem yang bekerja: pangan yang aman, energi yang bersih, logistik
                yang lancar, ilmu yang jujur, dan jiwa yang pulih. Empat identitas yang
                saya jalankan adalah satu kesetiaan yang sama — memuliakan manusia.
              </p>
            </Reveal>

            <StaggerGroup className="mt-10 space-y-5">
              {principles.map((p) => (
                <StaggerItem key={p.title}>
                  <div className="group flex gap-5 rounded-2xl border border-primary/15 bg-card/50 p-5 transition-all duration-500 hover:border-primary/35 hover:royal-glow md:p-6">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 transition-colors group-hover:bg-primary/15">
                      <p.icon className="h-5 w-5 text-primary" aria-hidden />
                    </span>
                    <div>
                      <p className="font-display text-base font-bold text-foreground md:text-lg">
                        {p.title}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>

            <Reveal delay={0.2}>
              <Link
                href="/tentang"
                className="mt-8 inline-flex items-center gap-2 rounded-lg border border-primary/35 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
              >
                Baca Kisah Lengkap & Perjalanan Kami
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
