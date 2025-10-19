import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { homeContentSchema, type HomeContent } from "@shared/marketing";
import { defaultHomeContent } from "@shared/content/home";

const HOME_CONTENT_ENDPOINT = "/api/content/home";

export function useHomeContent(): UseQueryResult<HomeContent> {
  return useQuery<HomeContent>({
    queryKey: [HOME_CONTENT_ENDPOINT],
    queryFn: async ({ signal }) => {
      try {
        const response = await fetch(HOME_CONTENT_ENDPOINT, {
          credentials: "include",
          signal,
        });

        if (!response.ok) {
          const message = response.statusText || "Request failed";
          throw new Error(`${response.status}: ${message}`);
        }

        const payload = await response.json();
        return homeContentSchema.parse(payload);
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          throw error;
        }

        console.warn("Falling back to bundled home content", error);
        return homeContentSchema.parse(defaultHomeContent);
      }
    },
    staleTime: 1000 * 60 * 5,
  });
}
