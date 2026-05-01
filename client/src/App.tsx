import { Switch, Route } from "wouter";
import { Suspense, lazy } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import LoadingScreen from "@/components/LoadingScreen";

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Services = lazy(() => import("@/pages/Services"));
const Contact = lazy(() => import("@/pages/Contact"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));
const StepLocation = lazy(() => import("@/pages/StepLocation"));
const StepDesign = lazy(() => import("@/pages/StepDesign"));
const StepFitOut = lazy(() => import("@/pages/StepFitOut"));
const StepSuppliers = lazy(() => import("@/pages/StepSuppliers"));
const StepLaunch = lazy(() => import("@/pages/StepLaunch"));
const NotFound = lazy(() => import("@/pages/not-found"));

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/contact" component={Contact} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/step-location" component={StepLocation} />
      <Route path="/step-design" component={StepDesign} />
      <Route path="/step-fit-out" component={StepFitOut} />
      <Route path="/step-suppliers" component={StepSuppliers} />
      <Route path="/step-launch" component={StepLaunch} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Suspense fallback={<LoadingScreen message="Preparing your experience" />}>
          <Router />
        </Suspense>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
