'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnalyticsConsent, PREFERENCES_EVENT, readConsent, saveConsent } from '@/lib/consent';
export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(readConsent() === null);
    const open = () => setVisible(true);
    window.addEventListener(PREFERENCES_EVENT, open);
    return () => window.removeEventListener(PREFERENCES_EVENT, open);
  }, []);
  function choose(value: AnalyticsConsent) { saveConsent(value); setVisible(false); }
  if (!visible) return null;
  return <section aria-label="Preferências de cookies" className="fixed inset-x-0 bottom-0 z-[100] border-t border-slate-300 bg-white px-4 py-4 text-secondary shadow-lg">
    <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="max-w-xl"><p className="font-bold">Você escolhe como medir sua visita</p><p className="mt-1 text-sm text-slate-600">Com sua permissão, usamos cookies do Google para medir páginas, cliques e o resultado dos anúncios. Sem permissão, enviamos apenas sinais sem cookies. Você pode mudar sua escolha depois. <Link href="/cookies" className="underline">Saiba mais</Link>.</p></div>
      <div className="flex shrink-0 flex-wrap gap-3">
        <button type="button" onClick={() => choose('rejected')} className="rounded-lg border border-slate-400 px-4 py-3 font-semibold">Continuar sem cookies</button>
        <button type="button" onClick={() => choose('accepted')} className="rounded-lg bg-secondary px-4 py-3 font-semibold text-white">Permitir cookies</button>
      </div>
    </div>
  </section>;
}
