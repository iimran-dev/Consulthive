/**
 * CONSULTHIVE — Site-level content.
 * Contact details are clearly-marked placeholders until real data is provided.
 */

export const site = {
  name: "Consulthive",
  tagline: "Standards. People. Progress.",
  description:
    "Practical ISO certification and compliance consulting for businesses that want certification done right — and kept right.",
} as const;

export const contact = {
  phone: "+91 90000 00000",
  phoneHref: "tel:+919000000000",
  email: "hello@consulthive.example",
  emailHref: "mailto:hello@consulthive.example",
  hours: "Mon–Sat · 9:00–19:00 IST",
  location: "India",
  whatsappUrl:
    "https://wa.me/919000000000?text=Hi%20Consulthive%2C%20I%27d%20like%20to%20book%20a%20free%20consultation.",
} as const;

export const navLinks = [
  { label: "Certifications", href: "#certifications" },
  { label: "Industries", href: "#industries" },
  { label: "Services", href: "#process" },
  { label: "Resources", href: "#insights" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;
