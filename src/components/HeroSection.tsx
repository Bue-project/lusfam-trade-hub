import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import heroImage from "@/assets/hero-terminal.jpg";
import { WA_QUOTE } from "@/lib/whatsapp";
import { Link } from "react-router-dom";

const easeSmooth: [number, number, number, number] = [0.32, 0.72, 0, 1];

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const wordVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.25 + i * 0.1, duration: 0.6, ease: easeSmooth },
    }),
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={heroImage}
          alt="Petroleum tanker terminal facility"
          className="w-full h-full object-cover"
          style={{ y: imageY }}
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: easeSmooth }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/95 via-[#0B1F3A]/70 to-[#0B1F3A]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-transparent to-[#0B1F3A]/30" />
      </div>

      {/* Dot-grid overlay */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none z-[1]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="hero-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-dots)" />
      </svg>

      <div className="relative z-10 container-site pt-32 pb-24 lg:pt-40 lg:pb-32 w-full">
        <div className="max-w-2xl">
          <motion.p
            className="text-[#C7A24A] text-xs font-semibold uppercase tracking-widest mb-5"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: easeSmooth }}
          >
            LusFam Energy Trading (Private) Limited
          </motion.p>

          <h1 className="text-white mb-6 overflow-hidden">
            {["Facilitating", "Energy", "Opportunities", "Across", "International", "Markets"].map((word, i) => (
              <motion.span
                key={word}
                className="inline-block mr-[0.3em]"
                custom={i}
                initial="hidden"
                animate="visible"
                variants={wordVariants}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="text-white/70 text-lg leading-relaxed mb-10 max-w-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5, ease: easeSmooth }}
          >
            Connecting qualified buyers, suppliers, refiners, mandates, and
            strategic partners through professional transaction facilitation
            and market development.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.4, ease: easeSmooth }}
          >
            <Link to="/documents">
              <Button
                size="lg"
                className="bg-[#C7A24A] hover:bg-[#C7A24A]/90 text-[#0B1F3A] font-semibold px-6 gap-2"
              >
                <Download className="h-4 w-4" />
                Corporate Profile
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/60 px-6 gap-2"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.5 }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
