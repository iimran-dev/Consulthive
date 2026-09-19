import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { featuredInsight, secondaryInsights } from "@/data/insights";

/**
 * Editorial "Knowledge Center": one featured guide plus compact
 * secondary article cards, magazine-style.
 */
export function Insights() {
  return (
    <section id="insights" className="bg-white py-20 md:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            align="left"
            eyebrow="Knowledge Center"
            title="Insights &amp; Updates"
            description="Practical guides, certification tips, and compliance updates from our consulting desk."
          />
          <p className="hidden max-w-xs text-sm leading-relaxed text-navy-900/45 lg:block">
            Written by consultants who run audits — not content teams.
          </p>
        </div>

        {/* Featured article */}
        <Reveal>
          <article className="group mt-14 grid items-center gap-8 lg:grid-cols-12">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-navy-900/[0.06] shadow-soft lg:col-span-7">
              <Image
                src={featuredInsight.image}
                alt={featuredInsight.title}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
              />
              <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-navy-900 shadow-soft backdrop-blur">
                {featuredInsight.category}
              </span>
            </div>

            <div className="lg:col-span-5">
              <p className="text-xs font-medium text-navy-900/45">
                {featuredInsight.date} &middot; {featuredInsight.readTime} &middot; Consulthive
                Editorial
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold leading-snug tracking-tight text-ink transition-colors duration-300 group-hover:text-royal-700 lg:text-[30px]">
                {featuredInsight.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-body">{featuredInsight.excerpt}</p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-royal-600 transition-all duration-300 group-hover:gap-3"
              >
                Read the guide
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </article>
        </Reveal>

        {/* Secondary articles */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-14">
          {secondaryInsights.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.1}>
              <article className="group flex items-center gap-5 rounded-2xl border border-navy-900/[0.07] bg-white p-4 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                <div className="relative h-28 w-32 shrink-0 overflow-hidden rounded-xl sm:h-32 sm:w-40">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 128px, 160px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-royal-600">
                    {post.category}
                  </p>
                  <h4 className="mt-1 font-display text-base font-semibold leading-snug tracking-tight text-ink transition-colors group-hover:text-royal-700 lg:text-lg">
                    {post.title}
                  </h4>
                  <p className="mt-2 text-xs text-navy-900/45">
                    {post.date} &middot; {post.readTime}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
