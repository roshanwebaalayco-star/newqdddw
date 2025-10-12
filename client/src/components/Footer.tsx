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
    <footer className="bg-card border-t border-card-border">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary">
                <span className="text-primary-foreground font-heading font-bold text-xl">
                  CLC
                </span>
              </div>
              <span className="font-heading font-bold text-lg">CLC Retail Group</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Empowering individuals to achieve their business goals through expert guidance and complete retail solutions.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path}>
                    <span className="text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer" data-testid={`link-footer-${link.name.toLowerCase()}`}>
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground" data-testid="text-phone">(555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground" data-testid="text-email">info@clcretailgroup.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground" data-testid="text-address">
                  123 Business Ave, Suite 100<br />
                  New York, NY 10001
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className="flex items-center justify-center w-9 h-9 rounded-md bg-secondary hover-elevate active-elevate-2"
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

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm" data-testid="text-copyright">
            © {currentYear} CLC Retail Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
