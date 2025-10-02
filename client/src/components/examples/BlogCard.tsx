import BlogCard from "../BlogCard";

export default function BlogCardExample() {
  const samplePost = {
    id: "1",
    title: "5 Essential Tips for First-Time Business Owners",
    excerpt: "Starting your first business can be overwhelming. Learn the key strategies that successful entrepreneurs use to navigate the challenges and build thriving retail businesses.",
    date: "January 15, 2025",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=400&fit=crop",
    slug: "5-essential-tips-for-first-time-business-owners",
  };

  return (
    <div className="max-w-sm">
      <BlogCard post={samplePost} />
    </div>
  );
}
