import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { z } from "zod";

const newsletterSchema = z.object({
  email: z.string().email("Email tidak valid").max(200),
  name: z.string().max(120).optional().nullable(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const parsed = newsletterSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Email tidak valid",
          details: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { email, name } = parsed.data;

    const subscriber = await db.newsletterSubscriber.upsert({
      where: { email: email.trim().toLowerCase() },
      update: { active: true, name: name?.trim() || null },
      create: {
        email: email.trim().toLowerCase(),
        name: name?.trim() || null,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Selamat bergabung. Anda akan menerima riset, refleksi, dan blueprint terbaru dari ekosistem Gunara.",
        data: { id: subscriber.id },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[API /api/newsletter] Error:", error);
    return NextResponse.json(
      { success: false, error: "Terjadi kesalahan server. Silakan coba lagi." },
      { status: 500 }
    );
  }
}
