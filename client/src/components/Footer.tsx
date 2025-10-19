import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";

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
    <footer className="relative mt-20 overflow-hidden border-t border-white/10 bg-gradient-to-b from-[#090c16] via-[#10172b] to-[#0c1222] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(120,132,255,0.2),transparent_60%)]" />
      <div className="relative">
        <div className="container mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div className="space-y-6">
              <Logo size="lg" stack="vertical" />
              <p className="max-w-sm text-sm leading-relaxed text-slate-200">
                We partner with founders, franchise operators, and private equity teams to deliver concept stores that feel instinctively premium and operationally sharp.
              </p>
              <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.35em] text-slate-300">
                <span>London</span>
                <span>New York</span>
                <span>Dubai</span>
              </div>
            </div>

            <div className="space-y-5">
              <h3 className="font-heading text-sm uppercase tracking-[0.4em] text-slate-300">Navigation</h3>
              <ul className="grid grid-cols-2 gap-3 text-sm text-slate-200">
                {navigationLinks.map((link) => (
                  <li key={link.path}>
                    <Link href={link.path}>
                      <span
                        className="inline-flex items-center gap-2 rounded-full px-2 py-1 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clc-accent/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#10172b]"
                        data-testid={`link-footer-${link.name.toLowerCase()}`}
                      >
                        <span className="h-px w-4 bg-white/40" />
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="space-y-3 pt-6">
                <h4 className="font-heading text-sm uppercase tracking-[0.4em] text-slate-300">Follow</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-slate-200 transition hover:border-white/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clc-accent/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#10172b]"
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

            <div className="space-y-6 rounded-3xl border border-white/15 bg-gradient-to-br from-[#111a2f]/95 via-[#141f36]/95 to-[#1a2743]/95 p-8 shadow-[0_36px_120px_-70px_rgba(15,23,42,1)]">
              <h3 className="font-heading text-lg font-semibold">Let’s build your next location</h3>
              <p className="text-sm leading-relaxed text-slate-200">
                Connect with our studio for an immersive workshop and tailored roadmap.
              </p>
              <div className="space-y-4 text-sm text-slate-200">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-white" />
                  <a
                    href="tel:+15551234567"
                    aria-label="Call CLC Retail Group"
                    className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clc-accent/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#141f36]"
                    data-testid="text-phone"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-white" />
                  <a
                    href="mailto:studio@clcretailgroup.com"
                    aria-label="Email CLC Retail Group"
                    className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clc-accent/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#141f36]"
                    data-testid="text-email"
                  >
                    studio@clcretailgroup.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-4 w-4 text-white" />
                  <a
                    href="https://maps.google.com/?q=123+Business+Ave,+Suite+100,+New+York,+NY+10001"
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clc-accent/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#141f36]"
                    aria-label="Open map to 123 Business Ave, Suite 100, New York, NY"
                    data-testid="text-address"
                  >
                    123 Business Ave, Suite 100
                    <br />
                    New York, NY 10001
                  </a>
                </div>
              </div>
              <Link href="/contact#schedule">
                <Button
                  className="w-full whitespace-nowrap rounded-full bg-gradient-to-r from-primary via-primary/80 to-secondary py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white focus-visible:ring-2 focus-visible:ring-clc-accent/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#141f36]"
                  data-testid="button-footer-cta"
                  data-analytics="cta-schedule"
                >
                  Schedule a consultation
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-14 grid gap-4 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.4em] text-slate-300 sm:grid-cols-2">
            <p data-testid="text-copyright">© {currentYear} CLC Retail Group. All rights reserved.</p>
            <p className="text-right text-slate-400 sm:text-left">Crafted for ambitious retail founders.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
