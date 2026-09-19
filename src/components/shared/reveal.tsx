"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.21, 0.6, 0.35, 1] as const;

type RevealProps = {
  children: ReactNode;
  /** Delay in seconds */
  delay?: number;
  /** Vertical offset in px */
  y?: number;
  className?: string;
  once?: boolean;
};

/**
 * Signature scroll-reveal: gentle fade-up used across the homepage.
 * Respects prefers-reduced-motion.
 */
export function Reveal({ children, delay = 0, y = 28, className, once = true }: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export const revealEase = EASE;
