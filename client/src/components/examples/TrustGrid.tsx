import TrustGrid from "../TrustGrid";
import { Handshake, Lightbulb, Package } from "lucide-react";

export default function TrustGridExample() {
  const trustItems = [
    {
      title: "Partnership",
      description: "We build lasting relationships with our clients, working together every step of the way to ensure your success.",
      icon: Handshake,
    },
    {
      title: "Expertise",
      description: "Our team brings decades of retail industry experience to help you make informed decisions and avoid common pitfalls.",
      icon: Lightbulb,
    },
    {
      title: "Complete Solution",
      description: "From site selection to grand opening, we provide everything you need to launch and grow your retail business.",
      icon: Package,
    },
  ];

  return <TrustGrid items={trustItems} />;
}
