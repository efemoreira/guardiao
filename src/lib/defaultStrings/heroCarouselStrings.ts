import { CarouselItem } from '../../components/home/HeroCarousel';

export interface HeroCarouselStrings {
  items: CarouselItem[];
  autoPlayInterval: number;
  height: string;
}

export const heroCarouselStrings: HeroCarouselStrings = {
  items: [
    {
      id: 1,
      title: "Proteção Contra Incêndio Especializada",
      subtitle: "Inspeção, Recarga de Extintores",
      description: "Serviços completos de proteção contra incêndio para residências, condomínios, empresas, igrejas, colégios, faculdades, restaurantes e outros estabelecimentos.",
      image: "/img/herobanner3.jpeg",
      primaryButtonText: "Nossos Serviços",
      secondaryButtonText: "Solicitar Orçamento",
      primaryButtonLink: "/#services",
      secondaryButtonLink: "/#contact",
      highlightWord: "Proteção"
    },
    {
      id: 2,
      title: "Planos de Proteção Personalizados",
      subtitle: "Extintores sempre prontos para uso",
      description: "Oferecemos planos mensais que incluem inspeções, recargas gratuitas, descontos em serviços e produtos, além de sinalização completa para sua segurança.",
      image: "/img/herobanner2.jpg",
      primaryButtonText: "Conhecer Planos",
      secondaryButtonText: "Agendar Visita",
      primaryButtonLink: "/#pricing",
      secondaryButtonLink: "/#contact",
      highlightWord: "Planos"
    },
    {
      id: 3,
      title: "Treinamentos e Estudos de Risco",
      subtitle: "Prevenção é o melhor remédio",
      description: "Realizamos treinamentos de combate a incêndio e estudos completos de risco para garantir a segurança preventiva do seu estabelecimento.",
      image: "/img/herobanner1.png",
      primaryButtonText: "Saiba Mais",
      secondaryButtonText: "Entre em Contato",
      primaryButtonLink: "/#about",
      secondaryButtonLink: "/#contact",
      highlightWord: "Treinamentos"
    }
  ],
  autoPlayInterval: 12000,
  height: "h-[80vh] md:h-[90vh]"
};