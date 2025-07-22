import { Service } from '../../components/home/ServicesSection';

export interface ServicesSectionStrings {
  title: string;
  subtitle: string;
  services: Service[];
  buttonText: string;
}

export const servicesSectionStrings: ServicesSectionStrings = {
  title: "Nossos Serviços",
  subtitle: "Proteção Completa Contra Incêndio",
  buttonText: "Contratar serviço",
  services: [
    {
      id: 1,
      title: "Inspeção de Extintores",
      description: "Serviço de inspeção técnica para verificar o estado e funcionalidade dos seus extintores, essencial para manter sua segurança.",
      image: "img/inspecao.jpg",
      link: "/servicos/inspecao-extintores",
      delay: 0.1,
    },
    {
      id: 2,
      title: "Recarga de Extintores",
      description: "Recarga profissional para extintores de todos os tipos com garantia e certificação, mantendo seu equipamento sempre pronto para uso.",
      image: "img/recarga.jpg",
      link: "/servicos/recarga-extintores",
      delay: 0.3,
    },
    // {
    //   id: 3,
    //   title: "Venda de Extintores",
    //   description: "Venda de extintores novos para residências, empresas, condomínios e outros estabelecimentos, com entrega e instalação.",
    //   image: "img/venda.jpg",
    //   link: "/servicos/venda-extintores",
    //   delay: 0.5,
    // },
    {
      id: 4,
      title: "Sinalização",
      description: "Instalação de sinalização de segurança, incluindo placas novas, demarcação de solo e substituição de placas antigas.",
      image: "img/sinalizacao.jpeg",
      link: "/servicos/sinalizacao",
      delay: 0.1,
    },
    {
      id: 5,
      title: "Treinamento de Incêndio",
      description: "Treinamentos práticos e teóricos para equipes sobre como agir em situações de incêndio e utilizar corretamente os equipamentos de segurança.",
      image: "img/treinamento.jpg",
      link: "/servicos/treinamento",
      delay: 0.3,
    },
    {
      id: 6,
      title: "Estudo de Risco",
      description: "Análise profissional dos riscos de incêndio em seu estabelecimento, com recomendações para melhorar a segurança preventiva.",
      image: "img/estudo.jpg",
      link: "/servicos/estudo-risco",
      delay: 0.5,
    },
  ],
};