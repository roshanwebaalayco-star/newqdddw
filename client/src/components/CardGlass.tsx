import { cn } from "@/lib/utils";
import type { HTMLAttributes, PropsWithChildren } from "react";

export type CardGlassProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

export function CardGlass({ children, className, ...props }: CardGlassProps) {
  return (
    <div
      className={cn(
        "card-glass rounded-2xl border border-white/10 bg-white/5 text-white shadow-[0_18px_45px_-30px_rgba(0,0,0,0.75)]",
        "focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-clc-accent/70 focus-within:ring-offset-[#0c101d]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
