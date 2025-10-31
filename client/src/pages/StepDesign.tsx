import { Link } from "wouter";
import AnimatedSection from "@/components/AnimatedSection";
import { CardGlass } from "@/components/CardGlass";
import MarketingLayout from "@/components/layouts/MarketingLayout";
import { Seo } from "@/components/Seo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  PenTool,
  Layout,
  Map,
  Accessibility,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

const baseUrl = "https://clcretailgroup.com";

const outcomes = [
  "Brand-led visual identity that resonates with your local market",
  "Optimised store flow to maximise spend per visit",
  "Accessible layouts that meet all UK regulations",
];

const process = [
  {
    title: "Concept Sketch",
    description: "Transform your vision into initial design concepts that balance brand, functionality, and budget.",
  },
  {
    title: "Planogram & Shelving Schedule",
    description: "Detailed product placement plans optimized for category performance and impulse purchases.",
  },
  {
    title: "Customer Journey Mapping",
    description: "Design traffic flow patterns that guide customers through high-margin categories.",
  },
  {
    title: "Signage & Wayfinding",
    description: "Create clear, compelling signage that drives conversions and enhances the shopping experience.",
  },
];

const deliverables = [
  {
    icon: Layout,
    title: "Concept Boards",
    description: "Visual mood boards showing materials, colors, fixtures, and brand touchpoints.",
  },
  {
    icon: Map,
    title: "CAD Floorplan",
    description: "Detailed technical drawings with measurements, equipment placement, and circulation routes.",
  },
  {
    icon: PenTool,
    title: "Merchandising Plan",
    description: "Category-by-category product allocation with shelf heights, facing counts, and fixture specifications.",
  },
  {
    icon: Accessibility,
    title: "Accessibility Checklist",
    description: "Compliance documentation for DDA, building regulations, and local planning requirements.",
  },
];

export default function StepDesign() {
  return (
    <MarketingLayout showStickyCta>
      <Seo
        title="Step 2 Design — Convenience Store Design UK — CLC"
        description="Retail-first design and planograms to increase basket size and dwell time. CADs and concept boards included."
        canonical={`${baseUrl}/step-design`}
      />

      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-x-0 top-[-40%] h-[520px] rounded-full bg-gradient-to-b from-purple-500/20 via-transparent to-transparent blur-3xl" />
          <div className="absolute left-[-10%] top-[25%] h-[420px] w-[420px] rounded-full bg-gradient-to-br from-pink-500/20 via-transparent to-transparent blur-3xl" />
        </div>

        <div className="container mx-auto px-4 pb-16 pt-20 lg:pb-20 lg:pt-32">
          <div className="mx-auto max-w-4xl text-center text-white">
            <Badge className="mb-8 border border-white/25 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70">
              Step 2 of 5
            </Badge>
            <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-2xl">
              <PenTool className="h-12 w-12 text-white" />
            </div>
            <h1 className="font-heading text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Retail Layouts That Maximise Spend Per Visit
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              Great design is invisible to customers but obvious in your sales figures. We create environments that feel natural yet are engineered for performance.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/contact#schedule">
                <Button
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-purple-500 via-purple-600 to-pink-500 px-10 py-6 text-sm font-semibold uppercase tracking-[0.22em] text-white"
                  data-testid="button-request-proposal"
                >
                  Request design proposal
                </Button>
              </Link>
              <div className="flex gap-2">
                <Link href="/step-location">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full border border-white/30 bg-white/5 px-6 py-6 text-white/80 hover:text-white"
                    data-testid="button-prev-step"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/step-fit-out">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full border border-white/30 bg-white/5 px-10 py-6 text-sm font-semibold uppercase tracking-[0.22em] text-white/80 hover:text-white"
                    data-testid="button-next-step"
                  >
                    Next: Step 3 <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
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
                From Vision to Technical Drawings
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-white/75">
                A collaborative design process that balances aesthetic appeal with commercial performance.
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
                Comprehensive design documentation ready for contractor pricing and regulatory approval.
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
                Ready to design your store?
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-lg text-white/75">
                Request a design proposal and see how strategic layout drives revenue.
              </p>
              <Link href="/contact#schedule">
                <Button
                  size="lg"
                  className="mt-8 rounded-full bg-gradient-to-r from-purple-500 via-purple-600 to-pink-500 px-10 py-6 text-sm font-semibold uppercase tracking-[0.22em] text-white"
                  data-testid="button-cta-final"
                >
                  Request design proposal
                </Button>
              </Link>
            </CardGlass>
          </div>
        </section>
      </AnimatedSection>
    </MarketingLayout>
  );
}
