import { cn } from "./utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-content px-5 md:px-8", className)}>
      {children}
    </div>
  );
}
