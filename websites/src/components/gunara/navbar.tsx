"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkle, ChevronDown, Home, HelpCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { PageKey, pageToPath, pathToPage } from "@/lib/navigation";
import { useT, useI18n } from "@/lib/i18n/store";
import { LanguageTrigger } from "./language-switcher";
import { identities, disciplines, services } from "./data";

type NavLink = { label: string; page: PageKey; text?: string };

const directLinks: NavLink[] = [
  { label: "nav.tentang", page: "tentang" },
  { label: "nav.karya", page: "karya" },
  { label: "nav.jurnal", page: "jurnal" },
];

const identityLinks: NavLink[] = identities.map((i) => ({
  label: i.name,
  page: `identitas-${i.slug}` as PageKey,
}));

const disciplineLinks: NavLink[] = disciplines.map((d) => ({
  label: `disc.${d.slug}`,
  page: `disiplin-${d.slug}` as PageKey,
}));

const serviceLinks: NavLink[] = services.map((s) => ({
  label: `svc.${s.slug}`,
  page: `layanan-${s.slug}` as PageKey,
}));

const moreLinks: NavLink[] = [
  { label: "footer.explore.misi", page: "misi" },
  { label: "footer.explore.blueprint", page: "blueprint" },
  { label: "nav.services", page: "layanan" },
  { label: "footer.col.companies", page: "perusahaan" },
  { label: "footer.trail", page: "rekam-jejak" },
  { label: "footer.cert", page: "sertifikasi" },
  { label: "footer.explore.puisi", page: "puisi" },
  { label: "footer.explore.mentoring", page: "mentoring" },
  { label: "footer.explore.surat", page: "surat" },
  { label: "footer.explore.faq", page: "faq" },
  // Arsip & koleksi — label tetap (di luar kamus i18n inti)
  { label: "Galeri Perjalanan", page: "galeri", text: "Galeri Perjalanan" },
  { label: "Testimoni", page: "testimoni", text: "Testimoni" },
  { label: "Kutipan Peradaban", page: "kutipan", text: "Kutipan Peradaban" },
  { label: "Paket Harga", page: "paket", text: "Paket Harga" },
];

function isActive(page: PageKey, active: string) {
  if (page === "beranda") return active === "beranda";
  if (page.startsWith("identitas-")) return active.startsWith("identitas-");
  if (page.startsWith("disiplin-")) return active.startsWith("disiplin-");
  if (page.startsWith("layanan-")) return active.startsWith("layanan-");
  if (page.startsWith("perusahaan-")) return active.startsWith("perusahaan-");
  return active === page;
}

function pillClass(isActiveNow: boolean) {
  return cn(
    "relative rounded-full px-3 py-2 text-[13px] font-medium transition-colors duration-300 inline-flex items-center gap-1",
    isActiveNow ? "text-primary" : "text-muted-foreground hover:text-foreground"
  );
}

function ActivePill({ show }: { show: boolean }) {
  if (!show) return null;
  return (
    <motion.span
      layoutId="nav-active"
      className="absolute inset-0 -z-10 rounded-full border border-primary/25 bg-primary/10"
      transition={{ type: "spring", stiffness: 380, damping: 32 }}
    />
  );
}

