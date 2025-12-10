import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  role?: string;
  capital?: string;
  timeline?: string;
  message: string;
};

const toString = (value: unknown) => (typeof value === "string" ? value.trim() : "");

export async function POST(request: Request) {
  let data: Record<string, unknown>;

  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const payload: ContactPayload = {
    name: toString(data.name),
    email: toString(data.email),
    company: toString(data.company),
    role: toString(data.role),
    capital: toString(data.capital),
    timeline: toString(data.timeline),
    message: toString(data.message),
  };

  if (!payload.name || !payload.email || !payload.message) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_RECIPIENT, CONTACT_FROM } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    return NextResponse.json(
      { error: "Email transport is not configured on the server." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const recipient = CONTACT_RECIPIENT || "admin@fundeq.com.au";
  const fromAddress = CONTACT_FROM || SMTP_USER;

  const text = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Company: ${payload.company || "-"}`,
    `Role: ${payload.role || "-"}`,
    `Target raise: ${payload.capital || "-"}`,
    `Timeline: ${payload.timeline || "-"}`,
    "",
    "Message:",
    payload.message,
  ].join("\n");

  try {
    await transporter.sendMail({
      from: fromAddress,
      to: recipient,
      replyTo: payload.email,
      subject: `New contact form submission from ${payload.name}`,
      text,
    });
  } catch (error) {
    console.error("Contact form email failed", error);
    return NextResponse.json({ error: "Unable to send your request right now." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
