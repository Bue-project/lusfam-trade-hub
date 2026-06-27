import { motion } from "framer-motion";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import {
  Shield,
  FileCheck,
  Scale,
  AlertTriangle,
  CheckCircle,
  BookOpen,
  Handshake,
  Leaf,
  MessageCircle,
  ArrowRight,
  ScanLine,
  Users,
} from "lucide-react";
import { WA_QUOTE } from "@/lib/whatsapp";
import heroIndustry from "@/assets/hero-industry.jpg";

const ease: [number, number, number, number] = [0.32, 0.72, 0, 1];

const commitments = [
  {
    icon: FileCheck,
    title: "Product Quality Standards",
    description:
      "LusFam Energy seeks to engage with suppliers whose products meet internationally recognised specifications, including EN590 and ASTM standards where applicable. Product quality verification remains the responsibility of the supplying party.",
  },
  {
    icon: Scale,
    title: "INCOTERMS Reference",
    description:
      "LusFam Energy supports opportunities involving internationally recognised transaction structures, including FOB TTT (Tank-to-Tank) and CIF arrangements where applicable, subject to supplier requirements, buyer mandates, and mutually agreed transaction terms.",
  },
  {
    icon: Shield,
    title: "Regulatory Alignment",
    description:
      "LusFam Energy Trading (Private) Limited is incorporated in Zimbabwe. We seek to align our facilitation activities with the regulatory requirements of each market we engage with across international energy markets.",
  },
  {
    icon: Handshake,
    title: "Titleholder Governance",
    description:
      "LusFam Energy may engage with titleholders, suppliers, refiners, and mandates as part of structured commercial opportunities. All engagements are subject to counterparty qualification and commercial feasibility.",
  },
  {
    icon: AlertTriangle,
    title: "Safety & Handling",
    description:
      "Petroleum products require strict handling protocols. We seek to work with logistics and supply partners who maintain recognised safety standards for storage, transportation, and delivery of petroleum products.",
  },
  {
    icon: Leaf,
    title: "Environmental Responsibility",
    description:
      "LusFam Energy is committed to engaging with partners who adhere to applicable environmental regulations in each operating market, and to minimising environmental impact across the commercial activities we facilitate.",
  },
];

