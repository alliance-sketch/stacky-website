import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for exploring Stackifyra",
    features: [
      "1 project",
      "Basic stack analysis",
      "Community support",
      "Limited recommendations",
    ],
    cta: "Get Started",
    variant: "hero-outline" as const,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "For serious developers and teams",
    features: [
      "Unlimited projects",
      "Full AI stack analysis",
      "Performance insights",
      "Priority support",
      "Architecture recommendations",
      "Security audit",
      "Export reports",
    ],
    cta: "Start Pro Trial",
    variant: "hero" as const,
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations at scale",
    features: [
      "Everything in Pro",
      "SSO & SAML",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "On-premise option",
    ],
    cta: "Contact Sales",
    variant: "hero-outline" as const,
  },
];

const Pricing = () => (
  <div className="min-h-screen">
    <Navbar />
    <main className="container mx-auto px-4 pt-24 pb-16">
      <div className="text-center space-y-3 mb-14">
        <h1 className="text-3xl font-bold">Simple, Transparent Pricing</h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          Start free and scale as your needs grow. No hidden fees.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`glass relative ${plan.popular ? "border-primary/40 glow" : ""}`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-bg text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                Most Popular
              </div>
            )}
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-lg">{plan.name}</CardTitle>
              <div className="mt-2">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant={plan.variant} className="w-full" asChild>
                <Link to="/signup">{plan.cta}</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default Pricing;
