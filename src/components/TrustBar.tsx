import { motion } from "framer-motion";
import { ShieldCheck, FileCheck, Award, Scale } from "lucide-react";

const signals = [
  { icon: ShieldCheck, label: "Registered Facilitator" },
  { icon: FileCheck, label: "EN 590 & ASTM D1655 Compliant Products" },
  { icon: Scale, label: "INCOTERMS 2020 · FOB TTT / TTV" },
  { icon: Award, label: "Trusted Titleholder Partnership" },
];

const ease: [number, number, number, number] = [0.32, 0.72, 0, 1];

const TrustBar = () => {
  return (
    <section className="border-y border-border bg-muted/50 py-5">
      <div className="container-site">
        <motion.div
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
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
                className="flex items-center gap-2 text-muted-foreground"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.35, ease }}
              >
                <Icon className="h-4 w-4 text-primary/70 shrink-0" />
                <span className="text-xs font-medium whitespace-nowrap">
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
