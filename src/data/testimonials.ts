import { images } from "./images";

export type Testimonial = {
  id: string;
  category: string;
  role: string;
  name: string;
  avatar: string;
  quote: string;
  isSample: boolean;
};

/**
 * Sample testimonials — clearly-marked placeholder content.
 * Replace with verified client reviews, names, and photos when available.
 * (Per content policy: no fabricated client names, companies, or reviews.)
 */
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    category: "Manufacturing Client",
    role: "Quality Head",
    name: "Verified Client",
    avatar: images.testimonials.one,
    quote:
      "A complex certification made structured and achievable. The process felt clear from the very first week — every stage had a purpose.",
    isSample: true,
  },
  {
    id: "t2",
    category: "IT Client",
    role: "Engineering Manager",
    name: "Verified Client",
    avatar: images.testimonials.two,
    quote:
      "Audits that once felt daunting became routine checkpoints. The system simply works, and the team actually owns it.",
    isSample: true,
  },
  {
    id: "t3",
    category: "Healthcare Client",
    role: "Administrator",
    name: "Verified Client",
    avatar: images.testimonials.three,
    quote:
      "Documentation was tailored to how we actually operate. Adoption felt effortless across every department.",
    isSample: true,
  },
  {
    id: "t4",
    category: "Manufacturing Client",
    role: "Operations Director",
    name: "Verified Client",
    avatar: images.testimonials.one,
    quote:
      "Clear timelines, honest guidance, and no last-minute surprises before the certification audit.",
    isSample: true,
  },
  {
    id: "t5",
    category: "IT Client",
    role: "Compliance Lead",
    name: "Verified Client",
    avatar: images.testimonials.two,
    quote:
      "From gap analysis to certification, everything stayed practical, scheduled, and on budget.",
    isSample: true,
  },
];
