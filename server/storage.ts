import { eq, desc } from "drizzle-orm";
import {
  users,
  leads,
  contactSubmissions,
  newsletterSubscribers,
  type User,
  type InsertUser,
  type Lead,
  type InsertLead,
  type ContactSubmission,
  type InsertContactSubmission,
  type NewsletterSubscriber,
  type InsertNewsletterSubscriber,
} from "@shared/schema";
import { db } from "./db";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createLead(lead: InsertLead): Promise<Lead>;
  getLeads(): Promise<Lead[]>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  createNewsletterSubscriber(subscriber: InsertNewsletterSubscriber): Promise<NewsletterSubscriber | undefined>;
  getNewsletterSubscribers(): Promise<NewsletterSubscriber[]>;
}

export class DbStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [row] = await db.select().from(users).where(eq(users.id, id));
    return row;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [row] = await db
      .select()
      .from(users)
      .where(eq(users.username, username));
    return row;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [row] = await db.insert(users).values(insertUser).returning();
    return row;
  }

  async createLead(insertLead: InsertLead): Promise<Lead> {
    const [row] = await db
      .insert(leads)
      .values({
        ...insertLead,
        location: insertLead.location ?? null,
      })
      .returning();
    return row;
  }

  async getLeads(): Promise<Lead[]> {
    return db.select().from(leads).orderBy(desc(leads.createdAt));
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const [row] = await db
      .insert(contactSubmissions)
      .values({
        ...submission,
        phone: submission.phone ?? null,
      })
      .returning();
    return row;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return db.select().from(contactSubmissions).orderBy(desc(contactSubmissions.submittedAt));
  }

  async createNewsletterSubscriber(subscriber: InsertNewsletterSubscriber): Promise<NewsletterSubscriber | undefined> {
    const [row] = await db
      .insert(newsletterSubscribers)
      .values(subscriber)
      .onConflictDoNothing()
      .returning();
    return row;
  }

  async getNewsletterSubscribers(): Promise<NewsletterSubscriber[]> {
    return db.select().from(newsletterSubscribers).orderBy(desc(newsletterSubscribers.subscribedAt));
  }
}

export const storage: IStorage = new DbStorage();
