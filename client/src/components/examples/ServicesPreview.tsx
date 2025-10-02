import ServicesPreview from "../ServicesPreview";
import { Store, MapPin, Package } from "lucide-react";

export default function ServicesPreviewExample() {
  const services = [
    {
      title: "Franchise Opportunities",
      description: "Explore proven business models with established brand recognition and comprehensive support systems.",
      icon: Store,
    },
    {
      title: "Site Selection & Setup",
      description: "Expert location analysis and complete store setup services to ensure your business starts on the right foot.",
      icon: MapPin,
    },
    {
      title: "Inventory Management",
      description: "Streamlined supply chain solutions and inventory systems to keep your business running efficiently.",
      icon: Package,
    },
  ];

  return <ServicesPreview services={services} />;
}
