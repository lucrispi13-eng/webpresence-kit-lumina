import React, { useState } from "react";
import { X, Calendar, Sparkles, ArrowRight, ArrowLeft } from "lucide-react";
import { triggerGA4Event } from "../utils";

interface AgendamentoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AgendamentoModal({ isOpen, onClose }: AgendamentoModalProps) {
  const [step, setStep] = useState(1);
  const [nome, setNome] = useState("");
  const [phone, setPhone] = useState("");
  const [objetivo, setObjetivo] = useState("Harmonização");

  // Reset do modal ao fechar
  const handleClose = () => {
    setStep(1);
    setNome("");
    setPhone("");
    setObjetivo("Harmonização");
    onClose();
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (!nome.trim()) return;
      setStep(2);
    } else if (step === 2) {
      if (!phone.trim()) return;
      setStep(3);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
     e.preventDefault();

    if (!nome.trim() || !phone.trim() || !objetivo.trim()) {
      return;
    }

    // Disparar evento de conversão personalizada do GA4 antes do redirecionamento
    triggerGA4Event("Lead_Triagem_Preenchida", {
      nome,
      objetivo,
      whatsapp: phone,
    });

    // Montar URL do WhatsApp dinâmica conforme escopo
    const text = `Olá! Me chamo ${nome}. Tenho interesse em ${objetivo}. Gostaria de verificar a disponibilidade da agenda.`;
    const targetUrl = `https://wa.me/5511999998888?text=${encodeURIComponent(text)}`;

    // Abrir em nova aba conforme especificado nas diretrizes
    window.open(targetUrl, "_blank");
    
    // Fechar e resetar modal
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all duration-300"
      onClick={handleClose}
    >
      <div
        className="w-full max-w-md bg-[#FAF9F6] border border-[#C5A880]/20 p-6 sm:p-8 relative flex flex-col shadow-2xl rounded-none animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão de Fechar */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-1.5 hover:bg-neutral-100 transition-colors text-brand-dark rounded-full focus:outline-none"
          aria-label="Fechar formulário de agendamento"
        >
          <X className="h-4 w-4 text-[#2C3E2B]" />
        </button>

        {/* Indicador de Passos CRO (Barra de Progresso Superior) */}
        <div className="w-full bg-neutral-100 h-1 mb-6 relative">
          <div 
            className="bg-brand-sage h-1 transition-all duration-300 ease-in-out" 
            style={{ width: `${(step / 3) * 100}%` }}
          />
          <div className="flex justify-between items-center mt-2">
            <span className="text-[10px] uppercase font-sans tracking-widest text-[#C5A880] font-bold">
              Passo {step} de 3
            </span>
            <span className="text-[10px] uppercase font-sans tracking-widest text-[#7A8B7B] font-bold">
              {step === 1 && "Identificação"}
              {step === 2 && "Contato"}
              {step === 3 && "Especialidade"}
            </span>
          </div>
        </div>

        {/* Cabeçalho do Modal */}
        <div className="text-center mb-6">
          <div className="inline-flex p-2 bg-[#7A8B7B]/10 text-brand-sage rounded-full mb-2">
            <Sparkles className="h-4 w-4 text-[#7A8B7B]" />
          </div>
          <h3 className="font-serif text-xl sm:text-2xl text-brand-dark font-medium">
            Sua Experiência Exclusiva
          </h3>
          <p className="font-sans text-xs text-brand-muted mt-1 max-w-xs mx-auto">
            Por favor, preencha esta triagem rápida para direcionarmos você ao profissional mais qualificado.
          </p>
        </div>

        {/* Formulário de 3 Passos */}
        <form onSubmit={step === 3 ? handleSubmit : handleNextStep} className="space-y-4">
          
          {/* PASSO 1: NOME COMPLETO */}
          {step === 1 && (
            <div className="flex flex-col space-y-1.5 animate-fade-in">
              <label htmlFor="modal-name-step" className="text-[10px] uppercase font-sans tracking-widest text-[#C5A880] font-bold">
                Como gostaria de ser chamado(a)?
              </label>
              <input
                type="text"
                id="modal-name-step"
                required
                autoFocus
                placeholder="Nome completo"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="py-2 bg-transparent border-t-0 border-x-0 border-b border-neutral-300 focus:border-[#7A8B7B] focus:ring-0 font-sans text-sm text-brand-dark placeholder-neutral-400 focus:outline-none transition-colors"
              />
              <p className="text-[10px] text-brand-muted font-sans italic pt-0.5">
                Utilizamos seu nome para personalizar sua jornada.
              </p>
            </div>
          )}
 
          {/* PASSO 2: WHATSAPP */}
          {step === 2 && (
            <div className="flex flex-col space-y-1.5 animate-fade-in">
              <label htmlFor="modal-phone-step" className="text-[10px] uppercase font-sans tracking-widest text-[#C5A880] font-bold">
                Qual o seu WhatsApp de contato?
              </label>
              <input
                type="text"
                id="modal-phone-step"
                required
                autoFocus
                placeholder="Ex: (11) 99999-9999"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="py-2 bg-transparent border-t-0 border-x-0 border-b border-neutral-300 focus:border-[#7A8B7B] focus:ring-0 font-sans text-sm text-brand-dark placeholder-neutral-400 focus:outline-none transition-colors"
              />
              <p className="text-[10px] text-brand-muted font-sans italic pt-0.5">
                Enviaremos a confirmação dos horários disponíveis por aqui.
              </p>
            </div>
          )}
 
          {/* PASSO 3: OBJETIVO */}
          {step === 3 && (
            <div className="flex flex-col space-y-1.5 animate-fade-in">
              <label htmlFor="modal-objective-step" className="text-[10px] uppercase font-sans tracking-widest text-[#C5A880] font-bold">
                Qual o seu principal objetivo?
              </label>
              <select
                id="modal-objective-step"
                value={objetivo}
                onChange={(e) => setObjetivo(e.target.value)}
                className="py-2 bg-transparent border-t-0 border-x-0 border-b border-neutral-300 focus:border-[#7A8B7B] focus:ring-0 font-sans text-sm text-brand-dark focus:outline-none cursor-pointer"
              >
                <option value="Harmonização">Harmonização Facial</option>
                <option value="Bioestimuladores">Rejuvenescimento / Bioestimuladores</option>
                <option value="Laser/Manchas">Laser Lavieen / Ultraformer III</option>
                <option value="Outros">Outras Inquietudes Estéticas</option>
              </select>
              <p className="text-[10px] text-brand-muted font-sans italic pt-0.5">
                Isso ajuda nosso especialista a preparar sua pré-avaliação.
              </p>
            </div>
          )}
 
          {/* NAVEGAÇÃO DOS PASSOS */}
          <div className="flex items-center space-x-3 pt-3">
            {step > 1 && (
              <button
                type="button"
                onClick={handlePrevStep}
                className="flex items-center justify-center space-x-2 border border-neutral-300 hover:border-neutral-400 text-brand-dark py-3 px-4 font-sans text-xs tracking-widest uppercase transition-all duration-300"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
              </button>
            )}
            
            <button
              type="submit"
              className="flex-grow flex items-center justify-center space-x-2 bg-brand-sage hover:bg-brand-sage-hover text-brand-light font-sans text-xs tracking-widest uppercase font-semibold py-3 px-6 shadow-md transition-all duration-300 cursor-pointer"
            >
              {step < 3 ? (
                <>
                  <span>Continuar</span>
                  <ArrowRight className="h-3 w-3" />
                </>
              ) : (
                <span>Confirmar e Ver Agenda</span>
              )}
            </button>
          </div>
        </form>

        {/* Informações Extras de Segurança */}
        <div className="flex items-center justify-center space-x-1.5 mt-6 text-[9px] text-brand-muted font-sans text-center">
          <Calendar className="h-3 w-3 text-[#C5A880]" />
          <span>Sua privacidade é garantida sob estrito sigilo médico.</span>
        </div>
      </div>
    </div>
  );
}
