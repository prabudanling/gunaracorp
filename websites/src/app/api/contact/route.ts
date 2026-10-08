import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter").max(120),
  email: z.string().email("Email tidak valid").max(200),
  phone: z.string().max(40).optional().nullable(),
  service: z.string().max(120).optional().nullable(),
  message: z.string().min(10, "Pesan minimal 10 karakter").max(5000),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Data tidak valid",
          details: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, phone, service, message } = parsed.data;

    const lead = await db.contactLead.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone?.trim() || null,
        service: service?.trim() || null,
        message: message.trim(),
      },
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Terima kasih. Pesan Anda telah kami terima dan akan ditindaklanjuti oleh tim Gunara.",
        data: { id: lead.id },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[API /api/contact] Error:", error);
    return NextResponse.json(
      { success: false, error: "Terjadi kesalahan server. Silakan coba lagi." },
      { status: 500 }
    );
  }
}
