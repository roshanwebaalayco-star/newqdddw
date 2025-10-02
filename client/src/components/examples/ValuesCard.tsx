import ValuesCard from "../ValuesCard";

export default function ValuesCardExample() {
  const values = [
    {
      title: "Visionary Partnership",
      description: "We see beyond transactions to build lasting partnerships that grow with your success.",
    },
    {
      title: "Relentless Execution",
      description: "From planning to launch, we execute with precision and attention to every detail.",
    },
    {
      title: "Integrity & Transparency",
      description: "Honest communication and ethical practices are the foundation of everything we do.",
    },
    {
      title: "Innovation in Design & Operations",
      description: "We constantly evolve our methods to deliver cutting-edge solutions for modern retail.",
    },
    {
      title: "Seamless Experience",
      description: "Every touchpoint is designed to make your journey smooth, efficient, and stress-free.",
    },
  ];

  return <ValuesCard values={values} />;
}
