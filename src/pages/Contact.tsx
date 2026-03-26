import { motion } from "framer-motion";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import { Mail, Phone, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import heroIndustry from "@/assets/hero-industry.jpg";
import { WA_QUOTE } from "@/lib/whatsapp";

const ease: [number, number, number, number] = [0.32, 0.72, 0, 1];

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
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
              <pattern id="contact-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-dots)" />
          </svg>
          <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl pointer-events-none z-[1]" />

          <div className="container-site relative z-10">
            <div className="max-w-2xl">
              <motion.p
                className="ui-label text-[#D4A017] mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease }}
              >
                Contact
              </motion.p>
              <motion.h1
                className="text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5, ease }}
              >
                Get in Touch
              </motion.h1>
              <motion.p
                className="text-white/70 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4, ease }}
              >
                Whether you need a quote, have a question, or want to explore a partnership — our trade desk is ready to help.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact cards */}
        <section className="py-16 lg:py-24">
          <div className="container-site">
            <div className="max-w-2xl mx-auto space-y-4">
              {/* WhatsApp — primary CTA */}
              <motion.a
                href={WA_QUOTE}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 bg-[#D4A017]/10 border border-[#D4A017]/35 rounded-2xl px-6 py-5 hover:bg-[#D4A017]/18 transition-colors group"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease }}
                whileHover={{ scale: 1.015 }}
              >
                <div className="h-12 w-12 rounded-xl bg-[#D4A017]/20 flex items-center justify-center shrink-0">
                  <MessageCircle className="h-6 w-6 text-[#D4A017]" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-[#D4A017] font-semibold uppercase tracking-wider mb-0.5">WhatsApp — Fastest Response</p>
                  <p className="text-base font-semibold text-white">Chat with our Trade Desk</p>
                  <p className="text-sm text-white/55 mt-0.5">+263 77 354 0198 · Pre-filled quote request</p>
                </div>
                <ArrowRight className="h-5 w-5 text-[#D4A017] shrink-0 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:info@lusfamenergy.com"
                className="flex items-center gap-5 bg-card border border-border rounded-2xl px-6 py-5 hover:bg-muted/60 transition-colors group"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.07, duration: 0.4, ease }}
                whileHover={{ scale: 1.015 }}
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-0.5">Email</p>
                  <p className="text-base font-semibold text-foreground">info@lusfamenergy.com</p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground shrink-0 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              {/* Phone */}
              <motion.a
                href="tel:+263773540198"
                className="flex items-center gap-5 bg-card border border-border rounded-2xl px-6 py-5 hover:bg-muted/60 transition-colors group"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.14, duration: 0.4, ease }}
                whileHover={{ scale: 1.015 }}
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-0.5">Phone</p>
                  <p className="text-base font-semibold text-foreground">+263 77 354 0198</p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground shrink-0 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              {/* Office */}
              <motion.div
                className="flex items-center gap-5 bg-card border border-border rounded-2xl px-6 py-5"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.21, duration: 0.4, ease }}
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-0.5">Office</p>
                  <p className="text-base font-semibold text-foreground">Harare, Zimbabwe</p>
                </div>
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
