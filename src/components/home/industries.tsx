import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { industries, type Industry } from "@/data/industries";
import { cn } from "@/lib/utils";

/**
 * Per-card placement in the 12-column editorial grid (lg+).
 * Manufacturing is the tall hero card, Automotive the wide cinematic
 * banner; Education is pulled up to overlap its neighbour.
 */
const cardLayout = [
  "lg:col-span-5 lg:row-span-2",
  "lg:col-span-4",
  "lg:col-span-3",
  "lg:col-span-3 lg:z-10 lg:-mt-10",
  "lg:col-span-4",
  "lg:col-span-12 lg:min-h-[240px]",
] as const;

type IndustryCardProps = {
  industry: Industry;
  className?: string;
  /** Tall/wide feature cards keep their tagline visible at all times. */
  large?: boolean;
};

function IndustryCard({ industry, className, large = false }: IndustryCardProps) {
  const index = industries.findIndex((item) => item.id === industry.id);

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-navy-900/[0.06] shadow-soft transition-all duration-500 hover:shadow-lift",
        className
      )}
    >
      <Image
        src={industry.image}
        alt={`${industry.name} — compliance solutions`}
        fill
        sizes="(max-width:1024px) 100vw, 50vw"
        className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/25 to-navy-950/[0.04] transition-opacity duration-500"
      />
      <span
        aria-hidden
        className="absolute left-6 top-5 font-display text-sm font-bold text-white/50"
      >
        {`0${index + 1}`}
      </span>
      <span
        aria-hidden
        className="absolute right-5 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur transition-all duration-500 group-hover:bg-white group-hover:text-navy-900"
      >
        <ArrowUpRight className="h-4 w-4" />
      </span>
      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="font-display text-xl font-bold text-white lg:text-2xl">
          {industry.name}
        </h3>
        <p
          className={cn(
            "mt-1.5 text-[13px] leading-relaxed text-white/70 transition-all duration-500",
            !large &&
              "translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 max-lg:translate-y-0 max-lg:opacity-100"
          )}
        >
          {industry.tagline}
        </p>
      </div>
    </article>
  );
}

export function Industries() {
  return (
    <section id="industries" className="relative overflow-hidden bg-white py-20 md:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Every Industry Has A Safer Future"
          description="Tailored compliance programs for diverse sectors — because every business is unique, and so is its path to certification."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 lg:auto-rows-[210px] lg:grid-cols-12">
          {industries.map((industry, i) => (
            <Reveal key={industry.id} delay={i * 0.06} className={cardLayout[i]}>
              <IndustryCard
                industry={industry}
                large={i === 0 || i === 5}
                className={cn(
                  "relative aspect-[4/3] lg:aspect-auto lg:h-full",
                  i === 3 && "lg:ring-4 lg:ring-white"
                )}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
