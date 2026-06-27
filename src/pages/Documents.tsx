import { motion } from "framer-motion";
import { FileText, Download, ArrowRight, MessageCircle, Lock } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import { WA_DOCUMENT, WA_QUOTE } from "@/lib/whatsapp";
import heroIndustry from "@/assets/hero-industry.jpg";

const ease: [number, number, number, number] = [0.32, 0.72, 0, 1];

const availableDocs = [
  {
    title: "Corporate Profile",
    description:
      "Overview of LusFam Energy Trading (Private) Limited — company background, structure, scope of activities, and contact information.",
    icon: FileText,
    pdfPath: "/docs/lusfam_energy_corporate_profile.pdf",
  },
  {
    title: "Buyer & Market Capability Statement",
    description:
      "A summary of our buyer engagement capability, market reach, and the procurement structures we support.",
    icon: FileText,
    waHref: WA_DOCUMENT("Buyer & Market Capability Statement"),
  },
  {
    title: "Product Requirement Summary",
    description:
      "An outline of the petroleum products we facilitate, including specification references and delivery structures.",
    icon: FileText,
    pdfPath: "/docs/Product_Requirement_Summary.pdf",
  },
];

const upcomingDocs = [
  { title: "Company Brochure", description: "Full corporate brochure for presentation to partners and counterparties." },
  { title: "Compliance Statement", description: "Statement of our commitment to due diligence, transparency, and commercial integrity." },
  { title: "Corporate Presentation", description: "Slide deck for business development and partner briefings." },
];

const Documents = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#0B1F3A] text-white pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="absolute inset-0 z-0">
            <img
              src={heroIndustry}
              alt="Corporate documents"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/95 via-[#0B1F3A]/70 to-[#0B1F3A]/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-transparent to-transparent" />
          </div>
          <svg className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none z-[1]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="docs-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#docs-dots)" />
          </svg>
          <div className="container-site relative z-10">
            <div className="max-w-2xl">
              <motion.p
                className="text-xs font-semibold uppercase tracking-widest text-[#C7A24A] mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease }}
              >
                Corporate Resources
              </motion.p>
              <motion.h1
                className="text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5, ease }}
              >
                Corporate Documents
              </motion.h1>
              <motion.p
                className="text-white/70 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4, ease }}
              >
                Download our corporate documents for due diligence, partner briefings,
                and commercial engagement purposes.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Available downloads */}
        <section className="py-20 bg-white">
          <div className="container-site">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ease, duration: 0.4 }}
            >
              <div className="text-xs font-semibold uppercase tracking-widest text-[#C7A24A] mb-2">Available Now</div>
              <h2 className="text-[#0B1F3A]">Available Downloads</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {availableDocs.map((doc, i) => {
                const Icon = doc.icon;
                return (
                  <motion.div
                    key={doc.title}
                    className="group p-6 rounded-2xl border border-gray-100 hover:border-[#C7A24A]/40 hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ ease, duration: 0.4, delay: i * 0.08 }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="h-12 w-12 rounded-xl bg-[#0B1F3A] flex items-center justify-center shrink-0">
                        <Icon className="h-6 w-6 text-[#C7A24A]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#0B1F3A] text-base mb-1">{doc.title}</h3>
                        <span className="inline-block text-[10px] font-semibold uppercase tracking-wide text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                          Available
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed mb-5">{doc.description}</p>
                    {doc.pdfPath ? (
                      <a
                        href={doc.pdfPath}
                        download
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#C7A24A] hover:text-[#0B1F3A] transition-colors"
                      >
                        <Download className="h-4 w-4" />
                        Download PDF
                      </a>
                    ) : (
                      <a
                        href={doc.waHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#C7A24A] hover:text-[#0B1F3A] transition-colors"
                      >
                        <Download className="h-4 w-4" />
                        Request Document
                      </a>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Future Additions — hidden from view, preserved for later use
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ease, duration: 0.4 }}
            >
              <div className="text-xs font-semibold uppercase tracking-widest text-[#C7A24A] mb-2">Coming Soon</div>
              <h2 className="text-[#0B1F3A]">Future Additions</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingDocs.map((doc, i) => (
                <motion.div
                  key={doc.title}
                  className="p-6 rounded-2xl border border-dashed border-gray-200 bg-gray-50"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ease, duration: 0.4, delay: i * 0.08 }}
                >
                  <div className="flex items-start gap-4 mb-3">
                    <div className="h-12 w-12 rounded-xl bg-gray-200 flex items-center justify-center shrink-0">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-500 text-base mb-1">{doc.title}</h3>
                      <span className="inline-block text-[10px] font-semibold uppercase tracking-wide text-gray-400 bg-gray-200 px-2 py-0.5 rounded-full">
                        Coming Soon
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">{doc.description}</p>
                </motion.div>
              ))}
            </div>
            */}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="container-site text-center">
            <h3 className="text-[#0B1F3A] text-xl font-semibold mb-3">Need a Specific Document?</h3>
            <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
              Contact us via WhatsApp or email to request any document or to discuss
              your specific due diligence requirements.
            </p>
            <a
              href={WA_QUOTE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0B1F3A] text-white text-sm font-semibold hover:bg-[#0B1F3A]/90 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFAB />
    </div>
  );
};

export default Documents;
