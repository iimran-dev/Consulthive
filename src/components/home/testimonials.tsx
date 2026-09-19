"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { testimonials, type Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/utils";

const EASE = [0.21, 0.6, 0.35, 1] as const;

function TestimonialCard({
  testimonial,
  ghost = false,
}: {
  testimonial: Testimonial;
  /** Side previews use the softer shadow. */
  ghost?: boolean;
}) {
  return (
    <figure
      className={cn(
        "rounded-2xl border border-navy-900/[0.08] bg-white p-8",
        ghost ? "shadow-soft" : "shadow-lift"
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="flex items-center gap-1" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
          </span>
          <span className="ml-2 text-sm font-bold text-ink">5.0</span>
        </div>
        <span className="rounded-full border border-navy-900/[0.08] bg-mist px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-navy-900/45">
          Sample
        </span>
      </div>

      <blockquote className="mt-5 text-[15px] leading-relaxed text-body">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <figcaption className="mt-6 flex items-center gap-3 border-t border-navy-900/[0.07] pt-5">
        <img
          src={testimonial.avatar}
          alt=""
          loading="lazy"
          className="h-11 w-11 rounded-full object-cover ring-2 ring-mist"
        />
        <span className="flex flex-col">
          <span className="text-sm font-semibold text-ink">{testimonial.name}</span>
          <span className="text-xs text-navy-900/55">
            {testimonial.role} &middot; {testimonial.category}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

/**
 * Floating layered review deck: dimmed prev/next cards flank the
 * active testimonial on desktop; controls + sample-content footnote below.
 */
export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduce = useReducedMotion();

  const count = testimonials.length;
  const active = testimonials[activeIndex];
  const prev = testimonials[(activeIndex - 1 + count) % count];
  const next = testimonials[(activeIndex + 1) % count];

  const goTo = (index: number) => setActiveIndex(((index % count) + count) % count);

  return (
    <section id="testimonials" className="relative overflow-hidden bg-mist py-20 md:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Clients Say"
          description="Feedback from the businesses we guide — shown with clearly-marked sample content until verified reviews are published."
        />

        {/* Stage — layered deck (desktop) / single card (mobile) */}
        <div className="relative mx-auto mt-14 flex max-w-5xl items-center lg:h-[400px]">
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 top-1/2 z-10 hidden w-[36%] -translate-y-1/2 scale-[0.88] opacity-40 lg:block"
          >
            <TestimonialCard testimonial={prev} ghost />
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-1/2 z-10 hidden w-[36%] -translate-y-1/2 scale-[0.88] opacity-40 lg:block"
          >
            <TestimonialCard testimonial={next} ghost />
          </div>

          {reduce ? (
            <div className="relative z-20 mx-auto w-full max-w-xl">
              <TestimonialCard testimonial={active} />
            </div>
          ) : (
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 28 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -28 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="relative z-20 mx-auto w-full max-w-xl"
              >
                <TestimonialCard testimonial={active} />
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            aria-label="Previous testimonial"
            className="grid h-11 w-11 place-items-center rounded-full border border-navy-900/[0.12] bg-white text-navy-900 shadow-soft transition hover:bg-navy-900 hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>

          <div className="flex items-center gap-1.5">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={i === activeIndex}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === activeIndex ? "w-6 bg-royal-600" : "w-2 bg-navy-900/15 hover:bg-navy-900/30"
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            aria-label="Next testimonial"
            className="grid h-11 w-11 place-items-center rounded-full border border-navy-900/[0.12] bg-white text-navy-900 shadow-soft transition hover:bg-navy-900 hover:text-white"
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>
        </div>

        <p className="mt-6 text-center text-xs text-navy-900/40">
          Testimonial cards display sample placeholder content pending verified client reviews.
        </p>
      </div>
    </section>
  );
}
