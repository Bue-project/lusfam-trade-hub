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
      {unit && (
        <span className="text-lg text-muted-foreground font-medium ml-1">
          {unit}
        </span>
      )}
    </span>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-spacing bg-muted">
      <div className="container-site">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ease: [0.32, 0.72, 0, 1], duration: 0.4 }}
        >
          <div className="ui-label text-primary mb-3">At a Glance</div>
          <h2>Our Reach & Capability</h2>
        </motion.div>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-card rounded-xl p-6 shadow-card text-center cursor-default transition-shadow duration-200 hover:shadow-card-hover hover:-translate-y-1"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                ease: [0.32, 0.72, 0, 1],
                duration: 0.4,
                delay: i * 0.05,
              }}
              whileHover={{ y: -4 }}
            >
              <div className="text-3xl lg:text-4xl font-bold text-secondary tnum">
                <CountUpStat {...stat} isInView={isInView} />
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
