import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "bg-background/50 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-2 hover-elevate rounded-md px-3 py-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary">
                <span className="text-primary-foreground font-heading font-bold text-xl">
                  CLC
                </span>
              </div>
              <span className="font-heading font-bold text-xl hidden sm:block">
                CLC Retail Group
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <Button
                  variant="ghost"
                  className={location === item.path ? "bg-accent" : ""}
                  data-testid={`link-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/contact">
              <Button variant="default" className="hidden md:flex" data-testid="button-cta-header">
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
          <nav className="md:hidden mt-4 pb-4 space-y-2" role="navigation" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${location === item.path ? "bg-accent" : ""}`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
            <Link href="/contact">
              <Button variant="default" className="w-full" data-testid="button-cta-mobile">
                Start Your Business
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
