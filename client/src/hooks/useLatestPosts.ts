import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { blogPostsSchema, type BlogPost } from "@shared/marketing";

export function useLatestPosts(limit = 3): UseQueryResult<BlogPost[]> {
  return useQuery<BlogPost[]>({
    queryKey: ["/api/posts", limit],
    queryFn: async ({ queryKey }) => {
      const [url] = queryKey as [string, number];
      const response = await fetch(url, {
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      }

      return response.json();
    },
    select: (data) => blogPostsSchema.parse(data).slice(0, limit),
    staleTime: 1000 * 60 * 5,
  });
}
