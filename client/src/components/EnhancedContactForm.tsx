import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function EnhancedContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [focused, setFocused] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "fullName":
        return value.length < 2 ? "Name must be at least 2 characters" : "";
      case "email":
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "Invalid email address" : "";
      case "phone":
        return !/^\(\d{3}\)\s\d{3}-\d{4}$/.test(value) && value.length > 0
          ? "Format: (555) 123-4567"
          : "";
      case "message":
        return value.length < 10 ? "Message must be at least 10 characters" : "";
      default:
        return "";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    console.log("Contact form submitted:", formData);
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSuccess(true);
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });
      setIsSubmitting(false);
      setIsSuccess(false);
    }, 1000);
  };

  const FloatingLabelInput = ({
    label,
    name,
    type = "text",
    required = false,
  }: {
    label: string;
    name: string;
    type?: string;
    required?: boolean;
  }) => {
    const value = formData[name as keyof typeof formData];
    const isFocused = focused === name;
    const hasValue = value.length > 0;
    const hasError = errors[name];

    return (
      <div className="relative">
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          onFocus={() => setFocused(name)}
          onBlur={() => setFocused(null)}
          required={required}
          className={`w-full px-4 pt-6 pb-2 rounded-md border bg-background transition-all ${
            hasError ? "border-destructive" : "border-input focus:border-primary"
          } focus:outline-none focus:ring-2 focus:ring-primary/20`}
          data-testid={`input-${name}`}
        />
        <label
          htmlFor={name}
          className={`absolute left-4 transition-all pointer-events-none ${
            isFocused || hasValue
              ? "top-2 text-xs text-primary"
              : "top-1/2 -translate-y-1/2 text-base text-muted-foreground"
          }`}
        >
          {label}
        </label>
        {hasError && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs text-destructive mt-1"
            data-testid={`error-${name}`}
          >
            {hasError}
          </motion.p>
        )}
      </div>
    );
  };

  const FloatingLabelTextarea = ({
    label,
    name,
    required = false,
  }: {
    label: string;
    name: string;
    required?: boolean;
  }) => {
    const value = formData[name as keyof typeof formData];
    const isFocused = focused === name;
    const hasValue = value.length > 0;
    const hasError = errors[name];

    return (
      <div className="relative">
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          onFocus={() => setFocused(name)}
          onBlur={() => setFocused(null)}
          required={required}
          rows={5}
          className={`w-full px-4 pt-6 pb-2 rounded-md border bg-background transition-all resize-none ${
            hasError ? "border-destructive" : "border-input focus:border-primary"
          } focus:outline-none focus:ring-2 focus:ring-primary/20`}
          data-testid={`input-${name}`}
        />
        <label
          htmlFor={name}
          className={`absolute left-4 transition-all pointer-events-none ${
            isFocused || hasValue
              ? "top-2 text-xs text-primary"
              : "top-6 text-base text-muted-foreground"
          }`}
        >
          {label}
        </label>
        {hasError && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs text-destructive mt-1"
            data-testid={`error-${name}`}
          >
            {hasError}
          </motion.p>
        )}
      </div>
    );
  };

  return (
    <Card className="glass border-0">
      <CardHeader>
        <CardTitle className="font-heading text-2xl">Send Us a Message</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <FloatingLabelInput label="Full Name" name="fullName" required />
          <FloatingLabelInput label="Email Address" name="email" type="email" required />
          <FloatingLabelInput label="Phone Number" name="phone" type="tel" required />
          <FloatingLabelTextarea label="Message" name="message" required />

          <Button
            type="submit"
            size="lg"
            className="w-full relative"
            disabled={isSubmitting}
            data-testid="button-submit-contact"
          >
            {isSubmitting ? (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: isSuccess ? "100%" : "50%" }}
                transition={{ duration: 1 }}
                className="absolute left-0 top-0 bottom-0 bg-primary/20 rounded-md"
              />
            ) : null}
            {isSuccess ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex items-center gap-2"
              >
                <Check className="h-5 w-5" />
                <span>Sent!</span>
              </motion.div>
            ) : isSubmitting ? (
              "Sending..."
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
