export interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

export interface FeaturesSectionStrings {
  title: string;
  subtitle: string;
  description: string;
  features: Feature[];
  image: string;
  imageAlt: string;
}

export const featuresSectionStrings: FeaturesSectionStrings = {
  title: "Por que escolher nossos serviços de proteção",
  subtitle: "Nossos Diferenciais",
  description: "",
  image: "img/segurancafeature.png",
  imageAlt: "Proteção contra Incêndio",
  features: [
    {
      id: 1,
      icon: "FaRegCheckCircle",
      title: "Serviços Completos",
      description: "Oferecemos soluções completas de proteção contra incêndio: inspeção, recarga de extintores, sinalização, treinamentos e estudos de risco.",
      delay: 0.2,
    },
    {
      id: 2,
      icon: "FaRegBuilding",
      title: "Atendemos Todos os Segmentos",
      description: "Nossos serviços são personalizados para residências, condomínios, empresas, igrejas, colégios, faculdades, restaurantes e outros estabelecimentos.",
      delay: 0.4,
    },
    {
      id: 3,
      icon: "FaShieldAlt",
      title: "Planos Econômicos",
      description: "Nossos planos (Vigia, Essencial e Completo) oferecem gestão de vencimentos, inspeções, recarga inclusa e descontos em serviços avulsos.",
      delay: 0.6,
    },
  ],
};