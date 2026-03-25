import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { endValue: 5, prefix: "", suffix: "", unit: "Markets", label: "Countries Served" },
  { endValue: 4, prefix: "", suffix: "+", unit: "", label: "Product Lines" },
  { endValue: 48, prefix: "<", suffix: "h", unit: "", label: "RFQ Response Time" },
  { endValue: 2, prefix: "", suffix: "", unit: "", label: "Delivery Terms (FOB)" },
];

const CountUpStat = ({
  endValue,
  prefix,
  suffix,
  unit,
  isInView,
}: {
  endValue: number;
  prefix: string;
  suffix: string;
  unit: string;
  isInView: boolean;
}) => {
  const count = useCountUp(endValue, 1200, true, isInView);
  return (
    <span>
      {prefix}
      {count}
      {suffix}
      {unit && <span className="text-2xl text-white/50 font-medium ml-1">{unit}</span>}
    </span>
  );
};

const ease: [number, number, number, number] = [0.32, 0.72, 0, 1];

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-deep py-20">
      <div className="container-site">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ease, duration: 0.4 }}
        >
          <div className="ui-label mb-3">At a Glance</div>
          <h2 className="text-white">Our Reach & Capability</h2>
        </motion.div>

        <div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10 border border-white/10 rounded-2xl overflow-hidden"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center justify-center py-12 px-6 text-center bg-white/[0.02] hover:bg-[#D4A017]/5 transition-colors duration-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ ease, duration: 0.4, delay: i * 0.07 }}
            >
              <div
                className="text-5xl lg:text-6xl font-bold tnum mb-2"
                style={{ color: "#D4A017", filter: "drop-shadow(0 0 16px #D4A01740)" }}
              >
                <CountUpStat {...stat} isInView={isInView} />
              </div>
              <div className="text-sm text-white/50 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
