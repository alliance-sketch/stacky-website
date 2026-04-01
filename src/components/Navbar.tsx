import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layers, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/analyzer", label: "AI Analyzer" },
  { to: "/pricing", label: "Pricing" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <Layers className="h-6 w-6 text-primary" />
          <span>Stackifyra</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/login">Log in</Link>
          </Button>
          <Button variant="hero" size="sm" asChild>
            <Link to="/signup">Get Started</Link>
          </Button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass border-t border-border px-4 pb-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-2 pt-2">
            <Button variant="ghost" size="sm" asChild className="flex-1">
              <Link to="/login">Log in</Link>
            </Button>
            <Button variant="hero" size="sm" asChild className="flex-1">
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
