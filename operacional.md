# GUARDIÃO — Painel Operacional de Lançamento

*Planos · Anúncios · CRM · Processos · 90 dias*

> **Como usar:** este arquivo é seu painel de controle. Preencha os campos indicados, marque as caixas conforme concluir, e atualize as tabelas semanalmente.

---

## Glossário — siglas e termos usados neste documento

| Sigla / Termo | Significado |
|---|---|
| MRR | Monthly Recurring Revenue (Receita Recorrente Mensal). Soma de tudo que os planos ativos pagam por mês. |
| ARR | Annual Recurring Revenue (Receita Recorrente Anual). MRR × 12. |
| CAC | Custo de Aquisição de Cliente. Verba gasta ÷ nº de clientes fechados naquele canal/período. |
| LTV | Lifetime Value. Quanto um cliente gera de receita/lucro durante todo o tempo em que permanece pagando. Regra prática: CAC só vale a pena se LTV for 3x ou mais. |
| ACV | Average Contract Value. Quanto, em média, cada cliente paga por ano. |
| Payback (de CAC) | Em quantos meses a receita do cliente paga de volta o que foi gasto para adquiri-lo. |
| Churn | Taxa de cancelamento. "Churn de logo" = % de clientes que cancelam. "Churn de receita" = % de MRR perdido. |
| COGS | Cost of Goods Sold. Custo direto de material e mão de obra para entregar o serviço — recarga, deslocamento, hora técnica. Não inclui despesas fixas. |
| Margem bruta | Receita menos COGS, em % ou R$. |
| SLA | Service Level Agreement. Prazo prometido de **atendimento/diagnóstico** — por exemplo, "atendimento em até 48h" no plano Completo. **Não é o prazo de conclusão da correção**, que pode levar até 2 semanas. |
| ICP | Ideal Customer Profile. Aqui: condomínio, igreja grande, escola, restaurante. |
| Attach rate | % de clientes do plano de extintor que também compram o módulo de água (upsell). |
| Funil (de vendas) | Lista → Contatado → Em conversa → Proposta enviada → Fechado (ou Perdido). |
| Onboarding | Processo de "embarcar" um cliente novo: contrato, cadastro, cobrança, primeira visita. |
| Upsell | Vender um serviço adicional a um cliente que já está na base (ex.: módulo de água). |
| MVP | Minimum Viable Product. Versão mais simples de um serviço já vendável e testável. |
| CBMCE | Corpo de Bombeiros Militar do Estado do Ceará. Órgão que emite o Certificado de Conformidade (equivalente ao AVCB de outros estados). |

---

## FASE 0 — Arrumar a casa (antes de gastar em anúncio)

Pré-requisito. Anunciar com a oferta furada só queima dinheiro mais rápido.

