import { motion } from "framer-motion";
import { FileText, CheckCircle, Truck, HandshakeIcon } from "lucide-react";

const steps = [
  { icon: FileText, label: "Submit RFQ", description: "Send your requirements" },
  { icon: CheckCircle, label: "Confirmation", description: "Receive quote within 48h" },
  { icon: HandshakeIcon, label: "Agreement", description: "Finalize terms & INCOTERMS" },
  { icon: Truck, label: "Delivery", description: "Logistics & fulfillment" },
];

const TransactionFlowSection = () => {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-border" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.label}
                className="flex flex-col items-center text-center relative"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ ease: [0.32, 0.72, 0, 1], duration: 0.4, delay: i * 0.08 }}
              >
                <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mb-4 relative z-10">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <div className="ui-label text-primary mb-1">Step {i + 1}</div>
                <h3 className="text-base font-semibold mb-1">{step.label}</h3>
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
