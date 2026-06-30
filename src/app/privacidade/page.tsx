import { Metadata } from 'next';
import LegalContent from '@/components/legal/LegalContent';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Guardião Extintores',
  description: 'Como a Guardião Extintores coleta, usa e protege os dados pessoais dos seus clientes, em conformidade com a LGPD.',
  alternates: { canonical: '/privacidade' },
};

export default function PrivacidadePage() {
  return (
    <LegalContent title="Política de Privacidade" updatedAt="29 de junho de 2026">
      <p>
        Esta Política de Privacidade explica como a <strong>Guardião Extintores</strong>, marca operada por
        <strong> Faço por Você - Serviços</strong> (CNPJ 17.078.739/0001-19), coleta, usa, armazena e protege os
        dados pessoais de clientes e visitantes deste site, em conformidade com a Lei nº 13.709/2018 (LGPD).
      </p>

      <h2>1. Quais dados coletamos</h2>
      <p>Podemos coletar os seguintes dados, fornecidos diretamente por você ou gerados durante a prestação do serviço:</p>
      <ul>
        <li>Nome, telefone/WhatsApp e e-mail, quando você entra em contato ou solicita um orçamento;</li>
        <li>Endereço do imóvel e dados do inventário de extintores, para a gestão de vencimentos e agendamentos;</li>
        <li>Dados de navegação no site (páginas visitadas, origem do acesso), quando ferramentas de análise estiverem ativas.</li>
      </ul>

      <h2>2. Para que usamos os dados</h2>
      <ul>
        <li>Executar o contrato de prestação de serviços (agendamentos, lembretes de vencimento, emissão de documentos);</li>
        <li>Responder a solicitações de orçamento e contato pelo WhatsApp, e-mail ou formulário do site;</li>
        <li>Cumprir obrigações legais e regulatórias relacionadas à atividade da empresa.</li>
      </ul>
      <p>Não utilizamos seus dados para finalidades incompatíveis com as descritas acima.</p>

      <h2>3. Compartilhamento de dados</h2>
      <p>
        Os dados não são vendidos ou compartilhados com terceiros, exceto quando necessário para a execução do
        serviço (por exemplo, com os parceiros técnicos responsáveis pela recarga de extintores ou treinamento de
        brigada) ou por exigência legal.
      </p>

      <h2>4. Armazenamento e segurança</h2>
      <p>
        Adotamos medidas técnicas e administrativas razoáveis para proteger os dados pessoais contra acesso não
        autorizado, perda ou alteração indevida.
      </p>

      <h2>5. Seus direitos</h2>
      <p>
        Você pode solicitar, a qualquer momento, a confirmação, acesso, correção ou eliminação dos seus dados
        pessoais, pelos canais de contato indicados abaixo.
      </p>

      <h2>6. Contato</h2>
      <p>
        Dúvidas sobre esta política ou sobre o tratamento dos seus dados podem ser enviadas para{' '}
        <a href="mailto:contato@felipesmoreira.com">contato@felipesmoreira.com</a> ou pelo WhatsApp{' '}
        <a href="https://wa.me/5585986718305" target="_blank" rel="noopener noreferrer">(85) 98671-8305</a>.
      </p>

      <h2>7. Alterações desta política</h2>
      <p>
        Esta política pode ser atualizada periodicamente para refletir mudanças em nossas práticas ou na
        legislação. A data da última atualização está sempre indicada no topo desta página.
      </p>
    </LegalContent>
  );
}
