import { CalendarClock, FileText, MessageSquareText, Sparkles, PhoneCall, Shield } from "lucide-react";
import { Container } from "./container";
import { H2 } from "./section";

const features = [
  {
    icon: CalendarClock,
    title: "Scheduling that just works",
    desc: "Offer the right visit types, handle reschedules, and confirm instantly, day or night.",
  },
  {
    icon: MessageSquareText,
    title: "Fast, consistent answers",
    desc: "Pricing ranges, prep instructions, and policies kept aligned with your playbook.",
  },
  {
    icon: PhoneCall,
    title: "Phone + text, covered",
    desc: "One place for calls and messages, with smooth handoffs when a human should step in.",
  },
  {
    icon: FileText,
    title: "Intake + follow‑ups",
    desc: "Collect key details before the visit and send the right after‑care or plan reminders.",
  },
  {
    icon: Sparkles,
    title: "Coachable by your team",
    desc: "Refine responses in minutes. Sara adapts without losing consistency.",
  },
  {
    icon: Shield,
    title: "Visibility and guardrails",
    desc: "Permissions, audit trails, and escalation rules so you stay in control.",
  },
];

export function FeatureGrid() {
  return (
    <section id="product" className="py-16 md:py-24 scroll-mt-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <H2 className="text-h2 md:text-h2-lg leading-tight text-ink-900 dark:text-white">
            Everything around the patient communication handled.
          </H2>
          <p className="mt-4 text-body-lg md:text-[1.125rem] md:leading-[1.75rem] leading-relaxed text-ink-700 dark:text-white/70">
            From first inquiry to post‑visit check‑in, Sara keeps your team responsive and your day calmer.
          </p>
        </div>

        <div className="mt-12 grid gap-y-10 gap-x-12 text-center md:grid-cols-3">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="mx-auto flex max-w-xs flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center text-ink-700 dark:text-white/70">
                  <Icon className="h-6 w-6" strokeWidth={1.6} />
                </div>
                <h3 className="mt-3 text-body font-semibold tracking-mercury text-ink-900 dark:text-white">
                  {f.title}
                </h3>
                <p className="mt-2 text-body-sm leading-relaxed text-ink-600 dark:text-white/60">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
