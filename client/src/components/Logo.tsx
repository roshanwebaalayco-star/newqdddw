import { useId } from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  stack?: "horizontal" | "vertical";
}

const SIZE_MAP: Record<NonNullable<LogoProps["size"]>, string> = {
  sm: "h-10 w-10",
  md: "h-12 w-12",
  lg: "h-16 w-16",
};

export default function Logo({ className = "", showText = true, size = "md", stack = "horizontal" }: LogoProps) {
  const gradientId = useId();

  return (
    <div
      className={cn(
        "group flex items-center gap-3 text-white",
        stack === "vertical" && "flex-col items-start gap-2",
        className,
      )}
      data-testid="logo-container"
    >
      <svg
        viewBox="0 0 64 64"
        role="img"
        aria-hidden={!showText}
        className={cn(
          "rounded-2xl shadow-[0_18px_40px_-18px_rgba(16,16,24,0.5)] transition-transform duration-300 group-hover:scale-105",
          SIZE_MAP[size ?? "md"],
        )}
        data-testid="logo-mark"
      >
        <defs>
          <radialGradient id={`${gradientId}-halo`} cx="50%" cy="40%" r="70%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.22)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
          <linearGradient id={`${gradientId}-surface`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(26 68% 66%)" />
            <stop offset="55%" stopColor="hsl(20 62% 58%)" />
            <stop offset="100%" stopColor="hsl(230 35% 42%)" />
          </linearGradient>
          <linearGradient id={`${gradientId}-stroke`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.7)" />
          </linearGradient>
          <linearGradient id={`${gradientId}-accent`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(32 72% 72%)" />
            <stop offset="100%" stopColor="hsl(13 73% 60%)" />
          </linearGradient>
        </defs>
        <rect x="4" y="4" width="56" height="56" rx="18" fill={`url(#${gradientId}-surface)`} />
        <rect
          x="8"
          y="8"
          width="48"
          height="48"
          rx="16"
          fill={`url(#${gradientId}-halo)`}
        />
        <path
          d="M46 18c-3.6-4.4-9-7-15-7-11.598 0-21 9.402-21 21s9.402 21 21 21c6.04 0 11.36-2.54 15-6.6"
          fill="none"
          stroke={`url(#${gradientId}-stroke)`}
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        <path
          d="M22 32c0-5.6 4.4-10 10-10 4 0 6.8 1.8 9 5.2"
          fill="none"
          stroke={`url(#${gradientId}-accent)`}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M32 22v20"
          stroke="rgba(255,255,255,0.65)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <circle cx="46" cy="23" r="4.2" fill="rgba(255,255,255,0.2)" />
        <circle cx="46" cy="23" r="2" fill="white" />
      </svg>
      {showText && (
        <span
          className={cn(
            "flex flex-col font-heading font-semibold leading-tight text-white",
            stack === "horizontal" ? "hidden sm:flex" : "",
          )}
          data-testid="logo-text"
        >
          <span className="text-xs uppercase tracking-[0.5em] text-white/60">CLC</span>
          <span className="text-xl sm:text-2xl text-white">Retail Group</span>
        </span>
      )}
    </div>
  );
}
