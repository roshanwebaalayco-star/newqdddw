import HeroSection from "@/components/HeroSection";
import ValuesCard from "@/components/ValuesCard";
import Timeline from "@/components/Timeline";
import AnimatedSection from "@/components/AnimatedSection";
import MarketingLayout from "@/components/layouts/MarketingLayout";
import { Seo } from "@/components/Seo";
import { CardGlass } from "@/components/CardGlass";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  ArrowUpRight, 
  Handshake, 
  Zap, 
  ShieldCheck, 
  Lightbulb, 
  Layers 
} from "lucide-react";

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

const milestones = [
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
    title: "Global network",
    description: "Expanded our partner bench across North America, Europe, and the Middle East to support cross-border growth.",
  },
  {
    year: "2020",
    title: "Digital innovation",
    description: "Launched remote launch control rooms and data dashboards so distributed teams could collaborate in real time.",
  },
  {
    year: "2024",
    title: "500+ success stories",
    description: "Celebrated helping over 500 entrepreneurs achieve their business dreams with continued growth.",
  },
];

const valuesInAction = [
  {
    name: "Flagship, fast",
    value: "Relentless Execution",
    narrative:
      "An emerging athleisure brand needed to open in SoHo in under four months. We compressed vendor onboarding, staged procurement, and coordinated marketing pop-ups—launching on schedule with 17% under-run on build costs.",
  },
  {
    name: "Transparent reinvention",
    value: "Integrity & Transparency",
    narrative:
      "For a legacy grocer reimagining urban footprints, we instituted weekly performance standups, real-time budget dashboards, and clear change-control so leadership always had truth in numbers.",
  },
  {
    name: "Experience innovation",
    value: "Innovation in Design & Operations",
    narrative:
      "We transformed a suburban electronics store into a hands-on discovery lab, layering digital signage, modular fixtures, and experiential demos that increased dwell time by 26%.",
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

      <AnimatedSection delay={0.1}>
        <Timeline
          items={milestones}
          variant="dark"
          title="Milestones & impact"
          subtitle="From a boutique advisory to a global launch studio"
        />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <section className="py-20">
          <div className="container mx-auto max-w-5xl px-4 text-white">
            <div className="mb-10 space-y-4 text-center">
              <Badge className="border border-white/25 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70">
                Values in action
              </Badge>
              <h2 className="font-heading text-3xl sm:text-4xl">How our principles show up on the ground</h2>
              <p className="mx-auto max-w-3xl text-white/75">
                Our values guide every meeting, milestone, and metric. Here are a few recent engagements that demonstrate what that looks like in practice.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {valuesInAction.map((item) => (
                <CardGlass key={item.name} className="h-full p-6 text-white">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">{item.value}</p>
                  <h3 className="mt-3 font-heading text-xl">{item.name}</h3>
                  <p className="mt-3 text-white/80">{item.narrative}</p>
                </CardGlass>
              ))}
            </div>

            <AnimatedSection delay={0.25}>
              <div className="mt-20">
                <div className="flex flex-col gap-6 text-white sm:flex-row sm:items-end sm:justify-between">
                  <div className="text-left">
                    <Badge className="border border-white/25 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70">
                      The Values That Drive Us
                    </Badge>
                    <h2 className="mt-4 font-heading text-3xl sm:text-4xl">The Values That Drive Us</h2>
                  </div>
                </div>
                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <CardGlass className="group relative flex flex-col p-8 transition-all hover:bg-white/[0.08]">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                      <Handshake className="h-6 w-6" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white">1. Visionary Partnership</h3>
                    <p className="mt-4 text-sm leading-relaxed text-white/70">
                      We are more than a service provider; we are your strategic partner in growth. Our value lies in seeing potential where others see problems, from identifying the perfect location to envisioning a successful, profitable retail space. We work alongside our clients, sharing insights and expertise at every step, ensuring their vision for a new store becomes a reality.
                    </p>
                  </CardGlass>

                  <CardGlass className="group relative flex flex-col p-8 transition-all hover:bg-white/[0.08]">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                      <Zap className="h-6 w-6" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white">2. Relentless Execution</h3>
                    <p className="mt-4 text-sm leading-relaxed text-white/70">
                      From the moment a property is acquired, our focus is on flawless execution. We are driven by a commitment to managing every detail of the process with precision and efficiency—from navigating complex purchase agreements and securing supply contracts to designing a functional and beautiful store. Our goal is to handle the complexities so our clients can focus on their business, confident that their project is on track for a successful opening.
                    </p>
                  </CardGlass>

                  <CardGlass className="group relative flex flex-col p-8 transition-all hover:bg-white/[0.08]">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white">3. Integrity & Transparency</h3>
                    <p className="mt-4 text-sm leading-relaxed text-white/70">
                      Trust is the cornerstone of our business. We operate with complete honesty and transparency in all our dealings, from property negotiations to project budgets. Our clients can rely on us for candid communication, ethical practices, and a commitment to doing what is right, ensuring a relationship built on mutual respect and open dialogue.
                    </p>
                  </CardGlass>

                  <CardGlass className="group relative flex flex-col p-8 transition-all hover:bg-white/[0.08]">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                      <Lightbulb className="h-6 w-6" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white">4. Innovation in Design & Operations</h3>
                    <p className="mt-4 text-sm leading-relaxed text-white/70">
                      We believe that a retail space is a strategic asset. Our team is constantly seeking innovative solutions in store design, layout, and supply chain management to maximize efficiency and customer experience. We leverage the latest trends and technologies to create spaces that are not only aesthetically pleasing but also highly functional and profitable, setting our clients up for long-term success.
                    </p>
                  </CardGlass>

                  <CardGlass className="group relative flex flex-col p-8 transition-all hover:bg-white/[0.08] lg:col-span-2">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                      <Layers className="h-6 w-6" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white">5. Seamless Experience</h3>
                    <p className="mt-4 text-sm leading-relaxed text-white/70">
                      The journey from an idea to an open store can be complex, but we are dedicated to making it a smooth and seamless experience for our clients. We act as a single point of contact, coordinating all aspects of the project, including real estate agents, designers, contractors, and suppliers. Our commitment to a hassle-free process ensures that the transition to a new location is as easy and stress-free as possible.
                    </p>
                  </CardGlass>
                </div>
              </div>
            </AnimatedSection>

            <div className="mt-16 flex justify-center">
              <Link href="/contact#schedule">
                <Button asChild className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary via-primary/80 to-secondary px-8 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white shadow-[0_16px_45px_-25px_rgba(176,138,124,1)] cursor-pointer">
                  <div className="flex items-center gap-2">
                    Book a discovery call
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </MarketingLayout>
  );
}
