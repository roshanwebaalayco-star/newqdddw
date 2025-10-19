import { blogPostsSchema, type BlogPost } from "@shared/marketing";

const fallbackRaw = [
  {
    id: "designing-retail-experiences-post-omnichannel",
    title: "Designing retail experiences for the post-omnichannel era",
    excerpt:
      "Blend tactile experiences with seamless digital touchpoints to meet modern shoppers where they are and keep them coming back.",
    date: "2025-01-15",
    image: "https://images.unsplash.com/photo-1521337674500-52e5b154a71f?auto=format&fit=crop&w=1600&q=80&fm=webp",
    slug: "designing-retail-experiences-post-omnichannel",
    readTime: "6 min read",
    category: "Retail Strategy",
  },
  {
    id: "data-backed-site-selection",
    title: "How data-backed site selection slashes launch risk",
    excerpt:
      "Evaluate foot traffic, psychographics, and trade area economics before signing the lease to unlock outsized ROI.",
    date: "2025-01-09",
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80&fm=webp",
    slug: "data-backed-site-selection",
    readTime: "4 min read",
    category: "Location Intelligence",
  },
  {
    id: "supplier-playbooks-evergreen-shelves",
    title: "Supplier playbooks to keep your shelves evergreen",
    excerpt:
      "From negotiated terms to automated replenishment, here’s how to build a resilient supply chain without hiring a full team.",
    date: "2025-01-02",
    image: "https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=1600&q=80&fm=webp",
    slug: "supplier-playbooks-evergreen-shelves",
    readTime: "5 min read",
    category: "Operations",
  },
] as const;

export const fallbackPosts: BlogPost[] = blogPostsSchema.parse(fallbackRaw);
