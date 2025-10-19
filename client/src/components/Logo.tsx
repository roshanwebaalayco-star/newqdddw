import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  stack?: "horizontal" | "vertical";
}

const SIZE_MAP: Record<NonNullable<LogoProps["size"]>, string> = {
  sm: "h-12 w-12",
  md: "h-14 w-14",
  lg: "h-20 w-20",
};

export default function Logo({
  className = "",
  showText = true,
  size = "md",
  stack = "horizontal",
}: LogoProps) {
  return (
    <div
      className={cn(
        "group flex items-center gap-3 text-white",
        stack === "vertical" && "flex-col items-start gap-4",
        className,
      )}
      data-testid="logo-container"
      aria-label={!showText ? "CLC Retail Group" : undefined}
    >
      <div
        className={cn(
          "relative isolate aspect-square overflow-hidden rounded-3xl border border-white/25 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.9),rgba(8,11,18,0.85))] shadow-[0_22px_40px_-20px_rgba(12,12,18,0.7)] transition-transform duration-300 group-hover:scale-[1.03]",
          SIZE_MAP[size ?? "md"],
        )}
        data-testid="logo-mark"
      >
        <img
          src="/logo.svg"
          alt="CLC Retail Group logo"
          className="h-full w-full object-contain"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.35),rgba(255,255,255,0)_60%),linear-gradient(160deg,rgba(148,163,255,0.18),rgba(15,23,42,0.5))] opacity-80" />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/20" />
      </div>
      {showText && (
        <span
          className={cn(
            "flex flex-col font-heading font-semibold leading-tight text-white",
            stack === "horizontal" ? "hidden sm:flex" : "",
          )}
          data-testid="logo-text"
        >
          <span className="text-xs uppercase tracking-[0.5em] text-white/70">CLC</span>
          <span className="text-xl sm:text-2xl text-white">Retail Group</span>
        </span>
      )}
    </div>
  );
}
