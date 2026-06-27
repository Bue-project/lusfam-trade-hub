import { motion } from "framer-motion";
import { Fuel, Plane, Droplets, Flame, Waves, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const products = [
  { icon: Fuel, name: "EN590 10ppm Diesel", specs: "Ultra-low sulphur · CIF and FOB structures", slug: "diesel" },
  { icon: Plane, name: "Jet A-1 Aviation Fuel", specs: "ASTM D1655 · Commercial & procurement programs", slug: "jet-a1" },
  { icon: Droplets, name: "D6 Virgin Fuel Oil", specs: "Industrial & commercial fuel oil opportunities", slug: "d6" },
  { icon: Flame, name: "LPG", specs: "Liquefied Petroleum Gas · Bulk opportunities", slug: "lpg" },
  { icon: Waves, name: "LNG", specs: "Liquefied Natural Gas opportunities", slug: "lng" },
  { icon: BarChart3, name: "Crude Oil", specs: "Selective crude opportunities via mandate", slug: "crude" },
];

const ease: [number, number, number, number] = [0.32, 0.72, 0, 1];

const ProductTilesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-site">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ease, duration: 0.4 }}
        >
          <div className="text-xs font-semibold uppercase tracking-widest text-[#C7A24A] mb-3">Products of Interest</div>
          <h2 className="text-[#0B1F3A]">Energy Products We Facilitate</h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            LusFam Energy supports commercial opportunities involving these products through its
            network of suppliers, refiners, mandates, and strategic partners.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.slug}
                className="group bg-white rounded-xl p-6 flex flex-col border border-gray-100 hover:border-[#C7A24A]/40 hover:shadow-md transition-all duration-200"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ ease, duration: 0.4, delay: i * 0.06 }}
              >
                <div className="h-12 w-12 rounded-lg bg-[#0B1F3A] group-hover:bg-[#C7A24A] flex items-center justify-center mb-4 transition-colors duration-200">
                  <Icon className="h-6 w-6 text-[#C7A24A] group-hover:text-[#0B1F3A]" />
                </div>
                <h3 className="text-base font-semibold text-[#0B1F3A] mb-1">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-5 flex-1">{product.specs}</p>
                <Link
                  to="/products"
                  className="flex items-center gap-1 text-xs font-semibold text-[#C7A24A] hover:text-[#0B1F3A] transition-colors"
                >
                  Learn More <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease, duration: 0.4, delay: 0.3 }}
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0B1F3A] text-white text-sm font-semibold hover:bg-[#0B1F3A]/90 transition-colors"
          >
            View All Products <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductTilesSection;
