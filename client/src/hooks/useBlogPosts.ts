import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { blogPostsSchema, type BlogPost } from "@shared/marketing";

export function useBlogPosts(): UseQueryResult<BlogPost[]> {
  return useQuery<BlogPost[]>({
    queryKey: ["/api/blog/posts"],
    select: (data) => blogPostsSchema.parse(data),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}
