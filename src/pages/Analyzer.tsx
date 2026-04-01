import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Cpu, ArrowRight, CheckCircle2, AlertTriangle, Lightbulb, X } from "lucide-react";

const sampleResults = {
  score: 78,
  improvements: [
    { type: "performance", text: "Consider migrating from Express to Fastify for 2-3x faster request handling", priority: "high" },
    { type: "cost", text: "Switch from MongoDB Atlas M10 to Supabase for 40% cost reduction", priority: "medium" },
    { type: "scalability", text: "Add Redis caching layer for frequently accessed data", priority: "high" },
    { type: "dx", text: "Replace Webpack with Vite for 10x faster dev server startup", priority: "low" },
  ],
  alternatives: [
    { current: "Express.js", suggested: "Fastify", reason: "Better performance & TypeScript support" },
    { current: "MongoDB", suggested: "PostgreSQL", reason: "Better for relational data & ACID compliance" },
    { current: "Heroku", suggested: "Railway / Fly.io", reason: "Modern DX with lower pricing" },
  ],
};

const Analyzer = () => {
  const [stack, setStack] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [analyzed, setAnalyzed] = useState(false);

  const addTech = () => {
    const trimmed = input.trim();
    if (trimmed && !stack.includes(trimmed)) {
      setStack([...stack, trimmed]);
      setInput("");
    }
  };

  const removeTech = (tech: string) => setStack(stack.filter((t) => t !== tech));

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16 space-y-8 max-w-3xl">
        <div className="text-center space-y-3">
          <div className="mx-auto h-12 w-12 rounded-xl gradient-bg flex items-center justify-center">
            <Cpu className="h-6 w-6 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold">AI Stack Analyzer</h1>
          <p className="text-muted-foreground text-sm">
            Enter your current tech stack and get AI-powered recommendations
          </p>
        </div>

        {/* Input */}
        <Card className="glass">
          <CardContent className="pt-6 space-y-4">
            <div className="flex gap-2">
              <Input
                placeholder="e.g. React, Node.js, MongoDB..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addTech()}
                className="bg-background"
              />
              <Button variant="secondary" onClick={addTech}>Add</Button>
            </div>
            {stack.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="gap-1 font-mono text-xs">
                    {tech}
                    <button onClick={() => removeTech(tech)}>
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            )}
            <Button
              variant="hero"
              className="w-full"
              disabled={stack.length === 0}
              onClick={() => setAnalyzed(true)}
            >
              Analyze My Stack <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Results */}
        {analyzed && (
          <div className="space-y-6 animate-fade-in">
            <Card className="glass glow">
              <CardHeader>
                <CardTitle className="text-base">Stack Health Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="text-5xl font-extrabold gradient-text">{sampleResults.score}</div>
                  <div className="text-sm text-muted-foreground">
                    <p>Your stack is <span className="text-foreground font-medium">Good</span> but has room for improvement.</p>
                    <p className="mt-1">We found {sampleResults.improvements.length} optimization opportunities.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Lightbulb className="h-4 w-4 text-primary" /> Improvements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {sampleResults.improvements.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
                    {item.priority === "high" ? (
                      <AlertTriangle className="h-4 w-4 text-destructive mt-0.5 shrink-0" />
                    ) : (
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    )}
                    <div>
                      <p className="text-sm">{item.text}</p>
                      <Badge variant="outline" className="mt-1.5 text-xs capitalize">{item.type}</Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-base">Alternative Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {sampleResults.alternatives.map((alt, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-muted-foreground line-through">{alt.current}</span>
                          <ArrowRight className="h-3 w-3 text-primary" />
                          <span className="font-medium text-primary">{alt.suggested}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{alt.reason}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Analyzer;
