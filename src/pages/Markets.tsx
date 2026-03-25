import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Ship, Building2, Route } from "lucide-react";
import { Button } from "@/components/ui/button";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import RFQModal from "@/components/RFQModal";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import heroIndustry from "@/assets/hero-industry.jpg";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import L from "leaflet";

const ease: [number, number, number, number] = [0.32, 0.72, 0, 1];

const markets = [
  {
    country: "Zimbabwe",
    coords: [-19.0, 29.8] as [number, number],
    cities: "Harare, Bulawayo, Mutare",
    highlights: ["Beira Corridor access", "Fuel import terminal", "Strategic depot network"],
    ports: "Via Beira & Maputo ports",
    x: 62, y: 58,
  },
  {
    country: "Zambia",
    coords: [-13.1, 27.8] as [number, number],
    cities: "Lusaka, Kitwe, Ndola",
    highlights: ["Copperbelt supply chain", "Dar-es-Salaam corridor", "Cross-border logistics"],
    ports: "Via Dar-es-Salaam & Beira",
    x: 55, y: 42,
  },
  {
    country: "Botswana",
    coords: [-22.3, 24.7] as [number, number],
    cities: "Gaborone, Francistown",
    highlights: ["Trans-Kalahari corridor", "Mining sector supply", "Regional distribution"],
    ports: "Via Durban & Maputo",
    x: 48, y: 64,
  },
  {
    country: "Malawi",
    coords: [-13.2, 34.3] as [number, number],
    cities: "Lilongwe, Blantyre",
    highlights: ["Nacala Corridor", "Agricultural sector supply", "Lake Malawi distribution"],
    ports: "Via Nacala & Beira",
    x: 70, y: 44,
  },
  {
    country: "Mozambique",
    coords: [-18.7, 35.5] as [number, number],
    cities: "Maputo, Beira, Nacala",
    highlights: ["Port operations hub", "Coastal distribution", "Pipeline infrastructure"],
    ports: "Direct port access",
    x: 72, y: 60,
  },
];


const goldIcon = L.divIcon({
  className: "",
  html: '<div style="width:14px;height:14px;border-radius:50%;background:#D4A017;border:2px solid rgba(255,255,255,0.8);box-shadow:0 0 14px #D4A01799;"></div>',
  iconSize: [14, 14] as [number,number],
  iconAnchor: [7, 7] as [number,number],
  popupAnchor: [0, -10] as [number,number],
});
const goldIconHovered = L.divIcon({
  className: "",
  html: '<div style="width:18px;height:18px;border-radius:50%;background:#D4A017;border:2px solid #fff;box-shadow:0 0 22px #D4A017CC;"></div>',
  iconSize: [18, 18] as [number,number],
  iconAnchor: [9, 9] as [number,number],
  popupAnchor: [0, -12] as [number,number],
});
const logisticsRoutes: [number, number][][] = [
  [[-18.7, 35.5], [-19.0, 29.8]],
  [[-18.7, 35.5], [-13.1, 27.8]],
  [[-18.7, 35.5], [-13.2, 34.3]],
  [[-19.0, 29.8], [-22.3, 24.7]],
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
        <section className="relative overflow-hidden bg-[#060D18] text-white pt-32 pb-20 lg:pt-40 lg:pb-28">
          {/* Background photo */}
          <div className="absolute inset-0 z-0">
            <img
              src={heroIndustry}
              alt="Petroleum terminal facility"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#060D18]/95 via-[#060D18]/70 to-[#060D18]/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060D18] via-transparent to-transparent" />
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
                className="ui-label text-[#D4A017] mb-4"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease }}
              >
                Coverage
              </motion.div>
              <motion.h1
                className="text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5, ease }}
              >
                Markets & Operations
              </motion.h1>
              <motion.p
                className="text-white/70 text-lg leading-relaxed mb-8"
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
                        : "bg-white/8 text-white/75 border-white/15 hover:bg-white/14 hover:border-white/25"
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
        <section className="section-deep py-24">
          <div className="container-site">
            {/* Overlay toggle */}
            <div className="flex gap-2 mb-8">
              <button
                onClick={() => setOverlay("markets")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  overlay === "markets" ? "bg-[#D4A017] text-[#060D18]" : "bg-white/10 text-white/70 hover:text-white"
                }`}
              >
                <Building2 className="h-4 w-4" />
                Market Access
              </button>
              <button
                onClick={() => setOverlay("logistics")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  overlay === "logistics" ? "bg-[#D4A017] text-[#060D18]" : "bg-white/10 text-white/70 hover:text-white"
                }`}
              >
                <Route className="h-4 w-4" />
                Logistics
              </button>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Real Leaflet Map */}
              <motion.div
                className="rounded-xl overflow-hidden border border-white/10 h-[500px] w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease, duration: 0.5 }}
              >
                <MapContainer
                  center={[-17, 29] as [number, number]}
                  zoom={4}
                  scrollWheelZoom={false}
                  zoomControl={true}
                  attributionControl={false}
                  style={{ height: "100%", width: "100%" }}
                >
                  <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
                  {overlay === "logistics" && logisticsRoutes.map((route, i) => (
                    <Polyline
                      key={i}
                      positions={route}
                      pathOptions={{ color: "#D4A017", weight: 2, opacity: 0.6, dashArray: "6 4" }}
                    />
                  ))}
                  {markets.map((m) => (
                    <Marker
                      key={m.country}
                      position={m.coords}
                      icon={activeMarket === m.country ? goldIconHovered : goldIcon}
                      eventHandlers={{
                        mouseover: () => setActiveMarket(m.country),
                        mouseout: () => setActiveMarket(null),
                      }}
                    >
                      <Popup>
                        <div style={{ padding: "2px 4px" }}>
                          <div style={{ fontWeight: 700, color: "#D4A017", marginBottom: 2 }}>{m.country}</div>
                          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.65)" }}>{m.cities}</div>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
              </motion.div>

              {/* Market list */}}
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
                      <div className="h-10 w-10 rounded-lg bg-[#D4A017]/15 flex items-center justify-center shrink-0">
                        <MapPin className="h-5 w-5 text-[#D4A017]" />
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

                <Button onClick={() => setRfqOpen(true)} className="w-full mt-4 bg-[#D4A017] hover:bg-[#C4920A] text-[#060D18] font-semibold">
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