function DropdownGroup({
  label,
  links,
  active,
}: {
  label: string;
  links: NavLink[];
  active: string;
}) {
  const t = useT();
  const anyActive = links.some((l) => isActive(l.page, active));

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button type="button" className={pillClass(anyActive)}>
          {t(label)}
          <ChevronDown className="h-3 w-3 opacity-70" aria-hidden />
          <ActivePill show={anyActive} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        sideOffset={10}
        className="w-64 border-primary/20 bg-popover/95 backdrop-blur-xl"
      >
        <DropdownMenuLabel className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary/70">
          {t(label)}
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-primary/10" />
        {links.map((l) => (
          <DropdownMenuItem key={l.label} asChild>
            <Link
              href={pageToPath(l.page)}
              className={cn(
                "cursor-pointer rounded-lg px-3 py-2.5 text-[13px] transition-colors focus:bg-primary/10",
                isActive(l.page, active) ? "text-primary" : "text-foreground/85"
              )}
            >
              {t(l.label)}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const t = useT();
  const pathname = usePathname();
  const page = pathToPage(pathname);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-primary/15 bg-background/80 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)] backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 md:h-18 md:px-8"
      >
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3" aria-label="Ke beranda">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-primary/40 bg-primary/10">
            <span className="font-display text-sm font-bold text-primary">G</span>
            <span className="absolute inset-0 rounded-full bg-primary/20 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-[0.22em] text-foreground">
              GUNARA
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-primary/80">
              gunara.web.id
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-0.5 lg:flex">
          <Link href="/" className={pillClass(isActive("beranda", page))}>
            {t("nav.home")}
            <ActivePill show={isActive("beranda", page)} />
          </Link>

          <DropdownGroup label="nav.identities" links={identityLinks} active={page} />
          <DropdownGroup label="nav.disciplines" links={disciplineLinks} active={page} />

          {directLinks.map((l) => (
            <Link key={l.page} href={pageToPath(l.page)} className={pillClass(isActive(l.page, page))}>
              {t(l.label)}
              <ActivePill show={isActive(l.page, page)} />
            </Link>
          ))}

          <DropdownGroup label="nav.services" links={serviceLinks} active={page} />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className={cn(
                  pillClass(moreLinks.some((l) => isActive(l.page, page)))
                )}
              >
                {t("nav.more")}
                <ChevronDown className="h-3 w-3 opacity-70" aria-hidden />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              sideOffset={10}
              className="w-64 border-primary/20 bg-popover/95 backdrop-blur-xl"
            >
              <DropdownMenuLabel className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary/70">
                {t("nav.explore")}
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-primary/10" />
              {moreLinks.map((l) => (
                <DropdownMenuItem key={l.page} asChild>
                  <Link
                    href={pageToPath(l.page)}
                    className={cn(
                      "cursor-pointer rounded-lg px-3 py-2.5 text-[13px] transition-colors focus:bg-primary/10",
                      isActive(l.page, page) ? "text-primary" : "text-foreground/85"
                    )}
                  >
                    {l.text ?? t(l.label)}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Bahasa + CTA + mobile */}
        <div className="flex items-center gap-2">
          <LanguageTrigger variant="desktop" className="hidden lg:inline-flex" />
          <Button
            size="sm"
            asChild
            className="hidden bg-primary text-primary-foreground shadow-[0_0_20px_-5px_var(--royal)] transition-all hover:shadow-[0_0_30px_-5px_var(--royal)] sm:inline-flex"
          >
            <Link href="/kontak">
              <Sparkle className="mr-1.5 h-3.5 w-3.5" />
              {t("nav.cta")}
            </Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="border-primary/30 bg-transparent lg:hidden"
                aria-label={t("nav.menu.aria")}
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[88vw] max-w-sm overflow-y-auto scrollbar-royal border-primary/20 bg-background/95 pb-24 backdrop-blur-xl"
            >
              <SheetHeader>
                <SheetTitle className="font-display tracking-[0.2em] text-primary">
                  GUNARA
                </SheetTitle>
              </SheetHeader>

              <div className="mt-2 px-2">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="mb-2 flex w-full items-center gap-3 rounded-lg px-4 py-3 text-base font-semibold text-foreground/90 transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  <Home className="h-4 w-4 text-primary" aria-hidden /> {t("mobile.home")}
                </Link>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="identitas" className="border-primary/10">
                    <AccordionTrigger className="px-4 py-3 text-base font-semibold hover:no-underline">
                      {t("mobile.identities")}
                    </AccordionTrigger>
                    <AccordionContent className="pb-2">
                      {identityLinks.map((l) => (
                        <Link
                          key={l.page}
                          href={pageToPath(l.page)}
                          onClick={() => setOpen(false)}
                          className="block w-full rounded-lg px-4 py-2.5 text-left text-sm text-foreground/85 transition-colors hover:bg-primary/10 hover:text-primary"
                        >
                          {l.label}
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="disiplin" className="border-primary/10">
                    <AccordionTrigger className="px-4 py-3 text-base font-semibold hover:no-underline">
                      {t("mobile.disciplines")}
                    </AccordionTrigger>
                    <AccordionContent className="pb-2">
                      {disciplineLinks.map((l) => (
                        <Link
                          key={l.page}
                          href={pageToPath(l.page)}
                          onClick={() => setOpen(false)}
                          className="block w-full rounded-lg px-4 py-2.5 text-left text-sm text-foreground/85 transition-colors hover:bg-primary/10 hover:text-primary"
                        >
                          {l.label}
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="layanan" className="border-primary/10">
                    <AccordionTrigger className="px-4 py-3 text-base font-semibold hover:no-underline">
                      {t("mobile.services")}
                    </AccordionTrigger>
                    <AccordionContent className="pb-2">
                      {serviceLinks.map((l) => (
                        <Link
                          key={l.page}
                          href={pageToPath(l.page)}
                          onClick={() => setOpen(false)}
                          className="block w-full rounded-lg px-4 py-2.5 text-left text-sm text-foreground/85 transition-colors hover:bg-primary/10 hover:text-primary"
                        >
                          {l.label}
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="mt-3 space-y-0.5">
                  {[...directLinks, ...moreLinks].map((l) => (
                    <Link
                      key={l.page + l.label}
                      href={pageToPath(l.page)}
                      onClick={() => setOpen(false)}
                      className="block w-full rounded-lg px-4 py-2.5 text-left text-sm font-medium text-foreground/85 transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      {l.text ?? t(l.label)}
                    </Link>
                  ))}
                </div>

                {/* Pilih bahasa — 195 negara */}
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    useI18n.getState().setSwitcherOpen(true);
                  }}
                  className="mt-4 flex w-full items-center gap-2 rounded-lg border border-primary/20 px-4 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
                >
                  <Globe className="h-4 w-4" aria-hidden /> {t("lang.trigger")} · 195
                </button>

                <Link
                  href="/faq"
                  onClick={() => setOpen(false)}
                  className="mt-2 flex w-full items-center gap-2 rounded-lg border border-primary/20 px-4 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
                >
                  <HelpCircle className="h-4 w-4" aria-hidden /> {t("nav.help")}
                </Link>
              </div>

              <AnimatePresence>
                <div className="absolute inset-x-6 bottom-6 pb-[env(safe-area-inset-bottom)]">
                  <Button asChild className="w-full bg-primary text-primary-foreground">
                    <Link href="/kontak" onClick={() => setOpen(false)}>
                      {t("nav.cta")}
                    </Link>
                  </Button>
                </div>
              </AnimatePresence>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}
