import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  suburb?: string;
  postcode?: string;
  state?: string;
  purpose?: string;
  hearAbout?: string;
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
    firstName: toString(data.firstName),
    lastName: toString(data.lastName),
    email: toString(data.email),
    phone: toString(data.phone),
    suburb: toString(data.suburb),
    postcode: toString(data.postcode),
    state: toString(data.state),
    purpose: toString(data.purpose),
    hearAbout: toString(data.hearAbout),
    message: toString(data.message),
  };

  if (!payload.firstName || !payload.lastName || !payload.email) {
    return NextResponse.json({ error: "First name, last name, and email are required." }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_ENCRYPTION, CONTACT_RECIPIENT, CONTACT_FROM } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    return NextResponse.json(
      { error: "Email transport is not configured on the server." },
      { status: 500 }
    );
  }

  const portNumber = Number(SMTP_PORT);
  const useSsl = SMTP_ENCRYPTION === "ssl" || SMTP_ENCRYPTION === "465";
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: portNumber,
    secure: useSsl || portNumber === 465,
    requireTLS: !useSsl,
    authMethod: "LOGIN",
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const recipient = CONTACT_RECIPIENT || "admin@fundeq.com.au";
  const fromAddress = CONTACT_FROM || SMTP_USER;
  const fullName = `${payload.firstName} ${payload.lastName}`.trim();

  const text = [
    `Name: ${fullName}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone || "-"}`,
    `Suburb: ${payload.suburb || "-"}`,
    `Postcode: ${payload.postcode || "-"}`,
    `State: ${payload.state || "-"}`,
    `Purpose: ${payload.purpose || "-"}`,
    `Heard about us: ${payload.hearAbout || "-"}`,
    "",
    "Message:",
    payload.message || "-",
  ].join("\n");

  try {
    await transporter.sendMail({
      from: fromAddress,
      to: recipient,
      replyTo: payload.email,
      subject: `New contact form submission from ${fullName}`,
      text,
    });
  } catch (error) {
    console.error("Contact form email failed", error);
    return NextResponse.json({ error: "Unable to send your request right now." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
