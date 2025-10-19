import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SchedulerModal } from "@/components/SchedulerModal";

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
          className="fixed inset-x-0 bottom-0 z-40 px-[max(16px,env(safe-area-inset-left))] pb-[max(16px,env(safe-area-inset-bottom))] md:bottom-6 md:inset-x-auto md:right-6 md:px-0 md:pb-0"
        >
          <div className="mx-auto w-full max-w-[680px] overflow-hidden rounded-[2rem] shadow-[0_18px_40px_rgba(0,0,0,.35)] ring-1 ring-white/10 md:max-w-max">
            <div className="relative">
              <div className="pointer-events-none absolute inset-0 bg-black/15 md:bg-black/10" />
              <div className="relative flex items-center justify-between gap-3 bg-gradient-to-r from-primary to-secondary px-5 py-3 md:gap-4 md:px-6 md:py-4">
                <div className="hidden flex-1 md:block">
                  <h3 className="mb-1 font-heading text-lg font-semibold text-white">
                    Start Your Business with CLC Today
                  </h3>
                  <p className="text-sm text-white/90">
                    Get expert guidance and complete support for your retail success
                  </p>
                </div>
                <div className="flex flex-1 items-center gap-2 md:flex-initial">
                  <SchedulerModal
                    triggerLabel="Schedule a consultation"
                    buttonProps={{ 
                      size: "default",
                      className: "flex-1 whitespace-nowrap rounded-full bg-white px-6 py-3 text-[15px] uppercase tracking-[0.18em] text-[#0f1222] shadow-lg hover:bg-white/95 focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent md:flex-initial md:text-sm" 
                    }}
                    analyticsId="cta-schedule-sticky"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleDismiss}
                    aria-label="Dismiss"
                    className="h-10 w-10 shrink-0 text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                    data-testid="button-dismiss-sticky-cta"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
