import { Metadata } from 'next';
import LegalContent from '@/components/legal/LegalContent';

export const metadata: Metadata = {
  title: 'Termos de Serviço | Guardião Extintores',
  description: 'Termos de uso deste site e das informações apresentadas pela Guardião Extintores.',
  alternates: { canonical: '/termos' },
};

export default function TermosPage() {
  return (
    <LegalContent title="Termos de Serviço" updatedAt="29 de junho de 2026">
      <p>
        Estes Termos de Serviço regem o uso deste site, de propriedade de <strong>Faço por Você - Serviços</strong>{' '}
        (CNPJ 17.078.739/0001-19), operando sob a marca <strong>Guardião Extintores</strong>. Ao acessar este site,
        você concorda com os termos abaixo.
      </p>

      <h2>1. Objeto do site</h2>
      <p>
        Este site tem finalidade informativa e comercial: apresentar os planos e serviços de manutenção,
        monitoramento e gestão de segurança contra incêndio e pânico, e direcionar o visitante para contato via
        WhatsApp, e-mail ou formulário.
      </p>

      <h2>2. Relação com o contrato de prestação de serviços</h2>
      <p>
        As condições aqui descritas <strong>não substituem</strong> o contrato de prestação de serviços firmado
        com cada cliente. Em caso de divergência entre este site e o contrato assinado, prevalece o contrato.
      </p>

      <h2>3. Natureza da atuação da empresa</h2>
      <p>
        A empresa atua como facilitadora e gestora da manutenção de equipamentos de combate a incêndio,
        coordenando a execução de serviços regulados (recarga, treinamento de brigada) por terceiros
        especializados e devidamente habilitados (empresa registrada no INMETRO e bombeiro civil contratado,
        conforme o caso).
      </p>

      <h2>4. Sobre o conteúdo do site</h2>
      <p>
        Preços, planos e prazos exibidos no site têm caráter informativo e podem ser atualizados sem aviso prévio.
        O conteúdo deste site não constitui laudo técnico, certificado ou documento de conformidade junto ao
        Corpo de Bombeiros — esses documentos são emitidos exclusivamente pelos órgãos competentes ou pelos
        terceiros executores habilitados.
      </p>

      <h2>5. Propriedade intelectual</h2>
      <p>
        Textos, imagens e demais conteúdos deste site pertencem à Guardião Extintores ou são utilizados sob
        licença, sendo proibida a reprodução sem autorização prévia.
      </p>

      <h2>6. Limitação de responsabilidade</h2>
      <p>
        Fazemos o possível para manter as informações deste site atualizadas e corretas, mas não nos
        responsabilizamos por eventuais imprecisões pontuais. Decisões de compra devem ser confirmadas
        diretamente com nossa equipe pelo WhatsApp antes da contratação.
      </p>

      <h2>7. Foro</h2>
      <p>
        Fica eleito o foro da Comarca de Fortaleza/CE para dirimir questões relativas a estes Termos, ressalvado,
        em relação de consumo, o foro do domicílio do consumidor.
      </p>

      <h2>8. Contato</h2>
      <p>
        Dúvidas sobre estes Termos podem ser enviadas para{' '}
        <a href="mailto:contato@guardiaoextintores.com.br">contato@guardiaoextintores.com.br</a> ou pelo WhatsApp{' '}
        <a href="https://wa.me/5585986718305" target="_blank" rel="noopener noreferrer">(85) 98671-8305</a>.
      </p>
    </LegalContent>
  );
}
