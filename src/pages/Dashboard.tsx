import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Plus, Zap, Clock, TrendingUp, Server } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    name: "E-Commerce Platform",
    stack: ["React", "Node.js", "PostgreSQL", "Stripe"],
    score: 82,
    status: "Healthy",
  },
  {
    name: "SaaS Dashboard",
    stack: ["Next.js", "Supabase", "Tailwind", "Vercel"],
    score: 94,
    status: "Optimized",
  },
  {
    name: "Mobile API",
    stack: ["Express", "MongoDB", "Redis", "AWS"],
    score: 67,
    status: "Needs Review",
  },
];

const metrics = [
  { label: "Avg Load Speed", value: "1.2s", icon: Clock, trend: "-15%" },
  { label: "Scalability Score", value: "87/100", icon: TrendingUp, trend: "+5" },
  { label: "Active Projects", value: "3", icon: Server, trend: "" },
  { label: "Optimizations", value: "12", icon: Zap, trend: "+3" },
];

const Dashboard = () => (
  <div className="min-h-screen">
    <Navbar />
    <main className="container mx-auto px-4 pt-24 pb-16 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground text-sm">Overview of your projects and performance</p>
        </div>
        <Button variant="hero" size="sm">
          <Plus className="h-4 w-4 mr-1" /> New Project
        </Button>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m) => (
          <Card key={m.label} className="glass">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">{m.label}</p>
                  <p className="text-2xl font-bold mt-1">{m.value}</p>
                </div>
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <m.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
              {m.trend && (
                <p className="text-xs text-primary mt-2 font-medium">{m.trend} this week</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Projects */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Your Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p) => (
            <Card key={p.name} className="glass hover:border-primary/30 transition-colors">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">{p.name}</CardTitle>
                  <Badge
                    variant={p.score >= 90 ? "default" : p.score >= 75 ? "secondary" : "destructive"}
                    className="text-xs"
                  >
                    {p.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Health Score</span>
                    <span className="font-medium">{p.score}%</span>
                  </div>
                  <Progress value={p.score} className="h-1.5" />
                </div>
                <Button variant="ghost" size="sm" className="w-full" asChild>
                  <Link to="/analyzer">Analyze Stack →</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Dashboard;
