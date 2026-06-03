import React, { useState } from "react";
import { FAQItem } from "../types";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const perguntas: FAQItem[] = [
    {
      id: "faq-1",
      question: "Os procedimentos são realizados por médicos ou esteticistas?",
      answer: "Todos os nossos procedimentos injetáveis e de alta tecnologia (como toxina botulínica, preenchimentos com ácido hialurônico de ponta e aplicação de bioestimuladores) são executados exclusivamente por médicos dermatologistas e cirurgiões plásticos especializados, membros das respectivas sociedades médicas (SBCD e SBCP). Sua segurança está sempre em primeiro lugar."
    },
    {
      id: "faq-2",
      question: "Como funciona a consulta de avaliação inicial tridimensional?",
      answer: "A consulta é um momento de escuta atenta. Realizamos um mapeamento clínico facial minucioso, analisando tanto o envelhecimento ósseo, as perdas de gordura e a textura epidérmica. Em cima disso, montamos um plano de tratamento personalizado e detalhado, sugerindo as intervenções ideais para alcançar resultados sofisticados e graduais."
    },
    {
      id: "faq-3",
      question: "Qual é o tempo de recuperação (downtime) das tecnologias a laser?",
      answer: "O Laser Lavieen e o Ultraformer III são famosos por possuírem baixíssimo downtime. Após a sessão do laser, a pele pode ficar levemente rosada por 24 a 48 horas, permitindo o uso de maquiagem corretiva e o retorno imediato à sua rotina corporativista. O Ultraformer III não deixa marcas externas, permitindo sua realização no horário de almoço."
    },
    {
      id: "faq-4",
      question: "Quais são as formas de pagamento oferecidas para tratamentos e planos personalizados?",
      answer: "Para sua total comodidade, oferecemos diversas modalidades de pagamento: cartões de crédito/débito em até 10 parcelas sem juros, Pix com condições especiais à vista, ou parcelamento customizado de acordo com o plano anual de acompanhamento estético estruturado para você."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-20 bg-brand-light relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <span className="text-[11px] font-sans font-bold tracking-[0.25em] text-brand-gold uppercase block mb-3">
            Dúvidas Frequentes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-dark tracking-tight font-medium">
            Perguntas & Esclarecimentos
          </h2>
          <div className="h-[2px] w-12 bg-brand-sage mx-auto mt-6" />
          <p className="font-sans text-sm text-brand-muted mt-4 max-w-2xl mx-auto">
            Acreditamos na transparência absoluta. Se você possuir alguma outra dúvida específica, nossa equipe está pronta para atendê-la de forma ágil via WhatsApp.
          </p>
        </div>

        {/* Accordions em JS Puro/React */}
        <div className="space-y-4">
          {perguntas.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={item.id} 
                id={item.id}
                className="border border-neutral-200/60 transition-all duration-300 bg-[#FAFAFA]"
              >
                {/* Botão do Accordion */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-6 py-5 sm:px-8 sm:py-6 flex justify-between items-center bg-[#FAFAFA] hover:bg-neutral-50/80 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-serif text-sm sm:text-base font-semibold text-brand-dark hover:text-brand-sage transition-colors pr-4 flex items-center gap-3">
                    <HelpCircle className="h-4.5 w-4.5 text-brand-gold shrink-0" />
                    <span>{item.question}</span>
                  </span>
                  <div className="shrink-0 p-1 border border-neutral-200 text-brand-muted rounded-none bg-brand-light">
                    {isOpen ? (
                      <Minus className="h-4 w-4 text-brand-sage" />
                    ) : (
                      <Plus className="h-4 w-4 text-brand-dark" />
                    )}
                  </div>
                </button>

                {/* Bloco de Resposta Accordion Animado */}
                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-72 opacity-100 border-t border-neutral-100" : "max-h-0 opacity-0 bg-transparent"
                  }`}
                >
                  <div className="px-6 py-5 sm:px-8 sm:py-6 font-sans text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {item.answer}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
