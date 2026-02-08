"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import { Menu, X } from "lucide-react";

const nav = [
  { label: "Sara AI", href: "/#meet" },
  { label: "EHR Platform", href: "/#product" },
  { label: "Data Security", href: "/#data-security" },
  { label: "Pricing", href: "/pricing" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-paper/70 backdrop-blur supports-[backdrop-filter]:bg-paper/55 dark:bg-night-950/60 dark:supports-[backdrop-filter]:bg-night-950/45">
      <div className="w-full bg-[#033D48] bg-[image:radial-gradient(circle_at_50%_50%,rgba(0,185,165,0.18),transparent_70%)] text-white text-center text-sm py-2 px-5">
        <span className="font-medium">Update:</span> Alphabase® is now a healthcare AI SaaS platform. For software services, visit{" "}
        <a
          href="https://block360.io"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 font-semibold hover:text-white/90"
        >
          Block360.io
        </a>
      </div>
      <div className="w-full px-5 md:px-8 py-4">
        <div className="flex items-center justify-between gap-8">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/logo-icon.svg"
              alt="Alphabase® icon"
              width={32}
              height={32}
              className="h-8 w-8 object-contain rounded-md"
            />
            <Image
              src="/workmark-dark-logo.svg"
              alt="Alphabase®"
              width={733}
              height={84}
              className="hidden sm:block h-[23px] w-auto"
            />
          </Link>

          <nav className="hidden items-center gap-[38px] md:flex">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="inline-flex items-center gap-1 text-[17px] font-medium leading-none text-[#212925] hover:text-[#212925]/70 dark:text-white/70 dark:hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/signin"
              className="hidden text-[17px] font-medium leading-none text-[#212925] hover:text-[#212925]/70 dark:text-white/70 dark:hover:text-white transition-colors md:block"
            >
              Sign in
            </Link>
            <Button href="/demo" size="md">
              Watch a demo
            </Button>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-ink-700 hover:bg-black/5 hover:text-ink-900 dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-black/5 bg-paper/95 backdrop-blur dark:border-white/10 dark:bg-night-950/95 md:hidden">
          <div className="px-5 py-4 space-y-1">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl px-3 py-3 text-[16px] font-medium text-[#212925] hover:bg-black/5 dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/signin"
              onClick={() => setOpen(false)}
              className="block rounded-xl px-5 py-3 text-[15px] text-ink-700 hover:bg-black/5 hover:text-ink-900 dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white"
            >
              Sign in
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
