import { NextResponse } from "next/server";

const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL ?? "";

export async function POST(req: Request) {
  const form = await req.formData();
  const payload = Object.fromEntries(form.entries());

  console.log("New lead:", payload);

  // Forward to n8n webhook (fire-and-forget so users aren't delayed)
  if (N8N_WEBHOOK_URL) {
    fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch((err) => console.error("n8n webhook error:", err));
  }

  return NextResponse.redirect(new URL("/?submitted=1", req.url), 303);
}
