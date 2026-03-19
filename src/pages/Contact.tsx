import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import RFQModal from "@/components/RFQModal";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: MapPin, label: "Office", value: "Harare, Zimbabwe" },
  { icon: Phone, label: "Phone", value: "+263 77 123 4567" },
  { icon: Mail, label: "Email", value: "info@lusfamenergy.com" },
  { icon: MessageCircle, label: "WhatsApp", value: "+263 77 123 4567", href: "https://wa.me/263771234567" },
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
        <section className="bg-primary text-primary-foreground py-20 lg:py-28">
          <div className="container-site">
            <p className="ui-label text-primary-foreground/60 mb-4">Contact</p>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight max-w-2xl">
              Get in Touch
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/70 max-w-xl leading-relaxed">
              Whether you need a quote, have a question, or want to explore a partnership — our trade desk is ready to help.
            </p>
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
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
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
