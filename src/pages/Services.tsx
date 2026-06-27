import { motion } from "framer-motion";
import { ArrowRight, Handshake, Globe, Users, ShieldCheck, FileSearch, TrendingUp, MessageCircle } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import { WA_QUOTE } from "@/lib/whatsapp";
import heroIndustry from "@/assets/hero-industry.jpg";
import { Link } from "react-router-dom";

const ease: [number, number, number, number] = [0.32, 0.72, 0, 1];

const services = [
  {
    icon: Handshake,
    title: "Energy Transaction Facilitation",
    description:
      "Supporting communication and commercial coordination between qualified buyers, suppliers, refiners, mandates, and strategic partners. We structure engagements professionally to support transparent and efficient transaction development.",
  },
  {
    icon: Globe,
    title: "Market Development",
    description:
      "Identifying and supporting commercial opportunities across international energy markets, including Africa, Latin America, Asia, and Europe. We help our partners navigate new markets with due diligence and strategic insight.",
  },
  {
    icon: Users,
    title: "Commercial Introductions",
    description:
      "Facilitating introductions between reputable counterparties. Our network includes qualified buyers, mandate holders, refiners, and trading organizations across multiple regions.",
  },
  {
    icon: TrendingUp,
    title: "Strategic Partnership Development",
    description:
      "Supporting long-term business relationship formation within international energy markets. We invest in relationships built on trust, confidentiality, and mutual commercial benefit.",
  },
  {
    icon: ShieldCheck,
    title: "Due Diligence Coordination",
    description:
      "Encouraging responsible commercial engagement through information review, counterparty verification, and professional communication. We promote transparency at every stage of the engagement process.",
  },
  {
    icon: FileSearch,
    title: "Transaction Support",
    description:
      "Assisting with communication, coordination, and procedural understanding throughout transaction development. From initial enquiry to commercial documentation, we support both sides of the engagement.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#0B1F3A] text-white pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="absolute inset-0 z-0">
            <img
              src={heroIndustry}
              alt="Energy trading"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/95 via-[#0B1F3A]/70 to-[#0B1F3A]/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-transparent to-transparent" />
          </div>
          <svg className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none z-[1]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="services-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#services-dots)" />
          </svg>
          <div className="container-site relative z-10">
            <div className="max-w-2xl">
              <motion.p
                className="text-xs font-semibold uppercase tracking-widest text-[#C7A24A] mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease }}
              >
                What We Do
              </motion.p>
              <motion.h1
                className="text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5, ease }}
              >
                Our Services
              </motion.h1>
              <motion.p
                className="text-white/70 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4, ease }}
              >
                Professional energy transaction facilitation and strategic market
                development services for international petroleum opportunities.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Services grid */}
        <section className="py-20 bg-white">
          <div className="container-site">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    className="group p-8 rounded-2xl border border-gray-100 hover:border-[#C7A24A]/40 hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ ease, duration: 0.4, delay: i * 0.07 }}
                  >
                    <div className="h-14 w-14 rounded-xl bg-[#0B1F3A] group-hover:bg-[#C7A24A] flex items-center justify-center mb-5 transition-colors duration-300">
                      <Icon className="h-7 w-7 text-[#C7A24A] group-hover:text-[#0B1F3A]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#0B1F3A] mb-3">{service.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#0B1F3A]">
          <div className="container-site text-center">
            <motion.h2
              className="text-white mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ease, duration: 0.4 }}
            >
              Ready to Explore a Commercial Opportunity?
            </motion.h2>
            <motion.p
              className="text-white/60 mb-8 max-w-lg mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ease, duration: 0.4, delay: 0.1 }}
            >
              Contact us to explore how LusFam Energy can support your petroleum
              procurement or supply engagement.
            </motion.p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={WA_QUOTE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#C7A24A] text-[#0B1F3A] font-semibold text-sm hover:bg-[#C7A24A]/90 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Enquiry
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                Contact Page <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFAB />
    </div>
  );
};

export default Services;
