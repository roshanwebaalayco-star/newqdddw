import { useMemo } from "react";
import { Link } from "wouter";
import HeroSection from "@/components/HeroSection";
import TrustGrid from "@/components/TrustGrid";
import ServicesPreview from "@/components/ServicesPreview";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import MarketingLayout from "@/components/layouts/MarketingLayout";
import LoadingScreen from "@/components/LoadingScreen";
import { useHomeContent } from "@/hooks/useHomeContent";
import { Seo } from "@/components/Seo";
import { CardGlass } from "@/components/CardGlass";
import { LatestInsights } from "@/components/LatestInsights";
import {
  UserCheck,
  Building2,
  TrendingUp,
  CheckCircle2,
  Sparkles,
  ClipboardCheck,
  Map as MapIcon,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { IconId } from "@shared/marketing";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const baseUrl = "https://clcretailgroup.com";

const personas = [
  {
    title: "Founder-led concepts",
    description:
      "Emerging retail brands ready to compress the jump from idea to immersive flagship without hiring full in-house teams.",
    icon: UserCheck,
  },
  {
    title: "Multi-unit operators",
    description:
      "Franchise and portfolio leaders balancing rollout velocity, consistent brand standards, and local market nuance.",
    icon: Building2,
  },
  {
    title: "Investment partners",
    description:
      "Private equity and venture groups requiring launch governance, accurate forecasting, and transparent reporting.",
    icon: TrendingUp,
  },
] satisfies Array<{ title: string; description: string; icon: LucideIcon }>;

const outcomes = [
  {
    value: "14-week",
    label: "average concept-to-open",
    description: "Compressed critical path with pre-built vendor playbooks",
  },
  {
    value: "98%",
    label: "vendor milestone adherence",
    description: "Coordinated procurement and build oversight that protects budgets",
  },
  {
    value: "120%",
    label: "launch marketing ramp",
    description: "Integrated campaigns and CRM ladders measured from day one",
  },
];

const steps = [
  {
    title: "Discovery & blueprint",
    duration: "Week 0",
    description: "Align on commercial targets, funding structure, and readiness requirements. We map risk, team bandwidth, and the launch vision.",
  },
  {
    title: "Site intelligence sprint",
    duration: "Weeks 1-2",
    description: "Evaluate trade areas, co-tenancy, lease terms, and permitting timelines using mobility data and on-the-ground partners.",
  },
  {
    title: "Experience design lab",
    duration: "Weeks 3-6",
    description: "Prototype the physical environment, planograms, staffing, and technology stack to match customer journeys and brand rituals.",
  },
  {
    title: "Build orchestration",
    duration: "Weeks 7-11",
    description: "Mobilize vetted vendors, coordinate procurement, and manage weekly sprint reviews so every milestone tracks to plan.",
  },
  {
    title: "Launch & optimize",
    duration: "Weeks 12-14",
    description: "Activate marketing ladders, rehearsal operations, and KPI dashboards. We stay locked in through soft opening and iteration.",
  },
];

const vendorLogos = [
  "LuxeBuild",
  "Forma AV",
  "Northern Fixtures",
  "Brightline Media",
  "Atlas Logistics",
  "Horizon Staffing",
];

const faqs = [
  {
    question: "What makes CLC Retail Group different from a traditional GC or agency?",
    answer:
      "We operate as an integrated launch studio—strategy, site intelligence, experience design, vendor orchestration, and go-to-market live under one plan. You get a single accountable partner and clear dashboards instead of managing multiple vendors.",
  },
  {
    question: "Can you work with our existing architects or franchise requirements?",
    answer:
      "Absolutely. We plug into your preferred collaborators, align on brand standards, and fill the gaps—often vendor management, launch marketing, and performance measurement—so every partner works from one roadmap.",
  },
  {
    question: "How soon should we engage you before a new store launch?",
    answer:
      "Founders typically call us 4–6 months before target opening. That gives time to validate sites, negotiate terms, and choreograph teams. If you're already mid-build, we can still jump in to stabilize delivery and craft the launch moment.",
  },
  {
    question: "Do you support multi-location rollouts?",
    answer:
      "Yes. Our playbooks scale. We adapt the core launch framework for each market, centralize vendor intelligence, and build feedback loops so every site opens faster and smarter than the last.",
  },
  {
    question: "What does engagement look like after opening day?",
    answer:
      "We stay close through the first 90 days—monitoring footfall, conversion, staffing, and marketing signals. From there we offer quarterly reviews to plan refreshes, new locations, and operational optimizations.",
  },
  {
    question: "Do you help with funding or franchise selection decisions?",
    answer:
      "We regularly support due diligence with financial modeling, franchise audits, and introductions to aligned capital partners so you can choose the launch path with the right upside and support.",
  },
];

const ICON_MAP: Record<IconId, LucideIcon> = {
  handshake: UserCheck,
  lightbulb: Sparkles,
  package: Layers,
  store: Building2,
  "map-pin": MapIcon,
  megaphone: TrendingUp,
  sparkle: Sparkles,
  rocket: TrendingUp,
  shield: ClipboardCheck,
};

export default function Home() {
  const { data, isLoading, isError, error, refetch } = useHomeContent();

  const experienceImage =
    "https://images.unsplash.com/photo-1521540216272-a50305cd4421?auto=format&fit=crop&w=2000&q=80&fm=webp";

  const trustItems = useMemo(
    () =>
      data
        ? data.trust.map((item) => ({
            ...item,
            icon: ICON_MAP[item.icon],
          }))
        : [],
    [data],
  );

  const services = useMemo(
    () =>
      data
        ? data.services.map((service) => ({
            ...service,
            icon: ICON_MAP[service.icon],
          }))
        : [],
    [data],
  );

  if (isLoading) {
    return (
      <MarketingLayout showStickyCta>
        <LoadingScreen message="Crafting your dashboard" />
      </MarketingLayout>
    );
  }

  if (isError || !data) {
    return (
      <MarketingLayout showStickyCta>
        <div className="container mx-auto max-w-3xl px-4 py-24 text-center">
          <h2 className="font-heading text-3xl font-semibold text-white">We hit a snag</h2>
          <p className="mt-4 text-white/70">
            {error?.message ?? "We couldn’t load the latest content. Please refresh or try again shortly."}
          </p>
          <div className="mt-6 flex justify-center">
            <Button onClick={() => refetch()} className="inline-flex items-center gap-2">
              <ArrowUpRight className="h-4 w-4" />
              Retry loading
            </Button>
          </div>
        </div>
      </MarketingLayout>
    );
  }

  const faqJsonLd = {
    type: "FAQPage",
    data: {
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  } as const;

  const howToJsonLd = {
    type: "HowTo",
    data: {
      name: "How CLC Retail Group launches a new retail location",
      step: steps.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: step.title,
        text: step.description,
      })),
    },
  } as const;

  const breadcrumbJsonLd = {
    type: "BreadcrumbList",
    data: {
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${baseUrl}/`,
        },
      ],
    },
  } as const;

  const organizationJsonLd = {
    type: "Organization",
    data: {
      name: "CLC Retail Group",
      url: `${baseUrl}/`,
      logo: `${baseUrl}/logo.png`,
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+1-555-123-4567",
          contactType: "Sales",
          areaServed: "US, UK, UAE",
        },
      ],
    },
  } as const;

  return (
    <MarketingLayout showStickyCta>
      <Seo
        title="CLC Retail Group | Retail launch studio for modern founders"
        description="Orchestrate concept-to-open retail launches with CLC Retail Group’s integrated strategy, site selection, vendor management, and marketing teams."
        canonical={`${baseUrl}/`}
        ogImage="https://images.unsplash.com/photo-1521337674500-52e5b154a71f?auto=format&fit=crop&w=1600&q=80&fm=webp"
        jsonLd={[organizationJsonLd, breadcrumbJsonLd, howToJsonLd, faqJsonLd]}
      />

      <HeroSection
        eyebrow={data.hero.eyebrow}
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        ctaText="Schedule a consultation"
        ctaLink="/contact#schedule"
        secondaryCtaText="Explore our services"
        secondaryCtaLink="/services"
        backgroundImage={data.hero.backgroundImage}
        stats={data.stats}
      />

      <AnimatedSection>
        <section className="py-16 lg:py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-6 text-white">
                <Badge className="border border-white/25 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70">
                  Studio signature
                </Badge>
                <h2 className="font-heading text-3xl font-semibold sm:text-4xl lg:text-5xl">
                  Retail spaces engineered to perform day one
                </h2>
                <p className="text-base text-white/80 sm:text-lg">
                  We choreograph a seamless journey from feasibility to footfall. Our specialists align data, design, procurement, and launch marketing so every opening hits targets.
                </p>
                <ul className="space-y-4 text-sm text-white/75 sm:text-base">
                  {["Immersive concept labs & prototyping", "Global supplier network & build orchestration", "Launch playbooks with embedded performance analytics"].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3 pt-4">
                  <Link href="/services">
                    <Button variant="outline" className="rounded-full border-white/30 bg-white/10 text-white/85 hover:text-white">
                      See service playbooks
                    </Button>
                  </Link>
                  <Link href="/contact#schedule">
                    <Button className="rounded-full bg-gradient-to-r from-primary via-primary/80 to-secondary px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white">
                      Schedule a consultation
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="overflow-hidden rounded-[2rem] border border-white/12 bg-white/10 shadow-[0_35px_95px_-50px_rgba(0,0,0,0.85)]">
                  <img
                    src={experienceImage}
                    alt="Design studio collaboration"
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0b0d16]/40 via-transparent to-[#0b0d16]/70" />
                  <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/12 bg-white/12 p-6 text-white backdrop-blur">
                    <p className="text-xs uppercase tracking-[0.35em] text-white/60">Launch control</p>
                    <p className="mt-2 text-sm text-white/80">
                      Weekly sprints and dashboards ensure procurement, staffing, and go-live milestones land on time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.05}>
        <section className="py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex flex-col gap-6 text-white sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-4">
                <Badge className="border border-white/25 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70">
                  Who we help
                </Badge>
                <h2 className="font-heading text-3xl sm:text-4xl">Teams that refuse to gamble on their next opening</h2>
                <p className="max-w-2xl text-white/75">
                  We’re the partner when your next location has to deliver—whether it’s your first immersive flagship or the fiftieth unit in a high-growth rollout.
                </p>
              </div>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {personas.map((persona) => {
                const Icon = persona.icon;
                return (
                  <CardGlass key={persona.title} className="h-full p-8">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/25 bg-white/10 text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-heading text-xl text-white">{persona.title}</h3>
                    <p className="mt-4 text-white/80">{persona.description}</p>
                  </CardGlass>
                );
              })}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <section className="py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <CardGlass className="flex flex-col gap-8 p-10 md:flex-row md:items-center md:justify-between">
              <div className="max-w-md space-y-4">
                <p className="text-xs uppercase tracking-[0.35em] text-white/60">Outcomes you can measure</p>
                <h2 className="font-heading text-3xl text-white">Every engagement is engineered around tangible metrics</h2>
                <p className="text-white/75">
                  We treat launch timelines, vendor accountability, and customer activation like mission-critical KPIs—and make them transparent to your team.
                </p>
              </div>
              <div className="grid flex-1 gap-6 sm:grid-cols-3">
                {outcomes.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/15 bg-white/5 p-6 text-center">
                    <p className="font-heading text-3xl text-white">{metric.value}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/55">{metric.label}</p>
                    <p className="mt-3 text-sm text-white/75">{metric.description}</p>
                  </div>
                ))}
              </div>
            </CardGlass>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <section className="py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mb-10 space-y-4 text-white">
              <Badge className="border border-white/25 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70">
                How it works
              </Badge>
              <h2 className="font-heading text-3xl sm:text-4xl">Five tightly choreographed phases</h2>
              <p className="max-w-3xl text-white/75">
                A repeatable framework that scales from single flagship launches to nationwide rollouts—while honoring the nuance of your concept and market.
              </p>
            </div>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <CardGlass key={step.title} className="flex flex-col gap-6 p-8 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/10 text-lg font-semibold text-white">
                      {index + 1}
                    </span>
                    <div className="space-y-3">
                      <p className="text-xs uppercase tracking-[0.3em] text-white/60">{step.duration}</p>
                      <h3 className="font-heading text-2xl text-white">{step.title}</h3>
                      <p className="text-white/80">{step.description}</p>
                    </div>
                  </div>
                  <Link href="/contact#schedule">
                    <Button variant="outline" className="self-start rounded-full border-white/30 bg-white/10 text-white/85 hover:text-white">
                      Plan this phase together
                    </Button>
                  </Link>
                </CardGlass>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.18}>
        <section className="py-16">
          <div className="container mx-auto max-w-6xl px-4">
            <CardGlass className="p-10">
              <div className="flex flex-col gap-6 text-white lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-xl space-y-4">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/60">Vendor network</p>
                  <h2 className="font-heading text-3xl">Trusted partners on tap</h2>
                  <p className="text-white/75">
                    We maintain a curated bench of architects, fabricators, installers, staffing agencies, and marketing specialists across key launch markets. Every vendor is benchmarked on quality, speed, and transparency.
                  </p>
                </div>
                <div className="grid flex-1 grid-cols-2 gap-4 sm:grid-cols-3">
                  {vendorLogos.map((logo) => (
                    <div key={logo} className="flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-5 text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
                      {logo}
                    </div>
                  ))}
                </div>
              </div>
            </CardGlass>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <TrustGrid items={trustItems} />
      </AnimatedSection>

      <AnimatedSection>
        <div className="container mx-auto max-w-5xl px-4 py-16">
          <TestimonialsSlider testimonials={data.testimonials} />
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <ServicesPreview services={services} />
      </AnimatedSection>

      <LatestInsights />

      <AnimatedSection delay={0.1}>
        <section className="py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mb-8 space-y-4 text-white">
              <Badge className="border border-white/25 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70">
                Questions answered
              </Badge>
              <h2 className="font-heading text-3xl sm:text-4xl">Extended FAQs</h2>
              <p className="max-w-2xl text-white/75">
                Transparency keeps projects on track. If you do not see your question here, reach out and we will share the playbook.
              </p>
            </div>
            <CardGlass className="p-6">
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq) => (
                  <AccordionItem key={faq.question} value={faq.question} className="border border-white/10 bg-white/5 px-4">
                    <AccordionTrigger className="text-left font-heading text-lg text-white hover:text-white">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 text-sm leading-relaxed text-white/80">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardGlass>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <section className="py-20">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/12 bg-[#0f1222]/95 p-12 text-white shadow-[0_38px_110px_-60px_rgba(0,0,0,0.9)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),transparent_70%)]" />
              <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/60">Let’s collaborate</p>
                  <h3 className="font-heading text-3xl sm:text-4xl">Ready to architect your next retail win?</h3>
                  <p className="max-w-xl text-base text-white/75 sm:text-lg">
                    Partner with a team that treats every opening as a flagship moment. We’ll map your 90-day playbook and orchestrate every detail.
                  </p>
                </div>
                <div className="space-y-4">
                  <Link href="/contact#schedule">
                    <Button
                      size="lg"
                      className="w-full rounded-full bg-gradient-to-r from-primary via-primary/80 to-secondary px-10 py-6 text-xs font-semibold uppercase tracking-[0.3em] text-white"
                      data-testid="button-cta-bottom"
                    >
                      Schedule a consultation
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full rounded-full border border-white/30 bg-white/10 px-10 py-6 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 hover:text-white"
                    >
                      Explore our services
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
