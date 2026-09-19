import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
};

/**
 * Editorial section heading: uppercase eyebrow with hairline,
 * display-serif-scale title, and optional description.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      <p
        className={cn(
          "flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em]",
          align === "center" && "justify-center",
          dark ? "text-electric-400" : "text-royal-600"
        )}
      >
        <span aria-hidden className="h-px w-8 bg-current opacity-50" />
        {eyebrow}
        <span aria-hidden className="h-px w-8 bg-current opacity-50" />
      </p>
      <h2
        className={cn(
          "mt-5 font-display text-3xl font-bold tracking-[-0.02em] sm:text-4xl lg:text-[44px] lg:leading-[1.08]",
          dark ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            dark ? "text-white/65" : "text-body"
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
