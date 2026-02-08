"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useState,
  useEffect,
  type HTMLAttributes,
  type InputHTMLAttributes,
  type ComponentType,
  type ReactNode,
} from "react";
import { ArrowLeft, ArrowRight, Apple, Chrome } from "lucide-react";
import { cn } from "@/components/utils";

type Mode = "sara" | "ehr";

function FieldLabel({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-body-sm font-medium text-ink-700 dark:text-white/70"
    >
      {children}
    </label>
  );
}

function TextInput({
  id,
  value,
  onChange,
  placeholder,
  autoComplete,
  inputMode,
  type = "text",
  error,
}: {
  id: string;
  value: string;
  onChange: (next: string) => void;
  placeholder: string;
  autoComplete?: string;
  inputMode?: HTMLAttributes<HTMLInputElement>["inputMode"];
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
  error?: boolean;
}) {
  return (
    <input
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      autoComplete={autoComplete}
      inputMode={inputMode}
      type={type}
      className={cn(
        "h-11 w-full rounded-2xl bg-white/70 px-4 text-body outline-none ring-1 shadow-soft transition placeholder:text-ink-600/70 focus-visible:ring-2 focus-visible:ring-brand-500/60 dark:bg-night-900/70 dark:text-white dark:ring-white/10 dark:placeholder:text-white/50",
        error ? "ring-red-500/40 focus-visible:ring-red-500/60" : "ring-black/10"
      )}
    />
  );
}

function PrimarySubmit({
  children,
  disabled,
}: {
  children: ReactNode;
  disabled?: boolean;
}) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={cn(
        "inline-flex h-11 w-full items-center justify-center gap-2 rounded-full px-5 text-body-sm font-medium text-white shadow-soft transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-paper dark:focus-visible:ring-offset-night-950",
        disabled
          ? "bg-ink-500/40 cursor-not-allowed"
          : "bg-brand-600 hover:bg-brand-500"
      )}
    >
      {children}
    </button>
  );
}

function SocialButton({
  children,
  onClick,
  Icon,
}: {
  children: ReactNode;
  onClick: () => void;
  Icon: ComponentType<{ className?: string }>;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-white/70 px-5 text-body-sm font-medium text-ink-900 ring-1 ring-black/10 shadow-soft transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-paper dark:bg-night-900/70 dark:text-white dark:ring-white/10 dark:hover:bg-night-900 dark:focus-visible:ring-offset-night-950"
    >
      <Icon className="h-4 w-4 opacity-80" />
      {children}
    </button>
  );
}

function Divider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-px w-full bg-black/10 dark:bg-white/10" />
      <span className="text-caption text-ink-600 dark:text-white/60">
        {label}
      </span>
      <div className="h-px w-full bg-black/10 dark:bg-white/10" />
    </div>
  );
}

function ModeCard({
  title,
  description,
  active,
  onClick,
}: {
  title: string;
  description: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "group w-full rounded-4xl p-5 text-left ring-1 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-paper dark:focus-visible:ring-offset-night-950",
        active
          ? "bg-brand-100/70 ring-brand-500/25 shadow-soft dark:bg-night-800/60"
          : "bg-white/70 ring-black/10 hover:bg-white shadow-soft dark:bg-night-900/50 dark:ring-white/10 dark:hover:bg-night-900"
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-body font-semibold tracking-mercury text-ink-900 dark:text-white">
            {title}
          </p>
          <p className="mt-1 text-body-sm text-ink-700 dark:text-white/70">
            {description}
          </p>
        </div>
        <span
          className={cn(
            "mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 transition",
            active
              ? "bg-white/70 ring-brand-500/20 dark:bg-night-900/60"
              : "bg-black/5 ring-black/10 group-hover:bg-black/10 dark:bg-white/10 dark:ring-white/10 dark:group-hover:bg-white/15"
          )}
          aria-hidden="true"
        >
          <ArrowRight className="h-4 w-4 opacity-70" />
        </span>
      </div>
    </button>
  );
}

