import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Cpu, BarChart3, Layers, Zap, Shield, GitBranch } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "AI Stack Analysis",
    description: "Get intelligent recommendations for your tech stack based on your project requirements.",
  },
  {
    icon: BarChart3,
    title: "Performance Insights",
    description: "Monitor load speed, scalability scores, and optimization opportunities in real-time.",
  },
  {
    icon: Layers,
    title: "Project Management",
    description: "Organize multiple projects and save stack configurations for quick reference.",
  },
  {
    icon: Zap,
    title: "Smart Recommendations",
    description: "Discover better frameworks, APIs, and hosting solutions categorized by use case.",
  },
  {
    icon: Shield,
    title: "Security Audit",
    description: "Identify vulnerabilities in your stack and get actionable security improvements.",
  },
  {
    icon: GitBranch,
    title: "Architecture Decisions",
    description: "Make informed choices about microservices, monoliths, and everything in between.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
              <Zap className="h-3 w-3" /> Launching in 2026 — AI-Powered Developer Tools
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Simplify Your Tech Stack{" "}
              <span className="gradient-text">with AI</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Analyze, optimize, and manage your development stack. Get intelligent
              recommendations for performance, cost, and scalability.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Button variant="hero" size="lg" asChild>
                <Link to="/analyzer">
                  Analyze My Stack <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14 space-y-3">
            <h2 className="text-3xl font-bold">Everything You Need</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Powerful tools designed for developers who want to make smarter technology decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="glass rounded-xl p-6 space-y-3 hover:border-primary/30 transition-colors group"
              >
                <div className="h-10 w-10 rounded-lg gradient-bg flex items-center justify-center">
                  <f.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="glass rounded-2xl p-10 md:p-16 text-center space-y-6 relative overflow-hidden glow">
            <div className="absolute inset-0 gradient-bg opacity-5" />
            <h2 className="text-3xl font-bold relative z-10">Ready to Optimize Your Stack?</h2>
            <p className="text-muted-foreground max-w-md mx-auto relative z-10">
              Join thousands of developers making smarter technology decisions with Stackifyra.
            </p>
            <Button variant="hero" size="lg" asChild className="relative z-10">
              <Link to="/signup">
                Get Started Free <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
