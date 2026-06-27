import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-lusfam.jpeg";
import { CONTACT_EMAIL, CONTACT_PHONE_PRIMARY, CONTACT_PHONE_SECONDARY, CONTACT_ADDRESS } from "@/lib/whatsapp";

const footerLinks = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Compliance", href: "/compliance" },
    { label: "Documents", href: "/documents" },
    { label: "Contact", href: "/contact" },
  ],
  Products: [
    { label: "EN590 Diesel", href: "/products" },
    { label: "Jet A-1", href: "/products" },
    { label: "D6 Fuel Oil", href: "/products" },
    { label: "LPG / LNG", href: "/products" },
    { label: "Crude Oil", href: "/products" },
  ],
};

const SiteFooter = () => {
  return (
    <footer className="bg-[#0B1F3A] border-t border-white/10">
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
              An independent energy transaction facilitation company connecting
              qualified buyers, suppliers, refiners, mandates, and strategic
              partners across international markets.
            </p>
            <div className="space-y-2.5 pt-2">
              <div className="flex items-start gap-2 text-sm text-white/50">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-[#C7A24A] mt-0.5" />
                {CONTACT_ADDRESS}
              </div>
              <a
                href={`tel:${CONTACT_PHONE_PRIMARY.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors group"
              >
                <Phone className="h-3.5 w-3.5 shrink-0 text-[#C7A24A]" />
                {CONTACT_PHONE_PRIMARY}
              </a>
              <a
                href={`tel:${CONTACT_PHONE_SECONDARY.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
              >
                <Phone className="h-3.5 w-3.5 shrink-0 text-[#C7A24A]" />
                {CONTACT_PHONE_SECONDARY}
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
              >
                <Mail className="h-3.5 w-3.5 shrink-0 text-[#C7A24A]" />
                {CONTACT_EMAIL}
              </a>
              <a
                href="https://wa.me/263773540198"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
              >
                <MessageCircle className="h-3.5 w-3.5 shrink-0 text-[#C7A24A]" />
                WhatsApp
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                className="font-semibold uppercase text-xs tracking-widest mb-4"
                style={{ color: "#C7A24A" }}
              >
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Legal / tagline */}
          <div>
            <h4 className="font-semibold uppercase text-xs tracking-widest mb-4" style={{ color: "#C7A24A" }}>
              Legal
            </h4>
            <p className="text-sm text-white/40 leading-relaxed">
              LusFam Energy Trading (Private) Limited is incorporated in
              Zimbabwe. Registration No. 101629A0242026. We act as a transaction
              facilitator and do not hold title to petroleum products.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} LusFam Energy Trading (Private) Limited. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Stand 2488, Crowhill, Harare, Zimbabwe
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
