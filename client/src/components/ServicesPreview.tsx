import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { LucideIcon, ArrowRight } from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface ServicesPreviewProps {
  services: Service[];
}

export default function ServicesPreview({ services }: ServicesPreviewProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-14 text-center text-white">
          <Badge className="mb-4 border border-white/30 bg-white/15 px-5 py-1 text-xs uppercase tracking-[0.35em] text-white/80">
            Our capabilities
          </Badge>
          <h2 className="font-heading text-3xl font-semibold sm:text-4xl lg:text-5xl">
            A single partner for strategy, delivery, and momentum
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-slate-200 sm:text-lg">
            We shape resilient retail concepts through tightly choreographed workstreams that blend analytics, architecture, and operations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-none bg-transparent"
                data-testid={`card-service-${index}`}
              >
                <div className="relative h-full rounded-[1.75rem] border border-white/12 bg-white/10 p-[1px] shadow-[0_50px_120px_-70px_rgba(10,14,26,1)]">
                  <div className="absolute inset-0 rounded-[1.75rem] bg-[radial-gradient(circle_at_20%_15%,rgba(176,138,124,0.18),transparent_60%)] opacity-80 transition duration-500 group-hover:opacity-100" />
                  <div className="relative flex h-full flex-col rounded-[1.75rem] bg-[#10172b]/95 p-8 text-white/90">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/30 bg-gradient-to-br from-primary/80 via-primary/60 to-secondary/70 text-white shadow-[0_18px_45px_-30px_rgba(176,138,124,0.65)]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardHeader className="p-0">
                      <CardTitle className="font-heading text-xl font-semibold text-white" data-testid={`text-service-title-${index}`}>
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="mt-4 flex-1 p-0 text-sm leading-relaxed text-white/85 sm:text-base" data-testid={`text-service-description-${index}`}>
                      {service.description}
                    </CardContent>
                    <div className="mt-6">
                      <Button
                        variant="ghost"
                        className="group inline-flex items-center gap-2 p-0 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 transition hover:text-white"
                        asChild
                      >
                        <Link href="/services">
                          Learn more
                          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link href="/services">
            <Button
              size="lg"
              className="rounded-full bg-gradient-to-r from-primary via-primary/80 to-secondary px-10 py-6 text-xs font-semibold uppercase tracking-[0.32em] text-white"
              data-testid="button-view-all-services"
            >
              View all services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
