import { z } from "zod";

// Permissive international phone format: accepts UK (e.g. "01925 967366", "07700 900123",
// "+44 7700 900123"), US, and most international numbers. Allows digits, spaces, dashes,
// parentheses, dots, and an optional leading "+". Requires at least 7 and at most 15 digits
// (E.164 max length).
export const phoneNumberRegex = /^[+]?[\d\s().-]{7,25}$/;

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name must be 80 characters or less"),
  email: z.string().email("Please provide a valid email address"),
  phone: z
    .string()
    .regex(phoneNumberRegex, "Please enter a valid phone number")
    .refine((value) => {
      const digits = value.replace(/\D/g, "");
      return digits.length >= 7 && digits.length <= 15;
    }, "Please enter a valid phone number"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message is too long"),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

export const newsletterSchema = z.object({
  email: z.string().email("Please provide a valid email address"),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;
