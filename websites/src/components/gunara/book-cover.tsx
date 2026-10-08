"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Book } from "./data";

// ------------------------------------------------------------
// BookCover — sampul buku: memakai gambar AI bila tersedia,
// atau sampul CSS desain emas premium bila tidak ada.
// ------------------------------------------------------------
export function BookCover({
  book,
  className,
  sizes = "(max-width: 768px) 100vw, 33vw",
  priority = false,
}: {
  book: Book;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  if (book.cover) {
    return (
      <Image
        src={book.cover}
        alt={`Sampul buku ${book.title}`}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", className)}
      />
    );
  }

  // Sampul CSS — desain emas yang konsisten dengan brand
  return (
    <div
      className={cn("relative h-full w-full overflow-hidden", className)}
      style={{
        background: `radial-gradient(ellipse at 30% 20%, ${book.accent}33 0%, transparent 55%), linear-gradient(160deg, #171022 0%, #0d0914 60%, #140d1e 100%)`,
      }}
      role="img"
      aria-label={`Sampul buku ${book.title}`}
    >
      {/* Ornamen garis */}
      <div className="absolute inset-3 rounded-lg border border-[oklch(0.72_0.19_305/0.25)]" />
      <div className="absolute inset-5 rounded border border-[oklch(0.72_0.19_305/0.12)]" />
      {/* Tekstur titik */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, oklch(0.72 0.19 305) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
        <span className="mb-4 h-px w-10 bg-[oklch(0.72_0.19_305/0.5)]" />
        <p className="font-display text-xl font-bold leading-snug text-transparent [background:linear-gradient(115deg,#e4d0fa,#a855f7_40%,#f1e8ff_60%,#7e3ff2_85%)] [background-clip:text] [-webkit-background-clip:text] md:text-2xl">
          {book.title}
        </p>
        <span className="mt-4 h-px w-10 bg-[oklch(0.72_0.19_305/0.5)]" />
        <p className="mt-5 text-[10px] uppercase tracking-[0.3em] text-[oklch(0.72_0.19_305/0.7)]">
          {book.author}
        </p>
      </div>
    </div>
  );
}
