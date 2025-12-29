import { useMemo, useState } from "react";
import HeroSection from "@/components/HeroSection";
import BlogCard from "@/components/BlogCard";
import Newsletter from "@/components/Newsletter";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import MarketingLayout from "@/components/layouts/MarketingLayout";
import LoadingScreen from "@/components/LoadingScreen";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { CardGlass } from "@/components/CardGlass";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ArrowUpRight, RefreshCw } from "lucide-react";
import { Seo } from "@/components/Seo";

const blogHeroImage = "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=2000&q=80&fm=webp";
const baseUrl = "https://clcretail.com";

const categories = [
  "All",
  "Retail Strategy",
  "Location Intelligence",
  "Operations",
  "Growth",
  "Entrepreneurship",
];

const pillarGuides = [
  {
    title: "Start with the feasibility blueprint",
    description: "Learn how to evaluate your concept, funding, and operating model before committing to a launch timeline.",
    slug: "founder-playbook-retail-launches",
  },
  {
    title: "Data-backed site selection",
    description: "The six data layers CLC validates before recommending a new market or micro trade area.",
    slug: "site-selection-signals-retail-expansion",
  },
  {
    title: "Launch marketing in 30 days",
    description: "Activate attention with pre-opening nurture, partner activations, and measurement loops.",
    slug: "launch-marketing-fills-floor-day-one",
  },
];

export default function Blog() {
  const { data, isLoading, isError, error, refetch } = useBlogPosts();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const posts = useMemo(() => data ?? [], [data]);
  const filteredPosts = useMemo(() => {
    if (selectedCategory === "All") {
      return posts;
    }
    return posts.filter((post) => post.category === selectedCategory);
  }, [posts, selectedCategory]);

  if (isLoading) {
    return (
      <MarketingLayout>
        <LoadingScreen message="Curating articles" />
      </MarketingLayout>
    );
  }

  if (isError) {
    return (
      <MarketingLayout>
        <div className="container mx-auto max-w-3xl px-4 py-24 text-center">
          <h2 className="font-heading text-3xl font-semibold text-white">We couldn’t load the latest insights</h2>
          <p className="mt-4 text-white/70">
            {error?.message ?? "Please refresh or try again in a few moments."}
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Button onClick={() => refetch()} className="inline-flex items-center gap-2">
              <RefreshCw className="h-4 w-4" />
              Retry
            </Button>
            <Link href="/contact#schedule">
              <Button variant="outline" className="rounded-full border-white/30 bg-white/10 text-white/80 hover:text-white">
                Schedule a consultation
              </Button>
            </Link>
          </div>
        </div>
      </MarketingLayout>
    );
  }

  const postsPerPage = 6;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <MarketingLayout>
      <Seo
        title="Blog | CLC Retail LTD"
        description="Read launch playbooks, location intelligence breakdowns, and operational guidance from CLC Retail LTD’s retail launch studio."
        canonical={`${baseUrl}/blog`}
        ogImage={blogHeroImage}
      />

      <HeroSection
        eyebrow="Retail intelligence"
        title="Insights for your entrepreneurial journey"
        subtitle="From location strategy to post-launch growth, explore playbooks and founder stories to inform your next move."
        ctaText="Schedule a consultation"
        ctaLink="/contact#schedule"
        secondaryCtaText="Explore our services"
        secondaryCtaLink="/services"
        backgroundImage={blogHeroImage}
      />

      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mb-10 space-y-4 text-white">
              <Badge className="border border-white/25 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70">
                Start here
              </Badge>
              <h2 className="font-heading text-3xl sm:text-4xl">Pillar guides</h2>
              <p className="max-w-3xl text-white/75">
                These guides introduce the core frameworks we use with founders and operators. Pair them with a discovery call for personalized recommendations.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {pillarGuides.map((guide) => (
                <CardGlass key={guide.slug} className="h-full p-6 text-white">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">Playbook</p>
                  <h3 className="mt-3 font-heading text-xl">{guide.title}</h3>
                  <p className="mt-3 text-white/80">{guide.description}</p>
                  <Link href={`/blog/${guide.slug}`}>
                    <Button variant="outline" className="mt-6 inline-flex items-center gap-2 rounded-full border-white/30 bg-white/10 text-white/80 hover:text-white">
                      Read the guide
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardGlass>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.05}>
        <section className="py-12">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex flex-wrap items-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setCurrentPage(1);
                    setSelectedCategory(category);
                  }}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] transition ${
                    selectedCategory === category
                      ? "border-white/40 bg-white/20 text-white"
                      : "border-white/15 bg-white/5 text-white/70 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <section className="py-20">
          <div className="container mx-auto max-w-7xl px-4">
            {filteredPosts.length === 0 ? (
              <CardGlass className="p-10 text-center text-white">
                <h3 className="font-heading text-2xl">We’re drafting new stories</h3>
                <p className="mt-4 text-white/75">
                  No posts yet in this category. Browse all insights or book a consultation for tailored recommendations.
                </p>
                <div className="mt-6 flex justify-center gap-3">
                  <Link href="/contact#schedule">
                    <Button className="rounded-full bg-gradient-to-r from-primary via-primary/80 to-secondary px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white">
                      Schedule a consultation
                    </Button>
                  </Link>
                  <button
                    type="button"
                    onClick={() => setSelectedCategory("All")}
                    className="rounded-full border border-white/30 bg-white/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/80 transition hover:text-white"
                  >
                    View all posts
                  </button>
                </div>
              </CardGlass>
            ) : (
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {currentPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            )}

            {totalPages > 1 && (
              <div className="mt-12 flex items-center justify-center gap-2">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  data-testid="button-prev-page"
                  className="rounded-full border-white/25 bg-white/5 text-white/80 hover:text-white"
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
                      className={`rounded-full ${
                        currentPage === page
                          ? "bg-gradient-to-r from-primary via-primary/80 to-secondary text-white"
                          : "border-white/25 bg-white/5 text-white/80 hover:text-white"
                      }`}
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
                  className="rounded-full border-white/25 bg-white/5 text-white/80 hover:text-white"
                >
                  Next
                </Button>
              </div>
            )}
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <section className="py-16">
          <div className="container mx-auto max-w-5xl px-4">
            <CardGlass className="p-10 text-white">
              <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
                <div className="space-y-4">
                  <Badge className="border border-white/25 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70">
                    Resources & tools
                  </Badge>
                  <h2 className="font-heading text-3xl">Stay in the loop</h2>
                  <p className="text-white/75">
                    Subscribe for launch checklists, vendor scorecards, and exclusive invites to our operator roundtables.
                  </p>
                  <Link href="/contact#schedule">
                    <Button variant="outline" className="rounded-full border-white/30 bg-white/10 text-white/80 hover:text-white">
                      Book a content briefing
                    </Button>
                  </Link>
                </div>
                <div>
                  <Newsletter />
                </div>
              </div>
            </CardGlass>
          </div>
        </section>
      </AnimatedSection>
    </MarketingLayout>
  );
}
