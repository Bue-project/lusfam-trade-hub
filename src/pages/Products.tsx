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
        <section className="section-spacing">
          <div className="container-site">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease, duration: 0.4 }}
            >
              <div className="ui-label text-primary mb-3">Products & Services</div>
              <h1>Energy Products</h1>
              <p className="text-muted-foreground text-lg mt-3">
                Browse our full range of petroleum products available for bulk procurement across Southern Africa.
              </p>
            </motion.div>

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
