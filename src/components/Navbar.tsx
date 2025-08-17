import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { 
  Home,
  Building2, 
  Target, 
  BookOpen, 
  TrendingUp,
  UserPlus,
  LogIn,
  Award,
  Plus
} from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: "/", label: "Dashboard", icon: Home },
    { path: "/skills", label: "Skills", icon: Target },
    { path: "/journal", label: "Journal", icon: BookOpen },
    { path: "/add-company", label: "Add Company", icon: Building2 },
    { path: "/add-goal", label: "Set Goal", icon: Plus },
    { path: "/log-achievement", label: "Achievement", icon: Award },
  ];

  return (
    <nav className="bg-card/80 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-lovable rounded-lg flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Campus Companion
            </h1>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={isActive(item.path) ? "default" : "ghost"}
                  size="sm"
                  className="gap-2 hover:scale-105 transition-transform"
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-2">
            <Link to="/login">
              <Button variant="ghost" size="sm" className="gap-2 hover:scale-105 transition-transform">
                <LogIn className="h-4 w-4" />
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="hero" size="sm" className="gap-2">
                <UserPlus className="h-4 w-4" />
                Sign Up
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden mt-3 flex flex-wrap gap-2">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <Button
                variant={isActive(item.path) ? "default" : "ghost"}
                size="sm"
                className="gap-1 text-xs hover:scale-105 transition-transform"
              >
                <item.icon className="h-3 w-3" />
                {item.label}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;