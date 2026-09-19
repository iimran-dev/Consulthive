"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { certifications } from "@/data/certifications";
import { useConsultation } from "@/components/shared/consultation-store";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

const arrowButtonClasses =
  "grid h-11 w-11 place-items-center rounded-full border border-navy-900/[0.12] bg-white text-navy-900 shadow-soft transition hover:bg-navy-900 hover:text-white disabled:pointer-events-none disabled:opacity-30";

/**
 * Certifications — premium horizontal catalogue with edge fades,
 * arrow controls and a consultation dialog wired to each standard.
 */
export function Certifications() {
  const openDialog = useConsultation((s) => s.openDialog);
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateArrows = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setCanScrollLeft(track.scrollLeft > 4);
    setCanScrollRight(track.scrollLeft < track.scrollWidth - track.clientWidth - 4);
  }, []);

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, [updateArrows]);

  const scrollByItem = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const item = track.querySelector("article");
    const itemWidth = (item?.clientWidth ?? 330) + 20; // item + gap-5
    track.scrollBy({ left: direction * itemWidth, behavior: "smooth" });
  };

  return (
    <section id="certifications" className="relative bg-mist py-20 md:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            align="left"
            eyebrow="Our Credentials"
            title="Certifications"
            description="A catalogue of globally recognized standards — each delivered with consulting rigor, not paperwork."
          />
          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Scroll certifications backward"
              disabled={!canScrollLeft}
              onClick={() => scrollByItem(-1)}
              className={arrowButtonClasses}
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>
            <button
              type="button"
              aria-label="Scroll certifications forward"
              disabled={!canScrollRight}
              onClick={() => scrollByItem(1)}
              className={arrowButtonClasses}
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>

        {/* Gallery */}
        <Reveal className="relative mt-12" delay={0.1}>
          {/* Edge fades */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-mist to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-mist to-transparent"
          />

          <div
            ref={trackRef}
            onScroll={updateArrows}
            className="scroll-x scroll-smooth flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 pt-2"
          >
            {certifications.map((cert, i) => {
              const Icon = cert.icon;
              return (
                <article
                  key={cert.id}
                  className="group relative w-[300px] shrink-0 snap-start rounded-2xl border border-navy-900/[0.08] bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift sm:w-[330px]"
                >
                  <span
                    aria-hidden
                    className="absolute right-6 top-5 font-display text-4xl font-bold text-navy-900/[0.05]"
                  >
                    0{i + 1}
                  </span>

                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-navy-900 to-royal-700 text-white shadow-soft">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>

                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-royal-600">
                    {cert.code}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-bold tracking-tight text-ink">
                    {cert.name}
                  </h3>
                  <p className="mt-0.5 text-[13px] font-medium text-navy-900/50">{cert.field}</p>
                  <p className="mt-3 min-h-[60px] text-sm leading-relaxed text-body">
                    {cert.description}
                  </p>

                  <div className="mt-5 border-t border-navy-900/[0.07]" />

                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={() => openDialog(cert.code)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-royal-600 transition-all duration-300 group-hover:gap-3"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
