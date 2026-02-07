"use client";

import { motion } from "framer-motion";
import { Container } from "./container";
import { Eyebrow, H2, Lead } from "./section";
import { Check } from "lucide-react";

const bullets = [
  "Stay on‑brand with answers grounded in your services, policies, and boundaries.",
  "Handle multi‑step booking: visit type, provider, intake, and confirmation.",
  "Escalate edge cases to your team with context and a clear next step.",
];

export function SplitSection() {
  return (
    <section id="solutions" className="py-16 md:py-24">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <Eyebrow>Coachable by your team</Eyebrow>
            <H2 className="mt-3">Update once. Stay consistent everywhere.</H2>
            <Lead>
              Make a change in plain language, and Avery carries it across calls, texts, and chat—without the drift that happens with scripts.
            </Lead>

            <ul className="mt-8 space-y-4">
              {bullets.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-ink-700 dark:text-white/70">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-100 ring-1 ring-brand-200 dark:bg-white/10 dark:ring-white/15">
                    <Check className="h-4 w-4 text-ink-900 dark:text-white" />
                  </span>
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="rounded-4xl overflow-hidden ring-1 ring-black/10 shadow-lift bg-white/70 dark:bg-night-900/60 dark:ring-white/10"
          >
	            <div className="p-6 md:p-8">
	              <div className="rounded-4xl bg-[radial-gradient(circle_at_25%_20%,rgba(81,101,235,0.18),transparent_45%),radial-gradient(circle_at_70%_65%,rgba(0,0,0,0.06),transparent_55%)] dark:bg-[radial-gradient(circle_at_25%_20%,rgba(81,101,235,0.28),transparent_45%),radial-gradient(circle_at_70%_65%,rgba(255,255,255,0.06),transparent_55%)] p-6 md:p-8">
	                <p className="text-xs text-ink-600 dark:text-white/60">Example flow</p>
	                <p className="mt-2 text-sm font-semibold text-ink-900 dark:text-white">
	                  New inquiry — initial consult
	                </p>

                <div className="mt-5 space-y-3">
	                  {[
	                    ["Answer + qualify", "Service fit • Policies • Quick questions"],
	                    ["Recommend + book", "Visit type • Provider • Time options"],
	                    ["Confirm + prepare", "Forms • Deposit (optional) • Reminders"],
	                  ].map(([k, v]) => (
	                    <div key={k} className="flex items-start justify-between gap-4 rounded-3xl bg-white/75 ring-1 ring-black/5 px-4 py-3 dark:bg-night-950/35 dark:ring-white/10">
	                      <p className="text-sm font-medium text-ink-900 dark:text-white">{k}</p>
	                      <p className="text-sm text-ink-700 dark:text-white/70 text-right">{v}</p>
	                    </div>
	                  ))}
                </div>
              </div>

	              <p className="mt-6 text-xs text-ink-600 dark:text-white/55">
	                One playbook. Consistent delivery across every channel.
	              </p>
	            </div>
	          </motion.div>
        </div>
      </Container>
    </section>
  );
}
