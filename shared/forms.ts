import { z } from "zod";

export const phoneNumberRegex = /^(?:\+\d{1,3}\s?)?(?:\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name must be 80 characters or less"),
  email: z.string().email("Please provide a valid email address"),
  phone: z
    .string()
    .regex(phoneNumberRegex, "Please enter a valid phone number"),
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
