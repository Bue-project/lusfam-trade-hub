import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-terminal.jpg";

const easeSmooth: [number, number, number, number] = [0.32, 0.72, 0, 1];

interface HeroSectionProps {
  onRequestQuote: () => void;
}

const HeroSection = ({ onRequestQuote }: HeroSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  const wordVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.2 + i * 0.1, duration: 0.55, ease: easeSmooth },
    }),
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden min-h-[calc(100vh-5rem)] flex items-center"
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={heroImage}
          alt="Petroleum tanker terminal facility"
          className="w-full h-full object-cover"
          style={{ y: imageY }}
          initial={{ scale: 1.04 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: easeSmooth }}
        />
        {/* Overlay: strong on left for text legibility, fades out right */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/55 to-secondary/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 container-site py-20 lg:py-28 w-full">
        <div className="max-w-2xl">
          <motion.div
            className="ui-label text-primary mb-5"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: easeSmooth }}
          >
            Petroleum Facilitation · Southern Africa
          </motion.div>

          <h1 className="text-white mb-6">
            {["Bulk", "Petroleum.", "Delivered."].map((word, i) => (
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
              className="text-primary inline-block"
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.62, duration: 0.6, ease: easeSmooth }}
            >
              Reliably.
            </motion.span>
          </h1>

          <motion.p
            className="text-white/75 text-lg leading-relaxed mb-8 max-w-xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5, ease: easeSmooth }}
          >
            LusFam Energy Trading is a legalized petroleum facilitator
            specialising in Jet Fuel, EN590 Diesel, Petrol, and LPG —
            delivered under FOB TTT and FOB TTV terms across Zimbabwe,
            Zambia, Botswana, Malawi, and Mozambique.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.68, duration: 0.45, ease: easeSmooth }}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button
                size="lg"
                onClick={onRequestQuote}
                className="shadow-[0_0_24px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_36px_hsl(var(--primary)/0.6)] transition-shadow duration-300"
              >
                Request a Quote
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                asChild
              >
                <a href="/products">View Products</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
