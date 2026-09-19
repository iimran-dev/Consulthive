"use client";

import {
  Activity,
  ArrowRight,
  ClipboardCheck,
  FolderCheck,
  LayoutDashboard,
  RefreshCcw,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { useConsultation } from "@/components/shared/consultation-store";
import { cn } from "@/lib/utils";

type CreqaiFeature = {
  icon: LucideIcon;
  label: string;
  micro: string;
  /** Desktop position inside the orbit cluster. */
  className: string;
  /** Staggered float delay. */
  delay: string;
  /** Dashed connector endpoint (percent of cluster box). */
  line: { x2: string; y2: string };
};

const features: CreqaiFeature[] = [
  {
    icon: ClipboardCheck,
    label: "Audit Management",
    micro: "Plan & run audits",
    className: "left-[14%] top-[4%]",
    delay: "0s",
    line: { x2: "26%", y2: "16%" },
  },
  {
    icon: RefreshCcw,
    label: "Corrective Actions",
    micro: "Close findings faster",
    className: "right-[12%] top-[8%]",
    delay: "1.2s",
    line: { x2: "74%", y2: "20%" },
  },
  {
    icon: Activity,
    label: "Compliance Tracking",
    micro: "Real-time status",
    className: "left-[0%] top-[44%]",
    delay: "2.1s",
    line: { x2: "12%", y2: "52%" },
  },
  {
    icon: FolderCheck,
    label: "Evidence Management",
    micro: "One secure vault",
    className: "right-[0%] top-[48%]",
    delay: "0.7s",
    line: { x2: "88%", y2: "56%" },
  },
  {
    icon: LayoutDashboard,
    label: "Client Portal",
    micro: "Your compliance home",
    className: "bottom-[2%] left-1/2 -translate-x-1/2",
    delay: "1.7s",
    line: { x2: "50%", y2: "86%" },
  },
];

function FeatureChip({ feature, floating = true }: { feature: CreqaiFeature; floating?: boolean }) {
  return (
    <div
      style={floating ? { animationDelay: feature.delay } : undefined}
      className={cn(
        "flex items-center gap-3 rounded-2xl border border-white/60 bg-white/75 px-4 py-3 shadow-soft backdrop-blur-md",
        floating && "animate-float"
      )}
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-royal-600 to-electric-500 text-white">
        <feature.icon className="h-4.5 w-4.5" aria-hidden />
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-sm font-semibold text-ink">{feature.label}</span>
        <span className="text-[11px] text-navy-900/50">{feature.micro}</span>
      </span>
    </div>
  );
}

/**
 * CREQAI — soft-futuristic "Compliance Made Digital" teaser with an
 * orbital feature cluster on desktop and a simple grid on mobile.
 */
export function Creqai() {
  const openDialog = useConsultation((s) => s.openDialog);

  return (
    <section id="creqai" className="relative overflow-hidden bg-white py-20 md:py-28 lg:py-36">
      {/* Atmosphere */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-electric-500/[0.08] blur-3xl" />
        <div className="absolute left-[-12%] top-1/3 h-[480px] w-[480px] rounded-full bg-royal-500/[0.07] blur-3xl" />
        <div className="bg-grid-soft absolute inset-0 [mask-image:radial-gradient(ellipse_60%_55%_at_50%_45%,black,transparent)]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
        {/* Badge */}
        <Reveal className="flex justify-center">
          <p className="inline-flex items-center gap-2.5 rounded-full border border-royal-500/20 bg-white/80 px-4 py-2 text-xs font-semibold text-royal-700 shadow-soft backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-electric-500" />
            </span>
            Coming Soon
            <span aria-hidden className="h-3 w-px bg-royal-500/25" />
            <span className="font-display tracking-wide">Powered by CREQAI</span>
          </p>
        </Reveal>

        <SectionHeading
          className="mt-6"
          eyebrow="The Future of Compliance Management"
          title="Compliance Made Digital"
          description="CREQAI brings your audits, actions, and evidence into one intelligent platform — designed with consultants, for businesses that live compliance."
        />

        {/* Desktop orbit cluster */}
        <div className="relative mx-auto mt-16 hidden h-[400px] max-w-4xl lg:block">
          {/* Dashed connectors */}
          <svg aria-hidden className="absolute inset-0 h-full w-full">
            {features.map((f) => (
              <line
                key={f.label}
                x1="50%"
                y1="50%"
                x2={f.line.x2}
                y2={f.line.y2}
                stroke="rgba(10,27,54,0.12)"
                strokeDasharray="3 6"
              />
            ))}
          </svg>

          {/* Center orb */}
          <div className="absolute left-1/2 top-1/2 z-10 grid h-44 w-44 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/70 bg-gradient-to-br from-white via-white/70 to-electric-500/10 shadow-glow backdrop-blur">
            <span aria-hidden className="absolute inset-0 rounded-full bg-electric-500/10 blur-xl" />
            <div className="relative flex flex-col items-center gap-1.5">
              <Sparkles className="h-6 w-6 text-electric-500" aria-hidden />
              <span className="font-display text-sm font-bold tracking-[0.22em] text-navy-900">
                CREQAI
              </span>
            </div>
          </div>

          {/* Glass feature chips */}
          {features.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.08} className={cn("absolute", f.className)}>
              <FeatureChip feature={f} />
            </Reveal>
          ))}
        </div>

        {/* Mobile grid */}
        <div className="mx-auto mt-12 grid max-w-md grid-cols-2 gap-3 lg:hidden">
          {features.map((f, i) => (
            <Reveal
              key={f.label}
              delay={i * 0.08}
              className={cn(f.label === "Client Portal" && "col-span-2")}
            >
              <FeatureChip feature={f} floating={false} />
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal className="mt-14 text-center">
          <button
            type="button"
            onClick={() => openDialog("CREQAI early access")}
            className="inline-flex h-12 items-center gap-2 rounded-full bg-navy-900 px-8 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:bg-royal-600 hover:shadow-glow"
          >
            Join the Early Access List
            <ArrowRight className="h-4 w-4" aria-hidden />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
