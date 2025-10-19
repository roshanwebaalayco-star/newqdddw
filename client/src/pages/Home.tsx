import HeroSection from "@/components/HeroSection";
import TrustGrid from "@/components/TrustGrid";
import ServicesPreview from "@/components/ServicesPreview";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import MarketingLayout from "@/components/layouts/MarketingLayout";
import LoadingScreen from "@/components/LoadingScreen";
import { useHomeContent } from "@/hooks/useHomeContent";
import { useMemo } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Handshake,
  Lightbulb,
  Package,
  Store,
  MapPin,
  Megaphone,
  Sparkles,
  Rocket,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import type { IconId } from "@shared/marketing";

const iconMap: Record<IconId, LucideIcon> = {
  handshake: Handshake,
  lightbulb: Lightbulb,
  package: Package,
  store: Store,
  "map-pin": MapPin,
  megaphone: Megaphone,
  sparkle: Sparkles,
  rocket: Rocket,
  shield: ShieldCheck,
};

export default function Home() {
  const { data, isLoading, isError, error, refetch } = useHomeContent();

  const experienceImage =
    "https://images.unsplash.com/photo-1521540216272-a50305cd4421?auto=format&fit=crop&w=2000&q=80";

  const trustItems = useMemo(
    () =>
      data
        ? data.trust.map((item) => ({
            ...item,
            icon: iconMap[item.icon],
          }))
        : [],
    [data],
  );

  const services = useMemo(
    () =>
      data
        ? data.services.map((service) => ({
            ...service,
            icon: iconMap[service.icon],
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
          <h2 className="font-heading text-3xl font-semibold">We hit a snag</h2>
          <p className="mt-4 text-muted-foreground">
            {error?.message ?? "We couldn’t load the latest content. Please refresh or try again shortly."}
          </p>
          <div className="mt-6 flex justify-center">
            <Button onClick={() => refetch()}>Try again</Button>
          </div>
        </div>
      </MarketingLayout>
    );
  }

  return (
    <MarketingLayout showStickyCta>
      <HeroSection
        eyebrow={data.hero.eyebrow}
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        ctaText={data.hero.ctaText}
        ctaLink={data.hero.ctaLink}
        secondaryCtaText={data.hero.secondaryCtaText}
        secondaryCtaLink={data.hero.secondaryCtaLink}
        backgroundImage={data.hero.backgroundImage}
        stats={data.stats}
      />

      <AnimatedSection>
        <section className="py-16 lg:py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-6 text-white">
                <Badge className="border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70">
                  Studio signature
                </Badge>
                <h2 className="font-heading text-3xl font-semibold sm:text-4xl lg:text-5xl">
                  Retail spaces engineered to perform day one
                </h2>
                <p className="text-base text-white/70 sm:text-lg">
                  We choreograph a seamless journey from feasibility to footfall. Our specialists align data, design, procurement, and launch marketing so every opening hits targets.
                </p>
                <ul className="space-y-4 text-sm text-white/70 sm:text-base">
                  {["Immersive concept labs & prototyping", "Global supplier network & build orchestration", "Launch playbooks with embedded performance analytics"].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_35px_95px_-50px_rgba(0,0,0,0.85)]">
                  <img
                    src={experienceImage}
                    alt="Design studio collaboration"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0b0d16]/40 via-transparent to-[#0b0d16]/70" />
                  <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/10 bg-white/10 p-6 text-white backdrop-blur">
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

      <AnimatedSection>
        <TrustGrid items={trustItems} />
      </AnimatedSection>

      <AnimatedSection>
        <div className="container mx-auto max-w-5xl px-4 py-16">
          <TestimonialsSlider testimonials={data.testimonials} />
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <ServicesPreview services={services} />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <section className="py-20">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0f1222]/95 p-12 text-white shadow-[0_38px_110px_-60px_rgba(0,0,0,0.9)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),transparent_70%)]" />
              <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/60">Let’s collaborate</p>
                  <h3 className="font-heading text-3xl sm:text-4xl">
                    Ready to architect your next retail win?
                  </h3>
                  <p className="max-w-xl text-base text-white/70 sm:text-lg">
                    Partner with a team that treats every opening as a flagship moment. We’ll map your 90-day playbook and orchestrate every detail.
                  </p>
                </div>
                <div className="space-y-4">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="w-full rounded-full bg-gradient-to-r from-primary via-primary/80 to-secondary px-10 py-6 text-xs font-semibold uppercase tracking-[0.3em] text-white"
                      data-testid="button-cta-bottom"
                    >
                      Book a strategy session
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full rounded-full border border-white/30 bg-white/5 px-10 py-6 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 hover:text-white"
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
