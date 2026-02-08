"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "./button";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function Hero() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const trimmed = email.trim();
  const isValid = isValidEmail(trimmed);
  const showError =
    (touched || submitAttempted) && trimmed !== "" && !isValid;
  const showEmpty = submitAttempted && trimmed === "";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitAttempted(true);
    if (!trimmed || !isValid) return;
    router.push(`/demo?email=${encodeURIComponent(trimmed)}`);
  }

  return (
    <section id="meet" className="noise relative overflow-hidden">
      {/* ── Hero grid ── */}
      <div className="mx-auto grid w-full max-w-[80rem] grid-cols-1 gap-x-8 px-5 md:px-8 pt-[4.5rem]">
        {/* ── Text + CTA block ── */}
        <motion.div
          initial={{ opacity: 1, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto w-full max-w-3xl pt-16 pb-12 md:pt-24 md:pb-16 text-center"
        >
          <h1 className="text-h1 sm:text-h1-md md:text-h1-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
            Meet Your First Superhuman Employee
          </h1>
          <p className="mt-6 text-body-lg md:text-[1.125rem] md:leading-[1.75rem] text-ink-700 dark:text-white/70">
            Sara is the healthcare AI that handles patient inquiries, scheduling, reminders, and follow‑ups across phone, text, and chat.
          </p>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-10 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4"
          >
            <div className="w-full max-w-md">
              <div
                className={`flex w-full items-center rounded-full bg-white/70 p-1.5 shadow-soft ring-1 transition dark:bg-night-900/70 ${
                  showError || showEmpty
                    ? "ring-rose-500/50"
                    : "ring-black/10 dark:ring-white/10"
                }`}
              >
                <input
                  type="email"
                  aria-label="Email"
                  aria-invalid={showError || showEmpty || undefined}
                  aria-describedby={
                    showError || showEmpty ? "hero-email-error" : undefined
                  }
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (submitAttempted) setSubmitAttempted(false);
                  }}
                  onBlur={() => setTouched(true)}
                  autoComplete="email"
                  inputMode="email"
                  className="h-12 w-full bg-transparent px-5 text-body outline-none placeholder:text-ink-600/70 dark:placeholder:text-white/50"
                />
                <span className="shrink-0 pl-2">
                  <Button size="lg" type="submit">Watch a demo</Button>
                </span>
              </div>
              {showError && (
                <p
                  id="hero-email-error"
                  className="mt-2 text-caption text-rose-600"
                >
                  Please enter a valid email address.
                </p>
              )}
              {showEmpty && (
                <p
                  id="hero-email-error"
                  className="mt-2 text-caption text-rose-600"
                >
                  Please enter your email address.
                </p>
              )}
            </div>
          </form>
          <p className="mt-5 text-caption text-ink-600 dark:text-white/60">
            Built for Dental · Aesthetics · Hair transplant · Physiotherapy ·
            Nutrition
          </p>
        </motion.div>
      </div>
    </section>
  );
}
