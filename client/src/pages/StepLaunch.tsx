import { Link } from "wouter";
import AnimatedSection from "@/components/AnimatedSection";
import { CardGlass } from "@/components/CardGlass";
import MarketingLayout from "@/components/layouts/MarketingLayout";
import { Seo } from "@/components/Seo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Rocket,
  Users,
  Megaphone,
  ClipboardCheck,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";

const baseUrl = "https://clcretailgroup.com";

const outcomes = [
  "Trained team ready to deliver excellent customer service from day one",
  "Local marketing plan driving footfall during critical opening weeks",
  "Opening-week operations pack with daily checklists and troubleshooting",
];

const process = [
  {
    title: "Staff Training",
    description: "Comprehensive training covering POS systems, customer service, health & safety, and opening procedures.",
  },
  {
    title: "POS Configuration & Testing",
    description: "Set up till systems, payment terminals, and run test transactions to ensure smooth opening day.",
  },
  {
    title: "Launch Marketing Calendar",
    description: "Coordinate local advertising, social media, grand opening promotions, and community outreach.",
  },
  {
    title: "Soft Opening Rehearsal",
    description: "Practice runs with friends and family to iron out operational wrinkles before the real launch.",
  },
];

const deliverables = [
  {
    icon: ClipboardCheck,
    title: "Training Manual",
    description: "Step-by-step guide covering all operational procedures, emergency protocols, and customer service standards.",
  },
  {
    icon: Rocket,
    title: "Launch Checklist",
    description: "Day-by-day countdown with tasks, deadlines, and accountability for the two weeks before opening.",
  },
  {
    icon: Users,
    title: "90-Day Sales Ramp Plan",
    description: "Week-by-week sales targets, promotional calendar, and performance metrics to track early momentum.",
  },
  {
    icon: Megaphone,
    title: "Local Marketing Assets",
    description: "Flyers, social media templates, press release, and grand opening promotional materials.",
  },
];

export default function StepLaunch() {
  return (
    <MarketingLayout showStickyCta>
      <Seo
        title="Step 5 Launch — Convenience Store Launch UK — CLC"
        description="Launch planning, staff training and local marketing to deliver a profitable opening week."
        canonical={`${baseUrl}/step-launch`}
      />

      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-x-0 top-[-40%] h-[520px] rounded-full bg-gradient-to-b from-yellow-500/20 via-transparent to-transparent blur-3xl" />
          <div className="absolute left-[-10%] top-[25%] h-[420px] w-[420px] rounded-full bg-gradient-to-br from-amber-500/20 via-transparent to-transparent blur-3xl" />
        </div>

        <div className="container mx-auto px-4 pb-16 pt-20 lg:pb-20 lg:pt-32">
          <div className="mx-auto max-w-4xl text-center text-white">
            <Badge className="mb-8 border border-white/25 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70">
              Step 5 of 5
            </Badge>
            <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-yellow-500 to-amber-500 shadow-2xl">
              <Rocket className="h-12 w-12 text-white" />
            </div>
            <h1 className="font-heading text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              From Soft Opening to Trade-Ready Performance
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              Your opening week sets the tone for everything that follows. We ensure your team is trained, your marketing is working, and your operations are smooth.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/contact#schedule">
                <Button
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-yellow-500 via-yellow-600 to-amber-500 px-10 py-6 text-sm font-semibold uppercase tracking-[0.22em] text-white"
                  data-testid="button-schedule-launch"
                >
                  Schedule a launch planning call
                </Button>
              </Link>
              <Link href="/step-location">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border border-white/30 bg-white/5 px-6 py-6 text-white/80 hover:text-white"
                  data-testid="button-back-to-start"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back to Step 1
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
                Your Countdown to Opening Day
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-white/75">
                Comprehensive launch planning that covers training, systems, marketing, and operational readiness.
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
                Complete launch toolkit with training materials, checklists, and marketing assets.
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
                Ready to launch your store?
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-lg text-white/75">
                Schedule a launch planning call and let us help you open with confidence.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Link href="/contact#schedule">
                  <Button
                    size="lg"
                    className="rounded-full bg-gradient-to-r from-yellow-500 via-yellow-600 to-amber-500 px-10 py-6 text-sm font-semibold uppercase tracking-[0.22em] text-white"
                    data-testid="button-cta-final"
                  >
                    Schedule a launch planning call
                  </Button>
                </Link>
                <Link href="/">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full border border-white/30 bg-white/10 px-10 py-6 text-sm font-semibold uppercase tracking-[0.22em] text-white/80 hover:text-white"
                    data-testid="button-home"
                  >
                    Back to Homepage
                  </Button>
                </Link>
              </div>
            </CardGlass>
          </div>
        </section>
      </AnimatedSection>
    </MarketingLayout>
  );
}
