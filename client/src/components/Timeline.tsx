import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
  title?: string;
  subtitle?: string;
  variant?: "light" | "dark";
}

function TimelineItem({
  item,
  index,
  variant,
}: {
  item: TimelineItem;
  index: number;
  variant: "light" | "dark";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cardClasses = cn(
    "transition-all",
    variant === "dark"
      ? "card-glass border border-white/12 bg-[#111b2f]/80 text-white"
      : "glass border-0 bg-card text-foreground",
  );

  const dotClasses = cn(
    "w-4 h-4 rounded-full border-4 flex-shrink-0",
    variant === "dark"
      ? "bg-[#B08A7C] border-[#05070f]"
      : "bg-primary border-background",
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      <div className={`flex items-center gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
        <div className="flex-1">
          <Card className={cardClasses} data-testid={`card-timeline-${index}`}>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-full",
                    variant === "dark" ? "bg-white/10" : "bg-primary/10",
                  )}
                >
                  <span
                    className={cn(
                      "font-heading font-bold",
                      variant === "dark" ? "text-white" : "text-primary",
                    )}
                    data-testid={`text-timeline-year-${index}`}
                  >
                    {item.year}
                  </span>
                </div>
                <h3
                  className={cn(
                    "font-heading font-semibold text-lg",
                    variant === "dark" ? "text-white" : "text-foreground",
                  )}
                  data-testid={`text-timeline-title-${index}`}
                >
                  {item.title}
                </h3>
              </div>
              <p
                className={cn(
                  variant === "dark" ? "text-white/80" : "text-muted-foreground",
                )}
                data-testid={`text-timeline-description-${index}`}
              >
                {item.description}
              </p>
            </CardContent>
          </Card>
        </div>
        <div className={cn(dotClasses, "z-10")}> </div>
        <div className="flex-1" />
      </div>
    </motion.div>
  );
}

export default function Timeline({
  items,
  title = "Our Journey",
  subtitle = "Two decades of empowering entrepreneurs",
  variant = "light",
}: TimelineProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={cn(
        "relative overflow-hidden py-16 sm:py-20",
        isDark ? "bg-[#071021] text-white" : "bg-card",
      )}
    >
      {isDark && (
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(176,138,124,0.16),transparent_65%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(12,18,36,0.95)_0%,rgba(7,16,33,0.65)_60%,rgba(7,16,33,0.45)_100%)]" />
        </div>
      )}
      <div className="container mx-auto px-4 max-w-4xl relative">
        <div className="mb-12 text-center">
          <h2
            className={cn(
              "font-heading font-bold text-3xl sm:text-4xl mb-4",
              isDark ? "text-white" : "text-foreground",
            )}
          >
            {title}
          </h2>
          <p className={cn("text-lg", isDark ? "text-white/70" : "text-muted-foreground")}>{subtitle}</p>
        </div>

        <div className="relative">
          <div
            className={cn(
              "absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2",
              isDark ? "bg-white/10" : "bg-border",
            )}
          />
          <div className="space-y-12">
            {items.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} variant={variant} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
