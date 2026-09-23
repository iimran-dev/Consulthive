"use client";

import {
  Activity,
  ArrowRight,
  ClipboardCheck,
  FolderCheck,
  LayoutDashboard,
  RefreshCcw,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { useConsultation } from "@/components/shared/consultation-store";
import { cn } from "@/lib/utils";

type CreqaiFeature = {
  icon: LucideIcon;
  label: string;
  micro: string;
};

const features: CreqaiFeature[] = [
  {
    icon: ClipboardCheck,
    label: "Audit Management",
    micro: "Plan & run audits",
  },
  {
    icon: RefreshCcw,
    label: "Corrective Actions",
    micro: "Close findings faster",
  },
  {
    icon: Activity,
    label: "Compliance Tracking",
    micro: "Real-time status",
  },
  {
    icon: FolderCheck,
    label: "Evidence Vault",
    micro: "Secure document storage",
  },
  {
    icon: LayoutDashboard,
    label: "Client Portal",
    micro: "Your compliance home",
  },
];

/**
 * CREQAI — Minimal, compact digital compliance teaser optimized for desktop & mobile.
 */
export function Creqai() {
  const openDialog = useConsultation((s) => s.openDialog);

  return (
    <section id="creqai" className="relative overflow-hidden bg-white py-12 md:py-16">
      {/* Subtle atmospheric glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[280px] w-[500px] -translate-x-1/2 rounded-full bg-electric-500/[0.05] blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          {/* Minimal Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-royal-500/20 bg-white/80 px-3 py-1 text-[11px] font-semibold text-royal-700 shadow-soft backdrop-blur min-[380px]:px-3.5 min-[380px]:text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-electric-500" />
            </span>
            Coming Soon
            <span aria-hidden className="h-3 w-px bg-royal-500/25" />
            <span className="font-display tracking-wide">Powered by CREQAI</span>
          </div>

          {/* Heading */}
          <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink min-[380px]:text-[26px] sm:text-3xl lg:text-[34px]">
            Compliance Made Digital
          </h2>
          <p className="mt-2 text-xs leading-relaxed text-body sm:text-sm">
            CREQAI brings audits, actions, and evidence into one intelligent platform — designed for businesses that live compliance.
          </p>
        </Reveal>

        {/* 5 Features — Minimal, Compact & Mobile-Optimized */}
        <Reveal delay={0.08} className="mt-7 sm:mt-8">
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
            {features.map((f, i) => (
              <div
                key={f.label}
                className={cn(
                  "group relative flex flex-col justify-between rounded-xl border border-navy-900/[0.06] bg-[#f8fafc]/70 p-3 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-royal-500/25 hover:bg-white hover:shadow-lift min-[380px]:p-3.5 sm:p-4",
                  i === 4 && "col-span-2 sm:col-span-1"
                )}
              >
                <div className="flex items-center gap-2.5 sm:flex-col sm:items-start">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-royal-500/10 text-royal-600 transition-colors duration-300 group-hover:bg-navy-900 group-hover:text-white min-[380px]:h-8 min-[380px]:w-8">
                    <f.icon className="h-3.5 w-3.5 min-[380px]:h-4 min-[380px]:w-4" aria-hidden />
                  </span>
                  <span className="font-display text-xs font-semibold leading-tight text-ink sm:text-[13.5px]">
                    {f.label}
                  </span>
                </div>
                <p className="mt-1 text-[10.5px] leading-tight text-navy-900/50 min-[380px]:text-[11px] sm:mt-2">
                  {f.micro}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Compact CTA Button */}
        <Reveal delay={0.12} className="mt-6 text-center sm:mt-8">
          <button
            type="button"
            onClick={() => openDialog("CREQAI early access")}
            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-navy-900 px-6 text-xs font-semibold text-white shadow-soft transition-all duration-300 hover:bg-royal-600 hover:shadow-glow min-[480px]:w-auto sm:px-7 sm:text-sm"
          >
            Join the Early Access List
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
