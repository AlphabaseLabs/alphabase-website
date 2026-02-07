import { Container } from "./container";
import { Button } from "./button";

const tiers = [
  {
    name: "Starter",
    price: "$299",
    note: "per location / month",
    items: ["24/7 responses + scheduling", "Confirmations + reminders", "Unified inbox", "Specialty playbooks"],
    cta: "Start with a demo",
    featured: false,
  },
  {
    name: "Growth",
    price: "$599",
    note: "per location / month",
    items: ["Everything in Starter", "Intake + follow‑up workflows", "Advanced routing", "Team roles + permissions"],
    cta: "Book a demo",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    note: "for multi‑location groups",
    items: ["Custom playbooks + integrations", "Dedicated onboarding", "SLA + support", "Security review"],
    cta: "Talk to us",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm text-ink-600 dark:text-white/60">Pricing</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tightish text-ink-900 dark:text-white">
            Plans that scale with your team.
          </h2>
          <p className="mt-4 text-base md:text-lg text-ink-700 dark:text-white/70 leading-relaxed">
            Start with one location. Add providers and specialties when you’re ready.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={[
                "rounded-4xl p-7 ring-1 shadow-soft transition",
                t.featured
                  ? "bg-white/80 ring-black/15 shadow-lift dark:bg-night-900/70 dark:ring-white/15"
                  : "bg-white/60 ring-black/10 hover:shadow-lift dark:bg-night-900/55 dark:ring-white/10",
              ].join(" ")}
            >
              <div className="flex items-baseline justify-between">
                <p className="text-base font-semibold text-ink-900 dark:text-white">{t.name}</p>
                {t.featured ? (
                  <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-medium ring-1 ring-brand-200 dark:bg-white/10 dark:ring-white/15">
                    Most popular
                  </span>
                ) : null}
              </div>

              <div className="mt-5">
                <p className="text-4xl font-semibold tracking-tightish text-ink-900 dark:text-white">{t.price}</p>
                <p className="mt-1 text-sm text-ink-600 dark:text-white/60">{t.note}</p>
              </div>

              <ul className="mt-6 space-y-3 text-sm text-ink-700 dark:text-white/70">
                {t.items.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-600" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button href="/demo" variant={t.featured ? "primary" : "secondary"} className="w-full">
                  {t.cta}
                </Button>
              </div>
              <p className="mt-4 text-xs text-ink-600 dark:text-white/55">
                Prices shown for illustration. Replace with your actual plans.
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
