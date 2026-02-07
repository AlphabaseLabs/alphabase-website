import Link from "next/link";
import { cn } from "./utils";
import { ArrowUpRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-paper dark:focus-visible:ring-offset-night-950";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white shadow-soft hover:shadow-lift hover:bg-brand-500",
  secondary:
    "bg-white/70 text-ink-900 ring-1 ring-black/10 hover:bg-white shadow-soft dark:bg-night-900/70 dark:text-white dark:ring-white/10",
  ghost:
    "text-ink-900 hover:bg-black/5 dark:text-white dark:hover:bg-white/10",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  withArrow = false,
  className,
}: {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
}) {
  const cls = cn(base, variants[variant], sizes[size], className);
  const content = (
    <>
      <span>{children}</span>
      {withArrow ? <ArrowUpRight className="h-4 w-4 opacity-80" /> : null}
    </>
  );

  if (href) return <Link href={href} className={cls}>{content}</Link>;
  return <button className={cls} type="button">{content}</button>;
}
