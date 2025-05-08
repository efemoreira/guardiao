import { PricingPlan } from '../../components/home/PricingSection';

export interface PricingSectionStrings {
  title: string;
  subtitle: string;
  description: string;
  plans: PricingPlan[];
  backgroundColor: string;
}

export const pricingSectionStrings: PricingSectionStrings = {
  title: 'Planos de Proteção',
  subtitle: 'Nossos Planos',
  description: 'Escolha o melhor plano para manter a segurança contra incêndio do seu estabelecimento sempre em dia, seja residência, condomínio, empresa, igreja, colégio ou restaurante.',
  backgroundColor: 'bg-gray-50',
  plans: [
    {
      id: 1,
      name: 'Essencial',
      price: 36.5,
      currency: 'R$',
      period: 'anual',
      features: [
        '1 inspeção anual inclusa',
        '10% de desconto em serviços',
        '5% de desconto em produtos',
        'Placa de sinalização para extintores novos',
      ],
      delay: 0.2,
      buttonText: 'Contratar'
    },
    {
      id: 2,
      name: 'Intermediário',
      price: 127.75,
      currency: 'R$',
      period: 'anual',
      features: [
        '1 inspeção anual inclusa',
        '12% de desconto em serviços',
        '6% de desconto em produtos',
        '1 recarga inclusa por ano',
        'Placa de sinalização para extintores novos',
        'Demarcação no chão para extintores novos',
      ],
      delay: 0.4,
      popular: true,
      textPopular: 'Mais escolhido',
      buttonText: 'Contratar'
    },
    {
      id: 3,
      name: 'Premium',
      price: 255.50,
      currency: 'R$',
      period: 'anual',
      features: [
        'Inspeções ilimitadas',
        '15% de desconto em serviços',
        '7,5% de desconto em produtos',
        '2 recargas inclusas por ano',
        'Placa de sinalização para extintores novos',
        'Demarcação no solo para extintores novos',
        'Substituição de placas defeituosas por recarga',
      ],
      delay: 0.6,
      buttonText: 'Contratar'
    },
  ],
};