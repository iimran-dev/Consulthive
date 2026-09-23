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
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      // Linear scroll-spy detection
      const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
      const scrollPosition = window.scrollY + 160;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            return;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    if (menuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled || menuOpen
            ? "border-b border-navy-900/[0.08] bg-white/90 shadow-soft backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-3 sm:px-6 lg:h-20 lg:px-8">
          <a
            href="#top"
            aria-label="Consulthive — back to top"
            className="shrink-0 rounded-lg transition-transform duration-300 hover:scale-[1.02]"
            onClick={() => setMenuOpen(false)}
          >
            <Logo />
          </a>

          {/* Desktop linear navigation */}
          <nav aria-label="Primary" className="hidden items-center gap-0.5 xl:gap-1 lg:flex">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "rounded-full px-2.5 py-1.5 text-xs font-medium transition-all duration-200 xl:px-3 xl:py-2 xl:text-sm",
                    isActive
                      ? "bg-navy-900/[0.08] text-navy-950 font-semibold shadow-xs"
                      : "text-navy-900/65 hover:bg-navy-900/[0.05] hover:text-navy-900"
                  )}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="hidden shrink-0 lg:block">
            <BookButton className="px-4 py-2.5 text-xs xl:px-5 xl:text-sm" />
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-navy-900/10 bg-white/80 text-navy-900 shadow-soft backdrop-blur transition hover:bg-white active:scale-95 lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu container */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              aria-label="Mobile"
              data-lenis-prevent
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="absolute inset-x-0 top-full mx-3 mt-2 max-h-[calc(100dvh-5rem)] overflow-y-auto rounded-2xl border border-navy-900/[0.09] bg-white/98 p-3 shadow-lift backdrop-blur-2xl lg:hidden"
            >
              <p className="px-3 pb-2 pt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-navy-900/40">
                Linear Navigation
              </p>
              <ul className="grid gap-0.5">
                {navLinks.map((link, i) => {
                  const id = link.href.replace("#", "");
                  const isActive = activeSection === id;
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className={cn(
                          "flex h-11 items-center justify-between rounded-xl px-3.5 text-sm font-semibold transition-colors",
                          isActive
                            ? "bg-navy-900/[0.08] text-navy-950 font-bold"
                            : "text-navy-900/75 hover:bg-mist hover:text-navy-900 active:bg-mist"
                        )}
                      >
                        <span>{link.label}</span>
                        <span className="font-mono text-xs font-normal text-navy-900/35">
                          0{i + 1}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-2.5 border-t border-navy-900/[0.07] pt-3">
                <BookButton
                  className="w-full justify-center py-3"
                  onClick={() => setMenuOpen(false)}
                />
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Backdrop overlay for mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMenuOpen(false)}
            aria-hidden
            className="fixed inset-0 z-40 bg-navy-950/30 backdrop-blur-[2px] lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
