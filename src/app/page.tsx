import { Header } from "@/components/home/header";
import { Hero } from "@/components/home/hero";
import { ComplianceJourney } from "@/components/home/compliance-journey";
import { TrustStats } from "@/components/home/trust-stats";
import { Certifications } from "@/components/home/certifications";
import { Industries } from "@/components/home/industries";
import { CertificationProcess } from "@/components/home/certification-process";
import { SuccessStories } from "@/components/home/success-stories";
import { ClientLogos } from "@/components/home/client-logos";
import { Testimonials } from "@/components/home/testimonials";
import { Insights } from "@/components/home/insights";
import { Creqai } from "@/components/home/creqai";
import { FinalCTA } from "@/components/home/final-cta";
import { Footer } from "@/components/home/footer";
import { ConsultationDialog } from "@/components/shared/consultation-dialog";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustStats />
        <Certifications />
        <CertificationProcess />
        <Industries />
        <SuccessStories />
        <ClientLogos />
        <Testimonials />
        <Insights />
        <Creqai />
        <FinalCTA />
      </main>
      <Footer />
      <ConsultationDialog />
    </div>
  );
}
