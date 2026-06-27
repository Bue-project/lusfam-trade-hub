import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Home } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const ease: [number, number, number, number] = [0.32, 0.72, 0, 1];

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 bg-[#0B1F3A] flex items-center justify-center">
        <div className="container-site py-32 text-center">
          <motion.p
            className="text-xs font-semibold uppercase tracking-widest text-[#C7A24A] mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease }}
          >
            Error 404
          </motion.p>
          <motion.h1
            className="text-white text-7xl lg:text-9xl font-bold mb-4 leading-none"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease }}
          >
            404
          </motion.h1>
          <motion.p
            className="text-white/60 text-lg mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4, ease }}
          >
            This page could not be found.
          </motion.p>
          <motion.p
            className="text-white/40 text-sm mb-10 max-w-sm mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.4 }}
          >
            The route <span className="font-mono text-[#C7A24A]">{location.pathname}</span> does not exist.
            You may have followed a broken link or mistyped the address.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4, ease }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#C7A24A] text-[#0B1F3A] font-semibold text-sm hover:bg-[#C7A24A]/90 transition-colors"
            >
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </main>
      <SiteFooter />
      <WhatsAppFAB />
    </div>
  );
};

export default NotFound;
