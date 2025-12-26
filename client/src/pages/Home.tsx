import { useState } from "react";
import { Link } from "wouter";
import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { CardGlass } from "@/components/CardGlass";
import HeroSection from "@/components/HeroSection";
import MarketingLayout from "@/components/layouts/MarketingLayout";
import { Seo } from "@/components/Seo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  MapPin,
  PenTool,
  Hammer,
  Package,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Download,
  TrendingUp,
  Award,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const baseUrl = "https://clcretail.com";

const steps = [
  {
    id: 1,
    title: "Location",
    path: "/step-location",
    icon: MapPin,
    summary: "Data-driven site selection with catchment analysis, competitor mapping, and feasibility reports.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Design",
    path: "/step-design",
    icon: PenTool,
    summary: "Brand-led visual identity with optimised store flow and accessible layouts meeting UK regulations.",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Fit-Out",
    path: "/step-fit-out",
    icon: Hammer,
    summary: "Fixed budget builds with compliant M&E works and low disruption installation schedules.",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 4,
    title: "Suppliers",
    path: "/step-suppliers",
    icon: Package,
    summary: "Negotiated supplier terms, category plans, and stock management to improve margins.",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 5,
    title: "Launch",
    path: "/step-launch",
    icon: Rocket,
    summary: "Trained teams, local marketing plans, and opening-week operations for trade-ready performance.",
    color: "from-yellow-500 to-amber-500",
  },
];

const whyClc = [
  {
    title: "UK Expertise",
    description: "Deep understanding of UK convenience retail regulations, consumer behaviour, and market dynamics.",
    icon: Award,
  },
  {
    title: "End-to-End Delivery",
    description: "From location to launch, we manage every detail so you can focus on running your business.",
    icon: CheckCircle2,
  },
  {
    title: "Lender-Ready Documentation",
    description: "Professional feasibility reports and business plans that meet investor and lender requirements.",
    icon: TrendingUp,
  },
];

const caseStudies = [
  {
    title: "Manchester Express",
    location: "Greater Manchester",
    result: "£12K weekly sales in month 1",
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "London Local",
    location: "East London",
    result: "Break-even achieved week 3",
    image: "https://images.unsplash.com/photo-1555529669-2269763671c0?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Birmingham Convenience",
    location: "Birmingham City Centre",
    result: "Opened 2 weeks ahead of schedule",
    image: "https://images.unsplash.com/photo-1601598851547-4302969d0614?auto=format&fit=crop&w=800&q=80",
  },
];

const trustLogos = [
  { 
    name: "Nisa", 
    url: "https://www.nisalocally.co.uk",
    color: "#E8334B"
  },
  { 
    name: "Londis", 
    url: "https://www.londis.co.uk",
    color: "#0066CC"
  },
  { 
    name: "Premier", 
    url: "https://www.premier-stores.co.uk",
    color: "#FFDD00"
  },
  { 
    name: "Morrisons Daily", 
    url: "https://www.morrisons.com/morrisons-daily",
    color: "#FFC20E"
  },
];

