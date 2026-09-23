import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { featuredInsight, secondaryInsights, type Insight } from "@/data/insights";

const allInsights: (Insight & { isFeatured?: boolean })[] = [
  { ...featuredInsight, isFeatured: true },
  ...secondaryInsights,
];

/**
 * Compact Knowledge Center: all 3 insights presented in a single balanced 3-column row.
 */
export function Insights() {
  return (
    <section id="insights" className="bg-white py-12 sm:py-16 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            align="left"
            eyebrow="Knowledge Center"
            title="Insights &amp; Updates"
            description="Practical guides, certification tips, and compliance updates from our consulting desk."
          />
          <p className="hidden max-w-xs text-xs sm:text-sm leading-relaxed text-navy-900/45 lg:block">
            Written by consultants who run audits — not content teams.
          </p>
        </div>

        {/* 3 Compact Article Cards Grid */}
        <div className="mt-7 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:grid-cols-3">
          {allInsights.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.08} className="h-full">
              <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-navy-900/[0.07] bg-white p-3.5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift min-[380px]:p-4 sm:p-5">
                <div>
                  {/* Card Thumbnail */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <span className="absolute left-2.5 top-2.5 rounded-full bg-navy-950/85 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-soft backdrop-blur-sm sm:left-3 sm:top-3">
                      {post.category}
                    </span>
                    {post.isFeatured && (
                      <span className="absolute right-2.5 top-2.5 rounded-full bg-royal-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-soft sm:right-3 sm:top-3">
                        Guide
                      </span>
                    )}
                  </div>

                  {/* Metadata */}
                  <div className="mt-3 flex items-center gap-2 text-[11px] font-medium text-navy-900/45 sm:mt-3.5">
                    <span>{post.date}</span>
                    <span>&middot;</span>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-1.5 font-display text-base font-bold leading-snug tracking-tight text-ink transition-colors duration-300 group-hover:text-royal-700 sm:text-lg">
                    {post.title}
                  </h3>

                  {/* Excerpt if present */}
                  {post.excerpt ? (
                    <p className="mt-1.5 text-xs leading-relaxed text-body line-clamp-2 sm:mt-2 sm:text-[13px]">
                      {post.excerpt}
                    </p>
                  ) : null}
                </div>

                {/* Read CTA */}
                <a
                  href="#contact"
                  className="mt-3.5 inline-flex items-center gap-1.5 border-t border-navy-900/[0.05] pt-3 text-xs font-semibold text-royal-600 transition-all duration-300 group-hover:gap-2.5 sm:mt-4"
                >
                  {post.isFeatured ? "Read the guide" : "Read article"}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
