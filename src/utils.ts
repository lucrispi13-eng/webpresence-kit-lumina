/**
 * Utilitários de analytics e interação para Lumina Estética Avançada
 */

export function triggerGA4Event(actionName: string, additionalParams?: Record<string, any>) {
  console.log(
    `%c[GA4 Simulation] Evento Disparado: ${actionName}`, 
    "color: #7A8B7B; font-weight: bold; font-family: monospace; font-size: 11px;",
    {
      timestamp: new Date().toISOString(),
      category: "WhatsApp Conversion",
      action: actionName,
      label: "Lumina Estética Avançada - SP",
      ...additionalParams
    }
  );
}

export const WHATSAPP_URL = "https://wa.me/5511999998888?text=Ol%C3%A1%21+Gostaria+de+agendar+uma+avalia%C3%A7%C3%A3o+personalizada+na+Lumina+Est%C3%A9tica+Avan%C3%A7ada.";
