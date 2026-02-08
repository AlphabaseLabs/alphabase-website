"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { Container } from "./container";
import { Check, Smile, Sprout, Syringe } from "lucide-react";
import { cn } from "./utils";

const examples = [
  {
    label: "Aesthetics",
    icon: Syringe,
    image: "/solutions/aesthetics.svg",
    headline: "Aesthetics, built-in. On brand from the first chat.",
    bullets: [
      <>
        <strong>Speaks your treatment menu fluently</strong> (Botox/Dysport/fillers,
        skin treatments) with <strong>clear, confident explanations</strong> in
        your tone.
      </>,
      <>
        <strong>Turns curiosity into consults</strong>: qualifies intent, captures
        goals, and <strong>books + follows up</strong> without handoffs.
      </>,
      <>
        <strong>Keeps every answer aligned</strong> with your{" "}
        <strong>pricing, policies, contraindication boundaries, and availability</strong>{" "}
        (when connected).
      </>,
    ],
  },
  {
    label: "Dental",
    icon: Smile,
    image: "/solutions/dental.svg",
    headline: "Dental-first. Calm answers, smarter scheduling.",
    bullets: [
      <>
        <strong>Reassures patients post-visit</strong> with{" "}
        <strong>empathetic, non-diagnostic guidance</strong> for common concerns
        (pain, swelling, aftercare).
      </>,
      <>
        <strong>Offers the next right appointment</strong> using your{" "}
        <strong>schedule + patient context</strong> (when connected) for checkups
        and urgent slots.
      </>,
      <>
        <strong>Escalates what matters</strong>: flags red-flag symptoms and{" "}
        <strong>routes to your team</strong> with the conversation summary
        captured.
      </>,
    ],
  },
  {
    label: "Hair Transplant",
    icon: Sprout,
    image: "/solutions/hair-transplant.svg",
    headline: "Hair restoration. From first photo to booked consult.",
    bullets: [
      <>
        <strong>Sets expectations clearly</strong> (timelines, phases, outcomes)
        in your voice, no hype, just clarity.
      </>,
      <>
        <strong>Collects photos + intake details</strong> (history, goals,
        donor/recipient concerns) and{" "}
        <strong>books consult / scalp analysis</strong> seamlessly.
      </>,
      <>
        <strong>Stays aligned with your workflows</strong>: pricing ranges,
        eligibility steps, and availability (when connected).
      </>,
    ],
  },
];

type Example = (typeof examples)[number];

/* ── Components ──────────────────────────────────────────────────────── */

function PracticeCard({
  ex,
  className,
}: {
  ex: Example;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "relative",
        className
      )}
    >
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        {/* Left: copy */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-3 py-1 text-caption font-medium text-ink-900 ring-1 ring-brand-200 dark:bg-white/10 dark:text-white dark:ring-white/15">
            <ex.icon className="h-4 w-4" aria-hidden="true" />
            {ex.label}
          </span>
          <h3 className="mt-3 text-h2 md:text-h2-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
            {ex.headline}
          </h3>

          <ul className="mt-7 space-y-4">
            {ex.bullets.map((b, idx) => (
              <li
                key={`${ex.label}-${idx}`}
                className="flex gap-3 text-body-sm text-ink-700 dark:text-white/70"
              >
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-100 ring-1 ring-brand-200 dark:bg-white/10 dark:ring-white/15">
                  <Check className="h-4 w-4 text-ink-900 dark:text-white" />
                </span>
                <span className="leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: image */}
        <div className="relative overflow-hidden rounded-3xl">
          <Image
            src={ex.image}
            alt={ex.label}
            width={640}
            height={480}
            className="w-full h-auto object-cover rounded-3xl scale-[1.25] origin-center"
          />
        </div>
      </div>
    </article>
  );
}

/* ── Main section ────────────────────────────────────────────────────── */

export function SplitSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const applyProgress = useCallback((progress: number) => {
    const track = trackRef.current;
    if (!track) return;

    const count = examples.length;
    // The track holds N cards; translate so progress 0→1 maps to card 0→N-1
    const maxShift = track.scrollHeight - track.scrollHeight / count;
    track.style.transform = `translateY(${-progress * maxShift}px)`;

    // Update dots
    const active = progress * (count - 1);
    examples.forEach((_, i) => {
      const dot = dotRefs.current[i];
      if (!dot) return;
      const activity = Math.max(0, 1 - Math.abs(active - i));
      dot.style.width = `${8 + 16 * activity}px`;
      dot.style.backgroundColor =
        activity > 0.25
          ? `rgb(var(--brand-600) / ${0.4 + 0.6 * activity})`
          : "";
    });
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let ticking = false;

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const scrollableRange = section.scrollHeight - window.innerHeight;
        if (scrollableRange <= 0) return;

        const scrolled = -rect.top;
        const progress = Math.max(0, Math.min(1, scrolled / scrollableRange));
        applyProgress(progress);
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [applyProgress]);

  return (
    <section
      id="solutions"
      ref={sectionRef}
      className="relative"
      style={{ height: `${(examples.length + 1) * 100}vh` }}
    >
      <Container className="sticky top-0 h-screen flex flex-col items-center justify-center">
        {/* Clipped viewport – shows one card at a time */}
        <div className="relative w-full overflow-hidden" style={{ height: "72vh" }}>
          {/* Scrolling track – all cards stacked vertically */}
          <div
            ref={trackRef}
            className="will-change-transform"
          >
            {examples.map((ex) => (
              <div
                key={ex.label}
                className="flex items-center"
                style={{ height: "72vh" }}
              >
                <PracticeCard ex={ex} className="w-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Progress dots */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {examples.map((ex, i) => (
            <span
              key={ex.label}
              ref={(el) => { dotRefs.current[i] = el; }}
              className="h-2 rounded-full bg-ink-500/30 dark:bg-white/20"
              style={{ width: i === 0 ? 24 : 8 }}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
