import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import StatsSection from "@/components/StatsSection";
import ProductTilesSection from "@/components/ProductTilesSection";
import MapPreviewSection from "@/components/MapPreviewSection";
import TransactionFlowSection from "@/components/TransactionFlowSection";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <TrustBar />
        <WhoWeAreSection />
        <StatsSection />
        <ProductTilesSection />
        <MapPreviewSection />
        <TransactionFlowSection />
      </main>
      <SiteFooter />
      <WhatsAppFAB />
    </div>
  );
};

export default Index;
