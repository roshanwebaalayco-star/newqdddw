import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { blogPostsSchema, type BlogPost } from "@shared/marketing";
import { fallbackPosts } from "@/data/fallbackPosts";

export function useLatestPosts(limit = 3): UseQueryResult<BlogPost[]> {
  return useQuery<BlogPost[]>({
    queryKey: ["/api/posts", limit],
    retry: 1,
    queryFn: async ({ queryKey }) => {
      const [url] = queryKey as [string, number];

      try {
        const response = await fetch(url, {
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }

        const payload = await response.json();
        return blogPostsSchema.parse(payload).slice(0, limit);
      } catch (error) {
        console.warn("Falling back to static insights feed", error);
        return fallbackPosts.slice(0, limit);
      }
    },
    staleTime: 1000 * 60 * 5,
  });
}
