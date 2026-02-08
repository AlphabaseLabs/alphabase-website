"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/* ── GlassOrb: translucent revolving orb with inner sand wave ── */
function GlassOrb({
  colors,
  duration = 4,
}: {
  colors: { primary: string; secondary: string; highlight: string };
  duration?: number;
}) {
  return (
    <motion.span
      animate={{ rotate: 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className="relative inline-block h-6 w-6 rounded-full"
      style={{
        background: `
          radial-gradient(circle at 35% 35%, ${colors.highlight}55, transparent 50%),
          radial-gradient(circle at 65% 65%, ${colors.secondary}33, transparent 50%),
          radial-gradient(circle at 50% 50%, ${colors.primary}22, transparent 70%)
        `,
        border: `1px solid ${colors.primary}25`,
        boxShadow: `inset 0 0 6px ${colors.primary}15, 0 1px 3px rgba(0,0,0,0.06)`,
      }}
    >
      {/* Inner sand wave */}
      <motion.span
        animate={{ rotate: -360 }}
        transition={{ duration: duration * 0.7, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[3px] rounded-full"
        style={{
          background: `conic-gradient(from 0deg, ${colors.primary}30, transparent 40%, ${colors.secondary}25, transparent 70%, ${colors.highlight}20, transparent)`,
        }}
      />
      {/* Glass highlight */}
      <span
        className="absolute inset-0 rounded-full"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 50%)",
        }}
      />
    </motion.span>
  );
}

/* ── Counter: animated number that counts up on mount ── */
function Counter({ target }: { target: number }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const delay = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setValue(Math.round(current));
      }, duration / steps);
      return () => clearInterval(timer);
    }, 300);
    return () => clearTimeout(delay);
  }, [target]);

  return <span>{value.toLocaleString()}</span>;
}

/* ── Stats data ── */
const stats = [
  {
    label: "AI Receptionist",
    value: 350,
    description: "Patient Engagements",
    orbColors: { primary: "#0d9488", secondary: "#14b8a6", highlight: "#99f6e4" },
    orbSpeed: 4,
    comingSoon: false,
  },
  {
    label: "AI Messenger",
    value: 2800,
    description: "Messages Handled",
    orbColors: { primary: "#7048E8", secondary: "#9775FA", highlight: "#D0BFFF" },
    orbSpeed: 5,
    comingSoon: false,
  },
  {
    label: "AI Scheduler",
    value: 0,
    description: "Reminders Sent",
    orbColors: { primary: "#F06595", secondary: "#FCC2D7", highlight: "#FFF0F6" },
    orbSpeed: 3.5,
    comingSoon: true,
  },
  {
    label: "AI Follow-up",
    value: 0,
    description: "Follow-ups Completed",
    orbColors: { primary: "#F59F00", secondary: "#FFD43B", highlight: "#FFF3BF" },
    orbSpeed: 4.5,
    comingSoon: true,
  },
];

/* ── Single stat card ── */
function StatCard({ stat }: { stat: (typeof stats)[number] }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="flex flex-col justify-between rounded-xl bg-white/50 ring-1 ring-white/60 p-4 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.04)] dark:bg-white/[0.06] dark:ring-white/10"
    >
      {/* Orb + label pill */}
      <div className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/60 ring-1 ring-black/[0.06] pl-1.5 pr-3 py-0.5 dark:bg-white/10 dark:ring-white/10">
        <GlassOrb colors={stat.orbColors} duration={stat.orbSpeed} />
        <span className="text-caption font-medium text-ink-900 dark:text-white whitespace-nowrap">
          {stat.label}
        </span>
      </div>

      {/* Counter or Coming Soon */}
      <p className="mt-5 text-[1.35rem] sm:text-[1.5rem] lg:text-[1.65rem] font-semibold tracking-tight text-ink-900 dark:text-white leading-none">
        {stat.comingSoon ? (
          <span className="text-[0.85rem] sm:text-[0.95rem] font-medium tracking-wide text-ink-600 dark:text-white/50">Coming soon</span>
        ) : (
          <Counter target={stat.value} />
        )}
      </p>

      {/* Description */}
      <p className="mt-1.5 text-caption text-ink-600 dark:text-white/60">
        {stat.description}
      </p>
    </motion.div>
  );
}

export function ProductStats() {
  return (
    <section id="product-stats" className="relative overflow-hidden pb-16 md:pb-28">
      <motion.div
        initial={{ opacity: 1, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="px-5 md:px-8"
      >
        <div className="mx-auto max-w-[80rem]">
          {/* ── Gradient frame ── */}
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#0d9488]/[0.06] via-white/80 to-[#7048E8]/[0.06] ring-1 ring-black/[0.06] shadow-lift dark:from-[#0d9488]/[0.12] dark:via-night-900/80 dark:to-[#7048E8]/[0.12] dark:ring-white/[0.08]">

            {/* Decorative gradient blurs */}
            <span className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl" />
            <span className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-[#7048E8]/15 blur-3xl" />
            <span className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-[60%] rounded-full bg-[#F06595]/[0.06] blur-3xl" />

            {/* Subtle inner border glow */}
            <div className="absolute inset-0 rounded-xl sm:rounded-2xl md:rounded-3xl ring-1 ring-inset ring-white/40 dark:ring-white/[0.06] pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10">
              {/* Section heading */}
              <p className="text-center text-body-lg md:text-[1.25rem] font-medium tracking-mercury text-ink-700 dark:text-white/70 mb-6 md:mb-8">
                Sara is working for practices like yours
              </p>

              {/* Cards: single responsive grid: 1 col → 2 col → 4 col */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <StatCard key={stat.label} stat={stat} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Full-width horizontal divider ── */}
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-center">
        <div className="h-px w-full max-w-[90%] bg-gradient-to-r from-transparent via-black/[0.08] to-transparent dark:via-white/[0.08]" />
      </div>
    </section>
  );
}
