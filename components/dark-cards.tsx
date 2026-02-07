import { Container } from "./container";
import { ShieldCheck, Layers, SlidersHorizontal } from "lucide-react";

const cards = [
  {
    title: "See every interaction",
    desc: "Conversation history, bookings, and follow‑ups—captured and easy to review.",
    icon: SlidersHorizontal,
  },
  {
    title: "Guardrails + permissions",
    desc: "Define boundaries by channel and workflow, and route exceptions to a human.",
    icon: Layers,
  },
  {
    title: "Privacy‑minded workflows",
    desc: "Built to handle sensitive information with care and predictable handoffs.",
    icon: ShieldCheck,
  },
];

export function DarkCards() {
  return (
    <section className="py-16 md:py-24">
      <div className="bg-night-950 text-white">
        <Container className="py-16 md:py-24">
          <p className="text-sm text-white/70">Control</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tightish">
            Full visibility. Real guardrails.
          </h2>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-white/70 leading-relaxed">
            Automate confidently with clear permissions, reviewable history, and escalation rules that keep your team in charge.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {cards.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="rounded-4xl bg-night-900/60 ring-1 ring-white/10 p-6 shadow-night"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold tracking-tightish">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {c.desc}
                  </p>
	                  <div className="mt-6 h-28 rounded-3xl bg-[radial-gradient(circle_at_30%_30%,rgb(var(--brand-600)_/_0.28),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.10),transparent_55%)]" />
	                </div>
	              );
	            })}
	          </div>
	        </Container>
      </div>
    </section>
  );
}
