"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { processSteps } from "@/data/process";

const EASE = [0.21, 0.6, 0.35, 1] as const;

export function CertificationProcess() {
  const reduce = useReducedMotion();

  return (
    <section id="process" className="relative bg-mist py-14 sm:py-20 md:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Process"
          title="A Clear Path To Certification"
          description="From first conversation to certificate in hand — six stages, zero guesswork."
        />

        {/* -------- Desktop: horizontal timeline with animated connector -------- */}
        <div className="relative mt-20 hidden lg:block">
          {/* Connector rail + animated fill */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[26px] h-[2px] rounded bg-navy-900/[0.08]"
          >
            <motion.div
              initial={reduce ? false : { width: 0 }}
              whileInView={reduce ? undefined : { width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: EASE }}
              className="h-full rounded-full bg-gradient-to-r from-royal-600 via-electric-500 to-royal-500"
            />
          </div>

          <ol className="grid grid-cols-6 gap-x-6">
            {processSteps.map((step, i) => (
              <li key={step.id} className="group relative pt-14">
                <span
                  aria-hidden
                  className="absolute left-0 top-[19px] h-4 w-4 rounded-full border-[3px] border-white bg-electric-500 shadow-soft"
                />
                <Reveal delay={i * 0.08}>
                  <span className="block font-display text-[64px] font-bold leading-none text-navy-900/[0.07] transition-colors duration-500 group-hover:text-royal-600/20">
                    {step.number}
                  </span>
                  <span className="mt-4 grid h-11 w-11 place-items-center rounded-xl border border-navy-900/[0.1] bg-white text-navy-700 shadow-soft transition-all duration-500 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-royal-600 group-hover:to-electric-500 group-hover:text-white">
                    <step.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-body">
                    {step.description}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        {/* -------- Mobile: vertical rail -------- */}
        <ol className="relative ml-2 mt-10 space-y-7 border-l-2 border-navy-900/[0.08] sm:ml-4 sm:mt-14 sm:space-y-9 lg:hidden">
          {processSteps.map((step, i) => (
            <li key={step.id} className="group relative pl-6 sm:pl-8">
              <span
                aria-hidden
                className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-[3px] border-white bg-electric-500 shadow-soft"
              />
              <Reveal delay={i * 0.08}>
                <span className="block font-display text-3xl font-bold text-navy-900/[0.08] sm:text-4xl">
                  {step.number}
                </span>
                <div className="mt-2.5 flex items-center gap-2.5 sm:mt-3 sm:gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-navy-900/[0.1] bg-white text-navy-700 shadow-soft transition-all duration-500 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-royal-600 group-hover:to-electric-500 group-hover:text-white sm:h-10 sm:w-10">
                    <step.icon className="h-4 w-4 sm:h-4.5 sm:w-4.5" aria-hidden />
                  </span>
                  <h3 className="font-display text-base font-semibold tracking-tight text-ink min-[380px]:text-lg">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-body sm:text-sm">{step.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
