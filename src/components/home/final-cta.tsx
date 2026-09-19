import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { BookButton, WhatsAppButton } from "@/components/shared/cta-buttons";
import { images } from "@/data/images";

const books = [
  {
    label: "STANDARDS",
    className: "w-56 translate-x-3 bg-gradient-to-r from-royal-600 to-royal-700",
  },
  {
    label: "COMPLIANCE",
    className: "w-52 bg-navy-800",
  },
  {
    label: "GROWTH",
    className: "w-56 translate-x-2 bg-gradient-to-r from-electric-600 to-electric-500",
  },
] as const;

/**
 * Conversion close: dark navy panel with earth/orbit composition,
 * stacked standards books and a floating certificate chip.
 */
export function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy-900 py-24 text-white md:py-32">
      {/* Atmosphere */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[560px] w-[560px] rounded-full bg-electric-500/25 blur-3xl" />
        <div className="absolute -bottom-48 -right-40 h-[560px] w-[560px] rounded-full bg-royal-500/20 blur-3xl" />
        <div className="absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full border border-white/[0.06]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        {/* Copy */}
        <Reveal>
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-electric-400">
            <span aria-hidden className="h-px w-8 bg-current opacity-50" />
            Start Your Journey
          </p>
          <h2 className="mt-5 font-display text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl lg:text-[56px]">
            Ready To Get <span className="text-electric-300">Certified?</span>
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
            Talk to our experts and take the next step toward a stronger, more compliant,
            future-ready business.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <BookButton variant="light" />
            <WhatsAppButton variant="outline-light" />
          </div>
        </Reveal>

        {/* Visual composition */}
        <div className="relative mx-auto h-[380px] w-full max-w-[480px] lg:h-[460px]">
          {/* Earth */}
          <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full shadow-lift ring-1 ring-white/20 lg:h-72 lg:w-72">
            <Image
              src={images.finalCta}
              alt="Earth from space — global standards"
              fill
              sizes="(max-width: 1024px) 240px, 288px"
              className="object-cover opacity-95"
            />
          </div>

          {/* Orbit */}
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 animate-spin-slower rounded-full border border-dashed border-white/15 lg:h-[360px] lg:w-[360px]"
          >
            <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-electric-300" />
          </div>

          {/* Book stack */}
          <div aria-hidden className="absolute bottom-0 right-0 -rotate-3">
            <div className="flex flex-col gap-1.5">
              {books.map((book) => (
                <div
                  key={book.label}
                  className={`flex h-11 items-center rounded-md border-r-[6px] border-r-white/85 px-4 shadow-lift ${book.className}`}
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/85">
                    {book.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certificate chip */}
          <div className="absolute left-0 top-2 flex animate-float items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.08] px-4 py-3 shadow-lift backdrop-blur-md">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-electric-500/20 text-electric-300">
              <BadgeCheck className="h-4.5 w-4.5" aria-hidden />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-sm font-bold text-white">ISO 9001</span>
              <span className="text-[11px] text-white/55">Certification achieved</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
