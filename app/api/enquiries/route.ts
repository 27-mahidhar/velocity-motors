import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

const limit = (value: unknown, max: number) => typeof value === "string" ? value.trim().slice(0, max) : "";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Please submit a valid enquiry." }, { status: 400 });
  }

  const name = limit(body.name, 120);
  const email = limit(body.email, 180);
  const phone = limit(body.phone, 48);
  const interestedCar = limit(body.interestedCar, 120);
  const message = limit(body.message, 2400);
  const enquiryType = body.enquiryType === "test-drive" ? "test-drive" : "enquiry";
  const preferredDate = limit(body.preferredDate, 32);

  if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !phone || !interestedCar || !message) {
    return NextResponse.json({ ok: false, message: "Complete each required field with a valid email address." }, { status: 422 });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceKey) {
    return NextResponse.json({ ok: true, persisted: false, mode: "demo" }, { status: 202 });
  }

  try {
    const supabase = createClient(supabaseUrl, serviceKey, { auth: { persistSession: false, autoRefreshToken: false } });
    const { error } = await supabase.from("enquiries").insert({
      name,
      email,
      phone,
      interested_car: interestedCar,
      message,
      enquiry_type: enquiryType,
      preferred_date: preferredDate || null,
      source: "velocity-motors-website"
    });
    if (error) {
      console.error("Supabase enquiry insert failed:", error.message);
      return NextResponse.json({ ok: false, message: "Your request could not be stored right now. Please use WhatsApp or try again." }, { status: 502 });
    }
    return NextResponse.json({ ok: true, persisted: true }, { status: 201 });
  } catch (error) {
    console.error("Enquiry service unavailable:", error);
    return NextResponse.json({ ok: false, message: "The enquiry service is temporarily unavailable." }, { status: 503 });
  }
}
