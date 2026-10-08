"use client";

import { Hero } from "./hero";
import { Manifesto } from "./manifesto";
import { Identities } from "./identities";
import { Disciplines } from "./disciplines";
import { Mission } from "./mission";
import { Blueprint } from "./blueprint";
import { Books } from "./books";
import { Journals } from "./journals";
import { Poetry } from "./poetry";
import { Services } from "./services";
import { CompaniesStrip } from "./companies-strip";
import { Testimonials } from "./testimonials";
import { Contact } from "./contact";

// ------------------------------------------------------------
// Beranda — satu halaman penuh bagian-bagian ekosistem.
// Semua section tersambung ke halaman nyata masing-masing.
// ------------------------------------------------------------
export function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Manifesto />
      <Identities />
      <Disciplines />
      <Mission />
      <Blueprint />
      <Books />
      <Journals />
      <Poetry />
      <Services />
      <CompaniesStrip />
      <Testimonials />
      <Contact />
    </main>
  );
}
