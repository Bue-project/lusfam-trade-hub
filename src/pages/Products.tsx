import { useState } from "react";
import { motion } from "framer-motion";
import { Fuel, Flame, Plane, Droplets, Download, ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import RFQModal from "@/components/RFQModal";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const ease: [number, number, number, number] = [0.32, 0.72, 0, 1];

const categories = ["All", "Diesel", "Petrol", "Jet Fuel", "LPG", "Lubricants"];

const allProducts = [
  { icon: Fuel, name: "Diesel 50ppm (AGO)", category: "Diesel", spec: "EN 590 · Ultra Low Sulphur", grade: "50ppm Sulphur", origin: "Multiple sources", moq: "500 MT" },
  { icon: Fuel, name: "Diesel 500ppm", category: "Diesel", spec: "EN 590 · Low Sulphur", grade: "500ppm Sulphur", origin: "Regional refineries", moq: "500 MT" },
  { icon: Flame, name: "Petrol RON 93", category: "Petrol", spec: "Unleaded · Regular", grade: "RON 93", origin: "Multiple sources", moq: "300 MT" },
  { icon: Flame, name: "Petrol RON 95", category: "Petrol", spec: "Unleaded · Premium", grade: "RON 95", origin: "Multiple sources", moq: "300 MT" },
  { icon: Plane, name: "Jet A-1", category: "Jet Fuel", spec: "ASTM D1655 · Aviation", grade: "Jet A-1", origin: "Certified suppliers", moq: "1000 MT" },
  { icon: Droplets, name: "LPG Commercial", category: "LPG", spec: "Propane/Butane mix", grade: "Commercial Grade", origin: "Regional", moq: "100 MT" },
  { icon: Droplets, name: "LPG Industrial", category: "LPG", spec: "High purity propane", grade: "Industrial Grade", origin: "Regional", moq: "200 MT" },
  { icon: Fuel, name: "Base Oils", category: "Lubricants", spec: "Group I & II", grade: "SN 150 / SN 500", origin: "Multiple sources", moq: "100 MT" },
  { icon: Fuel, name: "Bitumen", category: "Lubricants", spec: "60/70 & 80/100 Pen", grade: "Road Grade", origin: "Regional", moq: "500 MT" },
];

const ProductsPage = () => {
  const [rfqOpen, setRfqOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = allProducts.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader onRequestQuote={() => setRfqOpen(true)} />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-secondary text-secondary-foreground py-16 lg:py-24">
          {/* Dot-grid SVG background */}
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="products-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#products-dots)" />
          </svg>
          {/* Diagonal accent line */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -left-24 -bottom-24 w-64 h-64 rounded-full bg-primary/5 blur-2xl" />
          </div>

          <div className="container-site relative">
            <div className="max-w-3xl">
              <motion.div
                className="ui-label text-secondary-foreground/40 mb-4"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease }}
              >
                Products & Services
              </motion.div>
              <motion.h1
                className="text-secondary-foreground mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5, ease }}
              >
                Energy Products
              </motion.h1>
              <motion.p
                className="text-secondary-foreground/65 text-lg leading-relaxed mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4, ease }}
              >
                Browse our full range of petroleum products available for bulk procurement across Southern Africa.
              </motion.p>

              {/* Category pills — clickable filters inline in hero */}
              <motion.div
                className="flex flex-wrap gap-2"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4, ease }}
              >
                {categories.filter(c => c !== "All").map((cat, i) => (
                  <motion.button
                    key={cat}
                    onClick={() => setActiveCategory(activeCategory === cat ? "All" : cat)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                      activeCategory === cat
                        ? "bg-primary text-primary-foreground border-primary shadow-[0_0_12px_hsl(var(--primary)/0.4)]"
                        : "bg-white/8 text-secondary-foreground/75 border-white/15 hover:bg-white/14 hover:border-white/25"
                    }`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.35 + i * 0.05, duration: 0.3, ease }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    {cat}
                  </motion.button>
                ))}
                {activeCategory !== "All" && (
                  <motion.button
                    onClick={() => setActiveCategory("All")}
                    className="px-4 py-1.5 rounded-full text-sm font-medium border border-white/10 text-secondary-foreground/45 hover:text-secondary-foreground/70 transition-colors"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    Clear
                  </motion.button>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Product content */}
        <section className="section-spacing">
          <div className="container-site">
            <div className="lg:grid lg:grid-cols-[240px_1fr_280px] gap-8">
              {/* Left filter nav */}
              <aside className="hidden lg:block">
                <div className="sticky top-24 space-y-1">
                  <div className="ui-label mb-3">Categories</div>
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        activeCategory === cat
                          ? "bg-primary/10 text-primary font-semibold"
                          : "text-muted-foreground hover:bg-muted"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </aside>

              {/* Mobile filter + search */}
              <div className="lg:hidden mb-6 space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-muted rounded-lg pl-10 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background outline-none"
                  />
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`whitespace-nowrap px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                        activeCategory === cat
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Product grid */}
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map((product, i) => {
                  const Icon = product.icon;
                  return (
                    <motion.div
                      key={product.name}
                      className="bg-card rounded-xl p-5 shadow-card hover:shadow-card-hover transition-shadow duration-200 flex flex-col"
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ ease, duration: 0.4, delay: i * 0.03 }}
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold leading-tight">{product.name}</h3>
                          <p className="text-xs text-muted-foreground mt-0.5">{product.spec}</p>
                        </div>
                      </div>
                      <div className="space-y-1.5 text-xs text-muted-foreground mb-4 flex-1">
                        <div><span className="font-medium text-foreground">Grade:</span> {product.grade}</div>
                        <div><span className="font-medium text-foreground">MOQ:</span> {product.moq}</div>
                        <div><span className="font-medium text-foreground">Origin:</span> {product.origin}</div>
                      </div>
                      <div className="flex items-center gap-3 pt-3 border-t border-border">
                        <button className="flex items-center gap-1 text-xs font-medium text-primary hover:brightness-110 transition-all">
                          <Download className="h-3.5 w-3.5" />
                          Spec Sheet
                        </button>
                        <button
                          onClick={() => setRfqOpen(true)}
                          className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors ml-auto"
                        >
                          Request Quote
                          <ArrowRight className="h-3 w-3" />
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Right sticky RFQ panel */}
              <aside className="hidden lg:block">
                <div className="sticky top-24 bg-muted rounded-xl p-5 space-y-4">
                  <h4 className="font-semibold">Quick RFQ</h4>
                  <p className="text-sm text-muted-foreground">
                    Need a quote? Start your request directly from here.
                  </p>
                  <Button onClick={() => setRfqOpen(true)} className="w-full">
                    Request a Quote
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <div className="text-xs text-muted-foreground text-center">
                    Average response time: 48 hours
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFAB />
      <RFQModal open={rfqOpen} onClose={() => setRfqOpen(false)} />
    </div>
  );
};

export default ProductsPage;
