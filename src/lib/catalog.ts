// Oferta vigente: preços e benefícios do site confirmados em 23/10/2026.
export const CONTACT = {
  whatsapp: '558588040691', phone: '+5585986999181',
  phoneDisplay: '(85) 98699-9181', email: 'contato@guardiaoextintores.com.br',
};
export type PlanKey = 'vigia' | 'essencial' | 'completo';
export interface CommercialPlan {
  key: PlanKey; id: number; name: string; price: number; perExtinguisher: boolean;
  annualMonths: number; inspections: number; refills: number; discount: number; features: string[];
}
export const PLAN_ELIGIBILITY = 'Recarga inclusa para ABC/BC até 6 kg e água até 10 L. CO₂, Classe K e outras capacidades precisam de orçamento específico.';
export const commercialPlans: CommercialPlan[] = [
  {
    key: 'vigia', id: 1, name: 'Vigia', price: 99, perExtinguisher: false,
    annualMonths: 1, inspections: 1, refills: 0, discount: 5,
    features: ['Lembretes de vencimento por WhatsApp/e-mail', 'Canal direto e atendimento prioritário', '1 inspeção visual por ano', '5% de desconto em serviços avulsos', 'Não inclui recarga'],
  },
  {
    key: 'essencial', id: 2, name: 'Essencial', price: 11, perExtinguisher: true,
    annualMonths: 10, inspections: 2, refills: 1, discount: 10,
    features: ['Gestão de vencimentos e inventário dos extintores', 'Inspeção semestral (2×/ano) com laudo', '1 recarga anual inclusa para equipamentos elegíveis', 'Comprovante de cada recarga (selo INMETRO, nota, laudo)', '10% de desconto em serviços avulsos'],
  },
  {
    key: 'completo', id: 3, name: 'Completo', price: 18, perExtinguisher: true,
    annualMonths: 10, inspections: 2, refills: 1, discount: 10,
    features: ['Tudo do Essencial, incluindo 10% de desconto avulso', 'Troca de itens de desgaste: placa, lacre, suporte ou mangote', 'Atendimento prioritário: diagnóstico em até 48h úteis', 'Pintura personalizada do extintor', 'Guia de orientação para regularização junto ao CBMCE'],
  },
];
export const services = [
  { id: 1, name: 'Recarga extintor ABC 6 kg', price: 120 },
  { id: 2, name: 'Recarga extintor ABC 4 kg', price: 100 },
  { id: 3, name: 'Recarga extintor BC 6 kg', price: 80 },
  { id: 4, name: 'Recarga extintor BC 4 kg', price: 70 },
  { id: 5, name: 'Recarga extintor CO₂ 6 kg', price: 160 },
  { id: 6, name: 'Recarga extintor CO₂ 4 kg', price: 130 },
  { id: 7, name: 'Recarga extintor de água 10 L', price: 85 },
  { id: 8, name: 'Inspeção técnica + laudo', price: 0 },
  { id: 9, name: 'Placa de sinalização instalada', price: 25 },
  { id: 10, name: 'Demarcação de solo', price: 100 },
  { id: 11, name: 'Assessoria de Certificado de Conformidade (CBMCE)', price: 390 },
  { id: 12, name: 'Treinamento de brigada in-company (até 15 pessoas, 4h)', price: 2500 },
];
export const formatBRL = (amount: number): string =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(amount);
export function calculatePlan(key: PlanKey, quantity: number) {
  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 9999) {
    throw new RangeError('Informe uma quantidade inteira entre 1 e 9999.');
  }
  const plan = commercialPlans.find(p => p.key === key);
  if (!plan) throw new RangeError('Plano inválido.');
  return {
    plan,
    monthly: plan.perExtinguisher ? plan.price * quantity : null,
    annual: plan.perExtinguisher ? plan.price * quantity * plan.annualMonths : plan.price,
    saving: plan.perExtinguisher ? plan.price * quantity * (12 - plan.annualMonths) : 0,
  };
}
