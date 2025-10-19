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
          <Badge className="mb-4 border border-white/30 bg-white/15 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/80">
            Why founders stay with us
          </Badge>
          <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            Everything you need to unlock a flagship launch
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-200 sm:text-lg">
            From first sketch to first sale, our teams align operations, data, and design so you can scale with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-none bg-transparent shadow-none"
                data-testid={`card-trust-${index}`}
              >
                <div className="relative h-full rounded-[1.75rem] border border-white/15 bg-gradient-to-br from-[#202a48]/95 via-[#1a2440]/95 to-[#141c33]/95 p-[1px] shadow-[0_38px_120px_-70px_rgba(15,23,42,1)]">
                  <div className="absolute inset-0 rounded-[1.75rem] bg-[radial-gradient(circle_at_18%_20%,rgba(176,138,124,0.22),transparent_60%)] opacity-80 transition duration-500 group-hover:opacity-100" />
                  <CardContent className="relative flex h-full flex-col gap-5 rounded-[1.75rem] bg-gradient-to-br from-[#151d34]/96 via-[#162039]/96 to-[#1a2542]/96 p-7 text-left text-slate-100">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/25 bg-gradient-to-br from-secondary/65 via-secondary/45 to-primary/70 text-white shadow-[0_20px_48px_-32px_rgba(120,131,255,0.6)]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-heading text-xl font-semibold text-white" data-testid={`text-trust-title-${index}`}>
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-300 sm:text-base" data-testid={`text-trust-description-${index}`}>
                        {item.description}
                      </p>
                    </div>
                    <span className="mt-auto inline-flex items-center text-xs uppercase tracking-[0.32em] text-slate-300">
                      Proven methodology
                    </span>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
