import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const regions = [
  { name: "Zimbabwe", detail: "Harare, Beira Corridor", x: 62, y: 58 },
  { name: "Zambia", detail: "Lusaka, Copperbelt", x: 55, y: 42 },
  { name: "Botswana", detail: "Gaborone, Francistown", x: 48, y: 64 },
  { name: "Malawi", detail: "Lilongwe, Blantyre", x: 70, y: 44 },
  { name: "Mozambique", detail: "Maputo, Beira Port", x: 72, y: 60 },
];

const routes = [
  [0, 1], [0, 4], [1, 3], [0, 2],
];

const MapPreviewSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);

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
          <div className="ui-label text-primary mb-3">Coverage</div>
          <h2>Markets & Operations</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative bg-secondary/5 rounded-2xl aspect-square max-w-md mx-auto lg:mx-0 w-full overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ease: [0.32, 0.72, 0, 1], duration: 0.5 }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full p-8">
              <path
                d="M35 20 L45 18 L55 20 L65 22 L75 28 L80 38 L78 48 L75 55 L72 62 L68 68 L62 72 L55 75 L48 78 L42 76 L38 72 L35 65 L32 58 L30 50 L28 42 L30 34 L32 28 Z"
                fill="hsl(210 79% 24% / 0.08)"
                stroke="hsl(210 79% 24% / 0.2)"
                strokeWidth="0.5"
              />

              {/* Route lines */}
              {routes.map(([a, b], i) => (
                <motion.line
                  key={`route-${i}`}
                  x1={regions[a].x}
                  y1={regions[a].y}
                  x2={regions[b].x}
                  y2={regions[b].y}
                  stroke="hsl(45 78% 38% / 0.25)"
                  strokeWidth="0.4"
                  strokeDasharray="2 2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.15, duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                />
              ))}

              {/* Pins */}
              {regions.map((r, i) => (
                <g
                  key={r.name}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className="cursor-pointer"
                >
                  {/* Pulse ring */}
                  <motion.circle
                    cx={r.x}
                    cy={r.y}
                    r="5"
                    fill="none"
                    stroke="hsl(45 78% 38%)"
                    strokeWidth="0.4"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={hovered === i ? {
                      scale: [1, 1.8, 1],
                      opacity: [0.6, 0, 0.6],
                    } : { scale: 1, opacity: 0.2 }}
                    transition={hovered === i ? {
                      duration: 1.5,
                      repeat: Infinity,
                    } : { duration: 0.3 }}
                  />
                  <motion.circle
                    cx={r.x}
                    cy={r.y}
                    r={hovered === i ? 3.5 : 2.5}
                    fill="hsl(45 78% 38%)"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                  />
                  {/* Label on hover */}
                  {hovered === i && (
                    <motion.text
                      x={r.x}
                      y={r.y - 6}
                      textAnchor="middle"
                      fill="hsl(215 30% 18%)"
                      fontSize="3"
                      fontWeight="600"
                      initial={{ opacity: 0, y: 2 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {r.name}
                    </motion.text>
                  )}
                </g>
              ))}
            </svg>
          </motion.div>

          <div className="space-y-4">
            {regions.map((region, i) => (
              <motion.div
                key={region.name}
                className={`flex items-center gap-4 p-4 bg-card rounded-xl shadow-card transition-all duration-200 group cursor-pointer ${
                  hovered === i ? "shadow-card-hover ring-1 ring-primary/30" : "hover:shadow-card-hover"
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
                  hovered === i ? "bg-primary/20" : "bg-primary/10"
                }`}>
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-foreground">{region.name}</div>
                  <div className="text-sm text-muted-foreground">{region.detail}</div>
                </div>
                <ArrowRight className={`h-4 w-4 transition-all shrink-0 ${
                  hovered === i ? "text-primary translate-x-1" : "text-muted-foreground group-hover:text-foreground"
                }`} />
              </motion.div>
            ))}

            <Button variant="secondary" className="w-full mt-4" asChild>
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