### 0.1 Site
- [x] Trocar headline para conformidade + manutenção preventiva recorrente *(feito em 2026-06-29: os 3 slides do hero — `heroCarouselStrings.ts` — agora falam de conformidade e manutenção recorrente; removida menção a "Estudo de Risco" (fora do catálogo). Corrigido também bug colateral: os botões secundários do hero apontavam para `/#contact`, seção removida do HomePage — agora abrem WhatsApp com mensagem pré-preenchida, no padrão do resto do site)*
- [x] Usar **Certificado de Conformidade CBMCE** em todo o site (não AVCB/NR-23) — erro crítico de credibilidade *(corrigido em 2026-06-29: card "Visita Consultiva" e dados estruturados de SEO)*
- [x] Adicionar CNPJ visível *(rodapé: "Faço por Você - Serviços · CNPJ: 17.078.739/0001-19")* — **responsável técnico, registro CBMCE e selo INMETRO ficam de fora de propósito**: conforme Cláusula Primeira-A do contrato, a empresa não possui credenciamento próprio nesses itens; em vez disso, o site agora declara que ela **trabalha com empresas e profissionais certificados** (parceiro registrado no INMETRO para recarga, bombeiro civil habilitado para treinamento) — seção "Sobre" e schema.org
- [ ] Trocar e-mail genérico pelo domínio da marca — **mantido por ora a pedido do responsável**: `contato@felipesmoreira.com`
- [ ] Remover fotos duplicadas / conectar redes sociais reais ou remover ícones mortos — *(verificado em 2026-06-29: TeamSection e TestimonialSection, que usavam a foto repetida, estão comentadas em `HomePage.tsx` e não renderizam — sem urgência por ora. Resta resolver os ícones de Facebook/Instagram/YouTube no rodapé, que apontam para URLs genéricas sem handle — fica para depois, por decisão do responsável)*
- [x] Subir os cards de plano com preço e escopo atualizados (Vigia / Essencial / Completo) *(feito em 2026-06-29 — substituiu os planos antigos Residencial/Essencial/Intermediário/Premium)*
- [x] Criar bloco "Para empresas e condomínios" com CTA para WhatsApp — *(decisão em 2026-06-29: dispensado — os planos Essencial/Completo já são a oferta B2B; não cria seção separada)*
- [x] Cada botão de plano abre WhatsApp com mensagem pré-preenchida pelo nome do plano *(já implementado)*
- [x] Páginas de Política de Privacidade, Termos de Serviço e Política de Cookies *(criadas em 2026-06-29 em `/privacidade`, `/termos`, `/cookies` — os links do rodapé já apontavam para essas rotas e estavam quebrados; agora resolvidos. Conteúdo simples, alinhado à Cláusula Décima Terceira do contrato (LGPD) e à Cláusula Primeira-A (natureza de intermediação). Build, `tsc` e `eslint` passando sem erros)*

> **Log de implementação (2026-06-29):** planos do site (`pricingSectionStrings.ts`), formulário de contato e rodapé alinhados aos nomes/preços do contrato (Vigia, Essencial, Completo). Removido código morto: simulador de economia não renderizado (`SimuladorCard`/`SimuladorInputs`), arquivo `app/utils.tsx` duplicado, schema de SEO de um "simulador" que não existe no site, e teste `HomePage.test.tsx` que já estava quebrado (referenciava componentes inexistentes). `tsc --noEmit`, `eslint` e `jest` passando sem erros.
>
> **Log de implementação (2026-06-29, parte 2):** headline do hero reescrita para falar de conformidade e manutenção preventiva recorrente; corrigidos links mortos do hero que apontavam para `/#contact` (seção removida); confirmado que TeamSection/TestimonialSection não renderizam (sem ação necessária); dispensado bloco B2B separado (planos já cobrem esse público); criadas as 3 páginas legais (`/privacidade`, `/termos`, `/cookies`) via componente reutilizável `LegalContent`.

### 0.2 Oferta e preço
- [x] Confirmar Vigia: **R$99/ano** (valor único, todos os extintores do cliente), 5% off em avulsos, sem recarga
- [x] Confirmar Essencial: **R$11/extintor/mês** (anuidade = 2 meses grátis), 10% off em avulsos
- [x] Confirmar Completo: **R$18/extintor/mês** (anuidade = 2 meses grátis), 10% off em avulsos
- [x] Validar custos internos reais (recarga, deslocamento) contra a margem do plano — não vender no prejuízo

### 0.3 Operacional
- [ ] Escolher e testar ferramenta de cobrança recorrente (Pix automático / cartão / link) — sem isso, plano vira boleto que não paga
- [x] Ter o contrato em PDF pronto para assinar no primeiro fechamento
- [x] Confirmar quem assina como responsável técnico / credenciado CBMCE — exigência legal, não detalhe

---

## FASE 1 — Vender para quem já confia (semana 1-2, sem anúncio pago)

Grátis e mais rápido que qualquer campanha. Prova a oferta antes de investir em mídia.

