/**
 * CONSULTHIVE — Centralized Image Configuration
 *
 * Every external image URL used on the homepage lives here.
 * Do NOT hardcode image URLs anywhere else.
 *
 * All imagery is sourced from Unsplash (free-to-use license) and is
 * chosen to feel cinematic, corporate and consistent: cool blue/navy
 * tones, elevated landscapes, professional environments.
 */

const unsplash = (id: string, params = "q=80&w=1600&auto=format&fit=crop") =>
  `https://images.unsplash.com/${id}?${params}`;

const avatar = (id: string) =>
  `https://images.unsplash.com/${id}?q=80&w=160&h=160&auto=format&fit=crop&crop=faces`;

export const images = {
  /** Hero — a professional standing at the summit of an elevated landscape. */
  hero: unsplash("photo-1519904981063-b0cf448d479e", "q=80&w=1400&auto=format&fit=crop"),

  industries: {
    manufacturing: unsplash("photo-1504328345606-18bbc8c9d7d1", "q=80&w=1400&auto=format&fit=crop"),
    technology: unsplash("photo-1498050108023-c5249f4df085", "q=80&w=1200&auto=format&fit=crop"),
    healthcare: unsplash("photo-1576091160399-112ba8d25d1d", "q=80&w=1200&auto=format&fit=crop"),
    education: unsplash("photo-1522202176988-66273c2fd55f", "q=80&w=1200&auto=format&fit=crop"),
    laboratories: unsplash("photo-1532187863486-abf9dbad1b69", "q=80&w=1200&auto=format&fit=crop"),
    automotive: unsplash("photo-1486262715619-67b85e0b08d3", "q=80&w=2000&auto=format&fit=crop"),
  },

  /** Client success story — cinematic climbers ascending a mountain. */
  successStory: unsplash("photo-1522163182402-834f871fd851", "q=80&w=2200&auto=format&fit=crop"),

  insights: {
    featured: unsplash("photo-1454165804606-c3d57bc86b40", "q=80&w=1600&auto=format&fit=crop"),
    articleOne: unsplash("photo-1554224155-6726b3ff858f", "q=80&w=900&auto=format&fit=crop"),
    articleTwo: unsplash("photo-1576086213369-97a306d36557", "q=80&w=900&auto=format&fit=crop"),
  },

  /** Final CTA — earth from space, evoking global standards. */
  finalCta: unsplash("photo-1451187580459-43490279c0fa", "q=80&w=1200&auto=format&fit=crop"),

  /** Placeholder avatar portraits for sample testimonials. */
  testimonials: {
    one: avatar("photo-1472099645785-5658abf4ff4e"),
    two: avatar("photo-1494790108377-be9c29b29330"),
    three: avatar("photo-1507003211169-0a1dd7228f2d"),
  },
} as const;
