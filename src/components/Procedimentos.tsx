import React, { useState } from "react";
import { Procedimento } from "../types";
import { triggerGA4Event } from "../utils";
import { Clock, Check, ArrowRight, X, Sparkles, Phone } from "lucide-react";

// TODO: Para performance 100/100 no Lighthouse, importe após colocar os arquivos locais no diretório adequado:
// import imgHarmonizacao from "../assets/procedimento-harmonizacao.webp";
// import imgRejuvenescimento from "../assets/procedimento-rejuvenescimento.webp";
// import imgLaser from "../assets/procedimento-laser.webp";

interface ProcedimentosProps {
  onOpenModal: () => void;
}

export default function Procedimentos({ onOpenModal }: ProcedimentosProps) {
  const [selectedProcedimento, setSelectedProcedimento] = useState<Procedimento | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("todos");

  const procedimentos: Procedimento[] = [
    {
      id: "procedimento-harmonizacao",
      title: "Harmonização Facial Individualizada",
      description: "Esculpimento facial refinado com preenchedores premium que devolve a sustentação de forma equilibrada.",
      longDescription: "Nossa Harmonização Facial compreende uma cuidadosa análise tridimensional das proporções da face. Através do uso de ácido hialurônico de alta pureza e biotecnologia avançada, preenchemos pontos estratégicos de sustentação (malar, mandíbula, queixo e olheiras). Focamos no refinamento, evitando a artificialidade e valorizando a sua identidade visual singular.",
      category: "harmonizacao",
      duration: "1h 30m de sessão",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=700&h=500&q=80", /* TODO: Substituir pelo local imgHarmonizacao */
      alt: "Avaliação tridimensional da estrutura do rosto de uma mulher",
      benefits: [
        "Reposição volumétrica das perdas ósseas e gordurosas",
        "Resultados visíveis imediatos com suavidade e naturalidade",
        "Correção sutil de assimetrias congênitas",
        "Produtos biocompatíveis e totalmente reversíveis",
        "Rápido retorno às atividades normais"
      ]
    },
    {
      id: "procedimento-rejuvenescimento",
      title: "Protocolo Regenera (Bioestimuladores)",
      description: "Tratamento de alto rendimento que estimula o colágeno natural para combater flacidez e rugas dinâmicas.",
      longDescription: "O Protocolo Regenera combina a aplicação estratégica de Bioestimuladores de colágeno (como Radiesse ou Sculptra) à aplicação focada de Toxina Botulínica de alta precisão. Este tratamento de dupla ação melhora a espessura cutânea, devolve a firmeza que o tempo desgastou e suaviza as rugas dinâmicas ao redor dos olhos e testa de forma suave e contínua.",
      category: "rejuvenescimento",
      duration: "1h de sessão",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&h=500&q=80", /* TODO: Substituir pelo local imgRejuvenescimento */
      alt: "Tratamento contra rugas com agulhas finas de alta precisão",
      benefits: [
        "Estímulo progressivo de colágeno natural por até 18 meses",
        "Melhora acentuada na textura e densidade da derme",
        "Suavização expressiva de linhas de expressão dinâmicas",
        "Prevenção eficaz contra flacidez futura",
        "Efeito lifting que se desenvolve gradativamente"
      ]
    },
    {
      id: "procedimento-laser",
      title: "Laser Lavieen & Ultraformer III",
      description: "Combinação tecnológica exclusiva para clareamento de melasma, poros e efeito cola na pele.",
      longDescription: "O auge da tecnologia estética está na junção do Laser Lavieen (efeito dermatológico BB Glow que uniformiza o tom da pele, fecham poros e clareia manchas e melasma) com a precisão microfocada do Ultraformer III. O Ultraformer envia ondas ultrassônicas que contraem as camadas profundas do músculo facial, gerando um efeito imediato de ancoragem e redução de papada.",
      category: "laser",
      duration: "45 min de sessão",
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=700&h=500&q=80", /* TODO: Substituir pelo local imgLaser */
      alt: "Procedimento estético moderno a laser para textura e pigmentação",
      benefits: [
        "Clareamento notável do melasma e manchas solares",
        "Efeito BB Laser: pele radiante e com poros ultra-fechados",
        "Efeito 'cola-pele' (Lifting muscular sem agulhas)",
        "Downtime mínimo para que você não precise parar sua rotina",
        "Ideal para rejuvenescimento global do colo, pescoço e face"
      ]
    }
  ];

  const filteredProcedimentos = activeCategory === "todos"
    ? procedimentos
    : procedimentos.filter(p => p.category === activeCategory);

  const openDetails = (proc: Procedimento) => {
    setSelectedProcedimento(proc);
    triggerGA4Event("Saber Mais Clicked", { procedimento: proc.title });
  };

  const closeDetails = () => {
    setSelectedProcedimento(null);
  };

  const handleModalCTAClick = (title: string) => {
    triggerGA4Event("WhatsApp Clinched inside Modal", { procedimento: title });
  };

  return (
    <section id="procedimentos" className="py-24 bg-brand-light relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-sans font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">
            Menu de Tratamentos
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-dark tracking-tight font-medium">
            Procedimentos Avançados de Próxima Geração
          </h2>
          <div className="h-[2px] w-12 bg-brand-sage mx-auto mt-6" />
          <p className="font-sans text-sm text-brand-muted mt-4">
            Cada protocolo é ajustado meticulosamente à arquitetura do seu rosto, utilizando matéria-prima certificada internacionalmente e tecnologias padrão ouro.
          </p>
        </div>

        {/* Filtros das Categorias */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-xl mx-auto">
          {[
            { id: "todos", label: "Todos os Procedimentos" },
            { id: "harmonizacao", label: "Harmonização" },
            { id: "rejuvenescimento", label: "Rejuvenescimento" },
            { id: "laser", label: "Tecnologia a Laser" }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 font-sans text-xs tracking-wider uppercase font-semibold transition-all duration-300 focus:outline-none ${
                activeCategory === cat.id
                  ? "bg-brand-sage text-brand-light shadow-sm"
                  : "bg-neutral-50 hover:bg-neutral-100 text-brand-dark/70 hover:text-brand-dark border border-neutral-200/50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid dos Procedimentos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProcedimentos.map((proc) => (
            <article 
              key={proc.id}
              id={proc.id}
              className="bg-[#FAFAFA] border border-neutral-200/60 overflow-hidden flex flex-col hover:border-brand-sage/30 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Imagem do Card */}
              <div className="relative aspect-[3/2] w-full overflow-hidden bg-neutral-200">
                {/* TODO: Substituir url por import de @/assets/procedimento-${proc.id}.webp para performance 100/100 no Lighthouse */}
                <img
                  src={proc.image}
                  alt={proc.alt}
                  className="w-full h-full object-cover transform scale-101 group-hover:scale-104 duration-500 transition-transform"
                  width="700"
                  height="500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                {/* Badge da Categoria */}
                <span className="absolute top-4 left-4 bg-brand-light/95 backdrop-blur-md border border-neutral-200 px-3 py-1 text-[9px] font-sans font-bold tracking-widest text-brand-sage uppercase">
                  {proc.category === "harmonizacao" ? "Harmonização" : proc.category === "rejuvenescimento" ? "Bioestimulação" : "Laser / Tecnologia"}
                </span>
              </div>

              {/* Corpo */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-serif text-xl text-brand-dark font-medium mb-3 group-hover:text-brand-sage transition-colors duration-250">
                  {proc.title}
                </h3>
                
                <p className="font-sans text-xs text-brand-muted leading-relaxed flex-grow mb-6">
                  {proc.description}
                </p>

                {/* Duração / Sessão */}
                <div className="flex items-center space-x-2 text-brand-gold/90 font-mono text-[11px] uppercase tracking-wider mb-6 pb-6 border-b border-neutral-200/40">
                  <Clock className="h-4 w-4 text-brand-gold" />
                  <span>{proc.duration}</span>
                </div>

                {/* Link Saber mais */}
                <button
                  onClick={() => openDetails(proc)}
                  className="inline-flex items-center space-x-2 text-brand-sage hover:text-brand-sage-hover text-xs font-sans tracking-widest uppercase font-bold focus:outline-none cursor-pointer self-start group/btn"
                >
                  <span>Saber mais</span>
                  <ArrowRight className="h-4 w-4 transform group-hover/btn:translate-x-1.5 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Modal / Slider de Detalhe Premium do Procedimento */}
      {selectedProcedimento && (
        <div 
          className="fixed inset-0 z-100 flex items-center justify-end bg-brand-dark/40 backdrop-blur-sm transition-opacity duration-300"
          onClick={closeDetails}
          id="modal-backdrop"
        >
          {/* Corpo do Modal no Canto Direito (Drawer Deslizante) */}
          <div 
            className="w-full max-w-2xl h-full bg-brand-light shadow-2xl p-6 sm:p-10 flex flex-col justify-between overflow-y-auto transform transition-transform duration-300 relative"
            onClick={(e) => e.stopPropagation()}
            id="modal-drawer"
          >
            <div>
              {/* Botão de Fechar */}
              <div className="flex justify-between items-center mb-8">
                <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-brand-gold">Detalhes Tratamento</span>
                <button 
                  onClick={closeDetails}
                  className="p-2 border border-neutral-100 hover:border-neutral-200 transition-colors text-brand-dark rounded-full focus:outline-none"
                  aria-label="Fechar detalhes"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Imagem no Modal */}
              <div className="relative aspect-[16/9] w-full bg-neutral-100 border border-neutral-200 mb-8 overflow-hidden">
                {/* TODO: Substituir url por import de @/assets/procedimento-${selectedProcedimento.id}-modal.webp para performance 100/100 no Lighthouse */}
                <img
                  src={selectedProcedimento.image}
                  alt={selectedProcedimento.alt}
                  className="w-full h-full object-cover"
                  header-alt={selectedProcedimento.title}
                  width="700"
                  height="500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Título e Texto */}
              <span className="text-[11px] font-sans font-semibold tracking-wider text-brand-sage uppercase bg-brand-sage/10 px-3 py-1 rounded-sm w-fit block mb-3">
                {selectedProcedimento.category === "harmonizacao" ? "Afinidade de Perfil" : selectedProcedimento.category === "rejuvenescimento" ? "Firmamento Celular" : "Luz Intensificada"}
              </span>
              
              <h3 className="font-serif text-2xl sm:text-3xl text-brand-dark font-medium mb-4">
                {selectedProcedimento.title}
              </h3>
              
              <p className="font-sans text-sm text-brand-muted leading-relaxed mb-8">
                {selectedProcedimento.longDescription}
              </p>

              {/* Benefícios */}
              <div className="mb-8">
                <h4 className="font-serif text-lg text-brand-dark font-medium mb-4 flex items-center space-x-2">
                  <Sparkles className="h-5 w-5 text-brand-gold" />
                  <span>Benefícios do Tratamento</span>
                </h4>
                
                <ul className="space-y-3 font-sans text-xs sm:text-sm text-brand-dark/95">
                  {selectedProcedimento.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start space-x-3 bg-neutral-50 p-3 border border-neutral-100">
                      <div className="p-0.5 bg-brand-sage/10 text-brand-sage rounded-full mt-0.5 flex-shrink-0">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <span className="leading-tight">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Final */}
            <div className="pt-6 border-t border-neutral-200/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-8">
              <div className="flex items-center space-x-3 text-brand-dark/75">
                <Clock className="h-5 w-5 text-brand-gold" />
                <span className="font-sans text-xs tracking-wider uppercase font-semibold text-brand-dark">{selectedProcedimento.duration}</span>
              </div>
              
              <button
                onClick={() => {
                  handleModalCTAClick(selectedProcedimento.title);
                  closeDetails();
                  onOpenModal();
                }}
                className="flex items-center justify-center space-x-2 bg-brand-sage hover:bg-brand-sage-hover text-brand-light font-sans text-xs tracking-widest uppercase font-semibold py-4 px-6 shadow-md transition-all duration-300 cursor-pointer focus:outline-none"
              >
                <Phone className="h-4 w-4 fill-current" />
                <span>Agendar Consulta</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
