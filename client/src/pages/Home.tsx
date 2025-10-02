import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TrustGrid from "@/components/TrustGrid";
import ServicesPreview from "@/components/ServicesPreview";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Handshake, Lightbulb, Package, Store, MapPin, Megaphone } from "lucide-react";
import heroImage from "@assets/generated_images/Modern_retail_store_management_1c208bea.png";

export default function Home() {
  const trustItems = [
    {
      title: "Partnership",
      description: "We build lasting relationships with our clients, working together every step of the way to ensure your success.",
      icon: Handshake,
    },
    {
      title: "Expertise",
      description: "Our team brings decades of retail industry experience to help you make informed decisions and avoid common pitfalls.",
      icon: Lightbulb,
    },
    {
      title: "Complete Solution",
      description: "From site selection to grand opening, we provide everything you need to launch and grow your retail business.",
      icon: Package,
    },
  ];

  const services = [
    {
      title: "Franchise Opportunities",
      description: "Explore proven business models with established brand recognition and comprehensive support systems.",
      icon: Store,
    },
    {
      title: "Site Selection & Setup",
      description: "Expert location analysis and complete store setup services to ensure your business starts on the right foot.",
      icon: MapPin,
    },
    {
      title: "Marketing & Branding",
      description: "Complete marketing solutions to build your brand and attract customers from day one.",
      icon: Megaphone,
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

        <TrustGrid items={trustItems} />

        <ServicesPreview services={services} />

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
      </main>

      <Footer />
    </div>
  );
}
