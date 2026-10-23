# Avaliação do Guardião Extintores — 23/10/2026

## Conclusão

O Guardião já tem uma base comercial utilizável: serviço local, preços, planos recorrentes, canais de contato e uma landing específica para anúncios. Comparado aos projetos recentes, a oportunidade principal é transformar essa apresentação em uma jornada conectada à operação que já está sendo construída no CRMIA e no Guardião Predial.

A recomendação é manter o site como a porta de entrada comercial, usar o CRMIA para atendimento e propostas e aproveitar o Guardião Predial para inventário, inspeções e relacionamento com condomínios. Essas conexões são propostas: não foram encontradas evidências de que a integração entre os três esteja pronta em produção.

## Escopo e limites

- Navegação real no site publicado: `/` em desktop e `/anuncio` em desktop e celular de 390 × 844.
- Leitura do código, textos comerciais, `plano.md`, `operacional.md` e `contrato.md` do Guardião.
- Comparação com documentação e trechos de implementação dos projetos locais CRMIA, Guardião Predial, Fluux, Meu Frete, CoopCRM e felipesmoreira.com.
- Os módulos descritos nos outros projetos não foram homologados ponta a ponta nem tratados como serviços já disponíveis a clientes.
- Sem acesso aos relatórios atuais de vendas ou de aquisição. As recomendações de conversão são hipóteses a medir; não há base para afirmar uma taxa de conversão ou retorno financeiro.
- Não foi realizada auditoria jurídica, de normas de incêndio, de segurança ou de conformidade do serviço.

## O que funciona e deve ser preservado

1. Separação entre home institucional e landing de anúncio. A landing tem CTA de inspeção gratuita e barra fixa de contato no celular.
2. Preços explícitos e oferta recorrente. Vigia, Essencial e Completo ajudam a apresentar continuidade, em vez de apenas uma recarga isolada.
3. Transparência sobre a recarga por parceiro registrado no INMETRO. Esse esclarecimento já existe na comunicação.
4. WhatsApp como canal de baixa fricção, com mensagem específica para cada plano em parte dos botões.
5. Instrumentação existente: eventos de clique no WhatsApp, ligação, visualização de seções e profundidade de rolagem.
6. Nas três navegações verificadas, as páginas retornaram HTTP 200, sem erro JavaScript capturado e sem rolagem horizontal. Isso não equivale a uma auditoria completa de acessibilidade ou desempenho.

## Comparação com os projetos recentes

| Projeto | Evidência observada | O que aproveitar no Guardião |
|---|---|---|
| CRMIA / Gabriel | Catálogo de extintores, coleta de necessidade/quantidade/local, confirmação do pedido, encaminhamento à equipe; consulta a equipamentos e pedidos de serviço | Dar continuidade ao pedido iniciado no site e distinguir compra, recarga e plano recorrente |
| Guardião Predial | Código de inventário com inspeções, próxima inspeção e alertas; fluxo de parceiros que liga contratação, fornecedor e avaliação | Usar o inventário para demonstrar a entrega do plano e participar do canal de fornecedores para condomínios |
| Fluux | Proposta centrada em uma tarefa, jornada progressiva e separação entre funções básicas e avançadas; documentação de preços vindos da API | Reduzir decisões no primeiro contato e ter uma fonte única de dados comerciais |
| felipesmoreira.com | Identidade visual própria, tokens centralizados e uma jornada explícita de participação | Criar uma linguagem visual própria para serviços técnicos e explicar o próximo passo após o CTA |
| Meu Frete | Roadmap orientado a confiança, profissionais verificados, orçamento e operação por cidade; várias etapas ainda planejadas | Mostrar quem executa, como funciona a retirada e quais localidades são efetivamente atendidas |
| CoopCRM | Documentação de operação com papéis, pedidos, triagem e distribuição de trabalho | Evoluir acompanhamento de serviço, responsável e estado do pedido quando houver demanda operacional |

