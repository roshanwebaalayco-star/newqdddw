import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    console.log("Newsletter signup:", email);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Welcome to Our Newsletter!",
      description: "You've been successfully subscribed to our insights and updates.",
    });
    
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <section className="py-16 sm:py-20 bg-card">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card className="glass-lg border-0">
          <CardContent className="p-8 sm:p-12">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl mb-3">
                Stay Informed
              </h2>
              <p className="text-muted-foreground">
                Subscribe to our newsletter for expert insights, success stories, and industry trends delivered to your inbox.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1"
                data-testid="input-newsletter-email"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="sm:w-auto"
                data-testid="button-newsletter-subscribe"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
