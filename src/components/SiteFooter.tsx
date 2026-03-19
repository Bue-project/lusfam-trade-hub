import { Link } from "react-router-dom";
import logo from "@/assets/lusfam-logo.png";

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
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <img src={logo} alt="LusFam Energy Trading" className="h-10 w-auto brightness-0 invert" />
            <p className="text-sm text-secondary-foreground/70 leading-relaxed">
              Trusted partner for the procurement and delivery of bulk petroleum products across Southern Africa.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="ui-label text-secondary-foreground/50 mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="border-secondary-foreground/10 my-12" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-secondary-foreground/50 text-center md:text-left max-w-none">
            © {new Date().getFullYear()} LusFam Energy Trading — a division of LusFam Trust Investments (Pvt) Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-xs text-secondary-foreground/50 hover:text-secondary-foreground/70 transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-xs text-secondary-foreground/50 hover:text-secondary-foreground/70 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
