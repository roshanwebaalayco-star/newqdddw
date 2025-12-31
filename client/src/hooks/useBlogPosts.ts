import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { blogPostsSchema, type BlogPost } from "@shared/marketing";

export function useBlogPosts(): UseQueryResult<BlogPost[]> {
  return useQuery<BlogPost[]>({
    queryKey: ["/api/blog/posts"],
    queryFn: async () => {
      const res = await fetch("/api/blog/posts");
      if (!res.ok) throw new Error("Failed to fetch blog posts");
      return res.json();
    },
    select: (data) => blogPostsSchema.parse(data),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}
