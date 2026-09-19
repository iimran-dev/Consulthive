import {
  BadgeCheck,
  ClipboardCheck,
  FileText,
  MessagesSquare,
  SearchCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

export type ProcessStep = {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

/** A Clear Path To Certification — six steps from first conversation to certificate. */
export const processSteps: ProcessStep[] = [
  {
    id: "consultation",
    number: "01",
    title: "Consultation",
    description:
      "A free, focused conversation about your goals, timeline, and the right standard for your business.",
    icon: MessagesSquare,
  },
  {
    id: "gap-analysis",
    number: "02",
    title: "Gap Analysis",
    description:
      "We benchmark your current state against every requirement of the standard.",
    icon: SearchCheck,
  },
  {
    id: "documentation",
    number: "03",
    title: "Documentation",
    description:
      "Simple, practical documentation tailored to how your operations really run.",
    icon: FileText,
  },
  {
    id: "training",
    number: "04",
    title: "Training",
    description:
      "Role-specific training that builds lasting internal capability.",
    icon: Users,
  },
  {
    id: "audit-support",
    number: "05",
    title: "Audit Support",
    description:
      "Complete support through internal audits and the external certification audit.",
    icon: ClipboardCheck,
  },
  {
    id: "certification",
    number: "06",
    title: "Certification",
    description:
      "Achieve certification — then keep improving with ongoing guidance.",
    icon: BadgeCheck,
  },
];
