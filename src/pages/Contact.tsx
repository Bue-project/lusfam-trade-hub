import { useState } from "react";
import { motion } from "framer-motion";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import RFQModal from "@/components/RFQModal";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ease: [number, number, number, number] = [0.32, 0.72, 0, 1];

const contactInfo = [
  { icon: MapPin, label: "Office", value: "Harare, Zimbabwe", href: undefined },
  { icon: Phone, label: "Phone", value: "+263 77 354 0198", href: "tel:+263773540198" },
  { icon: Mail, label: "Email", value: "info@lusfamenergy.com", href: "mailto:info@lusfamenergy.com" },
  { icon: MessageCircle, label: "WhatsApp", value: "+263 77 354 0198", href: "https://wa.me/263773540198" },
];

const Contact = () => {
  const [rfqOpen, setRfqOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({ title: "Message sent", description: "We'll get back to you shortly." });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader onRequestQuote={() => setRfqOpen(true)} />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-secondary text-secondary-foreground py-20 lg:py-28">
          {/* Dot-grid SVG background */}
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="contact-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-dots)" />
          </svg>
          {/* Radial glow */}
          <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />

          <div className="container-site relative">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: heading */}
              <div>
                <motion.p
                  className="ui-label text-secondary-foreground/40 mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease }}
                >
                  Contact
                </motion.p>
                <motion.h1
                  className="text-secondary-foreground mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5, ease }}
                >
                  Get in Touch
                </motion.h1>
                <motion.p
                  className="text-secondary-foreground/65 text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4, ease }}
                >
                  Whether you need a quote, have a question, or want to explore a partnership — our trade desk is ready to help.
                </motion.p>
              </div>

              {/* Right: contact info cards */}
              <motion.div
                className="space-y-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25, duration: 0.55, ease }}
              >
                {contactInfo.map((item, i) => {
                  const Icon = item.icon;
                  const inner = (
                    <motion.div
                      key={item.label}
                      className="flex items-center gap-4 bg-white/8 border border-white/12 rounded-xl px-5 py-4 backdrop-blur-sm"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.07, duration: 0.4, ease }}
                      whileHover={{ backgroundColor: "rgba(255,255,255,0.13)" }}
                    >
                      <div className="h-9 w-9 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-secondary-foreground/45 font-medium uppercase tracking-wider">{item.label}</p>
                        <p className="text-sm font-semibold text-secondary-foreground mt-0.5">{item.value}</p>
                      </div>
                    </motion.div>
                  );
                  return item.href ? (
                    <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block">
                      {inner}
                    </a>
                  ) : (
                    <div key={item.label}>{inner}</div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container-site grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-foreground mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Full Name</label>
                    <Input placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Company</label>
                    <Input placeholder="Company name" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input type="email" placeholder="you@company.com" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Phone</label>
                    <Input type="tel" placeholder="+263..." />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <Textarea placeholder="How can we help?" rows={5} required />
                </div>
                <Button type="submit" size="lg">Send Message</Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground mb-8">Contact Details</h2>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
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

export default Contact;
