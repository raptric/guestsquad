import { cn } from "@/lib/utils";

export function Section({
  className,
  surface = false,
  compact = false,
  children,
  id,
}: {
  className?: string;
  surface?: boolean;
  compact?: boolean;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(compact ? "py-12 md:py-16" : "py-20 md:py-28", surface && "bg-surface", className)}
    >
      <div className="container">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-medium leading-tight text-ink md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-soft">
          {description}
        </p>
      )}
    </div>
  );
}
