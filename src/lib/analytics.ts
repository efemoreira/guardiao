// ID público do GA4 (não é segredo: qualquer site expõe esse valor no HTML/JS do navegador).
export const GA_MEASUREMENT_ID = 'G-EFQZQNXG5Q';

type GtagEventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export const trackEvent = (eventName: string, params?: GtagEventParams): void => {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', eventName, params);
};

// Evento de conversão: clique em qualquer CTA que abre o WhatsApp.
// `location` identifica de onde veio o clique (ex.: "floating_button", "landing_hero").
export const trackWhatsAppClick = (location: string): void => {
  trackEvent('whatsapp_click', {
    event_category: 'engagement',
    event_label: location,
    location,
  });
};

// Evento de conversão alternativo: clique em um link de ligação (tel:) — para quem
// hesita em enviar mensagem no WhatsApp mas topa uma ligação.
// `location` identifica de onde veio o clique (ex.: "landing_hero", "landing_final_cta").
export const trackPhoneCallClick = (location: string): void => {
  trackEvent('phone_call_click', {
    event_category: 'engagement',
    event_label: location,
    location,
  });
};
