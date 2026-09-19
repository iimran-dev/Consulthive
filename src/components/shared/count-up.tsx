"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

type CountUpProps = {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
};

/**
 * Animated counter that starts when scrolled into view.
 * Renders instantly when reduced motion is preferred.
 */
export function CountUp({ to, suffix = "", duration = 1.6, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView || !ref.current) return;
    if (reduce) {
      ref.current.textContent = `${to}${suffix}`;
      return;
    }
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix, duration, reduce]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