- [ ] Listar carteira atual de clientes avulsos (usar tabela CRM abaixo)
- [ ] Listar rede de igrejas e contatos com comércio/condomínio/escola dentro dela — canal de indicação quente
- [ ] Enviar roteiro de abordagem por WhatsApp para toda a lista — ver script ao final do documento
- [ ] Meta: 10 a 20 planos fechados só com essa base — valida a oferta e gera depoimentos para os anúncios

---

## FASE 2 — Preparar para anunciar (semana 2-3)

- [ ] Criar/otimizar Google Business Profile (fotos, categoria, horário) — grátis, prioridade #1
- [ ] Pedir avaliação (review) aos primeiros clientes fechados na Fase 1
- [ ] Produzir 3-4 fotos/vídeos reais da equipe trabalhando — material de prova para o anúncio
- [ ] Definir ICP do anúncio: condomínio, restaurante, escola, igreja com campus grande — não residência solta, CAC não fecha
- [ ] Configurar pixel Meta e rastreamento de WhatsApp (qual anúncio gera qual conversa)

---

## FASE 3 — Subir os anúncios (semana 3-4)

- [ ] Google Search ativo (maior intenção, menor custo de aprendizado)
- [ ] Meta Ads geo-segmentado para o ICP
- [ ] Verba de teste reservada (não gastar tudo de uma vez) — rodar 2 semanas, medir CAC por canal
- [ ] Decidir o que escala com base no CAC medido
- [x] Página de destino dedicada para os anúncios *(criada em 2026-06-29: `/landingpage` — landing page de uma página só, seguindo a estrutura do `plano.md` §8, com header minimalista sem menu de navegação, hero estático com CTA único, bloco de confiança/conformidade, planos, diferencial de leitura de água com case da Igreja, tabela de avulsos, prova social leve e CTA final. A home institucional (`/`) não foi alterada — ver `plano.md` §8 para o status dela)*
- [ ] Confirmar autorização formal de uso de nome/logo dos clientes (Igreja, UNIATENEU etc.) antes de citá-los nominalmente em qualquer página — até lá, a seção "Prova social" de `/landingpage` usa apenas descrição genérica do segmento (igreja, instituição de ensino, restaurante, comércio), sem nomes próprios
- [ ] Apontar os anúncios (Google Search / Meta Ads) para `/landingpage`, não para `/`

> **NÃO fazer agora:** tocar em CRM/política/turismo/outros projetos · lançar plano sem cobrança automática resolvida.
>
> **Revisão (2026-06-30):** a restrição "bot só depois de 10-20 planos pagando" foi levantada por decisão do responsável — o trabalho no bot (`waclientmedidor`) está em andamento em paralelo ao esforço de vendas. O plano técnico do bot está em `/Users/felipemoreira/development/waclientmedidor/GUARDIAO_PLANO.md`.

---

## TABELA DE PLANOS — referência e status de publicação

| Plano | Valor | Recarga inclusa | Escopo resumido | Status |
|---|---|---|---|---|
| Vigia | R$ 99/ano (flat) | Não | Acompanhamento de vencimentos + canal direto/prioritário + 1 inspeção visual/ano + 5% off | |
| Essencial | R$ 11/extintor/mês | 1×/ano | Gestão de vencimentos + recarga no prazo + inspeção semestral + comprovante + 10% off | |
| Completo | R$ 18/extintor/mês | 1×/ano | Essencial + itens de desgaste (placa/lacre/suporte; mangote no preço avulso normal) + atendimento prioritário (48h) + guia CBMCE | 10% off |

*Status: preencher com [Rascunho / No site / Pausado] para cada plano.*

**Módulo Água (add-on, sob projeto):** disponível como adicional sobre o Completo, para clientes com hidrômetro (igrejas, escolas, condomínios grandes) — não é um plano fixo.

---

## VALORES DE MERCADO, CUSTO E LUCRO POR SERVIÇO

