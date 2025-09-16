import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-r from-golden to-emerald p-2 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="h-6 w-6 text-charcoal" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-golden to-emerald bg-clip-text text-transparent">
              PostMux
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  isActive("/")
                    ? "text-golden"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Home
              </Link>
              <Link
                to="/dashboard"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  isActive("/dashboard")
                    ? "text-golden"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Dashboard
              </Link>
              <Link
                to="/create"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  isActive("/create")
                    ? "text-golden"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Create
              </Link>
              <Link
                to="/profile"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  isActive("/profile")
                    ? "text-golden"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Profile
              </Link>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="btn-ghost">
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="btn-hero">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/95 backdrop-blur-lg border-b border-border">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                isActive("/")
                  ? "text-golden"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                isActive("/dashboard")
                  ? "text-golden"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              to="/create"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                isActive("/create")
                  ? "text-golden"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Create
            </Link>
            <Link
              to="/profile"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                isActive("/profile")
                  ? "text-golden"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Profile
            </Link>
            <div className="pt-4 pb-3 border-t border-border">
              <div className="flex items-center space-x-4 px-3">
                <Link to="/login">
                  <Button variant="ghost" className="btn-ghost w-full">
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="btn-hero w-full">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;