import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Ship, Building2, Route } from "lucide-react";
import { Button } from "@/components/ui/button";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import RFQModal from "@/components/RFQModal";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import heroIndustry from "@/assets/hero-industry.jpg";

const ease: [number, number, number, number] = [0.32, 0.72, 0, 1];

const markets = [
  {
    country: "Zimbabwe",
    cities: "Harare, Bulawayo, Mutare",
    highlights: ["Beira Corridor access", "Fuel import terminal", "Strategic depot network"],
    ports: "Via Beira & Maputo ports",
    x: 62, y: 58,
  },
  {
    country: "Zambia",
    cities: "Lusaka, Kitwe, Ndola",
    highlights: ["Copperbelt supply chain", "Dar-es-Salaam corridor", "Cross-border logistics"],
    ports: "Via Dar-es-Salaam & Beira",
    x: 55, y: 42,
  },
  {
    country: "Botswana",
    cities: "Gaborone, Francistown",
    highlights: ["Trans-Kalahari corridor", "Mining sector supply", "Regional distribution"],
    ports: "Via Durban & Maputo",
    x: 48, y: 64,
  },
  {
    country: "Malawi",
    cities: "Lilongwe, Blantyre",
    highlights: ["Nacala Corridor", "Agricultural sector supply", "Lake Malawi distribution"],
    ports: "Via Nacala & Beira",
    x: 70, y: 44,
  },
  {
    country: "Mozambique",
    cities: "Maputo, Beira, Nacala",
    highlights: ["Port operations hub", "Coastal distribution", "Pipeline infrastructure"],
    ports: "Direct port access",
    x: 72, y: 60,
  },
];

