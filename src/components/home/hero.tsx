"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Award, Target, Users } from "lucide-react";
import { BookButton, WhatsAppButton } from "@/components/shared/cta-buttons";
import { images } from "@/data/images";
import { cn } from "@/lib/utils";

const EASE = [0.21, 0.6, 0.35, 1] as const;

const trustChips = [
  {
    icon: Award,
    value: "500+",
    label: "Certifications Delivered",
    className: "-left-3 top-16 sm:left-0 lg:-left-8",
    delay: "0s",
  },
  {
    icon: Users,
    value: "100+",
    label: "Clients Guided",
    className: "-right-3 top-[42%] sm:right-0 lg:-right-10",
    delay: "1.4s",
  },
  {
    icon: Target,
    value: "95%",
    label: "First-Time Success",
    className: "bottom-10 left-[2%] lg:left-[6%]",
    delay: "2.6s",
  },
] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const fadeUp = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 26 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: EASE },
        };

  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-28 lg:pb-28 lg:pt-40">
      {/* Atmospheric background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f7fafd] via-white to-white" />
        <div className="bg-grid-soft absolute inset-0 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_0%,black,transparent)]" />
        <div className="absolute -top-48 right-[-12%] h-[620px] w-[620px] rounded-full bg-electric-500/[0.09] blur-3xl" />
        <div className="absolute left-[-14%] top-1/3 h-[520px] w-[520px] rounded-full bg-royal-500/[0.07] blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8">
        {/* ---------------- Copy ---------------- */}
        <div>
          <motion.div {...fadeUp(0)}>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-navy-900/10 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-royal-700 shadow-soft backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-electric-500" />
              </span>
              ISO Certification &amp; Compliance Consulting
            </p>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="mt-7 font-display text-[42px] font-bold leading-[1.04] tracking-[-0.03em] text-ink sm:text-6xl xl:text-[74px]"
          >
            Get ISO Certified.
            <br />
            Build A <span className="text-gradient">Better Business.</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="mt-6 max-w-xl text-lg leading-relaxed text-body"
          >
            Expert consulting. Practical implementation. Globally recognized
            certifications — for a safer, stronger, more competitive business.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="mt-9 flex flex-wrap items-center gap-4">
            <BookButton />
            <WhatsAppButton />
          </motion.div>

          <motion.div {...fadeUp(0.42)} className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-2.5" aria-hidden>
              {[images.testimonials.one, images.testimonials.two, images.testimonials.three].map(
                (src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    width={32}
                    height={32}
                    loading="lazy"
                    className="h-8 w-8 rounded-full object-cover ring-2 ring-white"
                  />
                )
              )}
            </div>
            <p className="text-sm leading-snug text-navy-900/55">
              Guiding <span className="font-semibold text-navy-900">100+ clients</span> on
              their certification journey
            </p>
          </motion.div>
        </div>

        {/* ---------------- Visual: The Certification Journey ---------------- */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: EASE }}
          className="relative mx-auto h-[400px] w-full max-w-[540px] sm:h-[480px] lg:h-[560px] lg:max-w-none"
        >
          {/* Glow + orbital rings */}
          <div
            aria-hidden
            className="absolute inset-10 rounded-full bg-gradient-to-tr from-electric-500/20 via-royal-500/10 to-transparent blur-2xl"
          />
          <div aria-hidden className="absolute -inset-3 rounded-full border border-navy-900/[0.07]" />
          <div
            aria-hidden
            className="absolute -inset-10 animate-spin-slower rounded-full border border-dashed border-royal-500/25 sm:-inset-12"
          >
            <span className="absolute -top-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-electric-500 shadow-glow" />
          </div>
          <div aria-hidden className="absolute inset-0 animate-spin-reverse rounded-full border border-electric-500/15" />

          {/* Summit image */}
          <div className="relative h-full w-full overflow-hidden rounded-full shadow-lift ring-1 ring-navy-900/10">
            <Image
              src={images.hero}
              alt="A professional standing at the summit of a mountain — the certification journey"
              fill
              priority
              sizes="(max-width: 1024px) 92vw, 44vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-navy-950/45 via-transparent to-navy-900/10"
            />
            <p className="absolute inset-x-0 bottom-9 text-center text-[11px] font-semibold uppercase tracking-[0.34em] text-white/85">
              The Certification Journey
            </p>
          </div>

          {/* Floating trust indicators */}
          {trustChips.map((chip) => (
            <div
              key={chip.label}
              style={{ animationDelay: chip.delay }}
              className={cn(
                "absolute flex items-center gap-3 rounded-2xl border border-white/70 bg-white/75 px-4 py-3 shadow-lift backdrop-blur-md animate-float",
                chip.className
              )}
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-navy-900 to-royal-700 text-white">
                <chip.icon className="h-4.5 w-4.5" aria-hidden />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-display text-lg font-bold text-ink">{chip.value}</span>
                <span className="text-[11px] font-medium text-navy-900/55">{chip.label}</span>
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
