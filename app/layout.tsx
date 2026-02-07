import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alphabase — Avery, the AI teammate for modern clinics",
  description:
    "Avery handles inquiries, scheduling, reminders, and follow‑ups for dental, aesthetics, hair transplant, physiotherapy, and nutrition teams.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Alphabase",
    description:
      "A coachable AI teammate for clinics and wellness practices—built to keep your calendar moving and your inbox calm.",
    type: "website",
  },
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
