import Link from "next/link";
import { Container } from "./container";
import { Button } from "./button";

const nav = [
  { label: "Overview", href: "#meet" },
  { label: "Features", href: "#product" },
  { label: "Plans", href: "#pricing" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-paper/70 backdrop-blur supports-[backdrop-filter]:bg-paper/55 dark:bg-night-950/60 dark:supports-[backdrop-filter]:bg-night-950/45">
      <Container className="py-4">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-white shadow-soft">
              A
            </span>
            <span className="text-sm font-semibold tracking-tightish">
              Alphabase
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="inline-flex items-center text-sm text-ink-700 hover:text-ink-900 dark:text-white/70 dark:hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="#login"
              className="hidden text-sm text-ink-700 hover:text-ink-900 dark:text-white/70 dark:hover:text-white md:block"
            >
              Sign in
            </Link>
            <Button href="#demo" size="sm">
              Watch a demo
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
