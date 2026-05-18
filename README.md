# Portfólio AI Builder

Landing page profissional para apresentar um perfil de Desenvolvedor Júnior / AI Automation Builder, com foco em IA, automações, integrações, MVPs, implementação técnica e desenvolvimento web.

## Objetivo

O portfólio foi criado para recrutadores, empresas e possíveis clientes entenderem rapidamente:

- O posicionamento profissional como desenvolvedor júnior em evolução.
- O uso prático de IA no fluxo de desenvolvimento.
- Os tipos de projetos que estão sendo construídos ou planejados.
- As habilidades técnicas e profissionais em desenvolvimento.
- As oportunidades buscadas: CLT, PJ, remoto ou híbrido.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- React
- Deploy futuro na Vercel

## Como Rodar Localmente

Instale as dependências:

```bash
npm install
```

Rode o servidor de desenvolvimento:

```bash
npm run dev
```

Abra no navegador:

```text
http://localhost:3000
```

## Scripts

```bash
npm run lint
npm run build
npm run start
```

## Estrutura Do Projeto

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
README.md
AI_WORKFLOW.md
```

- `src/app/page.tsx`: conteúdo principal da landing page, dados dos projetos, links de contato e componentes simples.
- `src/app/layout.tsx`: metadata e estrutura global da aplicação.
- `src/app/globals.css`: estilos globais e base visual do Tailwind.
- `AI_WORKFLOW.md`: documentação sobre o uso de IA no desenvolvimento do portfólio.

## Método AI-first

O site apresenta um fluxo de trabalho em que IA é usada para acelerar:

- Entendimento do problema.
- Planejamento.
- Estruturação da solução.
- Implementação.
- Revisão de código.
- Testes manuais.
- Documentação.
- Refatoração.
- Validação do valor real.

A IA ajuda a ganhar velocidade e clareza, mas as decisões, revisões e validações continuam humanas.

## Status Atual

- Landing page única criada.
- Copy refinada para empregabilidade.
- Seções de projetos, skills, oportunidades e contato implementadas.
- Links pessoais configuráveis no objeto `profileLinks`.
- Cards de projetos preparados para links futuros de GitHub e deploy.
- Layout responsivo e simples.

## Personalização

Os links de contato ficam em `src/app/page.tsx`:

```ts
const profileLinks = {
  github: "",
  linkedin: "",
  email: "",
  whatsapp: ""
};
```

Se um link estiver vazio, o botão correspondente aparece como indisponível.

## Próximos Passos

- Trocar os links vazios por GitHub, LinkedIn, email e WhatsApp reais.
- Criar repositórios para os projetos quando houver código público.
- Adicionar prints ou demonstrações dos projetos conforme forem evoluindo.
- Incluir um domínio profissional.
- Revisar textos com dados pessoais reais antes do deploy.

## Deploy

Esta primeira versão não exige variáveis de ambiente. O projeto pode ser publicado diretamente na Vercel depois de subir o repositório para o GitHub.

### Subir No GitHub

```bash
git init
git add .
git commit -m "Initial portfolio version"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
git push -u origin main
```

### Publicar Na Vercel

1. Crie um repositório no GitHub.
2. Envie o projeto para o repositório.
3. Acesse a Vercel e importe o repositório.
4. Confirme o framework como Next.js.
5. Use o comando de build padrão:

```bash
npm run build
```

6. Rode o deploy.
7. Configure domínio e variáveis de ambiente se forem necessárias no futuro.

## Checklist De Publicação

- Preencher links reais de GitHub, LinkedIn, email e WhatsApp em `profileLinks`.
- Revisar textos com dados pessoais reais.
- Rodar `npm run lint`.
- Rodar `npm run build`.
- Subir o projeto para o GitHub.
- Conectar o repositório na Vercel.
- Revisar a versão mobile depois do deploy.
- Testar botões e links públicos.
