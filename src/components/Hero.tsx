import React from "react";
import { MessageSquare, Sparkles, ShieldCheck, Award, ThumbsUp, Calendar } from "lucide-react";
import { triggerGA4Event } from "../utils";

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  const handleCTAClick = () => {
    triggerGA4Event("Hero CTA Button Clicked (Opened Triagem Modal)", { element: "hero_primary_button" });
    onOpenModal();
  };

  const getMesAtual = () => {
    const meses = [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    return meses[new Date().getMonth()];
  };

  return (
    <section 
      id="hero" 
      className="relative pt-28 pb-14 md:pt-36 md:pb-24 overflow-hidden bg-brand-light"
    >
      {/* Decorative subtle visual elements to represent high-end aesthetics without CLS */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-sage/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Informações da Esquerda (Textos e CTAs) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Tag Exclusiva */}
            <div className="inline-flex items-center space-x-2 bg-[#7A8B7B]/10 border border-[#7A8B7B]/20 px-3.5 py-1.5 rounded-full w-fit">
              <Sparkles className="h-4 w-4 text-brand-sage animate-spin-slow" />
              <span className="text-[11px] font-sans font-semibold tracking-wider text-brand-sage uppercase">
                Estética Avançada Premium Jardins • SP
              </span>
            </div>

            {/* Título de Forte Impacto H1 */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-brand-dark leading-[1.1] tracking-tight font-medium">
              Realce sua <span className="italic text-brand-sage">beleza natural</span> com alta tecnologia médica em São Paulo
            </h1>

            {/* Subtítulo focado em Segurança e Exclusividade */}
            <p className="font-sans text-base sm:text-lg text-brand-muted max-w-xl leading-relaxed">
              Tratamentos dermatológicos e corporais sob medida, que unem a precisão da ciência à arte da harmonização facial. Experiência de alto luxo com foco em resultados elegantes e seguros.
            </p>

            {/* Botões de Conversão */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <button
                onClick={handleCTAClick}
                id="hero-cta-whatsapp"
                className="flex items-center justify-center space-x-3 bg-brand-sage hover:bg-brand-sage-hover text-brand-light font-sans text-sm tracking-wider uppercase font-semibold py-4 px-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-sage"
              >
                <MessageSquare className="h-5 w-5 fill-current" />
                <span>Agendar Avaliação</span>
              </button>

              <a
                href="#procedimentos"
                id="hero-secondary-btn"
                className="flex items-center justify-center space-x-2 border border-brand-dark/20 hover:border-brand-sage text-brand-dark hover:text-brand-sage font-sans text-xs tracking-wider uppercase font-semibold py-4 px-8 transition-all duration-300"
              >
                <span>Conhecer Nossos Tratamentos</span>
              </a>
            </div>

            {/* Gatilho de Escassez Elegante no Hero */}
            <div className="text-[11px] uppercase tracking-wider text-brand-muted flex items-center gap-2 mt-4">
              <Calendar className="h-3.5 w-3.5 shrink-0 text-brand-gold" />
              <span>Agenda de {getMesAtual()} com últimas disponibilidades para novos pacientes.</span>
            </div>

            {/* Selos de Confiança (Segurança, Profissionalismo, etc.) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 pt-8 border-t border-brand-dark/5">
              <div id="hero-badge-1" className="flex items-center space-x-2.5">
                <div className="p-2 bg-[#C5A880]/10 text-brand-gold rounded-full">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-brand-dark">Segurança</span>
                  <span className="text-[10px] text-brand-muted">Protocolos Médicos</span>
                </div>
              </div>

              <div id="hero-badge-2" className="flex items-center space-x-2.5">
                <div className="p-2 bg-[#7A8B7B]/10 text-brand-sage rounded-full">
                  <Award className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-brand-dark">Especialistas</span>
                  <span className="text-[10px] text-brand-muted">Membros SBCD</span>
                </div>
              </div>

              <div id="hero-badge-3" className="flex items-center space-x-2.5 col-span-2 sm:col-span-1">
                <div className="p-2 bg-[#C5A880]/10 text-brand-gold rounded-full">
                  <ThumbsUp className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-brand-dark">Satisfação</span>
                  <span className="text-[10px] text-brand-muted">+1.500 Clientes</span>
                </div>
              </div>
            </div>

          </div>

          {/* Imagem da Direita (Visual Premium) */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Frame de Luxo ao Redor da Imagem Principal */}
            <div className="relative w-full max-w-[400px] aspect-[4/5] bg-neutral-100 border border-neutral-200 shadow-xl overflow-hidden group">
              {/* Overlay suave */}
              <div className="absolute inset-0 bg-brand-dark/5 group-hover:bg-transparent transition-all duration-500 z-10" />
              
              {/* Imagem Premium de Skincare / Tratamento Clínico */}
              {/* TODO: Substituir url por import de @/assets/hero-primary.webp para performance 100/100 no Lighthouse */}
              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&h=1000&q=80"
                alt="Procedimento de estética avançada com dermatologista na Lumina Estética"
                className="w-full h-full object-cover transform scale-102 group-hover:scale-105 duration-700 transition-transform"
                width="800"
                height="1000"
                referrerPolicy="no-referrer"
              />

              {/* Badges de Destaque sobre a Imagem */}
              <div className="absolute bottom-6 left-6 right-6 bg-brand-light/95 backdrop-blur-md p-4 border border-brand-gold/20 flex items-center justify-between z-20">
                <div className="flex flex-col">
                  <span className="text-[10px] text-brand-muted font-sans uppercase tracking-[0.2em]">Tecnologia</span>
                  <span className="text-sm text-brand-dark font-serif font-semibold">Fotona & Ultraformer III</span>
                </div>
                <div className="h-8 w-[1px] bg-neutral-200" />
                <div className="flex flex-col items-end">
                  <span className="text-[10px] text-brand-muted font-sans uppercase tracking-[0.2em]">Padrão</span>
                  <span className="text-sm text-brand-sage font-sans font-semibold">Fino e Natural</span>
                </div>
              </div>
            </div>

            {/* Imagem Secundária Decorativa Flutuante (Somente Desktop para dar Profundidade Visual) */}
            <div className="hidden xl:block absolute -bottom-10 -left-12 w-48 aspect-square bg-brand-light border border-neutral-100 shadow-2xl p-2.5 z-30 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-full h-full relative overflow-hidden bg-neutral-200">
                {/* TODO: Substituir url por import de @/assets/hero-secondary.webp para performance 100/100 no Lighthouse */}
                <img
                  src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&w=300&h=300&q=80"
                  alt="Tratamento facial detalhado"
                  className="w-full h-full object-cover"
                  width="300"
                  height="300"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-[9px] uppercase tracking-wider text-brand-muted text-center pt-1 mt-0.5 font-sans font-medium">
                Cuidado Personalizado
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
