"use client";

import { useState, type FormEvent } from "react";
import {
  CheckCircle2,
  Clock,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
  type LucideIcon,
} from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { useConsultation } from "@/components/shared/consultation-store";
import { Input } from "@/components/ui/input";
import { contact } from "@/data/site";

// Placeholder: wire to real email service
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const socials: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "Consulthive on LinkedIn", href: "https://www.linkedin.com/", icon: Linkedin },
  { label: "Consulthive on Twitter", href: "https://twitter.com/", icon: Twitter },
  { label: "Consulthive on YouTube", href: "https://www.youtube.com/", icon: Youtube },
  { label: "Consulthive on Instagram", href: "https://www.instagram.com/", icon: Instagram },
];

const quickLinks = [
  { label: "The Journey", href: "#journey" },
  { label: "Why Consulthive", href: "#about" },
  { label: "Our Process", href: "#process" },
  { label: "Success Stories", href: "#stories" },
  { label: "Testimonials", href: "#testimonials" },
];

const certificationLinks = ["ISO 9001", "ISO 14001", "ISO 45001", "ISO 27001", "NABL", "NABH"];

const industryLinks = [
  "Manufacturing",
  "IT & Software",
  "Healthcare",
  "Education",
  "Laboratories",
  "Automotive",
];

const linkClass = "text-sm text-white/60 transition-colors hover:text-white";
const headingClass = "text-[11px] font-bold uppercase tracking-[0.18em] text-white/40";

function FooterLinkColumn({
  title,
  links,
  href,
}: {
  title: string;
  links: readonly string[];
  href: string;
}) {
  return (
    <div className="lg:col-span-2">
      <h3 className={headingClass}>{title}</h3>
      <ul className="mt-5 space-y-3">
        {links.map((label) => (
          <li key={label}>
            <a href={href} className={`${linkClass} whitespace-nowrap`}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Enterprise footer: brand + socials, sitemap columns, contact block,
 * newsletter bar and legal strip.
 */
export function Footer() {
  const openDialog = useConsultation((s) => s.openDialog);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState(false);

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Placeholder: wire to real email service
    if (!EMAIL_PATTERN.test(email.trim())) {
      setError(true);
      return;
    }
    setError(false);
    setSubscribed(true);
  };

  return (
    <footer className="bg-navy-950 text-white">
      <div className="mx-auto w-full max-w-7xl px-6 pt-16 md:pt-20 lg:px-8">
        {/* Link grid */}
        <div className="grid gap-x-8 gap-y-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo dark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              Standards. People. Progress. Practical ISO consulting for businesses that want
              certification done right — and kept right.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/[0.12] bg-white/[0.04] text-white/60 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
                >
                  <social.icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className={headingClass}>Quick Links</h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <FooterLinkColumn
            title="Certifications"
            links={certificationLinks}
            href="#certifications"
          />

          {/* Industries */}
          <FooterLinkColumn title="Industries" links={industryLinks} href="#industries" />

          {/* Contact */}
          <div className="lg:col-span-2">
            <h3 className={headingClass}>Contact</h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={contact.phoneHref}
                  className="flex items-start gap-2.5 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-electric-400/70" aria-hidden />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={contact.emailHref}
                  className="flex items-start gap-2.5 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-electric-400/70" aria-hidden />
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/60">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-electric-400/70" aria-hidden />
                {contact.hours}
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-electric-400/70" aria-hidden />
                {contact.location}
              </li>
            </ul>
            <button
              type="button"
              onClick={() => openDialog()}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-electric-300 transition hover:text-white"
            >
              Book Free Consultation
            </button>
          </div>
        </div>

        {/* Newsletter bar */}
        <div className="mt-14 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6 md:flex md:items-center md:justify-between md:gap-8 md:p-8">
          <div>
            <h3 className="font-display text-xl font-bold text-white">Compliance insights, monthly.</h3>
            <p className="mt-1 text-sm text-white/55">
              Standards updates and practical guides. No spam — ever.
            </p>
          </div>

          {subscribed ? (
            <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-electric-300 md:mt-0">
              <CheckCircle2 className="h-4 w-4" aria-hidden />
              You are on the list — see you in your inbox.
            </p>
          ) : (
            <div className="mt-5 w-full max-w-md md:mt-0">
              <form onSubmit={handleSubscribe} noValidate className="flex w-full">
                <Input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setError(false);
                  }}
                  placeholder="you@company.com"
                  aria-label="Email address"
                  aria-invalid={error}
                  className="h-12 flex-1 rounded-full border-white/15 bg-white/[0.07] text-white placeholder:text-white/35 focus-visible:ring-electric-500"
                />
                <button
                  type="submit"
                  className="ml-3 h-12 shrink-0 rounded-full bg-white px-6 text-sm font-semibold text-navy-900 transition hover:bg-electric-500 hover:text-white"
                >
                  Subscribe
                </button>
              </form>
              {error ? (
                <p role="alert" className="mt-2 text-xs text-red-300">
                  Please enter a valid email address.
                </p>
              ) : null}
            </div>
          )}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/[0.08] py-7">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-xs text-white/40">© 2025 Consulthive. All rights reserved.</p>
            <p className="text-xs text-white/40">ISO Certification &amp; Compliance Consulting</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
