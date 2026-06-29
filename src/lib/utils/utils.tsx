const planos = [
  {
    nome: "Vigia",
    preco: 99,
    inspecoes: 1,
    recargas: 0,
  },
  {
    nome: "Essencial",
    preco: 11,
    inspecoes: 2,
    recargas: 1,
  },
  {
    nome: "Completo",
    preco: 18,
    inspecoes: 2,
    recargas: 1,
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

export {planos};
