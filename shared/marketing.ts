import { z } from "zod";

export const iconIdSchema = z.enum([
  "handshake",
  "lightbulb",
  "package",
  "store",
  "map-pin",
  "megaphone",
  "sparkle",
  "rocket",
  "shield",
]);

export const heroStatSchema = z.object({
  label: z.string(),
  value: z.string(),
  description: z.string(),
});

export const heroContentSchema = z.object({
  eyebrow: z.string(),
  title: z.string(),
  subtitle: z.string(),
  ctaText: z.string(),
  ctaLink: z.string(),
  secondaryCtaText: z.string().optional(),
  secondaryCtaLink: z.string().optional(),
  backgroundImage: z.string().url(),
});

export const trustItemSchema = z.object({
  title: z.string(),
  description: z.string(),
  icon: iconIdSchema,
});

export const servicePreviewSchema = z.object({
  title: z.string(),
  description: z.string(),
  icon: iconIdSchema,
});

export const testimonialSchema = z.object({
  name: z.string(),
  role: z.string(),
  company: z.string(),
  content: z.string(),
});

export const homeContentSchema = z.object({
  hero: heroContentSchema,
  stats: z.array(heroStatSchema),
  trust: z.array(trustItemSchema),
  services: z.array(servicePreviewSchema),
  testimonials: z.array(testimonialSchema),
});

export type IconId = z.infer<typeof iconIdSchema>;
export type HeroStat = z.infer<typeof heroStatSchema>;
export type HeroContent = z.infer<typeof heroContentSchema>;
export type TrustItem = z.infer<typeof trustItemSchema>;
export type ServicePreview = z.infer<typeof servicePreviewSchema>;
export type Testimonial = z.infer<typeof testimonialSchema>;
export type HomeContent = z.infer<typeof homeContentSchema>;

export const blogPostSchema = z.object({
  id: z.string(),
  title: z.string(),
  excerpt: z.string(),
  date: z.string(),
  image: z.string().url(),
  slug: z.string(),
  readTime: z.string(),
  category: z.string(),
});

export const blogPostsSchema = z.array(blogPostSchema);

export type BlogPost = z.infer<typeof blogPostSchema>;
