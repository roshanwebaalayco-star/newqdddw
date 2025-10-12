interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", showText = true, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-8",
    md: "h-12",
    lg: "h-16"
  };

  return (
    <div className={`flex items-center gap-3 ${className}`} data-testid="logo-container">
      <img 
        src="/logo.jpeg" 
        alt="CLC Retail Group Logo" 
        className={`${sizeClasses[size]} w-auto object-contain`}
        data-testid="logo-image"
      />
      {showText && (
        <span className="font-heading font-bold text-xl hidden sm:block" data-testid="logo-text">
          CLC Retail Group
        </span>
      )}
    </div>
  );
}
