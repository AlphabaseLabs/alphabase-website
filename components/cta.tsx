import { Container } from "./container";
import { Button } from "./button";

export function CTA() {
  return (
	    <section id="demo" className="py-16 md:py-24">
	      <Container>
	        <div className="relative overflow-hidden rounded-4xl bg-white/70 ring-1 ring-black/10 p-10 md:p-14 shadow-lift dark:bg-night-900/60 dark:ring-white/10">
	          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgb(var(--brand-600)_/_0.20),transparent_45%),radial-gradient(circle_at_80%_60%,rgba(0,0,0,0.06),transparent_55%)] dark:bg-[radial-gradient(circle_at_20%_30%,rgb(var(--brand-600)_/_0.28),transparent_45%),radial-gradient(circle_at_80%_60%,rgba(255,255,255,0.08),transparent_55%)]" />
	          <div className="relative">
	            <h2 className="text-3xl md:text-4xl font-semibold tracking-tightish text-ink-900 dark:text-white">
	              See Avery in your workflow.
	            </h2>
            <p className="mt-4 max-w-2xl text-base md:text-lg leading-relaxed text-ink-700 dark:text-white/70">
              In a quick demo, we’ll map your top flows and show how Avery handles inquiries, booking, reminders, and follow‑ups—without adding more tools.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/demo" size="lg">
                Watch a demo
              </Button>
              <Button href="#pricing" variant="secondary" size="lg">
                View plans
              </Button>
            </div>

            <p className="mt-6 text-xs text-ink-600 dark:text-white/55">
              No pressure. Just a walk-through of your workflows.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
