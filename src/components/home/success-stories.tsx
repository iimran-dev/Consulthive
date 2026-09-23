"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Clapperboard, Play, Quote } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Reveal } from "@/components/shared/reveal";
import { images } from "@/data/images";

export function SuccessStories() {
  const ref = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();
  const [videoOpen, setVideoOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={ref}
      id="stories"
      className="relative overflow-hidden bg-navy-950 py-16 text-white sm:py-24 md:py-32 lg:py-36"
    >
      {/* Cinematic parallax backdrop (static under reduced motion) */}
      <motion.div
        className="absolute inset-x-0 -inset-y-[10%]"
        style={reduce ? undefined : { y }}
      >
        <Image
          src={images.successStory}
          alt="Climbers helping each other ascend a mountain at dusk"
          fill
          sizes="100vw"
          className="object-cover opacity-90"
        />
      </motion.div>

      {/* Legibility overlays */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/35"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-navy-950/80 to-transparent"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:gap-14 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* -------- Left: statement + play CTA -------- */}
        <div>
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-electric-400">
              <span aria-hidden className="h-px w-8 bg-electric-400/60" />
              Client Success Stories
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-3xl font-bold leading-[1.08] tracking-tight min-[380px]:text-4xl sm:mt-6 sm:text-5xl lg:text-[56px]">
              Real Business.
              <br />
              Real Impact.
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/70 sm:mt-6 sm:text-lg">
              From ambitious startups to established enterprises, we help
              businesses across industries achieve certification and unlock new
              growth.
            </p>

            <div className="mt-7 sm:mt-9">
              <button
                type="button"
                onClick={() => setVideoOpen(true)}
                className="group flex items-center gap-4 sm:gap-5"
              >
                <span className="relative">
                  <span
                    aria-hidden
                    className="absolute inset-0 animate-pulse-ring rounded-full bg-white/30"
                  />
                  <span className="relative grid h-14 w-14 place-items-center rounded-full bg-white text-navy-900 shadow-lift transition-transform duration-300 group-hover:scale-105 sm:h-16 sm:w-16">
                    <Play className="ml-0.5 h-4.5 w-4.5 fill-current sm:h-5 sm:w-5" aria-hidden />
                  </span>
                </span>
                <span className="flex flex-col text-left">
                  <span className="text-sm font-semibold text-white">Watch Our Story</span>
                  <span className="text-xs text-white/55">
                    2-min case film · Coming soon
                  </span>
                </span>
              </button>
            </div>
          </Reveal>
        </div>

        {/* -------- Right: featured story glass card -------- */}
        <Reveal delay={0.15}>
          <figure className="relative rounded-2xl border border-white/[0.12] bg-white/[0.06] p-5 shadow-lift backdrop-blur-md min-[380px]:p-6 sm:p-8 lg:p-10">
            <div className="flex items-center justify-between">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-electric-500/15 text-electric-400 sm:h-10 sm:w-10">
                <Quote className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
              </span>
              <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/80 sm:px-3 sm:py-1 sm:text-[11px]">
                Featured Story
              </span>
            </div>

            <blockquote className="mt-5 text-base leading-relaxed text-white/90 sm:mt-6 sm:text-lg lg:text-xl">
              &ldquo;Sample content — a short client impact statement about
              their certification outcome will appear here, alongside verified
              client details.&rdquo;
            </blockquote>

            <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5 sm:mt-7 sm:pt-6">
              <img
                src={images.testimonials.one}
                alt=""
                width={44}
                height={44}
                loading="lazy"
                className="h-10 w-10 rounded-full object-cover ring-1 ring-white/20 sm:h-11 sm:w-11"
              />
              <span className="flex flex-col">
                <span className="text-sm font-semibold text-white">Verified Client</span>
                <span className="text-xs text-white/55">
                  Quality Director · Manufacturing Client
                </span>
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>

      {/* -------- Video placeholder dialog -------- */}
      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent
          data-lenis-prevent
          className="w-[calc(100%-2rem)] max-w-2xl overflow-hidden rounded-2xl border-white/10 bg-navy-950 p-0 text-white sm:rounded-2xl"
        >
          <div className="relative grid aspect-video place-items-center bg-navy-900">
            <div className="flex flex-col items-center px-4 py-8 text-center sm:px-6">
              <Clapperboard className="h-9 w-9 text-white/40 sm:h-10 sm:w-10" aria-hidden />
              <p className="mt-3 font-display text-lg font-semibold text-white/85 sm:mt-4 sm:text-xl">
                Success story film — coming soon
              </p>
              <p className="mt-1.5 text-xs text-white/50 sm:mt-2 sm:text-sm">
                We are producing client case films. Book a consultation to hear
                the story live.
              </p>
            </div>
          </div>
          <DialogTitle className="sr-only">Client Success Story</DialogTitle>
          <DialogDescription className="sr-only">
            A placeholder preview for the Consulthive client success film.
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </section>
  );
}
