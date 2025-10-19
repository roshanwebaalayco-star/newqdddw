import { cn } from "@/lib/utils";

interface LoadingScreenProps {
  className?: string;
  message?: string;
  fullHeight?: boolean;
}

export default function LoadingScreen({ className, message = "Loading...", fullHeight = true }: LoadingScreenProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center justify-center gap-4 text-muted-foreground",
        fullHeight ? "min-h-[320px]" : "py-10",
        className,
      )}
      role="status"
      aria-live="polite"
    >
      <span className="relative flex h-12 w-12">
        <span className="absolute inline-flex h-full w-full animate-[ping_1.5s_linear_infinite] rounded-full bg-primary/30" />
        <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-lg">
          <svg
            className="h-5 w-5 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
          </svg>
        </span>
      </span>
      <p className="text-sm font-medium">{message}</p>
    </div>
  );
}
