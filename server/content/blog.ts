import { blogPostsSchema } from "@shared/marketing";

export const blogPosts = blogPostsSchema.parse([
  {
    id: "1",
    title: "Designing retail experiences for the post-omnichannel era",
    excerpt:
      "Blend tactile experiences with seamless digital touchpoints to meet modern shoppers where they are and keep them coming back.",
    date: "January 15, 2025",
    image: "https://images.unsplash.com/photo-1521337674500-52e5b154a71f?auto=format&fit=crop&w=1200&q=80",
    slug: "designing-retail-experiences-post-omnichannel",
    readTime: "6 min read",
    category: "Retail Strategy",
  },
  {
    id: "2",
    title: "How data-backed site selection slashes launch risk",
    excerpt:
      "Evaluate foot traffic, psychographics, and trade area economics before signing the lease to unlock outsized ROI.",
    date: "January 9, 2025",
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
    slug: "data-backed-site-selection",
    readTime: "4 min read",
    category: "Location Intelligence",
  },
  {
    id: "3",
    title: "Supplier playbooks to keep your shelves evergreen",
    excerpt:
      "From negotiated terms to automated replenishment, here’s how to build a resilient supply chain without hiring a full team.",
    date: "January 2, 2025",
    image: "https://images.unsplash.com/photo-1503389152951-9f343605f61e?auto=format&fit=crop&w=1200&q=80",
    slug: "supplier-playbooks-evergreen-shelves",
    readTime: "5 min read",
    category: "Operations",
  },
  {
    id: "4",
    title: "Activate local marketing in 30 days or less",
    excerpt:
      "A sprint framework to build buzz, capture emails, and convert launch-day foot traffic into loyal advocates.",
    date: "December 18, 2024",
    image: "https://images.unsplash.com/photo-1483478550801-7811e3e5b79d?auto=format&fit=crop&w=1200&q=80",
    slug: "activate-local-marketing-fast",
    readTime: "7 min read",
    category: "Growth",
  },
  {
    id: "5",
    title: "Funding your concept without losing control",
    excerpt:
      "Creative capital stacks, grants, and incentives that keep ownership in your hands while accelerating launch timelines.",
    date: "December 5, 2024",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    slug: "funding-concept-without-losing-control",
    readTime: "8 min read",
    category: "Finance",
  },
  {
    id: "6",
    title: "When to franchise vs. build from scratch",
    excerpt:
      "A decision framework for entrepreneurs weighing proven systems against bespoke brand freedom.",
    date: "November 20, 2024",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1200&q=80",
    slug: "franchise-vs-build-from-scratch",
    readTime: "5 min read",
    category: "Entrepreneurship",
  },
]);
