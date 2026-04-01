import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Layers } from "lucide-react";
import { Link } from "react-router-dom";

const Signup = () => (
  <div className="min-h-screen flex items-center justify-center px-4 relative">
    <div className="absolute inset-0 grid-pattern opacity-30" />
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />

    <Card className="glass w-full max-w-sm relative z-10">
      <CardHeader className="text-center space-y-2">
        <Link to="/" className="flex items-center justify-center gap-2 font-bold text-lg mb-2">
          <Layers className="h-6 w-6 text-primary" />
          Stackifyra
        </Link>
        <CardTitle className="text-xl">Create your account</CardTitle>
        <p className="text-sm text-muted-foreground">Start optimizing your tech stack</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" placeholder="Jane Doe" className="bg-background" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" className="bg-background" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="••••••••" className="bg-background" />
        </div>
        <Button variant="hero" className="w-full">Create Account</Button>
        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="text-primary hover:underline">Log in</Link>
        </p>
      </CardContent>
    </Card>
  </div>
);

export default Signup;
