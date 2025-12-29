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
        title="Retail Launch Services | CLC Retail Solutions Group"
        description="End-to-end convenience store solutions from site selection to launch. Book a free site survey today."
        canonical={`${baseUrl}/services`}
        ogImage={servicesImage}
      />

      <HeroSection
        eyebrow="The Five-Step Journey"
        title="Your path to a profitable convenience store"
        subtitle="Our proven framework takes you from initial site selection to a successful opening day."
        ctaText="Start Your Business"
        ctaLink="/contact#schedule"
        backgroundImage={servicesImage}
      />

      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={service.id} delay={index * 0.1}>
                  <div className={`grid gap-12 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <Badge className="mb-4 border border-primary/20 bg-primary/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-primary">
                        Step {service.step}: {service.title}
                      </Badge>
                      <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
                        {service.headline}
                      </h2>
                      
                      <div className="mt-8 space-y-6">
                        <div className="grid gap-4 sm:grid-cols-3">
                          {service.outcomes.map((outcome) => (
                            <div key={outcome} className="flex flex-col gap-2 rounded-xl border border-white/5 bg-white/5 p-4">
                              <Check className="h-5 w-5 text-primary" />
                              <span className="text-xs font-medium leading-tight text-white/80">{outcome}</span>
                            </div>
                          ))}
                        </div>

                        <div className="grid gap-8 sm:grid-cols-2 pt-4">
                          <div className="space-y-4">
                            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40">Process</h4>
                            <ul className="space-y-3">
                              {service.process.map((p) => (
                                <li key={p} className="flex items-center gap-3 text-sm text-white/70">
                                  <ChevronRight className="h-3 w-3 text-primary" />
                                  {p}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="space-y-4">
                            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40">Deliverables</h4>
                            <ul className="space-y-3">
                              {service.deliverables.map((d) => (
                                <li key={d} className="flex items-center gap-3 text-sm text-white/70">
                                  <ChevronRight className="h-3 w-3 text-primary" />
                                  {d}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="pt-6">
                          <Link href="/contact#schedule">
                            <Button className="rounded-full bg-gradient-to-r from-primary to-secondary px-8 py-6 text-sm font-semibold uppercase tracking-wider text-white">
                              {service.cta}
                              <ArrowUpRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <CardGlass className={`flex items-center justify-center p-12 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="relative">
                        <div className="absolute -inset-4 rounded-full bg-primary/20 blur-2xl" />
                        <Icon className="relative h-32 w-32 text-white opacity-20" />
                        <div className="absolute inset-0 flex items-center justify-center font-heading text-6xl font-bold text-white">
                          {service.step}
                        </div>
                      </div>
                    </CardGlass>
                  </div>
                </AnimatedSection>
              );
            })}
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
