import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const regions = [
  { name: "Zimbabwe",   detail: "Harare · Beira Corridor supply route",     coords: [-19.0, 29.8] as [number, number] },
  { name: "Zambia",     detail: "Lusaka · Copperbelt industrial supply",     coords: [-13.1, 27.8] as [number, number] },
  { name: "Botswana",   detail: "Gaborone · Trans-Kalahari corridor",        coords: [-22.3, 24.7] as [number, number] },
  { name: "Malawi",     detail: "Lilongwe · Nacala & Beira corridors",       coords: [-13.2, 34.3] as [number, number] },
  { name: "Mozambique", detail: "Maputo · Beira Port — gateway hub",         coords: [-18.7, 35.5] as [number, number] },
];

const goldIcon = L.divIcon({
  className: "",
  html: `<div style="width:14px;height:14px;border-radius:50%;background:#D4A017;border:2px solid rgba(255,255,255,0.8);box-shadow:0 0 14px #D4A01799,0 0 4px #D4A017;cursor:pointer;"></div>`,
  iconSize: [14, 14],
  iconAnchor: [7, 7],
  popupAnchor: [0, -10],
});

const goldIconHovered = L.divIcon({
  className: "",
  html: `<div style="width:18px;height:18px;border-radius:50%;background:#D4A017;border:2px solid #fff;box-shadow:0 0 22px #D4A017CC,0 0 6px #D4A017;cursor:pointer;"></div>`,
  iconSize: [18, 18],
  iconAnchor: [9, 9],
  popupAnchor: [0, -12],
});

const MapPreviewSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="section-spacing section-deep">
      <div className="container-site">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ease: [0.32, 0.72, 0, 1], duration: 0.4 }}
        >
          <div className="ui-label mb-3">Coverage</div>
          <h2 className="text-white">Markets & Operations</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Real Leaflet map */}
          <motion.div
            className="rounded-xl overflow-hidden border border-white/10 h-[400px] lg:h-[480px] w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ease: [0.32, 0.72, 0, 1], duration: 0.5 }}
          >
            <MapContainer
              center={[-17, 29]}
              zoom={4}
              scrollWheelZoom={false}
              zoomControl={true}
              attributionControl={false}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              />
              {regions.map((region, i) => (
                <Marker
                  key={region.name}
                  position={region.coords}
                  icon={hovered === i ? goldIconHovered : goldIcon}
                  eventHandlers={{
                    mouseover: () => setHovered(i),
                    mouseout: () => setHovered(null),
                  }}
                >
                  <Popup>
                    <div style={{ padding: "2px 4px" }}>
                      <div style={{ fontWeight: 700, color: "#D4A017", marginBottom: 2 }}>{region.name}</div>
                      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.65)" }}>{region.detail}</div>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </motion.div>

          {/* Country cards — unchanged */}
          <div className="space-y-4">
            {regions.map((region, i) => (
              <motion.div
                key={region.name}
                className={`flex items-center gap-4 p-4 glass-card rounded-xl transition-all duration-200 group cursor-pointer ${
                  hovered === i ? "!border-[#D4A017]/50" : ""
                }`}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ ease: [0.32, 0.72, 0, 1], duration: 0.4, delay: i * 0.05 }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                whileHover={{ x: 4 }}
              >
                <div className={`h-10 w-10 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200 ${
                  hovered === i ? "bg-[#D4A017]/25" : "bg-[#D4A017]/15"
                }`}>
                  <MapPin className="h-5 w-5 text-[#D4A017]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-white">{region.name}</div>
                  <div className="text-sm text-white/55">{region.detail}</div>
                </div>
                <ArrowRight className={`h-4 w-4 transition-all shrink-0 ${
                  hovered === i ? "text-[#D4A017] translate-x-1" : "text-white/30"
                }`} />
              </motion.div>
            ))}

            <Button
              className="w-full mt-4 bg-[#0B3D6D] hover:bg-[#0a4f8f] text-white border border-[#0B3D6D] hover:border-[#0a4f8f]"
              asChild
            >
              <Link to="/markets">
                Explore All Markets
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapPreviewSection;
