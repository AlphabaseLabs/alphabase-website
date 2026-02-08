import { Container } from "./container";
import { Button } from "./button";
import { cn } from "./utils";

const saraAIFeatures = [
  "Fast, consistent answers aligned to your pricing, prep, and policies",
  "24/7 scheduling, reschedules, and confirmations",
  "Unified inbox for phone + text with clean human handoffs",
  "Automated reminders and follow‑ups to reduce no‑shows",
  "Intake and post‑visit workflows that run on autopilot",
  "Coachable playbooks with visibility, guardrails, and audit trails",
];

const ehrPlatformFeatures = [
  "Patient chart, visit history, and documents in one place",
  "Clinical documentation with templates and structured notes",
  "Scheduling and operational workflows for modern clinics",
  "Role‑based access controls with audit trails",
  "Reporting across locations, providers, and performance",
  "Exports + integrations that fit your existing stack",
];

const saraAIInBundleFeatures = [
  "24/7 responses across phone, text, and chat",
  "Smart routing and handoffs to the right team member",
  "Confirmations, reminders, and follow‑ups built in",
  "Unified inbox with notes, accountability, and summaries",
  "Coachable specialty playbooks with QA visibility",
  "Guardrails and human escalation for sensitive topics",
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-3 text-body-sm text-ink-700 dark:text-white/70">
      {items.map((i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-ink-500/50 dark:bg-white/30" />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

function Chip({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-black/5 px-3 py-1 text-caption font-medium text-ink-900 ring-1 ring-black/10 dark:bg-white/10 dark:text-white dark:ring-white/15",
        className
      )}
    >
      {children}
    </span>
  );
}

function PlanDetails() {
  return (
    <div className="mt-7 flex items-center gap-3">
      <div className="h-px flex-1 bg-black/10 dark:bg-white/10" />
      <p className="text-micro font-medium tracking-[0.18em] text-ink-600 dark:text-white/55 uppercase">
        Plan details
      </p>
      <div className="h-px flex-1 bg-black/10 dark:bg-white/10" />
    </div>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-caption text-ink-600 dark:text-white/60">Start Now</p>
          <h2 className="mt-3 text-h2 md:text-h2-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
            Packages built for modern practices
          </h2>
          <p className="mt-4 text-body-lg md:text-[1.125rem] md:leading-[1.75rem] text-ink-700 dark:text-white/70 leading-relaxed">
            Alphabase Combines AI Employee and EHR Platform for your healthcare practice in one place.
          </p>
        </div>

        <div className="mt-12 mx-auto max-w-[58rem] grid gap-5 md:grid-cols-2">
          {/* Sara AI */}
          <div className="rounded-4xl p-8 ring-1 shadow-soft transition bg-white/70 ring-black/10 hover:shadow-lift dark:bg-night-900/60 dark:ring-white/10">
            <h3 className="text-h3 md:text-h3-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
              Sara
            </h3>
            <Button href="/demo" size="lg" variant="primary" className="mt-4 w-full">
              Get a quote
            </Button>
            <div className="mt-4 flex flex-wrap gap-2">
              <Chip>Sara AI</Chip>
              <Chip>Communications</Chip>
              <Chip>Scheduling</Chip>
              <Chip>Automations</Chip>
            </div>

            <PlanDetails />

            <div className="mt-6">
              <p className="text-h4 font-semibold tracking-mercury text-ink-900 dark:text-white">
                Sara AI
              </p>
              <p className="mt-2 text-body-sm leading-relaxed text-ink-600 dark:text-white/60">
                Your AI employee that answers patients in seconds, books the right appointment, and keeps follow‑ups
                consistent—across phone, text, and chat.
              </p>
            </div>

            <BulletList items={saraAIFeatures} />

            <hr className="mt-7 border-black/10 dark:border-white/10" />
            <p className="mt-5 text-body-sm leading-relaxed text-ink-700 dark:text-white/70">
              Go live with the workflows that matter most—new patient inquiries, booking, and reminders—then expand into
              intake, after‑care, and specialty playbooks. Sara keeps responses consistent so your team can focus on care.
            </p>
          </div>

          {/* EHR Platform + Sara AI */}
          <div className="rounded-4xl p-8 ring-1 shadow-soft transition bg-white/70 ring-black/10 hover:shadow-lift dark:bg-night-900/60 dark:ring-white/10">
            <h3 className="text-h3 md:text-h3-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
              EHR Platform + Sara AI
            </h3>
            <Button href="/demo" size="lg" variant="primary" className="mt-4 w-full">
              Get a quote
            </Button>
            <div className="mt-4 flex flex-wrap gap-2">
              <Chip>EHR Platform</Chip>
              <Chip>Sara AI</Chip>
              <Chip>Clinical ops</Chip>
              <Chip>Workflows</Chip>
            </div>

            <PlanDetails />

            <p className="mt-6 text-body-sm leading-relaxed text-ink-600 dark:text-white/60">
              One connected system: run your practice in the EHR while Sara handles patient communication end‑to‑end.
            </p>

            <div className="mt-6">
              <p className="text-body font-semibold text-ink-900 dark:text-white">EHR Platform</p>
              <BulletList items={ehrPlatformFeatures} />
            </div>

            <div className="mt-6">
              <p className="text-body font-semibold text-ink-900 dark:text-white">Sara AI</p>
              <BulletList items={saraAIInBundleFeatures} />
            </div>

            <hr className="mt-7 border-black/10 dark:border-white/10" />
            <p className="mt-5 text-body-sm leading-relaxed text-ink-700 dark:text-white/70">
              Best for growing teams that want fewer tools and cleaner handoffs. Keep operations and documentation in one
              place, while Sara keeps patients moving—from first inquiry to booked visit to follow‑up.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
