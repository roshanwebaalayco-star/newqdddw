import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Logo from "@/components/Logo";
import { cn } from "@/lib/utils";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border/60 transition-all duration-300 ${
        scrolled
          ? "bg-card/90 shadow-[0_10px_30px_-12px_rgba(20,20,40,0.35)] backdrop-blur-xl"
          : "bg-background/70 backdrop-blur-xl"
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between py-3">
          <Link href="/" data-testid="link-home">
            <div className="rounded-xl px-2 py-1 transition-transform duration-300 hover:scale-[1.02]">
              <Logo />
            </div>
          </Link>

          <nav
            className="hidden md:flex items-center gap-1 rounded-full bg-card/60 px-2 py-1 backdrop-blur"
            role="navigation"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <Button
                  variant="ghost"
                  className={cn(
                    "rounded-full px-4 font-medium text-sm transition-colors",
                    location === item.path
                      ? "bg-gradient-to-r from-primary/90 to-secondary/80 text-white shadow-sm"
                      : "text-foreground/80 hover:text-foreground",
                  )}
                  data-testid={`link-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/contact">
              <Button
                variant="default"
                className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-5 shadow-lg shadow-primary/20"
                data-testid="button-cta-header"
              >
                Start Your Business
              </Button>
            </Link>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav
            className="md:hidden mt-3 pb-4 space-y-2 rounded-2xl border border-border/60 bg-card/95 p-4 shadow-lg"
            role="navigation"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start rounded-xl text-base",
                    location === item.path
                      ? "bg-gradient-to-r from-primary/90 to-secondary/80 text-white"
                      : "text-foreground/80",
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
                className="w-full rounded-xl bg-gradient-to-r from-primary to-secondary shadow-md"
                data-testid="button-cta-mobile"
              >
                Start Your Business
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
