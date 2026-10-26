import { landingHeroStrings } from '@/lib/defaultStrings/landingHeroStrings';
import { CONTACT } from '@/lib/catalog';
import { trackWhatsAppClick } from '@/lib/analytics';
import { generateWhatsAppLink } from '@/lib/utils/utils';

interface LandingHeroProps { title?: string; description?: string; subtitle?: string; }
export default function LandingHero({ title = landingHeroStrings.title, description = landingHeroStrings.description, subtitle = landingHeroStrings.subtitle }: LandingHeroProps) {
  return (
    <section className="relative overflow-hidden bg-secondary py-10 text-white md:py-16">
      <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border-[45px] border-white/5" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 md:grid-cols-[1.2fr_1fr] md:gap-14">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-red-300">{subtitle}</p>
          <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">{title}</h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">{description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {/* O anúncio promete inspeção grátis: todo caminho da landing abre o WhatsApp direto, sem formulário nem ligação concorrendo. */}
            <a href={generateWhatsAppLink(CONTACT.whatsapp, landingHeroStrings.message)} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick('landing_hero')} className="rounded-lg bg-green-700 px-6 py-3 font-bold text-white hover:bg-green-800">{landingHeroStrings.buttonText}</a>
          </div>
        </div>
        <div className="rounded-2xl border border-white/15 bg-white/5 p-5 md:p-7">
          <p className="text-sm text-slate-300">Um atendimento para cada necessidade</p>
          <div className="mt-4 space-y-3">
            {[
              ['01', 'Recarga e inspeção', 'Avalie os equipamentos que você já tem.', 'recarga', 'Oi! Vi o anúncio e quero recarga/inspeção dos meus extintores.'],
              ['02', 'Extintores novos', 'Peça ajuda para escolher tipo e capacidade.', 'compra', 'Oi! Vi o anúncio e quero comprar extintores novos.'],
              ['03', 'Acompanhamento recorrente', 'Organize vencimentos e manutenções.', 'plano', 'Oi! Vi o anúncio e quero saber dos planos de acompanhamento.'],
            ].map(([number, label, detail, service, message]) => <a key={service} href={generateWhatsAppLink(CONTACT.whatsapp, message)} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick(`landing_hero_${service}`)} className="group flex items-start gap-3 rounded-xl bg-white p-4 text-secondary transition hover:bg-red-50"><span className="text-xs font-bold text-red-700">{number}</span><span><span className="block font-bold">{label}<span aria-hidden="true" className="ml-2 text-red-700">↗</span></span><span className="mt-1 block text-sm text-slate-600">{detail}</span></span></a>)}
          </div>
          <p className="mt-4 text-xs leading-relaxed text-slate-300">Recarga executada por empresa parceira registrada no INMETRO. Escopo e disponibilidade confirmados pela equipe.</p>
        </div>
      </div>
    </section>
  );
}
