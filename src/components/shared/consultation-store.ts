import { create } from "zustand";

type ConsultationState = {
  open: boolean;
  /** Optional preselected interest, e.g. "ISO 9001" */
  interest: string | null;
  openDialog: (interest?: string) => void;
  closeDialog: () => void;
};

/**
 * Global store for the "Book Free Consultation" dialog so any
 * CTA on the page (header, hero, cards, footer) can open it.
 */
export const useConsultation = create<ConsultationState>((set) => ({
  open: false,
  interest: null,
  openDialog: (interest) => set({ open: true, interest: interest ?? null }),
  closeDialog: () => set({ open: false }),
}));