Preços de mercado pesquisados em praça urbana (Fortaleza/RMF, referência 2025-2026). Custo interno é estimativa de material + mão de obra + deslocamento amortizado — confirme com seus números reais e ajuste.

### 1. Serviços avulsos — mercado x seu preço x lucro

| Serviço | Preço de mercado | Seu preço | Custo interno | Lucro/margem |
|---|---|---|---|---|
| Recarga ABC 6kg | R$ 110 – 130 | R$ 120 | R$ 40 | R$ 80 (67%) |
| Recarga ABC 4kg | — | R$ 100 | R$ 40 | R$ 60 (60%) |
| Recarga BC 6kg | — | R$ 80 | R$ 40 | R$ 40 (50%) |
| Recarga BC 4kg | — | R$ 70 | R$ 40 | R$ 30 (43%) |
| Recarga CO₂ 6kg | R$ 180 – 220 | R$ 160 | R$ 110 | R$ 50 (31%) |
| Recarga CO₂ 4kg | — | R$ 130 | R$ 110 | R$ 20 (15%)** |
| Recarga água 10L | R$ 80 – 100 | R$ 85 | R$ 35 | R$ 50 (59%) |
| Inspeção técnica + laudo | R$ 80 – 150* | Grátis | R$ 15 | isca de entrada (−R$15) |
| Placa de sinalização instalada | R$ 30 – 60* | R$ 25 | R$ 18 | R$ 7 (28%) |
| Demarcação de solo | R$ 50 – 90* | **R$ 100** | R$ 20 | R$ 80 (80%) |
| Assessoria Certificado de Conformidade (CBMCE) | R$ 300 – 600* | R$ 390 | R$ 60 | R$ 330 (85%) |
| Treinamento in-company (até 15p / 4h) | R$ 1.500 – 4.000 | R$ 2.500 | R$ 1.500 | R$ 1.000 (40%) |

*\*Itens sem cotação de mercado pública específica encontrada na pesquisa — estimados por proporção a serviços similares. Confirme com 2-3 cotações reais de concorrentes antes de fixar definitivamente.*

*\*\*CO₂ 4kg usa o mesmo custo de carga do CO₂ 6kg na sua planilha de custo interno (verifique se o custo real do agente para a carga menor é proporcionalmente mais baixo — se for, a margem real é maior que a mostrada aqui).*

> **Removidos do catálogo padrão:** Estudo de risco / laudo técnico e Treinamento por pessoa (turma aberta). Quem precisar desses serviços é orçado caso a caso, fora desta tabela.

### 2. Margem por plano — cenário anuidade (visão anual)

| Plano | Receita/ano | Custo direto/ano* | Composição do custo | Margem |
|---|---|---|---|---|
| Vigia | R$ 99 (flat) | ~R$ 15 | 1 inspeção visual/ano + canal + bot (custo ~0) | ~R$ 84 + margem das recargas avulsas |
| Essencial | R$ 110 | ~R$ 55 | recarga R$40 + frete R$8 + inspeção 2x R$7 | ~R$ 45 (41%) |
| Completo | R$ 180 | ~R$ 89 | Essencial + itens de desgaste ~R$20 | ~R$ 91 (51%) |

*\*Custo direto = material + deslocamento roteirizado. Não inclui overhead (telefone, software, impostos) — subtraia separadamente para ver o lucro líquido real.*

### 3. Margem por extintor — cenário mensal cheio

| Plano | Receita/extintor/ano | Custo direto/ano* | Composição do custo | Margem |
|---|---|---|---|---|
| Essencial (mensal cheio) | R$ 132 | ~R$ 55 | recarga + frete + inspeção 2x | ~R$ 71 (54%) |
| Completo (mensal cheio) | R$ 216 | ~R$ 89 | Essencial + itens de desgaste | ~R$ 127 (59%) |

