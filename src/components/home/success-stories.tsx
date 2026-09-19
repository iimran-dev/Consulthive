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
      className="relative overflow-hidden bg-navy-950 py-24 text-white md:py-32 lg:py-36"
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

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
        {/* -------- Left: statement + play CTA -------- */}
        <div>
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-electric-400">
              <span aria-hidden className="h-px w-8 bg-electric-400/60" />
              Client Success Stories
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-6 font-display text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl lg:text-[56px]">
              Real Business.
              <br />
              Real Impact.
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
              From ambitious startups to established enterprises, we help
              businesses across industries achieve certification and unlock new
              growth.
            </p>

            <div className="mt-9">
              <button
                type="button"
                onClick={() => setVideoOpen(true)}
                className="group flex items-center gap-5"
              >
                <span className="relative">
                  <span
                    aria-hidden
                    className="absolute inset-0 animate-pulse-ring rounded-full bg-white/30"
                  />
                  <span className="relative grid h-16 w-16 place-items-center rounded-full bg-white text-navy-900 shadow-lift transition-transform duration-300 group-hover:scale-105">
                    <Play className="ml-0.5 h-5 w-5 fill-current" aria-hidden />
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
          <figure className="relative rounded-2xl border border-white/[0.12] bg-white/[0.06] p-8 shadow-lift backdrop-blur-md lg:p-10">
            <div className="flex items-center justify-between">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-electric-500/15 text-electric-400">
                <Quote className="h-5 w-5" aria-hidden />
              </span>
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/80">
                Featured Story
              </span>
            </div>

            <blockquote className="mt-6 text-lg leading-relaxed text-white/90 lg:text-xl">
              &ldquo;Sample content — a short client impact statement about
              their certification outcome will appear here, alongside verified
              client details.&rdquo;
            </blockquote>

            <figcaption className="mt-7 flex items-center gap-3 border-t border-white/10 pt-6">
              <img
                src={images.testimonials.one}
                alt=""
                width={44}
                height={44}
                loading="lazy"
                className="h-11 w-11 rounded-full object-cover ring-1 ring-white/20"
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
        <DialogContent className="max-w-2xl overflow-hidden rounded-2xl p-0 text-white sm:max-w-2xl sm:rounded-2xl">
          <div className="relative grid aspect-video place-items-center bg-navy-900">
            <div className="flex flex-col items-center px-6 text-center">
              <Clapperboard className="h-10 w-10 text-white/40" aria-hidden />
              <p className="mt-4 font-display text-xl font-semibold text-white/85">
                Success story film — coming soon
              </p>
              <p className="mt-2 text-sm text-white/50">
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
