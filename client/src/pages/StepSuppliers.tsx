import { Link } from "wouter";
import AnimatedSection from "@/components/AnimatedSection";
import { CardGlass } from "@/components/CardGlass";
import MarketingLayout from "@/components/layouts/MarketingLayout";
import { Seo } from "@/components/Seo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Package,
  TrendingUp,
  FileText,
  ShoppingCart,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

const baseUrl = "https://clcretailgroup.com";

const outcomes = [
  "Supplier shortlists with competitive pricing across all categories",
  "Negotiated payment terms that protect your working capital",
  "Category plans designed to reduce waste and improve margins",
];

const process = [
  {
    title: "Category Review",
    description: "Analyze your target market to determine optimal product mix and space allocation.",
  },
  {
    title: "Supplier Tender & Negotiation",
    description: "Leverage our buying power to secure better terms than you could get independently.",
  },
  {
    title: "Onboarding & Systems",
    description: "Set up accounts, ordering portals, and delivery schedules before you open.",
  },
  {
    title: "Order Planning",
    description: "Create your opening stock list with quantities calibrated to your sales forecast.",
  },
];

const deliverables = [
  {
    icon: FileText,
    title: "Supplier Agreements",
    description: "Negotiated contracts with payment terms, minimum orders, and return policies documented.",
  },
  {
    icon: Package,
    title: "Initial Stock List",
    description: "SKU-level product list with opening quantities, costs, and suggested retail prices.",
  },
  {
    icon: ShoppingCart,
    title: "Weekly Order Plan",
    description: "Template ordering schedule showing replenishment cycles for each category.",
  },
  {
    icon: TrendingUp,
    title: "Margin Analysis",
    description: "Category-level profitability forecast showing expected contribution and stock turn.",
  },
];

export default function StepSuppliers() {
  return (
    <MarketingLayout showStickyCta>
      <Seo
        title="Step 4 Suppliers — Convenience Store Suppliers UK — CLC"
        description="Supplier sourcing, terms negotiation and category plans to protect margins and reduce waste."
        canonical={`${baseUrl}/step-suppliers`}
      />

      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-x-0 top-[-40%] h-[520px] rounded-full bg-gradient-to-b from-green-500/20 via-transparent to-transparent blur-3xl" />
          <div className="absolute left-[-10%] top-[25%] h-[420px] w-[420px] rounded-full bg-gradient-to-br from-emerald-500/20 via-transparent to-transparent blur-3xl" />
        </div>

        <div className="container mx-auto px-4 pb-16 pt-20 lg:pb-20 lg:pt-32">
          <div className="mx-auto max-w-4xl text-center text-white">
            <Badge className="mb-8 border border-white/25 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70">
              Step 4 of 5
            </Badge>
            <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-500 shadow-2xl">
              <Package className="h-12 w-12 text-white" />
            </div>
            <h1 className="font-heading text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Stock, Terms and Supply Chains That Improve Margins
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              Your supplier relationships can make or break profitability. We connect you with the right partners and negotiate terms that give you breathing room.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/contact#schedule">
                <Button
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-green-500 via-green-600 to-emerald-500 px-10 py-6 text-sm font-semibold uppercase tracking-[0.22em] text-white"
                  data-testid="button-request-shortlist"
                >
                  Request supplier shortlist
                </Button>
              </Link>
              <div className="flex gap-2">
                <Link href="/step-fit-out">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full border border-white/30 bg-white/5 px-6 py-6 text-white/80 hover:text-white"
                    data-testid="button-prev-step"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/step-launch">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full border border-white/30 bg-white/5 px-10 py-6 text-sm font-semibold uppercase tracking-[0.22em] text-white/80 hover:text-white"
                    data-testid="button-next-step"
                  >
                    Next: Step 5 <ArrowRight className="ml-2 h-5 w-5" />
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
                From Supplier Selection to Opening Stock
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-white/75">
                A systematic approach to building a supply chain that supports profitable growth.
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
                Complete supplier documentation with order planning tools and margin protection strategies.
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
                Ready to build your supply chain?
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-lg text-white/75">
                Request a supplier shortlist and see how we can improve your margins.
              </p>
              <Link href="/contact#schedule">
                <Button
                  size="lg"
                  className="mt-8 rounded-full bg-gradient-to-r from-green-500 via-green-600 to-emerald-500 px-10 py-6 text-sm font-semibold uppercase tracking-[0.22em] text-white"
                  data-testid="button-cta-final"
                >
                  Request supplier shortlist
                </Button>
              </Link>
            </CardGlass>
          </div>
        </section>
      </AnimatedSection>
    </MarketingLayout>
  );
}
