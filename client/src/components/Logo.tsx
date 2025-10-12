interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src="/logo.jpeg" 
        alt="CLC Retail Group Logo" 
        className="h-10 w-auto object-contain"
      />
      {showText && (
        <span className="font-heading font-bold text-xl hidden sm:block">
          CLC Retail Group
        </span>
      )}
    </div>
  );
}
