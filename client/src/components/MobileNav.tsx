import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

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
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />
      <nav
        role="dialog"
        aria-modal="true"
        aria-label="Main navigation"
        className="absolute right-0 top-0 h-full w-[88%] max-w-[320px] overflow-y-auto border-l border-white/10 bg-[#0b0d16] p-6 shadow-[0_24px_80px_-30px_rgba(0,0,0,0.95)] focus:outline-none focus-visible:ring-2 focus-visible:ring-clc-accent/80"
      >
        <div className="mb-8 flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">Menu</p>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-10 w-10 rounded-full border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <ul className="grid gap-3">
          {items.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                onClick={onClose}
              >
                <span
                  className={cn(
                    "block min-h-[48px] cursor-pointer rounded-xl border border-white/5 bg-white/5 px-6 py-3.5 text-sm font-medium uppercase tracking-[0.16em] text-white/60 transition-all hover:bg-white/10 hover:text-white active:scale-[0.98]",
                    currentPath === item.path && "border-primary/30 bg-primary/10 text-white",
                  )}
                  data-testid={`link-mobile-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
          <li className="mt-4">
            <Link
              href="/contact#schedule"
              onClick={onClose}
            >
              <span
                className="block min-h-[48px] cursor-pointer whitespace-nowrap rounded-xl bg-gradient-to-r from-primary via-primary/80 to-secondary px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.2em] text-white shadow-lg transition-all hover:brightness-110 active:scale-[0.98]"
                data-testid="button-cta-mobile"
              >
                Book site survey
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
