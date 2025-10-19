import { homeContentSchema, type HomeContent } from "@shared/marketing";

const rawHomeContent = {
  hero: {
    eyebrow: "Retail Architecture Studio",
    title: "Craft iconic retail experiences built to perform",
    subtitle:
      "Data-led intelligence and multi-disciplinary delivery teams align every decision, so your flagship opens with momentum and scales with clarity.",
    ctaText: "Plan your launch call",
    ctaLink: "/contact",
    secondaryCtaText: "Explore our services",
    secondaryCtaLink: "/services",
    backgroundImage:
      "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?auto=format&fit=crop&w=2000&q=80",
  },
  stats: [
    {
      label: "Store launches",
      value: "520+",
      description: "Concepts delivered across 38 global markets",
    },
    {
      label: "Average payback",
      value: "13 months",
      description: "Median return to profitability after launch",
    },
    {
      label: "Partner NPS",
      value: "91",
      description: "Entrepreneurs rating our launch experience",
    },
  ],
  trust: [
    {
      title: "Dedicated venture squads",
      description:
        "Cross-functional teams embed within your organisation to orchestrate real estate, design, procurement, and launch marketing in sync.",
      icon: "handshake",
    },
    {
      title: "Operational clarity",
      description:
        "Blueprints, timelines, and live dashboards track critical-path milestones so you always know what’s next.",
      icon: "lightbulb",
    },
    {
      title: "Supply chain confidence",
      description:
        "Preferred supplier programmes and automated replenishment workflows keep day-one operations resilient.",
      icon: "package",
    },
  ],
  services: [
    {
      title: "Concept validation",
      description:
        "Rapid feasibility sprints test your thesis with demand modelling, category insight, and profitability projections.",
      icon: "sparkle",
    },
    {
      title: "Location intelligence",
      description:
        "Blend mobility data, psychographics, and local broker networks to pinpoint high-conversion trade areas.",
      icon: "map-pin",
    },
    {
      title: "Launch orchestration",
      description:
        "From buildout to staffing playbooks, we choreograph every launch task so you can focus on brand experience.",
      icon: "rocket",
    },
    {
      title: "Ongoing optimisation",
      description:
        "Post-launch analytics, marketing acceleration, and vendor governance keep your store scaling sustainably.",
      icon: "shield",
    },
  ],
  testimonials: [
    {
      name: "Sarah Johnson",
      role: "Founder",
      company: "Fresh Market Grocery",
      content:
        "CLC translated our concept into a thriving flagship in under six months. Their buildout checklists and supplier network saved us thousands.",
    },
    {
      name: "Michael Chen",
      role: "Franchise Owner",
      company: "Tech Gadgets Plus",
      content:
        "The analytics dashboards gave our team instant clarity. We hit profitability a quarter earlier than forecast.",
    },
    {
      name: "Emily Rodriguez",
      role: "Entrepreneur",
      company: "Style Haven Boutique",
      content:
        "Every week we had a clear plan, warm vendor handoffs, and marketing that actually resonated. It felt like cheating.",
    },
  ],
} as const;

export const defaultHomeContent: HomeContent = homeContentSchema.parse(rawHomeContent);
