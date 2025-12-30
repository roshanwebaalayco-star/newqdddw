import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { CardGlass } from "@/components/CardGlass";
import { useLatestPosts } from "@/hooks/useLatestPosts";

export function LatestInsights() {
  const { data, isLoading } = useLatestPosts();
  const posts = data ?? [];

  return (
    <AnimatedSection delay={0.15}>
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-3 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">Latest insights</p>
              <h2 className="font-heading text-3xl sm:text-4xl">Intelligence for confident launches</h2>
              <p className="max-w-3xl text-base text-white/70">
                Articles sourced from our studio playbooks covering location strategy, vendor orchestration, and launch marketing. Updated weekly.
              </p>
            </div>
            <Link href="/blog">
              <Button
                variant="outline"
                asChild
                className="inline-flex items-center gap-2 rounded-full border-white/30 bg-white/10 text-white/80 transition hover:border-white/40 hover:text-white"
              >
                <a href="/blog" className="flex items-center gap-2">
                  View all insights
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            </Link>
          </div>

          {isLoading ? (
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <CardGlass key={index} className="animate-pulse space-y-4 p-6">
                  <div className="h-48 w-full rounded-2xl bg-white/10" />
                  <div className="h-4 w-2/3 rounded-full bg-white/10" />
                  <div className="h-4 w-1/2 rounded-full bg-white/10" />
                  <div className="h-4 w-3/4 rounded-full bg-white/10" />
                </CardGlass>
              ))}
            </div>
          ) : null}

          {!isLoading && posts.length === 0 ? (
            <CardGlass className="mt-12 p-10 text-center">
              <h3 className="font-heading text-2xl">Insights are coming soon</h3>
              <p className="mt-4 text-white/70">
                We are editing our latest case studies. In the meantime, book a consultation and we will share tailored recommendations.
              </p>
              <div className="mt-6 flex justify-center gap-3">
                <Link href="/contact#schedule">
                  <Button asChild className="rounded-full bg-gradient-to-r from-primary via-primary/80 to-secondary px-8 py-3 text-sm uppercase tracking-[0.18em]">
                    <a href="/contact#schedule">Schedule a consultation</a>
                  </Button>
                </Link>
                <Link href="/blog">
                  <Button variant="outline" asChild className="rounded-full border-white/30 bg-white/10 text-white/80 hover:text-white">
                    <a href="/blog">Explore the blog</a>
                  </Button>
                </Link>
              </div>
            </CardGlass>
          ) : null}

          {!isLoading && posts.length > 0 ? (
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : null}
        </div>
      </section>
    </AnimatedSection>
  );
}
