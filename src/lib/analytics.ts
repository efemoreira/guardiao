export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

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
