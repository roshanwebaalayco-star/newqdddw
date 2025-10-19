import { type ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import StickyCTA from "@/components/StickyCTA";
import { cn } from "@/lib/utils";

interface MarketingLayoutProps {
  children: ReactNode;
  showStickyCta?: boolean;
  mainClassName?: string;
}

export default function MarketingLayout({
  children,
  showStickyCta = false,
  mainClassName,
}: MarketingLayoutProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05070f] text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#05070f]"
      >
        Skip to content
      </a>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(120,132,255,0.16),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(176,138,124,0.22)_0%,rgba(12,16,32,0)_55%)]" />
        <div
          className="absolute inset-0 opacity-40 mix-blend-soft-light"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.14) 0.6px, transparent 0)",
            backgroundSize: "88px 88px",
          }}
        />
      </div>
      <Header />

      <main id="main-content" className={cn("relative z-10 flex-1 pt-32 pb-20", mainClassName)}>
        {children}
      </main>

      <Footer />
      <BackToTop />
      {showStickyCta && <StickyCTA />}
    </div>
  );
}
