import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { blogPostsSchema, type BlogPost } from "@shared/marketing";

const FALLBACK_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Navigating the Future of Convenience Retail",
    excerpt: "Discover the latest trends and innovations shaping the convenience store landscape in 2024 and beyond.",
    category: "Insights",
    date: "2024-03-15",
    image: "https://images.unsplash.com/photo-1604719312563-8912e9223c6a?q=80&w=2000",
    slug: "future-of-convenience-retail",
    readTime: "5 min read"
  },
  {
    id: "2",
    title: "Maximizing Store Performance Through Design",
    excerpt: "Learn how strategic store layouts and interior design can significantly impact customer flow and sales.",
    category: "Design",
    date: "2024-03-10",
    image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=2000",
    slug: "maximizing-store-performance",
    readTime: "4 min read"
  }
];

export function useBlogPosts(): UseQueryResult<BlogPost[]> {
  return useQuery<BlogPost[]>({
    queryKey: ["/api/blog/posts"],
    queryFn: async () => {
      try {
        const res = await fetch("/api/blog/posts");
        if (!res.ok) throw new Error("Failed to fetch blog posts");
        const data = await res.json();
        return blogPostsSchema.parse(data);
      } catch (error) {
        console.error("Blog fetch failed, using fallback:", error);
        return FALLBACK_POSTS;
      }
    },
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}
