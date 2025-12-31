import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import path from "path";
import fs from "fs";
import { contactFormSchema, newsletterSchema, type ContactFormInput, type NewsletterInput } from "@shared/forms";
import { insertLeadSchema } from "@shared/schema";
import { homeContent } from "./content/home";
import { blogPosts } from "./content/blog";
import { getLatestPosts } from "./lib/posts";
import { storage } from "./storage";

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
    try {
      const posts = await getLatestPosts(12);
      if (posts && posts.length > 0) {
        res.set("Cache-Control", "public, max-age=300");
        return res.json(posts);
      }
      return res.json(blogPosts);
    } catch (error) {
      console.error("Error in /api/blog/posts:", error);
      return res.json(blogPosts);
    }
  });

  app.get("/api/blog/posts/:slug", async (req: Request, res: Response) => {
    try {
      const { slug } = req.params;
      const posts = await getLatestPosts(100);
      const post = posts.find(p => p.slug === slug) || blogPosts.find(p => p.slug === slug);
      
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
      res.json(post);
    } catch (error) {
      res.status(500).json({ message: "Error fetching post" });
    }
  });

  // Catch-all route for SPA - MUST BE LAST
  app.get("*", (_req: Request, res: Response, next) => {
    if (_req.path.startsWith("/api")) {
      return next();
    }
    
    // In development, let Vite handle it
    if (process.env.NODE_ENV !== "production") {
      return next();
    }

    const indexPath = path.resolve(process.cwd(), "dist", "public", "index.html");
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      // Fallback for case where dist/public might not be ready yet
      res.status(404).send("Application not ready. Please try again in a few moments.");
    }
  });


  app.get("/api/posts", async (_req: Request, res: Response) => {
    const posts = await getLatestPosts(3);
    res.set("Cache-Control", "public, max-age=300");
    res.json(posts);
  });

  app.post("/api/contact", async (req: Request, res: Response) => {
    const parsed = contactFormSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({ message: validationErrorResponse(parsed.error) });
    }

    const submission = {
      ...parsed.data,
      submittedAt: new Date().toISOString(),
    };

    contactSubmissions.push(submission);
    
    // Log the data for the user as requested
    console.log(`[EMAIL NOTIFICATION] to: hello@clcretail.com`);
    console.log(`Subject: New Contact Form Submission from ${parsed.data.fullName}`);
    console.log(`Data:`, JSON.stringify(submission, null, 2));

    res.status(201).json({ message: "Thanks for reaching out! Our team will follow up shortly." });
  });

  app.post("/api/newsletter", async (req: Request, res: Response) => {
    const parsed = newsletterSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({ message: validationErrorResponse(parsed.error) });
    }

    const subscription = {
      ...parsed.data,
      subscribedAt: new Date().toISOString(),
    };

    newsletterSubscribers.push(subscription);

    console.log(`[EMAIL NOTIFICATION] to: hello@clcretail.com`);
    console.log(`Subject: New Newsletter Subscription: ${parsed.data.email}`);

    res.status(201).json({ message: "You're on the list!" });
  });

  app.post("/api/leads", async (req: Request, res: Response) => {
    const parsed = insertLeadSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({ message: validationErrorResponse(parsed.error) });
    }

    try {
      const lead = await storage.createLead(parsed.data);
      
      console.log(`[EMAIL NOTIFICATION] to: hello@clcretail.com`);
      console.log(`Subject: New Lead Generated: ${parsed.data.name}`);
      console.log(`Details: Stage: ${parsed.data.projectStage}, Email: ${parsed.data.email}`);

      res.status(201).json({ 
        message: "Thanks! Your Location Selection Checklist is downloading now. We've also sent a copy to your email.",
        downloadUrl: "/downloads/location-selection-checklist.pdf",
        lead: { id: lead.id }
      });
    } catch (error) {
      console.error("Error creating lead:", error);
      res.status(500).json({ message: "Failed to process your request. Please try again." });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
