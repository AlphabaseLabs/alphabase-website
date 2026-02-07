import { Container } from "./container";

export function Quote() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-2xl md:text-3xl font-semibold tracking-tightish text-ink-900 dark:text-white">
            “We’re not playing phone tag anymore. Sara handles the first response, books the right appointment, and keeps follow‑ups consistent.”
          </p>
          <p className="mt-6 text-sm text-ink-600 dark:text-white/60">
            Clinic Manager • Multi‑specialty team
          </p>
        </div>
      </Container>
    </section>
  );
}
