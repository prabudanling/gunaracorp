"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { books } from "./data";
import { BookCover } from "./book-cover";

// ------------------------------------------------------------
// BookCard — kartu buku; seluruh kartu adalah <Link> ke halaman
// detail /karya/[slug] — crawlable oleh Google (internal linking).
// ------------------------------------------------------------
export function BookCard() {
  return (
    <>
      {books.map((book) => (
        <motion.div
          key={book.slug}
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 280, damping: 24 }}
          className="h-full"
        >
          <Link
            href={`/karya/${book.slug}`}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-primary/15 bg-card/70 text-left transition-all duration-500 hover:border-primary/40 hover:royal-glow"
            aria-label={`Buka halaman buku ${book.title}`}
          >
          <div className="relative mx-5 mt-5 aspect-[3/4] overflow-hidden rounded-xl border border-primary/20">
            <BookCover book={book} sizes="(max-width: 640px) 100vw, 33vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
            <div className="absolute inset-x-0 bottom-0 p-3.5">
              <Badge
                variant="outline"
                className="border-primary/40 bg-background/70 text-[10px] font-semibold uppercase tracking-widest text-primary backdrop-blur-sm"
              >
                {book.status}
              </Badge>
            </div>
          </div>

          <div className="flex flex-1 flex-col p-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/80">
              {book.category}
            </p>
            <h3 className="mt-1.5 font-display text-lg font-bold leading-snug text-foreground group-hover:text-primary">
              {book.title}
            </h3>
            <p className="mt-1.5 flex-1 text-xs leading-relaxed text-muted-foreground">
              {book.subtitle}
            </p>
            <div className="mt-4 flex items-center justify-between border-t border-primary/10 pt-3 text-[11px] text-muted-foreground">
              <span>{book.author}</span>
              <span>
                {book.pages} hlm • {book.year}
              </span>
            </div>
          </div>
          </Link>
        </motion.div>
      ))}
    </>
  );
}
