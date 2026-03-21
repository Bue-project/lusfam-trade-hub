import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-lusfam.jpeg";

const navLinks = [
  { label: "Products", href: "/products" },
  { label: "Markets", href: "/markets" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

interface SiteHeaderProps {
  onRequestQuote: () => void;
}

const SiteHeader = ({ onRequestQuote }: SiteHeaderProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 h-[5rem] border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container-site flex h-full items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logo} alt="LusFam Energy Trading" className="h-14 w-auto transition-transform duration-300 group-hover:scale-110" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors hover:text-foreground ${
                location.pathname === link.href
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Globe className="h-4 w-4" />
            <span>EN</span>
          </button>
          <a
            href="https://wa.me/263773540198"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-10 w-10 rounded-lg text-muted-foreground hover:bg-muted transition-colors"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
          <Button onClick={onRequestQuote} size="default">
            Request a Quote
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex items-center justify-center h-10 w-10"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-[4.5rem] left-0 right-0 bg-background border-b border-border z-40">
          <nav className="container-site py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-foreground py-2"
              >
                {link.label}
              </Link>
            ))}
            <hr className="border-border" />
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Globe className="h-4 w-4" />
                EN
              </button>
              <a
                href="https://wa.me/263773540198"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-muted-foreground"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
            <Button onClick={() => { onRequestQuote(); setMobileOpen(false); }} className="w-full">
              Request a Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
