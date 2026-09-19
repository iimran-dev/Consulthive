import {
  Award,
  Car,
  FlaskConical,
  Globe2,
  HardHat,
  HeartPulse,
  Leaf,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export type Certification = {
  id: string;
  code: string;
  name: string;
  field: string;
  description: string;
  icon: LucideIcon;
};

export const certifications: Certification[] = [
  {
    id: "iso-9001",
    code: "ISO 9001",
    name: "Quality Management",
    field: "Quality Management System",
    description:
      "Consistent quality, fewer defects, and processes that scale with confidence.",
    icon: Award,
  },
  {
    id: "iso-14001",
    code: "ISO 14001",
    name: "Environmental Management",
    field: "Environmental Management System",
    description:
      "Turn environmental responsibility into operational and commercial advantage.",
    icon: Leaf,
  },
  {
    id: "iso-45001",
    code: "ISO 45001",
    name: "Health & Safety",
    field: "Occupational Health & Safety",
    description:
      "Build safer workplaces and systematically reduce operational risk.",
    icon: HardHat,
  },
  {
    id: "iso-27001",
    code: "ISO 27001",
    name: "Information Security",
    field: "Information Security Management",
    description:
      "Protect information assets and win enterprise trust with audited security.",
    icon: ShieldCheck,
  },
  {
    id: "nabl",
    code: "NABL",
    name: "Laboratory Accreditation",
    field: "ISO/IEC 17025 Accreditation",
    description:
      "Testing and calibration laboratories accredited to international standards.",
    icon: FlaskConical,
  },
  {
    id: "nabh",
    code: "NABH",
    name: "Healthcare Accreditation",
    field: "Healthcare Standards",
    description:
      "Standards that elevate patient safety and the quality of care you deliver.",
    icon: HeartPulse,
  },
  {
    id: "ce-marking",
    code: "CE Marking",
    name: "Product Compliance",
    field: "EU Conformity",
    description:
      "Access European markets with products that meet EU conformity directives.",
    icon: Globe2,
  },
  {
    id: "iatf-16949",
    code: "IATF 16949",
    name: "Automotive Quality",
    field: "Automotive QMS",
    description:
      "Automotive quality certification recognized across the global supply chain.",
    icon: Car,
  },
];
