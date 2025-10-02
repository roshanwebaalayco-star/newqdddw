import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { LucideIcon } from "lucide-react";

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
    <section className="py-16 sm:py-20 bg-card">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
            How We Can Help
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive solutions designed to make your business dreams a reality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="hover-elevate transition-all duration-300"
                data-testid={`card-service-${index}`}
              >
                <CardHeader>
                  <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="font-heading text-xl" data-testid={`text-service-title-${index}`}>
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base" data-testid={`text-service-description-${index}`}>
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <Button size="lg" variant="outline" data-testid="button-view-all-services">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
