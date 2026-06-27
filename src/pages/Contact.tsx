import { useState } from "react";
import { motion } from "framer-motion";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import { Mail, Phone, MapPin, MessageCircle, ArrowRight, Send } from "lucide-react";
import heroIndustry from "@/assets/hero-industry.jpg";
import { WA_QUOTE, CONTACT_EMAIL, CONTACT_PHONE_PRIMARY, CONTACT_PHONE_SECONDARY, CONTACT_ADDRESS } from "@/lib/whatsapp";

const ease: [number, number, number, number] = [0.32, 0.72, 0, 1];

const Contact = () => {
  const [form, setForm] = useState({ name: "", company: "", country: "", email: "", telephone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello LusFam Energy,\n\nName: ${form.name}\nCompany: ${form.company}\nCountry: ${form.country}\nEmail: ${form.email}\nTelephone: ${form.telephone}\n\nMessage:\n${form.message}`;
    window.open(`https://wa.me/263773540198?text=${encodeURIComponent(text)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#0B1F3A] text-white pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="absolute inset-0 z-0">
            <img src={heroIndustry} alt="Contact LusFam Energy" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/95 via-[#0B1F3A]/70 to-[#0B1F3A]/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-transparent to-transparent" />
          </div>
          <svg className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none z-[1]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="contact-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-dots)" />
          </svg>
          <div className="container-site relative z-10">
            <div className="max-w-2xl">
              <motion.p className="text-xs font-semibold uppercase tracking-widest text-[#C7A24A] mb-4"
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, ease }}>
                Contact
              </motion.p>
              <motion.h1 className="text-white mb-6"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5, ease }}>
                Get in Touch
              </motion.h1>
              <motion.p className="text-white/70 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.4, ease }}>
                Contact us for discussions regarding petroleum products, strategic
                partnerships, supplier engagement, and market development opportunities.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact content */}
        <section className="py-20 bg-white">
          <div className="container-site">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Left: info */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ease, duration: 0.5 }}
              >
                <div className="text-xs font-semibold uppercase tracking-widest text-[#C7A24A] mb-3">Contact Information</div>
                <h2 className="text-[#0B1F3A] mb-8">LusFam Energy Trading<br />(Private) Limited</h2>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-[#0B1F3A] flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-[#C7A24A]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-0.5">Address</p>
                      <p className="text-gray-700 text-sm">{CONTACT_ADDRESS}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-[#0B1F3A] flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-[#C7A24A]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-0.5">Telephone</p>
                      <a href={`tel:${CONTACT_PHONE_PRIMARY.replace(/\s/g, "")}`}
                        className="block text-gray-700 text-sm hover:text-[#C7A24A] transition-colors">
                        {CONTACT_PHONE_PRIMARY}
                      </a>
                      <a href={`tel:${CONTACT_PHONE_SECONDARY.replace(/\s/g, "")}`}
                        className="block text-gray-700 text-sm hover:text-[#C7A24A] transition-colors">
                        {CONTACT_PHONE_SECONDARY}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-[#0B1F3A] flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-[#C7A24A]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-0.5">Email</p>
                      <a href={`mailto:${CONTACT_EMAIL}`}
                        className="text-gray-700 text-sm hover:text-[#C7A24A] transition-colors">
                        {CONTACT_EMAIL}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-[#25D366] flex items-center justify-center shrink-0">
                      <MessageCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-0.5">WhatsApp</p>
                      <a href={WA_QUOTE} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-gray-700 hover:text-[#C7A24A] transition-colors">
                        Send a WhatsApp message <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-10 p-5 rounded-xl bg-gray-50 border border-gray-100">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Managing Director</p>
                  <p className="text-[#0B1F3A] font-semibold">Absalom Lusuwi</p>
                  <p className="text-sm text-gray-500 mt-1">Available for business enquiries regarding petroleum products,
                    strategic partnerships, supplier engagement, and market development.</p>
                </div>
              </motion.div>

              {/* Right: form */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ease, duration: 0.5, delay: 0.1 }}
              >
                <div className="text-xs font-semibold uppercase tracking-widest text-[#C7A24A] mb-3">Business Enquiry</div>
                <h2 className="text-[#0B1F3A] mb-8">Send an Enquiry</h2>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-green-50 border border-green-200 text-center">
                    <div className="text-4xl mb-3">✓</div>
                    <h3 className="text-green-800 font-semibold mb-2">Message Sent</h3>
                    <p className="text-green-600 text-sm">Your enquiry has been sent via WhatsApp. We will respond as soon as possible.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {[
                      { name: "name", label: "Full Name", type: "text", required: true },
                      { name: "company", label: "Company", type: "text", required: false },
                      { name: "country", label: "Country", type: "text", required: true },
                      { name: "email", label: "Email Address", type: "email", required: true },
                      { name: "telephone", label: "Telephone / WhatsApp", type: "tel", required: false },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                          {field.label}{field.required && <span className="text-[#C7A24A] ml-0.5">*</span>}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={form[field.name as keyof typeof form]}
                          onChange={handleChange}
                          required={field.required}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#C7A24A]/40 focus:border-[#C7A24A] transition-colors"
                        />
                      </div>
                    ))}
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                        Message <span className="text-[#C7A24A]">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#C7A24A]/40 focus:border-[#C7A24A] transition-colors resize-none"
                        placeholder="Please describe your enquiry, including any relevant product, market, or supply information."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B1F3A] text-white font-semibold text-sm hover:bg-[#0B1F3A]/90 transition-colors"
                    >
                      <Send className="h-4 w-4" />
                      Send via WhatsApp
                    </button>
                    <p className="text-xs text-gray-400 text-center">
                      Submitting this form will open WhatsApp with your message pre-filled.
                    </p>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFAB />
    </div>
  );
};

export default Contact;
