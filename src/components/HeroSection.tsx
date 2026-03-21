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
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.3 + i * 0.12, duration: 0.5, ease: easeSmooth },
    }),
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      <div className="container-site py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: easeSmooth, duration: 0.5 }}
          >
            <div className="ui-label text-primary">Energy Trading</div>
            <h1 className="text-foreground">
              {["Fueling", "Southern", "Africa."].map((word, i) => (
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
              <br />
              <motion.span
                className="text-primary inline-block"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6, ease: easeSmooth }}
              >
                Reliably.
              </motion.span>
            </h1>
            <p className="text-muted-foreground text-lg">
              LusFam Energy Trading is a trusted partner for the procurement
              and delivery of bulk petroleum products across Zimbabwe, Zambia,
              Botswana, Malawi, and Mozambique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  size="lg"
                  onClick={onRequestQuote}
                  className="relative overflow-hidden shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-shadow duration-300"
                >
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button size="lg" variant="secondary" asChild>
                  <a href="/products">View Products</a>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[480px]"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ease: easeSmooth, duration: 0.6, delay: 0.1 }}
          >
            <motion.img
              src={heroImage}
              alt="Petroleum tanker terminal facility"
              className="w-full h-full object-cover"
              style={{ y: imageY }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
