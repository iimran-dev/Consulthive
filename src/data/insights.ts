import { images } from "./images";

export type Insight = {
  category: string;
  title: string;
  excerpt?: string;
  date: string;
  readTime: string;
  image: string;
};

/**
 * Editorial content — placeholder metadata clearly marked as sample.
 */
export const featuredInsight: Insight = {
  category: "Industry Guide",
  title: "ISO Certification in 2025: What Leadership Teams Need to Know",
  excerpt:
    "Why certification is no longer a formality — and how to approach it as a business transformation program with measurable returns.",
  date: "Jan 2025",
  readTime: "12 min read",
  image: images.insights.featured,
};

export const secondaryInsights: Insight[] = [
  {
    category: "ISO Tips",
    title: "Seven Habits of Consistently Audit-Ready Teams",
    date: "Dec 2024",
    readTime: "8 min read",
    image: images.insights.articleOne,
  },
  {
    category: "NABL Insights",
    title: "NABL Accreditation: What Laboratories Need to Know",
    date: "Dec 2024",
    readTime: "10 min read",
    image: images.insights.articleTwo,
  },
];
