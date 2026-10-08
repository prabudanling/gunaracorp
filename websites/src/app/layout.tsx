import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display, Amiri } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { NavigationProvider } from "@/components/gunara/navigation-provider";
import { I18nProvider } from "@/lib/i18n/provider";
import { LanguageSwitcher } from "@/components/gunara/language-switcher";
import { Navbar } from "@/components/gunara/navbar";
import { Footer } from "@/components/gunara/footer";
import { JsonLd, personLd, websiteLd, SITE_URL } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

const amiri = Amiri({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Gugun Gunara — Konsultan Bisnis Senior 17+ Tahun | Gunara.web.id",
    template: "%s | Gunara.web.id",
  },
  description:
    "Website resmi Gugun Gunara (Muhammad Lutfi Azmi, Prabu Danling, Santri Angon). Konsultan bisnis senior sejak 2009, pendiri 5 perusahaan — pusatperizinan.com, topkonsultan.web.id, komitehaji.id, pppdigital.id, pppbisnis.com. Layanan konsultansi strategis, perizinan, sertifikasi, dan pendampingan.",
  keywords: [
    "Gugun Gunara",
    "Muhammad Lutfi Azmi",
    "Prabu Danling",
    "Santri Angon",
    "konsultan bisnis senior",
    "konsultan manajemen Indonesia",
    "jasa perizinan usaha",
    "pusatperizinan.com",
    "komitehaji.id",
    "pppdigital.id",
    "pppbisnis.com",
    "topkonsultan.web.id",
    "konsultan strategis",
    "sertifikasi kompetensi",
    "gunara.web.id",
  ],
  authors: [{ name: "Gugun Gunara", url: SITE_URL }],
  creator: "Gugun Gunara",
  publisher: "Gunara.web.id",
  openGraph: {
    title: "Gugun Gunara — Konsultan Bisnis Senior 17+ Tahun",
    description:
      "Konsultan bisnis senior sejak 2009. Pendiri 5 perusahaan. Ekosistem layanan konsultansi, perizinan, sertifikasi, karya, dan riset dalam satu atap digital.",
    url: SITE_URL,
    siteName: "Gunara.web.id",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gugun Gunara — Konsultan Bisnis Senior 17+ Tahun",
    description:
      "Konsultan bisnis senior sejak 2009. Pendiri 5 perusahaan. Ekosistem layanan konsultansi, perizinan, sertifikasi, karya, dan riset.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0914",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${amiri.variable} antialiased bg-background text-foreground`}
      >
        <NavigationProvider>
          <I18nProvider>
            <div className="flex min-h-screen flex-col bg-background text-foreground">
              <Navbar />
              {children}
              <Footer />
            </div>
            <LanguageSwitcher />
          </I18nProvider>
        </NavigationProvider>
        <Toaster />
        <JsonLd data={[personLd(), websiteLd()]} />
      </body>
    </html>
  );
}
