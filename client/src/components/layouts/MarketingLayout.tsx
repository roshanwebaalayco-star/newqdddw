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
    <div className="relative min-h-screen overflow-hidden bg-[#0b0d16] text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_35%)]" />
        <div className="absolute inset-0 opacity-40 mix-blend-overlay" style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 0.5px, transparent 0)",
          backgroundSize: "80px 80px",
        }} />
      </div>
      <Header />

      <main className={cn("relative z-10 flex-1 pt-32 pb-20", mainClassName)}>{children}</main>

      <Footer />
      <BackToTop />
      {showStickyCta && <StickyCTA />}
    </div>
  );
}
