import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  company: string;
}

interface TestimonialsSliderProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSlider({ testimonials }: TestimonialsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) return testimonials.length - 1;
      if (nextIndex >= testimonials.length) return 0;
      return nextIndex;
    });
  };

  return (
    <div className="relative py-8">
      <div className="overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          >
            <Card className="border border-white/10 bg-[#101426]/95 text-white shadow-[0_28px_90px_-60px_rgba(0,0,0,0.9)]">
              <CardContent className="p-8 sm:p-12">
                <Quote className="mb-6 h-12 w-12 text-white/25" />
                <p className="mb-6 text-lg leading-relaxed text-white/80" data-testid={`text-testimonial-content-${currentIndex}`}>
                  "{testimonials[currentIndex].content}"
                </p>
                <div>
                  <p className="font-heading text-lg font-semibold" data-testid={`text-testimonial-name-${currentIndex}`}>
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-xs uppercase tracking-[0.32em] text-white/50" data-testid={`text-testimonial-role-${currentIndex}`}>
                    {testimonials[currentIndex].role} — {testimonials[currentIndex].company}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={() => paginate(-1)}
          className="rounded-full border-white/20 bg-white/5 text-white hover:border-white/40"
          aria-label="Previous testimonial"
          data-testid="button-prev-testimonial"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? "w-10 bg-white" : "w-2 bg-white/30"
              }`}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              aria-label={`Go to testimonial ${index + 1}`}
              data-testid={`button-testimonial-indicator-${index}`}
            />
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={() => paginate(1)}
          className="rounded-full border-white/20 bg-white/5 text-white hover:border-white/40"
          aria-label="Next testimonial"
          data-testid="button-next-testimonial"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
