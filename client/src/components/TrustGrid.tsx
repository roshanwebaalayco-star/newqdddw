import { Card, CardContent } from "@/components/ui/card";
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
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="glass hover-elevate transition-all duration-300 border-0"
                data-testid={`card-trust-${index}`}
              >
                <CardContent className="p-6 sm:p-8 text-center space-y-4">
                  <div className="flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-heading font-semibold text-xl" data-testid={`text-trust-title-${index}`}>
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground" data-testid={`text-trust-description-${index}`}>
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
