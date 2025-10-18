import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { contactFormSchema, type ContactFormInput } from "@/lib/validation";
import { apiRequest } from "@/lib/queryClient";
import { Phone, Send, UserRound, AtSign } from "lucide-react";

const fieldMeta: Array<{ name: keyof ContactFormInput; label: string; placeholder: string; icon: ReactNode; type?: string }> = [
  {
    name: "fullName",
    label: "Full name",
    placeholder: "Your full name",
    icon: <UserRound className="h-4 w-4 text-primary" />,
  },
  {
    name: "email",
    label: "Email",
    placeholder: "you@nextventure.com",
    icon: <AtSign className="h-4 w-4 text-primary" />,
    type: "email",
  },
  {
    name: "phone",
    label: "Phone",
    placeholder: "(555) 123-4567",
    icon: <Phone className="h-4 w-4 text-primary" />,
    type: "tel",
  },
];

export default function EnhancedContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormInput) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", values);
      toast({
        title: "Thanks for reaching out!",
        description: "Our consultants will be in touch within one business day.",
      });
      form.reset();
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unexpected error";
      toast({
        title: "Something went wrong",
        description: message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="border border-border/60 bg-card/80 shadow-xl">
      <CardHeader className="space-y-2">
        <CardTitle className="font-heading text-2xl">Tell us about your concept</CardTitle>
        <p className="text-sm text-muted-foreground">
          Share a few details and we’ll curate a launch roadmap tailored to your goals.
        </p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {fieldMeta.map(({ name, label, placeholder, icon, type }) => (
                <FormField
                  key={name}
                  control={form.control}
                  name={name}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-sm font-medium">
                        {icon}
                        {label}
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type={type}
                          placeholder={placeholder}
                          disabled={isSubmitting}
                          data-testid={`input-${name}`}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">How can we support you?</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      rows={5}
                      placeholder="Share your goals, timelines, or any details our team should know."
                      disabled={isSubmitting}
                      data-testid="input-message"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              size="lg"
              className="w-full rounded-full"
              disabled={isSubmitting}
              data-testid="button-submit-contact"
            >
              {isSubmitting ? (
                <span className="inline-flex items-center gap-2">
                  <Send className="h-4 w-4 animate-spin" />
                  Sending...
                </span>
              ) : (
                "Send message"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
