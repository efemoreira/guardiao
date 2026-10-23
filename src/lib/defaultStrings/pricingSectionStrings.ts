import type { PricingPlan } from '../../components/home/PricingSection';
import { commercialPlans, CONTACT } from '../catalog';
export interface PricingSectionStrings {
  title: string; subtitle: string; description: string; plans: PricingPlan[]; backgroundColor: string;
}
export const pricingSectionStrings: PricingSectionStrings = {
  title: 'Escolha como acompanhar seus extintores',
  subtitle: 'Planos de proteção',
  description: 'Só acompanhar os vencimentos ou incluir recarga e manutenção? Compare o que cada plano entrega.',
  backgroundColor: 'bg-gray-50',
  plans: commercialPlans.map(plan => ({
    id: plan.id, name: plan.name, price: plan.price, currency: 'R$', period: 'ano',
    priceSuffix: plan.perExtinguisher ? '/ extintor / mês' : undefined,
    priceNote: plan.perExtinguisher ? 'Anuidade à vista = 2 meses grátis' : 'Valor anual único para todos os extintores do seu negócio',
    features: plan.features, popular: plan.key === 'essencial', textPopular: 'Com recarga inclusa',
    buttonText: 'Conversar sobre este plano', buttonLink: CONTACT.whatsapp,
  })),
};
