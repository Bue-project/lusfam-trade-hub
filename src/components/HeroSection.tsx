import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-terminal.jpg";
import { WA_QUOTE } from "@/lib/whatsapp";

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
        {/* Primary overlay: cinematic dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060D18]/95 via-[#060D18]/70 to-[#060D18]/25" />
        {/* Bottom vignette: seamless blend into next section */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060D18] via-transparent to-[#060D18]/30" />
      </div>

      <div className="relative z-10 container-site pt-32 pb-24 lg:pt-40 lg:pb-32 w-full">
        <div className="max-w-2xl">
          {/* Gold label pill */}
          <motion.div
            className="inline-flex items-center gap-2 border border-[#D4A017]/35 bg-[#D4A017]/10 rounded-full px-4 py-1.5 mb-6"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: easeSmooth }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4A017] animate-pulse" />
            <span className="text-[#D4A017] text-xs font-semibold tracking-widest uppercase">
              Petroleum Facilitation · Southern Africa
            </span>
          </motion.div>

          <h1 className="text-white mb-6">
            {["Bulk", "Petroleum.", "Facilitated."].map((word, i) => (
              <motion.span
                key={word}
                className="inline-block mr-[0.25em]"
                custom={i}
                initial="hidden"
                animate="visible"
                variants={wordVariants}
              >
                {word}
              </motion.span>
            ))}
            <br />
            <motion.span
              className="inline-block"
              style={{ color: "#D4A017", filter: "drop-shadow(0 0 18px #D4A01755)" }}
              initial={{ opacity: 0, scale: 0.88, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.65, ease: easeSmooth }}
            >
              Reliably.
            </motion.span>
          </h1>

          <motion.p
            className="text-white/70 text-lg leading-relaxed mb-10 max-w-xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.58, duration: 0.55, ease: easeSmooth }}
          >
            LusFam Energy Trading facilitates structured supply transactions
            for Jet Fuel, EN590 Diesel, Petrol, and LPG — coordinated under
            FOB TTT and FOB TTV terms across Zimbabwe, Zambia, Botswana,
            Malawi, and Mozambique. We do not hold title to product.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72, duration: 0.48, ease: easeSmooth }}
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                asChild
                className="bg-[#D4A017] hover:bg-[#C4920A] text-[#060D18] font-semibold shadow-[0_0_28px_hsl(42_89%_45%/0.45)] hover:shadow-[0_0_40px_hsl(42_89%_45%/0.65)] transition-all duration-300"
              >
                <a href={WA_QUOTE} target="_blank" rel="noopener noreferrer">
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-white/25 text-white bg-white/8 hover:bg-white/15 backdrop-blur-sm"
                asChild
              >
                <a href="/products">View Products</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
