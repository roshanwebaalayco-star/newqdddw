import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TrustGrid from "@/components/TrustGrid";
import ServicesPreview from "@/components/ServicesPreview";
import BackToTop from "@/components/BackToTop";
import StickyCTA from "@/components/StickyCTA";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Handshake, Lightbulb, Package, Store, MapPin, Megaphone } from "lucide-react";

const heroImage = "https://images.unsplash.com/photo-1753161618091-b4cf35b9aa99?w=1920&q=80";

export default function Home() {
  const trustItems = [
    {
      title: "Partnership",
      description: "We are not just a company; we are your dedicated partners committed to your success.",
      icon: Handshake,
    },
    {
      title: "Expertise",
      description: "Benefit from our years of experience and expert guidance in the retail industry.",
      icon: Lightbulb,
    },
    {
      title: "Complete Solution",
      description: "From site selection to supplier management, we provide a full-service solution to get you started.",
      icon: Package,
    },
  ];

  const services = [
    {
      title: "Franchise Opportunities",
      description: "We match you with a proven franchise model that fits your goals and market demands.",
      icon: Store,
    },
    {
      title: "Site Selection & Setup",
      description: "Our experts help you find the perfect location and manage the entire store setup process, from design to grand opening.",
      icon: MapPin,
    },
    {
      title: "Inventory & Supplier Management",
      description: "We connect you with trusted suppliers and provide a system for managing your inventory efficiently.",
      icon: Package,
    },
    {
      title: "Marketing & Branding",
      description: "We help you build a strong local brand and reach your target customers effectively.",
      icon: Megaphone,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Owner",
      company: "Fresh Market Grocery",
      content: "CLC Retail Group transformed my dream into reality. Their expert guidance through site selection, setup, and operations made launching my store seamless. I couldn't have asked for a better partner.",
    },
    {
      name: "Michael Chen",
      role: "Franchise Owner",
      company: "Tech Gadgets Plus",
      content: "The comprehensive support from CLC was invaluable. From inventory management to marketing strategies, they covered every aspect. My business has exceeded all expectations in just the first year.",
    },
    {
      name: "Emily Rodriguez",
      role: "Entrepreneur",
      company: "Style Haven Boutique",
      content: "Working with CLC gave me the confidence to start my retail business. Their team's expertise and hands-on approach made all the difference. I'm now running a thriving boutique thanks to their support.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16">
        <HeroSection
          title="Your Dream, Our Partnership: Start a Successful Business Today"
          subtitle="Ready to run your own business? CLC Retail Group provides the support, resources, and expert guidance you need to open a profitable retail business."
          ctaText="Start Your Journey Today"
          ctaLink="/services"
          backgroundImage={heroImage}
          overlay={true}
        />

        <AnimatedSection>
          <TrustGrid items={trustItems} />
        </AnimatedSection>

        <AnimatedSection>
          <div className="container mx-auto px-4 max-w-5xl py-16">
            <TestimonialsSlider testimonials={testimonials} />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <ServicesPreview services={services} />
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <section className="py-16 sm:py-20 bg-gradient-to-b from-background to-card">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h3 className="font-heading font-bold text-3xl sm:text-4xl mb-6">
              Ready to Take Control of Your Future?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Join hundreds of successful entrepreneurs who have transformed their dreams into thriving businesses with our expert guidance.
            </p>
            <Link href="/contact">
              <Button size="lg" className="text-base px-8" data-testid="button-cta-bottom">
                Connect with Our Team
              </Button>
            </Link>
          </div>
        </section>
        </AnimatedSection>
      </main>

      <Footer />
      <BackToTop />
      <StickyCTA />
    </div>
  );
}
