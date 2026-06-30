export interface AvulsoServiceItem {
  id: number;
  name: string;
  price: string;
}

export interface AvulsosSectionStrings {
  subtitle: string;
  title: string;
  description: string;
  items: AvulsoServiceItem[];
  note: string;
  ctaText: string;
  ctaLink: string;
  ctaMessage: string;
}

export const avulsosSectionStrings: AvulsosSectionStrings = {
  subtitle: "Não precisa assinar para resolver agora",
  title: "Tabela de serviços avulsos",
  description: "Precisa de um serviço pontual? Estes são os nossos preços avulsos, sem necessidade de assinatura.",
  items: [
    { id: 1, name: "Recarga extintor ABC 6 kg", price: "R$ 120" },
    { id: 2, name: "Recarga extintor ABC 4 kg", price: "R$ 100" },
    { id: 3, name: "Recarga extintor BC 6 kg", price: "R$ 80" },
    { id: 4, name: "Recarga extintor BC 4 kg", price: "R$ 70" },
    { id: 5, name: "Recarga extintor CO₂ 6 kg", price: "R$ 160" },
    { id: 6, name: "Recarga extintor CO₂ 4 kg", price: "R$ 130" },
    { id: 7, name: "Recarga extintor de água 10 L", price: "R$ 85" },
    { id: 8, name: "Inspeção técnica + laudo", price: "Grátis" },
    { id: 9, name: "Placa de sinalização instalada", price: "R$ 25" },
    { id: 10, name: "Demarcação de solo", price: "R$ 100" },
    { id: 11, name: "Assessoria de Certificado de Conformidade (CBMCE)", price: "R$ 390" },
    { id: 12, name: "Treinamento de brigada in-company (até 15 pessoas, 4h)", price: "R$ 2.500" },
  ],
  note: "Preços avulsos sem desconto. Assinantes dos planos Vigia e Essencial têm 5% e 10% de desconto, respectivamente, nesses serviços.",
  ctaText: "Solicitar um desses serviços",
  ctaLink: "(85) 98671-8305",
  ctaMessage: "Olá! Gostaria de solicitar um serviço avulso.",
};
