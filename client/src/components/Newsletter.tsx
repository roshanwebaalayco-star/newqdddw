import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, Sparkles } from "lucide-react";
import { newsletterSchema, type NewsletterInput } from "@/lib/validation";
import { apiRequest } from "@/lib/queryClient";

export default function Newsletter() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<NewsletterInput>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: NewsletterInput) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/newsletter", values);
      toast({
        title: "Welcome to our insider list!",
        description: "Expect launch strategies, case studies, and event invites in your inbox soon.",
      });
      form.reset();
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong";
      toast({
        title: "Unable to subscribe",
        description: message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto max-w-4xl px-4">
        <Card className="overflow-hidden border border-border/60 bg-gradient-to-br from-card/90 via-card/70 to-card/90 shadow-xl">
          <CardContent className="relative p-10 sm:p-14">
            <div className="pointer-events-none absolute -left-10 top-0 hidden h-40 w-40 rounded-full bg-primary/20 blur-3xl sm:block" />
            <div className="pointer-events-none absolute -right-12 bottom-0 hidden h-48 w-48 rounded-full bg-secondary/20 blur-3xl sm:block" />

            <div className="relative mx-auto max-w-2xl space-y-6 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary">
                <Mail className="h-7 w-7" />
              </div>
              <div className="space-y-3">
                <h2 className="font-heading text-3xl font-semibold sm:text-4xl">Stay ahead of every retail shift</h2>
                <p className="text-base text-muted-foreground sm:text-lg">
                  Get curated intelligence on emerging concepts, market moves, and launch tactics from the CLC team every other Friday.
                </p>
              </div>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex flex-col gap-3 sm:flex-row sm:items-center"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="flex-1 text-left">
                        <FormControl>
                          <Input
                            placeholder="you@nextbigretail.com"
                            {...field}
                            disabled={isSubmitting}
                            data-testid="input-newsletter-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="sm:w-auto"
                    data-testid="button-newsletter-subscribe"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <Sparkles className="h-4 w-4 animate-spin" />
                        Subscribing...
                      </span>
                    ) : (
                      "Subscribe"
                    )}
                  </Button>
                </form>
              </Form>

              <p className="text-xs text-muted-foreground">
                No spam — just actionable ideas and opportunities. Unsubscribe at any time.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
