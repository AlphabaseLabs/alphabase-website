import { Container } from "./container";

const stats = [
  { value: "24/7", label: "responses + scheduling" },
  { value: "1", label: "inbox across channels" },
  { value: "Coachable", label: "learns your playbooks" },
  { value: "Consistent", label: "reminders + follow‑ups" },
];

export function Stats() {
  return (
    <section className="py-10">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className="relative">
              <p className="text-h2 md:text-h2-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
                {s.value}
              </p>
              <p className="mt-2 text-body-sm text-ink-600 dark:text-white/60">
                {s.label}
              </p>
              {i < stats.length - 1 ? (
                <div className="hidden md:block absolute right-[-16px] top-2 h-12 w-px bg-black/10 dark:bg-white/10" />
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
