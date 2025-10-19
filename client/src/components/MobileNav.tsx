import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  items: Array<{ name: string; path: string; active: boolean }>;
  currentPath: string;
}

export function MobileNav({ open, onClose, items, currentPath }: MobileNavProps) {
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    if (open) {
      scrollPositionRef.current = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${scrollPositionRef.current}px`;

      return () => {
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.width = "";
        document.body.style.top = "";
        window.scrollTo(0, scrollPositionRef.current);
      };
    }
  }, [open]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] md:hidden">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <nav
        role="dialog"
        aria-modal="true"
        aria-label="Main navigation"
        className="absolute right-0 top-0 h-full w-[88%] max-w-sm overflow-y-auto rounded-l-3xl border border-white/10 bg-[#0f1222]/98 p-6 shadow-[0_24px_80px_-30px_rgba(0,0,0,0.85)] focus:outline-none focus-visible:ring-2 focus-visible:ring-clc-accent/80"
      >
        <ul className="grid gap-3">
          {items.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                onClick={onClose}
              >
                <span
                  className={cn(
                    "block min-h-[44px] rounded-[2rem] border border-transparent bg-white/6 px-6 py-4 text-base uppercase tracking-[0.16em] text-white/70 transition-colors hover:bg-white/10 active:bg-white/14 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clc-accent/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1222]",
                    currentPath === item.path && "border-white/20 bg-white/10 text-white",
                  )}
                  data-testid={`link-mobile-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact#schedule"
              onClick={onClose}
            >
              <span
                className="block min-h-[44px] whitespace-nowrap rounded-[2rem] bg-gradient-to-r from-primary to-secondary px-6 py-4 text-center text-base uppercase tracking-[0.18em] text-white shadow-[0_10px_30px_rgba(0,0,0,.25)] transition-transform hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clc-accent/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1222]"
                data-testid="button-cta-mobile"
                data-analytics="cta-schedule"
              >
                Schedule a consultation
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
