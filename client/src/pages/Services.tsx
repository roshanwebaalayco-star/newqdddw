import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Store, MapPin, Package, Megaphone } from "lucide-react";
import MarketingLayout from "@/components/layouts/MarketingLayout";

const servicesImage = "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=2000&q=80";

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
    <MarketingLayout>
      <HeroSection
        eyebrow="Full-stack retail launch"
        title="From site strategy to day-one sales, we orchestrate every detail"
        subtitle="Our multidisciplinary operators plug into your vision, building the roadmap, partnerships, and systems to bring your concept to life."
        ctaText="Plan your build"
        ctaLink="/contact"
        secondaryCtaText="See case studies"
        secondaryCtaLink="/blog"
        backgroundImage={servicesImage}
      />

      <AnimatedSection>
        <ServicesGrid services={services} />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <section className="py-20">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <div className="rounded-3xl border border-border/60 bg-card/80 p-10 shadow-lg">
              <h3 className="font-heading text-3xl sm:text-4xl">Ready to get started?</h3>
              <p className="mt-4 text-base text-muted-foreground">
                Book a discovery call to scope your launch, align on timelines, and meet the specialists who will guide every milestone.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Link href="/contact">
                  <Button size="lg" className="rounded-full px-8" data-testid="button-services-cta">
                    Contact us today
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="rounded-full px-8">
                    Meet the team
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </MarketingLayout>
  );
}
