import { Container } from "./container";

export function Quote() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-h2 md:text-h2-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
            &ldquo;We&rsquo;re not playing phone tag anymore. Sara handles the first response, books the right appointment, and keeps follow‑ups consistent.&rdquo;
          </p>
          <p className="mt-6 text-body-sm text-ink-600 dark:text-white/60">
            Clinic Manager • Multi‑specialty team
          </p>
        </div>
      </Container>
    </section>
  );
}
