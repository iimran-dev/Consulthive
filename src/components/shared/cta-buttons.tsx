"use client";

import { ArrowRight } from "lucide-react";
import { useConsultation } from "./consultation-store";
import { contact } from "@/data/site";
import { cn } from "@/lib/utils";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-500 focus-visible:ring-offset-2";

const variants = {
  primary:
    "bg-navy-900 text-white shadow-soft hover:bg-royal-600 hover:shadow-glow",
  light:
    "bg-white text-navy-900 shadow-lift hover:bg-electric-500 hover:text-white",
  outline:
    "border border-navy-900/15 bg-white/70 text-navy-900 backdrop-blur hover:border-navy-900/35 hover:bg-white",
  "outline-light":
    "border border-white/25 bg-white/5 text-white backdrop-blur hover:border-white/50 hover:bg-white/15",
} as const;

type Variant = keyof typeof variants;

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

type BookButtonProps = {
  className?: string;
  variant?: Variant;
  label?: string;
  interest?: string;
};

export function BookButton({
  className,
  variant = "primary",
  label = "Book Free Consultation",
  interest,
}: BookButtonProps) {
  const openDialog = useConsultation((s) => s.openDialog);

  return (
    <button
      type="button"
      onClick={() => openDialog(interest)}
      className={cn(base, variants[variant], "px-6 py-3.5", className)}
    >
      {label}
      <ArrowRight
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
        aria-hidden
      />
    </button>
  );
}

type WhatsAppButtonProps = {
  className?: string;
  variant?: Variant;
  label?: string;
};

export function WhatsAppButton({
  className,
  variant = "outline",
  label = "Chat on WhatsApp",
}: WhatsAppButtonProps) {
  return (
    <a
      href={contact.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(base, variants[variant], "px-6 py-3.5", className)}
    >
      <WhatsAppGlyph className="h-4 w-4 shrink-0 text-[#25D366]" />
      {label}
    </a>
  );
}

export { WhatsAppGlyph };
