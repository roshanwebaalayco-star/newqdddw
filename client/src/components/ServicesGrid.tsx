import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceDetail {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

interface ServicesGridProps {
  services: ServiceDetail[];
}

export default function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="glass border-0 hover-elevate transition-all duration-300"
                data-testid={`card-service-detail-${index}`}
              >
                <CardHeader>
                  <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-heading text-2xl" data-testid={`text-service-detail-title-${index}`}>
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base" data-testid={`text-service-detail-description-${index}`}>
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                        data-testid={`text-service-feature-${index}-${featureIndex}`}
                      >
                        <span className="text-primary mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
