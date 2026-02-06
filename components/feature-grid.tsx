import { CalendarClock, FileText, MessageSquareText, Sparkles, PhoneCall, Shield } from "lucide-react";
import { Container } from "./container";
import { H2 } from "./section";

const features = [
  {
    icon: CalendarClock,
    title: "24/7 booking that feels human",
    desc: "Patients schedule, reschedule, and ask questions anytime—without hold music.",
  },
  {
    icon: FileText,
    title: "EMR tasks, handled",
    desc: "Pre‑visit notes, intake routing, and chart updates—organized and ready for review.",
  },
  {
    icon: MessageSquareText,
    title: "Reminders and follow‑ups that stick",
    desc: "Automated texts and emails that reduce no‑shows and keep care on track.",
  },
  {
    icon: PhoneCall,
    title: "Calls, texts, web chat—one inbox",
    desc: "Every conversation in one place, with consistent answers and clean handoffs.",
  },
  {
    icon: Sparkles,
    title: "Protocols, not guesswork",
    desc: "Set rules once. Alphabase executes the right next step every time.",
  },
  {
    icon: Shield,
    title: "Designed for patient privacy",
    desc: "Clear permissions, audit trails, and controls your team can trust.",
  },
];

export function FeatureGrid() {
  return (
    <section id="product" className="py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <H2 className="text-3xl md:text-5xl leading-tight text-ink-900 dark:text-white">
            Everything your front desk does. All in one platform.
          </H2>
        </div>

        <div className="mt-12 grid gap-y-10 gap-x-12 text-center md:grid-cols-3">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="mx-auto flex max-w-xs flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center text-ink-700 dark:text-white/70">
                  <Icon className="h-6 w-6" strokeWidth={1.6} />
                </div>
                <h3 className="mt-3 text-base font-semibold tracking-tightish text-ink-900 dark:text-white">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-white/60">
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
