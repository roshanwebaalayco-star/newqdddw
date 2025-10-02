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

const colors = [
  { bg: "bg-orange-500/10 dark:bg-orange-500/20", icon: "text-orange-500", gradient: "from-orange-500 to-red-500" },
  { bg: "bg-cyan-500/10 dark:bg-cyan-500/20", icon: "text-cyan-500", gradient: "from-cyan-500 to-blue-500" },
  { bg: "bg-pink-500/10 dark:bg-pink-500/20", icon: "text-pink-500", gradient: "from-pink-500 to-purple-500" },
];

export default function ServicesPreview({ services }: ServicesPreviewProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-card">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8 sm:mb-12">
          <Badge className="mb-3 sm:mb-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white border-0 text-xs sm:text-sm">
            Our Services
          </Badge>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4 px-4">
            Complete Solutions for Your Success
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
            From concept to launch, we provide everything you need to start and grow your retail business
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const color = colors[index % colors.length];
            return (
              <Card
                key={index}
                className="hover-elevate transition-all group overflow-hidden border-0"
                data-testid={`card-service-${index}`}
              >
                <CardHeader className="pb-4 sm:pb-6 p-5 sm:p-6">
                  <div className={`flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${color.bg} mb-3 sm:mb-4 transition-transform group-hover:scale-110 duration-300`}>
                    <Icon className={`h-7 w-7 sm:h-8 sm:w-8 ${color.icon}`} />
                  </div>
                  <CardTitle className="font-heading text-lg sm:text-xl" data-testid={`text-service-title-${index}`}>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 p-5 sm:p-6">
                  <p className="text-muted-foreground text-sm sm:text-base mb-4 leading-relaxed" data-testid={`text-service-description-${index}`}>
                    {service.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto font-semibold group-hover:translate-x-1 transition-transform text-sm"
                    asChild
                  >
                    <Link href="/services">
                      <span className={`bg-gradient-to-r ${color.gradient} bg-clip-text text-transparent`}>
                        Learn More
                      </span>
                      <ArrowRight className={`ml-2 h-4 w-4 ${color.icon}`} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Link href="/services">
            <Button size="lg" className="text-sm sm:text-base px-6 sm:px-8" data-testid="button-view-all-services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
