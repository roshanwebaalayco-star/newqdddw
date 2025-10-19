import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Target, Lightbulb, Zap, Heart } from "lucide-react";

interface Value {
  title: string;
  description: string;
}

interface ValuesCardProps {
  values: Value[];
}

const icons = [Sparkles, Target, Lightbulb, Zap, Heart];

const colors = [
  { bg: "bg-indigo-500/10 dark:bg-indigo-500/20", icon: "text-indigo-500" },
  { bg: "bg-emerald-500/10 dark:bg-emerald-500/20", icon: "text-emerald-500" },
  { bg: "bg-amber-500/10 dark:bg-amber-500/20", icon: "text-amber-500" },
  { bg: "bg-rose-500/10 dark:bg-rose-500/20", icon: "text-rose-500" },
  { bg: "bg-violet-500/10 dark:bg-violet-500/20", icon: "text-violet-500" },
];

export default function ValuesCard({ values }: ValuesCardProps) {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8 sm:mb-12 text-white">
          <Badge className="mb-3 sm:mb-4 border border-white/25 bg-white/10 text-xs sm:text-sm uppercase tracking-[0.35em] text-white/70">
            Our Values
          </Badge>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4 px-4">
            The values that drive us
          </h2>
          <p className="text-white/75 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
            Our commitment to excellence is built on these core principles
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {values.map((value, index) => {
            const Icon = icons[index % icons.length];
            const color = colors[index % colors.length];
            return (
              <Card
                key={index}
                className="card-glass border border-white/12 bg-white/10 hover:-translate-y-1 transition-all duration-300 group"
                data-testid={`card-value-${index}`}
              >
                <CardHeader className="p-5 sm:p-6">
                  <div className={`flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${color.bg} mb-3 sm:mb-4 transition-transform group-hover:scale-110 group-hover:rotate-6 duration-300`}>
                    <Icon className={`h-6 w-6 sm:h-7 sm:w-7 ${color.icon}`} />
                  </div>
                  <CardTitle className="font-heading text-lg sm:text-xl text-white" data-testid={`text-value-title-${index}`}>
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-5 sm:p-6 pt-0">
                  <p className="text-white/80 text-sm sm:text-base leading-relaxed" data-testid={`text-value-description-${index}`}>
                    {value.description}
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
