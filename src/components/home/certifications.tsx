"use client";

import { ArrowRight } from "lucide-react";
import { certifications, type Certification } from "@/data/certifications";
import { useConsultation } from "@/components/shared/consultation-store";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

function CertificationCard({
  cert,
  index,
  onOpen,
}: {
  cert: Certification;
  index: number;
  onOpen: (code: string) => void;
}) {
  const Icon = cert.icon;
  return (
    <article className="group relative w-[260px] shrink-0 rounded-2xl border border-navy-900/[0.08] bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift min-[380px]:w-[290px] sm:w-[330px] sm:p-7">
      <span
        aria-hidden
        className="absolute right-5 top-5 font-display text-3xl font-bold text-navy-900/[0.05] sm:right-6 sm:text-4xl"
      >
        0{(index % certifications.length) + 1}
      </span>

      <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-navy-900 to-royal-700 text-white shadow-soft transition-transform duration-300 group-hover:scale-105 sm:h-12 sm:w-12">
        <Icon className="h-5 w-5" aria-hidden />
      </span>

      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-royal-600 sm:mt-5">
        {cert.code}
      </p>
      <h3 className="mt-1 font-display text-lg font-bold tracking-tight text-ink sm:text-xl">
        {cert.name}
      </h3>
      <p className="mt-0.5 text-xs font-medium text-navy-900/50 sm:text-[13px]">{cert.field}</p>
      <p className="mt-2.5 min-h-[50px] text-xs leading-relaxed text-body line-clamp-3 sm:mt-3 sm:min-h-[58px] sm:text-sm">
        {cert.description}
      </p>

      <div className="mt-4 border-t border-navy-900/[0.07] sm:mt-5" />

      <div className="mt-3.5 sm:mt-4">
        <button
          type="button"
          onClick={() => onOpen(cert.code)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-royal-600 transition-all duration-300 group-hover:gap-2.5 sm:text-sm"
        >
          Learn More
          <ArrowRight className="h-4 w-4" aria-hidden />
        </button>
      </div>
    </article>
  );
}

/**
 * Certifications — continuous infinite scroll marquee catalogue with edge fades
 * and interactive consultation modal wired to each standard.
 */
export function Certifications() {
  const openDialog = useConsultation((s) => s.openDialog);

  return (
    <section id="certifications" className="relative overflow-hidden bg-mist py-14 sm:py-20 md:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            align="left"
            eyebrow="Our Credentials"
            title="Certifications"
            description="A catalogue of globally recognized standards — each delivered with consulting rigor, not paperwork."
          />

          {/* Indicator pill */}
          <div className="hidden sm:inline-flex items-center gap-2 rounded-full border border-navy-900/[0.08] bg-white/80 px-3.5 py-1.5 text-xs font-medium text-navy-900/60 shadow-soft backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-electric-500" />
            </span>
            Continuous Catalogue &middot; Hover to Pause
          </div>
        </div>
      </div>

      {/* Infinite Scroll Marquee Strip */}
      <Reveal className="relative mt-8 sm:mt-12" delay={0.1}>
        {/* Edge fades for smooth entrance & exit */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-mist via-mist/80 to-transparent sm:w-20 md:w-28"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-mist via-mist/80 to-transparent sm:w-20 md:w-28"
        />

        {/* Marquee Track */}
        <div className="overflow-hidden py-3">
          <div className="flex w-max animate-marquee gap-4 pr-4 hover:[animation-play-state:paused] active:[animation-play-state:paused] sm:gap-5 sm:pr-5">
            {/* Set 1 */}
            {certifications.map((cert, i) => (
              <CertificationCard
                key={`cert-1-${cert.id}`}
                cert={cert}
                index={i}
                onOpen={openDialog}
              />
            ))}

            {/* Set 2 (for seamless, mathematically identical loop) */}
            {certifications.map((cert, i) => (
              <CertificationCard
                key={`cert-2-${cert.id}`}
                cert={cert}
                index={i}
                onOpen={openDialog}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
