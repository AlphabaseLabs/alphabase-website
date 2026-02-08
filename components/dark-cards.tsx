"use client";

import { motion } from "framer-motion";
import { Container } from "./container";
import {
  MessageSquareText,
  Shield,
  CalendarClock,
  PhoneIncoming,
  ArrowRightLeft,
  Bell,
} from "lucide-react";

const cards = [
  {
    title: "See every interaction",
    desc: "Conversation history, bookings, and follow‑ups: captured and easy to review at a glance.",
    align: "items-end",
    visual: (
      /* Simulated conversation log / audit trail UI */
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500/20">
            <PhoneIncoming className="h-4 w-4 text-brand-600 dark:text-brand-200" />
          </span>
          <div className="flex-1 rounded-xl bg-white/80 dark:bg-white/10 px-4 py-2.5 shadow-sm">
            <p className="text-[11px] font-medium text-ink-700 dark:text-white/60">Inbound call · 2 min ago</p>
            <p className="mt-0.5 text-[13px] text-ink-900 dark:text-white">&quot;I&apos;d like to reschedule my Tuesday cleaning…&quot;</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#7048E8]/20">
            <MessageSquareText className="h-4 w-4 text-[#7048E8]" />
          </span>
          <div className="flex-1 rounded-xl bg-white/80 dark:bg-white/10 px-4 py-2.5 shadow-sm">
            <p className="text-[11px] font-medium text-ink-700 dark:text-white/60">SMS · 8 min ago</p>
            <p className="mt-0.5 text-[13px] text-ink-900 dark:text-white">Reminder: your Botox appointment is tomorrow at 3 PM.</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F06595]/20">
            <CalendarClock className="h-4 w-4 text-[#F06595]" />
          </span>
	          <div className="flex-1 rounded-xl bg-white/80 dark:bg-white/10 px-4 py-2.5 shadow-sm">
	            <p className="text-[11px] font-medium text-ink-700 dark:text-white/60">Booking confirmed · 22 min ago</p>
	            <p className="mt-0.5 text-[13px] text-ink-900 dark:text-white">Dr. Patel: Thurs, 10:00 AM (Hair consult)</p>
	          </div>
	        </div>
	      </div>
	    ),
  },
  {
    title: "Guardrails + permissions",
    desc: "Define boundaries by channel and workflow, and route exceptions to a human, automatically.",
    align: "items-center",
    visual: (
      /* Simulated guardrail / permission toggles UI */
      <div className="space-y-3">
        <div className="rounded-xl bg-white/80 dark:bg-white/10 px-4 py-3 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ArrowRightLeft className="h-4 w-4 text-brand-600 dark:text-brand-200" />
              <span className="text-[13px] font-medium text-ink-900 dark:text-white">Auto-escalate after 2 retries</span>
            </div>
            <span className="h-5 w-9 rounded-full bg-brand-500 relative">
              <span className="absolute right-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow-sm" />
            </span>
          </div>
        </div>
        <div className="rounded-xl bg-white/80 dark:bg-white/10 px-4 py-3 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Bell className="h-4 w-4 text-[#F59F00]" />
              <span className="text-[13px] font-medium text-ink-900 dark:text-white">Notify team on pricing questions</span>
            </div>
            <span className="h-5 w-9 rounded-full bg-brand-500 relative">
              <span className="absolute right-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow-sm" />
            </span>
          </div>
        </div>
        <div className="rounded-xl bg-white/80 dark:bg-white/10 px-4 py-3 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Shield className="h-4 w-4 text-[#7048E8]" />
              <span className="text-[13px] font-medium text-ink-900 dark:text-white">Block after-hours scheduling</span>
            </div>
            <span className="h-5 w-9 rounded-full bg-ink-500/30 dark:bg-white/20 relative">
              <span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow-sm" />
            </span>
          </div>
        </div>
        <div className="rounded-xl bg-white/80 dark:bg-white/10 px-4 py-3 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <MessageSquareText className="h-4 w-4 text-[#F06595]" />
              <span className="text-[13px] font-medium text-ink-900 dark:text-white">Require approval for cancellations</span>
            </div>
            <span className="h-5 w-9 rounded-full bg-brand-500 relative">
              <span className="absolute right-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow-sm" />
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Review before it goes out",
    desc: "Approval queues for sensitive replies and refunds, always with context attached.",
    align: "items-center",
    visual: (
      /* Simulated approval queue UI */
      <div className="space-y-3">
        <div className="rounded-xl bg-white/80 dark:bg-white/10 px-4 py-3 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F59F00]/20">
                <Bell className="h-4 w-4 text-[#F59F00]" />
              </span>
              <div>
                <p className="text-[13px] font-medium text-ink-900 dark:text-white">Pricing exception</p>
                <p className="mt-0.5 text-[11px] text-ink-600 dark:text-white/50">Sara suggested a waived deposit</p>
              </div>
            </div>
            <span className="rounded-full bg-[#F59F00]/15 px-2.5 py-1 text-[11px] font-medium text-[#F59F00]">
              Needs review
            </span>
          </div>
        </div>
        <div className="rounded-xl bg-white/80 dark:bg-white/10 px-4 py-3 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-500/20">
                <MessageSquareText className="h-4 w-4 text-brand-600 dark:text-brand-200" />
              </span>
              <div>
                <p className="text-[13px] font-medium text-ink-900 dark:text-white">Sensitive reply</p>
                <p className="mt-0.5 text-[11px] text-ink-600 dark:text-white/50">Insurance coverage question</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-brand-100 px-2.5 py-1 text-[11px] font-medium text-ink-900 ring-1 ring-brand-200 dark:bg-white/10 dark:text-white dark:ring-white/15">
                Approve
              </span>
              <span className="rounded-full bg-ink-500/15 px-2.5 py-1 text-[11px] font-medium text-ink-700 dark:bg-white/10 dark:text-white/70">
                Hold
              </span>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-white/80 dark:bg-white/10 px-4 py-3 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#7048E8]/20">
                <Shield className="h-4 w-4 text-[#7048E8]" />
              </span>
              <div>
                <p className="text-[13px] font-medium text-ink-900 dark:text-white">Refund request</p>
                <p className="mt-0.5 text-[11px] text-ink-600 dark:text-white/50">$250 • Past cancellation window</p>
              </div>
            </div>
            <span className="rounded-full bg-ink-500/15 px-2.5 py-1 text-[11px] font-medium text-ink-700 dark:bg-white/10 dark:text-white/70">
              Escalated
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Privacy-minded workflows",
    desc: "Built to handle sensitive information with care and predictable handoffs to your team.",
    align: "items-start",
    visual: (
      /* Simulated privacy / handoff flow UI */
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <div className="mt-1 flex flex-col items-center">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-500/20 text-[11px] font-bold text-brand-600 dark:text-brand-200">1</span>
            <span className="mt-1 h-8 w-px bg-ink-500/20 dark:bg-white/10" />
          </div>
          <div className="flex-1 rounded-xl bg-white/80 dark:bg-white/10 px-4 py-2.5 shadow-sm">
            <p className="text-[13px] font-medium text-ink-900 dark:text-white">Patient asks about insurance</p>
            <p className="mt-0.5 text-[11px] text-ink-600 dark:text-white/50">Detected: sensitive topic</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="mt-1 flex flex-col items-center">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F59F00]/20 text-[11px] font-bold text-[#F59F00]">2</span>
            <span className="mt-1 h-8 w-px bg-ink-500/20 dark:bg-white/10" />
          </div>
          <div className="flex-1 rounded-xl bg-white/80 dark:bg-white/10 px-4 py-2.5 shadow-sm">
            <p className="text-[13px] font-medium text-ink-900 dark:text-white">Sara flags for human review</p>
            <p className="mt-0.5 text-[11px] text-ink-600 dark:text-white/50">Context + transcript attached</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="mt-1 flex flex-col items-center">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-500/20 text-[11px] font-bold text-green-600">3</span>
          </div>
          <div className="flex-1 rounded-xl bg-white/80 dark:bg-white/10 px-4 py-2.5 shadow-sm">
            <p className="text-[13px] font-medium text-ink-900 dark:text-white">Team member takes over</p>
            <p className="mt-0.5 text-[11px] text-ink-600 dark:text-white/50">Smooth handoff, no repeated questions</p>
          </div>
        </div>
      </div>
    ),
  },
];

export function DarkCards() {
  return (
    <section id="data-security" className="py-16 md:py-24 scroll-mt-32">
      <Container>
        {/* ── Section header: left-aligned like Mercury ── */}
        <div className="mb-12 md:mb-16 max-w-2xl">
          <p className="text-caption text-ink-600 dark:text-white/60">Control</p>
          <h2 className="mt-3 text-h2 md:text-h2-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
            Full visibility. Real guardrails.
          </h2>
          <p className="mt-4 text-body-lg md:text-[1.125rem] md:leading-[1.75rem] text-ink-700 dark:text-white/70">
            Automate confidently with clear permissions, reviewable history, and
            escalation rules that keep your team in charge.
          </p>
        </div>

        {/* ── 2-column card grid: Mercury style ── */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className=""
            >
              {/* Visual area: tall rounded panel with gradient bg + product UI */}
              <div
                className={[
                  "relative overflow-hidden rounded-4xl bg-gradient-to-br",
                  "from-[#f2f1ee] via-[#f7f6f3] to-[#eceae6]",
                  "dark:from-night-800 dark:via-night-900 dark:to-night-800",
                  "ring-1 ring-black/5 shadow-soft dark:ring-white/10",
                  "p-5 sm:p-6 md:p-8 aspect-[4/3] flex",
                  card.align ?? "items-end",
                ].join(" ")}
              >
                {/* Decorative gradient overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent dark:from-night-950/30" />
                {/* Mock UI content */}
                <div className="relative z-10 w-full">{card.visual}</div>
              </div>

              {/* Text: title + desc below the visual */}
              <h3 className="mt-5 text-body md:text-[1.125rem] font-semibold tracking-mercury text-ink-900 dark:text-white">
                {card.title}
              </h3>
              <p className="mt-2 text-body-sm md:text-body leading-relaxed text-ink-700 dark:text-white/70 max-w-lg">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
