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
import { ArrowUpRight } from "lucide-react";

const teamImage = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2000&q=80&fm=webp";
const baseUrl = "https://clcretailgroup.com";

const leadership = [
  {
    name: "Clara Lewis",
    role: "Founder & Chief Experience Officer",
    bio: "Former multi-unit franchise operator who built CLC Retail Group after witnessing how siloed teams slow launches. Clara leads the end-to-end experience vision and keeps every engagement anchored to business outcomes.",
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
        title="About CLC Retail Group | The retail launch studio behind flagship successes"
        description="Meet the cross-disciplinary team at CLC Retail Group and learn how our operators, designers, and analysts guide founders from feasibility to unforgettable openings."
        canonical={`${baseUrl}/about`}
        ogImage={teamImage}
        jsonLd={[
          {
            type: "BreadcrumbList",
            data: {
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
                { "@type": "ListItem", position: 2, name: "About", item: `${baseUrl}/about` },
              ],
            },
          },
        ]}
      />

      <HeroSection
        eyebrow="20 years of building with founders"
        title="Our story is written with every launch we co-create"
        subtitle="CLC Retail Group is a collective of operators, designers, and analysts rallying behind entrepreneurs who reimagine what retail can be."
        ctaText="Schedule a consultation"
        ctaLink="/contact"
        secondaryCtaText="Explore our services"
        secondaryCtaLink="/services"
        backgroundImage={teamImage}
      />

      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto max-w-4xl px-4">
            <CardGlass className="p-10 text-white">
              <Badge className="border border-white/25 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70">
                Our approach
              </Badge>
              <h2 className="mt-6 font-heading text-3xl sm:text-4xl">We operate as an embedded launch team</h2>
              <p className="mt-4 text-lg leading-relaxed text-white/80">
                We exist to democratize retail ownership. By uniting data-driven strategy with hands-on execution, we give every partner the clarity, confidence, and resources to launch and scale resilient storefronts. Our teams co-locate with clients, share the same dashboards, and stay accountable long after opening day. The result: launches that feel choreographed, measurable, and uniquely yours.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/services">
                  <Button variant="outline" className="rounded-full border-white/30 bg-white/10 text-white/85 hover:text-white">
                    Explore our capabilities
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button className="rounded-full bg-gradient-to-r from-primary via-primary/80 to-secondary px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white">
                    Schedule a consultation
                  </Button>
                </Link>
              </div>
            </CardGlass>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.05}>
        <section className="py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex flex-col gap-6 text-white sm:flex-row sm:items-end sm:justify-between">
              <div>
                <Badge className="border border-white/25 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70">
                  Leadership & advisors
                </Badge>
                <h2 className="mt-4 font-heading text-3xl sm:text-4xl">Meet the operators behind the playbook</h2>
                <p className="mt-4 max-w-2xl text-white/75">
                  A studio of former founders, analysts, franchise operators, and marketers united by one mission: help ambitious retailers open with confidence.
                </p>
              </div>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {leadership.map((leader) => (
                <CardGlass key={leader.name} className="overflow-hidden p-0">
                  <div className="h-56 w-full overflow-hidden">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="h-full w-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                  <div className="space-y-3 p-6">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">{leader.role}</p>
                    <h3 className="font-heading text-2xl text-white">{leader.name}</h3>
                    <p className="text-sm leading-relaxed text-white/80">{leader.bio}</p>
                  </div>
                </CardGlass>
              ))}
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {advisorHighlights.map((story) => (
                <CardGlass key={story.title} className="h-full p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">Advisor insight</p>
                  <h3 className="mt-3 font-heading text-xl text-white">{story.title}</h3>
                  <p className="mt-3 text-white/80">{story.description}</p>
                </CardGlass>
              ))}
            </div>
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

      <AnimatedSection delay={0.15}>
        <ValuesCard values={values} />
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
            <div className="mt-10 flex justify-center">
              <Link href="/contact">
                <Button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary via-primary/80 to-secondary px-8 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white">
                  Book a discovery call
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </MarketingLayout>
  );
}
