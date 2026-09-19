import { cn } from "@/lib/utils";

/** Consulthive hive-mark: nested hexagons — structure within structure. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-navy-900 via-navy-800 to-royal-700 shadow-soft",
        className
      )}
      aria-hidden
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="h-5 w-5 text-white"
      >
        <path d="M12 2.6l7.7 4.45v8.9L12 20.4l-7.7-4.45v-8.9L12 2.6z" />
        <path
          d="M12 8.1l3.35 1.93v3.87L12 15.83l-3.35-1.93v-3.87L12 8.1z"
          fill="currentColor"
          stroke="none"
          opacity="0.92"
        />
      </svg>
    </span>
  );
}

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[19px] font-bold tracking-tight",
            dark ? "text-white" : "text-ink"
          )}
        >
          Consulthive<span className="text-electric-500">.</span>
        </span>
        <span
          className={cn(
            "mt-1 text-[9px] font-semibold uppercase tracking-[0.28em]",
            dark ? "text-white/45" : "text-navy-900/45"
          )}
        >
          Standards · People · Progress
        </span>
      </span>
    </span>
  );
}
