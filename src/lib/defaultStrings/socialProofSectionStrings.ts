// PENDÊNCIA: nomes próprios de clientes (ex.: "Igreja X") NÃO devem ser usados aqui
// até confirmação formal de autorização de uso de nome/imagem pelo cliente.
// Usar apenas descrição genérica do segmento (ver operacional.md).

export interface SocialProofSegment {
  icon: string;
  label: string;
  detail?: string;
}

export interface SocialProofSectionStrings {
  subtitle: string;
  title: string;
  description: string;
  segments: SocialProofSegment[];
}

export const socialProofSectionStrings: SocialProofSectionStrings = {
  subtitle: "Quem confia na Guardião",
  title: "Atendemos diferentes perfis de imóvel em Fortaleza",
  description: "Da igreja de grande porte ao pequeno comércio, adaptamos o plano ao tamanho e à rotina de cada cliente.",
  segments: [
    { icon: "FaChurch", label: "Igreja de grande porte", detail: "Gestão completa de conformidade" },
    { icon: "FaSchool", label: "Instituição de ensino", detail: "Campus com múltiplos prédios" },
    { icon: "FaUtensils", label: "Restaurante", detail: "Cozinha com risco de Classe K" },
    { icon: "FaStore", label: "Comércio e condomínio", detail: "Gestão simplificada de vencimentos" },
  ],
};
