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
          "flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.18em] min-[380px]:gap-3 min-[380px]:text-xs min-[380px]:tracking-[0.22em]",
          align === "center" && "justify-center",
          dark ? "text-electric-400" : "text-royal-600"
        )}
      >
        <span aria-hidden="true" className="h-px w-5 bg-current opacity-50 min-[380px]:w-8" />
        {eyebrow}
        <span aria-hidden="true" className="h-px w-5 bg-current opacity-50 min-[380px]:w-8" />
      </p>
      <h2
        className={cn(
          "mt-3.5 font-display text-2xl font-bold tracking-[-0.02em] min-[380px]:text-[28px] sm:mt-5 sm:text-4xl lg:text-[44px] lg:leading-[1.08]",
          dark ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-3 text-xs leading-relaxed min-[380px]:text-sm sm:mt-5 sm:text-base sm:leading-relaxed lg:text-lg",
            dark ? "text-white/65" : "text-body"
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
