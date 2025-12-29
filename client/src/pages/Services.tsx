import { ComponentType } from "react";
import HeroSection from "@/components/HeroSection";
import AnimatedSection from "@/components/AnimatedSection";
import MarketingLayout from "@/components/layouts/MarketingLayout";
import { CardGlass } from "@/components/CardGlass";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  MapPin,
  PenTool,
  Hammer,
  Package,
  Rocket,
  Check,
  ArrowUpRight,
  ChevronRight,
  Store,
  Megaphone,
} from "lucide-react";
import { Seo } from "@/components/Seo";

const servicesImage = "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=2000&q=80&fm=webp";
const baseUrl = "https://clcretail.com";

interface ServiceStep {
  id: string;
  step: number;
  title: string;
  headline: string;
  outcomes: string[];
  process: string[];
  deliverables: string[];
  cta: string;
  icon: ComponentType<{ className?: string }>;
}

const services: ServiceStep[] = [
  {
    id: "location",
    step: 1,
    title: "Location",
    headline: "Site Selection That Drives Footfall",
    icon: MapPin,
    outcomes: [
      "Catchment analysis",
      "Competitor and pedestrian flow mapping",
      "Feasibility report with break-even",
    ],
    process: [
      "Survey brief",
      "Data-led catchment map",
      "Landlord negotiation support",
      "Final site recommendation",
    ],
    deliverables: [
      "Catchment map",
      "12-month sales forecast",
      "Site viability score",
      "Landlord briefing pack",
    ],
    cta: "Book a site survey",
  },
  {
    id: "design",
    step: 2,
    title: "Design",
    headline: "Retail Layouts That Maximise Spend Per Visit",
    icon: PenTool,
    outcomes: [
      "Brand-led visual identity",
      "Optimised store flow",
      "Accessible layouts that meet UK regs",
    ],
    process: [
      "Concept sketch",
      "Planogram and shelving schedule",
      "Customer journey and signage set",
    ],
    deliverables: [
      "Concept boards",
      "CAD floorplan",
      "Merchandising plan",
      "Accessibility checklist",
    ],
    cta: "Request design proposal",
  },
  {
    id: "fit-out",
    step: 3,
    title: "Fit-Out",
    headline: "Fast, Compliant Store Builds",
    icon: Hammer,
    outcomes: [
      "Fixed budget build schedule",
      "Compliant M&E works",
      "Low disruption installation",
    ],
    process: [
      "Pre-construction cost plan",
      "Staged works timetable",
      "Quality assurance and snagging",
    ],
    deliverables: [
      "Fit-out specification",
      "Contractor short-list",
      "Programme and snag report",
    ],
    cta: "Get a fit-out estimate",
  },
  {
    id: "suppliers",
    step: 4,
    title: "Suppliers",
    headline: "Stock, Terms and Supply Chains That Improve Margins",
    icon: Package,
    outcomes: [
      "Supplier shortlists",
      "Negotiated terms",
      "Category plans to reduce waste",
    ],
    process: [
      "Category review",
      "Supplier tender and negotiation",
      "Onboarding and ordering systems",
    ],
    deliverables: [
      "Supplier agreements",
      "Initial stock list",
      "Weekly order plan template",
    ],
    cta: "Request supplier shortlist",
  },
  {
    id: "launch",
    step: 5,
    title: "Launch",
    headline: "From Soft Opening to Trade-Ready Performance",
    icon: Rocket,
    outcomes: [
      "Trained team",
      "Local marketing plan",
      "Opening-week operations pack",
    ],
    process: [
      "Staff training",
      "POS configuration and test transactions",
      "Launch marketing calendar",
    ],
    deliverables: [
      "Training manual",
      "Launch checklist",
      "90-day sales ramp plan",
    ],
    cta: "Schedule a launch planning call",
  },
];

export default function Services() {
  return (
    <MarketingLayout>
      <Seo
        title="Services | CLC Retail LTD"
        description="We simplify the path to business ownership with a full suite of services designed for your success."
        canonical={`${baseUrl}/services`}
        ogImage={servicesImage}
      />

      <HeroSection
        eyebrow="Your Complete Business Solution"
        title="Your Complete Business Solution"
        subtitle="We simplify the path to business ownership with a full suite of services designed for your success."
        ctaText="Start Your Business"
        ctaLink="/contact#schedule"
        backgroundImage={servicesImage}
      />

      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <AnimatedSection delay={0.1}>
              <CardGlass className="p-8 h-full flex flex-col items-center text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <Store className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-4">Franchise Opportunities</h3>
                <p className="text-white/70 mb-8">We match you with a proven franchise model that fits your goals and market demands.</p>
                <div className="mt-auto">
                  <Link href="/contact#schedule">
                    <Button variant="outline" className="rounded-full">Request Info</Button>
                  </Link>
                </div>
              </CardGlass>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <CardGlass className="p-8 h-full flex flex-col items-center text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-4">Site Selection & Setup</h3>
                <p className="text-white/70 mb-8">Our experts help you find the perfect location and manage the entire store setup process, from design to grand opening.</p>
                <div className="mt-auto">
                  <Link href="/contact#schedule">
                    <Button variant="outline" className="rounded-full">Book Site Survey</Button>
                  </Link>
                </div>
              </CardGlass>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <CardGlass className="p-8 h-full flex flex-col items-center text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <Package className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-4">Inventory & Supplier Management</h3>
                <p className="text-white/70 mb-8">We connect you with trusted suppliers and provide a system for managing your inventory efficiently.</p>
                <div className="mt-auto">
                  <Link href="/contact#schedule">
                    <Button variant="outline" className="rounded-full">Learn More</Button>
                  </Link>
                </div>
              </CardGlass>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <CardGlass className="p-8 h-full flex flex-col items-center text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <Megaphone className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-4">Marketing & Branding</h3>
                <p className="text-white/70 mb-8">We help you build a strong local brand and reach your target customers effectively.</p>
                <div className="mt-auto">
                  <Link href="/contact#schedule">
                    <Button variant="outline" className="rounded-full">Get Started</Button>
                  </Link>
                </div>
              </CardGlass>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="bg-white/5 py-20">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h3 className="font-heading text-3xl font-bold text-white">Ready to take the first step?</h3>
          <p className="mt-4 text-white/70">Book a free site survey today and let our experts guide you through the process.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact#schedule">
              <Button size="lg" className="rounded-full bg-primary px-10 py-6 text-sm font-bold uppercase tracking-widest text-white">
                Book Site Survey
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="rounded-full border-white/20 bg-transparent px-10 py-6 text-sm font-bold uppercase tracking-widest text-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
}
