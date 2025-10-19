import { promises as fs } from "fs";
import path from "path";
import { blogPostSchema } from "@shared/marketing";

interface RawPostFrontmatter {
  title?: string;
  excerpt?: string;
  date?: string;
  readTime?: string;
  category?: string;
  slug?: string;
  coverImage?: string;
}

function parseFrontmatter(source: string): RawPostFrontmatter {
  if (!source.startsWith("---")) {
    return {};
  }

  const endIndex = source.indexOf("\n---", 3);
  if (endIndex === -1) {
    return {};
  }

  const frontmatterBlock = source
    .slice(3, endIndex)
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const data: RawPostFrontmatter = {};

  for (const line of frontmatterBlock) {
    const [rawKey, ...rest] = line.split(":");
    if (!rawKey || rest.length === 0) continue;

    const key = rawKey.trim() as keyof RawPostFrontmatter;
    const rawValue = rest.join(":").trim();
    const value = rawValue.replace(/^"|"$/g, "");
    data[key] = value;
  }

  return data;
}

export async function getLatestPosts(limit = 3) {
  const directory = path.resolve(process.cwd(), "content", "blog");

  try {
    const entries = await fs.readdir(directory);
    const posts = await Promise.all(
      entries
        .filter((entry) => entry.endsWith(".mdx"))
        .map(async (entry) => {
          const filePath = path.join(directory, entry);
          const content = await fs.readFile(filePath, "utf-8");
          const frontmatter = parseFrontmatter(content);

          return {
            id: entry.replace(/\.mdx$/, ""),
            title: frontmatter.title ?? "Untitled insight",
            excerpt: frontmatter.excerpt ?? "This insight is being updated.",
            date: frontmatter.date ?? new Date().toISOString(),
            image:
              frontmatter.coverImage ??
              "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80&fm=webp",
            slug: frontmatter.slug ?? entry.replace(/\.mdx$/, ""),
            readTime: frontmatter.readTime ?? "4 min read",
            category: frontmatter.category ?? "Insights",
          };
        }),
    );

    const sorted = posts.sort((a, b) => {
      const aTime = new Date(a.date).getTime();
      const bTime = new Date(b.date).getTime();
      return bTime - aTime;
    });

    const limited = sorted.slice(0, limit);
    return blogPostSchema.array().parse(limited);
  } catch (error) {
    console.error("Failed to load MDX posts", error);
    return [];
  }
}
