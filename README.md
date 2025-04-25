# Guardião - Sistema de Gestão de Proteção Contra Incêndio

## 📋 Sobre
Sistema web completo para gestão de serviços de proteção contra incêndio, oferecendo planos de assinatura flexíveis e um simulador de custos personalizado para empresas de todos os portes.

## 🚀 Funcionalidades

- 🧯 Gestão completa de extintores (cadastro, manutenção, validade)
- 👀 Agendamento e controle de inspeções periódicas
- 🎯 Controle de sinalização e rotas de fuga
- 💰 Simulador de custos com parâmetros personalizáveis
- 📊 Planos de assinatura adaptados a diferentes necessidades
- 📱 Design responsivo para acesso em qualquer dispositivo
- 📈 Relatórios e estatísticas de conformidade

## 🛠️ Tecnologias

- [Next.js 14](https://nextjs.org/) - Framework React com renderização híbrida
- [React 18](https://reactjs.org/) - Biblioteca para construção de interfaces
- [TypeScript 5](https://www.typescriptlang.org/) - Superset tipado de JavaScript
- [TailwindCSS 3](https://tailwindcss.com/) - Framework CSS utilitário
- [Jest](https://jestjs.io/) - Framework de testes
- [ESLint](https://eslint.org/) - Linting e padronização de código

## 🏗️ Estrutura do Projeto

```
src/
  ├── app/            # Rotas e páginas da aplicação (Next.js App Router)
  ├── components/     # Componentes reutilizáveis
  │   ├── common/     # Componentes comuns (ex: SEO)
  │   ├── features/   # Componentes específicos de features
  │   ├── layout/     # Componentes de layout
  │   ├── sections/   # Seções da página principal
  │   └── ui/         # Componentes de UI reutilizáveis
  └── lib/            # Utilitários e funções auxiliares
```

## 💻 Pré-requisitos

- Node.js 18+ (recomendado 20 LTS)
- npm ou yarn

## ⚙️ Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/guardiao.git

# Entre no diretório
cd guardiao

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## 🧪 Testes

```bash
# Executa todos os testes
npm test

# Executa testes com watch mode
npm run test:watch
```

## 🌐 Uso

O sistema estará disponível em `http://localhost:3000`

## 📱 Páginas

- **Home**: Apresentação e informações gerais
- **Planos**: Opções de assinatura disponíveis
- **Simulador**: Cálculo de custos personalizado
- **Serviços**: Detalhes sobre serviços oferecidos
- **Sobre**: Informações sobre a empresa
- **Contato**: Formulário de contato e informações

## 👥 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

- Email: contato@guardiao.com.br
- WhatsApp: (11) 99999-9999
- Site: [www.guardiao.com.br](https://www.guardiao.com.br)

## ✨ Agradecimentos

- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [React](https://reactjs.org/)
- [Vercel](https://vercel.com/) - Plataforma de hospedagem