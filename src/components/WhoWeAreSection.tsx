import { motion } from "framer-motion";
import { Shield, Truck, Globe, Handshake } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Legalized Facilitator",
    desc: "Operating through a trusted titleholder with fully documented procurement channels.",
  },
  {
    icon: Truck,
    title: "FOB TTT & TTV",
    desc: "Deliveries executed under internationally recognised FOB Tank-to-Tank and Tank-to-Vessel terms.",
  },
  {
    icon: Globe,
    title: "Southern Africa Focus",
    desc: "Serving markets across Zimbabwe, Zambia, Botswana, Malawi, and Mozambique.",
  },
  {
    icon: Handshake,
    title: "Buyer-First Approach",
    desc: "Every transaction is structured around the buyer's specifications, timelines, and compliance needs. We support, not supplant, your procurement process.",
  },
];

const ease: [number, number, number, number] = [0.32, 0.72, 0, 1];

const WhoWeAreSection = () => {
  return (
    <section className="section-spacing section-mid">
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease }}
          >
            <div className="ui-label mb-3">Who We Are</div>
            <h2 className="text-white mb-6 border-l-4 border-[#D4A017] pl-5">
              A Trusted Petroleum Facilitation Partner
            </h2>
            <p className="text-white/60 leading-relaxed mb-4">
              LusFam Energy Trading is a division of LusFam Trust Investments
              (Pvt) Ltd, specialising in the facilitation of structured
              petroleum supply transactions across Southern Africa.
            </p>
            <p className="text-white/60 leading-relaxed">
              As a legalized facilitator, we coordinate structured transactions
              through a trusted titleholder — facilitating access to Jet Fuel
              (Jet A-1), Diesel (EN590), Petrol, and LPG — under FOB TTT and
              FOB TTV terms. We do not hold title to product.
            </p>
          </motion.div>

          {/* Right: pillar cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  className="glass-card rounded-xl p-5 cursor-default"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4, ease, delay: i * 0.07 }}
                >
                  <div className="h-10 w-10 rounded-lg bg-[#D4A017]/15 flex items-center justify-center mb-3 transition-colors duration-200 group-hover:bg-[#D4A017]/25">
                    <Icon className="h-5 w-5 text-[#D4A017]" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-white/55 leading-relaxed">
                    {pillar.desc}
                  </p>
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
