import { motion } from "framer-motion";
import { ShieldCheck, FileCheck, Scale, Award } from "lucide-react";

const signals = [
  { icon: ShieldCheck, label: "Petroleum Facilitation Specialist" },
  { icon: FileCheck, label: "EN 590 & ASTM D1655 Compliant" },
  { icon: Scale, label: "INCOTERMS 2020 · FOB TTT / TTV" },
  { icon: Award, label: "Verified Counterparties Only" },
];

const ease: [number, number, number, number] = [0.32, 0.72, 0, 1];

const TrustBar = () => {
  return (
    <section className="bg-[#0B3D6D] border-y border-white/10 py-6 overflow-hidden">
      <div className="container-site">
        <motion.div
          className="grid grid-cols-2 lg:flex lg:items-center lg:justify-center gap-5 lg:gap-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {signals.map((signal, i) => {
            const Icon = signal.icon;
            return (
              <motion.div
                key={signal.label}
                className={`flex items-center gap-3 lg:px-6 lg:py-1 ${
                  i < signals.length - 1 ? "lg:border-r lg:border-white/20" : ""
                }`}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: i * 0.12, duration: 0.45, ease },
                  },
                }}
              >
                <Icon className="h-5 w-5 text-[#D4A017] shrink-0" />
                <motion.span
                  className="text-xs font-semibold text-white tracking-wide leading-tight"
                  variants={{
                    hidden: { opacity: 0, x: -6 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { delay: 0.1 + i * 0.12, duration: 0.4, ease },
                    },
                  }}
                >
                  {signal.label}
                </motion.span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBar;
