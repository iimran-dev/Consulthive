import type { ReactNode } from "react";
import { clientLogos } from "@/data/logos";

/**
 * Eight distinct minimal geometric marks (one per placeholder partner).
 * Pure strokes on currentColor so they tint with the hover state.
 */
const marks: ReactNode[] = [
  // Hexagon
  <path key="hexagon" d="M12 2.7L20.2 7.35V16.65L12 21.3L3.8 16.65V7.35Z" />,
  // Concentric circles
  <g key="rings">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="4.25" />
  </g>,
  // Triangle
  <path key="triangle" d="M12 3.6L21 20H3Z" />,
  // Diamond
  <path key="diamond" d="M12 2.8L21.2 12L12 21.2L2.8 12Z" />,
  // Three vertical bars
  <g key="bars">
    <path d="M5 9.25V14.75" />
    <path d="M12 4.5V19.5" />
    <path d="M19 9.25V14.75" />
  </g>,
  // Quarter arcs
  <g key="arcs">
    <path d="M21 21A18 18 0 0 0 3 3" />
    <path d="M12 21A9 9 0 0 0 3 12" />
  </g>,
  // Slash-wave
  <g key="wave">
    <path d="M3.5 16.5C7 14.5 9 10 11 5.5" />
    <path d="M10 20.5C13.5 18.5 15.5 13 17.5 8.5" />
  </g>,
  // Four-point star
  <path
    key="star"
    d="M12 2.5Q13.4 10.6 21.5 12Q13.4 13.4 12 21.5Q10.6 13.4 2.5 12Q10.6 10.6 12 2.5Z"
  />,
];

function LogoItem({ name, index }: { name: string; index: number }) {
  return (
    <div className="flex items-center gap-3 text-navy-900/35 transition-colors duration-300 hover:text-royal-600">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        className="h-7 w-7 shrink-0"
      >
        {marks[index % marks.length]}
      </svg>
      <span className="whitespace-nowrap font-display text-lg font-semibold tracking-tight">
        {name}
      </span>
    </div>
  );
}

export function ClientLogos() {
  return (
    <section
      aria-label="Client logos"
      className="relative border-y border-navy-900/[0.07] bg-white py-12 md:py-14"
    >
      <p className="mx-auto w-full max-w-7xl px-6 text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-navy-900/40 lg:px-8">
        Trusted by teams across manufacturing, healthcare, IT, and more
      </p>

      {/* Infinite marquee — list rendered twice for a seamless loop */}
      <div className="relative mt-9 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-14 pr-14 hover:[animation-play-state:paused]">
          {clientLogos.map((logo, i) => (
            <LogoItem key={logo.id} name={logo.name} index={i} />
          ))}
          <div aria-hidden className="flex items-center gap-14">
            {clientLogos.map((logo, i) => (
              <LogoItem key={logo.id} name={logo.name} index={i} />
            ))}
          </div>
        </div>
      </div>

      <p className="mt-7 text-center text-[11px] text-navy-900/35">
        Representative placeholder logos — verified client marks will replace
        these.
      </p>
    </section>
  );
}
