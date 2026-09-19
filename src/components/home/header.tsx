"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { BookButton } from "@/components/shared/cta-buttons";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";

/**
 * Fixed header: transparent over the hero, transforming into a
 * white glass surface with backdrop blur + hairline border on scroll.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || menuOpen
          ? "border-b border-navy-900/[0.08] bg-white/80 shadow-soft backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 lg:h-20 lg:px-8">
        <a
          href="#top"
          aria-label="Consulthive — back to top"
          className="rounded-lg transition-transform duration-300 hover:scale-[1.02]"
        >
          <Logo />
        </a>

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-navy-900/65 transition-colors duration-200 hover:bg-navy-900/[0.05] hover:text-navy-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <BookButton className="px-5 py-2.5" />
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="grid h-11 w-11 place-items-center rounded-full border border-navy-900/10 bg-white/70 text-navy-900 backdrop-blur transition hover:bg-white lg:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            aria-label="Mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute inset-x-0 top-full mx-4 mt-2 rounded-2xl border border-navy-900/[0.08] bg-white/95 p-3 shadow-lift backdrop-blur-xl lg:hidden"
          >
            <ul className="grid gap-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-navy-900/80 transition hover:bg-mist hover:text-navy-900"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-2 border-t border-navy-900/[0.07] p-2">
              <BookButton className="w-full" />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
