import React from "react";
import { Cpu, Award, Heart, Sparkles } from "lucide-react";

export default function Diferenciais() {
  const pilares = [
    {
      id: "dif-tecnologia",
      icon: Cpu,
      title: "Tecnologia de Ponta",
      description: "Equipada com as tecnologias padrão-ouro mundiais (como Fotona, Lavieen e Ultraformer), combinadas para máxima eficácia clínica.",
    },
    {
      id: "dif-especialistas",
      icon: Award,
      title: "Profissionais Especialistas",
      description: "Nossa equipe médica possui especializações renomadas e atualizações internacionais constantes para garantir técnicas seguras.",
    },
    {
      id: "dif-exclusivo",
      icon: Heart,
      title: "Atendimento Exclusivo",
      description: "Consultas individuais detalhadas, com escuta atenta e diagnóstico tridimensional personalizado da sua pele.",
    },
    {
      id: "dif-resultados",
      icon: Sparkles,
      title: "Resultados Elegantes",
      description: "Acreditamos na estética de refinamento: rejuvenescer de forma equilibrada, realçando seus traços originais com naturalidade.",
    },
  ];

  return (
    <section 
      id="diferenciais" 
      className="pt-10 pb-16 md:pt-12 md:pb-20 bg-neutral-50/50 border-t border-b border-neutral-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[11px] font-sans font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">
            O Padrão Lumina
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-dark tracking-tight font-medium">
            Por que escolher nossa assinatura estética?
          </h2>
          <div className="h-[2px] w-12 bg-brand-sage mx-auto mt-6" />
          <p className="font-sans text-sm text-brand-muted mt-4">
            Combinamos ciência médica avançada, tecnologia de ponta e sensibilidade artística para entregar uma jornada premium inigualável.
          </p>
        </div>
 
        {/* Grid de Diferenciais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pilares.map((pilar, index) => {
            const IconComponent = pilar.icon;
            return (
              <div 
                key={pilar.id}
                id={pilar.id}
                className="bg-brand-light border border-neutral-200/60 p-6 sm:p-7 hover:border-brand-sage/40 hover:shadow-xl transition-all duration-300 group flex flex-col focus-within:ring-2 focus-within:ring-brand-sage"
              >
                {/* Ícone com fundo com brand color */}
                <div className="p-3 bg-neutral-50 border border-neutral-100 text-brand-dark group-hover:bg-brand-sage/10 group-hover:text-brand-sage group-hover:border-brand-sage/10 rounded-none w-fit transition-all duration-300 mb-6">
                  <IconComponent className="h-6 w-6" />
                </div>

                <h3 className="font-serif text-lg text-brand-dark font-semibold mb-3 group-hover:text-brand-sage transition-colors duration-200">
                  {pilar.title}
                </h3>
                
                <p className="font-sans text-xs text-brand-muted leading-relaxed flex-grow">
                  {pilar.description}
                </p>

                {/* Linha decorativa no hover */}
                <div className="w-0 group-hover:w-full h-[1px] bg-brand-sage mt-6 transition-all duration-300" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
