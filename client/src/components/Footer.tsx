import { Link } from "wouter";
import { SiLinkedin, SiX, SiInstagram, SiFacebook } from "react-icons/si";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Facebook", icon: SiFacebook, url: "#" },
    { name: "Twitter", icon: SiX, url: "#" },
    { name: "LinkedIn", icon: SiLinkedin, url: "#" },
    { name: "Instagram", icon: SiInstagram, url: "#" },
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
                UK expertise; end-to-end delivery; lender and investor-ready documentation.
              </p>
            </div>

            <div className="space-y-5">
              <h3 className="font-heading text-sm uppercase tracking-[0.4em] text-slate-300">Navigation</h3>
              <ul className="grid grid-cols-1 gap-3 text-sm text-slate-200">
                <li><Link href="/" className="transition hover:text-white">Home</Link></li>
                <li><Link href="/about" className="transition hover:text-white">About</Link></li>
                <li><Link href="/services" className="transition hover:text-white">Services</Link></li>
                <li><Link href="/blog" className="transition hover:text-white">Blog</Link></li>
                <li><Link href="/contact" className="transition hover:text-white">Contact</Link></li>
              </ul>

              <div className="space-y-3 pt-6">
                <h4 className="font-heading text-sm uppercase tracking-[0.4em] text-slate-300">Follow Us</h4>
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
              <h3 className="font-heading text-lg font-semibold">Contact Information</h3>
              <div className="space-y-4 text-sm text-slate-200">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-white" />
                  <a
                    href="tel:01925967366"
                    className="transition hover:text-white"
                    data-testid="text-phone"
                  >
                    01925 967366
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-white" />
                  <a
                    href="mailto:hello@clcretail.com"
                    className="transition hover:text-white"
                    data-testid="text-email"
                  >
                    hello@clcretail.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-4 w-4 text-white" />
                  <span data-testid="text-address">
                    Suite A, 82 James Carter Road,<br />
                    Mildenhall, IP28 7DE, UK
                  </span>
                </div>
              </div>
              <Link href="/contact#schedule">
                <Button
                  asChild
                  className="w-full whitespace-nowrap rounded-full bg-gradient-to-r from-primary via-primary/80 to-secondary py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white cursor-pointer sm:text-xs sm:tracking-[0.3em]"
                  data-testid="button-footer-cta"
                >
                  <div className="flex items-center justify-center w-full h-full px-2">Book a free site survey</div>
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-14 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.4em] text-slate-300">
            <p data-testid="text-copyright">© {currentYear} CLC Retail LTD. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
