import HeroSection from "@/components/HeroSection";
import ValuesCard from "@/components/ValuesCard";
import Timeline from "@/components/Timeline";
import AnimatedSection from "@/components/AnimatedSection";
import MarketingLayout from "@/components/layouts/MarketingLayout";

const teamImage = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80";

export default function About() {
  const values = [
    {
      title: "Visionary Partnership",
      description:
        "More than a service provider; strategic partner in growth. Seeing potential, identifying locations, envisioning profitable spaces. Working alongside clients, sharing insights and expertise to make their store vision a reality.",
    },
    {
      title: "Relentless Execution",
      description:
        "Focus on flawless execution from property acquisition. Managing every detail with precision and efficiency: complex purchase agreements, securing supply contracts, designing functional and beautiful stores. Handling complexities so clients can focus on their business.",
    },
    {
      title: "Integrity & Transparency",
      description:
        "Cornerstone of business. Operating with complete honesty and transparency: property negotiations, project budgets. Clients can rely on candid communication, ethical practices, and doing what is right. Relationship built on mutual respect and open dialogue.",
    },
    {
      title: "Innovation in Design & Operations",
      description:
        "Retail space as a strategic asset. Constantly seeking innovative solutions in store design, layout, and supply chain management for efficiency and customer experience. Leveraging latest trends and technologies for aesthetically pleasing, functional, and profitable spaces for long-term success.",
    },
    {
      title: "Seamless Experience",
      description:
        "Making the journey from idea to open store smooth and seamless. Acting as a single point of contact, coordinating real estate agents, designers, contractors, and suppliers. Commitment to a hassle-free process for an easy and stress-free transition to a new location.",
    },
  ];

  const timelineItems = [
    {
      year: "2004",
      title: "Founded",
      description: "CLC Retail Group was established by industry veterans with a vision to democratize retail business ownership.",
    },
    {
      year: "2008",
      title: "100 Businesses",
      description: "Reached a milestone of helping 100 entrepreneurs successfully launch their retail businesses.",
    },
    {
      year: "2015",
      title: "National Expansion",
      description: "Expanded services nationwide, bringing our expertise to entrepreneurs across the country.",
    },
    {
      year: "2020",
      title: "Digital Innovation",
      description: "Launched comprehensive digital tools and remote consultation services to better serve our clients.",
    },
    {
      year: "2025",
      title: "500+ Success Stories",
      description: "Celebrated helping over 500 entrepreneurs achieve their business dreams with continued growth.",
    },
  ];

  return (
    <MarketingLayout>
      <HeroSection
        eyebrow="20 years of building with founders"
        title="Our story is written with every launch we co-create"
        subtitle="CLC Retail Group is a collective of operators, designers, and analysts rallying behind entrepreneurs who reimagine what retail can be."
        ctaText="Meet the team"
        ctaLink="/contact"
        secondaryCtaText="Explore our services"
        secondaryCtaLink="/services"
        backgroundImage={teamImage}
      />

      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="rounded-3xl border border-border/60 bg-card/80 p-10 shadow-lg">
              <h2 className="font-heading text-3xl font-semibold sm:text-4xl">Our mission</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                We exist to democratize retail ownership. By uniting data-driven strategy with hands-on execution, we give every partner the clarity, confidence, and resources to launch and scale resilient storefronts. Our success is measured by the community of thriving entrepreneurs we support.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <Timeline items={timelineItems} />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <ValuesCard values={values} />
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <section className="py-20">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <div className="rounded-3xl border border-border/60 bg-gradient-to-br from-primary/90 to-secondary/80 p-10 text-white shadow-lg">
              <h3 className="font-heading text-3xl sm:text-4xl">Join our success story</h3>
              <p className="mt-4 text-base text-white/80">
                Partner with operators who live and breathe modern retail. Together we’ll turn your vision into a flagship experience.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </MarketingLayout>
  );
}
