import React from "react";
import { Sparkles, Phone, Mail, Clock, ShieldCheck, Instagram, Facebook, Youtube } from "lucide-react";
import { triggerGA4Event, WHATSAPP_URL } from "../utils";

export default function Footer() {
  const handleSocialClick = (socialName: string) => {
    triggerGA4Event("Social Media Link Clicked", { social: socialName });
  };

  const handleLinkClick = (hash: string) => {
    triggerGA4Event("Footer Nav Link Clicked", { link: hash });
  };

  return (
    <footer className="bg-brand-dark text-[#D4D4D4] font-sans selection:bg-brand-gold/20 selection:text-brand-gold">
      
      {/* Corpo principal do Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-9">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-5 border-b border-neutral-800 pb-6">
          
          {/* Col 1: Lumina Brand Identity & Descrição (4 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <a 
              href="#hero" 
              onClick={() => handleLinkClick("#hero")}
              className="flex items-center space-x-2 group focus:outline-none"
              aria-label="Lumina Estética Avançada Home"
            >
              <Sparkles className="h-6 w-6 text-brand-gold" />
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl tracking-widest text-[#FAFAFA] font-semibold">
                  LUMINA
                </span>
                <span className="text-[9px] tracking-[0.25em] text-[#FAFAFA]/65 uppercase -mt-1 font-medium">
                  Estética Avançada
                </span>
              </div>
            </a>
            
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
              Clínica de excelência estética focada no rejuvenescimento facial progressivo, harmonização elegante e tecnologias laser de ponta sob os mais rigorosos cuidados médicos.
            </p>

            {/* Redes Sociais */}
            <div className="flex items-center space-x-4 pt-2">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => handleSocialClick("Instagram")}
                className="p-2 bg-neutral-900 border border-neutral-800 hover:border-brand-gold text-neutral-400 hover:text-brand-gold transition-all duration-300 rounded-none"
                aria-label="Siga-nos no Instagram"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => handleSocialClick("Facebook")}
                className="p-2 bg-neutral-900 border border-neutral-800 hover:border-brand-gold text-neutral-400 hover:text-brand-gold transition-all duration-300 rounded-none"
                aria-label="Curta no Facebook"
              >
                <Facebook className="h-4.5 w-4.5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => handleSocialClick("Youtube")}
                className="p-2 bg-neutral-900 border border-neutral-800 hover:border-brand-gold text-neutral-400 hover:text-brand-gold transition-all duration-300 rounded-none"
                aria-label="Inscreva-se no Youtube"
              >
                <Youtube className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Atalhos de Navegação Rápida (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-serif text-sm text-[#FAFAFA] tracking-wider uppercase font-semibold border-l-2 border-brand-gold pl-3">
              Navegação
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-medium">
              <li>
                <a 
                  href="#diferenciais" 
                  onClick={() => handleLinkClick("#diferenciais")}
                  className="hover:text-brand-gold transition-colors block text-neutral-300"
                >
                  Diferenciais do Espaço
                </a>
              </li>
              <li>
                <a 
                  href="#procedimentos" 
                  onClick={() => handleLinkClick("#procedimentos")}
                  className="hover:text-brand-gold transition-colors block text-neutral-300"
                >
                  Procedimentos & Protocolos
                </a>
              </li>
              <li>
                <a 
                  href="#depoimentos" 
                  onClick={() => handleLinkClick("#depoimentos")}
                  className="hover:text-brand-gold transition-colors block text-neutral-300"
                >
                  Avaliações das Clientes
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  onClick={() => handleLinkClick("#faq")}
                  className="hover:text-brand-gold transition-colors block text-neutral-300"
                >
                  Perguntas Frequentes FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#localizacao" 
                  onClick={() => handleLinkClick("#localizacao")}
                  className="hover:text-brand-gold transition-colors block text-neutral-300"
                >
                  Localização nos Jardins
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Detalhes do Negócio Local e Atendimento (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="font-serif text-sm text-[#FAFAFA] tracking-wider uppercase font-semibold border-l-2 border-brand-gold pl-3">
              Atendimento & Contato
            </h4>
            <div className="space-y-4 text-xs sm:text-sm text-neutral-400 font-medium">
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[#FAFAFA]">Horário de Funcionamento</span>
                  <span className="text-2xs text-neutral-400 mt-1 leading-normal">
                    Segunda a Sexta: 09h às 20h<br />
                    Sábados: 09h às 14h
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3 pt-2">
                <Phone className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[#FAFAFA]">Telefones</span>
                  <a href="tel:+551132345678" className="hover:text-brand-gold transition-colors mt-0.5">
                    (11) 3234-5678 (Fixo)
                  </a>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-brand-sage hover:text-brand-sage-hover font-semibold transition-colors mt-0.5">
                    (11) 99999-8888 (WhatsApp)
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 pt-2">
                <Mail className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[#FAFAFA]">E-mail</span>
                  <a href="mailto:contato@luminaestetica.com.br" className="hover:text-brand-gold transition-colors mt-0.5">
                    contato@luminaestetica.com.br
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Sub-Footer: Contém os dados burocráticos obrigatórios (CNPJ, Prop de Direitos, CRM RQE) */}
      <div className="bg-[#171717] text-neutral-500 font-sans text-[11px] sm:text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Informações Técnicas Médicas */}
            <div className="lg:col-span-8 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
              <div className="flex items-center space-x-1.5 text-neutral-400">
                <ShieldCheck className="h-4.5 w-4.5 text-brand-sage shrink-0" />
                <span className="font-semibold text-neutral-300">Diretoria Técnica</span>
              </div>
              <p className="leading-relaxed">
                Dra. Beatriz Lumina • CRM/SP 123456 • RQE 78910 (Membro SBCD)<br className="sm:hidden" />
                <span className="hidden sm:inline"> | </span> Clínica Lumina Estética Avançada Ltda.
              </p>
            </div>

            {/* Copyright e CNPJ */}
            <div className="lg:col-span-4 lg:text-right space-y-1">
              <p className="leading-tight">CNPJ: 14.891.562/0001-38</p>
              <p className="leading-tight">
                &copy; {new Date().getFullYear()} Lumina Estética. Todos os direitos reservados.
              </p>
            </div>

          </div>
        </div>
      </div>

    </footer>
  );
}
