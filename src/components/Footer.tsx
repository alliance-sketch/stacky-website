import { Layers } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-card/50">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2 font-bold text-lg">
            <Layers className="h-5 w-5 text-primary" />
            <span>Stackifyra</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Simplify Your Tech Stack with AI
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-sm">Product</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/dashboard" className="hover:text-foreground transition-colors">Dashboard</Link>
            <Link to="/analyzer" className="hover:text-foreground transition-colors">AI Analyzer</Link>
            <Link to="/pricing" className="hover:text-foreground transition-colors">Pricing</Link>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-sm">Company</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <span>About</span>
            <span>Blog</span>
            <span>Careers</span>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-sm">Contact</h4>
          <div className="text-sm text-muted-foreground space-y-1">
            <p>Terry Avenue North</p>
            <p>Seattle, WA 98109, US</p>
            <p>+1 206-813-0456</p>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © 2025 Stackifyra. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
