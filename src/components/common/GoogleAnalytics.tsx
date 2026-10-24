'use client';
import { useEffect } from 'react';
import Script from 'next/script';
import { GA_MEASUREMENT_ID } from '@/lib/analytics';
import { CONSENT_EVENT, CONSENT_KEY, readConsent } from '@/lib/consent';

// Consent Mode v2 (modo avançado): a tag sempre carrega, mas sem cookies até a pessoa permitir.
// Sem permissão, o Google recebe só sinais sem cookies e modela as conversões dessas visitas.
function consentState(accepted: boolean) {
  const value = accepted ? 'granted' : 'denied';
  return { analytics_storage: value, ad_storage: value, ad_user_data: value, ad_personalization: 'denied' };
}

export default function GoogleAnalytics() {
  useEffect(() => {
    function sync() { window.gtag?.('consent', 'update', consentState(readConsent() === 'accepted')); }
    sync();
    window.addEventListener(CONSENT_EVENT, sync);
    window.addEventListener('storage', sync);
    return () => { window.removeEventListener(CONSENT_EVENT, sync); window.removeEventListener('storage', sync); };
  }, []);
  return <>
    <Script id="google-analytics" strategy="afterInteractive">{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      window.gtag = gtag;
      var accepted = false;
      try { accepted = localStorage.getItem('${CONSENT_KEY}') === 'accepted'; } catch (e) {}
      gtag('consent', 'default', ${JSON.stringify(consentState(false))});
      if (accepted) gtag('consent', 'update', ${JSON.stringify(consentState(true))});
      gtag('set', 'url_passthrough', true);
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}');
    `}</Script>
    <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
  </>;
}
