'use client';
import { useEffect, useState } from 'react';
import Script from 'next/script';
import { GA_MEASUREMENT_ID } from '@/lib/analytics';
import { CONSENT_EVENT, readConsent } from '@/lib/consent';

export default function GoogleAnalytics() {
  const [allowed, setAllowed] = useState(false);
  useEffect(() => {
    function sync() {
      const accepted = readConsent() === 'accepted';
      (window as unknown as Record<string, unknown>)[`ga-disable-${GA_MEASUREMENT_ID}`] = !accepted;
      window.gtag?.('consent', 'update', { analytics_storage: accepted ? 'granted' : 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
      setAllowed(accepted);
    }
    sync();
    window.addEventListener(CONSENT_EVENT, sync);
    window.addEventListener('storage', sync);
    return () => { window.removeEventListener(CONSENT_EVENT, sync); window.removeEventListener('storage', sync); };
  }, []);
  if (!allowed) return null;
  return <>
    <Script id="google-analytics" strategy="afterInteractive">{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('consent', 'default', {analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}');
    `}</Script>
    <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
  </>;
}
