import { motion } from "framer-motion";
import { ShieldCheck, FileCheck, Scale, Award } from "lucide-react";

const signals = [
  { icon: ShieldCheck, label: "Registered Facilitator" },
  { icon: FileCheck, label: "EN 590 & ASTM D1655 Compliant" },
  { icon: Scale, label: "INCOTERMS 2020 · FOB TTT / TTV" },
  { icon: Award, label: "Trusted Titleholder Partnership" },
];

const ease: [number, number, number, number] = [0.32, 0.72, 0, 1];

const TrustBar = () => {
  return (
    <section className="bg-[#0B3D6D] border-y border-white/10 py-4 overflow-x-auto">
      <div className="container-site">
        <motion.div
          className="flex items-center justify-center gap-0 min-w-max mx-auto"
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, ease }}
        >
          {signals.map((signal, i) => {
            const Icon = signal.icon;
            return (
              <motion.div
                key={signal.label}
                className={`flex items-center gap-2.5 px-6 py-1 ${
                  i < signals.length - 1 ? "border-r border-white/20" : ""
                }`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.35, ease }}
              >
                <Icon className="h-4 w-4 text-[#D4A017] shrink-0" />
                <span className="text-xs font-semibold text-white whitespace-nowrap tracking-wide">
                  {signal.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBar;
