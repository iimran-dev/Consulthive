"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useConsultation } from "./consultation-store";
import { certifications } from "@/data/certifications";
import { cn } from "@/lib/utils";

const interestOptions = [
  ...certifications.map((c) => c.code),
  "Not sure yet",
  "CREQAI early access",
];

/**
 * Global "Book Free Consultation" dialog.
 * Mounted once in page.tsx; opened from anywhere via useConsultation().
 * Submission is client-side only (placeholder behavior) — connect to CRM later.
 */
export function ConsultationDialog() {
  const { open, interest, closeDialog } = useConsultation();
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function resetAndClose() {
    closeDialog();
    setStatus("idle");
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // Placeholder submission — replace with API/CRM integration.
    window.setTimeout(() => setStatus("success"), 900);
  }

  return (
    <Dialog open={open} onOpenChange={(v) => (!v ? resetAndClose() : undefined)}>
      <DialogContent
        data-lenis-prevent
        className="max-h-[90dvh] w-[calc(100%-1.5rem)] max-w-lg overflow-y-auto rounded-2xl border-navy-900/10 bg-white p-0 shadow-lift sm:w-full sm:max-w-lg sm:rounded-2xl"
      >
        {status === "success" ? (
          <div className="flex flex-col items-center px-5 py-10 text-center sm:px-8 sm:py-14">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-electric-500/10 text-electric-600 sm:h-16 sm:w-16">
              <CheckCircle2 className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden />
            </span>
            <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-ink sm:mt-6 sm:text-2xl">
              Request received
            </h3>
            <p className="mt-2.5 max-w-sm text-xs leading-relaxed text-body sm:mt-3 sm:text-sm">
              Thank you — a senior consultant will reach out within one business
              day to schedule your free consultation.
            </p>
            <button
              type="button"
              onClick={resetAndClose}
              className="mt-6 inline-flex h-11 items-center rounded-full bg-navy-900 px-8 text-sm font-semibold text-white transition hover:bg-royal-600 sm:mt-8"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="p-5 min-[380px]:p-6 sm:p-8">
            <DialogHeader className="text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-royal-600">
                Free Consultation
              </p>
              <DialogTitle className="mt-1.5 font-display text-xl font-bold tracking-tight text-ink min-[380px]:text-2xl">
                Book Your Free Consultation
              </DialogTitle>
              <DialogDescription className="mt-1.5 text-xs leading-relaxed text-body sm:mt-2 sm:text-sm">
                A 30-minute, no-obligation conversation with a senior
                consultant about your certification goals.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="mt-5 grid gap-3.5 sm:mt-7 sm:gap-4">
              <div className="grid gap-3.5 sm:grid-cols-2 sm:gap-4">
                <div className="grid gap-1.5">
                  <Label htmlFor="consult-name" className="text-xs font-semibold text-navy-900">
                    Full name <span className="text-electric-500">*</span>
                  </Label>
                  <Input
                    id="consult-name"
                    required
                    placeholder="Jane Doe"
                    className="h-11 rounded-xl border-navy-900/12 bg-mist/60 text-base sm:text-sm focus-visible:ring-electric-500"
                  />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="consult-email" className="text-xs font-semibold text-navy-900">
                    Work email <span className="text-electric-500">*</span>
                  </Label>
                  <Input
                    id="consult-email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className="h-11 rounded-xl border-navy-900/12 bg-mist/60 text-base sm:text-sm focus-visible:ring-electric-500"
                  />
                </div>
              </div>

              <div className="grid gap-3.5 sm:grid-cols-2 sm:gap-4">
                <div className="grid gap-1.5">
                  <Label htmlFor="consult-phone" className="text-xs font-semibold text-navy-900">
                    Phone
                  </Label>
                  <Input
                    id="consult-phone"
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="h-11 rounded-xl border-navy-900/12 bg-mist/60 text-base sm:text-sm focus-visible:ring-electric-500"
                  />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="consult-company" className="text-xs font-semibold text-navy-900">
                    Company
                  </Label>
                  <Input
                    id="consult-company"
                    placeholder="Company name"
                    className="h-11 rounded-xl border-navy-900/12 bg-mist/60 text-base sm:text-sm focus-visible:ring-electric-500"
                  />
                </div>
              </div>

              <div className="grid gap-1.5">
                <Label className="text-xs font-semibold text-navy-900">Interested in</Label>
                <Select name="interest" defaultValue={interest ?? "Not sure yet"}>
                  <SelectTrigger className="h-11 w-full rounded-xl border-navy-900/12 bg-mist/60 text-base sm:text-sm focus-visible:ring-electric-500">
                    <SelectValue placeholder="Select a certification" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl">
                    {interestOptions.map((opt) => (
                      <SelectItem key={opt} value={opt} className="rounded-lg">
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-1.5">
                <Label htmlFor="consult-message" className="text-xs font-semibold text-navy-900">
                  Anything we should know? <span className="font-normal text-navy-900/50">(optional)</span>
                </Label>
                <Textarea
                  id="consult-message"
                  rows={3}
                  placeholder="Briefly describe your business and goals…"
                  className="resize-none rounded-xl border-navy-900/12 bg-mist/60 text-base sm:text-sm focus-visible:ring-electric-500"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className={cn(
                  "mt-2 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-navy-900 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:bg-royal-600 hover:shadow-glow disabled:opacity-70"
                )}
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                    Sending…
                  </>
                ) : (
                  "Request Free Consultation"
                )}
              </button>
              <p className="text-center text-[11px] leading-relaxed text-navy-900/45">
                Response within one business day · No obligation · Your details
                stay private
              </p>
            </form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
