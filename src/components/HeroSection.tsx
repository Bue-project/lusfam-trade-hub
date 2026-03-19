import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-terminal.jpg";

const easeSmooth: [number, number, number, number] = [0.32, 0.72, 0, 1];

interface HeroSectionProps {
  onRequestQuote: () => void;
}

const HeroSection = ({ onRequestQuote }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden">
      <div className="container-site py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: easeSmooth, duration: 0.5 }}
          >
            <div className="ui-label text-primary">Energy Trading</div>
            <h1 className="text-foreground">
              Fueling Southern Africa.{" "}
              <span className="text-primary">Reliably.</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              LusFam Energy Trading is a trusted partner for the procurement
              and delivery of bulk petroleum products across Zimbabwe, Zambia,
              Botswana, Malawi, and Mozambique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="lg" onClick={onRequestQuote}>
                Request a Quote
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href="/products">View Products</a>
              </Button>
            </div>
          </motion.div>

          {/* Right image */}
          <motion.div
            className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[480px]"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ease: [0.32, 0.72, 0, 1], duration: 0.6, delay: 0.1 }}
          >
            <img
              src={heroImage}
              alt="Petroleum tanker terminal facility"
              className="w-full h-full object-cover"
            />
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
