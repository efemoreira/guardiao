import { CarouselItem } from '../../components/home/HeroCarousel';
import { generateWhatsAppLink } from '../utils/utils';

export interface HeroCarouselStrings {
  items: CarouselItem[];
  autoPlayInterval: number;
  height: string;
}

const whatsappNumber = "(85) 98671-8305";

export const heroCarouselStrings: HeroCarouselStrings = {
  items: [
    {
      id: 1,
      title: "Extintores Sempre em Conformidade",
      subtitle: "Recarga de extintores e manutenção preventiva em Fortaleza e no Ceará",
      description: "Gestão de vencimentos, inspeção periódica e recarga de extintores no prazo, com a documentação que você precisa para a vistoria do Corpo de Bombeiros — para residências, condomínios, empresas, igrejas, colégios, faculdades e restaurantes em Fortaleza e região metropolitana.",
      image: "/img/herobanner3.jpeg",
      primaryButtonText: "Nossos Serviços",
      secondaryButtonText: "Solicitar Orçamento",
      primaryButtonLink: "/#services",
      secondaryButtonLink: generateWhatsAppLink(whatsappNumber, "Olá! Gostaria de solicitar um orçamento."),
      highlightWord: "Conformidade"
    },
    {
      id: 2,
      title: "Planos de Manutenção Recorrente",
      subtitle: "Extintores sempre prontos e dentro da validade em todo o Ceará",
      description: "Oferecemos planos com inspeção periódica, recarga de extintores no prazo, descontos em serviços avulsos e gestão automática de vencimentos para sua segurança, em Fortaleza e todo o Ceará.",
      image: "/img/herobanner2.jpg",
      primaryButtonText: "Conhecer Planos",
      secondaryButtonText: "Agendar Visita",
      primaryButtonLink: "/#pricing",
      secondaryButtonLink: generateWhatsAppLink(whatsappNumber, "Olá! Gostaria de agendar uma visita."),
      highlightWord: "Recorrente"
    },
    {
      id: 3,
      title: "Treinamento de Brigada",
      subtitle: "Prevenção é o melhor remédio",
      description: "Realizamos treinamentos de combate a incêndio com profissional bombeiro civil habilitado, para preparar sua equipe e garantir a segurança preventiva do seu estabelecimento.",
      image: "/img/herobanner1.png",
      primaryButtonText: "Saiba Mais",
      secondaryButtonText: "Entre em Contato",
      primaryButtonLink: "/#about",
      secondaryButtonLink: generateWhatsAppLink(whatsappNumber, "Olá! Gostaria de saber mais sobre os serviços da Guardião Extintores."),
      highlightWord: "Treinamento"
    }
  ],
  autoPlayInterval: 12000,
  height: "h-[90vh] sm:h-[80vh] md:h-[90vh]"
};