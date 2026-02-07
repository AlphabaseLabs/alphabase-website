import Link from "next/link";
import { Container } from "./container";

export function Footer() {
  return (
    <footer className="py-12">
      <Container>
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-white shadow-soft">
                A
              </span>
              <span className="text-sm font-semibold tracking-tightish">Alphabase</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-ink-600 dark:text-white/60 leading-relaxed">
              Avery is the AI teammate built for clinic and wellness workflows—responses, scheduling, reminders, and follow‑ups in one place.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 text-sm md:grid-cols-3">
            <div className="space-y-3">
              <p className="font-semibold text-ink-900 dark:text-white">Product</p>
              <Link className="block text-ink-600 hover:text-ink-900 dark:text-white/60 dark:hover:text-white" href="#product">Overview</Link>
              <Link className="block text-ink-600 hover:text-ink-900 dark:text-white/60 dark:hover:text-white" href="#solutions">How it works</Link>
              <Link className="block text-ink-600 hover:text-ink-900 dark:text-white/60 dark:hover:text-white" href="/demo">Watch demo</Link>
            </div>
            <div className="space-y-3">
              <p className="font-semibold text-ink-900 dark:text-white">Company</p>
              <Link className="block text-ink-600 hover:text-ink-900 dark:text-white/60 dark:hover:text-white" href="#resources">Resources</Link>
              <Link className="block text-ink-600 hover:text-ink-900 dark:text-white/60 dark:hover:text-white" href="#pricing">Pricing</Link>
              <Link className="block text-ink-600 hover:text-ink-900 dark:text-white/60 dark:hover:text-white" href="#login">Sign in</Link>
            </div>
            <div className="space-y-3">
              <p className="font-semibold text-ink-900 dark:text-white">Legal</p>
              <Link className="block text-ink-600 hover:text-ink-900 dark:text-white/60 dark:hover:text-white" href="#">Privacy</Link>
              <Link className="block text-ink-600 hover:text-ink-900 dark:text-white/60 dark:hover:text-white" href="#">Terms</Link>
              <Link className="block text-ink-600 hover:text-ink-900 dark:text-white/60 dark:hover:text-white" href="#">Security</Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 md:flex-row md:items-center md:justify-between border-t border-black/10 dark:border-white/10 pt-6">
          <p className="text-xs text-ink-600 dark:text-white/55">
            © {new Date().getFullYear()} Alphabase. All rights reserved.
          </p>
          <p className="text-xs text-ink-600 dark:text-white/55">
            Built for demonstration purposes. Replace with your real policies.
          </p>
        </div>
      </Container>
    </footer>
  );
}
