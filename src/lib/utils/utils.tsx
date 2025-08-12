const precoInspecao = 40;
const precoRecarga = 100;
const precoExtintor = 250;
const precoSinalizacaoWall = 15;

const planos = [
  {
    nome: "Essencial",
    preco: 36.5,
    descontoServico: 0.1,
    descontoProduto: 0.05,
    inspecoes: 1,
    recargas: 0,
    placaNova: true,
    demarcacao: false,
    placaAntiga: false,
  },
  {
    nome: "Intermediário",
    preco: 91.25,
    descontoServico: 0.12,
    descontoProduto: 0.06,
    inspecoes: 1,
    recargas: 1,
    placaNova: true,
    demarcacao: true,
    placaAntiga: false,
  },
  {
    nome: "Premium",
    preco: 182.5,
    descontoServico: 0.15,
    descontoProduto: 0.075,
    inspecoes: Infinity,
    recargas: 2,
    placaNova: true,
    demarcacao: true,
    placaAntiga: true,
  },
];

// Função utilitária para gerar link do WhatsApp
export const generateWhatsAppLink = (phoneNumber: string, message?: string): string => {
  // Remove caracteres especiais do número de telefone e adiciona o código do país
  const cleanPhone = phoneNumber.replace(/\D/g, '');
  const formattedPhone = cleanPhone.startsWith('85') ? `55${cleanPhone}` : `5585${cleanPhone}`;
  
  const baseUrl = 'https://wa.me/';
  const encodedMessage = message ? `?text=${encodeURIComponent(message)}` : '';
  
  return `${baseUrl}${formattedPhone}${encodedMessage}`;
};

export {planos, precoInspecao, precoRecarga, precoExtintor, precoSinalizacaoWall};
