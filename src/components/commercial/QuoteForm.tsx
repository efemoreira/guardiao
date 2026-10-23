'use client';

import { FormEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import { commercialPlans, CONTACT, calculatePlan, formatBRL, PLAN_ELIGIBILITY, PlanKey } from '@/lib/catalog';
import { generateWhatsAppLink } from '@/lib/utils/utils';
import { trackEvent, trackWhatsAppClick } from '@/lib/analytics';

const intents = [
  { key: 'recarga', title: 'Recarregar', detail: 'Um serviço pontual' },
  { key: 'compra', title: 'Comprar', detail: 'Extintores novos' },
  { key: 'inspecao', title: 'Inspecionar', detail: 'Avaliar os equipamentos' },
  { key: 'plano', title: 'Acompanhar', detail: 'Um plano recorrente' },
];
const labels: Record<string, string> = { recarga: 'Recarga de extintores', compra: 'Compra de extintores', inspecao: 'Inspeção de extintores', plano: 'Plano de acompanhamento' };
const fieldClass = 'mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-3 text-slate-900';

export default function QuoteForm() {
  const [intent, setIntent] = useState('recarga');
  const [quantity, setQuantity] = useState('');
  const [unknown, setUnknown] = useState(false);
  const [location, setLocation] = useState('');
  const [details, setDetails] = useState('');
  const [plan, setPlan] = useState<PlanKey>('essencial');
  const [payment, setPayment] = useState('mensal');
  const [eligible, setEligible] = useState(false);
  const [preparedLink, setPreparedLink] = useState('');

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const service = query.get('servico');
    if (service && intents.some(i => i.key === service)) setIntent(service);
    const selected = query.get('plano');
    if (commercialPlans.some(p => p.key === selected)) setPlan(selected as PlanKey);
    const amount = Number(query.get('quantidade'));
    if (Number.isInteger(amount) && amount > 0 && amount <= 9999) setQuantity(String(amount));
    if (query.get('pagamento') === 'anual') setPayment('anual');
    // Eligibility must be confirmed by the person, even when following a simulator link.
  }, []);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const id = `G-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
    const selected = commercialPlans.find(p => p.key === plan)!;
    const lines = [
      `Olá! Quero falar com a equipe sobre ${labels[intent].toLowerCase()}.`,
      `Quantidade: ${unknown ? 'preciso de ajuda para contar' : quantity}.`,
      `Local: ${location.trim()}.`,
    ];
    if (intent === 'plano') {
      lines.push(`Plano de interesse: ${selected.name}.`);
      if (!unknown && (eligible || !selected.perExtinguisher)) {
        const estimate = calculatePlan(plan, Number(quantity));
        const annual = payment === 'anual' || !selected.perExtinguisher;
        lines.push(`Estimativa: ${formatBRL(annual ? estimate.annual : estimate.monthly!)}${annual ? '/ano à vista' : '/mês'}.`);
      } else lines.push('Peço avaliação dos tipos e capacidades antes de calcular o plano.');
    }
    if (details.trim()) lines.push(`Observações: ${details.trim()}`);
    lines.push('Aguardo a confirmação de escopo, valores e disponibilidade pela equipe.', `Referência: ${id}`, `Origem: site Guardião (${window.location.pathname}).`);
    const url = generateWhatsAppLink(CONTACT.whatsapp, lines.join('\n'));
    setPreparedLink(url);
    trackEvent('quote_request', { request_id: id, service: intent, quantity: unknown ? undefined : Number(quantity), plan: intent === 'plano' ? plan : undefined });
    trackWhatsAppClick('quote_form');
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <section id="orcamento" className="scroll-mt-6 bg-slate-50 py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-7 max-w-2xl">
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-red-700">Seu próximo passo</p>
          <h2 className="text-3xl font-bold text-secondary md:text-4xl">O que você precisa resolver?</h2>
          <p className="mt-3 text-slate-600">Prepare seu pedido em um minuto. A equipe confirma as condições pelo WhatsApp, sem contratação automática.</p>
        </div>
        <form onSubmit={submit} onChange={() => setPreparedLink('')} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-8">
          <fieldset>
            <legend className="mb-3 font-semibold text-secondary">1. Escolha o atendimento</legend>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {intents.map(item => (
                <label key={item.key} className={`cursor-pointer rounded-xl border p-3 ${intent === item.key ? 'border-red-700 bg-red-50' : 'border-slate-200'}`}>
                  <input type="radio" name="service" value={item.key} checked={intent === item.key} onChange={() => setIntent(item.key)} className="mr-2 accent-red-700" />
                  <span className="font-semibold text-secondary">{item.title}</span>
                  <span className="mt-1 block text-xs text-slate-600">{item.detail}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="quote-quantity" className="font-semibold text-secondary">2. Quantos extintores?</label>
              <input id="quote-quantity" type="number" min="1" max="9999" step="1" required={!unknown} disabled={unknown} value={unknown ? '' : quantity} onChange={e => setQuantity(e.target.value)} className={`${fieldClass} disabled:bg-slate-100`} placeholder="Ex.: 10" />
              <label className="mt-3 flex items-center gap-2 text-sm text-slate-600"><input type="checkbox" checked={unknown} onChange={e => setUnknown(e.target.checked)} />Ainda não sei a quantidade</label>
            </div>
            <label htmlFor="quote-location" className="font-semibold text-secondary">3. Cidade e bairro
              <input id="quote-location" required maxLength={150} pattern=".*\S.*" value={location} onChange={e => setLocation(e.target.value)} className={fieldClass} placeholder="Ex.: Fortaleza, Aldeota" autoComplete="address-level2" />
            </label>
          </div>
          {intent === 'plano' && (
            <fieldset className="mt-6 rounded-xl bg-slate-50 p-4">
              <legend className="font-semibold text-secondary">Seu plano de interesse</legend>
              <div className="grid gap-4 sm:grid-cols-2">
                <label>Plano<select aria-label="Plano" value={plan} onChange={e => setPlan(e.target.value as PlanKey)} className={fieldClass}>{commercialPlans.map(p => <option key={p.key} value={p.key}>{p.name}</option>)}</select></label>
                <label>Pagamento<select aria-label="Pagamento" value={payment} onChange={e => setPayment(e.target.value)} disabled={plan === 'vigia'} className={fieldClass}><option value="mensal">Mensal por extintor</option><option value="anual">Anual à vista</option></select></label>
              </div>
              <p className="mt-3 text-sm text-slate-600">{plan === 'vigia' ? 'Vigia: valor único de R$ 99/ano, sem recarga inclusa.' : PLAN_ELIGIBILITY}</p>
              {plan !== 'vigia' && <label className="mt-3 flex items-start gap-2 text-sm"><input type="checkbox" checked={eligible} onChange={e => setEligible(e.target.checked)} className="mt-1" />Meus equipamentos estão nos tipos e capacidades acima. Se não souber, a equipe avalia antes de calcular.</label>}
            </fieldset>
          )}
          <label htmlFor="quote-details" className="mt-6 block font-semibold text-secondary">Algo que devemos saber? <span className="font-normal text-slate-500">(opcional)</span>
            <textarea id="quote-details" maxLength={600} rows={2} value={details} onChange={e => setDetails(e.target.value)} className={fieldClass} placeholder="Tipo, capacidade, vencimento ou o que você quer avaliar." />
          </label>
          <p className="mt-3 text-sm text-slate-600">Você pode anexar uma foto na conversa do WhatsApp. A inspeção gratuita depende de confirmação de local e agenda.</p>
          <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button type="submit" className="rounded-lg bg-red-700 px-6 py-3 font-bold text-white hover:bg-red-800">Preparar pedido e abrir WhatsApp</button>
            <p className="max-w-sm text-xs text-slate-500">O resumo será compartilhado quando você enviar a mensagem no WhatsApp. <Link href="/privacidade" className="underline">Privacidade</Link></p>
          </div>
          {preparedLink && <p role="status" className="mt-5 rounded-lg bg-green-50 p-4 text-green-900">Seu resumo está pronto. <a href={preparedLink} target="_blank" rel="noopener noreferrer" className="font-bold underline">Continuar no WhatsApp</a>. Envie a mensagem para a equipe receber o pedido.</p>}
        </form>
      </div>
    </section>
  );
}
