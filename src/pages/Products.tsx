import { useState } from "react";
import { motion } from "framer-motion";
import { Fuel, Plane, Droplets, Flame, Waves, BarChart3, MessageCircle, ArrowRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import { WA_PRODUCT } from "@/lib/whatsapp";
import heroRefinery from "@/assets/hero-refinery.jpg";

const ease: [number, number, number, number] = [0.32, 0.72, 0, 1];

const allProducts = [
  {
    icon: Fuel,
    name: "EN590 10ppm Diesel",
    category: "Diesel",
    tagline: "Ultra-low sulphur diesel",
    description:
      "LusFam Energy supports opportunities involving EN590 10ppm diesel through its network of suppliers, mandates, refiners, and strategic partners. Available under CIF and FOB structures subject to mandate and commercial feasibility.",
    specs: [
      { label: "Specification", value: "EN 590" },
      { label: "Sulphur", value: "10ppm max" },
      { label: "Delivery", value: "CIF / FOB" },
    ],
  },
  {
    icon: Plane,
    name: "Jet A-1 Aviation Fuel",
    category: "Jet Fuel",
    tagline: "Aviation fuel for commercial programs",
    description:
      "LusFam Energy facilitates Jet A-1 opportunities for commercial aviation and procurement programs. All opportunities are subject to supplier mandate and certification requirements under ASTM D1655.",
    specs: [
      { label: "Specification", value: "ASTM D1655" },
      { label: "Grade", value: "Jet A-1" },
      { label: "Use", value: "Commercial aviation" },
    ],
  },
  {
    icon: Droplets,
    name: "D6 Virgin Fuel Oil",
    category: "Fuel Oil",
    tagline: "Industrial and commercial fuel oil",
    description:
      "LusFam Energy supports commercial opportunities involving D6 virgin fuel oil for industrial and commercial applications. Opportunities are facilitated through our network subject to mandate and commercial viability.",
    specs: [
      { label: "Grade", value: "D6 Virgin" },
      { label: "Use", value: "Industrial / Commercial" },
      { label: "Delivery", value: "CIF / FOB" },
    ],
  },
  {
    icon: Flame,
    name: "LPG",
    category: "LPG",
    tagline: "Liquefied Petroleum Gas opportunities",
    description:
      "LusFam Energy facilitates LPG opportunities for commercial and industrial buyers. Engagements are structured through qualified suppliers and mandate holders subject to commercial feasibility.",
    specs: [
      { label: "Grade", value: "Commercial / Industrial" },
      { label: "Mix", value: "Propane / Butane" },
      { label: "Delivery", value: "FOB / CIF" },
    ],
  },
  {
    icon: Waves,
    name: "LNG",
    category: "LNG",
    tagline: "Liquefied Natural Gas opportunities",
    description:
      "LusFam Energy supports selective LNG commercial opportunities through its partner network. All engagements are subject to counterparty qualification and mandate holder involvement.",
    specs: [
      { label: "Type", value: "Liquefied Natural Gas" },
      { label: "Use", value: "Industrial / Commercial" },
      { label: "Structure", value: "Subject to mandate" },
    ],
  },
  {
    icon: BarChart3,
    name: "Crude Oil",
    category: "Crude",
    tagline: "Selective crude opportunities",
    description:
      "LusFam Energy considers selective crude oil opportunities subject to mandate, commercial feasibility, and counterparty qualification. All crude engagements require verified mandate holder involvement.",
    specs: [
      { label: "Type", value: "Crude Oil" },
      { label: "Condition", value: "Subject to mandate" },
      { label: "Requirement", value: "Verified mandate holder" },
    ],
  },
];

const categories = ["All", "Diesel", "Jet Fuel", "Fuel Oil", "LPG", "LNG", "Crude"];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = allProducts.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#0B1F3A] text-white pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="absolute inset-0 z-0">
            <img src={heroRefinery} alt="Petroleum refinery" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/95 via-[#0B1F3A]/70 to-[#0B1F3A]/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-transparent to-transparent" />
          </div>
          <svg className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none z-[1]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="products-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#products-dots)" />
          </svg>
          <div className="container-site relative z-10">
            <div className="max-w-2xl">
              <motion.p className="text-xs font-semibold uppercase tracking-widest text-[#C7A24A] mb-4"
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, ease }}>
                Products of Interest
              </motion.p>
              <motion.h1 className="text-white mb-6"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5, ease }}>
                Energy Products
              </motion.h1>
              <motion.p className="text-white/70 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.4, ease }}>
                LusFam Energy supports commercial opportunities involving these products
                through its network of suppliers, refiners, mandates, and strategic partners.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Filter + products */}
        <section className="py-16 bg-white">
          <div className="container-site">
            {/* Category filter */}
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? "bg-[#0B1F3A] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((product, i) => {
                const Icon = product.icon;
                return (
                  <motion.div
                    key={product.name}
                    className="group rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-[#C7A24A]/30 transition-all duration-300"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease, duration: 0.35, delay: i * 0.06 }}
                  >
                    <div className="bg-[#0B1F3A] p-6">
                      <div className="h-12 w-12 rounded-xl bg-[#C7A24A]/20 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-[#C7A24A]" />
                      </div>
                      <h3 className="text-white font-bold text-lg mb-1">{product.name}</h3>
                      <p className="text-white/50 text-sm">{product.tagline}</p>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 text-sm leading-relaxed mb-5">{product.description}</p>
                      <div className="space-y-2 mb-6">
                        {product.specs.map((spec) => (
                          <div key={spec.label} className="flex items-center justify-between text-xs">
                            <span className="text-gray-400">{spec.label}</span>
                            <span className="font-semibold text-[#0B1F3A]">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                      <a
                        href={WA_PRODUCT(product.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-semibold text-[#C7A24A] hover:text-[#0B1F3A] transition-colors"
                      >
                        <MessageCircle className="h-4 w-4" />
                        Enquire via WhatsApp
                        <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-10 bg-gray-50 border-t border-gray-100">
          <div className="container-site">
            <p className="text-xs text-gray-400 max-w-2xl mx-auto text-center leading-relaxed">
              LusFam Energy Trading acts as a transaction facilitator and does not hold title to any petroleum product.
              All engagements are subject to mandate holder involvement, counterparty qualification, and commercial feasibility.
              Product availability and delivery structures are subject to confirmation at the time of enquiry.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFAB />
    </div>
  );
};

export default Products;
