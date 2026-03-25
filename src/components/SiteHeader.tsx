import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-lusfam.jpeg";

const navLinks = [
  { label: "Home", href: "/" },
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
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[5rem] transition-all duration-300 ${
        scrolled
          ? "bg-[#060D18]/95 backdrop-blur-md border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-site flex h-full items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src={logo}
            alt="LusFam Energy Trading"
            className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === link.href
                  ? "text-white"
                  : "text-white/65 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button className="flex items-center gap-1.5 text-sm text-white/50 hover:text-white/80 transition-colors">
            <Globe className="h-4 w-4" />
            <span>EN</span>
          </button>
          <a
            href="https://wa.me/263773540198"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-10 w-10 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
          <Button
            onClick={onRequestQuote}
            size="default"
            className="bg-[#D4A017] hover:bg-[#C4920A] text-[#060D18] font-semibold shadow-[0_0_20px_hsl(42_89%_45%/0.35)] hover:shadow-[0_0_28px_hsl(42_89%_45%/0.55)] transition-all duration-300"
          >
            Request a Quote
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex items-center justify-center h-10 w-10 text-white/80 hover:text-white transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-[5rem] left-0 right-0 bg-[#060D18]/98 backdrop-blur-md border-b border-white/10 z-40">
          <nav className="container-site py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-base font-medium py-2 transition-colors ${
                  location.pathname === link.href
                    ? "text-[#D4A017]"
                    : "text-white/75 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <hr className="border-white/10" />
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1.5 text-sm text-white/50">
                <Globe className="h-4 w-4" />
                EN
              </button>
              <a
                href="https://wa.me/263773540198"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
            <Button
              onClick={() => { onRequestQuote(); setMobileOpen(false); }}
              className="w-full bg-[#D4A017] hover:bg-[#C4920A] text-[#060D18] font-semibold"
            >
              Request a Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
