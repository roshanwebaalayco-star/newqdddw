import HeroSection from "@/components/HeroSection";
import TrustGrid from "@/components/TrustGrid";
import ServicesPreview from "@/components/ServicesPreview";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
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
            <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-primary/90 to-secondary/80 p-10 text-white shadow-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.3),_transparent)]" />
              <div className="relative space-y-6">
                <h3 className="font-heading text-3xl sm:text-4xl">
                  Ready to architect your next retail win?
                </h3>
                <p className="max-w-2xl text-base sm:text-lg text-white/80">
                  Schedule a strategy session to map your launch plan, explore location intelligence, and uncover quick wins that accelerate your first ninety days.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="rounded-full bg-white px-8 text-base font-semibold text-foreground shadow-lg"
                      data-testid="button-cta-bottom"
                    >
                      Connect with our team
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-full border-white/60 bg-white/10 px-8 text-base font-semibold text-white hover:bg-white/20"
                    >
                      See how we work
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