O Guardião tem uma vantagem de contexto: serviço real e histórico de atendimento. Os sistemas recentes podem melhorar essa entrega. Não há necessidade de reproduzir toda a complexidade deles dentro deste site.

## Prioridade 1 — corrigir divergências comerciais

### Plano Completo

`src/lib/defaultStrings/pricingSectionStrings.ts` inclui “placa, lacre, suporte ou mangote”. O contrato e o operacional excluem o mangote e o cobram como avulso. O site também inclui pintura personalizada, ausente na descrição do plano no Anexo I do contrato.

Decisão necessária: definir a oferta vigente e aplicá-la no site, contrato, atendimento e orçamento. Não escolher automaticamente um documento como correto: os próprios documentos divergem.

### Preço de CO₂ 6 kg

A tabela da landing apresenta R$ 160; `contrato.md` apresenta R$ 190. O preço final deve ser definido pelo responsável e centralizado.

### Desconto no Completo

O contrato e o operacional indicam 10%; `plano.md` diz que não há desconto avulso; a nota da tabela pública cita somente Vigia e Essencial. Isso torna ambíguo “tudo do Essencial”.

### Limites da recarga inclusa

O site usa “até 6 kg”; o contrato detalha ABC/BC/água até 6 kg/10 L e trata CO₂ e Classe K separadamente. É preciso deixar tipos, capacidades e exclusões legíveis antes da contratação.

### Fonte única

Hoje os planos existem em textos de UI, na lista `planos` usada pelo SEO e em documentos independentes. Criar um catálogo comercial único com preço, unidade de cobrança, escopo, exclusões e condições de pagamento. Gerar dele os cards, o simulador, os dados estruturados e o conteúdo utilizado nas propostas. O JSON-LD atual informa valores sem explicar mensalidade por extintor versus anuidade por cliente.

## Prioridade 2 — alinhar o site ao atendimento

O site e `plano.md` dão destaque à manutenção recorrente. A documentação recente do CRMIA declara que Gabriel prioriza venda de extintores novos; recarga, inspeção e monitoramento são complementares.

Isso pode gerar uma quebra de expectativa: alguém pede inspeção gratuita e chega a uma conversa orientada a compra. Antes de anunciar mais, testar o número publicado e três jornadas reais, com identificação de teste e sem criar compromissos com clientes:

1. Quero recarregar um extintor.
2. Quero comprar extintores.
3. Quero manter os extintores do condomínio em dia.

Cada botão deve transportar serviço, plano e contexto do pedido. Preservar a origem da campanha no site e vinculá-la ao contato no CRM por um identificador não sensível; não publicar dados pessoais em URLs. Não foi encontrado código de captura e vinculação de UTM/GCLID ao lead nos componentes inspecionados.

O painel comercial deve distinguir: clique → conversa recebida → pedido qualificado → proposta → serviço vendido → adesão recorrente. Um clique no WhatsApp não comprova que houve conversa ou venda. A implementação dos eventos no site também não comprova sua configuração como conversão no Google Ads.

## Prioridade 3 — tornar a página mais convincente

### Primeira tela

A home tem um hero alto, carrossel e uma descrição que enumera muitos públicos. A landing mobile tem título de risco, um parágrafo longo e chamadas de contato, mas não mostra a execução real do serviço nessa primeira tela.

Proposta de mensagem para testar:

> Recarga e gestão de extintores em Fortaleza.
> Organize vencimentos, retirada e manutenção com acompanhamento pelo WhatsApp.

CTA contextual: “Solicitar orçamento” para recarga; “Agendar inspeção gratuita” para campanha de inspeção. Informar condições reais de gratuidade, área de atendimento e prazo de resposta confirmado pela operação.

### Prova visual

Substituir afirmações genéricas por fotos autorizadas de atendimento, exemplo anonimizado de relatório e histórico de manutenção. Mostrar parceiro executor e registro verificável quando disponíveis. Os atuais blocos de segmentos são descrições de público, não depoimentos nem resultados comprovados.

### Extensão e hierarquia

