import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/dtl-logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Our Team", href: "/#team" },
  { label: "Contact", href: "/#contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    // If it's a hash link and we're on the home page, scroll to section
    if (href.startsWith("/#") && location.pathname === "/") {
      const element = document.querySelector(href.replace("/", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  const NavLink = ({ href, children, className, onClick }: { href: string; children: React.ReactNode; className?: string; onClick?: () => void }) => {
    const isExternal = href.startsWith("/#");
    const isRoute = href.startsWith("/") && !isExternal;

    if (isRoute) {
      return (
        <Link to={href} className={className} onClick={onClick}>
          {children}
        </Link>
      );
    }

    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={logo}
              alt="DTL Law - Du Toit Lambrechts Inc."
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors duration-200"
                onClick={() => handleNavClick(link.href)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:0514331415"
              className="flex items-center gap-2 text-sm font-medium text-accent"
            >
              <Phone className="h-4 w-4" />
              051 433 1415
            </a>
            <Button asChild>
              <Link to="/#contact">Request Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  href={link.href}
                  className="text-base font-medium text-foreground hover:text-accent transition-colors"
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-4 border-t border-border">
                <a
                  href="tel:0514331415"
                  className="flex items-center gap-2 text-sm font-medium text-accent mb-4"
                >
                  <Phone className="h-4 w-4" />
                  051 433 1415
                </a>
                <Button asChild className="w-full">
                  <Link to="/#contact">Request Consultation</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
