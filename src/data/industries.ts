import { images } from "./images";

export type Industry = {
  id: string;
  name: string;
  tagline: string;
  image: string;
};

export const industries: Industry[] = [
  {
    id: "manufacturing",
    name: "Manufacturing",
    tagline: "Streamlined quality and safety systems for factories of every scale.",
    image: images.industries.manufacturing,
  },
  {
    id: "technology",
    name: "IT & Software",
    tagline: "Information security and service standards for technology teams.",
    image: images.industries.technology,
  },
  {
    id: "healthcare",
    name: "Healthcare",
    tagline: "Patient safety and quality frameworks for hospitals and clinics.",
    image: images.industries.healthcare,
  },
  {
    id: "education",
    name: "Education",
    tagline: "Quality and governance systems for institutions that shape futures.",
    image: images.industries.education,
  },
  {
    id: "laboratories",
    name: "Laboratories",
    tagline: "Accreditation-ready testing and calibration laboratories.",
    image: images.industries.laboratories,
  },
  {
    id: "automotive",
    name: "Automotive",
    tagline: "Supply-chain-grade quality for automotive manufacturers.",
    image: images.industries.automotive,
  },
];
