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

const MapPreviewSection = () => {
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
          {/* Map visualization */}
          <motion.div
            className="relative bg-secondary/5 rounded-2xl aspect-square max-w-md mx-auto lg:mx-0 w-full overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ease: [0.32, 0.72, 0, 1], duration: 0.5 }}
          >
            {/* Simplified Southern Africa shape */}
            <svg viewBox="0 0 100 100" className="w-full h-full p-8">
              {/* Africa outline simplified */}
              <path
                d="M35 20 L45 18 L55 20 L65 22 L75 28 L80 38 L78 48 L75 55 L72 62 L68 68 L62 72 L55 75 L48 78 L42 76 L38 72 L35 65 L32 58 L30 50 L28 42 L30 34 L32 28 Z"
                fill="hsl(210 79% 24% / 0.08)"
                stroke="hsl(210 79% 24% / 0.2)"
                strokeWidth="0.5"
              />
              {/* Pins */}
              {regions.map((r, i) => (
                <g key={r.name}>
                  <motion.circle
                    cx={r.x}
                    cy={r.y}
                    r="2.5"
                    fill="hsl(45 78% 46%)"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                  />
                  <motion.circle
                    cx={r.x}
                    cy={r.y}
                    r="5"
                    fill="hsl(45 78% 46% / 0.2)"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                  />
                </g>
              ))}
            </svg>
          </motion.div>

          {/* Region list */}
          <div className="space-y-4">
            {regions.map((region, i) => (
              <motion.div
                key={region.name}
                className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-card hover:shadow-card-hover transition-shadow duration-200 group cursor-pointer"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ ease: [0.32, 0.72, 0, 1], duration: 0.4, delay: i * 0.05 }}
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-foreground">{region.name}</div>
                  <div className="text-sm text-muted-foreground">{region.detail}</div>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" />
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
