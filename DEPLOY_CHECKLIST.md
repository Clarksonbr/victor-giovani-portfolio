# Checklist De Publicação

Use esta lista antes de publicar ou atualizar o portfólio.

## Antes Do GitHub

- [ ] Preencher links reais em `profileLinks` no arquivo `src/app/page.tsx`.
- [ ] Revisar nome, textos, contatos e oportunidades.
- [ ] Confirmar que botões sem link real aparecem como "em breve" ou desabilitados.
- [ ] Rodar `npm run lint`.
- [ ] Rodar `npm run build`.
- [ ] Confirmar que `.gitignore` ignora `node_modules`, `.next`, `.env` e `.vercel`.

## GitHub

- [ ] Criar um repositório no GitHub.
- [ ] Rodar `git init`, caso ainda não exista repositório local.
- [ ] Adicionar os arquivos com `git add .`.
- [ ] Criar o commit inicial.
- [ ] Configurar o remote.
- [ ] Enviar para a branch `main`.

## Vercel

- [ ] Importar o repositório na Vercel.
- [ ] Confirmar o framework como Next.js.
- [ ] Confirmar o comando de build `npm run build`.
- [ ] Confirmar que esta versão não exige variáveis de ambiente.
- [ ] Publicar o projeto.
- [ ] Revisar a versão desktop.
- [ ] Revisar a versão mobile.
- [ ] Testar botões de contato e botões de projetos.