export function SignInClient() {
  const [mode, setMode] = useState<Mode>("sara");

  const [saraIdentifier, setSaraIdentifier] = useState("");
  const [saraError, setSaraError] = useState<string | null>(null);
  const [saraStatus, setSaraStatus] = useState<"idle" | "submitting">("idle");

  const [orgId, setOrgId] = useState("");
  const [orgError, setOrgError] = useState<string | null>(null);
  const [authCsrfToken, setAuthCsrfToken] = useState<string | null>(null);
  const [authReady, setAuthReady] = useState<"loading" | "ready" | "missing">(
    "loading"
  );

  useEffect(() => {
    let active = true;

    async function loadCsrfToken() {
      try {
        const res = await fetch("/api/auth/csrf", { method: "GET" });
        if (!res.ok) throw new Error("csrf fetch failed");
        const json = (await res.json()) as { csrfToken?: unknown };
        if (typeof json.csrfToken !== "string" || !json.csrfToken) {
          throw new Error("csrf token missing");
        }
        if (!active) return;
        setAuthCsrfToken(json.csrfToken);
        setAuthReady("ready");
      } catch {
        if (!active) return;
        setAuthCsrfToken(null);
        setAuthReady("missing");
      }
    }

    loadCsrfToken();
    return () => {
      active = false;
    };
  }, []);

  function submitNextAuth(provider: string, fields: Record<string, string>) {
    const form = document.createElement("form");
    form.method = "post";
    form.action = `/api/auth/signin/${provider}`;

    Object.entries(fields).forEach(([name, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
  }

  return (
    <main className="noise relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(0,185,165,0.18),transparent_50%),radial-gradient(circle_at_85%_28%,rgba(221,135,92,0.14),transparent_55%)] opacity-90" />

      <header className="relative mx-auto flex w-full max-w-content items-center justify-between px-5 md:px-8 pt-8">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo-icon.svg"
            alt="Alphabase® icon"
            width={32}
            height={32}
            className="h-8 w-8 object-contain rounded-md"
            priority
          />
          <Image
            src="/workmark-dark-logo.svg"
            alt="Alphabase®"
            width={733}
            height={84}
            className="hidden sm:block h-[23px] w-auto"
            priority
          />
        </Link>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-body-sm font-medium text-ink-700 transition hover:bg-black/5 hover:text-ink-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-paper dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white dark:focus-visible:ring-offset-night-950"
        >
          <ArrowLeft className="h-4 w-4 opacity-80" />
          Back to home
        </Link>
      </header>

      <section className="relative mx-auto w-full max-w-content px-5 md:px-8 pb-14 pt-10 md:pt-14">
        <div className="grid overflow-hidden rounded-4xl bg-white/70 ring-1 ring-black/10 shadow-soft backdrop-blur dark:bg-night-900/60 dark:ring-white/10 md:grid-cols-[360px_1fr]">
          {/* Left rail */}
          <aside className="p-6 md:p-8 border-b border-black/10 dark:border-white/10 md:border-b-0 md:border-r">
            <p className="text-caption font-medium tracking-wide text-ink-600 dark:text-white/60">
              Choose your product
            </p>
            <div className="mt-4 grid gap-4">
              <ModeCard
                title="Sara AI"
                description="Sign in to your Sara AI account."
                active={mode === "sara"}
                onClick={() => setMode("sara")}
              />
              <ModeCard
                title="EHR Platform"
                description="Sign in to your provider account."
                active={mode === "ehr"}
                onClick={() => setMode("ehr")}
              />
            </div>

            <div className="mt-8 rounded-3xl bg-black/5 p-4 ring-1 ring-black/10 dark:bg-white/5 dark:ring-white/10">
              <p className="text-body-sm text-ink-700 dark:text-white/70">
                Don&apos;t have an account?{" "}
                <Link
                  href="/demo"
                  className="font-medium text-ink-900 underline underline-offset-4 hover:opacity-80 dark:text-white"
                >
                  Request a demo
                </Link>
              </p>
            </div>
          </aside>

          {/* Right panel */}
          <div className="p-6 md:p-8">
            {mode === "sara" ? (
              <div>
                <h1 className="text-h3 md:text-h3-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
                  Log in
                </h1>
                <p className="mt-2 text-body text-ink-700 dark:text-white/70">
                  Use your email or mobile number to continue.
                </p>

                <form
                  className="mt-6 space-y-5"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const trimmed = saraIdentifier.trim();
                    if (!trimmed) {
                      setSaraError("Please enter an email or mobile number.");
                      return;
                    }

                    if (!trimmed.includes("@")) {
                      setSaraError("Please use your email to sign in.");
                      return;
                    }

                    if (authReady !== "ready" || !authCsrfToken) {
                      setSaraError(
                        "Sign-in is not configured yet. Please try again later."
                      );
                      return;
                    }

                    setSaraError(null);
                    setSaraStatus("submitting");
                    submitNextAuth("email", {
                      csrfToken: authCsrfToken,
                      email: trimmed,
                      callbackUrl: "/",
                    });
                  }}
                >
                  <div className="space-y-2">
                    <FieldLabel htmlFor="sara-identifier">
                      Email or mobile number
                    </FieldLabel>
                    <TextInput
                      id="sara-identifier"
                      value={saraIdentifier}
                      onChange={(next) => {
                        setSaraIdentifier(next);
                        setSaraError(null);
                        setSaraStatus("idle");
                      }}
                      placeholder="name@clinic.com or +1 (555) 555‑5555"
                      autoComplete="username"
                      inputMode="email"
                      error={Boolean(saraError)}
                    />
                    {saraError ? (
                      <p className="text-caption text-red-600">{saraError}</p>
                    ) : null}
                  </div>

                  <PrimarySubmit
                    disabled={!saraIdentifier.trim() || saraStatus === "submitting"}
                  >
                    {saraStatus === "submitting" ? "Continuing..." : "Next"}
                  </PrimarySubmit>

                  {authReady === "missing" ? (
                    <div className="rounded-3xl bg-black/5 p-4 ring-1 ring-black/10 dark:bg-white/5 dark:ring-white/10">
                      <p className="text-body-sm text-ink-700 dark:text-white/70">
                        NextAuth isn&apos;t configured on this site yet. Connect
                        your NextAuth `/api/auth/*` routes to enable sign-in.
                      </p>
                    </div>
                  ) : null}

                  <Divider label="or" />

                  <div className="grid gap-3">
                    <SocialButton
                      Icon={Chrome}
                      onClick={() => {
                        if (authReady !== "ready" || !authCsrfToken) {
                          setSaraError(
                            "Sign-in is not configured yet. Please try again later."
                          );
                          return;
                        }
                        submitNextAuth("google", {
                          csrfToken: authCsrfToken,
                          callbackUrl: "/",
                        });
                      }}
                    >
                      Sign in with Google
                    </SocialButton>
                    <SocialButton
                      Icon={Apple}
                      onClick={() => {
                        if (authReady !== "ready" || !authCsrfToken) {
                          setSaraError(
                            "Sign-in is not configured yet. Please try again later."
                          );
                          return;
                        }
                        submitNextAuth("apple", {
                          csrfToken: authCsrfToken,
                          callbackUrl: "/",
                        });
                      }}
                    >
                      Sign in with Apple
                    </SocialButton>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <Link
                      href="/demo"
                      className="text-body-sm font-medium text-ink-700 underline underline-offset-4 hover:text-ink-900 dark:text-white/70 dark:hover:text-white"
                    >
                      Forgot password?
                    </Link>
                    <Link
                      href="/demo"
                      className="text-body-sm font-medium text-ink-700 underline underline-offset-4 hover:text-ink-900 dark:text-white/70 dark:hover:text-white"
                    >
                      Need access?
                    </Link>
                  </div>
                </form>
              </div>
            ) : (
              <div>
                <h1 className="text-h3 md:text-h3-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
                  Find your organization
                </h1>
                <p className="mt-2 text-body text-ink-700 dark:text-white/70">
                  If you&apos;re not affiliated with an organization, enter{" "}
                  <span className="font-medium text-ink-900 dark:text-white">
                    EHRDemo
                  </span>
                  .
                </p>

                <form
                  className="mt-6 space-y-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const normalized = orgId.trim().toLowerCase();
                    if (!normalized) {
                      setOrgError("Please enter your org ID.");
                      return;
                    }

                    if (normalized === "ehrdemo") {
                      window.open(
                        "https://demo.alphabase.co",
                        "_blank",
                        "noopener,noreferrer"
                      );
                      return;
                    }

                    setOrgError("ID not found");
                  }}
                >
                  <div className="space-y-2">
                    <FieldLabel htmlFor="ehr-org">Organization ID</FieldLabel>
                    <TextInput
                      id="ehr-org"
                      value={orgId}
                      onChange={(next) => {
                        setOrgId(next);
                        setOrgError(null);
                      }}
                      placeholder="Enter your org id"
                      autoComplete="organization"
                      error={Boolean(orgError)}
                    />
                    {orgError ? (
                      <p className="text-caption text-red-600">{orgError}</p>
                    ) : null}
                  </div>

                  <div className="grid gap-3">
                    <PrimarySubmit disabled={!orgId.trim()}>Submit</PrimarySubmit>

                    <Link
                      href="/demo"
                      className="text-body-sm font-medium text-ink-700 underline underline-offset-4 hover:text-ink-900 dark:text-white/70 dark:hover:text-white text-center"
                    >
                      Don&apos;t have an account? Request a demo
                    </Link>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
