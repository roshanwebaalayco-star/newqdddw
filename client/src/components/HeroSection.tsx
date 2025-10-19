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
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-[-40%] h-[520px] rounded-full bg-gradient-to-b from-primary/20 via-transparent to-transparent blur-3xl" />
        <div className="absolute left-[-10%] top-[25%] h-[420px] w-[420px] rounded-full bg-gradient-to-br from-secondary/20 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pb-24 pt-20 lg:pb-28 lg:pt-32">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8 text-left text-white">
            {eyebrow && (
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                {eyebrow}
              </span>
            )}
            <div className="space-y-6">
              <h1 className="font-heading text-4xl font-semibold leading-[1.05] text-white sm:text-5xl xl:text-6xl">
                {title}
              </h1>
              {subtitle && (
                <p className="max-w-2xl text-base text-white/70 sm:text-lg">
                  {subtitle}
                </p>
              )}
            </div>

            {(ctaText && ctaLink) || (secondaryCtaText && secondaryCtaLink) ? (
              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
                {ctaText && ctaLink && (
                  <Link href={ctaLink}>
                    <Button
                      size="lg"
                      className="rounded-full bg-gradient-to-r from-primary via-primary/80 to-secondary px-10 py-6 text-sm font-semibold uppercase tracking-[0.22em] text-white shadow-[0_18px_65px_-30px_rgba(176,138,124,0.9)]"
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
                      className="rounded-full border border-white/30 bg-white/5 px-10 py-6 text-sm font-semibold uppercase tracking-[0.22em] text-white/80 transition hover:border-white/40 hover:text-white"
                      data-testid="button-hero-secondary"
                    >
                      {secondaryCtaText}
                    </Button>
                  </Link>
                )}
              </div>
            ) : null}

            {stats && stats.length > 0 && (
              <div className="grid gap-6 pt-10 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/15 bg-white/5 p-5 shadow-[0_20px_45px_-30px_rgba(0,0,0,0.75)]"
                  >
                    <p className="text-3xl font-semibold text-white xl:text-4xl">{stat.value}</p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/50">{stat.label}</p>
                    <p className="mt-3 text-sm text-white/60">{stat.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {backgroundImage && (
            <div className="relative h-full">
              <div className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 shadow-[0_32px_90px_-45px_rgba(0,0,0,0.85)]">
                <img
                  src={backgroundImage}
                  alt="Retail environment inspiration"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                {overlay && <div className="absolute inset-0 bg-gradient-to-br from-[#0b0d16]/40 via-transparent to-[#0b0d16]/65" />}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),_transparent_55%)]" />
              </div>
              <div className="absolute -bottom-10 left-8 w-[calc(100%-4rem)] rounded-3xl border border-white/10 bg-[#111526]/95 p-6 text-white shadow-[0_24px_70px_-35px_rgba(0,0,0,0.85)]">
                <p className="text-xs uppercase tracking-[0.4em] text-white/40">Signature approach</p>
                <p className="mt-2 text-base font-medium text-white/85">
                  Multi-disciplinary teams orchestrating strategy, architecture, and operations in lockstep.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