> **Atenção — diferença entre Essencial e Completo:** a recarga (maior custo unitário) não diferencia o tier. O que justifica o salto de R$11 para R$18/extintor é serviço gerenciado de baixo custo e alta percepção de valor: troca de itens de desgaste inclusa (placa, lacre, suporte; mangote no preço avulso normal), atendimento prioritário (SLA de 48h **para diagnóstico**, não para conclusão da correção), guia de orientação para regularização no CBMCE. Reforce esses pontos na conversa de venda — sem eles, o Completo perde a justificativa do preço mais alto.

### 4. Comparativo de margem (regra de decisão)

> **Regra de ouro:** a recarga (maior custo unitário) nunca deve diferenciar o tier do plano — quem diferencia margem é serviço de baixo custo e alta percepção de valor (inspeção, laudo, conformidade, painel, SLA). Quanto mais alto o plano, maior deve ser a proporção de serviço gerenciado sobre material consumido.

### 5. Calculadora rápida — preencha com seus custos reais

| Item | Custo real (R$) | Preço de venda (R$) | Lucro (R$) |
|---|---|---|---|
| | | | |
| | | | |
| | | | |
| | | | |
| | | | |
| | | | |

*Itens sugeridos para preencher: recarga ABC 6kg/12kg, recarga CO₂, deslocamento médio por visita, hora técnica, placa, demarcação, hora de treinamento, custo de assessoria de conformidade.*

---

## CRM — CARTEIRA E FUNIL DE VENDAS

Use esta tabela como seu CRM inicial. Copie para planilha (Google Sheets) se quiser automatizar.

### Funil — estágios

| Estágio | Significado |
|---|---|
| 1. Lista | Contato identificado (carteira, igreja, indicação, anúncio) |
| 2. Contatado | Mensagem/ligação enviada |
| 3. Em conversa | Respondeu, negociando |
| 4. Proposta enviada | Plano e preço apresentados |
| 5. Fechado | Contrato assinado, cobrança ativa |
| 6. Perdido | Recusou ou não respondeu (registrar motivo) |

### Planilha de clientes (preencher e atualizar semanalmente)

> **Regra para clientes com mais de um prédio/filial:** lance como UMA única linha (uma empresa = um cliente = um contrato), somando o total de extintores de todos os endereços na coluna "Nº ext." Não crie uma linha por prédio — isso infla o CRM e mascara o tamanho real da conta. Detalhe os endereços na tabela "Clientes multi-prédio" abaixo.

| Nome / Local | Contato | Origem | Nº ext. | Estágio | Plano / Obs. |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |

### Clientes multi-prédio — detalhamento de endereços

Para empresas com vários imóveis cobertos pelo mesmo contrato. Preencher um bloco por cliente, replicando linhas conforme o nº de endereços. *Corresponde ao Anexo III do contrato.*

| Cliente (empresa) | Endereço | Nº ext. | Obs. (acesso, contato local) |
|---|---|---|---|
| | | | |
| | | | |
| | | | |

*Some o total de extintores deste cliente em todos os endereços e reporte como um único valor na Planilha de clientes acima.*

---

## ANÚNCIOS — PLANEJAMENTO E CONTROLE

### Canais e prioridade

| Canal | Prioridade | Objetivo | Verba/mês |
|---|---|---|---|
| Google Business Profile | 1 (grátis) | Aparecer em busca local, gerar review | R$ 0 |
| Google Search | 2 | Capturar quem já busca (alta intenção) | |
| Meta (FB/IG) | 3 | Educar oferta + retargeting no ICP | |

### Anúncios — ângulos e textos (preencher headline final)

