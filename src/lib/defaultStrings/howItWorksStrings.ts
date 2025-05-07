import { Step } from '../../components/home/HowItWorksSection';

export interface HowItWorksStrings {
  title: string;
  subtitle: string;
  description: string;
  steps: Step[];
}

export const howItWorksStrings: HowItWorksStrings = {
  title: "Como Funcionam Nossos Serviços",
  subtitle: "Processo Simples e Eficiente",
  description: "Nosso atendimento é focado em prevenção e no melhor custo-benefício para garantir a segurança do seu estabelecimento.",
  steps: [
    {
      id: 1,
      icon: "FaClipboardList",
      title: "Escolha o Plano",
      description: "Selecione entre nossos planos Essencial, Intermediário ou Premium de acordo com suas necessidades de proteção.",
      delay: 0.2,
    },
    {
      id: 2,
      icon: "FaCalendarAlt",
      title: "Agende uma Visita",
      description: "Agendamos uma visita técnica para avaliar suas necessidades específicas de proteção contra incêndio.",
      delay: 0.4,
    },
    {
      id: 3,
      icon: "FaTools",
      title: "Receba o Atendimento",
      description: "Nossos técnicos realizarão inspeções, recargas, instalação de extintores e sinalização conforme necessário.",
      delay: 0.6,
    },
    {
      id: 4,
      icon: "FaShieldAlt",
      title: "Fique Tranquilo",
      description: "Com nossos serviços e planos, sua segurança contra incêndio estará sempre em dia, com manutenção preventiva programada.",
      delay: 0.8,
    },
  ]
};