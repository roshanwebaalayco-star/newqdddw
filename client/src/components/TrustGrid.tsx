import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface TrustItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface TrustGridProps {
  items: TrustItem[];
}

export default function TrustGrid({ items }: TrustGridProps) {
  return (
    <section className="py-20 sm:py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-14 text-center">
          <Badge className="mb-4 border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70">
            Why founders stay with us
          </Badge>
          <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            Everything you need to unlock a flagship launch
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:text-lg">
            From first sketch to first sale, our teams align operations, data, and design so you can scale with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border border-white/10 bg-white/5 shadow-[0_32px_80px_-50px_rgba(0,0,0,0.9)]"
                data-testid={`card-trust-${index}`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),transparent_65%)] opacity-60 transition duration-500 group-hover:opacity-80" />
                <CardContent className="relative flex h-full flex-col gap-5 p-7 text-left text-white">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-heading text-xl font-semibold" data-testid={`text-trust-title-${index}`}>
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/70 sm:text-base" data-testid={`text-trust-description-${index}`}>
                      {item.description}
                    </p>
                  </div>
                  <span className="mt-auto inline-flex items-center text-xs uppercase tracking-[0.32em] text-white/50">
                    Proven methodology
                  </span>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