const MarketsPage = () => {
  const [rfqOpen, setRfqOpen] = useState(false);
  const [activeMarket, setActiveMarket] = useState<string | null>(null);
  const [overlay, setOverlay] = useState<"markets" | "logistics">("markets");

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader onRequestQuote={() => setRfqOpen(true)} />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-secondary text-secondary-foreground py-16 lg:py-24">
          {/* Background photo */}
          <div className="absolute inset-0 z-0">
            <img
              src={heroIndustry}
              alt="Petroleum terminal facility"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-secondary/80" />
          </div>
          {/* Dot-grid SVG background */}
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none z-[1]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="markets-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#markets-dots)" />
          </svg>
          {/* Glow accents */}
          <div className="absolute -right-32 top-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none z-[1]" />
          <div className="absolute left-1/2 -bottom-24 w-64 h-64 rounded-full bg-primary/5 blur-2xl pointer-events-none z-[1]" />

          <div className="container-site relative z-10">
            <div className="max-w-3xl">
              <motion.div
                className="ui-label text-secondary-foreground/40 mb-4"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease }}
              >
                Coverage
              </motion.div>
              <motion.h1
                className="text-secondary-foreground mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5, ease }}
              >
                Markets & Operations
              </motion.h1>
              <motion.p
                className="text-secondary-foreground/65 text-lg leading-relaxed mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4, ease }}
              >
                Operating across five Southern African markets with established logistics corridors and port access.
              </motion.p>

              {/* Country chips */}
              <motion.div
                className="flex flex-wrap gap-2"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4, ease }}
              >
                {markets.map((m, i) => (
                  <motion.button
                    key={m.country}
                    onMouseEnter={() => setActiveMarket(m.country)}
                    onMouseLeave={() => setActiveMarket(null)}
                    className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                      activeMarket === m.country
                        ? "bg-primary text-primary-foreground border-primary shadow-[0_0_12px_hsl(var(--primary)/0.4)]"
                        : "bg-white/8 text-secondary-foreground/75 border-white/15 hover:bg-white/14 hover:border-white/25"
                    }`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.35 + i * 0.06, duration: 0.3, ease }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <MapPin className="h-3 w-3" />
                    {m.country}
                  </motion.button>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map + list content */}
        <section className="section-spacing">
          <div className="container-site">
            {/* Overlay toggle */}
            <div className="flex gap-2 mb-8">
              <button
                onClick={() => setOverlay("markets")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  overlay === "markets" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}
              >
                <Building2 className="h-4 w-4" />
                Market Access
              </button>
              <button
                onClick={() => setOverlay("logistics")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  overlay === "logistics" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}
              >
                <Route className="h-4 w-4" />
                Logistics
              </button>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Map */}
              <motion.div
                className="relative bg-secondary/5 rounded-2xl aspect-square max-w-lg w-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease, duration: 0.5 }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full p-6">
                  <path
                    d="M35 20 L45 18 L55 20 L65 22 L75 28 L80 38 L78 48 L75 55 L72 62 L68 68 L62 72 L55 75 L48 78 L42 76 L38 72 L35 65 L32 58 L30 50 L28 42 L30 34 L32 28 Z"
                    fill="hsl(210 79% 24% / 0.06)"
                    stroke="hsl(210 79% 24% / 0.15)"
                    strokeWidth="0.5"
                  />
                  {overlay === "logistics" && (
                    <>
                      <line x1="72" y1="60" x2="62" y2="58" stroke="hsl(45 78% 46% / 0.4)" strokeWidth="0.8" strokeDasharray="2" />
                      <line x1="72" y1="60" x2="55" y2="42" stroke="hsl(45 78% 46% / 0.4)" strokeWidth="0.8" strokeDasharray="2" />
                      <line x1="72" y1="60" x2="70" y2="44" stroke="hsl(45 78% 46% / 0.4)" strokeWidth="0.8" strokeDasharray="2" />
                      <line x1="62" y1="58" x2="48" y2="64" stroke="hsl(45 78% 46% / 0.4)" strokeWidth="0.8" strokeDasharray="2" />
                    </>
                  )}
                  {markets.map((m) => (
                    <g
                      key={m.country}
                      className="cursor-pointer"
                      onMouseEnter={() => setActiveMarket(m.country)}
                      onMouseLeave={() => setActiveMarket(null)}
                    >
                      <circle
                        cx={m.x} cy={m.y} r="5"
                        fill={activeMarket === m.country ? "hsl(45 78% 46% / 0.3)" : "hsl(45 78% 46% / 0.15)"}
                        className="transition-all duration-200"
                      />
                      <circle
                        cx={m.x} cy={m.y} r="2.5"
                        fill="hsl(45 78% 46%)"
                        className={`transition-transform duration-200 ${activeMarket === m.country ? "scale-125" : ""}`}
                        style={{ transformOrigin: `${m.x}px ${m.y}px` }}
                      />
                      <text
                        x={m.x}
                        y={m.y - 7}
                        textAnchor="middle"
                        fill="hsl(215 30% 18%)"
                        fontSize="3"
                        fontWeight="600"
                        fontFamily="Manrope, sans-serif"
                      >
                        {m.country}
                      </text>
                    </g>
                  ))}
                </svg>
              </motion.div>

              {/* Market list */}
              <div className="space-y-4">
                {markets.map((market, i) => (
                  <motion.div
                    key={market.country}
                    className={`p-5 rounded-xl shadow-card transition-all duration-200 cursor-pointer ${
                      activeMarket === market.country ? "bg-muted shadow-card-hover" : "bg-card"
                    }`}
                    onMouseEnter={() => setActiveMarket(market.country)}
                    onMouseLeave={() => setActiveMarket(null)}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ ease, duration: 0.4, delay: i * 0.05 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold">{market.country}</h3>
                        <p className="text-sm text-muted-foreground">{market.cities}</p>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-2">
                          <Ship className="h-3.5 w-3.5" />
                          {market.ports}
                        </div>
                        <ul className="mt-3 space-y-1">
                          {market.highlights.map((h) => (
                            <li key={h} className="text-xs text-muted-foreground flex items-center gap-1.5">
                              <span className="h-1 w-1 rounded-full bg-primary shrink-0" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0 mt-1" />
                    </div>
                  </motion.div>
                ))}

                <Button onClick={() => setRfqOpen(true)} className="w-full mt-4">
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
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

export default MarketsPage;
