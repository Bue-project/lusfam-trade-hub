import { MessageCircle } from "lucide-react";

const WhatsAppFAB = () => {
  return (
    <a
      href="https://wa.me/263771234567"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 lg:hidden h-14 w-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="h-6 w-6 text-background" />
    </a>
  );
};

export default WhatsAppFAB;
