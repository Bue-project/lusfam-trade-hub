import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import HeroSection from "@/components/HeroSection";
import ProductTilesSection from "@/components/ProductTilesSection";
import MapPreviewSection from "@/components/MapPreviewSection";
import TransactionFlowSection from "@/components/TransactionFlowSection";
import RFQModal from "@/components/RFQModal";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const Index = () => {
  const [rfqOpen, setRfqOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader onRequestQuote={() => setRfqOpen(true)} />
      <main className="flex-1">
        <HeroSection onRequestQuote={() => setRfqOpen(true)} />
        <ProductTilesSection />
        <MapPreviewSection />
        <TransactionFlowSection />
      </main>
      <SiteFooter />
      <WhatsAppFAB />
      <RFQModal open={rfqOpen} onClose={() => setRfqOpen(false)} />
    </div>
  );
};

export default Index;
