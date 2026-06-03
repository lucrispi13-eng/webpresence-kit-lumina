import React from "react";
import { MessageSquare } from "lucide-react";
import { triggerGA4Event } from "../utils";

interface FloatingWhatsAppProps {
  onOpenModal: () => void;
}

export default function FloatingWhatsApp({ onOpenModal }: FloatingWhatsAppProps) {
  const handleClick = () => {
    triggerGA4Event("Floating WhatsApp Button Clicked (Opened Triagem Modal)", { source: "floating_pulse_button" });
    onOpenModal();
  };

  return (
    <button
      onClick={handleClick}
      id="floating-whatsapp-btn"
      className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 flex items-center justify-center bg-brand-sage hover:bg-brand-sage-hover text-brand-light shadow-xl hover:shadow-2xl transition-all duration-300 animate-whatsapp-pulse group focus:outline-none focus:ring-4 focus:ring-[#7A8B7B]/30 cursor-pointer"
      aria-label="Fale conosco para agendar sua consulta na Lumina"
    >
      <MessageSquare className="h-6 w-6 transform group-hover:rotate-12 duration-300 transition-transform" />
      
      {/* Tooltip elegante do lado esquerdo visível somente em hover no desktop para elevar a conversão */}
      <span className="absolute right-16 scale-0 group-hover:scale-100 transition-all duration-300 origin-right whitespace-nowrap bg-brand-dark/95 backdrop-blur-md text-brand-light text-[10px] uppercase font-sans tracking-widest font-semibold py-2 px-4 shadow-md pointer-events-none border border-neutral-800">
        Agendar Consulta ✨
      </span>
    </button>
  );
}
