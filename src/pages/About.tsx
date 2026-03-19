import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import RFQModal from "@/components/RFQModal";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import { Users, Target, Shield, Award } from "lucide-react";

const values = [
  { icon: Target, title: "Mission-Driven", description: "Delivering reliable energy solutions across Southern Africa with integrity and precision." },
  { icon: Shield, title: "Compliance First", description: "Adhering to the highest regulatory and safety standards in every transaction." },
  { icon: Award, title: "Excellence", description: "Consistently exceeding expectations in product quality and service delivery." },
  { icon: Users, title: "Partnership", description: "Building long-term relationships with clients, suppliers, and communities." },
];

const leadership = [
  {
    name: "Absalom Lusuwi",
    role: "Founder & Managing Director",
    bio: "With over two decades of experience in energy trading and commodities across Southern Africa, Absalom founded LusFam Trust Investments to bridge the gap between reliable fuel supply and growing regional demand. His deep understanding of cross-border logistics and regulatory frameworks has positioned LusFam as a trusted partner for governments and private enterprises alike.",
  },
  {
    name: "Agnes Lusuwi",
    role: "Director of Operations",
    bio: "Agnes brings extensive expertise in supply chain management and operational excellence to LusFam Energy Trading. Her focus on efficiency, compliance, and stakeholder engagement ensures seamless delivery across all markets. Agnes plays a pivotal role in expanding LusFam's footprint into new territories.",
  },
];

const About = () => {
  const [rfqOpen, setRfqOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader onRequestQuote={() => setRfqOpen(true)} />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-20 lg:py-28">
          <div className="container-site">
            <p className="ui-label text-primary-foreground/60 mb-4">About Us</p>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight max-w-2xl">
              Powering Southern Africa's Energy Future
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/70 max-w-xl leading-relaxed">
              LusFam Energy Trading — a division of LusFam Trust Investments (Pvt) Ltd — is a trusted procurement and delivery partner for bulk petroleum products across the region.
            </p>
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

        {/* Leadership */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container-site">
            <p className="ui-label text-muted-foreground mb-2">Leadership</p>
            <h2 className="text-3xl font-bold text-foreground mb-12">Meet the Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {leadership.map((person) => (
                <div key={person.name} className="flex flex-col sm:flex-row gap-6">
                  <div className="h-32 w-32 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary/40" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{person.name}</h3>
                    <p className="text-sm font-medium text-accent">{person.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{person.bio}</p>
                  </div>
                </div>
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
