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
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#060914] via-[#0f172a] to-[#121c33] text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(120,132,255,0.18),_transparent_62%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(176,138,124,0.18)_0%,rgba(12,16,32,0)_42%)]" />
        <div
          className="absolute inset-0 opacity-50 mix-blend-soft-light"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.14) 0.6px, transparent 0)",
            backgroundSize: "88px 88px",
          }}
        />
      </div>
      <Header />

      <main className={cn("relative z-10 flex-1 pt-32 pb-20", mainClassName)}>{children}</main>

      <Footer />
      <BackToTop />
      {showStickyCta && <StickyCTA />}
    </div>
  );
}
