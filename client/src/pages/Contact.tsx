import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import EnhancedContactForm from "@/components/EnhancedContactForm";
import BackToTop from "@/components/BackToTop";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

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
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16">
        <HeroSection
          title="Let's Start a Conversation"
          subtitle="We're here to answer your questions and help you take the first step toward your business dreams."
        />

        <AnimatedSection>
          <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <EnhancedContactForm />
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="font-heading font-bold text-2xl sm:text-3xl mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Have questions about our services or ready to start your entrepreneurial journey? Our team is here to help you every step of the way.
                  </p>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    const content = info.link ? (
                      <a
                        href={info.link}
                        className="text-primary hover:underline"
                        target={info.link.startsWith("http") ? "_blank" : undefined}
                        rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        data-testid={`link-contact-${index}`}
                      >
                        {info.content}
                      </a>
                    ) : (
                      <span data-testid={`text-contact-${index}`}>{info.content}</span>
                    );

                    return (
                      <Card key={index} className="hover-elevate transition-all" data-testid={`card-contact-info-${index}`}>
                        <CardContent className="flex items-start gap-4 p-4">
                          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 flex-shrink-0">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-heading font-semibold mb-1">{info.title}</h3>
                            <div className="text-sm text-muted-foreground">{content}</div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                <Card className="glass-lg border-0 overflow-hidden">
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
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
