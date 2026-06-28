import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-lusfam.jpeg";
import { WA_QUOTE } from "@/lib/whatsapp";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Markets", href: "/markets" },
  { label: "Compliance", href: "/compliance" },
  { label: "Documents", href: "/documents" },
  { label: "Contact", href: "/contact" },
];

const SiteHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen
            ? "bg-[#0B1F3A]/97 backdrop-blur-md border-b border-white/10"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        {/* Top bar */}
        <div className="h-[5rem] container-site flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src={logo}
              alt="LusFam Energy Trading"
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.href
                    ? "text-[#C7A24A]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={WA_QUOTE}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#C7A24A] text-[#0B1F3A] text-sm font-semibold hover:bg-[#C7A24A]/90 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Enquire Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-3 text-white"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile menu — full-screen overlay, separate from header so height is unconstrained */}
      {mobileOpen && (
        <div className="lg:hidden fixed top-[5rem] left-0 right-0 bottom-0 z-40 bg-[#0B1F3A] overflow-y-auto">
          <nav className="container-site py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-3.5 rounded-lg text-base font-medium transition-colors ${
                  location.pathname === link.href
                    ? "text-[#C7A24A] bg-white/5"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={WA_QUOTE}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 px-4 py-3.5 rounded-lg bg-[#C7A24A] text-[#0B1F3A] text-base font-semibold"
            >
              <MessageCircle className="h-5 w-5" />
              Enquire Now
            </a>
          </nav>
        </div>
      )}
    </>
  );
};

export default SiteHeader;
