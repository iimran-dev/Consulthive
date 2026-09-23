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
        {/* High contrast gradient overlays */}
        <div className="absolute inset-0 bg-white/92 max-sm:block hidden" />
        <div className="absolute inset-0 bg-gradient-to-r from-white from-0% via-white via-50% to-transparent sm:block hidden" />
      </div>

      {/* Content area: left-aligned copy & action buttons */}
      <div className="relative z-10 mx-auto flex min-h-[300px] w-full max-w-7xl items-center px-4 sm:min-h-[360px] sm:px-8 lg:min-h-[400px] lg:px-12">
        <div className="w-full max-w-xl py-10 sm:py-16">
          <Reveal>
            <h2 className="font-display text-2xl font-bold leading-[1.14] tracking-tight text-navy-950 min-[380px]:text-3xl sm:text-4xl lg:text-[42px]">
              Ready to Get Certified?
            </h2>
            <p className="mt-3 max-w-md text-xs leading-relaxed text-navy-900/75 min-[380px]:text-sm sm:mt-3.5 sm:text-base">
              Talk to our experts and take the next step towards a stronger, more compliant and future-ready business.
            </p>
            <div className="mt-6 flex flex-col items-stretch gap-3 sm:mt-7 sm:flex-row sm:items-center sm:gap-4">
              <BookButton
                variant="primary"
                label="Book Free Consultation"
                className="w-full justify-center bg-[#071f3d] px-6 py-3 text-xs font-semibold text-white shadow-soft transition-all duration-300 hover:bg-royal-600 hover:shadow-glow sm:w-auto sm:px-7 sm:py-3.5 sm:text-sm"
              />
              <WhatsAppButton
                variant="outline"
                label="Chat on WhatsApp"
                className="w-full justify-center border border-navy-900/15 bg-white px-6 py-3 text-xs font-semibold text-navy-900 shadow-soft hover:border-navy-900/30 hover:bg-slate-50 sm:w-auto sm:px-7 sm:py-3.5 sm:text-sm"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
