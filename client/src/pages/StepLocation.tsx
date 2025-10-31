import { Link } from "wouter";
import AnimatedSection from "@/components/AnimatedSection";
import { CardGlass } from "@/components/CardGlass";
import MarketingLayout from "@/components/layouts/MarketingLayout";
import { Seo } from "@/components/Seo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Users,
  TrendingUp,
  FileText,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const baseUrl = "https://clcretailgroup.com";

const outcomes = [
  "Catchment analysis with demographic profiling",
  "Competitor and pedestrian flow mapping",
  "Feasibility report with break-even projections",
];

const process = [
  {
    title: "Survey Brief",
    description: "We discuss your concept, budget, and target markets to define search parameters.",
  },
  {
    title: "Data-Led Catchment Map",
    description: "Analyze population density, household income, and footfall patterns using mobility data.",
  },
  {
    title: "Landlord Negotiation Support",
    description: "Leverage our relationships and market knowledge to secure favorable terms.",
  },
  {
    title: "Final Site Recommendation",
    description: "Present ranked options with detailed viability scores and risk assessments.",
  },
];

const deliverables = [
  {
    icon: MapPin,
    title: "Catchment Map",
    description: "Visual representation of your trade area with demographic overlays and competitor locations.",
  },
  {
    icon: TrendingUp,
    title: "12-Month Sales Forecast",
    description: "Conservative revenue projections based on footfall, basket size, and local spending patterns.",
  },
  {
    icon: FileText,
    title: "Site Viability Score",
    description: "Objective scoring system covering location, access, competition, and commercial terms.",
  },
  {
    icon: Users,
    title: "Landlord Briefing Pack",
    description: "Professional presentation materials to strengthen your negotiating position.",
  },
];

export default function StepLocation() {
  return (
    <MarketingLayout showStickyCta>
      <Seo
        title="Step 1 Location — Convenience Store Site Selection UK — CLC"
        description="Data-driven site selection for UK convenience stores. Catchment maps, forecasts and landlord support."
        canonical={`${baseUrl}/step-location`}
      />

      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-x-0 top-[-40%] h-[520px] rounded-full bg-gradient-to-b from-blue-500/20 via-transparent to-transparent blur-3xl" />
          <div className="absolute left-[-10%] top-[25%] h-[420px] w-[420px] rounded-full bg-gradient-to-br from-cyan-500/20 via-transparent to-transparent blur-3xl" />
        </div>

        <div className="container mx-auto px-4 pb-16 pt-20 lg:pb-20 lg:pt-32">
          <div className="mx-auto max-w-4xl text-center text-white">
            <Badge className="mb-8 border border-white/25 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70">
              Step 1 of 5
            </Badge>
            <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 shadow-2xl">
              <MapPin className="h-12 w-12 text-white" />
            </div>
            <h1 className="font-heading text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Site Selection That Drives Footfall
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              Choose the right location and you're halfway to success. Our data-led approach removes guesswork and gives you confidence in every site decision.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/contact#schedule">
                <Button
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 px-10 py-6 text-sm font-semibold uppercase tracking-[0.22em] text-white"
                  data-testid="button-book-survey"
                >
                  Book a site survey
                </Button>
              </Link>
              <Link href="/step-design">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border border-white/30 bg-white/5 px-10 py-6 text-sm font-semibold uppercase tracking-[0.22em] text-white/80 hover:text-white"
                  data-testid="button-next-step"
                >
                  Next: Step 2 Design <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection>
        <section className="py-16 lg:py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mb-12 text-center">
              <Badge className="border border-white/25 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70">
                What You Get
              </Badge>
              <h2 className="mt-6 font-heading text-3xl font-semibold text-white sm:text-4xl">
                Three Critical Outcomes
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {outcomes.map((outcome) => (
                <CardGlass key={outcome} className="flex items-start gap-4 p-6">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-green-400" />
                  <p className="text-lg text-white">{outcome}</p>
                </CardGlass>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <section className="py-16 lg:py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mb-12 text-center text-white">
              <Badge className="border border-white/25 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70">
                Our Process
              </Badge>
              <h2 className="mt-6 font-heading text-3xl font-semibold sm:text-4xl">
                How We Find Your Perfect Site
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-white/75">
                A systematic approach combining data science, local market knowledge, and commercial expertise.
              </p>
            </div>
            <div className="space-y-6">
              {process.map((step, index) => (
                <CardGlass key={step.title} className="flex items-start gap-6 p-8">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 font-heading text-xl font-bold text-white">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl text-white">{step.title}</h3>
                    <p className="mt-2 text-white/80">{step.description}</p>
                  </div>
                </CardGlass>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <section className="py-16 lg:py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mb-12 text-center text-white">
              <Badge className="border border-white/25 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70">
                Deliverables
              </Badge>
              <h2 className="mt-6 font-heading text-3xl font-semibold sm:text-4xl">
                What You Receive
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-white/75">
                Professional documentation that supports funding applications and informed decision-making.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {deliverables.map((item) => {
                const Icon = item.icon;
                return (
                  <CardGlass key={item.title} className="p-8">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/25 bg-white/10 text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-heading text-xl text-white">{item.title}</h3>
                    <p className="mt-4 text-white/80">{item.description}</p>
                  </CardGlass>
                );
              })}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <section className="py-20">
          <div className="container mx-auto max-w-4xl px-4">
            <CardGlass className="p-12 text-center">
              <h3 className="font-heading text-3xl font-semibold text-white sm:text-4xl">
                Ready to find your ideal location?
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-lg text-white/75">
                Book a free site survey and let us show you the data-driven difference.
              </p>
              <Link href="/contact#schedule">
                <Button
                  size="lg"
                  className="mt-8 rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 px-10 py-6 text-sm font-semibold uppercase tracking-[0.22em] text-white"
                  data-testid="button-cta-final"
                >
                  Book a site survey
                </Button>
              </Link>
            </CardGlass>
          </div>
        </section>
      </AnimatedSection>
    </MarketingLayout>
  );
}
