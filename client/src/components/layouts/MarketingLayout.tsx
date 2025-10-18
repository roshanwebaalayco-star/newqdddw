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
    <div className="relative min-h-screen bg-gradient-to-br from-background via-background/95 to-card text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full bg-gradient-to-br from-primary/40 via-primary/20 to-transparent blur-3xl" />
        <div className="absolute bottom-[-40%] left-[-20%] h-[520px] w-[520px] rounded-full bg-gradient-to-br from-secondary/30 via-secondary/10 to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.04),_rgba(0,0,0,0))]" />
      </div>

      <Header />

      <main className={cn("relative z-10 flex-1 pt-24 pb-16", mainClassName)}>{children}</main>

      <Footer />
      <BackToTop />
      {showStickyCta && <StickyCTA />}
    </div>
  );
}
