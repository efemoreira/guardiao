export interface TrustBadge {
  icon: string;
  title: string;
  description: string;
}

export interface TrustSectionStrings {
  subtitle: string;
  title: string;
  description: string;
  badges: TrustBadge[];
}

export const trustSectionStrings: TrustSectionStrings = {
  subtitle: "Quem somos",
  title: "Conformidade e transparência em cada manutenção",
  description: "Atuamos como gestores da manutenção dos seus extintores, coordenando parceiros tecnicamente habilitados para cada etapa regulada do serviço.",
  badges: [
    {
      icon: "FaFileInvoice",
      title: "CNPJ ativo",
      description: "17.078.739/0001-19 — empresa regularizada",
    },
    {
      icon: "FaCertificate",
      title: "Recarga via parceiro INMETRO",
      description: "A recarga é executada por empresa terceira registrada no INMETRO",
    },
    {
      icon: "FaUserShield",
      title: "Treinamento com bombeiro civil",
      description: "Treinamentos conduzidos por profissional bombeiro civil habilitado",
    },
    {
      icon: "FaStamp",
      title: "Certificado de Conformidade CBMCE",
      description: "Assessoria de organização e acompanhamento do processo junto ao Corpo de Bombeiros",
    },
  ],
};
