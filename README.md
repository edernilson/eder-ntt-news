# News Portal

Um portal de notícias moderno e responsivo desenvolvido com **Next.js 16**, **React 19** e **TypeScript**. O projeto foi concebido para oferecer uma experiência de leitura fluida, com suporte a categorização, busca em tempo real e design adaptável.

---

## 🚀 Tecnologias

As principais tecnologias utilizadas no desenvolvimento deste projeto foram:

- [**Next.js 16 (App Router)**](https://nextjs.org/) - Framework React para produção.
- [**React 19**](https://react.dev/) - Biblioteca para interfaces de usuário.
- [**TypeScript**](https://www.typescriptlang.org/) - Supersét de JavaScript com tipagem estática.
- [**Tailwind CSS 4**](https://tailwindcss.com/) - Framework CSS utilitário para estilização rápida.
- [**Emotion**](https://emotion.sh/docs/introduction) - Biblioteca para CSS-in-JS.
- [**Lucide React**](https://lucide.dev/) - Conjunto de ícones minimalistas.
- [**React Hook Form** & **Zod**](https://react-hook-form.com/) - Gerenciamento de formulários e validação de esquemas.
- [**Jest** & **React Testing Library**](https://jestjs.io/) - Suite de testes unitários e de integração.
- [**Husky** & **Commitlint**](https://typicode.github.io/husky/) - Automação de ganchos de commit e padronização de mensagens.

---

## ✨ Funcionalidades

- **🏠 Home Dinâmica**: Exibição de notícias em destaque, carrossel de webstories e últimas notícias.
- **📂 Categorização**: Navegação por categorias (Tecnologia, Esporte, Economia, etc.).
- **🔍 Busca em Tempo Real**: Filtro de notícias por termo de pesquisa.
- **📄 Detalhes da Notícia**: Páginas individuais otimizadas para leitura com slugs amigáveis.
- **📱 Design Responsivo**: Interface adaptável para dispositivos móveis, tablets e desktops.
- **⚡ Performance Otimizada**: Utilização de Server Components e otimização de imagens do Next.js.
- **🛠️ Simulação de API**: Serviço de notícias com atraso simulado (delay) para testes de estado de carregamento (Loading skeletons).

---

## 🛠️ Estrutura do Projeto

```text
src/
├── app/            # Rotas e páginas (Next.js App Router)
├── components/     # Componentes reutilizáveis (UI, Layout, Seções)
├── constants/      # Constantes e configurações de navegação
├── data/           # Dados estáticos e mocks (Base de notícias)
├── services/       # Lógica de consumo de dados (NewsService)
├── types/          # Definições de tipos TypeScript
└── styles/         # Arquivos de estilização global
```

---

## 🏁 Como Iniciar

### Pré-requisitos

- Node.js (v20 ou superior)
- NPM ou Yarn

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/eder-ntt-news.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```

### Execução

Para rodar o projeto em ambiente de desenvolvimento:
```bash
npm run dev
```
O portal estará disponível em `http://localhost:3000`.

---

## 🧪 Testes

O projeto utiliza Jest para garantir a qualidade do código. Para rodar os testes:

```bash
npm test
```

---

## 🤝 Padronização de Commits

Este projeto segue a convenção de [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) utilizando `commitlint` e `husky`.

Para realizar um commit padronizado, você pode utilizar o `commitizen`:
```bash
npm run commit
```

---

## 📝 Licença

Este projeto é de uso educacional e privado.