Na verificação, a landing mobile tinha cerca de 9.330 px de altura, aproximadamente 11 alturas de tela. Isso não prova abandono, mas justifica testar uma versão mais curta: promessa e CTA → como funciona → evidência real → serviço/preço → dúvidas → contato. Deixar o módulo de água em contexto próprio para quem tem essa necessidade.

### Identidade

Usar fotografia real, vermelho como ação/alerta e uma cor escura técnica para estrutura. Reduzir dependência de carrossel, efeitos de entrada e textos repetidos. Aproveitar a disciplina de tokens do site pessoal e do Guardião Predial, mantendo a identidade da marca de extintores.

### Confiança e contato

Remover ou substituir os links genéricos de Facebook, Instagram e YouTube. Explicar claramente a relação entre marca e razão social. O código atual já usa `contato@guardiaoextintores.com.br`; testar a caixa e o recebimento antes de considerar a pendência resolvida.

O banner de cookies é um aviso com botão “Entendi”; a implementação observada carrega Analytics independentemente dessa ação. Revisar a experiência de preferências e o comportamento efetivo da medição com a orientação apropriada. Esse achado técnico, sozinho, não é uma conclusão de conformidade legal.

## Melhorias de produto que valem testar

1. **Pré-orçamento curto:** serviço, quantidade, cidade/bairro e foto opcional. Gerar um resumo para o WhatsApp; deixar explícito quando o valor depende de avaliação.
2. **Simulador dos planos:** para 10 unidades, exibir Essencial R$ 110/mês ou R$ 1.100/ano à vista, e Completo R$ 180/mês ou R$ 1.800/ano, conforme os preços hoje publicados. Só calcular equipamentos elegíveis e explicar que CO₂/Classe K podem ter condições específicas. Esses exemplos não validam margem ou viabilidade dos planos.
3. **Exemplo do acompanhamento:** demonstrar um inventário fictício com equipamento, local, vencimento, última inspeção e próximo passo, claramente identificado como demonstração.
4. **Consulta de atendimento:** dar ao cliente estado do pedido e comprovantes pelo CRMIA ou pelo Guardião Predial, conforme a fonte responsável. Evitar cadastrar o mesmo equipamento de forma independente nos dois sistemas.
5. **QR no equipamento:** acesso autenticado ou por link protegido ao histórico relevante. Planejar identificação e permissões antes de publicar informações do prédio.
6. **Páginas por intenção:** recarga, compra e gestão para condomínios, com conteúdo e CTA próprios. Criar apenas quando houver oferta e operação correspondentes; evitar páginas artificiais por bairro.

## Sequência recomendada

| Etapa | Entrega | Evidência de conclusão |
|---|---|---|
| 1 | Resolver preço, mangote, desconto e escopo; retirar links genéricos | Site, proposta e contrato concordam nos mesmos exemplos |
| 2 | Validar WhatsApp e encaminhamento das três intenções | Cada pedido chega ao responsável com contexto correto |
| 3 | Reorganizar primeira tela e inserir evidência real | Jornada mobile compreensível e contatos acessíveis |
| 4 | Pré-orçamento e simulador | Totais corretos, condições explícitas e resumo aproveitável pela equipe |
| 5 | Conectar origem e resultado comercial | Relatório diferencia clique, conversa, proposta e venda |
| 6 | Piloto com CRMIA e Guardião Predial | Um cliente acompanha um serviço e um inventário sem recadastro duplicado |

## Critério de sucesso

Medir pedidos qualificados, tempo até primeira resposta humana, propostas enviadas, vendas, adesão aos planos e custo por venda quando houver mídia. Comparar uma alteração por vez com o histórico disponível. Não estabelecer metas percentuais sem uma linha de base.

Não há indicação, nas verificações realizadas, de que seja necessário reescrever o site ou migrar sua tecnologia para obter os primeiros ganhos. O trabalho prioritário está na coerência comercial, na prova da entrega e na continuidade entre aquisição, atendimento e operação.
