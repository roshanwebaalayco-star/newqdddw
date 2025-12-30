import HeroSection from "@/components/HeroSection";
import AnimatedSection from "@/components/AnimatedSection";
import MarketingLayout from "@/components/layouts/MarketingLayout";
import { Seo } from "@/components/Seo";
import { CardGlass } from "@/components/CardGlass";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";

const teamImage = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80&fm=webp";
const baseUrl = "https://clcretail.com";

const leadership = [
  {
    name: "Clara Lewis",
    role: "Founder & Chief Experience Officer",
    bio: "Former multi-unit franchise operator who built CLC Retail LTD after witnessing how siloed teams slow launches. Clara leads the end-to-end experience vision and keeps every engagement anchored to business outcomes.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80&fm=webp",
  },
  {
    name: "Jai Reed",
    role: "Head of Site Intelligence",
    bio: "Data strategist and geospatial analyst who has evaluated 500+ trade areas worldwide. Jai oversees our feasibility sprints, data partnerships, and economic modeling.",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=900&q=80&fm=webp",
  },
  {
    name: "Maya Ortiz",
    role: "Launch Marketing Director",
    bio: "Brand storyteller and CRM specialist who previously led retail activation for global luxury houses. Maya ensures every launch has a measurable attention plan and loyalty engine.",
    image: "https://images.unsplash.com/photo-1544723795-432537f4c769?auto=format&fit=crop&w=900&q=80&fm=webp",
  },
];

const advisorHighlights = [
  {
    title: "Community-first franchise playbook",
    description: "A regional café group engaged us to scout new markets. We built a 24-month rollout roadmap, negotiated flagship leases, and orchestrated the first three launches with 18% lower build variance.",
  },
  {
    title: "Investor diligence partner",
    description: "PE-backed apparel collective leveraged our vendor intelligence and analytics dashboards to evaluate four acquisition targets. The result: a prioritized pipeline and a 30-day integration plan for the winning concept.",
  },
  {
    title: "Omnichannel flagship refresh",
    description: "A heritage cosmetics brand tapped our advisors to modernize their flagship. We aligned digital try-ons, inventory systems, and localized events—lifting repeat visits by 22% post launch.",
  },
];



export default function About() {
  return (
    <MarketingLayout>
      <Seo
        title="About | CLC Retail LTD"
        description="Learn about CLC Retail LTD's mission to empower individuals through expert retail guidance and visionary partnership."
        canonical={`${baseUrl}/about`}
        ogImage={teamImage}
      />

      <HeroSection
        eyebrow="Building Success Together"
        title="Our Story: Building Success Together"
        subtitle="At CLC Retail LTD, our mission is to empower individuals to achieve their business goals through expert resources and unwavering support."
        ctaText="Start Your Business"
        ctaLink="/contact#schedule"
        backgroundImage={teamImage}
      />

      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto max-w-4xl px-4">
            <CardGlass className="p-10 text-white">
              <Badge className="border border-white/25 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70">
                Our Mission
              </Badge>
              <h2 className="mt-6 font-heading text-3xl sm:text-4xl">Our Mission</h2>
              <p className="mt-4 text-lg leading-relaxed text-white/80">
                At CLC Retail LTD, our mission is to empower individuals to achieve their business goals. We are committed to providing the best resources, unwavering support, and a pathway to entrepreneurial success for our partners.
              </p>
            </CardGlass>
          </div>
        </section>
      </AnimatedSection>

      
    </MarketingLayout>
  );
}
