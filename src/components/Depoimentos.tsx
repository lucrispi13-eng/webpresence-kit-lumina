import React from "react";
import { Star, CheckCircle, ShieldCheck } from "lucide-react";
import { Depoimento } from "../types";

// TODO: Para performance 100/100 no Lighthouse, importe após colocar os arquivos locais no diretório adequado:
// import imgAvatar1 from "../assets/depoimento-1.webp";
// import imgAvatar2 from "../assets/depoimento-2.webp";
// import imgAvatar3 from "../assets/depoimento-3.webp";

export default function Depoimentos() {
  const avaliacoes: Depoimento[] = [
    {
      id: "dep-1",
      name: "Mariana K. Salles",
      location: "Pinheiros, São Paulo",
      text: "O que mais me impressionou na Lumina foi o compromisso com a naturalidade. Fiz a bioestimulação facial e o resultado ficou incrivelmente refinado. O atendimento é primoroso do começo ao fim.",
      rating: 5,
      date: "Há 1 semana",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: "dep-2",
      name: "Dr. Ricardo A. Albuquerque",
      location: "Jardins, São Paulo",
      text: "Fiquei extremamente satisfeito com o protocolo tecnológico. Tratamento conduzido com rigor científico e segurança exemplar. Os resultados na flacidez e no contorno mandibular superaram minhas expectativas.",
      rating: 5,
      date: "Há 3 semanas",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: "dep-3",
      name: "Leticia G. Vasconcellos",
      location: "Moema, São Paulo",
      text: "Fiz a junção de Lavieen e Ultraformer III. Minha pele ganhou um glow espetacular, os poros dilatoras praticamente sumiram e a face ficou super firme. Além disso, o café na recepção é divino. Indico de olhos fechados!",
      rating: 5,
      date: "Há 1 mês",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-neutral-50/50 relative overflow-hidden">
      
      {/* Elementos visuais discretos decorativos */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between mb-16 gap-8 text-center lg:text-left">
          <div className="max-w-2xl">
            <span className="text-[11px] font-sans font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">
              Elite em Depoimentos
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-dark tracking-tight font-medium">
              Quem vive a experiência Lumina recomenda
            </h2>
            <div className="h-[2px] w-12 bg-brand-sage mt-6 mx-auto lg:mx-0" />
          </div>

          {/* Resumo do Google Reviews */}
          <div className="bg-brand-light border border-neutral-200 p-6 flex items-center space-x-4 shadow-sm self-center">
            <div className="flex flex-col items-center">
              <span className="font-serif text-3xl text-brand-dark font-semibold">4.9</span>
              <div className="flex text-brand-gold mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
            </div>
            <div className="h-10 w-[1px] bg-neutral-200" />
            <div className="flex flex-col">
              <span className="font-sans text-xs font-bold text-brand-dark uppercase tracking-wider flex items-center gap-1.5">
                Google Reviews
                <CheckCircle className="h-3.5 w-3.5 text-brand-sage fill-current text-white bg-blend-normal" />
              </span>
              <span className="font-sans text-2xs text-brand-muted mt-0.5">Baseado em 184 avaliações reais</span>
            </div>
          </div>
        </div>

        {/* Grid de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {avaliacoes.map((dep) => (
            <div
              key={dep.id}
              id={dep.id}
              className="bg-brand-light border border-neutral-200/60 p-8 hover:border-brand-sage/20 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* 5 Estrelas douradas */}
                <div className="flex text-brand-gold mb-6">
                  {[...Array(dep.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                {/* Texto do depoimento */}
                <blockquote className="font-sans text-xs sm:text-sm text-brand-dark leading-relaxed italic mb-8">
                  "{dep.text}"
                </blockquote>
              </div>

              {/* Informações do Cliente */}
              <div className="flex items-center space-x-4 pt-6 border-t border-neutral-100 mt-auto">
                <div className="w-11 h-11 rounded-none overflow-hidden bg-neutral-200">
                  {/* TODO: Substituir url por import de @/assets/depoimento-${dep.id}.webp para performance 100/100 no Lighthouse */}
                  <img
                    src={dep.avatar}
                    alt={dep.name}
                    className="w-full h-full object-cover"
                    width="150"
                    height="150"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="flex flex-col">
                  <span className="font-serif text-sm font-semibold text-brand-dark flex items-center gap-1.5">
                    {dep.name}
                    <ShieldCheck className="h-3.5 w-3.5 text-brand-sage" />
                  </span>
                  <span className="text-[10px] text-brand-muted font-sans font-medium">
                    {dep.location} • {dep.date}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
