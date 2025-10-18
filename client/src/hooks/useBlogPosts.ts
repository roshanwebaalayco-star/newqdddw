import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { blogPostsSchema, type BlogPost } from "@shared/marketing";

export function useBlogPosts(): UseQueryResult<BlogPost[]> {
  return useQuery<BlogPost[]>({
    queryKey: ["/api/blog/posts"],
    select: (data) => blogPostsSchema.parse(data),
  });
}
