/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Diferenciais from "./components/Diferenciais";
import Procedimentos from "./components/Procedimentos";
import Depoimentos from "./components/Depoimentos";
import FAQ from "./components/FAQ";
import Localizacao from "./components/Localizacao";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import AgendamentoModal from "./components/AgendamentoModal";
import { triggerGA4Event } from "./utils";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Registrar simulação de visualização da página (Page View) para fins de SEO técnico & Analytics
  useEffect(() => {
    triggerGA4Event("Page View", {
      title: "Lumina Estética Avançada | Landing Page Premium",
      path: "/",
      referrer: "Organic Google Search"
    });
  }, []);

  return (
    <div className="min-h-screen bg-brand-light text-brand-dark flex flex-col font-sans antialiased selection:bg-brand-sage/20 selection:text-brand-sage">
      
      {/* 1. FIXED GLASSMORPHISM HEADER & NAVIGATION */}
      <Header onOpenModal={() => setIsModalOpen(true)} />

      {/* REGION: MAIN CONTENT STREAM */}
      <main className="flex-grow">
        
        {/* 2. INSTANT HERO CTA & HEADLINE BLOCK */}
        <Hero onOpenModal={() => setIsModalOpen(true)} />

        {/* 3. BUSINESS BRAND PILLARS */}
        <Diferenciais />

        {/* 4. CLINIC SERVICES / PROCEDURES GRID (WITH PREMIUM SIDEDRAWER SYSTEM) */}
        <Procedimentos onOpenModal={() => setIsModalOpen(true)} />

        {/* 5. LIVE GOOGLE 5-STAR TESTIMONIALS & TRUST SIGILS */}
        <Depoimentos />

        {/* 6. TRANSPARENT CLINIC FAQ ACCORDIONS */}
        <FAQ />

        {/* 7. LOCAL AREA ACCESS / GOOGLE MAP INTEGRATION */}
        <Localizacao />

      </main>

      {/* 8. FOOTER WITH RICH LOCAL DATA & MEDICAL DIRECTORS COMPLIANCE BLOCK */}
      <Footer />

      {/* 9. FLOATING BRANDED WHATSAPP INTERN CTAs */}
      <FloatingWhatsApp onOpenModal={() => setIsModalOpen(true)} />

      {/* 10. PRE-SCREENING CONVERSION MODAL */}
      <AgendamentoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>
  );
}
