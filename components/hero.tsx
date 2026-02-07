"use client";

import { motion } from "framer-motion";
import { Container } from "./container";
import { Button } from "./button";

export function Hero() {
  return (
    <section id="meet" className="noise relative overflow-hidden">
      <Container className="pt-16 md:pt-24 pb-12 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm text-ink-700 dark:text-white/70">
            Introducing Avery by Alphabase.
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tightish text-ink-900 dark:text-white">
            More booked appointments. Less admin. Better experiences.
          </h1>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-ink-700 dark:text-white/70">
            Avery handles inquiries, scheduling, reminders, and follow‑ups across phone, text, and chat—trained on your services, policies, and tone.
          </p>
          <p className="mt-4 text-xs text-ink-600 dark:text-white/60">
            Built for Dental • Aesthetics • Hair transplant • Physiotherapy • Nutrition
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <div className="flex w-full max-w-md items-center rounded-full bg-white/70 ring-1 ring-black/10 shadow-soft dark:bg-night-900/70 dark:ring-white/10">
              <input
                aria-label="Email"
                placeholder="Enter your work email"
                className="h-11 w-full bg-transparent px-5 text-sm outline-none placeholder:text-ink-600/70 dark:placeholder:text-white/50"
              />
              <span className="pr-2">
                <Button href="#demo" size="sm">
                  Watch a demo
                </Button>
              </span>
            </div>
            <Button href="#product" variant="secondary" withArrow>
              See Avery in action
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-12 md:mt-16"
        >
	          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-4xl bg-white/80 ring-1 ring-black/10 shadow-lift dark:bg-night-900/60 dark:ring-white/10">
	            <div className="absolute inset-0">
	              <div className="h-full w-full bg-[radial-gradient(circle_at_30%_20%,rgb(var(--brand-600)_/_0.18),transparent_45%),radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.55),transparent_52%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgb(var(--brand-600)_/_0.24),transparent_45%),radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.08),transparent_52%)]" />
	            </div>

            <div className="relative grid gap-0 md:grid-cols-[280px_1fr]">
              <div className="hidden md:block border-r border-black/5 dark:border-white/10 p-6">
                <p className="text-sm font-medium text-ink-900 dark:text-white">
                  Today
                </p>
                <ul className="mt-4 space-y-3 text-sm text-ink-700 dark:text-white/70">
                  <li>12 appointments booked</li>
                  <li>9 confirmations sent</li>
                  <li>4 post‑visit check‑ins</li>
                  <li>3 leads re‑engaged</li>
                </ul>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-ink-900 dark:text-white">
                    Live Coordinator
                  </p>
                  <span className="inline-flex items-center rounded-full bg-brand-100 px-3 py-1 text-xs font-medium text-ink-900 ring-1 ring-brand-200 dark:bg-white/10 dark:text-white dark:ring-white/15">
                    Avery Online
                  </span>
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-3xl bg-white/80 ring-1 ring-black/5 p-5 shadow-soft dark:bg-night-950/40 dark:ring-white/10">
                    <p className="text-xs text-ink-600 dark:text-white/60">
                      Next up
                    </p>
                    <p className="mt-2 text-sm font-medium text-ink-900 dark:text-white">
                      Initial consult — 2:30pm
                    </p>
                    <p className="mt-1 text-sm text-ink-700 dark:text-white/70">
                      Details collected. Notes ready.
                    </p>
                  </div>
                  <div className="rounded-3xl bg-white/80 ring-1 ring-black/5 p-5 shadow-soft dark:bg-night-950/40 dark:ring-white/10">
                    <p className="text-xs text-ink-600 dark:text-white/60">
                      Follow‑up
                    </p>
                    <p className="mt-2 text-sm font-medium text-ink-900 dark:text-white">
                      Post‑treatment check‑in
                    </p>
                    <p className="mt-1 text-sm text-ink-700 dark:text-white/70">
                      Sent automatically with the right next steps.
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-3xl bg-white/70 ring-1 ring-black/5 p-5 dark:bg-night-950/35 dark:ring-white/10">
                  <p className="text-xs text-ink-600 dark:text-white/60">
                    Incoming message
                  </p>
                  <p className="mt-2 text-sm text-ink-900 dark:text-white">
                    “Can I book a first visit for next week?”
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-brand-600" />
                    <p className="text-sm text-ink-700 dark:text-white/70">
                      Avery suggests options, answers questions, and confirms the best fit.
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-xs text-ink-600 dark:text-white/55">
                  Demo UI — connect your tools to go live.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
