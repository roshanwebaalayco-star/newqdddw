import { Card, CardContent } from "@/components/ui/card";
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
}

function TimelineItem({ item, index }: { item: TimelineItem; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
          <Card className="glass border-0 hover-elevate transition-all" data-testid={`card-timeline-${index}`}>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                  <span className="font-heading font-bold text-primary" data-testid={`text-timeline-year-${index}`}>
                    {item.year}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-lg" data-testid={`text-timeline-title-${index}`}>
                  {item.title}
                </h3>
              </div>
              <p className="text-muted-foreground" data-testid={`text-timeline-description-${index}`}>
                {item.description}
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="w-4 h-4 rounded-full bg-primary border-4 border-background z-10 flex-shrink-0" />
        <div className="flex-1" />
      </div>
    </motion.div>
  );
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <section className="py-16 sm:py-20 bg-card">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4">
            Our Journey
          </h2>
          <p className="text-muted-foreground text-lg">
            Two decades of empowering entrepreneurs
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
          <div className="space-y-12">
            {items.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
