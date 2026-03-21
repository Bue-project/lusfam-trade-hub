import { motion } from "framer-motion";
import { Fuel, Flame, Plane, Droplets, Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  { icon: Fuel, name: "Diesel (AGO)", specs: "EN 590 compliant · Bulk supply", slug: "diesel" },
  { icon: Flame, name: "Petrol (PMS)", specs: "Unleaded · RON 93/95", slug: "petrol" },
  { icon: Plane, name: "Jet Fuel (Jet A-1)", specs: "ASTM D1655 · Aviation grade", slug: "jet-fuel" },
  { icon: Droplets, name: "LPG", specs: "Propane/Butane blends · Bulk & cylinder", slug: "lpg" },
];

const ProductTilesSection = () => {
  return (
    <section className="section-spacing">
      <div className="container-site">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ease: [0.32, 0.72, 0, 1], duration: 0.4 }}
        >
          <div className="ui-label text-primary mb-3">Our Products</div>
          <h2>Energy Products & Services</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.slug}
                className="group bg-card rounded-xl p-6 shadow-card flex flex-col cursor-default"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ ease: [0.32, 0.72, 0, 1], duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -6, boxShadow: "var(--shadow-card-hover)" }}
              >
                <motion.div
                  className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 transition-colors duration-200 group-hover:bg-primary/20"
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon className="h-6 w-6 text-primary" />
                </motion.div>
                <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-6 flex-1">{product.specs}</p>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1.5 text-xs font-medium text-primary hover:brightness-110 transition-all">
                    <Download className="h-3.5 w-3.5" />
                    Spec Sheet
                  </button>
                  <Link
                    to="/products"
                    className="story-link flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors ml-auto"
                  >
                    Details
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductTilesSection;
