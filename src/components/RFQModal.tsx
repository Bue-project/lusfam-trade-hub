import { useState } from "react";
import { X, Upload, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface RFQModalProps {
  open: boolean;
  onClose: () => void;
}

const products = ["Diesel (AGO)", "Petrol (PMS)", "Jet Fuel (Jet A-1)", "LPG"];
const incoterms = ["FOB", "CIF", "CFR", "DDP", "DAP", "EXW"];

const RFQModal = ({ open, onClose }: RFQModalProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    product: "",
    grade: "",
    quantity: "",
    unit: "MT",
    deliveryFrom: "",
    deliveryTo: "",
    incoterm: "",
    location: "",
    contactName: "",
    company: "",
    email: "",
    phone: "",
    confidential: false,
  });

  const updateField = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" onClick={onClose} />

        {/* Modal */}
        <motion.div
          className="relative bg-background rounded-2xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          initial={{ opacity: 0, scale: 0.97, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 8 }}
          transition={{ ease: [0.32, 0.72, 0, 1], duration: 0.3 }}
        >
          {/* Header */}
          <div className="sticky top-0 bg-background border-b border-border px-6 py-4 flex items-center justify-between rounded-t-2xl z-10">
            <div>
              <h2 className="text-xl font-bold">Request for Quote</h2>
              <p className="text-sm text-muted-foreground">Submit your requirements and we'll respond within 48 hours.</p>
            </div>
            <button
              onClick={onClose}
              className="h-10 w-10 rounded-lg flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {submitted ? (
            <div className="p-12 text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">RFQ Submitted Successfully</h3>
              <p className="text-muted-foreground">
                Your reference number is <span className="font-mono font-semibold text-foreground">RFQ-{Date.now().toString(36).toUpperCase()}</span>.
                Our trade desk will respond within 48 hours.
              </p>
              <Button onClick={onClose} className="mt-4">Close</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="p-6 grid lg:grid-cols-3 gap-6">
                {/* Form fields */}
                <div className="lg:col-span-2 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="ui-label block mb-1.5">Product *</label>
                      <select
                        required
                        value={formData.product}
                        onChange={(e) => updateField("product", e.target.value)}
                        className="w-full bg-muted rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background outline-none"
                      >
                        <option value="">Select product</option>
                        {products.map((p) => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="ui-label block mb-1.5">Grade / Spec</label>
                      <input
                        type="text"
                        placeholder="e.g. EN 590, RON 95"
                        value={formData.grade}
                        onChange={(e) => updateField("grade", e.target.value)}
                        className="w-full bg-muted rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="ui-label block mb-1.5">Quantity *</label>
                      <div className="flex gap-2">
                        <input
                          type="number"
                          required
                          placeholder="10,000"
                          value={formData.quantity}
                          onChange={(e) => updateField("quantity", e.target.value)}
                          className="flex-1 bg-muted rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background outline-none"
                        />
                        <select
                          value={formData.unit}
                          onChange={(e) => updateField("unit", e.target.value)}
                          className="bg-muted rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background outline-none"
                        >
                          <option>MT</option>
                          <option>Litres</option>
                          <option>Barrels</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="ui-label block mb-1.5">INCOTERMS *</label>
                      <select
                        required
                        value={formData.incoterm}
                        onChange={(e) => updateField("incoterm", e.target.value)}
                        className="w-full bg-muted rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background outline-none"
                      >
                        <option value="">Select term</option>
                        {incoterms.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="ui-label block mb-1.5">Delivery Window *</label>
                      <div className="flex gap-2">
                        <input
                          type="date"
                          required
                          value={formData.deliveryFrom}
                          onChange={(e) => updateField("deliveryFrom", e.target.value)}
                          className="flex-1 bg-muted rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background outline-none"
                        />
                        <input
                          type="date"
                          value={formData.deliveryTo}
                          onChange={(e) => updateField("deliveryTo", e.target.value)}
                          className="flex-1 bg-muted rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="ui-label block mb-1.5">Delivery Location *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Beira Port, Mozambique"
                        value={formData.location}
                        onChange={(e) => updateField("location", e.target.value)}
                        className="w-full bg-muted rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background outline-none"
                      />
                    </div>
                  </div>

                  <hr className="border-border" />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="ui-label block mb-1.5">Contact Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.contactName}
                        onChange={(e) => updateField("contactName", e.target.value)}
                        className="w-full bg-muted rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background outline-none"
                      />
                    </div>
                    <div>
                      <label className="ui-label block mb-1.5">Company *</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => updateField("company", e.target.value)}
                        className="w-full bg-muted rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="ui-label block mb-1.5">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        className="w-full bg-muted rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background outline-none"
                      />
                    </div>
                    <div>
                      <label className="ui-label block mb-1.5">Phone</label>
                      <input
                        type="tel"
                        placeholder="+263 7XX XXX XXX"
                        value={formData.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        className="w-full bg-muted rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background outline-none"
                      />
                    </div>
                  </div>

                  {/* File upload area */}
                  <div>
                    <label className="ui-label block mb-1.5">Attachments</label>
                    <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary/40 transition-colors cursor-pointer">
                      <Upload className="h-6 w-6 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Drag & drop or click to upload (PDF, DOCX, max 10MB)
                      </p>
                    </div>
                  </div>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.confidential}
                      onChange={(e) => updateField("confidential", e.target.checked)}
                      className="rounded border-border"
                    />
                    <span className="text-sm text-muted-foreground">
                      This inquiry is confidential
                    </span>
                  </label>
                </div>

                {/* Summary card */}
                <div className="hidden lg:block">
                  <div className="sticky top-24 bg-muted rounded-xl p-5 space-y-4">
                    <h4 className="font-semibold text-sm">RFQ Summary</h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="text-muted-foreground">Product:</span>
                        <span className="ml-2 font-medium">{formData.product || "—"}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Quantity:</span>
                        <span className="ml-2 font-medium">{formData.quantity ? `${formData.quantity} ${formData.unit}` : "—"}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">INCOTERMS:</span>
                        <span className="ml-2 font-medium">{formData.incoterm || "—"}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Location:</span>
                        <span className="ml-2 font-medium">{formData.location || "—"}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Company:</span>
                        <span className="ml-2 font-medium">{formData.company || "—"}</span>
                      </div>
                    </div>
                    <hr className="border-border" />
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Shield className="h-3.5 w-3.5" />
                      <span>Data encrypted in transit</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="sticky bottom-0 bg-background border-t border-border px-6 py-4 flex items-center justify-between gap-4 rounded-b-2xl">
                <Button type="button" variant="outline" onClick={onClose}>
                  Save Draft
                </Button>
                <Button type="submit">
                  Submit RFQ
                </Button>
              </div>
            </form>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RFQModal;
