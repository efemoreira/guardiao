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
      link: "/#pricing",
      delay: 0.1,
    },
    {
      id: 2,
      title: "Recarga de Extintores",
      description: "Recarga profissional para extintores de todos os tipos com garantia e certificação, mantendo seu equipamento sempre pronto para uso.",
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
      title: "Demarcação de Solo",
      description: "Demarcação no solo para identificação da localização correta dos extintores, seguindo normas de segurança.",
      image: "img/sinalizacao.jpeg",
      link: "/#pricing",
      delay: 0.3,
    },
    {
      id: 6,
      title: "Visita Corretiva",
      description: "Visita técnica para correção de problemas identificados durante inspeções ou para ajustes necessários nos equipamentos.",
      image: "img/inspecao.jpg",
      link: "/#pricing",
      delay: 0.5,
    },
    {
      id: 7,
      title: "Visita Consultiva",
      description: "Consultoria especializada com orientações sobre AVCB, NR-23 e melhorias na segurança contra incêndio do seu estabelecimento.",
      image: "img/estudo.jpg",
      link: "/#pricing",
      delay: 0.1,
    },
    {
      id: 8,
      title: "Troca de Placas Danificadas",
      description: "Substituição de placas de sinalização que estejam danificadas, desbotadas ou em desconformidade com as normas.",
      image: "img/sinalizacao.jpeg",
      link: "/#pricing",
      delay: 0.3,
    },
    {
      id: 9,
      title: "Lembrete Automático",
      description: "Sistema de notificação automática via WhatsApp e e-mail para lembrar sobre vencimentos e manutenções necessárias.",
      image: "img/segurancafeature.png",
      link: "/#pricing",
      delay: 0.5,
    },
    {
      id: 10,
      title: "Treinamento de Incêndio",
      description: "Treinamentos práticos e teóricos para equipes sobre como agir em situações de incêndio e utilizar corretamente os equipamentos de segurança.",
      image: "img/treinamento.jpg",
      link: "/#pricing",
      delay: 0.1,
    },
    {
      id: 11,
      title: "Estudo de Risco",
      description: "Análise profissional dos riscos de incêndio em seu estabelecimento, com recomendações para melhorar a segurança preventiva.",
      image: "img/estudo.jpg",
      link: "/#pricing",
      delay: 0.3,
    },
  ],
};