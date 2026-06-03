import React, { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { triggerGA4Event } from "../utils";

interface HeaderProps {
  onOpenModal: () => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCTAClick = (location: string) => {
    triggerGA4Event("Header CTA Clicked (Opened Triagem Modal)", { location });
    onOpenModal();
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 glass-header select-none transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a 
            href="#hero" 
            className="flex items-center space-x-2 group focus:outline-none"
            aria-label="Lumina Estética Avançada Home"
          >
            <div className="relative">
              <Sparkles className="h-6 w-6 text-brand-gold group-hover:rotate-12 transition-transform duration-300" />
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-sage opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-sage"></span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl tracking-widest text-brand-dark font-semibold">
                LUMINA
              </span>
              <span className="text-[9px] font-sans tracking-[0.25em] text-brand-muted uppercase -mt-1">
                Estética Avançada
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-sm font-sans tracking-wide">
            <a 
              href="#diferenciais" 
              className="text-brand-dark/80 hover:text-brand-sage font-medium transition-colors duration-250 cursor-pointer"
            >
              Diferenciais
            </a>
            <a 
              href="#procedimentos" 
              className="text-brand-dark/80 hover:text-brand-sage font-medium transition-colors duration-250 cursor-pointer"
            >
              Procedimentos
            </a>
            <a 
              href="#depoimentos" 
              className="text-brand-dark/80 hover:text-brand-sage font-medium transition-colors duration-250 cursor-pointer"
            >
              Experiências
            </a>
            <a 
              href="#faq" 
              className="text-brand-dark/80 hover:text-brand-sage font-medium transition-colors duration-250 cursor-pointer"
            >
              FAQ
            </a>
            <a 
              href="#localizacao" 
              className="text-brand-dark/80 hover:text-brand-sage font-medium transition-colors duration-250 cursor-pointer"
            >
              Localização
            </a>
          </nav>

          {/* CTA Header Button */}
          <div className="hidden md:block">
            <button
              onClick={() => handleCTAClick("desktop_header")}
              id="header-cta-btn"
              className="inline-flex items-center px-5 py-2.5 border border-brand-sage bg-brand-sage text-brand-light font-sans text-xs tracking-wider uppercase font-semibold rounded-none shadow-sm hover:bg-brand-sage-hover hover:border-brand-sage-hover transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-sage cursor-pointer"
            >
              Agendar Consulta
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-menu-toggle"
              type="button"
              className="text-brand-dark hover:text-brand-sage focus:outline-none p-2"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label="Abrir menu principal"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out bg-[#FAFAFA] border-b border-neutral-100 ${
          isOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0 pointer-events-none overflow-hidden"
        }`}
        id="mobile-menu"
      >
        <div className="px-4 space-y-4 pb-6 pt-2 font-sans text-center">
          <a
            href="#diferenciais"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 text-base font-medium text-brand-dark/95 hover:text-brand-sage hover:bg-neutral-50/80 transition-all rounded-sm"
          >
            Diferenciais
          </a>
          <a
            href="#procedimentos"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 text-base font-medium text-brand-dark/95 hover:text-brand-sage hover:bg-neutral-50/80 transition-all rounded-sm"
          >
            Procedimentos
          </a>
          <a
            href="#depoimentos"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 text-base font-medium text-brand-dark/95 hover:text-brand-sage hover:bg-neutral-50/80 transition-all rounded-sm"
          >
            Experiências
          </a>
          <a
            href="#faq"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 text-base font-medium text-brand-dark/95 hover:text-brand-sage hover:bg-neutral-50/80 transition-all rounded-sm"
          >
            FAQ
          </a>
          <a
            href="#localizacao"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 text-base font-medium text-brand-dark/95 hover:text-brand-sage hover:bg-neutral-50/80 transition-all rounded-sm"
          >
            Localização
          </a>
          
          <div className="pt-4 px-3">
            <button
              onClick={() => {
                handleCTAClick("mobile_drawer");
                setIsOpen(false);
              }}
              id="mobile-drawer-cta-btn"
              className="flex justify-center items-center w-full px-5 py-3 border border-brand-sage bg-brand-sage text-brand-light font-sans text-sm tracking-wider uppercase font-semibold hover:bg-brand-sage-hover transition-all duration-300 cursor-pointer"
            >
              Agendar Consulta
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
