import { motion } from "framer-motion";

const stats = [
  { value: "5+", label: "Years of Experience", sub: "Petroleum transaction facilitation" },
  { value: "6", label: "Products Facilitated", sub: "EN590, Jet A-1, D6, LPG, LNG, Crude" },
  { value: "4", label: "Global Regions", sub: "Africa, Latin America, Asia, Europe" },
  { value: "2026", label: "Year Incorporated", sub: "Registered in Zimbabwe" },
];

const ease: [number, number, number, number] = [0.32, 0.72, 0, 1];

const StatsSection = () => {
  return (
    <section className="py-16 bg-[#0B1F3A]">
      <div className="container-site">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ ease, duration: 0.4, delay: i * 0.08 }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-[#C7A24A] mb-2">{stat.value}</div>
              <div className="text-sm font-semibold text-white mb-1">{stat.label}</div>
              <div className="text-xs text-white/40">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
