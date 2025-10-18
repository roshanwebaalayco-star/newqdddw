import { homeContentSchema } from "@shared/marketing";

export const homeContent = homeContentSchema.parse({
  hero: {
    eyebrow: "Retail Ventures, Elevated",
    title: "Launch a modern storefront with seasoned operators at your side",
    subtitle:
      "CLC Retail Group blends data-backed site strategy, award-winning design, and on-call operators so you can open doors with confidence.",
    ctaText: "Plan your launch call",
    ctaLink: "/contact",
    secondaryCtaText: "Explore our services",
    secondaryCtaLink: "/services",
    backgroundImage:
      "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?auto=format&fit=crop&w=2000&q=80",
  },
  stats: [
    {
      label: "Stores launched",
      value: "520+",
      description: "Retail concepts opened across 38 states",
    },
    {
      label: "Average payback",
      value: "13 months",
      description: "Median timeline for franchise investments",
    },
    {
      label: "Partner NPS",
      value: "91",
      description: "Entrepreneurs rating our launch experience",
    },
  ],
  trust: [
    {
      title: "Co-building mindset",
      description:
        "We integrate with your team from day zero, aligning incentives and decisions so every milestone compounds.",
      icon: "handshake",
    },
    {
      title: "Operational clarity",
      description:
        "Blueprints, checklists, and dashboards keep real estate, buildout, and launch plans accountable in real time.",
      icon: "lightbulb",
    },
    {
      title: "Supply chain confidence",
      description:
        "Preferred supplier programs and automated replenishment workflows prevent stock-outs from day one.",
      icon: "package",
    },
  ],
  services: [
    {
      title: "Concept validation",
      description:
        "Validate your retail thesis with consumer demand modeling, competitive scans, and profitability projections.",
      icon: "sparkle",
    },
    {
      title: "Location intelligence",
      description:
        "Blend mobility data, psychographics, and on-the-ground brokers to pinpoint high-conversion trade areas.",
      icon: "map-pin",
    },
    {
      title: "Launch operations",
      description:
        "From buildout to hiring playbooks, we orchestrate every launch task so you can focus on the brand experience.",
      icon: "rocket",
    },
    {
      title: "Ongoing optimization",
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
});
