import { Container } from "./container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const cards = [
  { brand: "Guide", title: "Turn more inquiries into booked consults (without sounding salesy)", href: "#" },
  { brand: "Template", title: "Reminder + follow‑up sequences that feel personal", href: "#" },
  { brand: "Checklist", title: "What to automate first — by specialty", href: "#" },
];

export function Resources() {
  return (
    <section id="resources" className="py-16 md:py-24">
      <Container>
        <h2 className="text-h2 md:text-h2-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
          Playbooks for a calmer front desk.
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {cards.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group rounded-4xl bg-white/70 ring-1 ring-black/10 p-7 shadow-soft hover:shadow-lift transition dark:bg-night-900/60 dark:ring-white/10"
            >
              <p className="text-caption font-semibold text-ink-600 dark:text-white/60">{c.brand}</p>
              <p className="mt-4 text-h4 font-semibold tracking-mercury text-ink-900 dark:text-white">
                {c.title}
              </p>
              <div className="mt-8 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/5 group-hover:bg-black/10 transition dark:bg-white/10 dark:group-hover:bg-white/15">
                <ArrowRight className="h-4 w-4 text-ink-900 dark:text-white" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
