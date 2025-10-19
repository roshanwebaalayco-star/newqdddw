import HeroSection from "@/components/HeroSection";
import EnhancedContactForm from "@/components/EnhancedContactForm";
import AnimatedSection from "@/components/AnimatedSection";
import MarketingLayout from "@/components/layouts/MarketingLayout";
import { CardGlass } from "@/components/CardGlass";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, CalendarClock, ShieldCheck } from "lucide-react";
import { Seo } from "@/components/Seo";
import { SchedulerEmbed } from "@/components/SchedulerEmbed";

const contactHeroImage = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=2000&q=80&fm=webp";
const baseUrl = "https://clcretailgroup.com";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: "+1 (555) 123-4567",
    link: "tel:+15551234567",
  },
  {
    icon: Mail,
    title: "Email",
    content: "studio@clcretailgroup.com",
    link: "mailto:studio@clcretailgroup.com",
  },
  {
    icon: MapPin,
    title: "Studio hubs",
    content: "London • New York • Dubai",
    link: "https://maps.google.com/?q=123+Business+Ave,+New+York,+NY+10001",
  },
  {
    icon: Clock,
    title: "Response window",
    content: "We reply within one business day",
    link: null,
  },
];

export default function Contact() {
  return (
    <MarketingLayout>
      <Seo
        title="Contact CLC Retail Group | Schedule a retail launch consultation"
        description="Speak with CLC Retail Group’s launch strategists about your timeline, site search, supplier needs, or marketing plan."
        canonical={`${baseUrl}/contact`}
        ogImage={contactHeroImage}
        jsonLd={[
          {
            type: "BreadcrumbList",
            data: {
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
                { "@type": "ListItem", position: 2, name: "Contact", item: `${baseUrl}/contact` },
              ],
            },
          },
          {
            type: "LocalBusiness",
            data: {
              name: "CLC Retail Group",
              url: `${baseUrl}/`,
              telephone: "+1-555-123-4567",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Business Ave, Suite 100",
                addressLocality: "New York",
                addressRegion: "NY",
                postalCode: "10001",
                addressCountry: "USA",
              },
              openingHours: "Mo-Fr 09:00-18:00",
            },
          },
        ]}
      />

      <HeroSection
        eyebrow="We’re ready when you are"
        title="Let's map your next retail milestone"
        subtitle="Talk directly with our expansion strategists about timelines, locations, and what launch support looks like for your concept."
        ctaText="Schedule a consultation"
        ctaLink="/contact#schedule"
        secondaryCtaText="Explore our services"
        secondaryCtaLink="/services"
        backgroundImage={contactHeroImage}
      />

      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-8">
                <CardGlass className="p-8 text-white">
                  <Badge className="border border-white/25 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70">
                    What to expect
                  </Badge>
                  <h2 className="mt-4 font-heading text-3xl">Your first conversation</h2>
                  <ul className="mt-6 space-y-4 text-white/80">
                    <li className="flex items-start gap-3">
                      <CalendarClock className="mt-1 h-5 w-5 text-primary" />
                      <span>15-minute fit check to align on goals, timeline, and current readiness.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ShieldCheck className="mt-1 h-5 w-5 text-primary" />
                      <span>We sign NDAs on request and keep your concept details confidential.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="mt-1 h-5 w-5 text-primary" />
                      <span>Expect a detailed follow-up within one business day summarizing next steps.</span>
                    </li>
                  </ul>
                </CardGlass>

                <EnhancedContactForm />
              </div>

              <div className="space-y-10 text-white">
                <section id="schedule" className="space-y-6">
                  <div className="space-y-3">
                    <Badge className="border border-white/25 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70">
                      Schedule
                    </Badge>
                    <h2 className="font-heading text-3xl">Schedule a consultation</h2>
                    <p className="max-w-2xl text-white/80">
                      Pick a time that works for you. You’ll receive a calendar invite immediately along with a prep checklist tailored to your retail concept.
                    </p>
                  </div>
                  <SchedulerEmbed />
                </section>

                <CardGlass className="p-8">
                  <h3 className="font-heading text-2xl">Where we work</h3>
                  <p className="mt-3 text-white/75">
                    We support launches across North America, the UK, and the Gulf Cooperation Council. Our specialists travel to key markets and coordinate trusted vendor networks locally.
                  </p>
                  <p className="mt-4 text-white/75">
                    Headquarters: 123 Business Ave, Suite 100, New York, NY 10001. Satellite teams in London and Dubai ensure round-the-clock coverage for international programs.
                  </p>
                </CardGlass>

                <CardGlass className="p-8">
                  <h3 className="font-heading text-2xl">Privacy & respect</h3>
                  <p className="mt-3 text-white/75">
                    We only use your information to plan the conversation you request. Data is stored securely, never sold, and handled in accordance with our <a href="/privacy" className="underline hover:text-white">privacy policy</a>.
                  </p>
                </CardGlass>

                <div className="grid gap-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    const content = info.link ? (
                      <a
                        href={info.link}
                        className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-primary"
                        target={info.link.startsWith("http") ? "_blank" : undefined}
                        rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        data-testid={`link-contact-${index}`}
                      >
                        {info.content}
                      </a>
                    ) : (
                      <span className="text-sm text-white/75" data-testid={`text-contact-${index}`}>
                        {info.content}
                      </span>
                    );

                    return (
                      <CardGlass key={info.title} className="flex items-start gap-4 p-5">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-heading text-base font-semibold text-white">{info.title}</h3>
                          {content}
                        </div>
                      </CardGlass>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </MarketingLayout>
  );
}
