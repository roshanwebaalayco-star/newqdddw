import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import BlogCard from "@/components/BlogCard";
import Newsletter from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import franchiseImage from "@assets/generated_images/Modern_franchise_storefront_exterior_d22cec85.png";
import entrepreneurImage from "@assets/generated_images/Entrepreneur_working_retail_business_524a5c04.png";
import inventoryImage from "@assets/generated_images/Retail_inventory_management_operations_044874bb.png";

export default function Blog() {
  const allPosts = [
    {
      id: "1",
      title: "5 Essential Tips for First-Time Business Owners",
      excerpt: "Starting your first business can be overwhelming. Learn the key strategies that successful entrepreneurs use to navigate the challenges and build thriving retail businesses.",
      date: "January 15, 2025",
      image: franchiseImage,
      slug: "5-essential-tips-for-first-time-business-owners",
    },
    {
      id: "2",
      title: "How to Choose the Perfect Location for Your Retail Store",
      excerpt: "Location can make or break a retail business. Discover the factors that matter most when selecting your store's location and how to conduct proper market research.",
      date: "January 10, 2025",
      image: entrepreneurImage,
      slug: "how-to-choose-perfect-location-retail-store",
    },
    {
      id: "3",
      title: "Inventory Management Best Practices for Small Businesses",
      excerpt: "Effective inventory management is crucial for profitability. Learn proven techniques to optimize your stock levels, reduce waste, and improve cash flow.",
      date: "January 5, 2025",
      image: inventoryImage,
      slug: "inventory-management-best-practices",
    },
    {
      id: "4",
      title: "Building a Strong Brand Identity from Day One",
      excerpt: "Your brand is more than just a logo. Discover how to create a compelling brand identity that resonates with customers and sets you apart from competitors.",
      date: "December 28, 2024",
      image: franchiseImage,
      slug: "building-strong-brand-identity",
    },
    {
      id: "5",
      title: "The Ultimate Guide to Franchise Ownership",
      excerpt: "Thinking about buying a franchise? This comprehensive guide covers everything you need to know, from choosing the right brand to managing daily operations.",
      date: "December 20, 2024",
      image: entrepreneurImage,
      slug: "ultimate-guide-franchise-ownership",
    },
    {
      id: "6",
      title: "Digital Marketing Strategies for Retail Success",
      excerpt: "In today's digital age, online presence is essential. Learn how to leverage social media, SEO, and email marketing to drive foot traffic and sales.",
      date: "December 15, 2024",
      image: inventoryImage,
      slug: "digital-marketing-strategies-retail",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const totalPages = Math.ceil(allPosts.length / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16">
        <HeroSection
          title="Insights for Your Entrepreneurial Journey"
          subtitle="Our blog features expert advice, success stories, and industry trends to help you succeed in retail business ownership."
        />

        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-12">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
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
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  data-testid="button-next-page"
                >
                  Next
                </Button>
              </div>
            )}
          </div>
        </section>

        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}