const Compliance = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#0B1F3A] text-white pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="absolute inset-0 z-0">
            <img
              src={heroIndustry}
              alt="Petroleum terminal facility"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/95 via-[#0B1F3A]/70 to-[#0B1F3A]/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-transparent to-transparent" />
          </div>
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none z-[1]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="compliance-dots"
                x="0"
                y="0"
                width="24"
                height="24"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#compliance-dots)" />
          </svg>

          <div className="container-site relative z-10">
            <div className="max-w-3xl">
              <motion.p
                className="text-xs font-semibold uppercase tracking-widest text-[#C7A24A] mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease }}
              >
                Compliance
              </motion.p>
              <motion.h1
                className="text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5, ease }}
              >
                Compliance & Due Diligence
              </motion.h1>
              <motion.p
                className="text-white/70 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4, ease }}
              >
                LusFam Energy believes that sustainable commercial relationships
                are built upon trust, transparency, and responsible business conduct.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Commitments grid */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container-site">
            <div className="mb-12">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#C7A24A] mb-2">Our Commitments</div>
              <h2 className="text-[#0B1F3A]">Professional Standards</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {commitments.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    className="space-y-3"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.4, ease, delay: i * 0.05 }}
                  >
                    <div className="h-12 w-12 rounded-xl bg-[#0B1F3A] flex items-center justify-center">
                      <Icon className="h-6 w-6 text-[#C7A24A]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#0B1F3A]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Key standards reference */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container-site">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <div className="text-xs font-semibold uppercase tracking-widest text-[#C7A24A] mb-2">
                  Standards We Reference
                </div>
                <h2 className="text-[#0B1F3A]">Product & Trade Standards</h2>
              </div>
              <div className="space-y-4">
                {[
                  {
                    standard: "EN 590",
                    description:
                      "European standard for automotive diesel fuel quality. Where applicable, LusFam Energy seeks to engage with suppliers whose diesel products reference EN 590 specifications.",
                  },
                  {
                    standard: "ASTM D1655",
                    description:
                      "Standard specification for aviation turbine fuels (Jet A-1). LusFam Energy supports opportunities where suppliers reference ASTM D1655 certification requirements.",
                  },
                  {
                    standard: "INCOTERMS 2020",
                    description:
                      "International Commercial Terms published by the ICC, defining responsibilities of buyers and sellers in international trade transactions.",
                  },
                  {
                    standard: "FOB TTT / TTV",
                    description:
                      "Free On Board Tank-to-Tank and Tank-to-Vessel delivery structures may be referenced in commercial opportunities facilitated by LusFam Energy, subject to agreement between transacting parties.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.standard}
                    className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100 shadow-sm"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, ease, delay: i * 0.05 }}
                  >
                    <div className="h-10 w-10 rounded-lg bg-[#0B1F3A] flex items-center justify-center shrink-0">
                      <CheckCircle className="h-5 w-5 text-[#C7A24A]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#0B1F3A] mb-1">
                        {item.standard}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Counterparty Engagement Policy */}
        <section className="py-16 lg:py-24 bg-white border-t border-gray-100">
          <div className="container-site">
            <div className="max-w-3xl mx-auto">
              <div className="mb-10">
                <div className="text-xs font-semibold uppercase tracking-widest text-[#C7A24A] mb-2">Counterparty Engagement Policy</div>
                <h2 className="text-[#0B1F3A] mb-6">Who We Engage With</h2>
                <motion.blockquote
                  className="border-l-4 border-[#C7A24A] bg-[#C7A24A]/5 rounded-r-xl px-6 py-5 mb-10"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, ease }}
                >
                  <p className="text-gray-700 leading-relaxed italic text-sm lg:text-base">
                    "LusFam Energy promotes responsible counterparty engagement through
                    information review, commercial verification, and professional communication.
                    Buyer mandates, supplier relationships, and transaction-specific information
                    remain confidential and are disclosed only at the appropriate stage of engagement."
                  </p>
                </motion.blockquote>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Users,
                    title: "Responsible Counterparty Engagement",
                    description: "LusFam Energy promotes responsible engagement through information review and commercial verification processes. We encourage transparency at every stage of the facilitation process.",
                  },
                  {
                    icon: ScanLine,
                    title: "Due Diligence Philosophy",
                    description: "The company promotes responsible counterparty engagement through commercial verification and professional communication. We do not proceed with engagements where counterparty legitimacy cannot be reasonably established.",
                  },
                  {
                    icon: FileCheck,
                    title: "Confidentiality",
                    description: "Buyer mandates, supplier relationships, and transaction-specific information remain confidential and are disclosed only at the appropriate stage of engagement and with the consent of the relevant party.",
                  },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100"
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.4, ease, delay: i * 0.07 }}
                    >
                      <div className="h-10 w-10 rounded-lg bg-[#0B1F3A] flex items-center justify-center shrink-0">
                        <Icon className="h-5 w-5 text-[#C7A24A]" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-[#0B1F3A] mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-12 border-t border-gray-100 bg-white">
          <div className="container-site">
            <div className="max-w-3xl mx-auto flex items-start gap-4">
              <BookOpen className="h-5 w-5 text-gray-400 shrink-0 mt-0.5" />
              <p className="text-xs text-gray-400 leading-relaxed">
                This page outlines LusFam Energy Trading's approach to compliance
                and due diligence. It does not constitute legal or regulatory advice.
                Specific compliance requirements may vary by jurisdiction and transaction
                type. LusFam Energy acts as a facilitator and does not hold title to
                petroleum products. For specific enquiries, please{" "}
                <a
                  href={WA_QUOTE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C7A24A] hover:underline font-medium"
                >
                  contact us directly
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 lg:py-20 bg-[#0B1F3A]">
          <div className="container-site text-center">
            <motion.p
              className="text-xs font-semibold uppercase tracking-widest text-[#C7A24A] mb-3"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              Enquiries
            </motion.p>
            <motion.h2
              className="text-white text-2xl lg:text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08, duration: 0.45 }}
            >
              Have a compliance question?
            </motion.h2>
            <motion.p
              className="text-white/60 mb-8 max-w-md mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.4 }}
            >
              Contact us to discuss compliance queries, due diligence requirements,
              or the engagement process.
            </motion.p>
            <motion.a
              href={WA_QUOTE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#C7A24A] hover:bg-[#C7A24A]/90 text-[#0B1F3A] font-semibold transition-colors"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <MessageCircle className="h-5 w-5" />
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFAB />
    </div>
  );
};

export default Compliance;
