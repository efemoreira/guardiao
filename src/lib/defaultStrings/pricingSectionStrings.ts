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
      name: 'Residencial',
      price: 36.50,
      currency: 'R$',
      period: 'anual',
      features: [
        '1 inspeção visual por ano',
        '5% de desconto em serviços (recarga, troca)',
        '1 placa de sinalização para extintor novo',
        'Lembrete automático por WhatsApp/E-mail',
        'Para casas e apartamentos - 1 endereço por contrato',
      ],
      delay: 0.2,
      buttonText: 'Contratar'
    },
    {
      id: 2,
      name: 'Essencial',
      price: 91.25,
      currency: 'R$',
      period: 'anual',
      features: [
        '1 inspeção técnica por ano',
        '1 visita corretiva extra',
        '10% de desconto em serviços',
        '5% de desconto em produtos',
        '1 placa de sinalização + 1 demarcação de solo para extintor novo',
        'Lembrete automático por WhatsApp/E-mail',
        'Para pequenos comércios, consultórios, igrejas e salas',
      ],
      delay: 0.3,
      buttonText: 'Contratar'
    },
    {
      id: 3,
      name: 'Intermediário',
      price: 182.50,
      currency: 'R$',
      period: 'anual',
      features: [
        '1 inspeção técnica por ano',
        '1 recarga por ano (até 6kg, tipo ABC)',
        '12% de desconto em serviços',
        '6% de desconto em produtos',
        '1 placa de sinalização + 1 demarcação de solo para extintor novo',
        '1 visita corretiva extra',
        'Lembrete automático por WhatsApp/E-mail',
      ],
      delay: 0.4,
      popular: true,
      textPopular: 'Mais escolhido',
      buttonText: 'Contratar'
    },
    {
      id: 4,
      name: 'Premium',
      price: 365.00,
      currency: 'R$',
      period: 'anual',
      features: [
        'Inspeções técnicas ilimitadas',
        '2 recargas por ano (até 6kg, tipo ABC)',
        '15% de desconto em serviços',
        '7,5% de desconto em produtos',
        'Placas de sinalização e demarcações para extintores novos',
        'Troca gratuita de placas danificadas após recarga',
        '1 visita consultiva anual (orientações AVCB e NR-23)',
        'Lembrete automático por WhatsApp/E-mail',
      ],
      delay: 0.6,
      buttonText: 'Contratar'
    },
  ],
};