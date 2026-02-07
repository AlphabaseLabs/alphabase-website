import { Container } from "@/components/container";
import { Button } from "@/components/button";

export default function DemoPage() {
  return (
    <main className="min-h-screen">
      <Container className="py-16 md:py-24">
        <div className="mx-auto max-w-2xl">
          <p className="text-sm text-ink-600 dark:text-white/60">Demo</p>
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tightish text-ink-900 dark:text-white">
            Let’s map your workflow.
          </h1>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-ink-700 dark:text-white/70">
            Share a few details and we’ll show exactly how Alphabase would handle booking, reminders, and follow‑ups for your practice.
          </p>

          <form
            className="mt-10 space-y-4 rounded-4xl bg-white/70 ring-1 ring-black/10 p-7 shadow-soft dark:bg-night-900/60 dark:ring-white/10"
            action="/api/lead"
            method="post"
          >
            <div>
              <label className="block text-sm font-medium text-ink-900 dark:text-white">
                Work email
              </label>
              <input
                name="email"
                required
                type="email"
                className="mt-2 h-11 w-full rounded-2xl bg-white/70 px-4 text-sm outline-none ring-1 ring-black/10 focus:ring-brand-500/60 dark:bg-night-950/30 dark:text-white dark:ring-white/10"
                placeholder="you@practice.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-ink-900 dark:text-white">
                Practice name
              </label>
              <input
                name="practice"
                required
                className="mt-2 h-11 w-full rounded-2xl bg-white/70 px-4 text-sm outline-none ring-1 ring-black/10 focus:ring-brand-500/60 dark:bg-night-950/30 dark:text-white dark:ring-white/10"
                placeholder="Studio Dermatology"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-ink-900 dark:text-white">
                  Locations
                </label>
                <input
                  name="locations"
                  className="mt-2 h-11 w-full rounded-2xl bg-white/70 px-4 text-sm outline-none ring-1 ring-black/10 focus:ring-brand-500/60 dark:bg-night-950/30 dark:text-white dark:ring-white/10"
                  placeholder="1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-900 dark:text-white">
                  Current booking method
                </label>
                <input
                  name="booking"
                  className="mt-2 h-11 w-full rounded-2xl bg-white/70 px-4 text-sm outline-none ring-1 ring-black/10 focus:ring-brand-500/60 dark:bg-night-950/30 dark:text-white dark:ring-white/10"
                  placeholder="Phone + web form"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-ink-900 dark:text-white">
                What should Alphabase handle first?
              </label>
              <textarea
                name="notes"
                className="mt-2 min-h-[120px] w-full rounded-3xl bg-white/70 px-4 py-3 text-sm outline-none ring-1 ring-black/10 focus:ring-brand-500/60 dark:bg-night-950/30 dark:text-white dark:ring-white/10"
                placeholder="e.g., reschedules, reminders, post-treatment follow-ups..."
              />
            </div>

            <div className="pt-2 flex items-center gap-3">
              <Button href="#" className="pointer-events-none opacity-100">
                Submit
              </Button>
              <p className="text-xs text-ink-600 dark:text-white/55">
                This demo form posts to a local endpoint. Wire it to your email/CRM when you’re ready.
              </p>
            </div>
          </form>
        </div>
      </Container>
    </main>
  );
}
