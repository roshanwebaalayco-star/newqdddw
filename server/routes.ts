import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { Resend } from "resend";
import { contactFormSchema, newsletterSchema, type ContactFormInput, type NewsletterInput } from "@shared/forms";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || "hello@clcretail.com";
// Resend's verified default sender. Replace with your own verified domain sender once
// you've added and verified a domain in Resend (e.g. "no-reply@clcretail.com").
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "CLC Retail <onboarding@resend.dev>";
import { insertLeadSchema } from "@shared/schema";
import { homeContent } from "./content/home";
import { blogPosts } from "./content/blog";
import { getLatestPosts, getPostBySlug } from "./lib/posts";
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

async function sendNotificationEmail(subject: string, text: string, context: string) {
  if (!resend) {
    console.log(`[EMAIL NOTIFICATION] (MOCKED — set RESEND_API_KEY to enable) ${context}`);
    console.log(`To: ${NOTIFICATION_EMAIL}`);
    console.log(`Subject: ${subject}`);
    console.log(`Body:\n${text}`);
    return;
  }

  try {
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFICATION_EMAIL,
      subject,
      text,
    });

    if (error) {
      console.error(`[RESEND ERROR] ${context}`, JSON.stringify(error, null, 2));
    } else {
      console.log(`[RESEND SUCCESS] ${context} → ${NOTIFICATION_EMAIL} (id: ${data?.id})`);
    }
  } catch (error) {
    console.error(`[RESEND EXCEPTION] ${context}`, error);
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/content/home", (_req: Request, res: Response) => {
    res.json(homeContent);
  });

  app.get("/api/posts", async (_req: Request, res: Response) => {
    try {
      const posts = await getLatestPosts(3);
      res.set("Cache-Control", "public, max-age=300");
      res.json(posts.length > 0 ? posts : blogPosts.slice(0, 3));
    } catch (error) {
      console.error("Error in /api/posts:", error);
      res.json(blogPosts.slice(0, 3));
    }
  });

  app.get("/api/blog/posts", async (_req: Request, res: Response) => {
    try {
      const posts = await getLatestPosts(50);
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
      const mdxPost = await getPostBySlug(slug);
      if (mdxPost) {
        res.set("Cache-Control", "public, max-age=300");
        return res.json(mdxPost);
      }

      // Fallback to the static seed posts
      const fallback = blogPosts.find((p) => p.slug === slug);
      if (fallback) {
        return res.json({
          ...fallback,
          body: `# ${fallback.title}\n\n${fallback.excerpt}\n\nThe full article is being prepared. In the meantime, our team can share tailored guidance on this topic — get in touch and we will walk you through it.`,
        });
      }

      return res.status(404).json({ message: "Post not found" });
    } catch (error) {
      console.error("Error fetching blog post:", error);
      res.status(500).json({ message: "Error fetching post" });
    }
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

    await sendNotificationEmail(
      `New contact form submission from ${parsed.data.fullName}`,
      `Name: ${parsed.data.fullName}
Email: ${parsed.data.email}
Phone: ${parsed.data.phone}
Submitted at: ${submission.submittedAt}

Message:
${parsed.data.message}`,
      `Contact form (${parsed.data.email})`,
    );

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

    await sendNotificationEmail(
      `New newsletter subscription: ${parsed.data.email}`,
      `New subscriber: ${parsed.data.email}\nSubscribed at: ${subscription.subscribedAt}`,
      `Newsletter (${parsed.data.email})`,
    );

    res.status(201).json({ message: "You're on the list!" });
  });

  app.post("/api/leads", async (req: Request, res: Response) => {
    const parsed = insertLeadSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({ message: validationErrorResponse(parsed.error) });
    }

    try {
      const lead = await storage.createLead(parsed.data);

      await sendNotificationEmail(
        `New lead generated: ${parsed.data.name}`,
        `Name: ${parsed.data.name}
Email: ${parsed.data.email}
Location: ${parsed.data.location || "Not provided"}
Project stage: ${parsed.data.projectStage}`,
        `Lead capture (${parsed.data.email})`,
      );

      res.status(201).json({
        message: "Thanks! Your Location Selection Checklist is downloading now. Our team will be in touch shortly.",
        downloadUrl: "/downloads/location-selection-checklist.pdf",
        lead: { id: lead.id },
      });
    } catch (error) {
      console.error("Error creating lead:", error);
      res.status(500).json({ message: "Failed to process your request. Please try again." });
    }
  });

  // The SPA catch-all + static asset serving lives in server/vite.ts (setupVite for
  // dev, serveStatic for production), wired up in server/index.ts AFTER registerRoutes.
  // We deliberately do NOT install another catch-all here — doing so would shadow
  // the static asset middleware in production and serve index.html for /assets/*.

  const httpServer = createServer(app);

  return httpServer;
}