| Ângulo | Ideia de texto | Formato/Canal | Status |
|---|---|---|---|
| Aversão à perda — multa | Extintor vencido = multa e pontos na vistoria. Recarregamos hoje, em Fortaleza. | Google Search | |
| Aversão à perda — vistoria (B2B) | Seu Certificado de Conformidade vence junto com o extintor. A gente avisa antes. | Meta — lead ad síndicos/restaurantes | |
| Conveniência/recorrência | Você esquece. A gente lembra. Acompanhamento dos vencimentos a partir de R$99/ano. | Reels/IG | |
| Prova + confiança | Vídeo da equipe real + selo INMETRO + CNPJ + credenciado CBMCE | IG/FB | |
| Nicho restaurante | Fritadeira pega fogo e ABC não apaga. Sua cozinha precisa de Classe K. | Meta — público food service | |

### Controle de performance dos anúncios (atualizar semanalmente)

| Anúncio/Canal | Verba gasta | Cliques/Leads | Conversas WhatsApp | Fechados | CAC |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |

### Script de abordagem — carteira atual / rede de igrejas

> **WhatsApp:** Oi [nome], aqui é [seu nome] da Guardião — já cuidamos dos seus extintores antes. Agora a gente lançou um plano que cuida de tudo automaticamente: inspeção, recarga no prazo e a gente te avisa antes de vencer, sem você precisar lembrar. Posso te explicar em 2 minutos?

---

## PROCESSOS — DO LEAD AO CLIENTE ATIVO

### Checklist de onboarding de novo cliente
- [ ] Apresentar plano e preço pelo WhatsApp ou presencial
- [ ] Enviar/assinar contrato (PDF) — preencher Anexo II (e Anexo III se mais de 1 endereço)
- [ ] Cadastrar cliente no CRM (planilha) com estágio "Fechado"
- [ ] Ativar cobrança recorrente (Pix automático/cartão)
- [ ] Agendar visita de inventário (cadastro dos extintores)
- [ ] Cadastrar vencimentos no sistema de lembrete automático
- [ ] Enviar mensagem de boas-vindas com o que esperar do plano

### Checklist de execução recorrente (por visita)
- [ ] Confirmar agendamento por WhatsApp 1 dia antes
- [ ] Executar inspeção/recarga conforme escopo do plano
- [ ] Registrar laudo/relatório e enviar ao cliente
- [ ] Atualizar histórico no painel/planilha
- [ ] Verificar oportunidade de upsell (água, treinamento, conformidade)

### Checklist de cobrança
- [ ] Verificar pagamento no vencimento
- [ ] Em atraso: enviar lembrete automático no dia +1
- [ ] Em atraso +15 dias: suspender benefícios conforme contrato
- [ ] Registrar inadimplência no CRM

---

## CRONOGRAMA — 90 DIAS

| Período | Foco |
|---|---|
| Dias 1-15 | Site corrigido, oferta travada, cobrança recorrente testada, responsável técnico confirmado |
| Dias 1-30 | Vender para carteira + rede de igrejas. Meta: 10-20 planos pagantes. Subir Google Business Profile |
| Dias 30-60 | Expandir para indicação (condomínio/restaurante/escola). Testar upsell de água. Medir taxa de attach |
| Dias 60-90 | Sistematizar entrega (rotas, checklist, equipe). Decidir go/no-go da água como oferta autônoma |

### Metas por fase (preencher números reais)

| Indicador | Meta 30d | Meta 60d | Meta 90d |
|---|---|---|---|
| Planos ativos (qtd.) | | | |
| MRR (R$) | | | |
| Churn (%) | | | |
| CAC médio (R$) | | | |

---

## MÉTRICAS — PAINEL DE ACOMPANHAMENTO MENSAL

| Métrica | Mês 1 | Mês 2 | Mês 3 |
|---|---|---|---|
| | | | |
| | | | |
| | | | |
| | | | |

*Linhas sugeridas (siglas explicadas no Glossário): MRR e MRR novo · nº de planos ativos e ACV médio · margem bruta por plano · CAC por canal e payback em meses · churn de logo e de receita · % de inadimplência · taxa de attach do módulo de água · serviços por técnico-dia.*
