import { useId } from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const SIZE_MAP: Record<NonNullable<LogoProps["size"]>, string> = {
  sm: "h-10 w-10",
  md: "h-12 w-12",
  lg: "h-16 w-16",
};

export default function Logo({ className = "", showText = true, size = "md" }: LogoProps) {
  const gradientId = useId();

  return (
    <div className={cn("group flex items-center gap-3", className)} data-testid="logo-container">
      <svg
        viewBox="0 0 64 64"
        role="img"
        aria-hidden={!showText}
        className={cn(
          "drop-shadow-[0_8px_18px_rgba(32,32,56,0.18)] transition-transform duration-300 group-hover:scale-105",
          SIZE_MAP[size ?? "md"],
        )}
        data-testid="logo-mark"
      >
        <defs>
          <linearGradient id={`${gradientId}-bg`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(20 80% 65%)" />
            <stop offset="50%" stopColor="hsl(20 90% 55%)" />
            <stop offset="100%" stopColor="hsl(220 70% 60%)" />
          </linearGradient>
          <linearGradient id={`${gradientId}-stroke`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0.85" />
            <stop offset="100%" stopColor="white" stopOpacity="1" />
          </linearGradient>
        </defs>
        <rect
          x="4"
          y="4"
          width="56"
          height="56"
          rx="18"
          fill={`url(#${gradientId}-bg)`}
        />
        <path
          d="M41 20a14.5 14.5 0 1 0 0 24"
          fill="none"
          stroke={`url(#${gradientId}-stroke)`}
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 32c0-4.418 3.134-8 7-8"
          fill="none"
          stroke="rgba(255,255,255,0.8)"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        <circle cx="44" cy="23" r="5" fill="rgba(255,255,255,0.24)" />
        <circle cx="44" cy="23" r="2.2" fill="white" />
      </svg>
      {showText && (
        <span
          className="hidden sm:flex flex-col leading-tight font-heading font-semibold"
          data-testid="logo-text"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground">CLC</span>
          <span className="text-xl sm:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary/80">
            Retail Group
          </span>
        </span>
      )}
    </div>
  );
}
