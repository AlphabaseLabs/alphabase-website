import { cn } from "./utils";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium tracking-wide text-ink-600 dark:text-white/60">
      {children}
    </p>
  );
}

export function H2({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "text-3xl md:text-4xl font-semibold tracking-tightish text-ink-900 dark:text-white",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function Lead({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mt-3 text-base md:text-lg leading-relaxed text-ink-700 dark:text-white/70",
        className
      )}
    >
      {children}
    </p>
  );
}
