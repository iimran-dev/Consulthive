"use client";

import { ArrowRight, BadgeCheck, type LucideIcon } from "lucide-react";
import { CountUp } from "@/components/shared/count-up";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/utils";

type Stat = {
  to: number;
  suffix: string;
  label: string;
  icon?: LucideIcon;
};

const stats = {
  years: { to: 10, suffix: "+", label: "Years of Experience" },
  certifications: { to: 500, suffix: "+", label: "Certifications Delivered", icon: BadgeCheck },
  clients: { to: 100, suffix: "+", label: "Clients Served" },
  success: { to: 95, suffix: "%", label: "First-Time Success Rate" },
} satisfies Record<string, Stat>;

type StatCardProps = {
  stat: Stat;
  cardClassName: string;
  numberClassName: string;
  labelClassName: string;
};

/** Shared stat card body — used by the floating desktop composition and the mobile grid. */
function StatCard({ stat, cardClassName, numberClassName, labelClassName }: StatCardProps) {
  const Icon = stat.icon;
  return (
    <div className={cn("rounded-2xl", cardClassName)}>
      {Icon ? (
        <span className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-electric-500/15 text-electric-400">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
      ) : null}
      <CountUp
        to={stat.to}
        suffix={stat.suffix}
        className={cn("font-display font-bold tracking-tight", numberClassName)}
      />
      <p className={cn("mt-1 text-sm", labelClassName)}>{stat.label}</p>
    </div>
  );
}

/** Desktop-only floating composition: absolute positions, layering, rotation, gentle float. */
const desktopCards = [
  {
    stat: stats.years,
    position: "left-0 top-0",
    float: "animate-float",
    delay: 0,
    card: "w-[230px] -rotate-2 border border-navy-900/[0.08] bg-white p-6 shadow-soft",
    number: "text-5xl text-ink",
    labelCls: "text-body",
  },
  {
    stat: stats.certifications,
    position: "right-0 top-16 z-10",
    float: "animate-float-slow",
    delay: 0.1,
    card: "w-[270px] rounded-3xl bg-navy-900 p-8 shadow-lift ring-1 ring-white/10",
    number: "text-6xl text-white",
    labelCls: "text-white/65",
  },
  {
    stat: stats.clients,
    position: "bottom-16 left-4",
    float: "animate-float-delayed",
    delay: 0.2,
    card: "w-[230px] border border-electric-500/20 bg-white/60 p-6 shadow-glow backdrop-blur",
    number: "text-5xl text-ink",
    labelCls: "text-body",
  },
  {
    stat: stats.success,
    position: "bottom-0 right-10",
    float: "animate-float-slow",
    delay: 0.3,
    card: "w-[240px] rotate-1 border border-navy-900/[0.08] bg-white p-6 shadow-lift",
    number: "text-5xl text-gradient",
    labelCls: "text-body",
  },
] as const;

/** Mobile-only static grid: same four stats, no absolute positioning / rotation. */
const mobileCards = [
  {
    stat: stats.years,
    card: "border border-navy-900/[0.08] bg-white p-5 shadow-soft",
    number: "text-4xl text-ink",
    labelCls: "text-[13px] text-body",
  },
  {
    stat: stats.certifications,
    card: "rounded-3xl bg-navy-900 p-5 shadow-lift ring-1 ring-white/10",
    number: "text-4xl text-white",
    labelCls: "text-[13px] text-white/65",
  },
  {
    stat: stats.clients,
    card: "border border-electric-500/20 bg-white/60 p-5 shadow-glow backdrop-blur",
    number: "text-4xl text-ink",
    labelCls: "text-[13px] text-body",
  },
  {
    stat: stats.success,
    card: "border border-navy-900/[0.08] bg-white p-5 shadow-lift",
    number: "text-4xl text-gradient",
    labelCls: "text-[13px] text-body",
  },
] as const;

/**
 * Why Consulthive — floating, layered statistics with an editorial left column.
 */
export function TrustStats() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-20 md:py-28 lg:py-32">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
        {/* Left: editorial copy */}
        <div>
          <SectionHeading
            align="left"
            eyebrow="Why Consulthive"
            title="Proof, Not Promises."
            description="A decade of focused compliance consulting — measured in certifications delivered, clients retained, and audits passed the first time."
          />
          <a
            href="#journey"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-royal-600 transition-all hover:gap-3"
          >
            See how we work
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>

        {/* Right: stat composition */}
        <div>
          {/* Desktop: layered floating cards */}
          <div className="relative mx-auto hidden h-[460px] w-full max-w-[540px] lg:block lg:h-[520px]">
            {/* Decor: spinning dashed ring + soft radial blob */}
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric-500/[0.07] blur-3xl"
            />
            <div
              aria-hidden
              className="absolute inset-6 animate-spin-slower rounded-full border border-dashed border-royal-500/15"
            />

            {desktopCards.map((card) => (
              <Reveal key={card.stat.label} delay={card.delay} className={cn("absolute", card.position)}>
                <div className={card.float}>
                  <StatCard
                    stat={card.stat}
                    cardClassName={card.card}
                    numberClassName={card.number}
                    labelClassName={card.labelCls}
                  />
                </div>
              </Reveal>
            ))}
          </div>

          {/* Mobile: static 2-column grid */}
          <Reveal className="grid grid-cols-2 gap-4 lg:hidden">
            {mobileCards.map((card) => (
              <StatCard
                key={card.stat.label}
                stat={card.stat}
                cardClassName={card.card}
                numberClassName={card.number}
                labelClassName={card.labelCls}
              />
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
