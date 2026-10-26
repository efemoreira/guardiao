'use client';
import { useState } from 'react';
import Link from 'next/link';
import { calculatePlan, commercialPlans, CONTACT, formatBRL, PLAN_ELIGIBILITY } from '@/lib/catalog';
import { trackWhatsAppClick } from '@/lib/analytics';
import { generateWhatsAppLink } from '@/lib/utils/utils';

// Na landing de anúncio (`whatsapp`), "Pedir proposta" abre o WhatsApp direto em vez de passar pelo /orcamento.
export default function PlanSimulator({ whatsapp = false }: { whatsapp?: boolean }) {
  const [quantity, setQuantity] = useState('10');
  const [special, setSpecial] = useState(false);
  const [annual, setAnnual] = useState(false);
  const amount = Number(quantity);
  const valid = Number.isInteger(amount) && amount >= 1 && amount <= 9999;
  return (
    <div className="mx-auto mt-8 max-w-5xl rounded-2xl border border-slate-200 bg-white p-5 md:p-7">
      <h3 className="text-xl font-bold text-secondary">Quanto fica para o seu imóvel?</h3>
      <div className="mt-4 grid items-end gap-4 sm:grid-cols-2">
        <label htmlFor="simulator-quantity" className="text-sm font-semibold">Quantidade de extintores<input id="simulator-quantity" type="number" min="1" max="9999" step="1" value={quantity} onChange={e => setQuantity(e.target.value)} aria-describedby="simulator-help" className="mt-2 block w-full rounded-lg border border-slate-300 p-3" /></label>
        <label className="flex items-center gap-2 rounded-lg bg-slate-50 p-3"><input type="checkbox" checked={annual} onChange={e => setAnnual(e.target.checked)} />Comparar pagamento anual à vista</label>
      </div>
      <p id="simulator-help" className="mt-3 text-sm text-slate-600">{PLAN_ELIGIBILITY}</p>
      <label className="mt-3 flex items-start gap-2 text-sm text-slate-600"><input type="checkbox" checked={special} onChange={e => setSpecial(e.target.checked)} className="mt-1" />Tenho CO₂, Classe K, outras capacidades ou não sei o tipo.</label>
      {!valid ? <p role="status" className="mt-4 text-red-800">Informe uma quantidade inteira entre 1 e 9999.</p> : (
        <div className="mt-5 grid gap-4 md:grid-cols-3" aria-live="polite" aria-atomic="true">
          {commercialPlans.map(plan => {
            const estimate = calculatePlan(plan.key, amount);
            const needsQuote = special && plan.perExtinguisher;
            const yearly = annual || !plan.perExtinguisher;
            return <div key={plan.key} className="rounded-xl border border-slate-200 p-4">
              <h4 className="font-bold text-secondary">{plan.name}</h4>
              {needsQuote ? <p className="mt-3 font-semibold">Orçamento específico</p> : <p className="mt-3 text-2xl font-bold text-secondary">{formatBRL(yearly ? estimate.annual : estimate.monthly!)}<span className="ml-1 text-sm font-normal">/{yearly ? 'ano' : 'mês'}</span></p>}
              <p className="mt-2 text-sm text-slate-600">{needsQuote ? 'Vamos avaliar os tipos e capacidades antes de calcular.' : !plan.perExtinguisher ? 'Valor único por cliente. Não inclui recarga.' : yearly ? `Pagamento à vista. Economia de ${formatBRL(estimate.saving)} frente a 12 mensalidades.` : `Total mensal para ${amount} extintor${amount === 1 ? '' : 'es'}.`}</p>
              {whatsapp
                ? <a href={generateWhatsAppLink(CONTACT.whatsapp, `Oi! Quero uma proposta do plano ${plan.name} para ${amount} extintor${amount === 1 ? '' : 'es'} (pagamento ${yearly ? 'anual' : 'mensal'}).`)} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick(`plan_simulator_${plan.key}`)} className="mt-4 inline-block font-semibold text-red-700 underline underline-offset-4">Pedir proposta {plan.name}</a>
                : <Link href={`/orcamento?servico=plano&plano=${plan.key}&quantidade=${amount}&pagamento=${yearly ? 'anual' : 'mensal'}`} className="mt-4 inline-block font-semibold text-red-700 underline underline-offset-4">Pedir proposta {plan.name}</Link>}
            </div>;
          })}
        </div>
      )}
      <p className="mt-4 text-xs text-slate-500">Simulação informativa, sem cobrança ou contratação. A equipe confirma o inventário e o escopo do atendimento.</p>
    </div>
  );
}