export default function Home() {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);
  const [checklistFormOpen, setChecklistFormOpen] = useState(false);
  const [projectStage, setProjectStage] = useState<string>("");
  const { toast } = useToast();

  const leadMutation = useMutation({
    mutationFn: async (data: { name: string; email: string; location?: string; projectStage: string }) => {
      const response = await apiRequest("POST", "/api/leads", data);
      return response.json();
    },
    onSuccess: (response: { message: string; downloadUrl?: string }) => {
      toast({
        title: "Success!",
        description: response.message,
      });
      setChecklistFormOpen(false);
      setProjectStage("");
      if (response.downloadUrl) {
        window.open(response.downloadUrl, "_blank");
      }
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleChecklistDownload = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      location: formData.get("location") as string || undefined,
      projectStage: projectStage,
    };
    
    if (!projectStage) {
      toast({
        title: "Missing Information",
        description: "Please select your project stage.",
        variant: "destructive",
      });
      return;
    }
    
    leadMutation.mutate(data);
  };

  return (
    <MarketingLayout showStickyCta>
      <Seo
        title="CLC Retail Solutions Group — Convenience Store Specialists UK"
        description="End-to-end convenience store solutions from site selection to launch. Book a free site survey today."
        canonical={`${baseUrl}/`}
        ogImage="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1600&q=80"
      />

      <HeroSection
        eyebrow="Retail environments crafted for modern founders"
        title="Premium Convenience Store Solutions Across the UK"
        subtitle="From Location to Launch — five specialist steps to open profitable, compliant convenience stores."
        ctaText="Book a free site survey"
        ctaLink="/contact#schedule"
        backgroundImage="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=2000&q=80"
      />

      <AnimatedSection>
        <section className="py-16 lg:py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mb-12 text-center">
              <Badge className="border border-white/25 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70">
                Why CLC Retail Solutions Group
              </Badge>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {whyClc.map((item) => {
                  const Icon = item.icon;
                  return (
                    <CardGlass key={item.title} className="p-8 text-center">
                      <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/25 bg-white/10 text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-heading text-xl text-white">{item.title}</h3>
                      <p className="mt-4 text-white/80">{item.description}</p>
                    </CardGlass>
                  );
                })}
              </div>
              <motion.div 
                className="mt-16 flex flex-col items-center gap-8"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.21, 1.11, 0.81, 0.99] // Custom spring-like easing for a premium feel
                }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <p className="text-xs uppercase tracking-[0.4em] text-white/40">Trusted Partners</p>
                <div
                  className="flex gap-12 flex-wrap justify-center items-center opacity-70 grayscale transition-all duration-700 hover:opacity-100 hover:grayscale-0"
                >
                  {trustLogos.map((logo, index) => (
                    <motion.div
                      key={logo.name}
                      className="cursor-pointer group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 0.2 + (index * 0.1),
                        ease: "easeOut"
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => window.open(logo.url, '_blank')}
                      data-testid={`link-trusted-${logo.name.toLowerCase()}`}
                    >
                      <span 
                        className="font-heading text-lg font-medium tracking-wider transition-colors duration-300"
                        style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = logo.color}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
                      >
                        {logo.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <section className="py-16 lg:py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mb-12 space-y-4 text-center text-white">
              <Badge className="border border-white/25 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70">
                The Five-Step Journey
              </Badge>
              <h2 className="font-heading text-3xl font-semibold sm:text-4xl">
                Your Path to a Successful Convenience Store
              </h2>
              <p className="mx-auto max-w-2xl text-white/75">
                Our proven five-step framework takes you from site selection to profitable opening. Each step builds on the last, ensuring nothing is overlooked.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-0 right-0 top-[4.5rem] hidden h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-orange-500 via-green-500 to-yellow-500 md:block" />
              
              <div className="grid gap-8 md:grid-cols-5">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = selectedStep === step.id;
                  return (
                    <div
                      key={step.id}
                      className="relative"
                      onMouseEnter={() => setSelectedStep(step.id)}
                      onMouseLeave={() => setSelectedStep(null)}
                    >
                      <Link href={step.path}>
                        <div
                          className={`group cursor-pointer transition-all duration-300 ${
                            isActive ? "scale-105" : ""
                          }`}
                          data-testid={`step-card-${step.id}`}
                        >
                          <div className={`relative mx-auto mb-6 flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br ${step.color} shadow-2xl transition-all duration-300 group-hover:scale-110 md:relative md:z-10`}>
                            <Icon className="h-12 w-12 text-white" />
                            <div className="absolute -bottom-2 -right-2 flex h-10 w-10 items-center justify-center rounded-full bg-white font-heading text-lg font-bold text-gray-900">
                              {step.id}
                            </div>
                          </div>
                          <div className="text-center">
                            <h3 className="font-heading text-xl font-semibold text-white">{step.title}</h3>
                            <p
                              className={`mt-3 text-sm text-white/70 transition-all duration-300 ${
                                isActive ? "opacity-100" : "opacity-0 md:opacity-100"
                              }`}
                            >
                              {step.summary}
                            </p>
                            <Button
                              variant="ghost"
                              className="mt-4 text-white/80 hover:text-white"
                              data-testid={`button-learn-more-${step.id}`}
                            >
                              Learn more <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <section className="py-16 lg:py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mb-12 space-y-4 text-center text-white">
              <Badge className="border border-white/25 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/70">
                Success Stories
              </Badge>
              <h2 className="font-heading text-3xl font-semibold sm:text-4xl">
                Recent Case Studies
              </h2>
              <p className="mx-auto max-w-2xl text-white/75">
                Real results from real projects across the UK. See how we've helped entrepreneurs launch profitable convenience stores.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {caseStudies.map((study) => (
                <CardGlass key={study.title} className="group overflow-hidden p-0">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d16] via-[#0b0d16]/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl text-white">{study.title}</h3>
                    <p className="mt-2 text-sm text-white/60">{study.location}</p>
                    <div className="mt-4 flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-green-400" />
                      <p className="font-semibold text-green-400">{study.result}</p>
                    </div>
                  </div>
                </CardGlass>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link href="/contact">
                <Button variant="outline" className="rounded-full border-white/30 bg-white/10 text-white/85 hover:text-white" data-testid="button-view-all-cases">
                  View all case studies
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <section className="py-16 lg:py-20">
          <div className="container mx-auto max-w-4xl px-4">
            <CardGlass className="relative overflow-hidden p-12">
              <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl" />
              <div className="relative text-center text-white">
                <Download className="mx-auto mb-6 h-12 w-12 text-primary" />
                <h2 className="font-heading text-3xl font-semibold sm:text-4xl">
                  Free Location Selection Checklist
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-white/75">
                  A practical checklist to validate high-potential convenience store sites. Covers catchment analysis, competition, accessibility, compliance, and financial filters.
                </p>
                <Dialog open={checklistFormOpen} onOpenChange={setChecklistFormOpen}>
                  <DialogTrigger asChild>
                    <Button
                      size="lg"
                      className="mt-8 rounded-full bg-gradient-to-r from-primary via-primary/80 to-secondary px-10 py-6 text-sm font-semibold uppercase tracking-[0.22em] text-white"
                      data-testid="button-download-checklist"
                    >
                      Download Free Checklist
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Get Your Free Checklist</DialogTitle>
                      <DialogDescription>
                        Enter your details below and we'll send the Location Selection Checklist to your email.
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleChecklistDownload} className="space-y-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Smith"
                          required
                          data-testid="input-name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                          data-testid="input-email"
                        />
                      </div>
                      <div>
                        <Label htmlFor="location">Target Location</Label>
                        <Input
                          id="location"
                          name="location"
                          placeholder="e.g., Manchester, London"
                          data-testid="input-location"
                        />
                      </div>
                      <div>
                        <Label htmlFor="stage">Project Stage</Label>
                        <Select value={projectStage} onValueChange={setProjectStage} required>
                          <SelectTrigger data-testid="select-stage">
                            <SelectValue placeholder="Select stage" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="exploring">Just exploring</SelectItem>
                            <SelectItem value="planning">Planning phase</SelectItem>
                            <SelectItem value="ready">Ready to start</SelectItem>
                            <SelectItem value="existing">Already have a site</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Button
                        type="submit"
                        className="w-full"
                        disabled={leadMutation.isPending}
                        data-testid="button-submit-checklist"
                      >
                        {leadMutation.isPending ? "Sending..." : "Send Me the Checklist"}
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </CardGlass>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection delay={0.25}>
        <section className="py-20">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/12 bg-[#0f1222]/95 p-12 text-white shadow-[0_38px_110px_-60px_rgba(0,0,0,0.9)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),transparent_70%)]" />
              <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/60">Let's collaborate</p>
                  <h3 className="font-heading text-3xl sm:text-4xl">Ready to open your convenience store?</h3>
                  <p className="max-w-xl text-base text-white/75 sm:text-lg">
                    Book a free site survey and let us help you build a profitable, compliant convenience store from the ground up.
                  </p>
                </div>
                <div className="space-y-4">
                  <Link href="/contact#schedule">
                    <Button
                      size="lg"
                      className="w-full rounded-full bg-gradient-to-r from-primary via-primary/80 to-secondary px-10 py-6 text-xs font-semibold uppercase tracking-[0.3em] text-white"
                      data-testid="button-cta-bottom"
                    >
                      Book a free site survey
                    </Button>
                  </Link>
                  <Link href="/step-location">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full rounded-full border border-white/30 bg-white/10 px-10 py-6 text-xs font-semibold uppercase tracking-[0.3em] text-white/80 hover:text-white"
                      data-testid="button-cta-secondary"
                    >
                      Explore Step 1: Location
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </MarketingLayout>
  );
}
