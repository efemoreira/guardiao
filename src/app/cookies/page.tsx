import { Metadata } from 'next';
import LegalContent from '@/components/legal/LegalContent';

export const metadata: Metadata = {
  title: 'Política de Cookies | Guardião Extintores',
  description: 'Como o site da Guardião Extintores utiliza cookies e tecnologias semelhantes.',
  alternates: { canonical: '/cookies' },
};

export default function CookiesPage() {
  return (
    <LegalContent title="Política de Cookies" updatedAt="24 de outubro de 2026">
      <p>
        Cookies são pequenos arquivos de texto armazenados no seu navegador que ajudam um site a funcionar
        corretamente e a entender como é utilizado. Esta página explica como o site da{' '}
        <strong>Guardião Extintores</strong> utiliza cookies e tecnologias semelhantes.
      </p>

      <h2>1. Cookies essenciais</h2>
      <p>
        Utilizamos cookies estritamente necessários para o funcionamento básico do site, como guardar sua preferência de medição no armazenamento local do navegador. O formulário pode preparar o pedido sem permitir cookies de análise.
      </p>

      <h2>2. Cookies de análise e medição de anúncios</h2>
      <p>
        Utilizamos o <strong>Google Analytics</strong> para entender como os visitantes usam o site (páginas
        acessadas, origem do acesso, cliques nos botões de contato) e medir o desempenho de campanhas de anúncio.
        Usamos o modo de consentimento do Google: cookies de análise e de medição de anúncios (Google Analytics e Google Ads) só são gravados depois que você escolhe “Permitir cookies”. Sem essa permissão, o Google recebe apenas sinais sem cookies e sem identificador do seu navegador (por exemplo, que houve uma visita ou um clique no WhatsApp), usados para estimar resultados de forma agregada. Não usamos seus dados para personalizar anúncios. Não enviamos à ferramenta o texto do pedido, a localização digitada ou suas observações. Caso outras ferramentas de publicidade (como a Meta) passem a ser usadas, esta política será atualizada antes da ativação.
      </p>

      <h2>3. Como gerenciar cookies</h2>
      <p>
        Use “Preferências de cookies”, no rodapé, para permitir ou recusar a medição. A escolha fica guardada neste navegador. Ao recusar, deixamos de gravar cookies do Google e removemos os cookies do Analytics acessíveis a este site; continuam apenas os sinais sem cookies descritos acima. Você também pode gerenciar cookies nas configurações do navegador.
      </p>

      <h2>4. Atualizações desta política</h2>
      <p>
        Esta política pode ser atualizada para refletir novas ferramentas adotadas pelo site. A data da última
        atualização está sempre indicada no topo desta página.
      </p>

      <h2>5. Contato</h2>
      <p>
        Dúvidas sobre o uso de cookies podem ser enviadas para{' '}
        <a href="mailto:contato@guardiaoextintores.com.br">contato@guardiaoextintores.com.br</a> ou pelo WhatsApp{' '}
        <a href="https://wa.me/558588040691" target="_blank" rel="noopener noreferrer">(85) 8804-0691</a>.
      </p>
    </LegalContent>
  );
}
