import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "wouter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, ArrowUpRight, Calendar, Clock, RefreshCw } from "lucide-react";

import MarketingLayout from "@/components/layouts/MarketingLayout";
import LoadingScreen from "@/components/LoadingScreen";
import AnimatedSection from "@/components/AnimatedSection";
import Newsletter from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CardGlass } from "@/components/CardGlass";
import { Seo } from "@/components/Seo";
import type { BlogPostDetail } from "@shared/marketing";

const baseUrl = "https://clcretail.com";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();

  const { data, isLoading, isError, refetch, error } = useQuery<BlogPostDetail>({
    queryKey: ["/api/blog/posts", slug],
    enabled: Boolean(slug),
  });

  if (isLoading) {
    return (
      <MarketingLayout>
        <LoadingScreen message="Loading article" />
      </MarketingLayout>
    );
  }

  if (isError || !data) {
    return (
      <MarketingLayout>
        <Seo title="Article not found | CLC Retail LTD" description="The article you’re looking for is not available." />
        <div className="container mx-auto max-w-3xl px-4 py-24 text-center">
          <h2 className="font-heading text-3xl font-semibold text-white">We couldn’t find that article</h2>
          <p className="mt-4 text-white/70">
            {error instanceof Error ? error.message : "The article may have been moved or is no longer available."}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button onClick={() => refetch()} className="inline-flex items-center gap-2" data-testid="button-retry-post">
              <RefreshCw className="h-4 w-4" />
              Retry
            </Button>
            <Link href="/blog">
              <Button
                variant="outline"
                className="rounded-full border-white/30 bg-white/10 text-white/80 hover:text-white"
                data-testid="link-back-to-blog"
              >
                Back to all insights
              </Button>
            </Link>
          </div>
        </div>
      </MarketingLayout>
    );
  }

  const post = data;

  return (
    <MarketingLayout>
      <Seo
        title={`${post.title} | CLC Retail LTD`}
        description={post.excerpt}
        canonical={`${baseUrl}/blog/${post.slug}`}
        ogImage={post.image}
      />

      <article>
        <section className="relative">
          <div className="absolute inset-0 -z-10">
            <img
              src={post.image}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#05070f]/80 via-[#05070f]/90 to-[#05070f]" />
          </div>

          <div className="container mx-auto max-w-4xl px-4 py-16 sm:py-24">
            <Link href="/blog">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70 transition hover:text-white"
                data-testid="link-back-to-blog"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                All insights
              </button>
            </Link>

            <div className="mt-8 space-y-6 text-white">
              <Badge className="border border-white/25 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70">
                {post.category}
              </Badge>
              <h1 className="font-heading text-3xl font-semibold leading-tight sm:text-5xl" data-testid="text-post-title">
                {post.title}
              </h1>
              <p className="max-w-3xl text-lg text-white/80" data-testid="text-post-excerpt">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.35em] text-white/50">
                <span className="inline-flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5" />
                  {post.date}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </section>

        <AnimatedSection>
          <section className="pb-16">
            <div className="container mx-auto max-w-3xl px-4">
              <div
                className="prose prose-invert prose-headings:font-heading prose-headings:text-white prose-p:text-white/85 prose-strong:text-white prose-a:text-primary hover:prose-a:text-secondary prose-li:text-white/85 max-w-none"
                data-testid="text-post-body"
              >
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <section className="pb-20">
            <div className="container mx-auto max-w-4xl px-4">
              <CardGlass className="p-10 text-white">
                <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
                  <div className="space-y-3">
                    <h3 className="font-heading text-2xl">Ready to apply this in your launch?</h3>
                    <p className="text-white/75">
                      Talk to our team about how this maps to your concept, market and timeline.
                    </p>
                  </div>
                  <Link href="/contact#schedule">
                    <Button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary via-primary/80 to-secondary px-6 py-5 text-xs font-semibold uppercase tracking-[0.24em] text-white">
                      Schedule a consultation
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardGlass>
            </div>
          </section>
        </AnimatedSection>

        <Newsletter />
      </article>
    </MarketingLayout>
  );
}
