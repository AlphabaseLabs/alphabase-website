import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const form = await req.formData();
  const payload = Object.fromEntries(form.entries());

  // In production: forward to your CRM (HubSpot/Salesforce), email (Resend),
  // or database. For now we just log.
  console.log("New lead:", payload);

  return NextResponse.redirect(new URL("/?submitted=1", req.url), 303);
}
