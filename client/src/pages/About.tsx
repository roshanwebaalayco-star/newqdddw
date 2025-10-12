import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ValuesCard from "@/components/ValuesCard";
import Timeline from "@/components/Timeline";
import BackToTop from "@/components/BackToTop";
import AnimatedSection from "@/components/AnimatedSection";
const teamImage = "https://images.unsplash.com/photo-1758518731468-98e90ffd7430?w=1920&q=80";

export default function About() {
  const values = [
    {
      title: "Visionary Partnership",
      description: "More than a service provider; strategic partner in growth. Seeing potential, identifying locations, envisioning profitable spaces. Working alongside clients, sharing insights and expertise to make their store vision a reality.",
    },
    {
      title: "Relentless Execution",
      description: "Focus on flawless execution from property acquisition. Managing every detail with precision and efficiency: complex purchase agreements, securing supply contracts, designing functional and beautiful stores. Handling complexities so clients can focus on their business.",
    },
    {
      title: "Integrity & Transparency",
      description: "Cornerstone of business. Operating with complete honesty and transparency: property negotiations, project budgets. Clients can rely on candid communication, ethical practices, and doing what is right. Relationship built on mutual respect and open dialogue.",
    },
    {
      title: "Innovation in Design & Operations",
      description: "Retail space as a strategic asset. Constantly seeking innovative solutions in store design, layout, and supply chain management for efficiency and customer experience. Leveraging latest trends and technologies for aesthetically pleasing, functional, and profitable spaces for long-term success.",
    },
    {
      title: "Seamless Experience",
      description: "Making the journey from idea to open store smooth and seamless. Acting as a single point of contact, coordinating real estate agents, designers, contractors, and suppliers. Commitment to a hassle-free process for an easy and stress-free transition to a new location.",
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
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16">
        <HeroSection
          title="Our Story: Building Success Together"
          subtitle="For over two decades, we've been empowering entrepreneurs to achieve their business dreams"
          backgroundImage={teamImage}
          overlay={true}
        />

        <AnimatedSection>
          <section className="py-16 sm:py-20 bg-card">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-6">
                Our Mission
              </h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At CLC Retail Group, our mission is to empower individuals to achieve their business goals through comprehensive support, expert guidance, and innovative solutions. We believe that entrepreneurship should be accessible to everyone with the drive and determination to succeed.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Founded by industry veterans who understand the challenges of starting and running a retail business, we've built our company on the principle that success comes from strong partnerships. We don't just provide services—we become invested in your journey, celebrating your wins and supporting you through challenges.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team combines decades of experience in retail operations, franchise development, real estate, marketing, and business management. This diverse expertise allows us to offer truly comprehensive solutions that address every aspect of launching and growing a successful retail business.
              </p>
            </div>
          </div>
        </section>
        </AnimatedSection>

        <Timeline items={timelineItems} />

        <AnimatedSection delay={0.2}>
          <ValuesCard values={values} />
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <section className="py-16 sm:py-20 bg-gradient-to-b from-background to-card">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h3 className="font-heading font-bold text-3xl sm:text-4xl mb-6">
              Join Our Success Story
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Let's work together to turn your business dreams into reality.
            </p>
          </div>
        </section>
        </AnimatedSection>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
