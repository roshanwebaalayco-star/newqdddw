import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-40 glass-lg border-t border-glass-border"
        >
          <div className="container mx-auto px-4 py-4 max-w-7xl">
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-heading font-semibold text-lg mb-1">
                  Start Your Business with CLC Today
                </h3>
                <p className="text-sm text-muted-foreground">
                  Get expert guidance and complete support for your retail success
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Link href="/contact">
                  <Button size="lg" data-testid="button-sticky-cta">
                    Get Started
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleDismiss}
                  aria-label="Dismiss"
                  data-testid="button-dismiss-sticky-cta"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
