import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import BackToTop from "@/components/BackToTop";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Store, MapPin, Package, Megaphone } from "lucide-react";
const servicesImage = "https://images.unsplash.com/photo-1681505526188-b05e68c77582?w=1920&q=80";

export default function Services() {
  const services = [
    {
      title: "Franchise Opportunities",
      description: "We match you with a proven franchise model that fits your goals and market demands.",
      icon: Store,
      features: [
        "Access to top-performing franchise brands across multiple industries",
        "Comprehensive training and onboarding programs for you and your team",
        "Ongoing operational support and best practice guidance",
        "Marketing materials and brand recognition benefits",
        "Established supplier relationships and bulk purchasing power",
      ],
    },
    {
      title: "Site Selection & Setup",
      description: "Our experts help you find the perfect location and manage the entire store setup process, from design to grand opening.",
      icon: MapPin,
      features: [
        "Detailed market analysis and demographics research",
        "Professional location scouting and evaluation",
        "Lease negotiation and legal support",
        "Store design and layout optimization",
        "Equipment and fixture procurement and installation",
        "Grand opening coordination and support",
      ],
    },
    {
      title: "Inventory & Supplier Management",
      description: "We connect you with trusted suppliers and provide a system for managing your inventory efficiently.",
      icon: Package,
      features: [
        "Established supplier network and vendor relationships",
        "Modern inventory management systems and software",
        "Product sourcing and procurement assistance",
        "Quality control and product vetting",
        "Logistics coordination and delivery management",
        "Inventory optimization strategies",
      ],
    },
    {
      title: "Marketing & Branding",
      description: "We help you build a strong local brand and reach your target customers effectively.",
      icon: Megaphone,
      features: [
        "Professional brand identity development",
        "Comprehensive digital marketing strategies",
        "Social media management and content creation",
        "Local advertising campaigns and partnerships",
        "Website development and e-commerce solutions",
        "Customer loyalty program implementation",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16">
        <HeroSection
          title="Your Complete Business Solution"
          subtitle="We simplify the path to business ownership with a full suite of services designed for your success."
          backgroundImage={servicesImage}
          overlay={true}
        />

        <AnimatedSection>
          <ServicesGrid services={services} />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <section className="py-16 sm:py-20 bg-card">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h3 className="font-heading font-bold text-3xl sm:text-4xl mb-6">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule a free consultation to discuss how our services can help you achieve your business goals.
            </p>
            <Link href="/contact">
              <Button size="lg" className="text-base px-8" data-testid="button-services-cta">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </section>
        </AnimatedSection>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
