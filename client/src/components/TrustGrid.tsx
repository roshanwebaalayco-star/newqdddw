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

const colors = [
  { bg: "bg-blue-500/10 dark:bg-blue-500/20", icon: "text-blue-500", badge: "bg-blue-500" },
  { bg: "bg-purple-500/10 dark:bg-purple-500/20", icon: "text-purple-500", badge: "bg-purple-500" },
  { bg: "bg-green-500/10 dark:bg-green-500/20", icon: "text-green-500", badge: "bg-green-500" },
];

export default function TrustGrid({ items }: TrustGridProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8 sm:mb-12">
          <Badge className="mb-3 sm:mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 text-xs sm:text-sm">
            Why Choose Us
          </Badge>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4 px-4">
            Why Choose CLC Retail Group?
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
            We provide the complete support system you need to launch and grow your retail business
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            const color = colors[index % colors.length];
            return (
              <Card key={index} className="glass border-0 hover-elevate transition-all group" data-testid={`card-trust-${index}`}>
                <CardContent className="flex flex-col items-center text-center p-5 sm:p-6 lg:p-8 space-y-3 sm:space-y-4">
                  <div className={`flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${color.bg} transition-transform group-hover:scale-110 duration-300`}>
                    <Icon className={`h-7 w-7 sm:h-8 sm:w-8 ${color.icon}`} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg sm:text-xl" data-testid={`text-trust-title-${index}`}>
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed" data-testid={`text-trust-description-${index}`}>
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
