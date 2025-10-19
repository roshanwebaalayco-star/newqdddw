import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, PhoneCall } from "lucide-react";
import { useState, useEffect } from "react";
import Logo from "@/components/Logo";
import { cn } from "@/lib/utils";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-white/5 transition-all duration-500",
        scrolled ? "bg-[#0c101d]/95 backdrop-blur-xl shadow-[0_20px_60px_-30px_rgba(0,0,0,0.65)]" : "bg-transparent",
      )}
    >
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="container mx-auto flex flex-col gap-4 px-4 py-4">
        <div className="hidden items-center justify-between text-xs uppercase tracking-[0.3em] text-white/50 lg:flex">
          <span>Retail environments crafted for modern founders</span>
          <span>Global delivery • Concept to launch</span>
        </div>
        <div className="flex items-center justify-between gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-lg lg:px-6">
            <Link
              href="/"
              data-testid="link-home"
              className="shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clc-accent/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070f]"
            >
              <Logo size="sm" />
            </Link>

          <nav
            className="hidden items-center gap-1 rounded-full border border-white/5 bg-white/5 px-2 py-1 text-sm font-medium uppercase tracking-[0.12em] text-white/70 lg:flex"
            role="navigation"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <Button
                  variant="ghost"
                  className={cn(
                    "rounded-full px-4 py-2 text-xs font-semibold text-white/70 transition-all hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-clc-accent/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
                    location === item.path &&
                      "bg-gradient-to-r from-primary/80 to-secondary/70 text-white shadow-[0_8px_24px_-12px_rgba(176,138,124,0.8)]",
                  )}
                  data-testid={`link-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden flex-col text-right text-xs leading-tight text-white/60 md:flex">
              <span className="uppercase tracking-[0.3em] text-white/40">Hotline</span>
              <a
                href="tel:+15551234567"
                className="font-heading text-sm text-white transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clc-accent/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070f]"
                data-testid="header-phone"
                aria-label="Call CLC Retail Group"
              >
                +1 (555) 123-4567
              </a>
            </div>
            <Link href="/contact">
              <Button
                variant="default"
                className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-primary via-primary/80 to-secondary px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_16px_45px_-25px_rgba(176,138,124,1)] md:inline-flex focus-visible:ring-2 focus-visible:ring-clc-accent/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                data-testid="button-cta-header"
              >
                <PhoneCall className="h-4 w-4" />
                Schedule a consultation
              </Button>
            </Link>

            <Button
              variant="ghost"
              size="icon"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clc-accent/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070f] md:hidden"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle mobile menu"
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav
            className="md:hidden space-y-2 rounded-3xl border border-white/10 bg-[#0f1222]/95 p-5 text-sm font-medium text-white shadow-[0_24px_60px_-25px_rgba(0,0,0,0.75)]"
            role="navigation"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-between rounded-2xl border border-transparent bg-white/5 px-4 py-3 text-left text-sm uppercase tracking-[0.18em] text-white/70 focus-visible:ring-2 focus-visible:ring-clc-accent/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1222]",
                    location === item.path && "border-white/20 bg-white/10 text-white",
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
            <Link href="/contact">
              <Button
                variant="default"
                className="w-full rounded-2xl bg-gradient-to-r from-primary via-primary/80 to-secondary py-3 uppercase tracking-[0.22em] focus-visible:ring-2 focus-visible:ring-clc-accent/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1222]"
                data-testid="button-cta-mobile"
              >
                Schedule a consultation
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
