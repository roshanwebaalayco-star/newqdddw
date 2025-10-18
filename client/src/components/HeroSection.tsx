import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface HeroSectionProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
  overlay?: boolean;
  stats?: {
    label: string;
    value: string;
    description: string;
  }[];
}

export default function HeroSection({
  eyebrow,
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage,
  overlay = true,
  stats,
}: HeroSectionProps) {
  return (
    <section className="relative isolate overflow-hidden">
      {backgroundImage && (
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          {overlay && (
            <div className="absolute inset-0 bg-gradient-to-br from-background/92 via-background/85 to-background/92" />
          )}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.22),_rgba(255,255,255,0))]" />
        </div>
      )}

      <div className="relative z-10">
        <div className="container mx-auto flex flex-col gap-16 px-4 pb-24 pt-16 lg:flex-row lg:items-center lg:pt-28">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            {eyebrow && (
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 shadow-sm backdrop-blur">
                {eyebrow}
              </span>
            )}
            <div className="space-y-6">
              <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                {title}
              </h1>
              {subtitle && (
                <p className="mx-auto max-w-2xl text-base text-white/80 sm:text-lg lg:mx-0 lg:text-xl">
                  {subtitle}
                </p>
              )}
            </div>
            {(ctaText && ctaLink) || (secondaryCtaText && secondaryCtaLink) ? (
              <div className="flex flex-col items-center justify-center gap-3 pt-4 sm:flex-row sm:justify-start lg:pt-6">
                {ctaText && ctaLink && (
                  <Link href={ctaLink}>
                    <Button
                      size="lg"
                      className="min-w-[200px] rounded-full bg-gradient-to-r from-primary to-secondary px-8 text-base font-semibold shadow-lg shadow-primary/20"
                      data-testid="button-hero-cta"
                    >
                      {ctaText}
                    </Button>
                  </Link>
                )}
                {secondaryCtaText && secondaryCtaLink && (
                  <Link href={secondaryCtaLink}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="min-w-[200px] rounded-full border-white/50 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur transition hover:bg-white/20"
                      data-testid="button-hero-secondary"
                    >
                      {secondaryCtaText}
                    </Button>
                  </Link>
                )}
              </div>
            ) : null}
          </div>

          {stats && stats.length > 0 && (
            <div className="flex-1">
              <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur">
                <div className="grid gap-6 sm:grid-cols-3">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center sm:text-left">
                      <p className="text-sm uppercase tracking-wide text-white/60">{stat.label}</p>
                      <p className="mt-2 text-3xl font-semibold text-white sm:text-4xl">{stat.value}</p>
                      <p className="mt-2 text-sm text-white/70">{stat.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
