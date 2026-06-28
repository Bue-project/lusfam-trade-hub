import { motion } from "framer-motion";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import { Shield, Award, Users, Heart, Eye, TrendingUp, Lock } from "lucide-react";
import heroIndustry from "@/assets/hero-industry.jpg";
import directorAbsalom from "@/assets/director-absalom.jpg";
import directorAgnes from "@/assets/director-agnes.jpg";

const ease: [number, number, number, number] = [0.32, 0.72, 0, 1];

const values = [
  { icon: Shield, title: "Integrity", description: "Maintaining honesty and ethical conduct in all business activities." },
  { icon: Award, title: "Professionalism", description: "Delivering high standards of commercial engagement at every touchpoint." },
  { icon: Eye, title: "Transparency", description: "Promoting clear communication and responsible business practices." },
  { icon: Lock, title: "Confidentiality", description: "Protecting commercially sensitive information shared by counterparties." },
  { icon: Users, title: "Collaboration", description: "Building mutually beneficial relationships with partners and clients." },
  { icon: TrendingUp, title: "Continuous Improvement", description: "Pursuing ongoing growth, learning, and professional development." },
];

const leadership = [
  {
    name: "Absalom Lusuwi",
    role: "Founder & Managing Director",
    bio: [
      "Absalom Lusuwi is the Founder and Managing Director of LusFam Energy Trading. He founded the company to formalize and expand his participation in the international energy sector, building on his experience in business development, petroleum trading, and cross-border commercial engagement.",
      "He leads the company's strategic direction, business development, and international partnerships, working with reputable suppliers, buyers, and industry stakeholders across Africa, the Middle East, the Caribbean, Asia, and other global markets.",
      "Committed to professionalism, transparency, and long-term business relationships, Mr. Lusuwi continues to guide LusFam Energy Trading's growth as a trusted partner in the international petroleum trading industry.",
    ],
    photo: directorAbsalom,
  },
  {
    name: "Agnes Fungai Lusuwi",
    role: "Executive Director – Administration & Strategic Partnerships",
    bio: [
      "Agnes Fungai Lusuwi is the Executive Director – Administration & Strategic Partnerships at LusFam Energy Trading. With more than 20 years of experience in administration, donor coordination, stakeholder engagement, diplomacy, and international relations, she plays a key role in strengthening the company's governance and strategic partnerships.",
      "Her expertise in relationship management, international cooperation, and agreement facilitation supports LusFam Energy Trading's commitment to building trusted, long-term partnerships across global markets.",
    ],
    photo: directorAgnes,
  },
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#0B1F3A] text-white pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="absolute inset-0 z-0">
            <img src={heroIndustry} alt="Energy infrastructure" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/95 via-[#0B1F3A]/70 to-[#0B1F3A]/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-transparent to-transparent" />
          </div>
          <svg className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none z-[1]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="about-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-dots)" />
          </svg>
          <div className="container-site relative z-10">
            <div className="max-w-2xl">
              <motion.p className="text-xs font-semibold uppercase tracking-widest text-[#C7A24A] mb-4"
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, ease }}>
                Our Story
              </motion.p>
              <motion.h1 className="text-white mb-6"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5, ease }}>
                About LusFam Energy
              </motion.h1>
              <motion.p className="text-white/70 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.4, ease }}>
                Built on transparency, professionalism, and long-term commercial relationships.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="container-site">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ease, duration: 0.5 }}
              >
                <div className="text-xs font-semibold uppercase tracking-widest text-[#C7A24A] mb-3">Our Story</div>
                <h2 className="text-[#0B1F3A] mb-6">From Experience to Enterprise</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  LusFam Energy Trading (Private) Limited was incorporated on 21 April 2026 to
                  formalize and expand more than five years of petroleum transaction facilitation
                  experience developed through independent engagement within international
                  energy markets.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The company was founded on the principle that successful energy transactions
                  are built upon transparency, professionalism, responsible due diligence, and
                  long-term commercial relationships.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, LusFam Energy supports commercial opportunities across Africa, Latin
                  America, Asia, and Europe, connecting qualified buyers, suppliers, refiners,
                  mandates, and strategic partners through professional facilitation.
                </p>
              </motion.div>

              <motion.div
                className="grid grid-cols-2 gap-5"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ease, duration: 0.5, delay: 0.1 }}
              >
                <div className="col-span-2 p-6 rounded-2xl bg-[#0B1F3A] text-white">
                  <div className="text-xs font-semibold uppercase tracking-widest text-[#C7A24A] mb-2">Mission</div>
                  <p className="text-sm leading-relaxed text-white/80">
                    To facilitate transparent, professional, and commercially sustainable energy
                    opportunities through strategic partnerships and responsible market engagement.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="text-xs font-semibold uppercase tracking-widest text-[#C7A24A] mb-2">Vision</div>
                  <p className="text-sm leading-relaxed text-gray-600">
                    To become a trusted international energy transaction facilitation partner
                    connecting markets through professionalism, integrity, and long-term cooperation.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-[#C7A24A]/10 border border-[#C7A24A]/20">
                  <div className="text-xs font-semibold uppercase tracking-widest text-[#C7A24A] mb-2">Incorporated</div>
                  <p className="text-2xl font-bold text-[#0B1F3A]">21 April 2026</p>
                  <p className="text-xs text-gray-500 mt-1">Registered in Zimbabwe</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* MD Message */}
        <section className="py-20 bg-[#0B1F3A]">
          <div className="container-site">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ease, duration: 0.5 }}
              >
                <div className="text-xs font-semibold uppercase tracking-widest text-[#C7A24A] mb-8 text-center">
                  A Message from Our Managing Director
                </div>
                <blockquote className="relative">
                  <div className="text-5xl text-[#C7A24A]/30 font-serif leading-none mb-4 select-none">&ldquo;</div>
                  <p className="text-white/90 text-lg lg:text-xl leading-relaxed font-light italic mb-8">
                    At LusFam Energy, we believe successful commercial relationships are built
                    on professionalism, transparency, due diligence, and long-term cooperation.
                    Our objective is to connect credible market participants and support
                    responsible engagement within international energy markets.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-px flex-1 bg-white/10" />
                    <div className="text-right">
                      <p className="text-white font-semibold">Absalom Lusuwi</p>
                      <p className="text-[#C7A24A] text-xs uppercase tracking-widest mt-0.5">
                        Founder &amp; Managing Director
                      </p>
                    </div>
                  </div>
                </blockquote>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gray-50">
          <div className="container-site">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ease, duration: 0.4 }}
            >
              <div className="text-xs font-semibold uppercase tracking-widest text-[#C7A24A] mb-3">What We Stand For</div>
              <h2 className="text-[#0B1F3A]">Core Values</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, i) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-[#C7A24A]/30 hover:shadow-md transition-all duration-200"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ ease, duration: 0.4, delay: i * 0.06 }}
                  >
                    <div className="h-11 w-11 rounded-xl bg-[#0B1F3A] flex items-center justify-center mb-4">
                      <Icon className="h-5 w-5 text-[#C7A24A]" />
                    </div>
                    <h3 className="font-semibold text-[#0B1F3A] mb-2">{value.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-20 bg-white">
          <div className="container-site">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ease, duration: 0.4 }}
            >
              <div className="text-xs font-semibold uppercase tracking-widest text-[#C7A24A] mb-3">The Team</div>
              <h2 className="text-[#0B1F3A]">Leadership</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {leadership.map((person, i) => (
                <motion.div
                  key={person.name}
                  className="rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ease, duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="aspect-[3/4] bg-gray-100 overflow-hidden rounded-2xl">
                    <img
                      src={person.photo}
                      alt={person.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-semibold uppercase tracking-widest text-[#C7A24A] mb-1">{person.role}</div>
                    <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">{person.name}</h3>
                    <div className="space-y-3">
                      {person.bio.map((para, j) => (
                        <p key={j} className="text-sm text-gray-500 leading-relaxed">{para}</p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFAB />
    </div>
  );
};

export default About;
