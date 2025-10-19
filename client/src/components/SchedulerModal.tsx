import { useState, type MouseEventHandler } from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { SchedulerEmbed } from "@/components/SchedulerEmbed";
import { cn } from "@/lib/utils";

interface SchedulerModalProps {
  triggerLabel?: string;
  triggerClassName?: string;
  buttonProps?: ButtonProps;
  analyticsId?: string;
}

export function SchedulerModal({
  triggerLabel = "Schedule a consultation",
  triggerClassName,
  buttonProps,
  analyticsId,
}: SchedulerModalProps) {
  const [open, setOpen] = useState(false);

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (buttonProps?.onClick) {
      buttonProps.onClick(event);
    }

    if (!event.defaultPrevented) {
      setOpen(true);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button
        {...buttonProps}
        data-analytics={analyticsId ?? "cta-schedule"}
        onClick={handleClick}
        className={cn(
          "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary via-primary/80 to-secondary px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_18px_60px_-30px_rgba(176,138,124,1)] focus-visible:ring-2 focus-visible:ring-clc-accent/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070f]",
          triggerClassName,
          buttonProps?.className,
        )}
      >
        {triggerLabel}
      </Button>
      <DialogContent className="max-w-5xl border border-white/10 bg-[#05070f]/95 text-white backdrop-blur-2xl">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl">Schedule a consultation</DialogTitle>
          <DialogDescription className="text-sm text-white/70">
            Pick a time that works best for your team. You’ll receive a confirmation instantly.
          </DialogDescription>
        </DialogHeader>
        <SchedulerEmbed className="mt-6" />
      </DialogContent>
    </Dialog>
  );
}
