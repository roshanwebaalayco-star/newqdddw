import HeroSection from "@/components/HeroSection";
import EnhancedContactForm from "@/components/EnhancedContactForm";
import AnimatedSection from "@/components/AnimatedSection";
import MarketingLayout from "@/components/layouts/MarketingLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";

const contactHeroImage = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=2000&q=80";

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "(555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@clcretailgroup.com",
      link: "mailto:info@clcretailgroup.com",
    },
    {
      icon: MapPin,
      title: "Address",
      content: "123 Business Ave, Suite 100, New York, NY 10001",
      link: "https://maps.google.com/?q=123+Business+Ave+New+York+NY",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday - Friday: 9:00 AM - 6:00 PM",
      link: null,
    },
  ];

  return (
    <MarketingLayout>
      <HeroSection
        eyebrow="We’re ready when you are"
        title="Let's map your next retail milestone"
        subtitle="Talk directly with our expansion strategists about timelines, locations, and what launch support looks like for your concept."
        ctaText="Book a consultation"
        ctaLink="/contact"
        secondaryCtaText="See service menu"
        secondaryCtaLink="/services"
        backgroundImage={contactHeroImage}
      />

      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <EnhancedContactForm />

              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="font-heading text-3xl font-semibold sm:text-4xl">Talk with a retail partner</h2>
                  <p className="text-base text-muted-foreground">
                    Have questions about locations, capital, or operational readiness? We’ll co-create a plan aligned to your goals and plug you into our vetted vendor network.
                  </p>
                </div>

                <div className="grid gap-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    const content = info.link ? (
                      <a
                        href={info.link}
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                        target={info.link.startsWith("http") ? "_blank" : undefined}
                        rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        data-testid={`link-contact-${index}`}
                      >
                        {info.content}
                        {info.link.startsWith("http") ? <ExternalLink className="h-3.5 w-3.5" /> : null}
                      </a>
                    ) : (
                      <span className="text-sm text-muted-foreground" data-testid={`text-contact-${index}`}>
                        {info.content}
                      </span>
                    );

                    return (
                      <Card
                        key={index}
                        className="border border-border/60 bg-card/80 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                        data-testid={`card-contact-info-${index}`}
                      >
                        <CardContent className="flex items-start gap-4 p-5">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-heading text-base font-semibold">{info.title}</h3>
                            {content}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                <Card className="overflow-hidden border border-border/60">
                  <CardContent className="p-0">
                    <div className="aspect-video">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841794555!2d-73.98823492346564!3d40.75797113522477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1704297600000!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="CLC Retail Group Location"
                        data-testid="map-location"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </MarketingLayout>
  );
}
