import { useState } from "react";
import { motion } from "framer-motion";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import RFQModal from "@/components/RFQModal";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import { Users, Target, Shield, Award, Globe, Package, Headphones } from "lucide-react";
import heroIndustry from "@/assets/hero-industry.jpg";
import operationsStrip from "@/assets/operations-strip.jpg";
import directorAbsalom from "@/assets/director-absalom.png";
import directorAgnes from "@/assets/director-agnes.png";

const ease: [number, number, number, number] = [0.32, 0.72, 0, 1];

const values = [
  { icon: Target, title: "Mission-Driven", description: "Delivering reliable energy solutions across Southern Africa with integrity and precision." },
  { icon: Shield, title: "Compliance First", description: "Adhering to the highest regulatory and safety standards in every transaction." },
  { icon: Award, title: "Excellence", description: "Consistently exceeding expectations in product quality and service delivery." },
  { icon: Users, title: "Partnership", description: "Building long-term relationships with clients, suppliers, and communities." },
];

const leadership = [
  {
    name: "Absalom Lusuwi",
    role: "Director",
    bio: "Absalom leads LusFam Energy Trading with a focus on building international partnerships and supporting petroleum supply initiatives into emerging Southern African markets. His strategic vision drives the company's growth and expanding partner network.",
    photo: directorAbsalom,
  },
  {
    name: "Agnes Lusuwi",
    role: "Director",
    bio: "Agnes manages the administrative operations of LusFam Energy Trading, ensuring that all processes run smoothly. Her attention to operational detail supports the company's commitment to professional and reliable service delivery.",
    photo: directorAgnes,
  },
];

const heroBadges = [
  { icon: Globe, label: "5 Active Markets", desc: "Zimbabwe, Zambia, Botswana, Malawi & Mozambique" },
  { icon: Package, label: "Bulk Petroleum", desc: "Diesel, Petrol, Jet A-1, LPG & Lubricants" },
  { icon: Shield, label: "Fully Compliant", desc: "Regulated & licensed across all operating markets" },
  { icon: Headphones, label: "Trade Desk", desc: "Dedicated support for all procurement enquiries" },
];

const About = () => {
  const [rfqOpen, setRfqOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader onRequestQuote={() => setRfqOpen(true)} />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-secondary text-secondary-foreground py-20 lg:py-28">
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
              <pattern id="about-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-dots)" />
          </svg>
          {/* Radial glow on left */}
          <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl pointer-events-none z-[1]" />

          <div className="container-site relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: text */}
              <div>
                <motion.p
                  className="ui-label text-secondary-foreground/40 mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease }}
                >
                  About Us
                </motion.p>
                <motion.h1
                  className="text-secondary-foreground mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5, ease }}
                >
                  Powering Southern Africa's Energy Future
                </motion.h1>
                <motion.p
                  className="text-secondary-foreground/65 text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4, ease }}
                >
                  LusFam Energy Trading — a division of LusFam Trust Investments (Pvt) Ltd — is a trusted procurement and delivery partner for bulk petroleum products across the region.
                </motion.p>
              </div>

              {/* Right: badge cluster */}
              <motion.div
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25, duration: 0.55, ease }}
              >
                {heroBadges.map((badge, i) => {
                  const Icon = badge.icon;
                  return (
                    <motion.div
                      key={badge.label}
                      className="bg-white/8 border border-white/12 rounded-2xl p-5 backdrop-blur-sm"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.07, duration: 0.4, ease }}
                      whileHover={{ backgroundColor: "rgba(255,255,255,0.12)", scale: 1.02 }}
                    >
                      <div className="h-9 w-9 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <p className="text-sm font-semibold text-secondary-foreground mb-1">{badge.label}</p>
                      <p className="text-xs text-secondary-foreground/55 leading-relaxed">{badge.desc}</p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 lg:py-24">
          <div className="container-site">
            <p className="ui-label text-muted-foreground mb-2">Our Values</p>
            <h2 className="text-3xl font-bold text-foreground mb-12">What Drives Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((v) => (
                <div key={v.title} className="space-y-3">
                  <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <v.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Operations visual strip */}
        <div className="relative h-56 lg:h-72 overflow-hidden">
          <motion.img
            src={operationsStrip}
            alt="Energy infrastructure operations aerial view"
            className="w-full h-full object-cover object-center"
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/60 via-secondary/30 to-secondary/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.p
              className="text-white/90 text-xl lg:text-2xl font-semibold text-center px-6 drop-shadow-lg"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
            >
              Infrastructure built for scale across Southern Africa
            </motion.p>
          </div>
        </div>

        {/* Leadership */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container-site">
            <p className="ui-label text-muted-foreground mb-2">Leadership</p>
            <h2 className="text-3xl font-bold text-foreground mb-12">Meet the Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {leadership.map((person) => (
                <motion.div
                  key={person.name}
                  className="flex flex-col sm:flex-row gap-6"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, ease }}
                >
                  <div className="h-32 w-32 shrink-0 rounded-2xl overflow-hidden bg-primary/10">
                    <img
                      src={person.photo}
                      alt={`${person.name}, ${person.role}`}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{person.name}</h3>
                    <p className="text-sm font-medium text-accent">{person.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{person.bio}</p>
                  </div>
                </motion.div>
              ))}
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

export default About;
