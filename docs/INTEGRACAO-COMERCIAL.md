# Entrega comercial do site — 23/10/2026

## O que está implementado

- Home e landing com apresentação estática e caminhos distintos para recarga, compra, inspeção e acompanhamento.
- `/orcamento` recebe `servico`, `plano`, `quantidade` e `pagamento` na URL. Apenas esses campos comerciais são usados; localização e observações ficam no formulário.
- O pedido prepara uma mensagem para o WhatsApp comercial publicado no site. A pessoa precisa enviá-la para o atendimento receber. Não há reserva, cobrança, ordem de serviço ou agendamento automático.
- Cada resumo leva uma referência `G-XXXXXXXX`, intenção, quantidade (ou pedido de ajuda para contar), cidade/bairro, observações e página de origem. Quando aplicável, leva o plano e a simulação com tipos/capacidades confirmados pela pessoa.
- A referência também está no evento `quote_request`, somente quando a análise foi permitida. Localização digitada e observações não entram nos parâmetros desse evento. A referência permite conferência manual com o atendimento; não cria vínculo automático com um lead.
- A atribuição de campanhas depende da coleta normal do GA4 após a permissão. Não foi implementado armazenamento próprio de GCLID nem envio de conversões offline.
- Preços e benefícios de UI, simulador e SEO vêm de `src/lib/catalog.ts`. Preservadas as condições do site por escolha do responsável: CO₂ 6 kg a R$ 160; mangote e pintura no Completo; 10% de desconto avulso herdado do Essencial.
- Contrato, plano e operacional foram alinhados à oferta. As simulações financeiras antigas não foram recalculadas: o custo efetivo dos benefícios deve ser conferido.
- Consentimento de análise explícito, recusa e reabertura das preferências em todas as páginas. O site bloqueia o carregamento inicial do GA4 antes da permissão e impede novos eventos ao revogar.
- Inventário mostrado na página é um exemplo fictício, não um portal conectado ao cliente.

## Conexão com CRMIA: trabalho ainda necessário

1. Confirmar que o WhatsApp `+55 85 98671-8305` está ligado ao tenant correto e recebe mensagens em produção.
2. Homologar três conversas: compra, recarga e assinatura. O Gabriel atual prioriza venda; mensagens de serviço devem chegar à equipe ou ao fluxo adequado, preservando o pedido original.
3. Se a referência for capturada pelo backend, criar campo específico e registrar sua origem. Não usar o texto de cliente como comando administrativo.
4. Mapear os estados reais do CRM (recebido, qualificado, proposta, fechado), com confirmação humana onde necessária. Não tratar clique como venda.
5. Só ativar importação de conversões para anúncios depois de definir a associação de origem, os consentimentos e a regra de deduplicação. Não há nova integração externa ativada nesta entrega.

## Conexão com Guardião Predial: trabalho ainda necessário

- Definir o sistema responsável pelo equipamento e o identificador compartilhado. O site não deve guardar outro inventário independente.
- Homologar um cliente piloto: equipamento → inspeção → serviço → comprovante → próxima manutenção.
- Verificar autenticação e permissão antes de publicar QR ou links ao histórico. Não colocar dados de prédio/cliente em página pública.
- Confirmar o canal de fornecedores e o vínculo do pedido com o cadastro do cliente antes de anunciar acesso ao portal.

## Materiais de confiança ainda necessários

Fotos reais autorizadas, exemplo anonimizado de relatório e identificação verificável do parceiro executor. Nenhum depoimento, fotografia de cliente ou resultado de integração foi inventado para preencher esses espaços.

## Publicação

O build gera a pasta `out/`. A rota nova usa a mesma regra Apache de extensão `.html` já existente no projeto. A entrega foi validada localmente; não houve publicação em produção nem alteração de campanhas, CRMIA ou Guardião Predial.
