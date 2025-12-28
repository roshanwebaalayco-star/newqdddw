import type { ComponentType } from "react";
import HeroSection from "@/components/HeroSection";
import AnimatedSection from "@/components/AnimatedSection";
import MarketingLayout from "@/components/layouts/MarketingLayout";
import { CardGlass } from "@/components/CardGlass";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Store,
  MapPin,
  Package,
  Megaphone,
  Check,
  ArrowUpRight,
  Clock,
} from "lucide-react";
import { Seo } from "@/components/Seo";

const servicesImage = "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=2000&q=80&fm=webp";
const baseUrl = "https://clcretail.com";

interface ServiceDetail {
  title: string;
  summary: string;
  icon: ComponentType<{ className?: string }>;
  who: string[];
  deliverables: string[];
  process: Array<{ phase: string; duration: string; detail: string }>;
  caseStudy: { problem: string; plan: string; outcome: string };
  cta: { label: string; href: string };
}

const services: ServiceDetail[] = [
  {
    title: "Franchise opportunity scouting",
    summary:
      "Match with proven franchise systems and negotiating leverage so you open with operational guardrails, marketing muscle, and profitable unit economics from day one.",
    icon: Store,
    who: [
      "First-time founders wanting support without reinventing the playbook",
      "Multi-unit operators expanding into new verticals",
      "Investors comparing concepts before deploying capital",
    ],
    deliverables: [
      "Shortlist of vetted franchise partners aligned to capital, lifestyle, and territory goals",
      "Financial modeling and FDD analysis with risk scenarios",
      "Introductions to funding sources, legal counsel, and training programs",
    ],
    process: [
      {
        phase: "Discovery",
        duration: "Weeks 0-1",
        detail: "Clarify personal, financial, and market filters; align on decision criteria.",
      },
      {
        phase: "Evaluation",
        duration: "Weeks 2-4",
        detail: "Meet franchisors, attend discovery days, benchmark performance, and negotiate incentives.",
      },
      {
        phase: "Launch plan",
        duration: "Weeks 5-8",
        detail: "Craft opening timeline, staffing roadmap, and marketing activation tied to franchise support.",
      },
    ],
    caseStudy: {
      problem: "A hospitality duo wanted a resilient concept to diversify beyond fine dining but felt overwhelmed by options.",
      plan: "We ran a market fit study, evaluated six franchise systems, and negotiated a multi-unit agreement with training credits.",
      outcome: "The first unit opened with 32% above-average week-one sales and a locked-in pipeline for two additional markets.",
    },
    cta: { label: "Request a franchise match", href: "/contact" },
  },
  {
    title: "Site selection & setup",
    summary:
      "Identify, secure, and build the right space with data-backed confidence. We coordinate brokers, architects, contractors, and inspectors while you stay focused on the vision.",
    icon: MapPin,
    who: [
      "Growing concepts expanding into high-stakes urban corridors",
      "Founders entering their first brick-and-mortar location",
      "Franchisees balancing corporate requirements with local realities",
    ],
    deliverables: [
      "Trade area analytics including mobility, psychographics, and co-tenancy scoring",
      "Lease strategy, negotiation support, and permitting roadmap",
      "Build kit coordination—from architect brief to punch-list closeout",
    ],
    process: [
      {
        phase: "Market intelligence",
        duration: "Weeks 0-2",
        detail: "Quantify demand, competitor mix, and revenue projections across shortlisted trade areas.",
      },
      {
        phase: "Deal execution",
        duration: "Weeks 3-6",
        detail: "Tour sites, structure offers, manage legal review, and plan permitting milestones.",
      },
      {
        phase: "Build orchestration",
        duration: "Weeks 7-14",
        detail: "Coordinate vendors, procurement, inspections, and launch rehearsals with weekly dashboards.",
      },
    ],
    caseStudy: {
      problem: "A premium fitness brand needed a flagship in a supply-constrained district without delaying launch.",
      plan: "We sourced an off-market sublease, optimized the layout for class flow, and managed the compressed build.",
      outcome: "Grand opening hit 95% membership target in week one with zero schedule overruns.",
    },
    cta: { label: "Book a site review", href: "/contact" },
  },
  {
    title: "Inventory & supplier management",
    summary:
      "Build resilient supply networks, negotiate leverage, and implement inventory systems that keep your shelves evergreen without tying up cash.",
    icon: Package,
    who: [
      "Retailers scaling into new regions with variable supplier quality",
      "Founders launching with limited back-office bandwidth",
      "Franchisees localizing assortments while maintaining standards",
    ],
    deliverables: [
      "Supplier benchmarking, onboarding, and contract negotiation",
      "Inventory modeling, min/max settings, and replenishment cadence",
      "Operational dashboards for cost of goods, turns, and margin health",
    ],
    process: [
      {
        phase: "Audit",
        duration: "Weeks 0-1",
        detail: "Assess current suppliers, lead times, and assortment gaps.",
      },
      {
        phase: "Network build",
        duration: "Weeks 2-5",
        detail: "Source alternatives, negotiate terms, and document SLAs for every vendor.",
      },
      {
        phase: "Implementation",
        duration: "Weeks 6-10",
        detail: "Deploy inventory tools, train teams, and integrate automated replenishment.",
      },
    ],
    caseStudy: {
      problem: "A specialty grocer struggled with spoilage and inconsistent supplier performance across three locations.",
      plan: "We rebuilt the vendor roster, introduced demand forecasting, and digitized purchase orders.",
      outcome: "Shrink dropped 12% and in-stock rates climbed to 98% within eight weeks.",
    },
    cta: { label: "Stabilize your supply chain", href: "/contact" },
  },
  {
    title: "Marketing & brand activation",
    summary:
      "Craft the narrative, campaigns, and loyalty ladders that fill the floor on day one—and keep customers coming back.",
    icon: Megaphone,
    who: [
      "Concepts launching flagships or pop-ups that require outsized buzz",
      "Franchise groups tailoring corporate programs to local communities",
      "Brands relaunching after renovations and needing momentum",
    ],
    deliverables: [
      "Positioning, storytelling, and creative direction",
      "Campaigns across paid, owned, and earned channels with measurement frameworks",
      "Launch playbooks covering events, partnerships, influencer, and loyalty",
    ],
    process: [
      {
        phase: "Narrative sprint",
        duration: "Weeks 0-1",
        detail: "Clarify audience, differentiation, and hero experiences; align with operations cadence.",
      },
      {
        phase: "Channel build",
        duration: "Weeks 2-4",
        detail: "Develop creative, media plans, and automation sequences with content calendars.",
      },
      {
        phase: "Activation",
        duration: "Weeks 5-8",
        detail: "Launch teasers, host previews, and monitor KPIs with daily standups.",
      },
    ],
    caseStudy: {
      problem: "A reimagined boutique hotel needed locals and travelers to rediscover the property after a year-long renovation.",
      plan: "We built a multi-channel campaign pairing neighborhood tastemakers with geo-targeted media and experiential weekends.",
      outcome: "Occupancy hit 92% in the first 60 days with a 34% uplift in direct bookings.",
    },
    cta: { label: "Launch your campaign", href: "/contact" },
  },
];

