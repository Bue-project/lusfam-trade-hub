import { motion } from "framer-motion";
import { Globe, ArrowRight, MessageCircle } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import { WA_QUOTE } from "@/lib/whatsapp";
import heroIndustry from "@/assets/hero-industry.jpg";

const ease: [number, number, number, number] = [0.32, 0.72, 0, 1];

const regions = [
  {
    name: "Africa",
    description:
      "Supporting petroleum transaction opportunities across the African continent, working with buyers, suppliers, and market participants in established and emerging energy markets throughout Africa.",
    highlights: [
      "Pan-African buyer and supplier engagement",
      "East, West, Central, and Southern Africa",
      "Commercial procurement facilitation",
    ],
    color: "#C7A24A",
  },
  {
    name: "Middle East",
    description:
      "Engaging with suppliers, refiners, and mandates in Middle Eastern energy markets, where established production and export infrastructure creates strong facilitation opportunities.",
    highlights: [
      "Supplier and refinery relationships",
      "Mandate and intermediary engagement",
      "Strategic supply partnership development",
    ],
    color: "#C7A24A",
  },
  {
    name: "Asia",
    description:
      "Supporting opportunities driven by industrial growth and energy demand across Asian markets, working with qualified counterparties to facilitate structured commercial engagements.",
    highlights: [
      "Industrial demand-driven opportunities",
      "Commercial buyer engagement",
      "Long-term relationship development",
    ],
    color: "#C7A24A",
  },
  {
    name: "Europe",
    description:
      "Developing relationships with commercial trading organisations and market participants in European energy markets, with a focus on professional and compliant engagement.",
    highlights: [
      "Commercial trading organisation engagement",
      "Refinery and mandate relationships",
      "Due diligence-oriented partnerships",
    ],
    color: "#C7A24A",
  },
  {
    name: "Latin America & Caribbean",
    description:
      "Engaging with procurement opportunities and strategic supply relationships across Latin American and Caribbean energy markets, where growing industrial demand creates facilitation opportunities.",
    highlights: [
      "Procurement opportunity engagement",
      "Supplier and mandate introductions",
      "Strategic partnership development",
    ],
    color: "#C7A24A",
  },
];

const whyPartner = [
  { title: "Professional Engagement", desc: "All interactions conducted with commercial professionalism and discretion." },
  { title: "Long-Term Relationship Focus", desc: "We invest in partnerships built for durability, not one-off transactions." },
  { title: "Confidentiality & Integrity", desc: "Commercially sensitive information is protected at every stage." },
  { title: "Due Diligence-Oriented Approach", desc: "We promote responsible counterparty verification and transparency." },
  { title: "International Market Reach", desc: "Active across Africa, the Middle East, Asia, Europe, and Latin America & Caribbean." },
  { title: "Strategic Commercial Development", desc: "Supporting market entry, supply development, and buyer engagement." },
];

const Markets = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#0B1F3A] text-white pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="absolute inset-0 z-0">
            <img src={heroIndustry} alt="Global energy markets" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/95 via-[#0B1F3A]/70 to-[#0B1F3A]/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-transparent to-transparent" />
          </div>
          <svg className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none z-[1]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="markets-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#markets-dots)" />
          </svg>
          <div className="container-site relative z-10">
            <div className="max-w-2xl">
              <motion.p className="text-xs font-semibold uppercase tracking-widest text-[#C7A24A] mb-4"
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, ease }}>
                Global Reach
              </motion.p>
              <motion.h1 className="text-white mb-6"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5, ease }}>
                Markets We Serve
              </motion.h1>
              <motion.p className="text-white/70 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.4, ease }}>
                Supporting commercial opportunities across international energy markets
                through professional facilitation and strategic partnerships.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Regions */}
        <section className="py-20 bg-white">
          <div className="container-site">
            <motion.div
              className="text-center mb-14"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ease, duration: 0.4 }}
            >
              <div className="text-xs font-semibold uppercase tracking-widest text-[#C7A24A] mb-3">Where We Operate</div>
              <h2 className="text-[#0B1F3A]">Our Global Regions</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regions.map((region, i) => (
                <motion.div
                  key={region.name}
                  className="group p-8 rounded-2xl border border-gray-100 hover:border-[#C7A24A]/40 hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ease, duration: 0.4, delay: i * 0.08 }}
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="h-12 w-12 rounded-xl bg-[#0B1F3A] group-hover:bg-[#C7A24A] flex items-center justify-center transition-colors duration-300">
                      <Globe className="h-6 w-6 text-[#C7A24A] group-hover:text-[#0B1F3A]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0B1F3A]">{region.name}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{region.description}</p>
                  <ul className="space-y-2">
                    {region.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-xs text-gray-500">
                        <ArrowRight className="h-3.5 w-3.5 text-[#C7A24A] shrink-0 mt-0.5" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Partner */}
        <section className="py-20 bg-[#0B1F3A]">
          <div className="container-site">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ease, duration: 0.4 }}
            >
              <div className="text-xs font-semibold uppercase tracking-widest text-[#C7A24A] mb-3">Partnership</div>
              <h2 className="text-white">Why Partner With LusFam Energy</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyPartner.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ease, duration: 0.4, delay: i * 0.06 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-5 w-5 rounded-full bg-[#C7A24A] flex items-center justify-center text-[#0B1F3A] text-xs font-bold">
                      ✓
                    </div>
                    <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                  </div>
                  <p className="text-white/50 text-xs leading-relaxed pl-7">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="container-site text-center">
            <h3 className="text-[#0B1F3A] text-xl font-semibold mb-3">Interested in a Market Opportunity?</h3>
            <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
              Contact LusFam Energy to discuss supplier engagement, buyer representation,
              or market development opportunities in your region.
            </p>
            <a
              href={WA_QUOTE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0B1F3A] text-white text-sm font-semibold hover:bg-[#0B1F3A]/90 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Enquire Now
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFAB />
    </div>
  );
};

export default Markets;
