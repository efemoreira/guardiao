import { Service } from '../../components/home/ServicesSection';

export interface ServicesSectionStrings {
  title: string;
  subtitle: string;
  services: Service[];
  buttonText: string;
}

export const servicesSectionStrings: ServicesSectionStrings = {
  title: "Extintores e Recarga em Fortaleza e no Ceará",
  subtitle: "Proteção Completa Contra Incêndio",
  buttonText: "Contratar serviço",
  services: [
    {
      id: 1,
      title: "Inspeção de Extintores",
      description: "Serviço de inspeção técnica para verificar o estado e funcionalidade dos seus extintores, essencial para manter sua segurança.",
      image: "img/inspecao.jpg",
      link: "/#pricing",
      delay: 0.1,
    },
    {
      id: 2,
      title: "Recarga de Extintores",
      description: "Recarga de extintores em Fortaleza e em todo o Ceará, para todos os tipos de equipamento, com garantia e certificação, mantendo seu extintor sempre pronto para uso.",
      image: "img/recarga.jpg",
      link: "/#pricing",
      delay: 0.3,
    },
    {
      id: 3,
      title: "Retirada e Entrega de Extintores",
      description: "Serviço de retirada e entrega de extintores em seu local para manutenção, recarga ou troca, oferecendo comodidade e praticidade.",
      image: "img/venda.jpg",
      link: "/#pricing",
      delay: 0.5,
    },
    {
      id: 4,
      title: "Placas de Sinalização",
      description: "Fornecimento e instalação de placas de sinalização de segurança para extintores, rotas de fuga e equipamentos de combate a incêndio.",
      image: "img/sinalizacao.jpeg",
      link: "/#pricing",
      delay: 0.1,
    },
    {
      id: 5,
      title: "Visita Consultiva",
      description: "Assessoria de organização e acompanhamento para a obtenção do Certificado de Conformidade junto ao CBMCE, além de orientações sobre melhorias na segurança contra incêndio do seu estabelecimento.",
      image: "img/estudo.jpg",
      link: "/#pricing",
      delay: 0.1,
    },
    {
      id: 6,
      title: "Lembrete Automático",
      description: "Sistema de notificação automática via WhatsApp e e-mail para lembrar sobre vencimentos e manutenções necessárias.",
      image: "img/segurancafeature.png",
      link: "/#pricing",
      delay: 0.5,
    },
    {
      id: 7,
      title: "Treinamento de Incêndio",
      description: "Treinamentos práticos e teóricos para equipes sobre como agir em situações de incêndio e utilizar corretamente os equipamentos de segurança.",
      image: "img/treinamento.jpg",
      link: "/#pricing",
      delay: 0.1,
    },
  ],
};