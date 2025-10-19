import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { contactFormSchema, newsletterSchema, type ContactFormInput, type NewsletterInput } from "@shared/forms";
import { homeContent } from "./content/home";
import { blogPosts } from "./content/blog";
import { getLatestPosts } from "./lib/posts";

const contactSubmissions: Array<ContactFormInput & { submittedAt: string }> = [];
const newsletterSubscribers: Array<NewsletterInput & { subscribedAt: string }> = [];

function validationErrorResponse(error: unknown) {
  if (typeof error !== "object" || error === null || !("flatten" in (error as any))) {
    return "Invalid payload";
  }

  const { formErrors, fieldErrors } = (error as { flatten: () => { formErrors: string[]; fieldErrors: Record<string, string[]> } }).flatten();
  const messages = [...formErrors, ...Object.values(fieldErrors).flat()].filter(Boolean);
  return messages.join(" ") || "Invalid payload";
}

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  app.get("/api/content/home", (_req: Request, res: Response) => {
    res.json(homeContent);
  });

  app.get("/api/blog/posts", async (_req: Request, res: Response) => {
    const posts = await getLatestPosts(12);
    if (posts.length === 0) {
      return res.json(blogPosts);
    }

    res.set("Cache-Control", "public, max-age=300");
    res.json(posts);
  });

  app.get("/api/posts", async (_req: Request, res: Response) => {
    const posts = await getLatestPosts(3);
    res.set("Cache-Control", "public, max-age=300");
    res.json(posts);
  });

  app.post("/api/contact", (req: Request, res: Response) => {
    const parsed = contactFormSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({ message: validationErrorResponse(parsed.error) });
    }

    const submission = {
      ...parsed.data,
      submittedAt: new Date().toISOString(),
    };

    contactSubmissions.push(submission);
    res.status(201).json({ message: "Thanks for reaching out! Our team will follow up shortly." });
  });

  app.post("/api/newsletter", (req: Request, res: Response) => {
    const parsed = newsletterSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({ message: validationErrorResponse(parsed.error) });
    }

    const subscription = {
      ...parsed.data,
      subscribedAt: new Date().toISOString(),
    };

    newsletterSubscribers.push(subscription);
    res.status(201).json({ message: "You're on the list!" });
  });

  const httpServer = createServer(app);

  return httpServer;
}
