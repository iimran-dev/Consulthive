"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { BookButton, WhatsAppButton } from "@/components/shared/cta-buttons";
import { images } from "@/data/images";

const EASE = [0.21, 0.6, 0.35, 1] as const;


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

        {/* ---------------- Visual: Standards • People • Progress ---------------- */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          className="relative mx-auto flex w-full max-w-[480px] items-center justify-center sm:max-w-[520px] lg:max-w-none"
        >
          {/* Soft architectural backdrop disc */}
          <div
            aria-hidden
            className="absolute -left-3 -top-3 h-[96%] w-[96%] rounded-full bg-[#dce8f5]/60 sm:-left-5 sm:-top-5"
          />

          {/* Main circular composition */}
          <div className="relative aspect-square w-full max-w-[460px] overflow-hidden rounded-full bg-navy-950 shadow-lift ring-1 ring-navy-900/10 sm:max-w-[500px] lg:max-w-[530px]">
            {/* Full circle building image */}
            <div className="absolute inset-0">
              <Image
                src={images.hero}
                alt="Consulthive — Standards, People, Progress"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover object-center"
              />
              {/* Subtle tint overlay to keep the typography crisp and legible */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/30 to-navy-950/15"
              />
            </div>

            {/* Typography overlay over building: STANDARDS / PEOPLE / PROGRESS */}
            <div className="absolute left-7 top-1/2 z-10 -translate-y-1/2 sm:left-10 lg:left-12">
              <h2 className="font-display text-2xl font-bold uppercase leading-[1.12] tracking-tight text-white drop-shadow-md sm:text-3xl lg:text-[36px]">
                STANDARDS
                <br />
                PEOPLE
                <br />
                PROGRESS
              </h2>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
