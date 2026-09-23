"use client";

import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { BookButton, WhatsAppButton } from "@/components/shared/cta-buttons";
import { images } from "@/data/images";

/**
 * Final CTA Section: Full-width panoramic banner.
 * Uses the requested Unsplash globe background across the entire section,
 * with a white gradient overlay on the left for text visibility and interactive CTA buttons.
 */
export function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-slate-50">
      {/* Background image covering the entire section */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <Image
          src={images.finalCta}
          alt="Gold and silver desk globe — Consulthive"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[80%_center] sm:object-[85%_center] lg:object-[88%_center]"
        />
        {/* White gradient on left for text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-white from-0% via-white via-42% to-transparent to-75% max-sm:via-white/95 max-sm:to-white/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent sm:hidden" />
      </div>

      {/* Content area: left-aligned copy & action buttons */}
      <div className="relative z-10 mx-auto flex min-h-[320px] w-full max-w-7xl items-center px-6 sm:min-h-[360px] sm:px-8 lg:min-h-[400px] lg:px-12">
        <div className="max-w-xl py-12 sm:py-16">
          <Reveal>
            <h2 className="font-display text-3xl font-bold leading-[1.12] tracking-tight text-navy-950 sm:text-4xl lg:text-[42px]">
              Ready to Get Certified?
            </h2>
            <p className="mt-3.5 max-w-md text-sm leading-relaxed text-navy-900/75 sm:text-base">
              Talk to our experts and take the next step towards a stronger, more compliant and future-ready business.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <BookButton
                variant="primary"
                label="Book Free Consultation"
                className="bg-[#071f3d] px-6 py-3 text-xs font-semibold text-white shadow-soft transition-all duration-300 hover:bg-royal-600 hover:shadow-glow sm:px-7 sm:py-3.5 sm:text-sm"
              />
              <WhatsAppButton
                variant="outline"
                label="Chat on WhatsApp"
                className="border border-navy-900/15 bg-white px-6 py-3 text-xs font-semibold text-navy-900 shadow-soft hover:border-navy-900/30 hover:bg-slate-50 sm:px-7 sm:py-3.5 sm:text-sm"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
