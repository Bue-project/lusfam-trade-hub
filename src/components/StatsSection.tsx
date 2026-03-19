import { motion } from "framer-motion";

const stats = [
  { value: "1.2M", unit: "m³", label: "Annual Throughput" },
  { value: "5+", unit: "", label: "Countries Served" },
  { value: "48h", unit: "", label: "RFQ Response Time" },
  { value: "15+", unit: "yrs", label: "Industry Experience" },
];

const StatsSection = () => {
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
          <h2>Trusted Across the Region</h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-card rounded-xl p-6 shadow-card text-center"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ ease: [0.32, 0.72, 0, 1], duration: 0.4, delay: i * 0.05 }}
            >
              <div className="text-3xl lg:text-4xl font-bold text-secondary tnum">
                {stat.value}
                {stat.unit && <span className="text-lg text-muted-foreground font-medium ml-1">{stat.unit}</span>}
              </div>
              <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
