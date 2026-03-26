import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, CheckCircle, Truck, HandshakeIcon } from "lucide-react";
import { WA_QUOTE } from "@/lib/whatsapp";

const steps = [
  { icon: FileText, label: "Submit RFQ", description: "Send your requirements" },
  { icon: CheckCircle, label: "Confirmation", description: "Receive quote within 48h" },
  { icon: HandshakeIcon, label: "Agreement", description: "Finalize terms & INCOTERMS" },
  { icon: Truck, label: "Delivery", description: "Logistics & fulfillment" },
];

const TransactionFlowSection = () => {
  const lineRef = useRef(null);
  const isInView = useInView(lineRef, { once: true, margin: "-100px" });
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section className="section-spacing">
      <div className="container-site">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ease: [0.32, 0.72, 0, 1], duration: 0.4 }}
        >
          <div className="ui-label text-primary mb-3">How It Works</div>
          <h2>From Inquiry to Delivery</h2>
        </motion.div>

        <div ref={lineRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Animated connector line */}
          <motion.div
            className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-primary/20 origin-left"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, ease: [0.32, 0.72, 0, 1], delay: 0.2 }}
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            const isHovered = hoveredStep === i;
            return (
              <motion.div
                key={step.label}
                className={`flex flex-col items-center text-center relative ${i === 0 ? "cursor-pointer" : "cursor-default"}`}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ ease: [0.32, 0.72, 0, 1], duration: 0.4, delay: i * 0.12 }}
                onMouseEnter={() => setHoveredStep(i)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <motion.div
                  className={`h-20 w-20 rounded-full flex items-center justify-center mb-4 relative z-10 transition-colors duration-200 ${
                    isHovered ? "bg-primary/20 ring-2 ring-primary/40" : "bg-primary/10"
                  }`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.12, duration: 0.4, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.08 }}
                >
                  <Icon className={`h-8 w-8 transition-colors duration-200 ${isHovered ? "text-primary" : "text-primary"}`} />
                </motion.div>
                <div className="ui-label text-primary mb-1">Step {i + 1}</div>
                {i === 0 ? (
                  <a
                    href={WA_QUOTE}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-semibold mb-1 text-primary hover:underline"
                  >
                    {step.label}
                  </a>
                ) : (
                  <h3 className="text-base font-semibold mb-1">{step.label}</h3>
                )}
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TransactionFlowSection;