const addons = [
  "Point-of-sale selection and implementation",
  "Staffing, recruitment, and training accelerators",
  "Grand-opening production and event management",
  "Quarterly operations and performance reviews",
];

export default function Services() {
  return (
    <MarketingLayout>
      <Seo
        title="Retail launch services | CLC Retail Group"
        description="Explore CLC Retail Group’s full-stack services—from franchise scouting and site selection to supplier orchestration and launch marketing."
        canonical={`${baseUrl}/services`}
        ogImage={servicesImage}
        jsonLd={[
          {
            type: "BreadcrumbList",
            data: {
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
                { "@type": "ListItem", position: 2, name: "Services", item: `${baseUrl}/services` },
              ],
            },
          },
        ]}
      />

      <HeroSection
        eyebrow="Full-stack retail launch"
        title="From site strategy to day-one sales, we orchestrate every detail"
        subtitle="Our multidisciplinary operators plug into your vision, building the roadmap, partnerships, and systems to bring your concept to life."
        ctaText="Schedule a consultation"
        ctaLink="/contact#schedule"
        secondaryCtaText="See case studies"
        secondaryCtaLink="/blog"
        backgroundImage={servicesImage}
      />

      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="mb-14 space-y-4 text-white">
              <Badge className="border border-white/25 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70">
                Service lineup
              </Badge>
              <h2 className="font-heading text-3xl sm:text-4xl">What it looks like to have CLC Retail Group beside you</h2>
              <p className="max-w-3xl text-white/75">
                Every engagement pairs specialized operators with structured playbooks. We customize the journey to your market, capital stack, and launch ambitions.
              </p>
            </div>

            <div className="space-y-12">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <CardGlass key={service.title} className="space-y-8 p-6 text-white sm:p-8">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/25 bg-white/10 text-white sm:h-14 sm:w-14">
                          <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                        </div>
                        <div className="space-y-2 sm:space-y-3">
                          <h3 className="font-heading text-xl sm:text-2xl">{service.title}</h3>
                          <p className="text-sm leading-relaxed text-white/90 sm:text-base">{service.summary}</p>
                        </div>
                      </div>
                      <Link href={service.cta.href}>
                        <Button className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary via-primary/80 to-secondary px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-white sm:w-auto sm:px-6 sm:py-3 sm:text-xs">
                          {service.cta.label}
                          <ArrowUpRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-3">
                      <div className="space-y-4">
                        <p className="text-[10px] uppercase tracking-[0.35em] text-white/70 sm:text-xs">Who it’s for</p>
                        <ul className="space-y-3 text-sm text-white/90 sm:text-base">
                          {service.who.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <p className="text-[10px] uppercase tracking-[0.35em] text-white/70 sm:text-xs">What’s included</p>
                        <ul className="space-y-3 text-sm text-white/90 sm:text-base">
                          {service.deliverables.map((deliverable) => (
                            <li key={deliverable} className="flex items-start gap-3">
                              <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                              <span>{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <p className="text-[10px] uppercase tracking-[0.35em] text-white/70 sm:text-xs">Process & timeline</p>
                        <ul className="space-y-4">
                          {service.process.map((phase) => (
                            <li key={phase.phase} className="rounded-2xl border border-white/12 bg-white/10 p-4">
                              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/65 sm:text-xs sm:tracking-[0.3em]">
                                <span>{phase.phase}</span>
                                <span className="inline-flex items-center gap-1 text-white/70">
                                  <Clock className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                                  {phase.duration}
                                </span>
                              </div>
                              <p className="mt-3 text-xs leading-relaxed text-white/85 sm:text-sm">{phase.detail}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/10 p-5 sm:p-6">
                      <p className="text-[10px] uppercase tracking-[0.35em] text-white/70 sm:text-xs">Case snapshot</p>
                      <div className="mt-4 grid gap-6 md:grid-cols-3">
                        <div>
                          <p className="text-xs font-semibold text-white sm:text-sm">Problem</p>
                          <p className="mt-2 text-xs leading-relaxed text-white/90 sm:text-sm">{service.caseStudy.problem}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-white sm:text-sm">Plan</p>
                          <p className="mt-2 text-xs leading-relaxed text-white/90 sm:text-sm">{service.caseStudy.plan}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-white sm:text-sm">Outcome</p>
                          <p className="mt-2 text-xs leading-relaxed text-white/90 sm:text-sm">{service.caseStudy.outcome}</p>
                        </div>
                      </div>
                    </div>
                  </CardGlass>
                );
              })}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <section className="py-16">
          <div className="container mx-auto max-w-4xl px-4">
            <CardGlass className="p-10 text-white">
              <p className="text-xs uppercase tracking-[0.35em] text-white/70">Add-ons</p>
              <h2 className="mt-4 font-heading text-3xl">Extend your engagement</h2>
              <p className="mt-3 text-white/85">
                Bolt on modular support to keep momentum after opening or accelerate multi-unit rollouts.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2 text-white/90">
                {addons.map((addon) => (
                  <li key={addon} className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4 text-primary" />
                    <span>{addon}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact#schedule">
                  <Button className="rounded-full bg-gradient-to-r from-primary via-primary/80 to-secondary px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white">
                    Schedule a consultation
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" className="rounded-full border-white/30 bg-white/10 text-white/85 hover:text-white">
                    Meet the operators
                  </Button>
                </Link>
              </div>
            </CardGlass>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <section className="py-20">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/12 bg-[#0f1222]/95 p-12 text-white shadow-[0_38px_110px_-60px_rgba(0,0,0,0.9)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),transparent_70%)]" />
              <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/60">Let’s architect it together</p>
                  <h3 className="font-heading text-3xl sm:text-4xl">Ready to scope your launch?</h3>
                  <p className="max-w-xl text-base text-white/85 sm:text-lg">
                    Share your concept and target timeline. We’ll assemble the right specialists, map the milestones, and provide a transparent investment profile.
                  </p>
                </div>
                <div className="space-y-4">
                  <Link href="/contact#schedule">
                    <Button
                      size="lg"
                      className="w-full rounded-full bg-gradient-to-r from-primary via-primary/80 to-secondary px-10 py-6 text-xs font-semibold uppercase tracking-[0.3em] text-white"
                    >
                      Schedule a consultation
                    </Button>
                  </Link>
                  <Link href="/blog">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full rounded-full border border-white/30 bg-white/10 px-10 py-6 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 hover:text-white"
                    >
                      Explore recent launches
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </MarketingLayout>
  );
}
