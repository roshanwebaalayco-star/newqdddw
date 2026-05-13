import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import nodemailer from "nodemailer";
import { contactFormSchema, newsletterSchema } from "@shared/forms";
import { insertLeadSchema } from "@shared/schema";
import { homeContent } from "./content/home";
import { blogPosts } from "./content/blog";
import { getLatestPosts, getPostBySlug } from "./lib/posts";
import { storage } from "./storage";

const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || "hello@clcretail.com";
const SMTP_FROM = process.env.SMTP_FROM || "CLC Retail <noreply@clcretailgroup.uk>";

function buildTransporter() {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || "465", 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

const transporter = buildTransporter();

function validationErrorResponse(error: unknown) {
  if (typeof error !== "object" || error === null || !("flatten" in (error as any))) {
    return "Invalid payload";
  }
  const { formErrors, fieldErrors } = (error as { flatten: () => { formErrors: string[]; fieldErrors: Record<string, string[]> } }).flatten();
  const messages = [...formErrors, ...Object.values(fieldErrors).flat()].filter(Boolean);
  return messages.join(" ") || "Invalid payload";
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

function buildEmailHtml(title: string, preheader: string, rows: Array<{ label: string; value: string }>, bodyNote?: string): string {
  const rowsHtml = rows
    .map(
      ({ label, value }) => `
      <tr>
        <td style="padding:8px 12px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:13px;color:#888;white-space:nowrap;vertical-align:top;width:140px;">${escapeHtml(label)}</td>
        <td style="padding:8px 12px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;color:#2C2E3A;vertical-align:top;">${value}</td>
      </tr>`,
    )
    .join("");

  const noteHtml = bodyNote
    ? `<p style="margin:20px 0 0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;color:#555;line-height:1.6;white-space:pre-wrap;">${escapeHtml(bodyNote)}</p>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f6;">
  <!-- preheader -->
  <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">${escapeHtml(preheader)}</div>

  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f6;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:#2C2E3A;border-radius:8px 8px 0 0;padding:28px 32px;text-align:center;">
              <span style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:20px;font-weight:700;color:#B08A7C;letter-spacing:0.05em;">CLC Retail Group</span>
              <br>
              <span style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:12px;color:#9499aa;letter-spacing:0.12em;text-transform:uppercase;">Retail Architecture Studio</span>
            </td>
          </tr>

          <!-- Title bar -->
          <tr>
            <td style="background:#B08A7C;padding:12px 32px;">
              <span style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:13px;font-weight:600;color:#fff;letter-spacing:0.08em;text-transform:uppercase;">${escapeHtml(title)}</span>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#fff;padding:28px 32px;border-radius:0 0 8px 8px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border:1px solid #eee;border-radius:6px;overflow:hidden;">
                ${rowsHtml}
              </table>
              ${noteHtml}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 32px;text-align:center;">
              <span style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:11px;color:#aaa;">
                This is an automated notification from <a href="https://clcretailgroup.uk" style="color:#B08A7C;text-decoration:none;">clcretailgroup.uk</a>. Do not reply to this email.
              </span>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

async function sendNotificationEmail(subject: string, text: string, context: string, html?: string) {
  if (!transporter) {
    console.log(`[EMAIL] (SMTP not configured — set SMTP_HOST, SMTP_USER, SMTP_PASS) ${context}`);
    console.log(`To: ${NOTIFICATION_EMAIL} | Subject: ${subject}`);
    console.log(`Body:\n${text}`);
    return;
  }

  try {
    const info = await transporter.sendMail({
      from: SMTP_FROM,
      to: NOTIFICATION_EMAIL,
      subject,
      text,
      ...(html ? { html } : {}),
    });
    console.log(`[SMTP SUCCESS] ${context} → ${NOTIFICATION_EMAIL} (messageId: ${info.messageId})`);
  } catch (err) {
    console.error(`[SMTP ERROR] ${context}`, err);
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

    try {
      const submission = await storage.createContactSubmission(parsed.data);

      const contactText = `Name: ${parsed.data.fullName}
Email: ${parsed.data.email}
Phone: ${parsed.data.phone}
Submitted at: ${submission.submittedAt}

Message:
${parsed.data.message}`;

      const safeContactEmail = escapeHtml(parsed.data.email);
      const contactHtml = buildEmailHtml(
        "New Contact Form Submission",
        `${parsed.data.fullName} just filled out the contact form on clcretailgroup.uk`,
        [
          { label: "Name", value: escapeHtml(parsed.data.fullName) },
          { label: "Email", value: `<a href="mailto:${safeContactEmail}" style="color:#B08A7C;">${safeContactEmail}</a>` },
          { label: "Phone", value: escapeHtml(parsed.data.phone || "Not provided") },
          { label: "Submitted at", value: escapeHtml(new Date(submission.submittedAt).toUTCString()) },
        ],
        parsed.data.message,
      );

      await sendNotificationEmail(
        `New contact form submission from ${parsed.data.fullName}`,
        contactText,
        `Contact form (${parsed.data.email})`,
        contactHtml,
      );

      res.status(201).json({ message: "Thanks for reaching out! Our team will follow up shortly." });
    } catch (error) {
      console.error("Error saving contact submission:", error);
      res.status(500).json({ message: "Failed to process your message. Please try again." });
    }
  });

  app.post("/api/newsletter", async (req: Request, res: Response) => {
    const parsed = newsletterSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: validationErrorResponse(parsed.error) });
    }

    try {
      const subscription = await storage.createNewsletterSubscriber(parsed.data);
      const subscribedAt = subscription?.subscribedAt ?? new Date();

      const safeNewsletterEmail = escapeHtml(parsed.data.email);
      const newsletterHtml = buildEmailHtml(
        "New Newsletter Subscriber",
        `${parsed.data.email} just subscribed to the CLC Retail Group newsletter`,
        [
          { label: "Email", value: `<a href="mailto:${safeNewsletterEmail}" style="color:#B08A7C;">${safeNewsletterEmail}</a>` },
          { label: "Subscribed at", value: escapeHtml(new Date(subscribedAt).toUTCString()) },
        ],
      );

      await sendNotificationEmail(
        `New newsletter subscription: ${parsed.data.email}`,
        `New subscriber: ${parsed.data.email}\nSubscribed at: ${new Date(subscribedAt).toISOString()}`,
        `Newsletter (${parsed.data.email})`,
        newsletterHtml,
      );

      res.status(201).json({ message: "You're on the list!" });
    } catch (error) {
      console.error("Error saving newsletter subscriber:", error);
      res.status(500).json({ message: "Failed to process your subscription. Please try again." });
    }
  });

  app.post("/api/leads", async (req: Request, res: Response) => {
    const parsed = insertLeadSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ message: validationErrorResponse(parsed.error) });
    }

    try {
      const lead = await storage.createLead(parsed.data);

      const leadText = `Name: ${parsed.data.name}
Email: ${parsed.data.email}
Location: ${parsed.data.location || "Not provided"}
Project stage: ${parsed.data.projectStage}`;

      const safeLeadEmail = escapeHtml(parsed.data.email);
      const leadHtml = buildEmailHtml(
        "New Lead Captured",
        `${parsed.data.name} just downloaded the Location Selection Checklist on clcretailgroup.uk`,
        [
          { label: "Name", value: escapeHtml(parsed.data.name) },
          { label: "Email", value: `<a href="mailto:${safeLeadEmail}" style="color:#B08A7C;">${safeLeadEmail}</a>` },
          { label: "Location", value: escapeHtml(parsed.data.location || "Not provided") },
          { label: "Project stage", value: escapeHtml(parsed.data.projectStage) },
        ],
      );

      await sendNotificationEmail(
        `New lead generated: ${parsed.data.name}`,
        leadText,
        `Lead capture (${parsed.data.email})`,
        leadHtml,
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
  // We deliberately do NOT install another catch-all here.

  const httpServer = createServer(app);
  return httpServer;
}
