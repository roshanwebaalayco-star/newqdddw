import { useMemo } from "react";
import { CalendarClock, Mail, Phone } from "lucide-react";
import { CardGlass } from "@/components/CardGlass";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const FALLBACK_EMAIL = "hello@clcretail.com";
const FALLBACK_PHONE = "01925 967366";

function resolveEnv(name: string): string | undefined {
  const viteValue = (import.meta.env as Record<string, string | undefined>)[`VITE_${name}`];
  if (viteValue) {
    return viteValue;
  }

  const nextValue = (import.meta.env as Record<string, string | undefined>)[`NEXT_PUBLIC_${name}`];
  return nextValue;
}

export interface SchedulerEmbedProps {
  className?: string;
}

export function SchedulerEmbed({ className }: SchedulerEmbedProps) {
  const { provider, url } = useMemo(() => {
    const rawProvider = resolveEnv("SCHEDULER_PROVIDER")?.toLowerCase() ?? "none";
    const sanitizedProvider = ["calcom", "calendly"].includes(rawProvider) ? rawProvider : "none";
    const resolvedUrl = resolveEnv("SCHEDULER_URL");

    return {
      provider: sanitizedProvider,
      url: resolvedUrl && resolvedUrl.length > 0 ? resolvedUrl : undefined,
    } as const;
  }, []);

  if (!url || provider === "none") {
    return (
      <CardGlass className={cn("flex flex-col gap-4 p-8 text-white", className)}>
        <div className="flex items-center gap-3">
          <CalendarClock className="h-5 w-5 text-primary" />
          <h3 className="font-heading text-xl">Talk with our launch strategists</h3>
        </div>
        <p className="text-sm leading-relaxed text-white/85">
          Scheduling links are temporarily unavailable. Reach out directly and we will coordinate a time that fits your agenda.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <a
            href={`mailto:${FALLBACK_EMAIL}`}
            className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clc-accent/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070f] hover:border-white/40"
            aria-label="Email CLC Retail LTD"
          >
            <Mail className="h-4 w-4" />
            {FALLBACK_EMAIL}
          </a>
          <a
            href={`tel:${FALLBACK_PHONE.replace(/[^\d+]/g, "")}`}
            className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clc-accent/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070f] hover:border-white/40"
            aria-label="Call CLC Retail LTD"
          >
            <Phone className="h-4 w-4" />
            {FALLBACK_PHONE}
          </a>
        </div>
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">
          Prefer a callback? We respond within one business day.
        </p>
      </CardGlass>
    );
  }

  const iframeProps =
    provider === "calcom"
      ? {
          src: `${url}?embed=true`,
          allow: "camera; microphone; fullscreen",
        }
      : {
          src: `${url}?hide_gdpr_banner=1&primary_color=B08A7C`,
          allow: undefined,
        };

  return (
    <div className={cn("overflow-hidden rounded-3xl border border-white/12 bg-[#0c1220]/60 shadow-[0_32px_80px_-45px_rgba(0,0,0,0.75)]", className)}>
      <iframe
        title="Schedule a consultation"
        {...iframeProps}
        loading="lazy"
        className="h-[720px] w-full min-h-[480px] bg-[#0c1220]"
      />
      <div className="flex flex-col gap-3 border-t border-white/10 bg-white/5 p-6 text-sm text-white/80 sm:flex-row sm:items-center sm:justify-between">
        <span>Need a different time? Email {FALLBACK_EMAIL} and our team will coordinate manually.</span>
        <Button asChild variant="ghost" size="sm" className="rounded-full border border-white/20 bg-white/10 px-4 text-white/80 hover:text-white">
          <a href={`mailto:${FALLBACK_EMAIL}`} aria-label="Email CLC Retail Group support">
            Request a custom time
          </a>
        </Button>
      </div>
    </div>
  );
}
