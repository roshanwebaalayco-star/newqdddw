import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/components/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "#" },
    { name: "Twitter", icon: Twitter, url: "#" },
    { name: "LinkedIn", icon: Linkedin, url: "#" },
    { name: "Instagram", icon: Instagram, url: "#" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-border/60 bg-card/70 backdrop-blur">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_rgba(0,0,0,0))]" />
      <div className="container relative mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo size="lg" />
            <p className="max-w-sm text-sm text-muted-foreground">
              We partner with founders and franchise operators to design, launch, and scale retail experiences that feel effortlessly modern.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground">Navigation</h3>
            <ul className="mt-4 space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path}>
                    <span
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      data-testid={`link-footer-${link.name.toLowerCase()}`}
                    >
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground">Contact Info</h3>
            <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <span data-testid="text-phone">(555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <span data-testid="text-email">info@clcretailgroup.com</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span data-testid="text-address">
                  123 Business Ave, Suite 100
                  <br />
                  New York, NY 10001
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground">Follow Us</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Join the community for launch announcements, retail insights, and event invitations.
            </p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-foreground transition-colors hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white"
                    aria-label={social.name}
                    data-testid={`link-social-${social.name.toLowerCase()}`}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 text-center text-sm text-muted-foreground md:flex-row">
          <p data-testid="text-copyright">© {currentYear} CLC Retail Group. All rights reserved.</p>
          <p className="text-xs">Crafted with partnership, performance, and purpose.</p>
        </div>
      </div>
    </footer>
  );
}
