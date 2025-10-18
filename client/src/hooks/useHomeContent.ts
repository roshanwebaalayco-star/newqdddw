import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { homeContentSchema, type HomeContent } from "@shared/marketing";

export function useHomeContent(): UseQueryResult<HomeContent> {
  return useQuery<HomeContent>({
    queryKey: ["/api/content/home"],
    select: (data) => homeContentSchema.parse(data),
  });
}
