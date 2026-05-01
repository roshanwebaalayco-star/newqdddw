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

interface ParsedPost {
  frontmatter: RawPostFrontmatter;
  body: string;
}

function parseFrontmatter(source: string): ParsedPost {
  if (!source.startsWith("---")) {
    return { frontmatter: {}, body: source };
  }

  const endIndex = source.indexOf("\n---", 3);
  if (endIndex === -1) {
    return { frontmatter: {}, body: source };
  }

  const frontmatterBlock = source
    .slice(3, endIndex)
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const data: RawPostFrontmatter = {};

  for (const line of frontmatterBlock) {
    const colonIndex = line.indexOf(":");
    if (colonIndex === -1) continue;

    const key = line.slice(0, colonIndex).trim() as keyof RawPostFrontmatter;
    const rawValue = line.slice(colonIndex + 1).trim();
    const value = rawValue.replace(/^"|"$/g, "");
    data[key] = value;
  }

  // Strip the closing `---` and the leading newline of the body
  const body = source.slice(endIndex + 4).replace(/^\r?\n/, "");

  return { frontmatter: data, body };
}

function buildPost(entry: string, parsed: ParsedPost) {
  const { frontmatter } = parsed;
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
}

async function readAllPosts() {
  const directory = path.resolve(process.cwd(), "content", "blog");
  const entries = await fs.readdir(directory);
  const mdxEntries = entries.filter((entry) => entry.endsWith(".mdx"));

  return Promise.all(
    mdxEntries.map(async (entry) => {
      const filePath = path.join(directory, entry);
      const content = await fs.readFile(filePath, "utf-8");
      const parsed = parseFrontmatter(content);
      return { entry, parsed };
    }),
  );
}

export async function getLatestPosts(limit = 3) {
  try {
    const all = await readAllPosts();
    const posts = all.map(({ entry, parsed }) => buildPost(entry, parsed));

    const sorted = posts.sort((a, b) => {
      const aTime = new Date(a.date).getTime();
      const bTime = new Date(b.date).getTime();
      return bTime - aTime;
    });

    return blogPostSchema.array().parse(sorted.slice(0, limit));
  } catch (error) {
    console.error("Failed to load MDX posts", error);
    return [];
  }
}

export async function getPostBySlug(slug: string) {
  try {
    const all = await readAllPosts();
    const match = all.find(({ entry, parsed }) => {
      const postSlug = parsed.frontmatter.slug ?? entry.replace(/\.mdx$/, "");
      return postSlug === slug;
    });

    if (!match) return null;

    return {
      ...buildPost(match.entry, match.parsed),
      body: match.parsed.body,
    };
  } catch (error) {
    console.error(`Failed to load post '${slug}'`, error);
    return null;
  }
}
