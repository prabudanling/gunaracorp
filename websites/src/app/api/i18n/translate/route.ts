import { NextResponse } from "next/server";
import ZAI from "z-ai-web-dev-sdk";
import { db } from "@/lib/db";
import { getLanguage } from "@/lib/i18n/languages";
import { SOURCE_KEYS, sourceFor } from "@/lib/i18n/dictionary";

// ------------------------------------------------------------
// POST /api/i18n/translate  { lang: "ar-SA" }
// ------------------------------------------------------------
// 1. Resolusi locale → bahasa dasar (base) untuk efisiensi cache:
//    195 negara ≈ 110 bahasa dasar; varian regional berbagi hasil.
// 2. Cek cache SQLite (TranslationCache) — bahasa yang pernah
//    diterjemahkan balas instan tanpa menyentuh LLM.
// 3. Kunci yang belum ada diterjemahkan LLM dalam batch @40 kunci,
//    berurutan + retry per batch, lalu disimpan permanen.
// ------------------------------------------------------------

export const runtime = "nodejs";
export const maxDuration = 120;

const CHUNK_SIZE = 40;
const MAX_ATTEMPTS_PER_CHUNK = 3;

/** Dedupe in-flight: permintaan paralel untuk bahasa sama berbagi satu proses */
const inflight = new Map<string, Promise<Record<string, string>>>();

const BRAND_KEEP = [
  "Gugun Gunara",
  "Muhammad Lutfi Azmi",
  "M. Lutfi Azmi",
  "Prabu Danling",
  "Santri Angon",
  "McKinsey",
  "gunara.web.id",
  "Enterprise Blueprint",
  "Angon",
];

function buildSystemPrompt(target: string): string {
  return [
    `You are the localisation engine of gunara.web.id, the official website of Gugun Gunara — a senior business consultant (17+ years) from Indonesia.`,
    `Translate UI strings from Indonesian into: ${target}.`,
    `Rules:`,
    `1. Output ONLY a single valid JSON object mapping the EXACT same keys to translated strings. No markdown fences, no commentary.`,
    `2. Professional, elegant, boardroom-grade tone suitable for a premium consulting brand.`,
    `3. Keep these brand names unchanged: ${BRAND_KEEP.join(", ")}.`,
    `4. Keep numbers, "17+", "5", "39", "2009", "2026" and punctuation semantics intact.`,
    `5. Translate naturally for the target culture — do not transliterate common business terms if the language has established terms.`,
    `6. Keep each translation concise (UI string).`,
  ].join("\n");
}

function extractJson(raw: string): Record<string, unknown> | null {
  const cleaned = raw
    .replace(/```json/gi, "")
    .replace(/```/g, "")
    .trim();
  const start = cleaned.indexOf("{");
  const end = cleaned.lastIndexOf("}");
  if (start === -1 || end === -1 || end <= start) return null;
  try {
    return JSON.parse(cleaned.slice(start, end + 1)) as Record<string, unknown>;
  } catch {
    return null;
  }
}

async function translateChunk(
  zai: Awaited<ReturnType<typeof ZAI.create>>,
  target: string,
  chunkKeys: string[]
): Promise<Record<string, string>> {
  const payload: Record<string, string> = {};
  for (const k of chunkKeys) payload[k] = sourceFor(k);

  let lastErr: unknown = null;
  for (let attempt = 1; attempt <= MAX_ATTEMPTS_PER_CHUNK; attempt++) {
    try {
      const completion = await zai.chat.completions.create({
        messages: [
          { role: "assistant", content: buildSystemPrompt(target) },
          { role: "user", content: JSON.stringify(payload) },
        ],
        thinking: { type: "disabled" },
      });
      const raw = completion.choices[0]?.message?.content ?? "";
      const parsed = extractJson(raw);
      if (!parsed) throw new Error("JSON tidak valid dari LLM");

      const out: Record<string, string> = {};
      for (const k of chunkKeys) {
        const v = parsed[k];
        if (typeof v === "string" && v.trim().length > 0) out[k] = v.trim();
      }
      if (Object.keys(out).length === 0) throw new Error("Terjemahan kosong");
      return out;
    } catch (err) {
      lastErr = err;
      if (attempt < MAX_ATTEMPTS_PER_CHUNK) {
        await new Promise((r) => setTimeout(r, 1200 * attempt * attempt));
      }
    }
  }
  console.error(
    `[i18n] Batch gagal setelah ${MAX_ATTEMPTS_PER_CHUNK} percobaan:`,
    lastErr instanceof Error ? lastErr.message : lastErr
  );
  return {};
}

async function translateAll(
  base: string,
  meta: NonNullable<ReturnType<typeof getLanguage>>,
  missing: string[]
): Promise<Record<string, string>> {
  const zai = await ZAI.create();
  const target = `${meta.english} (${meta.native}) — as written in ${meta.countryEn}`;
  const result: Record<string, string> = {};

  for (let i = 0; i < missing.length; i += CHUNK_SIZE) {
    const chunk = missing.slice(i, i + CHUNK_SIZE);
    const translated = await translateChunk(zai, target, chunk);
    Object.assign(result, translated);

    // Simpan permanen secepatnya — batch berikutnya boleh gagal aman
    const rows = Object.entries(translated);
    for (const [key, value] of rows) {
      await db.translationCache.upsert({
        where: { baseLang_key: { baseLang: base, key } },
        create: { baseLang: base, key, value },
        update: { value },
      });
    }
  }
  return result;
}

export async function POST(req: Request) {
  let lang = "";
  try {
    const body = (await req.json()) as { lang?: string };
    lang = body.lang ?? "";
  } catch {
    return NextResponse.json(
      { ok: false, error: "Body tidak valid" },
      { status: 400 }
    );
  }

  const meta = getLanguage(lang);
  if (!meta) {
    return NextResponse.json(
      { ok: false, error: `Bahasa tidak dikenal: ${lang}` },
      { status: 404 }
    );
  }

  // Bahasa sumber — tidak perlu terjemahan
  if (meta.base === "id") {
    return NextResponse.json({
      ok: true,
      lang: meta.code,
      base: "id",
      dir: "ltr",
      cached: 0,
      translated: 0,
      total: SOURCE_KEYS.length,
      translations: {},
    });
  }

  try {
    const cachedRows = await db.translationCache.findMany({
      where: { baseLang: meta.base },
      select: { key: true, value: true },
    });
    const cached: Record<string, string> = {};
    for (const r of cachedRows) cached[r.key] = r.value;

    const missing = SOURCE_KEYS.filter((k) => !(k in cached));
    let fresh: Record<string, string> = {};

    if (missing.length > 0) {
      const running = inflight.get(meta.base);
      if (running) {
        fresh = await running;
      } else {
        const task = translateAll(meta.base, meta, missing).finally(() =>
          inflight.delete(meta.base)
        );
        inflight.set(meta.base, task);
        fresh = await task;
      }
    }

    const translations = { ...cached, ...fresh };
    return NextResponse.json({
      ok: true,
      lang: meta.code,
      base: meta.base,
      dir: meta.rtl ? "rtl" : "ltr",
      cached: Object.keys(cached).length,
      translated: Object.keys(fresh).length,
      total: SOURCE_KEYS.length,
      translations,
    });
  } catch (err) {
    console.error("[i18n] translate error:", err);
    return NextResponse.json(
      { ok: false, error: "Engine terjemahan sedang sibuk — coba lagi." },
      { status: 500 }
    );
  }
}
