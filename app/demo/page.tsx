"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, Sparkles } from "lucide-react";

const featuredTestimonial = {
  stats: [
    { value: "24/7", label: "responses + scheduling" },
    { value: "1 inbox", label: "across phone, text, chat" },
  ],
  quote:
    "Sara handles patient inquiries, booking, reminders, and follow‑ups with fast, consistent answers. Patients get responses in seconds, and our front desk stays calm—even after hours.",
  author: "Hughan Frederick",
  role: "MD, FACOG, Owner",
};

/* ── Practice type options (Step 1) ── */
const practiceTypes = [
  "Dental",
  "Aesthetics / Med Spa",
  "Hair Transplant",
  "Physiotherapy",
  "Nutrition / Wellness",
  "Multi-specialty / Other",
];

/* ── Practice size options (Step 2) ── */
const practiceSizes = [
  "Solo practitioner",
  "2 – 5 providers",
  "6 – 15 providers",
  "16 – 50 providers",
  "50+ providers",
];

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function FeaturedTestimonialCard() {
  return (
    <div className="rounded-4xl border border-[#DD875C] bg-[#F3ECE6]/65 p-6 shadow-soft md:p-7">
      <div className="rounded-3xl bg-[#EFE6DE]/80 p-6">
        <div className="grid gap-6 sm:grid-cols-2">
          {featuredTestimonial.stats.map((s) => (
            <div key={s.label}>
              <div className="text-h2 font-semibold tracking-mercury text-[#DD875C]">
                {s.value}
              </div>
              <div className="mt-1 text-body-sm text-ink-700">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-6 text-body leading-relaxed text-ink-800">
        &ldquo;{featuredTestimonial.quote}&rdquo;
      </p>

      <div className="mt-7 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/70 ring-1 ring-black/10">
          <span className="text-body-sm font-semibold text-ink-700">
            {getInitials(featuredTestimonial.author)}
          </span>
        </div>
        <div>
          <p className="text-body font-semibold text-ink-900">
            {featuredTestimonial.author}
          </p>
          <p className="text-caption text-ink-600">{featuredTestimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

/* ── Main Demo Page ── */
export default function DemoPage() {
  const [step, setStep] = useState(0);
  const [practiceType, setPracticeType] = useState("");
  const [practiceSize, setPracticeSize] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    practice: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const canContinueStep0 = practiceType !== "";
  const canContinueStep1 = practiceSize !== "";
  const email = formData.email.trim();
  const isEmailOk = isValidEmail(email);
  const showEmailError = emailTouched && email !== "" && !isEmailOk;
  const canSubmit =
    formData.name.trim() !== "" && isEmailOk && formData.practice.trim() !== "";

  async function handleSubmit() {
    const body = new FormData();
    body.append("name", formData.name);
    body.append("email", formData.email);
    body.append("practice", formData.practice);
    body.append("practiceType", practiceType);
    body.append("practiceSize", practiceSize);
    body.append("notes", formData.notes);

    try {
      await fetch("/api/lead", { method: "POST", body });
    } catch {
      // fail silently for now
    }
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen">
      {/* ── Navbar ── */}
      <header className="sticky top-0 z-50 w-full bg-paper/70 backdrop-blur supports-[backdrop-filter]:bg-paper/55">
        <div className="w-full px-5 md:px-8 py-4">
          <div className="flex items-center justify-between gap-8">
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <Image
                src="/logo-icon.svg"
                alt="Alphabase® icon"
                width={32}
                height={32}
                className="h-8 w-8 object-contain rounded-md"
              />
              <Image
                src="/workmark-dark-logo.svg"
                alt="Alphabase®"
                width={733}
                height={84}
                className="hidden sm:block h-[23px] w-auto"
              />
            </Link>
            <Link
              href="/"
              className="text-body-sm font-medium text-ink-700 hover:text-ink-900 transition-colors"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </header>

      {/* ── Two-column Demo Layout ── */}
      <section className="pt-8 pb-12 md:pt-14 md:pb-16">
        <div className="mx-auto w-full max-w-content px-5 md:px-8">
          <div className="grid items-start lg:grid-cols-2 gap-8 lg:gap-x-20">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-h1 md:text-h1-md font-semibold tracking-mercury text-ink-900">
                See Alphabase® in Action
              </h1>
              <p className="mt-5 max-w-xl text-body-lg md:text-[1.125rem] md:leading-[1.75rem] text-ink-700">
                Learn how Sara saves clinicians hours daily while increasing
                booked appointments—then explore ROI‑backed trial options.
              </p>
            </motion.div>

            {/* Testimonial */}
            <div className="lg:col-start-1 lg:row-start-2">
              <FeaturedTestimonialCard />
            </div>

            {/* Right column */}
            <div className={submitted ? "lg:col-start-2 lg:row-start-2" : "lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:pt-6"}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-4xl bg-white/70 ring-1 ring-black/10 p-10 md:p-14 shadow-soft text-center"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 ring-1 ring-brand-200">
                    <Check className="h-8 w-8 text-brand-600" />
                  </div>
                  <h2 className="mt-6 text-h3 md:text-h2 font-semibold tracking-mercury text-ink-900">
                    You&apos;re all set!
                  </h2>
                  <p className="mt-3 text-body text-ink-700 max-w-md mx-auto">
                    Thanks for your interest. We&apos;ll reach out within 24
                    hours to schedule your personalized demo.
                  </p>
                  <Link
                    href="/"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#DD875C] text-white shadow-soft hover:shadow-lift hover:bg-[#CF7B52] h-12 px-6 text-body transition"
                  >
                    Back to home
                  </Link>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="rounded-4xl bg-white/70 ring-1 ring-black/10 p-7 md:p-10 shadow-soft"
                >
                  {/* Step indicators */}
                  <div className="flex items-center gap-2 mb-8">
                    {[0, 1, 2].map((s) => (
                      <div key={s} className="flex items-center gap-2">
                        <span
                          className={`flex h-8 w-8 items-center justify-center rounded-full text-caption font-semibold transition-colors ${
                            step > s
                              ? "bg-brand-500 text-white"
                              : step === s
                              ? "bg-[#DD875C] text-white"
                              : "bg-ink-500/15 text-ink-600"
                          }`}
                        >
                          {step > s ? <Check className="h-4 w-4" /> : s + 1}
                        </span>
                        {s < 2 && (
                          <div
                            className={`h-px w-8 sm:w-16 transition-colors ${
                              step > s ? "bg-brand-500" : "bg-ink-500/15"
                            }`}
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  <AnimatePresence mode="wait">
                    {/* ── Step 0: Practice type ── */}
                    {step === 0 && (
                      <motion.div
                        key="step0"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h2 className="text-h3 md:text-h3-lg font-semibold tracking-mercury text-ink-900">
                          What type of practice do you run?
                        </h2>
                        <p className="mt-2 text-body-sm text-ink-600">
                          This helps us tailor the demo to your specialty.
                        </p>

                        <div className="mt-6 space-y-3">
                          {practiceTypes.map((type) => (
                            <button
                              key={type}
                              type="button"
                              aria-pressed={practiceType === type}
                              onClick={() => setPracticeType(type)}
                              className={`flex w-full items-center justify-between rounded-2xl px-5 py-4 cursor-pointer ring-1 transition-all text-left active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DD875C]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-paper ${
                                practiceType === type
                                  ? "bg-[#DD875C]/[0.08] ring-[#DD875C]/45 shadow-sm"
                                  : "bg-white/60 ring-black/10 hover:ring-black/15 hover:bg-white/85 hover:shadow-sm"
                              }`}
                            >
                              <span className="text-body font-medium text-ink-900">
                                {type}
                              </span>
                              <span
                                className={`flex h-5 w-5 items-center justify-center rounded-full ring-1.5 transition-all ${
                                  practiceType === type
                                    ? "bg-white/70 ring-[#DD875C]"
                                    : "bg-white ring-ink-500/30"
                                }`}
                              >
                                {practiceType === type && (
                                  <span className="h-2.5 w-2.5 rounded-full bg-[#DD875C]" />
                                )}
                              </span>
                            </button>
                          ))}
                        </div>

                        <div className="mt-8">
                          <button
                            type="button"
                            onClick={() => canContinueStep0 && setStep(1)}
                            disabled={!canContinueStep0}
                            className={`inline-flex h-14 w-full items-center justify-center gap-2 rounded-2xl px-7 text-body font-medium transition ${
                              canContinueStep0
                                ? "bg-[#DD875C] text-white shadow-soft hover:shadow-lift hover:bg-[#CF7B52]"
                                : "bg-ink-500/15 text-ink-600 cursor-not-allowed"
                            }`}
                          >
                            Continue
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {/* ── Step 1: Practice size ── */}
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h2 className="text-h3 md:text-h3-lg font-semibold tracking-mercury text-ink-900">
                          How large is your team?
                        </h2>
                        <p className="mt-2 text-body-sm text-ink-600">
                          We&apos;ll show you the plan and setup that fits.
                        </p>

                        <div className="mt-6 space-y-3">
                          {practiceSizes.map((size) => (
                            <button
                              key={size}
                              type="button"
                              aria-pressed={practiceSize === size}
                              onClick={() => setPracticeSize(size)}
                              className={`flex w-full items-center justify-between rounded-2xl px-5 py-4 cursor-pointer ring-1 transition-all text-left active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DD875C]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-paper ${
                                practiceSize === size
                                  ? "bg-[#DD875C]/[0.08] ring-[#DD875C]/45 shadow-sm"
                                  : "bg-white/60 ring-black/10 hover:ring-black/15 hover:bg-white/85 hover:shadow-sm"
                              }`}
                            >
                              <span className="text-body font-medium text-ink-900">
                                {size}
                              </span>
                              <span
                                className={`flex h-5 w-5 items-center justify-center rounded-full ring-1.5 transition-all ${
                                  practiceSize === size
                                    ? "bg-white/70 ring-[#DD875C]"
                                    : "bg-white ring-ink-500/30"
                                }`}
                              >
                                {practiceSize === size && (
                                  <span className="h-2.5 w-2.5 rounded-full bg-[#DD875C]" />
                                )}
                              </span>
                            </button>
                          ))}
                        </div>

                        <div className="mt-8 flex items-center justify-between">
                          <button
                            type="button"
                            onClick={() => setStep(0)}
                            className="inline-flex items-center gap-2 rounded-full h-11 px-5 text-body-sm font-medium text-ink-700 hover:bg-black/5 transition"
                          >
                            <ArrowLeft className="h-4 w-4" />
                            Back
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => canContinueStep1 && setStep(2)}
                          disabled={!canContinueStep1}
                          className={`mt-4 inline-flex h-14 w-full items-center justify-center gap-2 rounded-2xl px-7 text-body font-medium transition ${
                            canContinueStep1
                              ? "bg-[#DD875C] text-white shadow-soft hover:shadow-lift hover:bg-[#CF7B52]"
                              : "bg-ink-500/15 text-ink-600 cursor-not-allowed"
                          }`}
                        >
                          Continue
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </motion.div>
                    )}

                    {/* ── Step 2: Contact details ── */}
                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h2 className="text-h3 md:text-h3-lg font-semibold tracking-mercury text-ink-900">
                          Almost there—tell us about you
                        </h2>
                        <p className="mt-2 text-body-sm text-ink-600">
                          We&apos;ll use this to personalize your demo
                          walkthrough.
                        </p>

                        <div className="mt-6 space-y-4">
                          <div>
                            <label className="block text-body-sm font-medium text-ink-900">
                              Your name
                            </label>
                            <input
                              value={formData.name}
                              onChange={(e) =>
                                setFormData({ ...formData, name: e.target.value })
                              }
                              className="mt-2 h-12 w-full rounded-2xl bg-white/70 px-5 text-body outline-none ring-1 ring-black/10 focus:ring-brand-500/60 placeholder:text-ink-600/50"
                              placeholder="Dr. Jane Smith"
                            />
                          </div>

                          <div>
                            <label className="block text-body-sm font-medium text-ink-900">
                              Email address
                            </label>
                            <input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                              }
                              onBlur={() => setEmailTouched(true)}
                              autoComplete="email"
                              inputMode="email"
                              aria-invalid={showEmailError || undefined}
                              aria-describedby={showEmailError ? "email-error" : undefined}
                              className={`mt-2 h-12 w-full rounded-2xl bg-white/70 px-5 text-body outline-none ring-1 placeholder:text-ink-600/50 ${
                                showEmailError
                                  ? "ring-rose-500/50 focus:ring-rose-500/60"
                                  : "ring-black/10 focus:ring-brand-500/60"
                              }`}
                              placeholder="you@practice.com"
                            />
                            {showEmailError ? (
                              <p
                                id="email-error"
                                className="mt-2 text-caption text-rose-600"
                              >
                                Please enter a valid email address.
                              </p>
                            ) : null}
                          </div>

                          <div>
                            <label className="block text-body-sm font-medium text-ink-900">
                              Practice name
                            </label>
                            <input
                              value={formData.practice}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  practice: e.target.value,
                                })
                              }
                              className="mt-2 h-12 w-full rounded-2xl bg-white/70 px-5 text-body outline-none ring-1 ring-black/10 focus:ring-brand-500/60 placeholder:text-ink-600/50"
                              placeholder="Studio Dermatology"
                            />
                          </div>

                          <div>
                            <label className="block text-body-sm font-medium text-ink-900">
                              What should Sara handle first?{" "}
                              <span className="font-normal text-ink-600">
                                (optional)
                              </span>
                            </label>
                            <textarea
                              value={formData.notes}
                              onChange={(e) =>
                                setFormData({ ...formData, notes: e.target.value })
                              }
                              className="mt-2 min-h-[100px] w-full rounded-3xl bg-white/70 px-5 py-3 text-body outline-none ring-1 ring-black/10 focus:ring-brand-500/60 placeholder:text-ink-600/50"
                              placeholder="e.g., reschedules, reminders, post-treatment follow-ups..."
                            />
                          </div>
                        </div>

                        <div className="mt-8 flex items-center justify-between">
                          <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="inline-flex items-center gap-2 rounded-full h-11 px-5 text-body-sm font-medium text-ink-700 hover:bg-black/5 transition"
                          >
                            <ArrowLeft className="h-4 w-4" />
                            Back
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => canSubmit && handleSubmit()}
                          disabled={!canSubmit}
                          className={`mt-4 inline-flex h-14 w-full items-center justify-center gap-2 rounded-2xl px-7 text-body font-medium transition ${
                            canSubmit
                              ? "bg-[#DD875C] text-white shadow-soft hover:shadow-lift hover:bg-[#CF7B52]"
                              : "bg-ink-500/15 text-ink-600 cursor-not-allowed"
                          }`}
                        >
                          <Sparkles className="h-4 w-4" />
                          Request my demo
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}

              <p className="mt-5 text-center text-caption text-ink-700">
                No commitment required. Just a personalized walk‑through of your
                workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Minimal Footer ── */}
      <footer className="border-t border-black/[0.06] py-8">
        <div className="mx-auto max-w-content px-5 md:px-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-caption text-ink-600">
            © {new Date().getFullYear()} Alphabase®. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-caption text-ink-600">
            <Link
              href="/privacy"
              className="hover:text-ink-900 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-ink-900 transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
