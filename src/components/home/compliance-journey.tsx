"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { journeyStages } from "@/data/journey";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/utils";

const STAGE_COUNT = journeyStages.length;
const AUTO_ADVANCE_MS = 3400;

/**
 * The Compliance Journey — signature interactive roadmap.
 * Desktop: expanding horizontal timeline with auto-advancing progress rail.
 * Mobile: vertical journey with the same visual language.
 */
export function ComplianceJourney() {
  const [active, setActive] = useState(0);
  const [interacted, setInteracted] = useState(false);
  const reduce = useReducedMotion();

  // Gentle auto-advance until the visitor takes over (or prefers reduced motion).
  useEffect(() => {
    if (interacted || reduce) return;
    const id = setInterval(() => {
      setActive((a) => (a + 1) % STAGE_COUNT);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [interacted, reduce]);

  const activate = (i: number) => {
    setInteracted(true);
    setActive(i);
  };

  return (
    <section
      id="journey"
      className="relative overflow-hidden bg-gradient-to-b from-mist via-white to-mist py-20 md:py-28 lg:py-36"
    >
      {/* Atmospheric backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="bg-grid-soft absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_38%,black,transparent)]" />
        <div className="absolute -left-40 top-1/4 h-[480px] w-[480px] rounded-full bg-royal-500/[0.07] blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-[560px] w-[560px] rounded-full bg-electric-500/[0.06] blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Consulthive Method"
          title="The Compliance Journey"
          description="Seven stages. One seamless path from where you are to where certification takes you."
        />

        {/* ---------------- Desktop: expanding horizontal timeline ---------------- */}
        <Reveal className="relative mt-16 hidden lg:block">
          {/* Progress rail (sits above the cards, dots punch above the rail) */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-[26px] z-10 h-[2px] rounded bg-navy-900/[0.08]"
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-royal-600 to-electric-500 shadow-glow transition-[width] duration-700 ease-out"
              style={{ width: `${((active + 1) / STAGE_COUNT) * 100}%` }}
            />
          </div>

          <ul className="flex items-stretch">
            {journeyStages.map((stage, i) => {
              const isActive = i === active;
              const isReached = i <= active;
              const Icon = stage.icon;
              return (
                <li
                  key={stage.id}
                  className="flex min-w-0 transition-all duration-500 ease-out"
                  style={{ flexBasis: 0, flexGrow: isActive ? 2.4 : 1 }}
                >
                  <button
                    type="button"
                    onMouseEnter={() => activate(i)}
                    onFocus={() => activate(i)}
                    onClick={() => activate(i)}
                    aria-current={isActive ? "step" : undefined}
                    className={cn(
                      "relative flex-1 cursor-pointer rounded-2xl px-3 pb-5 pt-14 text-left transition-all duration-500 lg:px-5",
                      isActive
                        ? "border border-navy-900/[0.06] bg-gradient-to-b from-white to-electric-500/[0.04] shadow-soft"
                        : "border border-transparent"
                    )}
                  >
                    {/* Node dot */}
                    <span
                      aria-hidden
                      className={cn(
                        "absolute left-5 top-[19px] z-20 h-4 w-4 rounded-full border-[3px] border-white shadow-soft transition-all duration-500",
                        isReached ? "bg-electric-500 ring-4 ring-electric-500/20" : "bg-navy-200"
                      )}
                    />

                    <span
                      className={cn(
                        "block font-display text-sm font-bold",
                        isActive ? "text-royal-600" : "text-navy-900/30"
                      )}
                    >
                      0{i + 1}
                    </span>

                    <span
                      className={cn(
                        "mt-3 grid h-10 w-10 place-items-center rounded-xl border",
                        isActive
                          ? "border-transparent bg-gradient-to-br from-royal-600 to-electric-500 text-white"
                          : "border-navy-900/10 bg-white text-navy-700 shadow-soft"
                      )}
                    >
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>

                    <span className="mt-3 block font-display text-[15px] font-semibold text-ink">
                      {stage.title}
                    </span>
                    <span className="mt-0.5 block text-xs text-navy-900/50">{stage.short}</span>

                    {/* Collapsible description + stage micro-progress */}
                    <span
                      className={cn(
                        "grid transition-all duration-500",
                        isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      )}
                    >
                      <span className="block overflow-hidden">
                        <span className="mt-2 block text-[13px] leading-relaxed text-body">
                          {stage.description}
                        </span>
                        <span className="mt-4 block">
                          <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-navy-900/40">
                            Stage {i + 1} of {STAGE_COUNT}
                          </span>
                          <span className="mt-1.5 block h-[3px] rounded bg-navy-900/10">
                            <span
                              className="block h-full rounded bg-royal-600"
                              style={{ width: `${((i + 1) / STAGE_COUNT) * 100}%` }}
                            />
                          </span>
                        </span>
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <p className="mt-8 hidden text-center text-xs text-navy-900/40 lg:block">
            Hover or focus a stage to explore the journey
          </p>
        </Reveal>

        {/* ---------------- Mobile: vertical journey ---------------- */}
        <Reveal className="mt-10 lg:hidden" delay={0.1}>
          <ol className="relative ml-3 space-y-3 border-l-2 border-navy-900/[0.08]">
            {journeyStages.map((stage, i) => {
              const isActive = i === active;
              const Icon = stage.icon;
              return (
                <li key={stage.id} className="relative pl-8">
                  <span
                    aria-hidden
                    className={cn(
                      "absolute -left-[9px] top-6 h-4 w-4 rounded-full border-[3px] border-white transition-all duration-500",
                      isActive ? "bg-electric-500 ring-4 ring-electric-500/20" : "bg-navy-200"
                    )}
                  />
                  <button
                    type="button"
                    onClick={() => activate(i)}
                    aria-current={isActive ? "step" : undefined}
                    className={cn(
                      "w-full cursor-pointer rounded-2xl border p-5 text-left transition-all duration-500",
                      isActive
                        ? "border-navy-900/[0.06] bg-white shadow-soft"
                        : "border-transparent"
                    )}
                  >
                    <span className="flex items-start gap-3.5">
                      <span
                        className={cn(
                          "grid h-9 w-9 shrink-0 place-items-center rounded-xl border",
                          isActive
                            ? "border-transparent bg-gradient-to-br from-royal-600 to-electric-500 text-white"
                            : "border-navy-900/10 bg-white text-navy-700 shadow-soft"
                        )}
                      >
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="min-w-0">
                        <span
                          className={cn(
                            "block font-display text-xs font-bold",
                            isActive ? "text-royal-600" : "text-navy-900/30"
                          )}
                        >
                          0{i + 1}
                        </span>
                        <span className="mt-1 block font-display text-base font-semibold text-ink">
                          {stage.title}
                        </span>
                        <span className="mt-0.5 block text-xs text-navy-900/50">{stage.short}</span>
                      </span>
                    </span>

                    <span
                      className={cn(
                        "grid transition-all duration-500",
                        isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      )}
                    >
                      <span className="block overflow-hidden">
                        <span className="mt-3 block text-[13px] leading-relaxed text-body">
                          {stage.description}
                        </span>
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
