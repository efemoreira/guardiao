import { Metadata } from 'next';
import LegalContent from '@/components/legal/LegalContent';

export const metadata: Metadata = {
  title: 'Política de Cookies | Guardião Extintores',
  description: 'Como o site da Guardião Extintores utiliza cookies e tecnologias semelhantes.',
  alternates: { canonical: '/cookies' },
};

export default function CookiesPage() {
  return (
    <LegalContent title="Política de Cookies" updatedAt="29 de junho de 2026">
      <p>
        Cookies são pequenos arquivos de texto armazenados no seu navegador que ajudam um site a funcionar
        corretamente e a entender como é utilizado. Esta página explica como o site da{' '}
        <strong>Guardião Extintores</strong> utiliza cookies e tecnologias semelhantes.
      </p>

      <h2>1. Cookies essenciais</h2>
      <p>
        Utilizamos cookies estritamente necessários para o funcionamento básico do site, como manter a navegação
        estável entre as seções. Esses cookies não podem ser desativados sem comprometer o funcionamento do site.
      </p>

      <h2>2. Cookies de análise e publicidade</h2>
      <p>
        Atualmente este site não utiliza cookies de análise de tráfego (como Google Analytics) ou de
        publicidade (como Meta/Google Ads). Caso essas ferramentas sejam adotadas no futuro — por exemplo, para
        medir o desempenho de campanhas de anúncio — esta política será atualizada antes da ativação, informando
        quais cookies passam a ser usados e como você pode gerenciá-los.
      </p>

      <h2>3. Como gerenciar cookies</h2>
      <p>
        A maioria dos navegadores permite bloquear ou excluir cookies nas configurações de privacidade. Note que
        bloquear cookies essenciais pode afetar o funcionamento de algumas partes do site.
      </p>

      <h2>4. Atualizações desta política</h2>
      <p>
        Esta política pode ser atualizada para refletir novas ferramentas adotadas pelo site. A data da última
        atualização está sempre indicada no topo desta página.
      </p>

      <h2>5. Contato</h2>
      <p>
        Dúvidas sobre o uso de cookies podem ser enviadas para{' '}
        <a href="mailto:contato@felipesmoreira.com">contato@felipesmoreira.com</a> ou pelo WhatsApp{' '}
        <a href="https://wa.me/5585988928272" target="_blank" rel="noopener noreferrer">(85) 98892-8272</a>.
      </p>
    </LegalContent>
  );
}
