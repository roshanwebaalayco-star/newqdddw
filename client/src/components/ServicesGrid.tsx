import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon, Check } from "lucide-react";

interface ServiceDetail {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

interface ServicesGridProps {
  services: ServiceDetail[];
}

const colors = [
  { bg: "bg-blue-500/10 dark:bg-blue-500/20", icon: "text-blue-500", check: "text-blue-500" },
  { bg: "bg-green-500/10 dark:bg-green-500/20", icon: "text-green-500", check: "text-green-500" },
  { bg: "bg-purple-500/10 dark:bg-purple-500/20", icon: "text-purple-500", check: "text-purple-500" },
  { bg: "bg-orange-500/10 dark:bg-orange-500/20", icon: "text-orange-500", check: "text-orange-500" },
];

export default function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const color = colors[index % colors.length];
            return (
              <Card
                key={index}
                className="glass border-0 hover-elevate transition-all duration-300 group"
                data-testid={`card-service-detail-${index}`}
              >
                <CardHeader className="p-5 sm:p-6 lg:p-8">
                  <div className={`flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${color.bg} mb-3 sm:mb-4 transition-transform group-hover:scale-110 duration-300`}>
                    <Icon className={`h-7 w-7 sm:h-8 sm:w-8 ${color.icon}`} />
                  </div>
                  <CardTitle className="font-heading text-xl sm:text-2xl mb-2" data-testid={`text-service-detail-title-${index}`}>
                    {service.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm sm:text-base" data-testid={`text-service-detail-description-${index}`}>
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent className="p-5 sm:p-6 lg:p-8 pt-0">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-3 text-sm sm:text-base"
                        data-testid={`text-service-feature-${index}-${featureIndex}`}
                      >
                        <div className={`flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full ${color.bg} flex items-center justify-center mt-0.5`}>
                          <Check className={`h-3 w-3 sm:h-4 sm:w-4 ${color.check}`} />
                        </div>
                        <span className="text-muted-foreground leading-relaxed">{feature}</span>
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
