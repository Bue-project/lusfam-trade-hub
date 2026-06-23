import { motion } from "framer-motion";
import { Shield, Globe, Handshake, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Globe,
    title: "International Reach",
    desc: "Supporting commercial opportunities across Africa, Latin America, Asia, and Europe through an established network of partners.",
  },
  {
    icon: Handshake,
    title: "Strategic Partnerships",
    desc: "Developing long-term relationships with qualified buyers, suppliers, refiners, mandates, and commercial organizations.",
  },
  {
    icon: Shield,
    title: "Due Diligence Focus",
    desc: "Promoting responsible engagement through commercial verification, transparency, and professional counterparty coordination.",
  },
  {
    icon: TrendingUp,
    title: "Market Development",
    desc: "Identifying and supporting growth opportunities across international energy markets with a facilitation-first approach.",
  },
];

const ease: [number, number, number, number] = [0.32, 0.72, 0, 1];

const WhoWeAreSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease }}
          >
            <div className="text-xs font-semibold uppercase tracking-widest text-[#C7A24A] mb-3">Who We Are</div>
            <h2 className="text-[#0B1F3A] mb-6 border-l-4 border-[#C7A24A] pl-5">
              An Independent Energy Transaction Facilitation Company
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              LusFam Energy Trading (Private) Limited was incorporated on 21 April 2026,
              building upon more than five years of practical experience in petroleum
              transaction facilitation, commercial relationship development, and
              international market engagement.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We support responsible participation in international petroleum markets
              by connecting qualified buyers, suppliers, refiners, mandates, and
              strategic partners. We act as a facilitator — not a titleholder — ensuring
              transparent and professionally structured commercial engagements.
            </p>
          </motion.div>

          {/* Right: pillar cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  className="rounded-xl p-5 border border-gray-100 bg-gray-50 hover:border-[#C7A24A]/30 hover:bg-[#C7A24A]/5 transition-colors duration-200"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ ease, duration: 0.4, delay: i * 0.07 }}
                >
                  <div className="h-10 w-10 rounded-lg bg-[#0B1F3A] flex items-center justify-center mb-3">
                    <Icon className="h-5 w-5 text-[#C7A24A]" />
                  </div>
                  <h3 className="text-sm font-semibold text-[#0B1F3A] mb-1">{pillar.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{pillar.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
