import { commercialPlans } from '../catalog';
const planos = commercialPlans.map(plan => ({
  nome: plan.name, preco: plan.price, inspecoes: plan.inspections, recargas: plan.refills,
  porExtintor: plan.perExtinguisher, mesesAnuidade: plan.annualMonths,
}));

// Função utilitária para gerar link do WhatsApp
export const generateWhatsAppLink = (phoneNumber: string, message?: string): string => {
  // Remove caracteres especiais do número de telefone e adiciona o código do país
  const cleanPhone = phoneNumber.replace(/\D/g, '');
  const formattedPhone = cleanPhone.startsWith('55') && cleanPhone.length >= 12 ? cleanPhone : cleanPhone.length >= 10 ? `55${cleanPhone}` : `5585${cleanPhone}`;

  const baseUrl = 'https://wa.me/';
  const encodedMessage = message ? `?text=${encodeURIComponent(message)}` : '';

  return `${baseUrl}${formattedPhone}${encodedMessage}`;
};

export {planos};
