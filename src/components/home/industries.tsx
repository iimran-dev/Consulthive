import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { industries, type Industry } from "@/data/industries";
import { cn } from "@/lib/utils";

type IndustryCardProps = {
  industry: Industry;
  index: number;
};

function IndustryCard({ industry, index }: IndustryCardProps) {
  return (
    <article
      className={cn(
        "group relative flex h-[200px] w-full flex-col justify-between overflow-hidden rounded-2xl border border-navy-900/[0.08] bg-navy-950 p-5 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift sm:h-[240px] sm:p-6 lg:h-[270px]"
      )}
    >
      <Image
        src={industry.image}
        alt={`${industry.name} — compliance solutions`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Cinematic dark gradient overlays for contrast and depth */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/45 to-navy-950/15 transition-opacity duration-500 group-hover:from-navy-950"
      />

      {/* Top row: Counter & Interactive Arrow Button */}
      <div className="relative z-10 flex items-center justify-between">
        <span
          aria-hidden
          className="font-display text-xs font-bold tracking-wider text-white/60 sm:text-sm"
        >
          {`0${index + 1}`}
        </span>
        <span
          aria-hidden
          className="grid h-8 w-8 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-navy-900 sm:h-9 sm:w-9"
        >
          <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </span>
      </div>

      {/* Bottom row: Industry Name & Tagline */}
      <div className="relative z-10">
        <h3 className="font-display text-lg font-bold text-white tracking-tight sm:text-xl lg:text-[22px]">
          {industry.name}
        </h3>
        <p className="mt-1 text-xs leading-relaxed text-white/80 line-clamp-2 sm:mt-1.5 sm:text-[13px]">
          {industry.tagline}
        </p>
      </div>
    </article>
  );
}

export function Industries() {
  return (
    <section id="industries" className="relative overflow-hidden bg-white py-16 md:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Every Industry Has A Safer Future"
          description="Tailored compliance programs for diverse sectors — because every business is unique, and so is its path to certification."
        />

        <div className="mt-10 sm:mt-14 lg:mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {industries.map((industry, i) => (
            <Reveal key={industry.id} delay={i * 0.05}>
              <IndustryCard industry={industry} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
