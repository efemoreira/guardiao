import { services } from '../catalog';

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
  items: services.map(service => ({ ...service, price: service.price === 0 ? 'Grátis' : `R$ ${service.price.toLocaleString('pt-BR')}` })),
  note: 'Preços avulsos sem desconto. Vigia: 5%; Essencial e Completo: 10% de desconto. A equipe confirma tipo, capacidade, deslocamento e condições antes de contratar.',
  ctaText: "Solicitar um desses serviços",
  ctaLink: "(85) 8804-0691",
  ctaMessage: "Olá! Gostaria de solicitar um serviço avulso.",
};
