import React from "react";
import { MapPin, Navigation, Compass, ShieldAlert, Car, Clock } from "lucide-react";
import { triggerGA4Event } from "../utils";

export default function Localizacao() {
  const MAP_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.123281488177!2d-46.66453472379762!3d-23.56123416124578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da06c17b%3s0x94ce59c1186e8888!2sAlameda%20Lorena%2C%201500%20-%20Cerqueira%20C%C3%A9sar%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001424-002!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr";
  
  const handleDirectionsClick = () => {
    triggerGA4Event("Directions Navigation Clicked", { destination: "Alameda Lorena, 1500" });
  };

  return (
    <section id="localizacao" className="pt-4 pb-8 md:pt-5 md:pb-8 bg-neutral-50/50 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <span className="text-[11px] font-sans font-bold tracking-[0.25em] text-brand-gold uppercase block mb-1.5">
            Onde Estamos
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-dark tracking-tight font-medium">
            Sua Experiência Exclusiva nos Jardins
          </h2>
          <div className="h-[2px] w-12 bg-brand-sage mx-auto mt-2" />
          <p className="font-sans text-xs sm:text-sm text-brand-muted mt-2">
            Em localização privilegiada em São Paulo, nosso espaço foi inteiramente projetado para garantir privacidade máxima e conforto sensorial absoluto.
          </p>
        </div>

        {/* Bloco de Localização */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Card Detalhado de Acesso (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-brand-light border border-neutral-200/80 p-5 sm:p-6 shadow-sm relative">
            
            <div className="space-y-4">
              {/* Logo / Tag */}
              <div className="flex items-center space-x-2 text-brand-sage">
                <MapPin className="h-5 w-5 stroke-1.5" />
                <span className="font-serif text-lg tracking-wide font-medium text-brand-dark">Localização Nobre</span>
              </div>

              {/* Endereço */}
              <div className="space-y-1">
                <p className="font-serif text-base text-brand-dark font-semibold leading-snug">
                  Alameda Lorena, 1500
                </p>
                <p className="font-sans text-xs text-brand-muted leading-relaxed">
                  Cerqueira César, São Paulo - SP<br />
                  CEP 01424-002 (Próximo aos Jardins)
                </p>
              </div>

              {/* Serviços do Prédio */}
              <div className="space-y-2.5 pt-4 border-t border-neutral-100 font-sans text-xs text-brand-dark/95">
                <div className="flex items-center space-x-2.5">
                  <div className="p-1.5 bg-neutral-50 border border-neutral-100 text-brand-gold rounded-full">
                    <Car className="h-4 w-4" />
                  </div>
                  <span>Serviço de Valet com Manobrista no Local</span>
                </div>

                <div className="flex items-center space-x-2.5">
                  <div className="p-1.5 bg-neutral-50 border border-neutral-100 text-brand-sage rounded-full">
                    <Compass className="h-4 w-4" />
                  </div>
                  <span>A 5 minutos a pé do Metrô Consolação</span>
                </div>

                <div className="flex items-center space-x-2.5">
                  <div className="p-1.5 bg-neutral-50 border border-neutral-100 text-brand-gold rounded-full">
                    <Clock className="h-4 w-4" />
                  </div>
                  <span>Atendimento estritamente com hora marcada</span>
                </div>
              </div>
            </div>

            {/* Como Chegar - Direct Button */}
            <div className="pt-4 mt-4 border-t border-neutral-100">
              <a
                href="https://maps.google.com/?q=Alameda+Lorena+1500+Sao+Paulo"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDirectionsClick}
                id="location-directions-btn"
                className="flex items-center justify-center space-x-2 w-full bg-brand-dark hover:bg-brand-sage text-brand-light font-sans text-2xs tracking-widest uppercase font-semibold py-3 px-4 transition-all duration-300"
              >
                <Navigation className="h-3.5 w-3.5" />
                <span>Como Chegar (Google Maps)</span>
              </a>
            </div>

          </div>

          {/* Iframe Mapa do Google Otimizado para Performance (7 cols) */}
          <div className="lg:col-span-7 h-[350px] lg:h-auto min-h-[300px] border border-neutral-200 shadow-sm relative overflow-hidden bg-neutral-100 group">
            {/* Elemento de Loading visual elegante enquanto o mapa não carrega */}
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-50 z-0 pointer-events-none">
              <div className="flex flex-col items-center space-y-2 font-serif text-sm text-brand-muted">
                <Compass className="h-8 w-8 text-brand-gold animate-spin" />
                <span>Carregando mapa interativo...</span>
              </div>
            </div>

            <iframe
              title="Mapa de localização da Lumina Estética Avançada SP"
              src={MAP_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full relative z-10 filter grayscale-15 contrast-102 hover:grayscale-0 transition-all duration-700 pointer-events-auto"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}
