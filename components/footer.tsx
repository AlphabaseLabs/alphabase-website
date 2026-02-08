import Image from "next/image";
import Link from "next/link";
import { Container } from "./container";
import { Button } from "./button";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  const columns = [
    {
      title: "Sara AI",
      links: [
        { label: "Meet Sara", href: "/#meet" },
        { label: "Features", href: "/#product" },
        { label: "How it works", href: "/#data-security" },
        { label: "Watch a demo", href: "/#demo" },
      ],
    },
    {
      title: "EHR Platform",
      links: [
        { label: "Platform overview", href: "/#product" },
        { label: "Patient comms", href: "/#product" },
        { label: "Automation stats", href: "/#product-stats" },
        { label: "Request a demo", href: "/demo" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Pricing", href: "/pricing" },
        { label: "Careers", href: "https://www.indeed.com/cmp/Alphabase" },
      ],
    },
  ] as const;

  const socials = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/alphabase-official/",
      Icon: Linkedin,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/alphabaseofficial/",
      Icon: Instagram,
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=100095054127578",
      Icon: Facebook,
    },
  ] as const;

  return (
    <footer className="relative overflow-hidden bg-[#033D48] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,185,165,0.28),transparent_55%),radial-gradient(circle_at_15%_85%,rgba(221,135,92,0.22),transparent_60%)] opacity-80" />

      <Container className="relative">
        {/* CTA */}
        <section id="demo" className="py-16 md:py-24 text-center scroll-mt-32">
          <h2 className="text-h2 md:text-h2-lg font-semibold tracking-mercury">
            Turn patient messages into booked
            <br />
            appointments.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-body-lg text-white/70 leading-relaxed">
            Sara handles patient inquiries, scheduling, reminders, and follow‑ups across phone, text, and chat, so your team can focus on care.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              href="/demo"
              size="lg"
              className="focus-visible:ring-offset-[#033D48]"
            >
              Get a demo
            </Button>
            <Button
              href="/pricing"
              variant="secondary"
              size="lg"
              className="bg-transparent text-white ring-1 ring-white/35 hover:bg-white/10 hover:shadow-none shadow-none focus-visible:ring-offset-[#033D48] dark:bg-transparent dark:text-white dark:ring-white/35"
            >
              View pricing
            </Button>
          </div>
        </section>

        <div className="border-t border-white/15" />

        {/* Links + Brand */}
        <section className="py-14">
          <div className="grid gap-12 md:grid-cols-[auto_1fr] md:items-stretch">
            <div className="order-2 md:order-1 md:justify-self-start flex flex-col justify-between h-full">
              <Link href="/" className="inline-flex items-center gap-2">
                <Image
                  src="/logo-icon.svg"
                  alt="Alphabase® icon"
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain rounded-md grayscale invert"
                />
                <Image
                  src="/workmark-dark-logo.svg"
                  alt="Alphabase®"
                  width={733}
                  height={84}
                  className="h-[23px] w-auto brightness-0 invert"
                />
              </Link>

              <div className="mt-auto flex items-center gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-[1.5px] ring-white/30 text-white/80 hover:text-white hover:bg-white/10 transition"
                  >
                    <social.Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="order-1 md:order-2 grid grid-cols-2 gap-x-10 gap-y-12 sm:grid-cols-3 md:justify-self-end">
              {columns.map((col) => (
                <div key={col.title} className="space-y-4">
                  <h3 className="text-body font-semibold tracking-mercury">
                    {col.title}
                  </h3>
                  <ul className="space-y-3">
                    {col.links.map((l) => (
                      <li key={l.label}>
                        <Link
                          href={l.href}
                          className="text-body-sm text-white/70 hover:text-white transition-colors"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="border-t border-white/15" />

        {/* Bottom bar */}
        <section className="py-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-caption text-white/60">
            © {new Date().getFullYear()} Alphabase®. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-caption text-white/60">
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link
              href="/privacy-policy-ccpa"
              className="hover:text-white transition-colors"
            >
              CCPA Privacy Policy
            </Link>
          </div>
        </section>
      </Container>
    </footer>
  );
}
