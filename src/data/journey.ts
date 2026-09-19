import {
  Award,
  ClipboardCheck,
  Compass,
  Files,
  GraduationCap,
  SearchCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export type JourneyStage = {
  id: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
};

/**
 * The Compliance Journey — seven stages from current state to growth.
 * This powers the signature interactive roadmap on the homepage.
 */
export const journeyStages: JourneyStage[] = [
  {
    id: "current-state",
    title: "Current State",
    short: "Where you stand",
    description:
      "We map your existing processes, controls, and compliance posture to establish a clear, honest baseline.",
    icon: Compass,
  },
  {
    id: "gap-analysis",
    title: "Gap Analysis",
    short: "What must change",
    description:
      "A structured review against your chosen standard pinpoints exactly what must change — and what already works.",
    icon: SearchCheck,
  },
  {
    id: "documentation",
    title: "Documentation",
    short: "Built to fit",
    description:
      "Policies, manuals, and records are drafted around how your business actually operates — never copy-paste templates.",
    icon: Files,
  },
  {
    id: "training",
    title: "Training",
    short: "People first",
    description:
      "Your team is coached until the system feels like second nature — capability that outlives the audit.",
    icon: GraduationCap,
  },
  {
    id: "internal-audit",
    title: "Internal Audit",
    short: "Rehearse for certainty",
    description:
      "A full dress rehearsal verifies readiness and closes every non-conformity before the real audit arrives.",
    icon: ClipboardCheck,
  },
  {
    id: "certification",
    title: "Certification",
    short: "Officially recognized",
    description:
      "We stand beside you through the external audit until your certificate is in hand.",
    icon: Award,
  },
  {
    id: "growth",
    title: "Business Growth",
    short: "Where it pays off",
    description:
      "Certification becomes a growth lever — new contracts, new markets, and lasting customer trust.",
    icon: TrendingUp,
  },
];
