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
    // {
    //   id: 1,
    //   name: 'Residencial',
    //   price: 36.50,
    //   currency: 'R$',
    //   period: 'Anualmente',
    //   features: [
    //     '1 inspeção visual por ano',
    //     '5% de desconto em serviços (recarga, troca)',
    //     '1 placa de sinalização para extintor novo',
    //     'Lembrete automático por WhatsApp/E-mail',
    //     'Para casas e apartamentos - 1 endereço por contrato',
    //   ],
    //   delay: 0.2,
    //   buttonText: 'Contratar',
    //   buttonLink: '85988928272'
    // },
    {
      id: 2,
      name: 'Essencial',
      price: 127.75,
      currency: 'R$',
      period: 'Anualmente',
      features: [
        '1 visita corretiva',
        '1 recarga por ano (até 6kg, tipo ABC)',
        '1 placa de sinalização (extintor novo)',
        '05% de desconto em serviços',
        '10% de desconto em produtos',
        'Lembrete automático por WhatsApp/E-mail',
      ],
      delay: 0.3,
      buttonText: 'Contratar',
      buttonLink: '85988928272'
    },
    {
      id: 3,
      name: 'Intermediário',
      price: 259.15,
      currency: 'R$',
      period: 'Anualmente',
      features: [
        '1 visita corretiva',
        '2 recargas por ano (até 6kg, tipo ABC)',
        '1 placa de sinalização + 1 demarcação de solo (extintor novo)',
        '08% de desconto em serviços',
        '10% de desconto em produtos',
        '1 inspeção técnica por ano',
        'Lembrete automático por WhatsApp/E-mail',
      ],
      delay: 0.4,
      popular: true,
      textPopular: 'Mais escolhido',
      buttonText: 'Contratar',
      buttonLink: '85988928272'
    },
    {
      id: 4,
      name: 'Premium',
      price: 357.70 ,
      currency: 'R$',
      period: 'Anualmente',
      features: [
        '2 visitas corretivas',
        '3 recargas por ano (até 6kg, tipo ABC)',
        '1 placa de sinalização + 1 demarcação de solo (extintor novo)',
        '10% de desconto em serviços',
        '10% de desconto em produtos',
        '1 inspeção técnica por ano',
        'Troca gratuita de placas danificadas após recarga',
        'Lembrete automático por WhatsApp/E-mail',
      ],
      delay: 0.6,
      buttonText: 'Contratar',
      buttonLink: '85988928272'
    },
  ],
};