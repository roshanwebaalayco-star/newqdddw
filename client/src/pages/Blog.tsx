import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import BlogCard from "@/components/BlogCard";
import Newsletter from "@/components/Newsletter";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import MarketingLayout from "@/components/layouts/MarketingLayout";
import LoadingScreen from "@/components/LoadingScreen";
import { useBlogPosts } from "@/hooks/useBlogPosts";

const blogHeroImage = "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=2000&q=80";

export default function Blog() {
  const { data, isLoading, isError, error, refetch } = useBlogPosts();
  const [currentPage, setCurrentPage] = useState(1);

  if (isLoading) {
    return (
      <MarketingLayout>
        <LoadingScreen message="Curating articles" />
      </MarketingLayout>
    );
  }

  if (isError || !data) {
    return (
      <MarketingLayout>
        <div className="container mx-auto max-w-3xl px-4 py-24 text-center">
          <h2 className="font-heading text-3xl font-semibold">We couldn’t load the latest insights</h2>
          <p className="mt-4 text-muted-foreground">
            {error?.message ?? "Please refresh or try again in a few moments."}
          </p>
          <div className="mt-6 flex justify-center">
            <Button onClick={() => refetch()}>Retry</Button>
          </div>
        </div>
      </MarketingLayout>
    );
  }

  const postsPerPage = 6;
  const totalPages = Math.ceil(data.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <MarketingLayout>
      <HeroSection
        eyebrow="Retail intelligence"
        title="Insights for your entrepreneurial journey"
        subtitle="From location strategy to post-launch growth, explore playbooks and founder stories to inform your next move."
        ctaText="Start a project"
        ctaLink="/contact"
        secondaryCtaText="Get the newsletter"
        secondaryCtaLink="#newsletter"
        backgroundImage={blogHeroImage}
      />

      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {currentPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-12 flex items-center justify-center gap-2">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  data-testid="button-prev-page"
                >
                  Previous
                </Button>
                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      onClick={() => setCurrentPage(page)}
                      data-testid={`button-page-${page}`}
                    >
                      {page}
                    </Button>
                  ))}
                </div>
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  data-testid="button-next-page"
                >
                  Next
                </Button>
              </div>
            )}
          </div>
        </section>
      </AnimatedSection>

      <div id="newsletter">
        <Newsletter />
      </div>
    </MarketingLayout>
  );
}
