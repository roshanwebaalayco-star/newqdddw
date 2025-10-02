import ServicesGrid from "../ServicesGrid";
import { Store, MapPin, Package, Megaphone } from "lucide-react";

export default function ServicesGridExample() {
  const services = [
    {
      title: "Franchise Opportunities",
      description: "Partner with established brands and proven business models for guaranteed success.",
      icon: Store,
      features: [
        "Access to top-performing franchise brands",
        "Comprehensive training and onboarding",
        "Ongoing operational support",
        "Marketing and brand recognition",
      ],
    },
    {
      title: "Site Selection & Setup",
      description: "Strategic location analysis and complete store setup services.",
      icon: MapPin,
      features: [
        "Market analysis and demographics research",
        "Location scouting and lease negotiation",
        "Store design and layout planning",
        "Equipment and fixture installation",
      ],
    },
    {
      title: "Inventory & Supplier Management",
      description: "Streamlined supply chain solutions for optimal inventory control.",
      icon: Package,
      features: [
        "Supplier network and relationships",
        "Inventory management systems",
        "Product sourcing and procurement",
        "Quality control and logistics",
      ],
    },
    {
      title: "Marketing & Branding",
      description: "Complete marketing solutions to build your brand and attract customers.",
      icon: Megaphone,
      features: [
        "Brand identity development",
        "Digital marketing strategies",
        "Social media management",
        "Local advertising campaigns",
      ],
    },
  ];

  return <ServicesGrid services={services} />;
}
