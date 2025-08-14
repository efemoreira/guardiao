# Configuração do Footer

## Estado Atual
O footer atualmente exibe apenas a coluna de contato, pois o site ainda está em desenvolvimento. As outras colunas estão preparadas e podem ser facilmente ativadas quando o conteúdo estiver pronto.

## Como Ativar Outras Colunas

Para ativar as outras colunas do footer, edite o arquivo `src/lib/defaultStrings/footerStrings.ts`:

### 1. Coluna de Serviços
```typescript
showServicesColumn: true, // Altere de false para true
```
Depois descomente e adicione links em:
```typescript
servicesColumn: {
  title: "Nossos Serviços",
  links: [
    { text: "Inspeção de Extintores", url: "/servicos/inspecao" },
    { text: "Recarga de Extintores", url: "/servicos/recarga" },
    // ... outros serviços
  ]
}
```

### 2. Coluna de Links Úteis
```typescript
showQuickLinksColumn: true, // Altere de false para true
```
Depois descomente e adicione links em:
```typescript
quickLinksColumn: {
  title: "Links Úteis",
  links: [
    { text: "Sobre Nós", url: "/sobre" },
    { text: "Contato", url: "/contato" },
    // ... outros links
  ]
}
```

### 3. Coluna de Newsletter
```typescript
showNewsletterColumn: true, // Altere de false para true
```

## Layout Adaptativo
O footer se adapta automaticamente ao número de colunas ativas:
- **1 coluna**: Centralizada em mobile, alinhada à esquerda em desktop
- **2 colunas**: 1 coluna em mobile, 2 em desktop
- **3 colunas**: 1 coluna em mobile, 3 em desktop
- **4 colunas**: 1 coluna em mobile, 2 em tablet, 4 em desktop

## Estrutura dos Arquivos
- `src/components/layout/Footer.tsx` - Componente principal do footer
- `src/lib/defaultStrings/footerStrings.ts` - Configurações e conteúdo do footer

## Observações
- Todos os links comentados já estão preparados com URLs de exemplo
- A funcionalidade do newsletter está implementada, precisando apenas ser conectada a um serviço de email
- As redes sociais estão configuradas e funcionais
- O WhatsApp está integrado com mensagem pré-definida
