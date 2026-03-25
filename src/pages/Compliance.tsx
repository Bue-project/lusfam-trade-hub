import { useState } from "react";
import { motion } from "framer-motion";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import RFQModal from "@/components/RFQModal";
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
} from "lucide-react";
import heroIndustry from "@/assets/hero-industry.jpg";

const ease: [number, number, number, number] = [0.32, 0.72, 0, 1];

const commitments = [
  {
    icon: FileCheck,
    title: "Product Quality Standards",
    description:
      "All products we facilitate meet internationally recognised specifications. Diesel conforms to EN 590, Jet Fuel to ASTM D1655, and all products are accompanied by Certificates of Quality (COQ) from certified laboratories.",
  },
  {
    icon: Scale,
    title: "INCOTERMS Compliance",
    description:
      "Every transaction is structured under INCOTERMS 2020 standards. We operate primarily under FOB TTT (Tank-to-Tank) and FOB TTV (Tank-to-Vessel) terms, ensuring clear allocation of responsibilities between parties.",
  },
  {
    icon: Shield,
    title: "Regulatory Alignment",
    description:
      "LusFam Energy Trading operates as a registered division of LusFam Trust Investments (Pvt) Ltd. We align our operations with the regulatory requirements of each market we serve across Southern Africa.",
  },
  {
    icon: Handshake,
    title: "Titleholder Governance",
    description:
      "Our procurement is executed through a trusted titleholder with established supply channels. All transactions are documented, auditable, and structured to protect both buyer and seller interests.",
  },
  {
    icon: AlertTriangle,
    title: "Safety & Handling",
    description:
      "Petroleum products require strict handling protocols. We work with logistics partners who maintain safety standards for storage, transportation, and delivery of hazardous materials across all corridors.",
  },
  {
    icon: Leaf,
    title: "Environmental Responsibility",
    description:
      "We are committed to minimising environmental impact across our supply chain. This includes working with partners who adhere to environmental regulations in each operating market.",
  },
];

const Compliance = () => {
  const [rfqOpen, setRfqOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader onRequestQuote={() => setRfqOpen(true)} />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#060D18] text-white pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="absolute inset-0 z-0">
            <img
              src={heroIndustry}
              alt="Petroleum terminal facility"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#060D18]/95 via-[#060D18]/70 to-[#060D18]/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060D18] via-transparent to-transparent" />
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
          <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl pointer-events-none z-[1]" />

          <div className="container-site relative z-10">
            <div className="max-w-3xl">
              <motion.p
                className="ui-label text-[#D4A017] mb-4"
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
                Standards & Compliance
              </motion.h1>
              <motion.p
                className="text-white/70 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4, ease }}
              >
                Operating in the petroleum sector demands strict adherence to
                quality, safety, and regulatory standards. At LusFam Energy
                Trading, compliance is foundational to every transaction we
                facilitate.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Commitments grid */}
        <section className="py-16 lg:py-24">
          <div className="container-site">
            <div className="mb-12">
              <p className="ui-label text-primary mb-2">Our Commitments</p>
              <h2 className="text-3xl font-bold text-foreground">
                How We Operate
              </h2>
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
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Key standards reference */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container-site">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <p className="ui-label text-primary mb-2">
                  Standards We Reference
                </p>
                <h2 className="text-3xl font-bold text-foreground">
                  Product & Trade Standards
                </h2>
              </div>
              <div className="space-y-4">
                {[
                  {
                    standard: "EN 590",
                    description:
                      "European standard for automotive diesel fuel quality, specifying requirements for fatty acid methyl esters (FAME) diesel fuel.",
                  },
                  {
                    standard: "ASTM D1655",
                    description:
                      "Standard specification for aviation turbine fuels (Jet A-1), covering requirements for fuel sold at the refinery, pipeline, and terminal.",
                  },
                  {
                    standard: "INCOTERMS 2020",
                    description:
                      "International Commercial Terms published by the ICC, defining responsibilities of buyers and sellers in international trade transactions.",
                  },
                  {
                    standard: "FOB TTT / TTV",
                    description:
                      "Free On Board Tank-to-Tank and Tank-to-Vessel delivery terms, specifying the point at which risk and responsibility transfer from seller to buyer.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.standard}
                    className="flex items-start gap-4 bg-card rounded-xl p-5 shadow-card"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, ease, delay: i * 0.05 }}
                  >
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-1">
                        {item.standard}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-12 border-t border-border">
          <div className="container-site">
            <div className="max-w-3xl mx-auto flex items-start gap-4">
              <BookOpen className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground leading-relaxed">
                This page outlines LusFam Energy Trading's approach to
                compliance and quality standards. It does not constitute legal
                or regulatory advice. Specific compliance requirements may vary
                by jurisdiction and transaction type. For detailed information
                about our compliance procedures for a specific transaction,
                please{" "}
                <a
                  href="/contact"
                  className="text-primary hover:underline font-medium"
                >
                  contact our trade desk
                </a>
                .
              </p>
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

export default Compliance;
