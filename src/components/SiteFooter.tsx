import { Link } from "react-router-dom";
import { Mail, Phone, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-lusfam.jpeg";

const footerLinks = {
  Services: [
    { label: "Diesel", href: "/products" },
    { label: "Petrol", href: "/products" },
    { label: "Jet Fuel", href: "/products" },
    { label: "LPG", href: "/products" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Markets", href: "/markets" },
    { label: "Compliance", href: "/compliance" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "Downloads", href: "/downloads" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const SiteFooter = () => {
  return (
    <footer style={{ backgroundColor: "#040912" }} className="border-t border-white/10">
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand + contact */}
          <div className="space-y-4">
            <img
              src={logo}
              alt="LusFam Energy Trading"
              className="h-10 w-auto"
            />
            <p className="text-sm text-white/50 leading-relaxed">
              Trusted partner for the procurement and delivery of bulk
              petroleum products across Southern Africa.
            </p>
            <div className="space-y-2.5 pt-2">
              <a
                href="tel:+263773540198"
                className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors group"
              >
                <Phone className="h-3.5 w-3.5 shrink-0 text-[#D4A017]" />
                +263 77 354 0198
              </a>
              <a
                href="mailto:info@lusfamenergy.com"
                className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
              >
                <Mail className="h-3.5 w-3.5 shrink-0 text-[#D4A017]" />
                info@lusfamenergy.com
              </a>
              <a
                href="https://wa.me/263773540198"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
              >
                <MessageCircle className="h-3.5 w-3.5 shrink-0 text-[#D4A017]" />
                WhatsApp
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                className="font-semibold uppercase text-xs tracking-widest mb-4"
                style={{ color: "#D4A017" }}
              >
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/50 hover:text-[#D4A017] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="border-white/10 my-12" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/35 text-center md:text-left max-w-none">
            © {new Date().getFullYear()} LusFam Energy Trading — a division of
            LusFam Trust Investments (Pvt) Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-xs text-white/35 hover:text-white/60 transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-xs text-white/35 hover:text-white/60 transition-colors">
              Terms
            </Link>
            <Link to="/compliance" className="text-xs text-white/35 hover:text-[#D4A017] transition-colors">
              Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
