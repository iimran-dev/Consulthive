"use client";

import { ArrowRight, BadgeCheck, type LucideIcon } from "lucide-react";
import { CountUp } from "@/components/shared/count-up";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

type StatItem = {
  to: number;
  suffix: string;
  label: string;
  icon?: LucideIcon;
  cardClassName: string;
  numberClassName: string;
  labelClassName: string;
};

const statsList: readonly StatItem[] = [
  {
    to: 10,
    suffix: "+",
    label: "Years of Experience",
    cardClassName: "border border-navy-900/[0.08] bg-white",
    numberClassName: "text-3xl sm:text-4xl text-ink",
    labelClassName: "text-body",
  },
  {
    to: 500,
    suffix: "+",
    label: "Certifications Delivered",
    icon: BadgeCheck,
    cardClassName: "bg-navy-900 text-white shadow-lift ring-1 ring-white/10",
    numberClassName: "text-3xl sm:text-4xl text-white",
    labelClassName: "text-white/70",
  },
  {
    to: 100,
    suffix: "+",
    label: "Clients Served",
    cardClassName: "border border-electric-500/20 bg-white/80 backdrop-blur shadow-glow",
    numberClassName: "text-3xl sm:text-4xl text-ink",
    labelClassName: "text-body",
  },
  {
    to: 95,
    suffix: "%",
    label: "First-Time Success Rate",
    cardClassName: "border border-navy-900/[0.08] bg-white",
    numberClassName: "text-3xl sm:text-4xl text-gradient",
    labelClassName: "text-body",
  },
] as const;

/**
 * Why Consulthive — compact credibility stats strip.
 */
export function TrustStats() {
  return (
    <section id="about" className="relative border-y border-navy-900/[0.05] bg-[#f8fbfe]/60 py-10 md:py-14">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        {/* Compact editorial header row */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-royal-600">
              Why Consulthive
            </p>
            <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Proof, Not Promises.
            </h2>
          </div>
          <div className="flex flex-col items-start gap-1.5 sm:items-end">
            <p className="max-w-md text-xs sm:text-sm text-body sm:text-right">
              A decade of focused compliance consulting — measured in certifications delivered and audits passed the first time.
            </p>
            <a
              href="#journey"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-royal-600 transition-all hover:gap-2.5"
            >
              See how we work
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </a>
          </div>
        </div>

        {/* 4-Stat Compact Responsive Grid */}
        <Reveal delay={0.08} className="mt-8 grid grid-cols-2 gap-3.5 sm:gap-5 lg:grid-cols-4">
          {statsList.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={cn(
                  "flex flex-col justify-between rounded-2xl p-5 sm:p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift",
                  item.cardClassName
                )}
              >
                <div className="flex items-center justify-between">
                  <CountUp
                    to={item.to}
                    suffix={item.suffix}
                    className={cn("font-display font-bold tracking-tight", item.numberClassName)}
                  />
                  {Icon ? (
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-electric-500/20 text-electric-300">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                  ) : null}
                </div>
                <p className={cn("mt-2 text-xs sm:text-[13.5px] font-medium leading-snug", item.labelClassName)}>
                  {item.label}
                </p>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
