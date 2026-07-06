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
  description: 'Escolha o melhor plano para manter a segurança preventiva de seu patrimônio sempre em dia, seja residência, condomínio, empresa, igreja, colégio ou restaurante. Veja como é barato manter a segurança preventiva de seu patrimônio. Nossos planos cabem em seu orçamento.',
  backgroundColor: 'bg-gray-50',
  plans: [
    {
      id: 1,
      name: 'Vigia',
      price: 99,
      currency: 'R$',
      period: 'ano',
      priceNote: 'Valor único — cobre todos os extintores do seu negócio',
      features: [
        'Acompanhamento e lembrete de vencimentos (WhatsApp/E-mail)',
        'Canal direto e atendimento prioritário',
        '1 inspeção visual por ano',
        '5% de desconto em serviços avulsos',
        'Não inclui recarga',
      ],
      delay: 0.2,
      buttonText: 'Contratar',
      buttonLink: '85986718305'
    },
    {
      id: 2,
      name: 'Essencial',
      price: 11,
      currency: 'R$',
      priceSuffix: '/ extintor / mês',
      priceNote: 'Anuidade à vista = 2 meses grátis',
      features: [
        'Gestão e lembrete de vencimentos',
        'Inventário e cadastro dos extintores',
        'Inspeção semestral (2x/ano) com laudo',
        '1 recarga por ano inclusa (ABC/BC ou água até 6kg/10L)',
        'Comprovante de cada recarga (selo INMETRO, nota, laudo)',
        '10% de desconto em serviços avulsos',
      ],
      delay: 0.3,
      textPopular: 'Mais popular',
      popular: true,
      buttonText: 'Contratar',
      buttonLink: '85986718305'
    },
    {
      id: 3,
      name: 'Completo',
      price: 18,
      currency: 'R$',
      priceSuffix: '/ extintor / mês',
      priceNote: 'Anuidade à vista = 2 meses grátis',
      features: [
        'Tudo do plano Essencial',
        'Troca de itens de desgaste (placa, lacre, suporte)',
        'Mangote não incluso (preço avulso normal)',
        'Atendimento prioritário — SLA de 48h úteis para diagnóstico',
        'Guia de orientação para regularização junto ao CBMCE',
      ],
      delay: 0.4,
      buttonText: 'Contratar',
      buttonLink: '85986718305'
    },
  ],
};
