import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  overlay?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage,
  overlay = true,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {backgroundImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          {overlay && (
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
          )}
        </>
      )}

      <div className="container mx-auto px-4 py-20 max-w-4xl relative z-10">
        <div className="text-center space-y-6 animate-in fade-in duration-700">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          {ctaText && ctaLink && (
            <div className="pt-4">
              <Link href={ctaLink}>
                <Button size="lg" className="text-base px-8" data-testid="button-hero-cta">
                  {ctaText}
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
